---
title: "CrimeCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CrimeCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CrimeCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CrimeCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CrimeCampaignBehavior.cs`

## 概述

`CrimeCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### game_menu_town_criminal_on_init
`public static void game_menu_town_criminal_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `game_menu_town_criminal_on_init` 相关逻辑。

### town_inside_criminal_on_init
`public static void town_inside_criminal_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `town_inside_criminal_on_init` 相关逻辑。

### town_discuss_criminal_surrender_on_init
`public static void town_discuss_criminal_surrender_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `town_discuss_criminal_surrender_on_init` 相关逻辑。

### criminal_inside_menu_pay_by_punishment_on_condition
`public static bool criminal_inside_menu_pay_by_punishment_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_pay_by_punishment_on_condition` 相关逻辑。

### criminal_inside_menu_pay_by_punishment_on_consequence
`public static void criminal_inside_menu_pay_by_punishment_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_pay_by_punishment_on_consequence` 相关逻辑。

### criminal_inside_menu_give_money_on_condition
`public static bool criminal_inside_menu_give_money_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_give_money_on_condition` 相关逻辑。

### criminal_inside_menu_give_money_on_consequence
`public static void criminal_inside_menu_give_money_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_give_money_on_consequence` 相关逻辑。

### criminal_inside_menu_give_influence_on_condition
`public static bool criminal_inside_menu_give_influence_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_give_influence_on_condition` 相关逻辑。

### criminal_inside_menu_give_influence_on_consequence
`public static void criminal_inside_menu_give_influence_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_give_influence_on_consequence` 相关逻辑。

### criminal_inside_menu_give_punishment_and_money_on_condition
`public static bool criminal_inside_menu_give_punishment_and_money_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_give_punishment_and_money_on_condition` 相关逻辑。

### criminal_inside_menu_give_punishment_and_money_on_consequence
`public static void criminal_inside_menu_give_punishment_and_money_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_give_punishment_and_money_on_consequence` 相关逻辑。

### criminal_inside_menu_give_your_life_on_condition
`public static bool criminal_inside_menu_give_your_life_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_give_your_life_on_condition` 相关逻辑。

### criminal_inside_menu_give_your_life_on_consequence
`public static void criminal_inside_menu_give_your_life_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_give_your_life_on_consequence` 相关逻辑。

### criminal_inside_menu_ignore_charges_on_condition
`public static bool criminal_inside_menu_ignore_charges_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_ignore_charges_on_condition` 相关逻辑。

### criminal_inside_menu_ignore_charges_on_consequence
`public static void criminal_inside_menu_ignore_charges_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `criminal_inside_menu_ignore_charges_on_consequence` 相关逻辑。

### town_discuss_criminal_surrender_back_on_consequence
`public static void town_discuss_criminal_surrender_back_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `town_discuss_criminal_surrender_back_on_consequence` 相关逻辑。

### town_discuss_criminal_surrender_on_condition
`public static bool town_discuss_criminal_surrender_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `town_discuss_criminal_surrender_on_condition` 相关逻辑。

## 使用示例

```csharp
var value = new CrimeCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)