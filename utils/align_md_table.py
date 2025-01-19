import re

def align_markdown_table(table):
    lines = table.strip().splitlines()

    # Split each line into columns based on '|'
    split_lines = [re.split(r'\s*\|\s*', line.strip()) for line in lines]

    # Find the maximum width of each column
    col_widths = [max(len(cell) for cell in col) for col in zip(*split_lines)]

    # Rebuild the table with aligned columns
    aligned_lines = []
    for line in split_lines:
        aligned_line = " | ".join(cell.ljust(width) for cell, width in zip(line, col_widths))
        aligned_lines.append(f"| {aligned_line} |")

    return "\n".join(aligned_lines)

f = open("syllabus.md")
x = f.read()
x = align_markdown_table(x)
f.close()
f = open("syllabus_aligned.md", "w")
f.write(x)
f.close()
