<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncounterGameMenuBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncounterGameMenuBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncounterGameMenuBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EncounterGameMenuBehavior.cs`

## 概述

`EncounterGameMenuBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### AddCurrentSettlementAsAlreadySneakedIn
`public void AddCurrentSettlementAsAlreadySneakedIn()`

**用途 / Purpose:** 向当前集合/状态中添加 `current settlement as already sneaked in`。

### game_menu_captivity_taken_prisoner_cheat_on_consequence
`public static void game_menu_captivity_taken_prisoner_cheat_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_captivity_taken_prisoner_cheat_on_consequence` 相关逻辑。

### game_menu_captivity_castle_taken_prisoner_cont_on_condition
`public static bool game_menu_captivity_castle_taken_prisoner_cont_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_captivity_castle_taken_prisoner_cont_on_condition` 相关逻辑。

### menu_sneak_into_town_succeeded_continue_on_consequence
`public static void menu_sneak_into_town_succeeded_continue_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `menu_sneak_into_town_succeeded_continue_on_consequence` 相关逻辑。

### menu_sneak_into_town_succeeded_continue_on_condition
`public static bool menu_sneak_into_town_succeeded_continue_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `menu_sneak_into_town_succeeded_continue_on_condition` 相关逻辑。

### game_menu_sneak_into_town_caught_on_init
`public static void game_menu_sneak_into_town_caught_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_sneak_into_town_caught_on_init` 相关逻辑。

### mno_sneak_caught_surrender_on_consequence
`public static void mno_sneak_caught_surrender_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `mno_sneak_caught_surrender_on_consequence` 相关逻辑。

### mno_sneak_caught_surrender_on_condition
`public static bool mno_sneak_caught_surrender_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `mno_sneak_caught_surrender_on_condition` 相关逻辑。

### game_menu_captivity_taken_prisoner_cheat_on_condition
`public static bool game_menu_captivity_taken_prisoner_cheat_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_captivity_taken_prisoner_cheat_on_condition` 相关逻辑。

### game_menu_captivity_castle_taken_prisoner_cont_on_consequence
`public static void game_menu_captivity_castle_taken_prisoner_cont_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_captivity_castle_taken_prisoner_cont_on_consequence` 相关逻辑。

### game_request_entry_to_castle_approved_continue_on_consequence
`public static void game_request_entry_to_castle_approved_continue_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_request_entry_to_castle_approved_continue_on_consequence` 相关逻辑。

### game_request_entry_to_castle_approved_continue_on_condition
`public static bool game_request_entry_to_castle_approved_continue_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_request_entry_to_castle_approved_continue_on_condition` 相关逻辑。

### game_request_entry_to_castle_rejected_continue_on_consequence
`public static void game_request_entry_to_castle_rejected_continue_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_request_entry_to_castle_rejected_continue_on_consequence` 相关逻辑。

### menu_castle_entry_denied_on_init
`public static void menu_castle_entry_denied_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `menu_castle_entry_denied_on_init` 相关逻辑。

### game_menu_castle_menu_sound_on_init
`public static void game_menu_castle_menu_sound_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_castle_menu_sound_on_init` 相关逻辑。

## 使用示例

```csharp
var value = new EncounterGameMenuBehavior();
value.SyncData(dataStore);
```

## 参见

- [完整类目录](../catalog)