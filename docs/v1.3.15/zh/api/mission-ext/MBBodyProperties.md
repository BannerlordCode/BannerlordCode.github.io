<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBBodyProperties`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBBodyProperties

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MBBodyProperties`
**领域:** mission-ext

## 概述

`MBBodyProperties` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetNumEditableDeformKeys
`public static int GetNumEditableDeformKeys(int race, bool initialGender, int age)`

**用途 / Purpose:** 获取 `num editable deform keys` 的当前值。

### GetParamsFromKey
`public static void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthHidden)`

**用途 / Purpose:** 获取 `params from key` 的当前值。

### GetParamsMax
`public static void GetParamsMax(int race, int curGender, int curAge, ref int hairNum, ref int beardNum, ref int faceTextureNum, ref int mouthTextureNum, ref int faceTattooNum, ref int soundNum, ref int eyebrowNum, ref float scale)`

**用途 / Purpose:** 获取 `params max` 的当前值。

### GetZeroProbabilities
`public static void GetZeroProbabilities(int race, int curGender, float curAge, ref float tattooZeroProbability)`

**用途 / Purpose:** 获取 `zero probabilities` 的当前值。

### ProduceNumericKeyWithParams
`public static void ProduceNumericKeyWithParams(FaceGenerationParams faceGenerationParams, bool earsAreHidden, bool mouthIsHidden, ref BodyProperties bodyProperties)`

**用途 / Purpose:** 处理 `produce numeric key with params` 相关逻辑。

### TransformFaceKeysToDefaultFace
`public static void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 处理 `transform face keys to default face` 相关逻辑。

### ProduceNumericKeyWithDefaultValues
`public static void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties, bool earsAreHidden, bool mouthIsHidden, int race, int gender, int age)`

**用途 / Purpose:** 处理 `produce numeric key with default values` 相关逻辑。

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)`

**用途 / Purpose:** 获取 `random body properties` 的当前值。

### GetDeformKeyData
`public static DeformKeyData GetDeformKeyData(int keyNo, int race, int gender, int age)`

**用途 / Purpose:** 获取 `deform key data` 的当前值。

### GetFaceGenInstancesLength
`public static int GetFaceGenInstancesLength(int race, int gender, int age)`

**用途 / Purpose:** 获取 `face gen instances length` 的当前值。

### EnforceConstraints
`public static bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)`

**用途 / Purpose:** 处理 `enforce constraints` 相关逻辑。

### GetScaleFromKey
`public static float GetScaleFromKey(int race, int gender, BodyProperties bodyProperties)`

**用途 / Purpose:** 获取 `scale from key` 的当前值。

### GetHairColorCount
`public static int GetHairColorCount(int race, int curGender, int age)`

**用途 / Purpose:** 获取 `hair color count` 的当前值。

### GetHairColorGradientPoints
`public static List<uint> GetHairColorGradientPoints(int race, int curGender, int age)`

**用途 / Purpose:** 获取 `hair color gradient points` 的当前值。

### GetTatooColorCount
`public static int GetTatooColorCount(int race, int curGender, int age)`

**用途 / Purpose:** 获取 `tatoo color count` 的当前值。

### GetTatooColorGradientPoints
`public static List<uint> GetTatooColorGradientPoints(int race, int curGender, int age)`

**用途 / Purpose:** 获取 `tatoo color gradient points` 的当前值。

### GetSkinColorCount
`public static int GetSkinColorCount(int race, int curGender, int age)`

**用途 / Purpose:** 获取 `skin color count` 的当前值。

### GetMaturityType
`public static BodyMeshMaturityType GetMaturityType(float age)`

**用途 / Purpose:** 获取 `maturity type` 的当前值。

### FlushFaceCache
`public static void FlushFaceCache()`

**用途 / Purpose:** 处理 `flush face cache` 相关逻辑。

### GetRaceIds
`public static string GetRaceIds()`

**用途 / Purpose:** 获取 `race ids` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MBBodyProperties.GetNumEditableDeformKeys(0, false, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
