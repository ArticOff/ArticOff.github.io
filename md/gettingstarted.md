# Getting Started

When you've installed Mars, you can reach it by typing mars in a command prompt.

`mars`

it's normal the mars returns you an error, it waits an argument file.

You need to create a .mars file and open it.

Type the following text inside of your .mars file and run it by typing `mars yourfilename.mars`
```
x = 10
print x
```

It should return `10`.
Here, you've created a variable called `x` with the value of `10`.
After that, you called the function `print` with the value of `x`.

Pretty simple right ?

It looks like Python or a random programming languages but unlike these, it doesn't have strings, conditions, OOP...
It is just a math interpreter.

Well, our interpreter is designed to be very simple and intuitive like Maths so, you can do things like this

Pythagorean theorem
```
pythagorean(a, b) = (a**2 + b**2) ** 1/2

input x
input y

print pythagorean(x, y)
```

Make graphics
```
f(x) = (2*x - 3)(-3-5*x)
g : x -> (5*x-9)/(3-x)

graphic[f, g]
```

Constants
```
use const

pi = const[pi]
radToDegree(x) = 180/pi * x

print radToDegree(55)

e = const[e]
i = const[i]

print 0 == e**(i * pi) + 1
```

It is also possible to create modules

```
// mymodule.mars

f(x) = (x ** 2)/(x ** 3) * x
```

```
// main.mars

use mymodule.mars

myfunc = mymodule[f]

print myfunc(5)
```