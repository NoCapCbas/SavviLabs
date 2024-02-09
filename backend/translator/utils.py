import requests
import json
import pandas as pd

def list_helsinki_nlp_models(search_text):
    # Hugging Face Model Hub URL
    url = "https://huggingface.co/api/models"
    
    # Parameters for the query
    params = {
        "search": search_text,  # Filter for Helsinki-NLP models
        "limit": 87  # Number of results to return per request (adjust as needed)
    }

    # Make the request
    response = requests.get(url, params=params)

    if response.status_code == 200:
        # Parse the response
        models = response.json()
        
        # Extract model names
        model_names = [model['modelId'] for model in models]

        return model_names
    else:
        print(f"Failed to retrieve models. Status code: {response.status_code}")
        return []


if __name__ == '__main__':
    source_language = ''
    helsinki_nlp_models = list_helsinki_nlp_models(search_text=f"Helsinki-NLP/opus-mt-tc-big-")
    df = pd.DataFrame(columns=['MODEL', 'SRC_LANG', 'TRGT_LANG'])
    for model in helsinki_nlp_models:
        split_model = model.split('-')
        row = [model, split_model[-2], split_model[-1]]
        df.loc[len(df)] = row

    print(df)


    
