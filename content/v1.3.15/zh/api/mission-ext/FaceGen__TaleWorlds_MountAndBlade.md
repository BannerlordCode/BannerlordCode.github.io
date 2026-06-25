---
title: "FaceGen"
description: "FaceGen 的自动生成类参考。"
---
# FaceGen

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGen : IFaceGen`
**Base:** `IFaceGen`
**File:** `TaleWorlds.MountAndBlade/FaceGen.cs`

## 概述

`FaceGen` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateInstance
`public static void CreateInstance()`

**用途 / Purpose:** 构建一个新的 「instance」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
FaceGen.CreateInstance();
```

### GetMonster
`public Monster GetMonster(string monsterID)`

**用途 / Purpose:** 读取并返回当前对象中 「monster」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetMonster("example");
```

### GetMonsterWithSuffix
`public Monster GetMonsterWithSuffix(int race, string suffix)`

**用途 / Purpose:** 读取并返回当前对象中 「monster with suffix」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetMonsterWithSuffix(0, "example");
```

### GetBaseMonsterFromRace
`public Monster GetBaseMonsterFromRace(int race)`

**用途 / Purpose:** 读取并返回当前对象中 「base monster from race」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetBaseMonsterFromRace(0);
```

### GetRandomBodyProperties
`public BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「random body properties」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetRandomBodyProperties(0, false, bodyPropertiesMin, bodyPropertiesMax, 0, 0, "example", "example", "example", 0);
```

### GetBodyPropertiesWithAge
`public BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)`

**用途 / Purpose:** 读取并返回当前对象中 「body properties with age」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetBodyPropertiesWithAge(bodyProperties, 0);
```

### GetParamsFromBody
`public void GetParamsFromBody(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthIsHidden)`

**用途 / Purpose:** 读取并返回当前对象中 「params from body」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
faceGen.GetParamsFromBody(faceGenerationParams, bodyProperties, false, false);
```

### GetMaturityTypeWithAge
`public BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

**用途 / Purpose:** 读取并返回当前对象中 「maturity type with age」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetMaturityTypeWithAge(0);
```

### FlushFaceCache
`public static void FlushFaceCache()`

**用途 / Purpose:** 处理与 「flush face cache」 相关的逻辑。

```csharp
// 静态调用，不需要实例
FaceGen.FlushFaceCache();
```

### GetRaceCount
`public int GetRaceCount()`

**用途 / Purpose:** 读取并返回当前对象中 「race count」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetRaceCount();
```

### GetRaceOrDefault
`public int GetRaceOrDefault(string raceId)`

**用途 / Purpose:** 读取并返回当前对象中 「race or default」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetRaceOrDefault("example");
```

### GetBaseMonsterNameFromRace
`public string GetBaseMonsterNameFromRace(int race)`

**用途 / Purpose:** 读取并返回当前对象中 「base monster name from race」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetBaseMonsterNameFromRace(0);
```

### GetRaceNames
`public string GetRaceNames()`

**用途 / Purpose:** 读取并返回当前对象中 「race names」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetRaceNames();
```

### GetHairIndicesByTag
`public int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「hair indices by tag」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetHairIndicesByTag(0, 0, 0, "example");
```

### GetFacialIndicesByTag
`public int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「facial indices by tag」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetFacialIndicesByTag(0, 0, 0, "example");
```

### GetTattooIndicesByTag
`public int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「tattoo indices by tag」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetTattooIndicesByTag(0, 0, 0, "example");
```

### GetTattooZeroProbability
`public float GetTattooZeroProbability(int race, int curGender, float age)`

**用途 / Purpose:** 读取并返回当前对象中 「tattoo zero probability」 的结果。

```csharp
// 先通过子系统 API 拿到 FaceGen 实例
FaceGen faceGen = ...;
var result = faceGen.GetTattooZeroProbability(0, 0, 0);
```

## 使用示例

```csharp
FaceGen.CreateInstance();
```

## 参见

- [本区域目录](../)