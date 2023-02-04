import csv

def main():
    with open('companies.csv', 'w', newline='') as file:
       writer = csv.writer(file)
       for x in 100:
           writer.writerow(["name", "Men's Average Salary", "Women's Average Salary"])

if __name__ == "__main__":
    main()