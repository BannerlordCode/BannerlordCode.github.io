<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceGen`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 创建一个 `instance` 实例或对象。

### GetMonster
`public Monster GetMonster(string monsterID)`

**用途 / Purpose:** 获取 `monster` 的当前值。

### GetMonsterWithSuffix
`public Monster GetMonsterWithSuffix(int race, string suffix)`

**用途 / Purpose:** 获取 `monster with suffix` 的当前值。

### GetBaseMonsterFromRace
`public Monster GetBaseMonsterFromRace(int race)`

**用途 / Purpose:** 获取 `base monster from race` 的当前值。

### GetRandomBodyProperties
`public BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount)`

**用途 / Purpose:** 获取 `random body properties` 的当前值。

### GetBodyPropertiesWithAge
`public BodyProperties GetBodyPropertiesWithAge(ref BodyProperties bodyProperties, float age)`

**用途 / Purpose:** 获取 `body properties with age` 的当前值。

### GetParamsFromBody
`public void GetParamsFromBody(ref FaceGenerationParams faceGenerationParams, BodyProperties bodyProperties, bool earsAreHidden, bool mouthIsHidden)`

**用途 / Purpose:** 获取 `params from body` 的当前值。

### GetMaturityTypeWithAge
`public BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

**用途 / Purpose:** 获取 `maturity type with age` 的当前值。

### FlushFaceCache
`public static void FlushFaceCache()`

**用途 / Purpose:** 处理 `flush face cache` 相关逻辑。

### GetRaceCount
`public int GetRaceCount()`

**用途 / Purpose:** 获取 `race count` 的当前值。

### GetRaceOrDefault
`public int GetRaceOrDefault(string raceId)`

**用途 / Purpose:** 获取 `race or default` 的当前值。

### GetBaseMonsterNameFromRace
`public string GetBaseMonsterNameFromRace(int race)`

**用途 / Purpose:** 获取 `base monster name from race` 的当前值。

### GetRaceNames
`public string GetRaceNames()`

**用途 / Purpose:** 获取 `race names` 的当前值。

### GetHairIndicesByTag
`public int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `hair indices by tag` 的当前值。

### GetFacialIndicesByTag
`public int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `facial indices by tag` 的当前值。

### GetTattooIndicesByTag
`public int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `tattoo indices by tag` 的当前值。

### GetTattooZeroProbability
`public float GetTattooZeroProbability(int race, int curGender, float age)`

**用途 / Purpose:** 获取 `tattoo zero probability` 的当前值。

## 使用示例

```csharp
FaceGen.CreateInstance();
```

## 参见

- [完整类目录](../catalog)