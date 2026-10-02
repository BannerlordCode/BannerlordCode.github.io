---
title: "MBBodyProperties"
description: "MBBodyProperties：TaleWorlds.MountAndBlade 的 public 类；公开成员 32 个（方法 30、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MBBodyProperties.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBBodyProperties

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBBodyProperties`
**File:** `TaleWorlds.MountAndBlade/MBBodyProperties.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MBBodyProperties 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBBodyProperties.cs。它是一个 public 类，继承链为 MBBodyProperties。public/protected 成员共 32 个：30 方法、1 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBBodyProperties 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MBBodyProperties。成员构成以方法为主（方法 30/32，属性 1/32），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBBodyProperties.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetNumEditableDeformKeys` | `public static int GetNumEditableDeformKeys(int race, bool initialGender, int age)` | 方法 |
| `GetParamsFromKey` | `public static void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthHidden)` | 方法 |
| `GetParamsMax` | `public static void GetParamsMax(int race, int curGender, int curAge, ref int hairNum, ref int beardNum, ref int faceTextureNum, ref int mouthTextureNum, ref int faceTattooNum, ref int soundNum, ref int eyebrowNum, ref float scale)` | 方法 |
| `GetZeroProbabilities` | `public static void GetZeroProbabilities(int race, int curGender, float curAge, ref float tattooZeroProbability)` | 方法 |
| `ProduceNumericKeyWithParams` | `public static void ProduceNumericKeyWithParams(FaceGenerationParams faceGenerationParams, bool earsAreHidden, bool mouthIsHidden, ref BodyProperties bodyProperties)` | 方法 |
| `TransformFaceKeysToDefaultFace` | `public static void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)` | 方法 |
| `ProduceNumericKeyWithDefaultValues` | `public static void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties, bool earsAreHidden, bool mouthIsHidden, int race, int gender, int age)` | 方法 |
| `GetRandomBodyProperties` | `public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)` | 方法 |
| `GetDeformKeyData` | `public static DeformKeyData GetDeformKeyData(int keyNo, int race, int gender, int age)` | 方法 |
| `GetFaceGenInstancesLength` | `public static int GetFaceGenInstancesLength(int race, int gender, int age)` | 方法 |
| `EnforceConstraints` | `public static bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)` | 方法 |
| `GetScaleFromKey` | `public static float GetScaleFromKey(int race, int gender, BodyProperties bodyProperties)` | 方法 |
| `GetHairColorCount` | `public static int GetHairColorCount(int race, int curGender, int age)` | 方法 |
| `List` | `public static List<uint>GetHairColorGradientPoints(int race, int curGender, int age)` | 方法 |
| `GetTatooColorCount` | `public static int GetTatooColorCount(int race, int curGender, int age)` | 方法 |
| `List` | `public static List<uint>GetTatooColorGradientPoints(int race, int curGender, int age)` | 方法 |
| `GetSkinColorCount` | `public static int GetSkinColorCount(int race, int curGender, int age)` | 方法 |
| `GetMaturityType` | `public static BodyMeshMaturityType GetMaturityType(float age)` | 方法 |
| `FlushFaceCache` | `public static void FlushFaceCache()` | 方法 |
| `string[]GetRaceIds` | `public static string[]GetRaceIds()` | 方法 |
| `int[]GetHairIndicesByTag` | `public static int[]GetHairIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `int[]GetFacialIndicesByTag` | `public static int[]GetFacialIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `int[]GetTattooIndicesByTag` | `public static int[]GetTattooIndicesByTag(int race, int curGender, float age, string tag)` | 方法 |
| `List` | `public static List<uint>GetSkinColorGradientPoints(int race, int curGender, int age)` | 方法 |
| `List` | `public static List<bool>GetVoiceTypeUsableForPlayerData(int race, int curGender, float age, int voiceTypeCount)` | 方法 |
| `SetHair` | `public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)` | 方法 |
| `SetBody` | `public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)` | 方法 |
| `SetPigmentation` | `public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)` | 方法 |
| `GenerateParentKey` | `public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)` | 方法 |
| `GetBodyPropertiesWithAge` | `public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)` | 方法 |
| `GenerationType` | `public enum GenerationType` | 属性 |
| `GenerationType` | `public enum GenerationType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
