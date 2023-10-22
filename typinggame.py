import random
import time

def get_random_word():
    word_list = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"]
    return random.choice(word_list)

def main():
    print("タイピングゲームを始めます。Enterを押して開始してください。")
    input("Enterを押すとスタートします。")
    
    while True:
        word = get_random_word()
        print("タイプ: " + word)
        
        start_time = time.time()
        user_input = input()
        end_time = time.time()
        
        if user_input == word:
            elapsed_time = end_time - start_time
            print(f"正解！時間: {elapsed_time:.2f}秒")
        else:
            print("不正解。もう一度挑戦してください。")

        play_again = input("もう一度プレイしますか？ (y/n): ")
        if play_again.lower() != 'y':
            break

if __name__ == "__main__":
    main()
