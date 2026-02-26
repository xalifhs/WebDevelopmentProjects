import random


print(f'Welcome to the Hangman Game. Good luck')
 
someWords = '''apple banana mango strawberry 
orange grape pineapple apricot lemon coconut watermelon 
cherry papaya berry peach lychee muskmelon'''

someWords = someWords.split(' ')
random_word = random.choice(someWords)
final_choice = []
for i in range (int(len(random_word))):
    final_choice.append('_') 
print(final_choice)


players_guess = []
position = 0
while len(players_guess) < 8:
    new_letter = input("Type a letter:")
    players_guess.append(new_letter)
    pointer =[]
    n=0 
    flag = False
    for j in random_word :
        if new_letter == j:
            pointer.append(n)
            flag = True
        n+=1
    if flag == True :
        players_guess.pop()
        print(players_guess)
    else : 
        print(players_guess)
    for k in pointer:
        final_choice[k]=new_letter 
    print (final_choice)




print (players_guess)
print (random_word)