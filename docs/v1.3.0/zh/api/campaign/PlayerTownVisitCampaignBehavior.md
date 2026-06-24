<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerTownVisitCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerTownVisitCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerTownVisitCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PlayerTownVisitCampaignBehavior.cs`

## 概述

`PlayerTownVisitCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### wait_menu_prisoner_wait_on_init
`public static void wait_menu_prisoner_wait_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `wait_menu_prisoner_wait_on_init` 相关逻辑。

### wait_menu_prisoner_settlement_wait_ui_on_init
`public static void wait_menu_prisoner_settlement_wait_ui_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `wait_menu_prisoner_settlement_wait_ui_on_init` 相关逻辑。

### wait_menu_prisoner_wait_on_condition
`public static bool wait_menu_prisoner_wait_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `wait_menu_prisoner_wait_on_condition` 相关逻辑。

### wait_menu_prisoner_wait_on_tick
`public static void wait_menu_prisoner_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**用途 / Purpose:** 处理 `wait_menu_prisoner_wait_on_tick` 相关逻辑。

### wait_menu_settlement_wait_on_tick
`public static void wait_menu_settlement_wait_on_tick(MenuCallbackArgs args, CampaignTime dt)`

**用途 / Purpose:** 处理 `wait_menu_settlement_wait_on_tick` 相关逻辑。

### game_menu_town_manage_town_on_condition
`public static bool game_menu_town_manage_town_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_manage_town_on_condition` 相关逻辑。

### game_menu_town_manage_town_cheat_on_condition
`public static bool game_menu_town_manage_town_cheat_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_manage_town_cheat_on_condition` 相关逻辑。

### settlement_player_unconscious_continue_on_consequence
`public static void settlement_player_unconscious_continue_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `settlement_player_unconscious_continue_on_consequence` 相关逻辑。

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_on_init` 相关逻辑。

### game_menu_town_menu_arena_on_init
`public static void game_menu_town_menu_arena_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_arena_on_init` 相关逻辑。

### game_menu_village_menu_on_init
`public static void game_menu_village_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_village_menu_on_init` 相关逻辑。

### game_menu_town_menu_keep_on_init
`public static void game_menu_town_menu_keep_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_keep_on_init` 相关逻辑。

### game_menu_ui_town_manage_town_on_consequence
`public static void game_menu_ui_town_manage_town_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_ui_town_manage_town_on_consequence` 相关逻辑。

### game_menu_ui_town_castle_manage_town_on_consequence
`public static void game_menu_ui_town_castle_manage_town_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_ui_town_castle_manage_town_on_consequence` 相关逻辑。

### game_menu_town_menu_backstreet_sound_on_init
`public static void game_menu_town_menu_backstreet_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_backstreet_sound_on_init` 相关逻辑。

### game_menu_town_menu_keep_sound_on_init
`public static void game_menu_town_menu_keep_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_keep_sound_on_init` 相关逻辑。

### game_menu_town_menu_sound_on_init
`public static void game_menu_town_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_sound_on_init` 相关逻辑。

### game_menu_town_menu_enter_sound_on_init
`public static void game_menu_town_menu_enter_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_enter_sound_on_init` 相关逻辑。

### game_menu_village_menu_sound_on_init
`public static void game_menu_village_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_village_menu_sound_on_init` 相关逻辑。

### game_menu_village__enter_menu_sound_on_init
`public static void game_menu_village__enter_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_village__enter_menu_sound_on_init` 相关逻辑。

## 使用示例

```csharp
var value = new PlayerTownVisitCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)