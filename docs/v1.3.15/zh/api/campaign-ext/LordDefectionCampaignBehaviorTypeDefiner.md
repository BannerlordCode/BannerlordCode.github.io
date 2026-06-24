<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LordDefectionCampaignBehaviorTypeDefiner`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordDefectionCampaignBehaviorTypeDefiner

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class LordDefectionCampaignBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**领域:** campaign-ext

## 概述

`LordDefectionCampaignBehaviorTypeDefiner` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

### ClearPersuasion
`public void ClearPersuasion()`

**用途 / Purpose:** 处理 `clear persuasion` 相关逻辑。

### conversation_lord_player_has_failed_in_defection_on_condition
`public bool conversation_lord_player_has_failed_in_defection_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_player_has_failed_in_defection_on_condition` 相关逻辑。

### conversation_lord_recruit_check_if_reservations_met_on_condition
`public bool conversation_lord_recruit_check_if_reservations_met_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_recruit_check_if_reservations_met_on_condition` 相关逻辑。

### conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition
`public bool conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_check_if_ready_to_join_faction_without_barter_on_condition` 相关逻辑。

### conversation_lord_defect_to_clan_without_barter_on_consequence
`public void conversation_lord_defect_to_clan_without_barter_on_consequence()`

**用途 / Purpose:** 处理 `conversation_lord_defect_to_clan_without_barter_on_consequence` 相关逻辑。

### conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition
`public bool conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_check_if_ready_to_join_faction_with_barter_on_condition` 相关逻辑。

### conversation_player_is_asking_to_recruit_enemy_on_condition
`public bool conversation_player_is_asking_to_recruit_enemy_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_asking_to_recruit_enemy_on_condition` 相关逻辑。

### conversation_player_is_asking_to_recruit_neutral_on_condition
`public bool conversation_player_is_asking_to_recruit_neutral_on_condition()`

**用途 / Purpose:** 处理 `conversation_player_is_asking_to_recruit_neutral_on_condition` 相关逻辑。

### conversation_lord_from_ruling_clan_on_condition
`public bool conversation_lord_from_ruling_clan_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_from_ruling_clan_on_condition` 相关逻辑。

### conversation_lord_redirects_to_clan_leader_on_condition
`public bool conversation_lord_redirects_to_clan_leader_on_condition()`

**用途 / Purpose:** 处理 `conversation_lord_redirects_to_clan_leader_on_condition` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 LordDefectionCampaignBehaviorTypeDefiner 实例，再调用它的公开方法
var value = new LordDefectionCampaignBehaviorTypeDefiner();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
