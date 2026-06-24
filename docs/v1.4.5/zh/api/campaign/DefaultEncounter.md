<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultEncounter`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultEncounter

**Namespace:** TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounter`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers/DefaultEncounter.cs`

## 概述

`DefaultEncounter` 位于 `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### game_menu_taken_prisoner_ui_on_init
`public static void game_menu_taken_prisoner_ui_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_taken_prisoner_ui_on_init` 相关逻辑。

### game_menu_defeat_and_taken_prisoner_ui_on_init
`public static void game_menu_defeat_and_taken_prisoner_ui_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_defeat_and_taken_prisoner_ui_on_init` 相关逻辑。

### game_menu_taken_prisoner_town_ui_on_init
`public static void game_menu_taken_prisoner_town_ui_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_taken_prisoner_town_ui_on_init` 相关逻辑。

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_on_init` 相关逻辑。

### game_menu_attackers_left_on_init
`public static void game_menu_attackers_left_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_attackers_left_on_init` 相关逻辑。

### game_menu_new_game_begin_on_init
`public static void game_menu_new_game_begin_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_new_game_begin_on_init` 相关逻辑。

### game_menu_kingdom_mno_call_to_arms_on_consequence
`public static void game_menu_kingdom_mno_call_to_arms_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_kingdom_mno_call_to_arms_on_consequence` 相关逻辑。

### game_menu_encyclopedia_on_consequence
`public static void game_menu_encyclopedia_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_encyclopedia_on_consequence` 相关逻辑。

### game_menu_town_menu_request_meeting_on_init
`public static void game_menu_town_menu_request_meeting_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_menu_request_meeting_on_init` 相关逻辑。

## 使用示例

```csharp
DefaultEncounter.game_menu_taken_prisoner_ui_on_init(args);
```

## 参见

- [完整类目录](../catalog)