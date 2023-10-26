from scapper import response2
from bs4 import BeautifulSoup

soup = BeautifulSoup(response2, 'html.parser')

elements =  map( lambda x: x.div ,soup.find_all('div', class_='Z35BWOA10YGn5uc9YgAp'),)

header_elements =[

]
for element in elements:
    soup2 = BeautifulSoup(str(element), 'html.parser')
    # soup2.find('div', class_='jvWzgRWM_y_9FFTYRCcB')
    header_elements.append({
        "image": soup2.find('img', class_='mMx2LUixlnN_Fu45JpFB WWDxafTPs4AgThdcX5jN Yn2Ei5QZn19gria6LjZj')["src"],
        "title": soup2.find('p', class_='Type__TypeElement-sc-goli3j-0 bkjCej EzRmGRncgnv1zFgF4dqE').text,
    })
    # print(soup2.find('img', class_='mMx2LUixlnN_Fu45JpFB WWDxafTPs4AgThdcX5jN Yn2Ei5QZn19gria6LjZj')["src"])
    # print(soup2.find('p', class_='Type__TypeElement-sc-goli3j-0 bkjCej EzRmGRncgnv1zFgF4dqE').text)


print(header_elements)
