import os


def read_and_write(file_path, output_file):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        output_file.write(content)
        output_file.write("\n\n")  # Add a newline for separation between files


# Get the current directory
current_directory = os.getcwd()
# Output file
outpur_directory = os.path.join(current_directory, 'sandbox')
output_filepath = os.path.join(outpur_directory, 'content.txt')

# Read and store package.json
package_json_path = os.path.join(current_directory, 'package.json')
with open(package_json_path, 'r', encoding='utf-8') as package_file:
    package_content = package_file.read()

# Open the output file in write mode
with open(output_filepath, 'w', encoding='utf-8') as output_file:
    # Write package.json content to output file
    output_file.write(package_content)
    output_file.write("\n\n")  # Add a newline for separation between files

    # Loop through the files in the current directory
    crawler_directory = os.path.join(current_directory, 'src')
    for root, dirs, files in os.walk(crawler_directory):
        for file in files:
            if file.endswith('.ts') or file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                read_and_write(file_path, output_file)

print("Content from package.json, .ts, and .tsx files has been written to content.txt")


# ---------------
"""
go through the whole codebase and write proper readme file for the anyone to understand the following things.

1. how to run the app
2. What are the possibilites
3. Requirements to run the app

feel free to add contextual info including this in a very short and crisp form.

Right the readme file in a proper markdown format so that I can simply copy paste it to readme.md file
"""
# ---------------
