import csv
import random

def main():
    print("Hello World!!")

def write_salaries_to_csv(file_path):
    with open(file_path, 'w', newline='') as file:
				
        writer = csv.writer(file)
		    writer.writerow(['Company'])
        writer.writerow(['Salary'])
        for i in range(10):
        salary = random.randint(130000, 250001)
        writer.writerow([salary])

if __name__ == "__main__":
    main()
    
