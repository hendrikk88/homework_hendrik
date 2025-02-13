-- 1. Koosta SQL päring, mis tagastab kõik kasutajad kelle enabled on false 

SELECT *
FROM "user"
WHERE jsonb_extract_path_text(json::jsonb, 'enabled')::boolean = false;

-- 2. Koosta SQL päring, mis tagastab kõik kasutajad kelle authorityIds on tühi

SELECT * 
FROM "user" 
WHERE (json #>> '{authorityIds}')::jsonb = '[]'::jsonb;

-- 3. Koosta SQL päring, mis tagastab kõik kasutajad, kes on loodud 2024 aastal

SELECT * 
FROM "user" 
WHERE creation_date >= '2024-01-01 00:00:00' 
  AND creation_date < '2025-01-01 00:00:00';

/* 4. Uuenda andmed nii, et kõik kasutajad, kelle authorityIds on tühi muudetakse 
enabled väärtuseks false
*/

UPDATE "user"
SET json = jsonb_set(json::jsonb, '{enabled}', 'false'::jsonb)
WHERE json::jsonb -> 'authorityIds' = '[]';

-- Kontrollisin hiljem sarnaselt varasema scriptiga. Kolmel id-l on enabled = false nüüd.
SELECT * 
FROM "user" 
WHERE (json #>> '{authorityIds}')::jsonb = '[]'::jsonb;

-- 5. Koosta SQL päring, mis tagastab jsoni pretty kujul. Json prettyt saad testida siin: https://jsonformatter.curiousconcept.com/ kui annad formatimata jsoni rakendusele ette.

-- Eeldasin, et peate silmas jsonb_pretty funktsiooni. Järgneva päringuga saab iga 'user' tabelis oleva rea json-i ilusal kujul kätte. Hetkel teisi väljasi/argumente päringu sisse tooma ei hakkanud.
SELECT jsonb_pretty("json")
FROM "user";
