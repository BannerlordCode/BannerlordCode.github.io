---
title: "FaceGen"
description: "FaceGen：TaleWorlds.MountAndBlade 的 public 类，继承 IFaceGen；公开成员 17 个（方法 17、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/FaceGen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FaceGen

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FaceGen : IFaceGen`
**File:** `TaleWorlds.MountAndBlade/FaceGen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

FaceGen 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FaceGen.cs。它是一个 public 类，实现/继承 IFaceGen，继承链为 FaceGen → IFaceGen。public/protected 成员共 17 个：17 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FaceGen 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 FaceGen → IFaceGen。成员构成以方法为主（方法 17/17，属性 0/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FaceGen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateInstance` | `public static void CreateInstance()` | 方法 |
| `GetMonster` | `public Monster GetMonster(string monsterID)` | 方法 |
| `GetMonsterWithSuffix` | `public Monster GetMonsterWithSuffix(int race, string suffix)` | 方法 |
| `GetBaseMonsterFromRace` | `public Monster GetBaseMonsterFromRace(int race)` | 方法 |
| `GetRandomBodyProperties` | `public BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount)` | 方法 |
| `GetBodyPropertiesWithAge` | `public BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)` | 方法 |
| `GetParamsFromBody` | `public void GetParamsFromBody(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthIsHidden)` | 方法 |
| `GetMaturityTypeWithAge` | `public BodyMeshMaturityType GetMaturityTypeWithAge(float age)` | 方法 |
| `FlushFaceCache` | `public static void FlushFaceCache()` | 方法 |
| `GetRaceCount` | `public int GetRaceCount()` | 方法 |
| `GetRaceOrDefault` | `public int GetRaceOrDefault(string raceId)` | 方法 |
| `GetBaseMonsterNameFromRace` | `public string GetBaseMonsterNameFromRace(int race)` | 方法 |
| `string[]GetRaceNames` | `public string[]GetRaceNames()` | 方法 |
| `int[]GetHairIndicesByTag` | `public int[]GetHairIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `int[]GetFacialIndicesByTag` | `public int[]GetFacialIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `int[]GetTattooIndicesByTag` | `public int[]GetTattooIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `GetTattooZeroProbability` | `public float GetTattooZeroProbability(int race, int curGender, float age)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IFaceGen](../../core-extra/IFaceGen/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
