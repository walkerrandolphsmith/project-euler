f=open('testfile.dat', 'w+')
print >> f, sum([x for x in range(1000) if x%3==0 or x%5==0])
