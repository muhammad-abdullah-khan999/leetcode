def repeatedCharacter():
    try:
        s = input("Input your Keyword : ").strip('"').lower()
        seen = []
        repchar = []
        for char in s:
            if char in seen:
                repchar.append(char)
                break
            seen.append(char)
        if repchar:
            print(f"The first character that repeated is: {repchar[0]}")
        else:
            print("No character is repeated.")

    except Exception as e:
        print(f"Error occurred: {e}")
repeatedCharacter()