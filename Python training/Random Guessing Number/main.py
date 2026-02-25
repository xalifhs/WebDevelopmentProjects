import random

print("Hi there, Welcome to the guessing number game... \n You got 8 chances to figure out the number. Good Luck")

low = int(input("Please define the lowest bound: "))
high = int (input("Please define the highest bound: "))

random_number = random.randint(low,high)
print ("Take your first guess :")

n=0 

while n<8  :
    n+=1
    user_guess = int(input())

    if user_guess == random_number :
        print(f"You got it !! Nice work you needed {n} attempts")
        break
    elif n==8 :
        print(f'Sorry better luck next time')
    elif user_guess > random_number : 
        print(f'Too high mate')
    elif user_guess < random_number :
        print(f'Too low my friend')
        