---
title: "CaravansCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaravansCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravansCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravansCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs`

## 概述

`CaravansCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TradeAgreementsCampaignBehavior` | `public ITradeAgreementsCampaignBehavior TradeAgreementsCampaignBehavior { get; }` |
| `ProfitRate` | `public float ProfitRate { get; }` |
| `Size` | `public int Size { get; }` |

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

### SpawnCaravan
`public void SpawnCaravan(Hero hero, bool initialSpawn = false)`

**用途 / Purpose:** 处理 `spawn caravan` 相关逻辑。

### DailyTick
`public void DailyTick()`

**用途 / Purpose:** 处理 `daily tick` 相关逻辑。

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `hourly tick party` 相关逻辑。

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `settlement entered` 事件触发时调用此方法。

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 当 `settlement left` 事件触发时调用此方法。

### OnSellAction
`public void OnSellAction(Settlement soldSettlement, int sellPrice)`

**用途 / Purpose:** 当 `sell action` 事件触发时调用此方法。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### CreateNewLog
`public CaravansCampaignBehavior.TradeActionLog CreateNewLog(Settlement boughtSettlement, int buyPrice, ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 创建一个 `new log` 实例或对象。

### ReleaseLog
`public void ReleaseLog(CaravansCampaignBehavior.TradeActionLog log)`

**用途 / Purpose:** 处理 `release log` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new CaravansCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)