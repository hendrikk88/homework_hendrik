# Ettevõtte laenukäenduse lepingu kohustuste uuendamise protsess

Eesmärk on luua ja dokumenteerida protsess, mis haldab ettevõtte laenukäenduse lepingu kohustuste uuendamist, kui leping muutub kehtivaks. Hetkel puudub süsteemis lahendus, mis võimaldaks hallata kohustuste uuendamist vastavalt lepingu staatuse muutumisele "Kehtivaks"

## Protsessi ülesehitus

**Algne Protsessi Käivitamine:**
- Pank esitab lepingu süsteemi staatusega "Esitatud".
- Laenuhaldur vaatab lepingu üle ja muudab selle staatuseks "Kehtiv", mis käivitaks kohustuste uuendamise protsessi meie süsteemis

**Kohustuste Andmete Kontroll ja Võrdlus:**
- Süsteem tuvastab lepingu unikaalse identifikaatori põhjal.
- Süsteem kontrollib, kas kohustuste andmebaasis on juba olemas andmed sama lepingu kohta ning kohustused vajavad uuendamist.
- Süsteem võrdleb olemasolevaid andmeid lepingu uute andmetega, et tuvastada, millised väljad on muutunud.
- Ainult muutunud andmed salvestatakse uue sissekandena, et vältida andmete ülekirjutamist.

**Andmete Uuendamine Kohustuste Andmebaasis**
- Süsteem salvestab muutunud andmed uue sissekandena, jättes eelneva versiooni alles ajaloo säilitamiseks.
- Uuendatakse ainult relevantseid välju vastavalt äri nõuetele järgmises punktis.
- Kliendi koondvaates tuleb kuvada järgmised andmed:
    - Käenduslepingu number
    - Finantseerimise liik
    - Pank (laenu andja)
    - Laenujääk
    - Käendusjääk
    - Intressimäär (nt 6 kuu Euribor + 2%)
    - Lepingu algus- ja lõppkuupäev
    - Lepingu staatus
Süsteem kuvab uusima kehtiva versiooni andmetest, kuid hoiab alles ka ajaloolised muutused.

Protsessi loogika on üles ehitatud selliselt, et andmed uuendatakse ainult siis, kui need on muutunud, vältides eelmiste andmete üle kirjutamist. 

**Arendusprotsess**

1. Nõuete kogumine ja analüüs
   - Kaardistatakse ärilised ja tehnilised nõuded.
   - Määratletakse vajalikud andmevood ja süsteemide vahelised sõltuvused.

2. Tehniline kavandamine
   - Määratakse vajalikud andmemudeli muudatused.
   - Kavandatakse mehhanism lepingu staatuse muutuse tuvastamiseks.
   - Luuakse andmete valideerimise ja logimise lahendus.

3. Arendus
   - Rakendatakse loogika muutunud andmete tuvastamiseks ja uuendamiseks.
   - Lisatakse auditijälg ja logimine.
   - Integreeritakse süsteem kliendi koondvaatega.

4. Testimine
   - Kontrollitakse süsteemi toimivust ja vigade vältimist.
   - Testitakse, kas süsteem töötab sujuvalt teiste süsteemidega.
   - Veendutakse, et lahendus ei koorma süsteemi liigselt.

5. Kasutaja testimine (UAT)
   - Kasutajad kontrollivad, kas lahendus toimib ootuspäraselt.
   - Testitakse erinevaid stsenaariume reaalsete lepingutega.

6. Juurutamine ja järelvalve
   - Lahendus paigaldatakse tootmiskeskkonda.
   - Monitooritakse süsteemi käitumist ja logisid.
   - Vajadusel koolitatakse kasutajaid ja tehakse parandusi.
  
**Vastuvõetavad kriteeriumid**
- ☑ Süsteem uuendab ainult muutunud kohustuste andmeid, vältides ajalooliste andmete ülekirjutamist.
- ☑ Kliendi koondvaade kajastab alati kõige värskemaid käenduse lepingu andmeid.
- ☑ Kõik muudatused salvestatakse logidena auditijälje tagamiseks.
- ☑ Süsteem valideerib andmed enne uuendamist, vältides vigaste andmete sisestamist.
- ☑ Uuenduste töötlemine toimub efektiivselt, ilma süsteemi jõudlust halvendamata.
- ☑ Lahendus läbib kasutaja vastuvõtutestid (UAT) ja vastab ärinõuetele.

## Kokkuvõte
Lahendus tagab, et ettevõtte laenukäenduse lepingute kohustuste andmeid uuendatakse õigesti, arvestades ainult muutunud andmeid ning säilitades ajaloo. Süsteem täidab ärinõuded, tagab andmete terviklikkuse ning minimeerib käsitöövajadust, kasutades automatiseeritud protsessi.
