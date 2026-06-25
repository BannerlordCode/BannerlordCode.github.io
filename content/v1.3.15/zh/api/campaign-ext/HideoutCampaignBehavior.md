---
title: "HideoutCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HideoutCampaignBehavior : CampaignBehaviorBase, IHideoutCampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/HideoutCampaignBehavior.cs`

## 概述

`HideoutCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### OnNewGameCreated
`public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `new game created` 事件触发时调用此方法。

### OnGameLoaded
`public void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### HourlyTickSettlement
`public void HourlyTickSettlement(Settlement settlement)`

**用途 / Purpose:** 处理 `hourly tick settlement` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### GetInitialHideoutPopulation
`public int GetInitialHideoutPopulation()`

**用途 / Purpose:** 获取 `initial hideout population` 的当前值。

### hideout_wait_menu_on_condition
`public bool hideout_wait_menu_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `hideout_wait_menu_on_condition` 相关逻辑。

### hideout_wait_menu_on_tick
`public void hideout_wait_menu_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)`

**用途 / Purpose:** 处理 `hideout_wait_menu_on_tick` 相关逻辑。

### hideout_wait_menu_on_consequence
`public void hideout_wait_menu_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `hideout_wait_menu_on_consequence` 相关逻辑。

## 使用示例

```csharp
var value = new HideoutCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)