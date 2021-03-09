
import sqlite3
connection = sqlite3.connect("McMCompany.db")
crsr = connection.cursor() 
crsr.execute("""SELECT   DD.DistributorID,DD.AlbumID, DD.Category, COUNT(DD.Category) AS TotalSold#
FROM Downloads DD
INNER JOIN MusicAlbum
ON DD.AlbumID=MusicAlbum.AlbumID
INNER JOIN 
    (SELECT DistributorID, MAX(Quantity) AS MaxDateTime
    FROM OrderDetails
    GROUP BY DistributorID) groupedDD 
ON DD.DistributorID = groupedDD.DistributorID 
AND DD.Quantity = groupedDD.MaxDateTime
Group By DD.DistributorID;
ORDER BY TotalSold# DESC;""")
distributor=crsr.fetchall()
distributorAudio=0
albumVideo=0
albumAudio=0
distributorVideo=0
gotAudio=False
gotVideo=False
for i in distributor:
    if(not(gotAudio) or not(gotVideo)):
        if(distributor[i][1]=="Audio" and gotAudio==False):
            distributorAudio=distributor[i][0]
            albumAudio=distributor[i][1]
            gotAudio=True
        elif(distributor[i][1]=="Video" and gotVideo==False):
            distributorVideo=distributor[i][0]
            albumVideo=distributor[i][1]
            gotVideo=True
    else:
        break

crcr.execute("""Select GroupID
From MusicGroup
Where AlbumID=albumAudio OR AlbumID=albumVideo;""")
GID=crsr.fetchall()
##mylist = list(dict.fromkeys(mylist))
memberID=[]
for i in GID:
    crsr.execute("""SELECT MemberID 
    From WorksIn 
    Where GroupID=%s""",i)
    MID=crcr.fetchall()
    for j in MID:
        memberID.append(j)
memberID= list(dict.fromkeys(memberID))
print("""
Distributor who Sold Maximum Video Albums is : %s
Distributor who Sold Maximum Audio Albums is : %s
Members Involved in creating these albums: %s
""" % (distributorVideo, distributorAudio,memberID))

connection.close()



        