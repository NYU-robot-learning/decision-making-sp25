import re
import pytz
from ics import Calendar, Event
from datetime import datetime


COURSE_ID = "CSCI-GA 3033-090 Deep Decision Making and RL" 
COURSE_LOCATION = "Room 411, 31 Washington Pl (Silver Center)"

# Function to parse the markdown table
def parse_markdown_table(markdown):
    lines = markdown.strip().splitlines()
    syllabus = []

    table_start = 4 
    for line in lines[table_start:]:  # Skip the header lines
        if not line.strip() or line.startswith("---"):  # Stop if we reach the end
            continue

        columns = re.split(r'\s*\|\s*', line.strip())
        if len(columns) < 4:
            continue
        
        date = columns[1].strip()
        lectures = columns[2].strip()
        contents = re.sub(r'<br\s*/?>', '\n', columns[3].strip())
        readings = re.sub(r'<br\s*/?>', '\n', columns[4].strip())
        
        month, day = date.split("/")
        date_str = f"{month}/{day}/2025"

        # Append to the syllabus
        syllabus.append({
            "date": date_str,
            "lectures": lectures,
            "contents": contents,
            "readings": readings,
        })

    return syllabus


def generate_ics(syllabus, output_file="syllabus.ics"):
    calendar = Calendar()
    eastern = pytz.timezone('America/New_York')
    
    for item in syllabus:
        event_date = datetime.strptime(item["date"], "%m/%d/%Y")
        event_start = eastern.localize(event_date.replace(hour=16, minute=55))
        event_end = eastern.localize(event_date.replace(hour=18, minute=55))

        event = Event()
        event.name = f"[CSCI-GA 3033-090] {item['lectures']}"
        event.begin = event_start.isoformat()
        event.end = event_end.isoformat()
        event.description = item["lectures"]
        event.description += "\n\n" + item["contents"]
        event.description += "\n\n" + item["readings"]
        event.description = "\n".join([x.strip() for x in event.description.splitlines()])
        
        event.location = COURSE_LOCATION
        calendar.events.add(event)
    
    with open(output_file, "w") as f:
        f.writelines(calendar)
    
    print(f"ICS file generated successfully: {output_file}")

if __name__ == "__main__":
    with open("../docusaurus/website/src/pages/syllabus.md") as f:
        markdown_syllabus = f.readlines()
    markdown_syllabus = [x for x in markdown_syllabus if "|" in x]
    markdown_syllabus = "\n".join(markdown_syllabus)
    parsed_syllabus = parse_markdown_table(markdown_syllabus)

    generate_ics(parsed_syllabus)

