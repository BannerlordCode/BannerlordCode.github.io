---
title: "AlleyCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AlleyCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AlleyCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class AlleyCampaignBehavior : CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs`

## 概述

`AlleyCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `session launched` 事件触发时调用此方法。

### GetIsPlayerAlleyUnderAttack
`public bool GetIsPlayerAlleyUnderAttack(Alley alley)`

**用途 / Purpose:** 获取 `is player alley under attack` 的当前值。

### GetPlayerOwnedAlleyTroopCount
`public int GetPlayerOwnedAlleyTroopCount(Alley alley)`

**用途 / Purpose:** 获取 `player owned alley troop count` 的当前值。

### GetResponseTimeLeftForAttackInDays
`public int GetResponseTimeLeftForAttackInDays(Alley alley)`

**用途 / Purpose:** 获取 `response time left for attack in days` 的当前值。

### AbandonAlleyFromClanMenu
`public void AbandonAlleyFromClanMenu(Alley alley)`

**用途 / Purpose:** 处理 `abandon alley from clan menu` 相关逻辑。

### IsHeroAlleyLeaderOfAnyPlayerAlley
`public bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero)`

**用途 / Purpose:** 处理 `is hero alley leader of any player alley` 相关逻辑。

### GetAllAssignedClanMembersForOwnedAlleys
`public List<Hero> GetAllAssignedClanMembersForOwnedAlleys()`

**用途 / Purpose:** 获取 `all assigned clan members for owned alleys` 的当前值。

### ChangeAlleyMember
`public void ChangeAlleyMember(Alley alley, Hero newAlleyLead)`

**用途 / Purpose:** 处理 `change alley member` 相关逻辑。

### OnPlayerRetreatedFromMission
`public void OnPlayerRetreatedFromMission()`

**用途 / Purpose:** 当 `player retreated from mission` 事件触发时调用此方法。

### OnPlayerDiedInMission
`public void OnPlayerDiedInMission()`

**用途 / Purpose:** 当 `player died in mission` 事件触发时调用此方法。

### GetAssignedClanMemberOfAlley
`public Hero GetAssignedClanMemberOfAlley(Alley alley)`

**用途 / Purpose:** 获取 `assigned clan member of alley` 的当前值。

### alley_related_menu_on_init
`public static void alley_related_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `alley_related_menu_on_init` 相关逻辑。

## 使用示例

```csharp
var value = new AlleyCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)