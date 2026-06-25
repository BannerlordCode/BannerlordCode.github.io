---
title: "EncounterGameMenuBehavior"
description: "EncounterGameMenuBehavior 的自动生成类参考。"
---
# EncounterGameMenuBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncounterGameMenuBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/EncounterGameMenuBehavior.cs`

## 概述

`EncounterGameMenuBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 EncounterGameMenuBehavior 实例
EncounterGameMenuBehavior encounterGameMenuBehavior = ...;
encounterGameMenuBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 EncounterGameMenuBehavior 实例
EncounterGameMenuBehavior encounterGameMenuBehavior = ...;
encounterGameMenuBehavior.RegisterEvents();
```

### AddCurrentSettlementAsAlreadySneakedIn
`public void AddCurrentSettlementAsAlreadySneakedIn()`

**用途 / Purpose:** 将 「current settlement as already sneaked in」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EncounterGameMenuBehavior 实例
EncounterGameMenuBehavior encounterGameMenuBehavior = ...;
encounterGameMenuBehavior.AddCurrentSettlementAsAlreadySneakedIn();
```

### game_menu_captivity_taken_prisoner_cheat_on_consequence
`public static void game_menu_captivity_taken_prisoner_cheat_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_captivity_taken_prisoner_cheat_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_menu_captivity_taken_prisoner_cheat_on_consequence(args);
```

### game_menu_captivity_castle_taken_prisoner_cont_on_condition
`public static bool game_menu_captivity_castle_taken_prisoner_cont_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「game_menu_captivity_castle_taken_prisoner_cont_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_menu_captivity_castle_taken_prisoner_cont_on_condition(args);
```

### menu_sneak_into_town_succeeded_continue_on_consequence
`public static void menu_sneak_into_town_succeeded_continue_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「menu_sneak_into_town_succeeded_continue_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.menu_sneak_into_town_succeeded_continue_on_consequence(args);
```

### menu_sneak_into_town_succeeded_continue_on_condition
`public static bool menu_sneak_into_town_succeeded_continue_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「menu_sneak_into_town_succeeded_continue_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.menu_sneak_into_town_succeeded_continue_on_condition(args);
```

### game_menu_sneak_into_town_caught_on_init
`public static void game_menu_sneak_into_town_caught_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_sneak_into_town_caught_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_menu_sneak_into_town_caught_on_init(args);
```

### mno_sneak_caught_surrender_on_consequence
`public static void mno_sneak_caught_surrender_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「mno_sneak_caught_surrender_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.mno_sneak_caught_surrender_on_consequence(args);
```

### mno_sneak_caught_surrender_on_condition
`public static bool mno_sneak_caught_surrender_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「mno_sneak_caught_surrender_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.mno_sneak_caught_surrender_on_condition(args);
```

### game_menu_captivity_taken_prisoner_cheat_on_condition
`public static bool game_menu_captivity_taken_prisoner_cheat_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「game_menu_captivity_taken_prisoner_cheat_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_menu_captivity_taken_prisoner_cheat_on_condition(args);
```

### game_menu_captivity_castle_taken_prisoner_cont_on_consequence
`public static void game_menu_captivity_castle_taken_prisoner_cont_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_captivity_castle_taken_prisoner_cont_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_menu_captivity_castle_taken_prisoner_cont_on_consequence(args);
```

### game_request_entry_to_castle_approved_continue_on_consequence
`public static void game_request_entry_to_castle_approved_continue_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_request_entry_to_castle_approved_continue_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_request_entry_to_castle_approved_continue_on_consequence(args);
```

### game_request_entry_to_castle_approved_continue_on_condition
`public static bool game_request_entry_to_castle_approved_continue_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 获取或更新 「game_request_entry_to_castle_approved_continue_on_condition」 的状态。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_request_entry_to_castle_approved_continue_on_condition(args);
```

### game_request_entry_to_castle_rejected_continue_on_consequence
`public static void game_request_entry_to_castle_rejected_continue_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_request_entry_to_castle_rejected_continue_on_consequence」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_request_entry_to_castle_rejected_continue_on_consequence(args);
```

### menu_castle_entry_denied_on_init
`public static void menu_castle_entry_denied_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「menu_castle_entry_denied_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.menu_castle_entry_denied_on_init(args);
```

### game_menu_castle_menu_sound_on_init
`public static void game_menu_castle_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_castle_menu_sound_on_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_menu_castle_menu_sound_on_init(args);
```

### game_menu_encounter_naval_disengaged_init
`public static void game_menu_encounter_naval_disengaged_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理与 「game_menu_encounter_naval_disengaged_init」 相关的逻辑。

```csharp
// 静态调用，不需要实例
EncounterGameMenuBehavior.game_menu_encounter_naval_disengaged_init(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncounterGameMenuBehavior encounterGameMenuBehavior = ...;
encounterGameMenuBehavior.SyncData(dataStore);
```

## 参见

- [本区域目录](../)