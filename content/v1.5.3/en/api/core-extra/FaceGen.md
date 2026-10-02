---
title: "FaceGen"
description: "Auto-generated class reference for FaceGen."
---
# FaceGen

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class FaceGen `
**Base:** System.Object
**Source:** TaleWorlds.Core/FaceGen.cs

## Overview

Auto-generated stub for `FaceGen`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetInstance
`public static void SetInstance(IFaceGen faceGen)`

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race,bool isFemale,BodyProperties bodyPropertiesMin,BodyProperties bodyPropertiesMax,int hairCoverType,int seed,string hairTags,string beardTags,string tatooTags,float variationAmount)`

### GetRaceCount
`public static int GetRaceCount()`

### GetRaceOrDefault
`public static int GetRaceOrDefault(string raceId)`

### GetBaseMonsterNameFromRace
`public static string GetBaseMonsterNameFromRace(int race)`

### GetRaceNames
`public static string[] GetRaceNames()`

### GetMonster
`public static Monster GetMonster(string monsterID)`

### GetMonsterWithSuffix
`public static Monster GetMonsterWithSuffix(int race,string suffix)`

### GetBaseMonsterFromRace
`public static Monster GetBaseMonsterFromRace(int race)`

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties,int race,ref BodyProperties motherBodyProperties,ref BodyProperties fatherBodyProperties)`

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties,int hair,int beard,int tattoo)`

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties,int build,int weight)`

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties,int skinColor,int hairColor,int eyeColor)`

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties,float age)`

### GetMaturityTypeWithAge
`public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

### GetHairIndicesByTag
`public static int[] GetHairIndicesByTag(int race,int curGender,float age,string tag)`

### GetFacialIndicesByTag
`public static int[] GetFacialIndicesByTag(int race,int curGender,float age,string tag)`

### GetTattooIndicesByTag
`public static int[] GetTattooIndicesByTag(int race,int curGender,float age,string tag)`

### GetTattooZeroProbability
`public static float GetTattooZeroProbability(int race,int curGender,float age)`

## See Also

- [Section index](../)
