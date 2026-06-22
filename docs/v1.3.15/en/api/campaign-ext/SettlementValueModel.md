<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementValueModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementValueModel : MBGameModel<SettlementValueModel>`
**Base:** `MBGameModel<SettlementValueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementValueModel.cs`

## Overview

`SettlementValueModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementValueModel>(new MySettlementValueModel())` to change how it computes.

## Key Methods

### FindMostSuitableHomeSettlement
```csharp
public abstract Settlement FindMostSuitableHomeSettlement(Clan clan)
```

### CalculateSettlementValueForFaction
```csharp
public abstract float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)
```

### CalculateSettlementBaseValue
```csharp
public abstract float CalculateSettlementBaseValue(Settlement settlement)
```

### CalculateSettlementValueForEnemyHero
```csharp
public abstract float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)
```

## Usage Example

```csharp
// Typical usage of SettlementValueModel (Model)
Game.Current.ReplaceModel<SettlementValueModel>(new MySettlementValueModel());
```

## See Also

- [Complete Class Catalog](../catalog)