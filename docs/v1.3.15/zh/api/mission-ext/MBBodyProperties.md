<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBBodyProperties`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBBodyProperties

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBBodyProperties` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetNumEditableDeformKeys

```csharp
public static int GetNumEditableDeformKeys(int race, bool initialGender, int age)
```

### GetParamsFromKey

```csharp
public static void GetParamsFromKey(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthHidden)
```

### GetParamsMax

```csharp
public static void GetParamsMax(int race, int curGender, int curAge, ref int hairNum, ref int beardNum, ref int faceTextureNum, ref int mouthTextureNum, ref int faceTattooNum, ref int soundNum, ref int eyebrowNum, ref float scale)
```

### GetZeroProbabilities

```csharp
public static void GetZeroProbabilities(int race, int curGender, float curAge, ref float tattooZeroProbability)
```

### ProduceNumericKeyWithParams

```csharp
public static void ProduceNumericKeyWithParams(FaceGenerationParams faceGenerationParams, bool earsAreHidden, bool mouthIsHidden, ref BodyProperties bodyProperties)
```

### TransformFaceKeysToDefaultFace

```csharp
public static void TransformFaceKeysToDefaultFace(ref FaceGenerationParams faceGenerationParams)
```

### ProduceNumericKeyWithDefaultValues

```csharp
public static void ProduceNumericKeyWithDefaultValues(ref BodyProperties initialBodyProperties, bool earsAreHidden, bool mouthIsHidden, int race, int gender, int age)
```

### GetRandomBodyProperties

```csharp
public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)
```

### GetDeformKeyData

```csharp
public static DeformKeyData GetDeformKeyData(int keyNo, int race, int gender, int age)
```

### GetFaceGenInstancesLength

```csharp
public static int GetFaceGenInstancesLength(int race, int gender, int age)
```

### EnforceConstraints

```csharp
public static bool EnforceConstraints(ref FaceGenerationParams faceGenerationParams)
```

### GetScaleFromKey

```csharp
public static float GetScaleFromKey(int race, int gender, BodyProperties bodyProperties)
```

### GetHairColorCount

```csharp
public static int GetHairColorCount(int race, int curGender, int age)
```

### GetHairColorGradientPoints

```csharp
public static List<uint> GetHairColorGradientPoints(int race, int curGender, int age)
```

### GetTatooColorCount

```csharp
public static int GetTatooColorCount(int race, int curGender, int age)
```

### GetTatooColorGradientPoints

```csharp
public static List<uint> GetTatooColorGradientPoints(int race, int curGender, int age)
```

### GetSkinColorCount

```csharp
public static int GetSkinColorCount(int race, int curGender, int age)
```

### GetMaturityType

```csharp
public static BodyMeshMaturityType GetMaturityType(float age)
```

### FlushFaceCache

```csharp
public static void FlushFaceCache()
```

### GetRaceIds

```csharp
public static string GetRaceIds()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)