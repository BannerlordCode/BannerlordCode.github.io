---
title: "VillageHostileActionCampaignBehavior"
description: "VillageHostileActionCampaignBehavior 的自动生成类参考。"
---
# VillageHostileActionCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageHostileActionCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/VillageHostileActionCampaignBehavior.cs`

## 概述

`VillageHostileActionCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 VillageHostileActionCampaignBehavior 实例
VillageHostileActionCampaignBehavior villageHostileActionCampaignBehavior = ...;
villageHostileActionCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 VillageHostileActionCampaignBehavior 实例
VillageHostileActionCampaignBehavior villageHostileActionCampaignBehavior = ...;
villageHostileActionCampaignBehavior.RegisterEvents();
```

### AddGameMenus
`public void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)`

**用途 / Purpose:** **用途 / Purpose:** 将 game menus 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VillageHostileActionCampaignBehavior 实例
VillageHostileActionCampaignBehavior villageHostileActionCampaignBehavior = ...;
villageHostileActionCampaignBehavior.AddGameMenus(campaignGameSystemStarter);
```

### hostile_action_village_on_init
`public static void hostile_action_village_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 hostile_action_village_on_init 对应的操作。

```csharp
// 静态调用，不需要实例
VillageHostileActionCampaignBehavior.hostile_action_village_on_init(args);
```

### wait_menu_raiding_village_on_tick
`public static void wait_menu_raiding_village_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**用途 / Purpose:** **用途 / Purpose:** 调用 wait_menu_raiding_village_on_tick 对应的操作。

```csharp
// 静态调用，不需要实例
VillageHostileActionCampaignBehavior.wait_menu_raiding_village_on_tick(args, dt);
```

### wait_menu_start_raiding_on_condition
`public static bool wait_menu_start_raiding_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 wait_menu_start_raiding_on_condition 对应的操作。

```csharp
// 静态调用，不需要实例
VillageHostileActionCampaignBehavior.wait_menu_start_raiding_on_condition(args);
```

### wait_menu_end_raiding_on_consequence
`public static void wait_menu_end_raiding_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 wait_menu_end_raiding_on_consequence 对应的操作。

```csharp
// 静态调用，不需要实例
VillageHostileActionCampaignBehavior.wait_menu_end_raiding_on_consequence(args);
```

### game_menu_village_raid_ended_menu_sound_on_init
`public static void game_menu_village_raid_ended_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 game_menu_village_raid_ended_menu_sound_on_init 对应的操作。

```csharp
// 静态调用，不需要实例
VillageHostileActionCampaignBehavior.game_menu_village_raid_ended_menu_sound_on_init(args);
```

### game_menu_village_menu_on_init
`public static void game_menu_village_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 game_menu_village_menu_on_init 对应的操作。

```csharp
// 静态调用，不需要实例
VillageHostileActionCampaignBehavior.game_menu_village_menu_on_init(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VillageHostileActionCampaignBehavior villageHostileActionCampaignBehavior = ...;
villageHostileActionCampaignBehavior.SyncData(dataStore);
```

## 参见

- [本区域目录](../)