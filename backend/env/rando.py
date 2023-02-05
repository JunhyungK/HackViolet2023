import pandas as pd
import csv
import random
def parse_file():
    df = pd.read_csv('datas.csv', skiprows=1)
    #print(df)

def parse_text():

    textFile = pd.read_csv('random_names.txt')
    arr = textFile.to_numpy()
    return arr

def main():
    with open('companies.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Name', ' Mens Average Salary', ' Womens Average Salary'])
        newArr = parse_text()
        for idx in range(100):
            writer.writerow([newArr[idx], random.randint(150, 250), random.randint(100, 200)])
    return writer

if __name__ == "__main__":
    main()
parse_text()