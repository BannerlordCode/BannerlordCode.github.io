---
title: "FaceGen"
description: "Auto-generated class reference for FaceGen."
---
# FaceGen

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGen : IFaceGen `
**Base:** IFaceGen
**Source:** TaleWorlds.MountAndBlade/FaceGen.cs

## Overview

Auto-generated stub for `FaceGen`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateInstance
`public static void CreateInstance()`

### GetMonster
`public Monster GetMonster(string monsterID)`

### GetMonsterWithSuffix
`public Monster GetMonsterWithSuffix(int race,string suffix)`

### GetBaseMonsterFromRace
`public Monster GetBaseMonsterFromRace(int race)`

### GetRandomBodyProperties
`public BodyProperties GetRandomBodyProperties(int race,bool isFemale,BodyProperties bodyPropertiesMin,BodyProperties bodyPropertiesMax,int hairCoverType,int seed,string hairTags,string beardTags,string tattooTags,float variationAmount)`

### GetBodyPropertiesWithAge
`public BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties,float age)`

### GetParamsFromBody
`public void GetParamsFromBody(ref FaceGenerationParams faceGenerationParams,BodyProperties bodyProperties,bool earsAreHidden,bool mouthIsHidden)`

### GetMaturityTypeWithAge
`public BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

### FlushFaceCache
`public static void FlushFaceCache()`

### GetRaceCount
`public int GetRaceCount()`

### GetRaceOrDefault
`public int GetRaceOrDefault(string raceId)`

### GetBaseMonsterNameFromRace
`public string GetBaseMonsterNameFromRace(int race)`

### GetRaceNames
`public string[] GetRaceNames()`

### GetHairIndicesByTag
`public int[] GetHairIndicesByTag(int race,int curGender,float age,string tag)`

### GetFacialIndicesByTag
`public int[] GetFacialIndicesByTag(int race,int curGender,float age,string tag)`

### GetTattooIndicesByTag
`public int[] GetTattooIndicesByTag(int race,int curGender,float age,string tag)`

### GetTattooZeroProbability
`public float GetTattooZeroProbability(int race,int curGender,float age)`

## See Also

- [Section index](../)
