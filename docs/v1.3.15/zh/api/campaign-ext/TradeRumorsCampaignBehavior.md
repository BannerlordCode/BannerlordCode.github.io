<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeRumorsCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeRumorsCampaignBehavior

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TradeRumorsCampaignBehavior` 是 `TaleWorlds.CampaignSystem.CampaignBehaviors` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TradeRumors` | `public IEnumerable<TradeRumor> TradeRumors { get; }` |


## 主要方法

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### OnTradeRumorIsTaken

```csharp
public void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)
```

### AddTradeRumors

```csharp
public void AddTradeRumors(List<TradeRumor> newRumors, Settlement sourceSettlement = null)
```

### DailyTick

```csharp
public void DailyTick()
```

### OnSettlementEntered

```csharp
public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)
```

### DeleteExpiredRumors

```csharp
public void DeleteExpiredRumors()
```

### AddDailyTradeRumors

```csharp
public void AddDailyTradeRumors(int numberOfTradeRumors)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)