<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeRumorsCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeRumorsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TradeRumorsCampaignBehavior` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TradeRumors` | `public IEnumerable<TradeRumor> TradeRumors { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)