---
title: "MapNavigationExtensions"
description: "MapNavigationExtensions 的自动生成类参考。"
---
# MapNavigationExtensions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class MapNavigationExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem/MapNavigationExtensions.cs`

## 概述

`MapNavigationExtensions` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetPermission
`public static NavigationPermissionItem GetPermission(this INavigationHandler handler, MapNavigationItemType elementType)`

**用途 / Purpose:** 读取并返回当前对象中 permission 的结果。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.GetPermission(handler, elementType);
```

### IsActive
`public static bool IsActive(this INavigationHandler handler, MapNavigationItemType elementType)`

**用途 / Purpose:** 判断当前对象是否处于 active 状态或条件。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.IsActive(handler, elementType);
```

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler)`

**用途 / Purpose:** 打开quests对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenQuests(handler);
```

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, QuestBase quest)`

**用途 / Purpose:** 打开quests对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenQuests(handler, quest);
```

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, IssueBase issue)`

**用途 / Purpose:** 打开quests对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenQuests(handler, issue);
```

### OpenQuests
`public static void OpenQuests(this INavigationHandler handler, JournalLogEntry log)`

**用途 / Purpose:** 打开quests对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenQuests(handler, log);
```

### OpenInventory
`public static void OpenInventory(this INavigationHandler handler)`

**用途 / Purpose:** 打开inventory对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenInventory(handler);
```

### OpenParty
`public static void OpenParty(this INavigationHandler handler)`

**用途 / Purpose:** 打开party对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenParty(handler);
```

### OpenCharacterDeveloper
`public static void OpenCharacterDeveloper(this INavigationHandler handler)`

**用途 / Purpose:** 打开character developer对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenCharacterDeveloper(handler);
```

### OpenCharacterDeveloper
`public static void OpenCharacterDeveloper(this INavigationHandler handler, Hero hero)`

**用途 / Purpose:** 打开character developer对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenCharacterDeveloper(handler, hero);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler)`

**用途 / Purpose:** 打开kingdom对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenKingdom(handler);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Army army)`

**用途 / Purpose:** 打开kingdom对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenKingdom(handler, army);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Settlement settlement)`

**用途 / Purpose:** 打开kingdom对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenKingdom(handler, settlement);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, Clan clan)`

**用途 / Purpose:** 打开kingdom对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenKingdom(handler, clan);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, PolicyObject policy)`

**用途 / Purpose:** 打开kingdom对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenKingdom(handler, policy);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, IFaction faction)`

**用途 / Purpose:** 打开kingdom对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenKingdom(handler, faction);
```

### OpenKingdom
`public static void OpenKingdom(this INavigationHandler handler, KingdomDecision decision)`

**用途 / Purpose:** 打开kingdom对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenKingdom(handler, decision);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler)`

**用途 / Purpose:** 打开clan对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenClan(handler);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Hero hero)`

**用途 / Purpose:** 打开clan对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenClan(handler, hero);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, PartyBase party)`

**用途 / Purpose:** 打开clan对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenClan(handler, party);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Settlement settlement)`

**用途 / Purpose:** 打开clan对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenClan(handler, settlement);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Workshop workshop)`

**用途 / Purpose:** 打开clan对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenClan(handler, workshop);
```

### OpenClan
`public static void OpenClan(this INavigationHandler handler, Alley alley)`

**用途 / Purpose:** 打开clan对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenClan(handler, alley);
```

### OpenEscapeMenu
`public static void OpenEscapeMenu(this INavigationHandler handler)`

**用途 / Purpose:** 打开escape menu对应的资源或界面。

```csharp
// 静态调用，不需要实例
MapNavigationExtensions.OpenEscapeMenu(handler);
```

## 使用示例

```csharp
MapNavigationExtensions.GetPermission(handler, elementType);
```

## 参见

- [本区域目录](../)