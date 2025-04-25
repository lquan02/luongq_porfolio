import openai

#Set up OpenAI API key
openai.api_key = "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"

def chatbot(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    return response['choices'][0]['message']['content']

# Chat loop
print("Chatbot is ready! Type 'exit' to quit.")
while True:
    user_input = input("You: ")
    if user_input.lower() == 'exit':
        break
    reply = chatbot(user_input)
    print("Bot:", reply)
