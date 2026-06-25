---
title: "PlayerTownVisit"
description: "PlayerTownVisit 的自动生成类参考。"
---
# PlayerTownVisit

**Namespace:** TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerTownVisit`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandlers/PlayerTownVisit.cs`

## 概述

`PlayerTownVisit` 位于 `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_menu_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisit.game_menu_town_menu_on_init(args);
```

### game_menu_town_manage_town_on_consequence
`public static void game_menu_town_manage_town_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_manage_town_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisit.game_menu_town_manage_town_on_consequence(args);
```

### game_menu_town_castle_manage_town_on_consequence
`public static void game_menu_town_castle_manage_town_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_castle_manage_town_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisit.game_menu_town_castle_manage_town_on_consequence(args);
```

### game_menu_castle_manage_castle_on_consequence
`public static void game_menu_castle_manage_castle_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_castle_manage_castle_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisit.game_menu_castle_manage_castle_on_consequence(args);
```

## 使用示例

```csharp
PlayerTownVisit.game_menu_town_menu_on_init(args);
```

## 参见

- [本区域目录](../)