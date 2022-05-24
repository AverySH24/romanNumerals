def to_roman(num):
    output = ''
    order = ['M', 'CM', 'D', 'C','VL', 'L','XL', 'X','IX', 'V','IV', 'I']
    lib = {
        'I': 1,
        'IV':4,
        'V':5, 
        'IX':9, 
        'X':10,
        'XL':40,
        'L':50,
        'VL':90,
        'C': 100,
        'D':500,
        'CM':900,
        'M':1000
    }
    for x in order:
        while (num/lib.get(x)>=1):
                output = output + x
                num = num - lib.get(x)
    return output