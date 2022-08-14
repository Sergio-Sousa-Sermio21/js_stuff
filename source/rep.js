var c = 0;
while (c <= 3){
    console.log(`${c}`)
    c++;
}

//or
c = 0
do {
    console.log(`${c}`)
    c++;
} while(c <= 3)
var e = ['45', '2']
for (i = 0; i < 2; i++)
    console.log(e[i])

//array
var a = ['m','a','t','h']

for (i = 0; i<a.length; i++)
    console.log(a[i])

//simplified (objects and arrays(which are objects))
for (let i in a)
    console.log(a[i])

//serching a element of an array
console.log(a.indexOf('a'))