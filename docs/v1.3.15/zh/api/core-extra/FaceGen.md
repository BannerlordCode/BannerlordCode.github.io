<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceGen`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FaceGen

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`FaceGen` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### SetInstance

```csharp
public static void SetInstance(IFaceGen faceGen)
```

### GetRandomBodyProperties

```csharp
public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)
```

### GetRaceCount

```csharp
public static int GetRaceCount()
```

### GetRaceOrDefault

```csharp
public static int GetRaceOrDefault(string raceId)
```

### GetBaseMonsterNameFromRace

```csharp
public static string GetBaseMonsterNameFromRace(int race)
```

### GetRaceNames

```csharp
public static string GetRaceNames()
```

### GetMonster

```csharp
public static Monster GetMonster(string monsterID)
```

### GetMonsterWithSuffix

```csharp
public static Monster GetMonsterWithSuffix(int race, string suffix)
```

### GetBaseMonsterFromRace

```csharp
public static Monster GetBaseMonsterFromRace(int race)
```

### GenerateParentKey

```csharp
public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)
```

### SetHair

```csharp
public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)
```

### SetBody

```csharp
public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)
```

### SetPigmentation

```csharp
public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)
```

### GetBodyPropertiesWithAge

```csharp
public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)
```

### GetMaturityTypeWithAge

```csharp
public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)
```

### GetHairIndicesByTag

```csharp
public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)
```

### GetFacialIndicesByTag

```csharp
public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)
```

### GetTattooIndicesByTag

```csharp
public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)
```

### GetTattooZeroProbability

```csharp
public static float GetTattooZeroProbability(int race, int curGender, float age)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)