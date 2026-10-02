---
title: "FaceGen"
description: "FaceGen 的自动生成类参考。"
---
# FaceGen

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGen : IFaceGen `
**Base:** IFaceGen
**Source:** TaleWorlds.MountAndBlade/FaceGen.cs

## 概述

`FaceGen` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/FaceGen.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateInstance
`public static void CreateInstance() `

### GetMonster
`public Monster GetMonster(string monsterID) `

### GetMonsterWithSuffix
`public Monster GetMonsterWithSuffix(int race,string suffix) `

### GetBaseMonsterFromRace
`public Monster GetBaseMonsterFromRace(int race) `

### GetRandomBodyProperties
`public BodyProperties GetRandomBodyProperties(int race,bool isFemale,BodyProperties bodyPropertiesMin,BodyProperties bodyPropertiesMax,int hairCoverType,int seed,string hairTags,string beardTags,string tattooTags,float variationAmount) `

### GetBodyPropertiesWithAge
`public BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties,float age) `

### GetParamsFromBody
`public void GetParamsFromBody(ref FaceGenerationParams faceGenerationParams,BodyProperties bodyProperties,bool earsAreHidden,bool mouthIsHidden) `

### GetMaturityTypeWithAge
`public BodyMeshMaturityType GetMaturityTypeWithAge(float age) `

### FlushFaceCache
`public static void FlushFaceCache() `

### GetRaceCount
`public int GetRaceCount() `

### GetRaceOrDefault
`public int GetRaceOrDefault(string raceId) `

### GetBaseMonsterNameFromRace
`public string GetBaseMonsterNameFromRace(int race) `

### GetRaceNames
`public string[] GetRaceNames() `

### GetHairIndicesByTag
`public int[] GetHairIndicesByTag(int race,int curGender,float age,string tag) `

### GetFacialIndicesByTag
`public int[] GetFacialIndicesByTag(int race,int curGender,float age,string tag) `

### GetTattooIndicesByTag
`public int[] GetTattooIndicesByTag(int race,int curGender,float age,string tag) `

### GetTattooZeroProbability
`public float GetTattooZeroProbability(int race,int curGender,float age) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
