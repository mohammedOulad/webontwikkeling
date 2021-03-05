function reverseString  (a:string) {
    var reversedWord ="";
    for (let i = a.length -1;i >= 0;i--)
    {
        reversedWord = reversedWord + a[i];
    }
    return reversedWord;
    }
    console.log(reverseString("hello"));