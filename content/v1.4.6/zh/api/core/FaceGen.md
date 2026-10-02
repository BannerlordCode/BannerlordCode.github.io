---
title: "FaceGen"
description: "FaceGen：TaleWorlds.Core 的 public 类；公开成员 23 个（方法 19、属性 0、字段 4）。源文件 TaleWorlds.Core/FaceGen.cs。"
---
# FaceGen

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class FaceGen`
**File:** `TaleWorlds.Core/FaceGen.cs`

## 概述

FaceGen 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/FaceGen.cs。它是一个 public 类，继承链为 FaceGen。public/protected 成员共 23 个：19 方法、4 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FaceGen 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 FaceGen。成员构成以方法为主（方法 19/23，属性 0/23），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/FaceGen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetInstance` | `public static void SetInstance(IFaceGen faceGen)` | 方法 |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)` | 方法 |
| `GetRaceCount` | `public static int GetRaceCount()` | 方法 |
| `GetRaceOrDefault` | `public static int GetRaceOrDefault(string raceId)` | 方法 |
| `GetBaseMonsterNameFromRace` | `public static string GetBaseMonsterNameFromRace(int race)` | 方法 |
| `string[]GetRaceNames` | `public static string[]GetRaceNames()` | 方法 |
| `GetMonster` | `public static Monster GetMonster(string monsterID)` | 方法 |
| `GetMonsterWithSuffix` | `public static Monster GetMonsterWithSuffix(int race, string suffix)` | 方法 |
| `GetBaseMonsterFromRace` | `public static Monster GetBaseMonsterFromRace(int race)` | 方法 |
| `GenerateParentKey` | `public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)` | 方法 |
| `SetHair` | `public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)` | 方法 |
| `SetBody` | `public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)` | 方法 |
| `SetPigmentation` | `public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)` | 方法 |
| `GetBodyPropertiesWithAge` | `public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)` | 方法 |
| `GetMaturityTypeWithAge` | `public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)` | 方法 |
| `int[]GetHairIndicesByTag` | `public static int[]GetHairIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `int[]GetFacialIndicesByTag` | `public static int[]GetFacialIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `int[]GetTattooIndicesByTag` | `public static int[]GetTattooIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `GetTattooZeroProbability` | `public static float GetTattooZeroProbability(int race, int curGender, float age)` | 方法 |
| `MonsterSuffixSettlement` | `public const string MonsterSuffixSettlement` | 字段 |
| `MonsterSuffixSettlementSlow` | `public const string MonsterSuffixSettlementSlow` | 字段 |
| `MonsterSuffixSettlementFast` | `public const string MonsterSuffixSettlementFast` | 字段 |
| `MonsterSuffixChild` | `public const string MonsterSuffixChild` | 字段 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
