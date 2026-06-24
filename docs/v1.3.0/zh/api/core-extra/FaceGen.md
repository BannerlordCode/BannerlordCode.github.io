<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FaceGen`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `instance` 的值或状态。

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tatooTags, float variationAmount)`

**用途 / Purpose:** 获取 `random body properties` 的当前值。

### GetRaceCount
`public static int GetRaceCount()`

**用途 / Purpose:** 获取 `race count` 的当前值。

### GetRaceOrDefault
`public static int GetRaceOrDefault(string raceId)`

**用途 / Purpose:** 获取 `race or default` 的当前值。

### GetBaseMonsterNameFromRace
`public static string GetBaseMonsterNameFromRace(int race)`

**用途 / Purpose:** 获取 `base monster name from race` 的当前值。

### GetRaceNames
`public static string GetRaceNames()`

**用途 / Purpose:** 获取 `race names` 的当前值。

### GetMonster
`public static Monster GetMonster(string monsterID)`

**用途 / Purpose:** 获取 `monster` 的当前值。

### GetMonsterWithSuffix
`public static Monster GetMonsterWithSuffix(int race, string suffix)`

**用途 / Purpose:** 获取 `monster with suffix` 的当前值。

### GetBaseMonsterFromRace
`public static Monster GetBaseMonsterFromRace(int race)`

**用途 / Purpose:** 获取 `base monster from race` 的当前值。

### GenerateParentKey
`public static void GenerateParentKey(BodyProperties childBodyProperties, int race, ref BodyProperties motherBodyProperties, ref BodyProperties fatherBodyProperties)`

**用途 / Purpose:** 处理 `generate parent key` 相关逻辑。

### SetHair
`public static void SetHair(ref BodyProperties bodyProperties, int hair, int beard, int tattoo)`

**用途 / Purpose:** 设置 `hair` 的值或状态。

### SetBody
`public static void SetBody(ref BodyProperties bodyProperties, int build, int weight)`

**用途 / Purpose:** 设置 `body` 的值或状态。

### SetPigmentation
`public static void SetPigmentation(ref BodyProperties bodyProperties, int skinColor, int hairColor, int eyeColor)`

**用途 / Purpose:** 设置 `pigmentation` 的值或状态。

### GetBodyPropertiesWithAge
`public static BodyProperties GetBodyPropertiesWithAge(ref BodyProperties originalBodyProperties, float age)`

**用途 / Purpose:** 获取 `body properties with age` 的当前值。

### GetMaturityTypeWithAge
`public static BodyMeshMaturityType GetMaturityTypeWithAge(float age)`

**用途 / Purpose:** 获取 `maturity type with age` 的当前值。

### GetHairIndicesByTag
`public static int GetHairIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `hair indices by tag` 的当前值。

### GetFacialIndicesByTag
`public static int GetFacialIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `facial indices by tag` 的当前值。

### GetTattooIndicesByTag
`public static int GetTattooIndicesByTag(int race, int curGender, float age, string tag)`

**用途 / Purpose:** 获取 `tattoo indices by tag` 的当前值。

### GetTattooZeroProbability
`public static float GetTattooZeroProbability(int race, int curGender, float age)`

**用途 / Purpose:** 获取 `tattoo zero probability` 的当前值。

## 使用示例

```csharp
FaceGen.SetInstance(faceGen);
```

## 参见

- [完整类目录](../catalog)