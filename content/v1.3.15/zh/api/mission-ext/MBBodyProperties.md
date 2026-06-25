---
title: "MBBodyProperties"
description: "MBBodyProperties 的自动生成类参考。"
---
# MBBodyProperties

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBBodyProperties`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBBodyProperties.cs`

## 概述

`MBBodyProperties` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetNumEditableDeformKeys
`public static int GetNumEditableDeformKeys(int race, bool initialGender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「num editable deform keys」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetNumEditableDeformKeys(0, false, 0);
```

### GetParamsFromKey
`public static void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthHidden)`

**用途 / Purpose:** 读取并返回当前对象中 「params from key」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetParamsFromKey(faceGenerationParams, bodyProperties, false, false);
```

### GetParamsMax
`public static void GetParamsMax(int race, int curGender, int curAge, ref int hairNum, ref int beardNum, ref int faceTextureNum, ref int mouthTextureNum, ref int faceTattooNum, ref int soundNum, ref int eyebrowNum, ref float scale)`

**用途 / Purpose:** 读取并返回当前对象中 「params max」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetParamsMax(0, 0, 0, hairNum, beardNum, faceTextureNum, mouthTextureNum, faceTattooNum, soundNum, eyebrowNum, scale);
```

### GetZeroProbabilities
`public static void GetZeroProbabilities(int race, int curGender, float curAge, ref float tattooZeroProbability)`

**用途 / Purpose:** 读取并返回当前对象中 「zero probabilities」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetZeroProbabilities(0, 0, 0, tattooZeroProbability);
```

### ProduceNumericKeyWithParams
`public static void ProduceNumericKeyWithParams(FaceGenerationParams faceGenerationParams, bool earsAreHidden, bool mouthIsHidden, ref BodyProperties bodyProperties)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MBBodyProperties.ProduceNumericKeyWithParams(faceGenerationParams, false, false, bodyProperties);
```

### TransformFaceKeysToDefaultFace
`public static void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MBBodyProperties.TransformFaceKeysToDefaultFace(faceGenerationParams);
```

### ProduceNumericKeyWithDefaultValues
`public static void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties, bool earsAreHidden, bool mouthIsHidden, int race, int gender, int age)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MBBodyProperties.ProduceNumericKeyWithDefaultValues(initialBodyProperties, false, false, 0, 0, 0);
```

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「random body properties」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetRandomBodyProperties(0, false, bodyPropertiesMin, bodyPropertiesMax, 0, 0, "example", "example", "example", 0);
```

### GetDeformKeyData
`public static DeformKeyData GetDeformKeyData(int keyNo, int race, int gender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「deform key data」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetDeformKeyData(0, 0, 0, 0);
```

### GetFaceGenInstancesLength
`public static int GetFaceGenInstancesLength(int race, int gender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「face gen instances length」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetFaceGenInstancesLength(0, 0, 0);
```

### EnforceConstraints
`public static bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MBBodyProperties.EnforceConstraints(faceGenerationParams);
```

### GetScaleFromKey
`public static float GetScaleFromKey(int race, int gender, BodyProperties bodyProperties)`

**用途 / Purpose:** 读取并返回当前对象中 「scale from key」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetScaleFromKey(0, 0, bodyProperties);
```

### GetHairColorCount
`public static int GetHairColorCount(int race, int curGender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「hair color count」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetHairColorCount(0, 0, 0);
```

### GetHairColorGradientPoints
`public static List<uint> GetHairColorGradientPoints(int race, int curGender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「hair color gradient points」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetHairColorGradientPoints(0, 0, 0);
```

### GetTatooColorCount
`public static int GetTatooColorCount(int race, int curGender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「tatoo color count」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetTatooColorCount(0, 0, 0);
```

### GetTatooColorGradientPoints
`public static List<uint> GetTatooColorGradientPoints(int race, int curGender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「tatoo color gradient points」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetTatooColorGradientPoints(0, 0, 0);
```

### GetSkinColorCount
`public static int GetSkinColorCount(int race, int curGender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「skin color count」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetSkinColorCount(0, 0, 0);
```

### GetMaturityType
`public static BodyMeshMaturityType GetMaturityType(float age)`

**用途 / Purpose:** 读取并返回当前对象中 「maturity type」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetMaturityType(0);
```

### FlushFaceCache
`public static void FlushFaceCache()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
MBBodyProperties.FlushFaceCache();
```

### GetRaceIds
`public static string GetRaceIds()`

**用途 / Purpose:** 读取并返回当前对象中 「race ids」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetRaceIds();
```

### GetHairIndicesByTag
`public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「hair indices by tag」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetHairIndicesByTag(0, 0, 0, "example");
```

### GetFacialIndicesByTag
`public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「facial indices by tag」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetFacialIndicesByTag(0, 0, 0, "example");
```

### GetTattooIndicesByTag
`public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「tattoo indices by tag」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetTattooIndicesByTag(0, 0, 0, "example");
```

### GetSkinColorGradientPoints
`public static List<uint> GetSkinColorGradientPoints(int race, int curGender, int age)`

**用途 / Purpose:** 读取并返回当前对象中 「skin color gradient points」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetSkinColorGradientPoints(0, 0, 0);
```

### GetVoiceTypeUsableForPlayerData
`public static List<bool> GetVoiceTypeUsableForPlayerData(int race, int curGender, float age, int voiceTypeCount)`

**用途 / Purpose:** 读取并返回当前对象中 「voice type usable for player data」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetVoiceTypeUsableForPlayerData(0, 0, 0, 0);
```

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)`

**用途 / Purpose:** 为 「hair」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBBodyProperties.SetHair(bodyProperties, 0, 0, 0);
```

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)`

**用途 / Purpose:** 为 「body」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBBodyProperties.SetBody(bodyProperties, 0, 0);
```

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)`

**用途 / Purpose:** 为 「pigmentation」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MBBodyProperties.SetPigmentation(bodyProperties, 0, 0, 0);
```

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)`

**用途 / Purpose:** 生成「parent key」的实例、数据或表示。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GenerateParentKey(childBodyProperties, 0, motherBodyProperties, fatherBodyProperties);
```

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)`

**用途 / Purpose:** 读取并返回当前对象中 「body properties with age」 的结果。

```csharp
// 静态调用，不需要实例
MBBodyProperties.GetBodyPropertiesWithAge(bodyProperties, 0);
```

## 使用示例

```csharp
MBBodyProperties.GetNumEditableDeformKeys(0, false, 0);
```

## 参见

- [本区域目录](../)