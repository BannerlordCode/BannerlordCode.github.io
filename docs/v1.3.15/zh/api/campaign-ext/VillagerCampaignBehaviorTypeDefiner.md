<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillagerCampaignBehaviorTypeDefiner`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillagerCampaignBehaviorTypeDefiner

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class VillagerCampaignBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**领域:** campaign-ext

## 概述

`VillagerCampaignBehaviorTypeDefiner` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### DailyTick
`public void DailyTick()`

**用途 / Purpose:** 处理 `daily tick` 相关逻辑。

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `session launched` 事件触发时调用此方法。

### taking_food_from_villagers_wait_on_condition
`public bool taking_food_from_villagers_wait_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `taking_food_from_villagers_wait_on_condition` 相关逻辑。

### press_into_service_confirm_on_condition
`public bool press_into_service_confirm_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `press_into_service_confirm_on_condition` 相关逻辑。

### taking_food_from_villagers_wait_on_consequence
`public void taking_food_from_villagers_wait_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `taking_food_from_villagers_wait_on_consequence` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 VillagerCampaignBehaviorTypeDefiner 实例，再调用它的公开方法
var value = new VillagerCampaignBehaviorTypeDefiner();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
