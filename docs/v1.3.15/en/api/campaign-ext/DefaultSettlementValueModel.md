<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementValueModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**Base:** `SettlementValueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs`

## Overview

`DefaultSettlementValueModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementValueModel>(new MyDefaultSettlementValueModel())` to change how it computes.

## Key Methods

### FindMostSuitableHomeSettlement
```csharp
public override Settlement FindMostSuitableHomeSettlement(Clan clan)
```

### CalculateSettlementBaseValue
```csharp
public override float CalculateSettlementBaseValue(Settlement settlement)
```

### CalculateSettlementValueForFaction
```csharp
public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)
```

### CalculateSettlementValueForEnemyHero
```csharp
public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementValueModel (Model)
Game.Current.ReplaceModel<DefaultSettlementValueModel>(new MyDefaultSettlementValueModel());
```

## See Also

- [Complete Class Catalog](../catalog)