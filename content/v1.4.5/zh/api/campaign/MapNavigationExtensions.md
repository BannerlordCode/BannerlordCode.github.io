---
title: "MapNavigationExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNavigationExtensions`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapNavigationExtensions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MapNavigationExtensions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem/MapNavigationExtensions.cs`

## 概述

`MapNavigationExtensions` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetPermission
`public static NavigationPermissionItem GetPermission(this INavigationHandler handler, MapNavigationItemType elementType)`

**用途 / Purpose:** 获取 `permission` 的当前值。

### IsActive
`public static bool IsActive(this INavigationHandler handler, MapNavigationItemType elementType)`

**用途 / Purpose:** 处理 `is active` 相关逻辑。

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler)`

**用途 / Purpose:** 处理 `open quests` 相关逻辑。

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, QuestBase quest)`

**用途 / Purpose:** 处理 `open quests` 相关逻辑。

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, IssueBase issue)`

**用途 / Purpose:** 处理 `open quests` 相关逻辑。

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, JournalLogEntry log)`

**用途 / Purpose:** 处理 `open quests` 相关逻辑。

### OpenInventory
`public static void OpenInventory(this INavigationHandler handler)`

**用途 / Purpose:** 处理 `open inventory` 相关逻辑。

### OpenParty
`public static void OpenParty(this INavigationHandler handler)`

**用途 / Purpose:** 处理 `open party` 相关逻辑。

### OpenCharacterDeveloper
`public static void OpenCharacterDeveloper(this INavigationHandler handler)`

**用途 / Purpose:** 处理 `open character developer` 相关逻辑。

### OpenCharacterDeveloper
`public static void OpenCharacterDeveloper(this INavigationHandler handler, Hero hero)`

**用途 / Purpose:** 处理 `open character developer` 相关逻辑。

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler)`

**用途 / Purpose:** 处理 `open kingdom` 相关逻辑。

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Army army)`

**用途 / Purpose:** 处理 `open kingdom` 相关逻辑。

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Settlement settlement)`

**用途 / Purpose:** 处理 `open kingdom` 相关逻辑。

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Clan clan)`

**用途 / Purpose:** 处理 `open kingdom` 相关逻辑。

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, PolicyObject policy)`

**用途 / Purpose:** 处理 `open kingdom` 相关逻辑。

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, IFaction faction)`

**用途 / Purpose:** 处理 `open kingdom` 相关逻辑。

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, KingdomDecision decision)`

**用途 / Purpose:** 处理 `open kingdom` 相关逻辑。

### OpenClan
`public static void OpenClan(this INavigationHandler handler)`

**用途 / Purpose:** 处理 `open clan` 相关逻辑。

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Hero hero)`

**用途 / Purpose:** 处理 `open clan` 相关逻辑。

### OpenClan
`public static void OpenClan(this INavigationHandler handler, PartyBase party)`

**用途 / Purpose:** 处理 `open clan` 相关逻辑。

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Settlement settlement)`

**用途 / Purpose:** 处理 `open clan` 相关逻辑。

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Workshop workshop)`

**用途 / Purpose:** 处理 `open clan` 相关逻辑。

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Alley alley)`

**用途 / Purpose:** 处理 `open clan` 相关逻辑。

### OpenEscapeMenu
`public static void OpenEscapeMenu(this INavigationHandler handler)`

**用途 / Purpose:** 处理 `open escape menu` 相关逻辑。

## 使用示例

```csharp
MapNavigationExtensions.GetPermission(handler, elementType);
```

## 参见

- [完整类目录](../catalog)