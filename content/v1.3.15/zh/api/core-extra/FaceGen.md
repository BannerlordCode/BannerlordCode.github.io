---
title: "FaceGen"
description: "FaceGen 的自动生成类参考。"
---
# FaceGen

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class FaceGen`
**Base:** 无
**File:** `TaleWorlds.Core/FaceGen.cs`

## 概述

`FaceGen` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetInstance
`public static void SetInstance(IFaceGen faceGen)`

**用途 / Purpose:** **用途 / Purpose:** 为 instance 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
FaceGen.SetInstance(faceGen);
```

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 random body properties 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetRandomBodyProperties(0, false, bodyPropertiesMin, bodyPropertiesMax, 0, 0, "example", "example", "example", 0);
```

### GetRaceCount
`public static int GetRaceCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 race count 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetRaceCount();
```

### GetRaceOrDefault
`public static int GetRaceOrDefault(string raceId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 race or default 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetRaceOrDefault("example");
```

### GetBaseMonsterNameFromRace
`public static string GetBaseMonsterNameFromRace(int race)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 base monster name from race 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetBaseMonsterNameFromRace(0);
```

### GetRaceNames
`public static string GetRaceNames()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 race names 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetRaceNames();
```

### GetMonster
`public static Monster GetMonster(string monsterID)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 monster 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetMonster("example");
```

### GetMonsterWithSuffix
`public static Monster GetMonsterWithSuffix(int race, string suffix)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 monster with suffix 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetMonsterWithSuffix(0, "example");
```

### GetBaseMonsterFromRace
`public static Monster GetBaseMonsterFromRace(int race)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 base monster from race 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetBaseMonsterFromRace(0);
```

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)`

**用途 / Purpose:** **用途 / Purpose:** 生成parent key的实例、数据或表示。

```csharp
// 静态调用，不需要实例
FaceGen.GenerateParentKey(childBodyProperties, 0, motherBodyProperties, fatherBodyProperties);
```

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)`

**用途 / Purpose:** **用途 / Purpose:** 为 hair 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
FaceGen.SetHair(bodyProperties, 0, 0, 0);
```

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)`

**用途 / Purpose:** **用途 / Purpose:** 为 body 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
FaceGen.SetBody(bodyProperties, 0, 0);
```

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)`

**用途 / Purpose:** **用途 / Purpose:** 为 pigmentation 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
FaceGen.SetPigmentation(bodyProperties, 0, 0, 0);
```

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 body properties with age 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetBodyPropertiesWithAge(originalBodyProperties, 0);
```

### GetMaturityTypeWithAge
`public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 maturity type with age 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetMaturityTypeWithAge(0);
```

### GetHairIndicesByTag
`public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 hair indices by tag 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetHairIndicesByTag(0, 0, 0, "example");
```

### GetFacialIndicesByTag
`public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 facial indices by tag 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetFacialIndicesByTag(0, 0, 0, "example");
```

### GetTattooIndicesByTag
`public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tattoo indices by tag 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetTattooIndicesByTag(0, 0, 0, "example");
```

### GetTattooZeroProbability
`public static float GetTattooZeroProbability(int race, int curGender, float age)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tattoo zero probability 的结果。

```csharp
// 静态调用，不需要实例
FaceGen.GetTattooZeroProbability(0, 0, 0);
```

## 使用示例

```csharp
FaceGen.SetInstance(faceGen);
```

## 参见

- [本区域目录](../)