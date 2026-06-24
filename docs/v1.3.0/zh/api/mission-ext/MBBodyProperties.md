<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBBodyProperties`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

### GetRaceIds
`public static string GetRaceIds()`

**用途 / Purpose:** 获取 `race ids` 的当前值。

### GetHairIndicesByTag
`public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `hair indices by tag` 的当前值。

### GetFacialIndicesByTag
`public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `facial indices by tag` 的当前值。

### GetTattooIndicesByTag
`public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `tattoo indices by tag` 的当前值。

### GetSkinColorGradientPoints
`public static List<uint> GetSkinColorGradientPoints(int race, int curGender, int age)`

**用途 / Purpose:** 获取 `skin color gradient points` 的当前值。

### GetVoiceTypeUsableForPlayerData
`public static List<bool> GetVoiceTypeUsableForPlayerData(int race, int curGender, float age, int voiceTypeCount)`

**用途 / Purpose:** 获取 `voice type usable for player data` 的当前值。

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)`

**用途 / Purpose:** 设置 `hair` 的值或状态。

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)`

**用途 / Purpose:** 设置 `body` 的值或状态。

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)`

**用途 / Purpose:** 设置 `pigmentation` 的值或状态。

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)`

**用途 / Purpose:** 处理 `generate parent key` 相关逻辑。

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)`

**用途 / Purpose:** 获取 `body properties with age` 的当前值。

## 使用示例

```csharp
MBBodyProperties.GetNumEditableDeformKeys(0, false, 0);
```

## 参见

- [完整类目录](../catalog)