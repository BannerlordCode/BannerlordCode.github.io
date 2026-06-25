---
title: "PlayerTownVisitCampaignBehavior"
description: "PlayerTownVisitCampaignBehavior 的自动生成类参考。"
---
# PlayerTownVisitCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerTownVisitCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs`

## 概述

`PlayerTownVisitCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 PlayerTownVisitCampaignBehavior 实例
PlayerTownVisitCampaignBehavior playerTownVisitCampaignBehavior = ...;
playerTownVisitCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 PlayerTownVisitCampaignBehavior 实例
PlayerTownVisitCampaignBehavior playerTownVisitCampaignBehavior = ...;
playerTownVisitCampaignBehavior.SyncData(dataStore);
```

### wait_menu_prisoner_wait_on_init
`public static void wait_menu_prisoner_wait_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「wait_menu_prisoner_wait_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.wait_menu_prisoner_wait_on_init(args);
```

### wait_menu_prisoner_settlement_wait_ui_on_init
`public static void wait_menu_prisoner_settlement_wait_ui_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「wait_menu_prisoner_settlement_wait_ui_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.wait_menu_prisoner_settlement_wait_ui_on_init(args);
```

### wait_menu_prisoner_wait_on_condition
`public static bool wait_menu_prisoner_wait_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「wait_menu_prisoner_wait_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.wait_menu_prisoner_wait_on_condition(args);
```

### wait_menu_prisoner_wait_on_tick
`public static void wait_menu_prisoner_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**用途 / Purpose:** 推进 「wait_menu_prisoner_wait_on_」 状态的周期性更新。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.wait_menu_prisoner_wait_on_tick(args, dt);
```

### wait_menu_settlement_wait_on_tick
`public static void wait_menu_settlement_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**用途 / Purpose:** 推进 「wait_menu_settlement_wait_on_」 状态的周期性更新。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.wait_menu_settlement_wait_on_tick(args, dt);
```

### game_menu_town_manage_town_on_condition
`public static bool game_menu_town_manage_town_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「game_menu_town_manage_town_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_manage_town_on_condition(args);
```

### game_menu_town_manage_town_cheat_on_condition
`public static bool game_menu_town_manage_town_cheat_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「game_menu_town_manage_town_cheat_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_manage_town_cheat_on_condition(args);
```

### settlement_player_unconscious_continue_on_consequence
`public static void settlement_player_unconscious_continue_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「settlement_player_unconscious_continue_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.settlement_player_unconscious_continue_on_consequence(args);
```

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_menu_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_menu_on_init(args);
```

### game_menu_town_menu_arena_on_init
`public static void game_menu_town_menu_arena_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_menu_arena_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_menu_arena_on_init(args);
```

### game_menu_village_menu_on_init
`public static void game_menu_village_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_village_menu_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_village_menu_on_init(args);
```

### game_menu_town_menu_keep_on_init
`public static void game_menu_town_menu_keep_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_menu_keep_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_menu_keep_on_init(args);
```

### game_menu_ui_town_manage_town_on_consequence
`public static void game_menu_ui_town_manage_town_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_ui_town_manage_town_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_ui_town_manage_town_on_consequence(args);
```

### game_menu_ui_town_castle_manage_town_on_consequence
`public static void game_menu_ui_town_castle_manage_town_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_ui_town_castle_manage_town_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_ui_town_castle_manage_town_on_consequence(args);
```

### game_menu_town_menu_backstreet_sound_on_init
`public static void game_menu_town_menu_backstreet_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_menu_backstreet_sound_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_menu_backstreet_sound_on_init(args);
```

### game_menu_town_menu_keep_sound_on_init
`public static void game_menu_town_menu_keep_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_menu_keep_sound_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_menu_keep_sound_on_init(args);
```

### game_menu_town_menu_sound_on_init
`public static void game_menu_town_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_menu_sound_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_menu_sound_on_init(args);
```

### game_menu_town_menu_enter_sound_on_init
`public static void game_menu_town_menu_enter_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_town_menu_enter_sound_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_town_menu_enter_sound_on_init(args);
```

### game_menu_village_menu_sound_on_init
`public static void game_menu_village_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_village_menu_sound_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_village_menu_sound_on_init(args);
```

### game_menu_village__enter_menu_sound_on_init
`public static void game_menu_village__enter_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_village__enter_menu_sound_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
PlayerTownVisitCampaignBehavior.game_menu_village__enter_menu_sound_on_init(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayerTownVisitCampaignBehavior playerTownVisitCampaignBehavior = ...;
playerTownVisitCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)