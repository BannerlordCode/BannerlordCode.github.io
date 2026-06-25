---
title: "MetaDataExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MetaDataExtensions`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `unique game id` 的当前值。

### GetMainHeroLevel
`public static int GetMainHeroLevel(this MetaData metaData)`

**用途 / Purpose:** 获取 `main hero level` 的当前值。

### GetMainPartyFood
`public static float GetMainPartyFood(this MetaData metaData)`

**用途 / Purpose:** 获取 `main party food` 的当前值。

### GetMainHeroGold
`public static int GetMainHeroGold(this MetaData metaData)`

**用途 / Purpose:** 获取 `main hero gold` 的当前值。

### GetClanInfluence
`public static float GetClanInfluence(this MetaData metaData)`

**用途 / Purpose:** 获取 `clan influence` 的当前值。

### GetClanFiefs
`public static int GetClanFiefs(this MetaData metaData)`

**用途 / Purpose:** 获取 `clan fiefs` 的当前值。

### GetMainPartyHealthyMemberCount
`public static int GetMainPartyHealthyMemberCount(this MetaData metaData)`

**用途 / Purpose:** 获取 `main party healthy member count` 的当前值。

### GetMainPartyPrisonerMemberCount
`public static int GetMainPartyPrisonerMemberCount(this MetaData metaData)`

**用途 / Purpose:** 获取 `main party prisoner member count` 的当前值。

### GetMainPartyWoundedMemberCount
`public static int GetMainPartyWoundedMemberCount(this MetaData metaData)`

**用途 / Purpose:** 获取 `main party wounded member count` 的当前值。

### GetClanBannerCode
`public static string GetClanBannerCode(this MetaData metaData)`

**用途 / Purpose:** 获取 `clan banner code` 的当前值。

### GetCharacterName
`public static string GetCharacterName(this MetaData metaData)`

**用途 / Purpose:** 获取 `character name` 的当前值。

### GetCharacterVisualCode
`public static string GetCharacterVisualCode(this MetaData metaData)`

**用途 / Purpose:** 获取 `character visual code` 的当前值。

### GetDayLong
`public static double GetDayLong(this MetaData metaData)`

**用途 / Purpose:** 获取 `day long` 的当前值。

### GetIronmanMode
`public static bool GetIronmanMode(this MetaData metaData)`

**用途 / Purpose:** 获取 `ironman mode` 的当前值。

### GetPlayerHealthPercentage
`public static int GetPlayerHealthPercentage(this MetaData metaData)`

**用途 / Purpose:** 获取 `player health percentage` 的当前值。

## 使用示例

```csharp
MetaDataExtensions.GetUniqueGameId(metaData);
```

## 参见

- [完整类目录](../catalog)