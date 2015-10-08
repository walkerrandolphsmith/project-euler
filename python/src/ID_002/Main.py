def F(n):
	return int(((1+5**(1/2.0))**n-(1-5**(1/2.0))**n)/(2**n*5**(1/2.0)))

result, p, i = 0, 0, 0
while (p<4000000):
	p = F(i)
	if p%2==0:
		result += p
	i += 1;

f=open('testfile.dat', 'w+')
print >> f, result