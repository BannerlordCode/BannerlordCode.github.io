---
title: "MetaDataExtensions"
description: "MetaDataExtensions 的自动生成类参考。"
---
# MetaDataExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MetaDataExtensions`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Extensions/MetaDataExtensions.cs`

## 概述

`MetaDataExtensions` 位于 `TaleWorlds.CampaignSystem.Extensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Extensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetUniqueGameId
`public static string GetUniqueGameId(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 unique game id 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetUniqueGameId(metaData);
```

### GetMainHeroLevel
`public static int GetMainHeroLevel(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 main hero level 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetMainHeroLevel(metaData);
```

### GetMainPartyFood
`public static float GetMainPartyFood(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 main party food 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetMainPartyFood(metaData);
```

### GetMainHeroGold
`public static int GetMainHeroGold(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 main hero gold 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetMainHeroGold(metaData);
```

### GetClanInfluence
`public static float GetClanInfluence(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 clan influence 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetClanInfluence(metaData);
```

### GetClanFiefs
`public static int GetClanFiefs(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 clan fiefs 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetClanFiefs(metaData);
```

### GetMainPartyHealthyMemberCount
`public static int GetMainPartyHealthyMemberCount(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 main party healthy member count 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetMainPartyHealthyMemberCount(metaData);
```

### GetMainPartyPrisonerMemberCount
`public static int GetMainPartyPrisonerMemberCount(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 main party prisoner member count 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetMainPartyPrisonerMemberCount(metaData);
```

### GetMainPartyWoundedMemberCount
`public static int GetMainPartyWoundedMemberCount(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 main party wounded member count 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetMainPartyWoundedMemberCount(metaData);
```

### GetClanBannerCode
`public static string GetClanBannerCode(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 clan banner code 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetClanBannerCode(metaData);
```

### GetCharacterName
`public static string GetCharacterName(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 character name 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetCharacterName(metaData);
```

### GetCharacterVisualCode
`public static string GetCharacterVisualCode(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 character visual code 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetCharacterVisualCode(metaData);
```

### GetDayLong
`public static double GetDayLong(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 day long 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetDayLong(metaData);
```

### GetIronmanMode
`public static bool GetIronmanMode(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 ironman mode 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetIronmanMode(metaData);
```

### GetPlayerHealthPercentage
`public static int GetPlayerHealthPercentage(this MetaData metaData)`

**用途 / Purpose:** 读取并返回当前对象中 player health percentage 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetPlayerHealthPercentage(metaData);
```

## 使用示例

```csharp
MetaDataExtensions.GetUniqueGameId(metaData);
```

## 参见

- [本区域目录](../)