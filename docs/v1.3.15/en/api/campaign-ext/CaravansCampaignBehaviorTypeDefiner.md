<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravansCampaignBehaviorTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravansCampaignBehaviorTypeDefiner

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CaravansCampaignBehaviorTypeDefiner` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TradeAgreementsCampaignBehavior` | `public ITradeAgreementsCampaignBehavior TradeAgreementsCampaignBehavior { get; }` |
| `ProfitRate` | `public float ProfitRate { get; }` |
| `Size` | `public int Size { get; }` |


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### OnSessionLaunched

```csharp
public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)
```

### SpawnCaravan

```csharp
public void SpawnCaravan(Hero hero, bool initialSpawn = false)
```

### DailyTick

```csharp
public void DailyTick()
```

### HourlyTickParty

```csharp
public void HourlyTickParty(MobileParty mobileParty)
```

### OnSettlementEntered

```csharp
public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)
```

### OnSettlementLeft

```csharp
public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)
```

### OnSellAction

```csharp
public void OnSellAction(Settlement soldSettlement, int sellPrice)
```

### Reset

```csharp
public void Reset()
```

### CreateNewLog

```csharp
public CaravansCampaignBehavior.TradeActionLog CreateNewLog(Settlement boughtSettlement, int buyPrice, ItemRosterElement itemRosterElement)
```

### ReleaseLog

```csharp
public void ReleaseLog(CaravansCampaignBehavior.TradeActionLog log)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)