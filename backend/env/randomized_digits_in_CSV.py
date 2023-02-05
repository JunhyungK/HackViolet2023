import csv
import random

def main():
    with open('companies.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Name', 'Mens Average Salary', 'Womens Average Salary'])
        for x in range(100):
            writer.writerow([x, random.randint(150, 250), random.randint(100, 200)])
    return writer

if __name__ == "__main__":
    main()