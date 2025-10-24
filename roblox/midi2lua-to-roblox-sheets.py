import re

def parse_macro_one_line(raw):
    lines = raw.strip().splitlines()
    grouped = []
    current_group = []

    for line in lines:
        line = line.strip()
        if line.startswith("keypress"):
            match = re.search(r'keypress\("([^"]+)"', line)
            if match:
                key = match.group(1)
                current_group.append(key)
        elif line.startswith("rest"):
            if current_group:
                if len(current_group) == 1:
                    grouped.append(current_group[0])
                else:
                    grouped.append(f"[{''.join(current_group)}]")
                current_group = []

    if current_group:
        if len(current_group) == 1:
            grouped.append(current_group[0])
        else:
            grouped.append(f"[{''.join(current_group)}]")

    print(" ".join(grouped))

raw_macro = """Get it by using MIDI2LUA (https://hellohellohell0.com/midi2lua) and upload your .mid file, and it will detect BPM or put it in yourself. Once it's done, click 'Copy Script' and paste it here."""

parse_macro_one_line(raw_macro)
