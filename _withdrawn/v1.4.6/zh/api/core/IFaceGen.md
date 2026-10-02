---
title: "IFaceGen"
description: "IFaceGen：TaleWorlds.Core 的 public 接口；公开成员 18 个（方法 18、属性 0、字段 0）。源文件 TaleWorlds.Core/IFaceGen.cs。"
---
# IFaceGen

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IFaceGen`
**File:** `TaleWorlds.Core/IFaceGen.cs`

## 概述

IFaceGen 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/IFaceGen.cs。它是一个 public 接口，继承链为 IFaceGen。public/protected 成员共 18 个：18 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IFaceGen 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 IFaceGen。成员构成以方法为主（方法 18/18，属性 0/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/IFaceGen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetRandomBodyProperties` | `BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount);` | 方法 |
| `GenerateParentBody` | `void GenerateParentBody(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties);` | 方法 |
| `SetBody` | `void SetBody(ref BodyProperties bodyProperties, int build, int weight);` | 方法 |
| `SetHair` | `void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo);` | 方法 |
| `SetPigmentation` | `void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor);` | 方法 |
| `GetBodyPropertiesWithAge` | `BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age);` | 方法 |
| `GetMaturityTypeWithAge` | `BodyMeshMaturityType GetMaturityTypeWithAge(float age);` | 方法 |
| `GetRaceCount` | `int GetRaceCount();` | 方法 |
| `GetRaceOrDefault` | `int GetRaceOrDefault(string raceId);` | 方法 |
| `GetBaseMonsterNameFromRace` | `string GetBaseMonsterNameFromRace(int race);` | 方法 |
| `string[]GetRaceNames` | `string[]GetRaceNames();` | 方法 |
| `GetMonster` | `Monster GetMonster(string monsterID);` | 方法 |
| `GetMonsterWithSuffix` | `Monster GetMonsterWithSuffix(int race, string suffix);` | 方法 |
| `GetBaseMonsterFromRace` | `Monster GetBaseMonsterFromRace(int race);` | 方法 |
| `int[]GetHairIndicesByTag` | `int[]GetHairIndicesByTag(int race, int curGender, float age, string tag);` | 方法 |
| `int[]GetFacialIndicesByTag` | `int[]GetFacialIndicesByTag(int race, int curGender, float age, string tag);` | 方法 |
| `int[]GetTattooIndicesByTag` | `int[]GetTattooIndicesByTag(int race, int curGender, float age, string tag);` | 方法 |
| `GetTattooZeroProbability` | `float GetTattooZeroProbability(int race, int curGender, float age);` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
