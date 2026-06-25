---
title: "TradeRumorsCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeRumorsCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeRumorsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeRumorsCampaignBehavior : CampaignBehaviorBase, ITradeRumorCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TradeRumorsCampaignBehavior.cs`

## 概述

`TradeRumorsCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TradeRumors` | `public IEnumerable<TradeRumor> TradeRumors { get; }` |

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### OnTradeRumorIsTaken
`public void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**用途 / Purpose:** 当 `trade rumor is taken` 事件触发时调用此方法。

### AddTradeRumors
`public void AddTradeRumors(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `trade rumors`。

### DailyTick
`public void DailyTick()`

**用途 / Purpose:** 处理 `daily tick` 相关逻辑。

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `settlement entered` 事件触发时调用此方法。

### DeleteExpiredRumors
`public void DeleteExpiredRumors()`

**用途 / Purpose:** 处理 `delete expired rumors` 相关逻辑。

### AddDailyTradeRumors
`public void AddDailyTradeRumors(int numberOfTradeRumors)`

**用途 / Purpose:** 向当前集合/状态中添加 `daily trade rumors`。

## 使用示例

```csharp
var value = new TradeRumorsCampaignBehavior();
value.SyncData(dataStore);
```

## 参见

- [完整类目录](../catalog)