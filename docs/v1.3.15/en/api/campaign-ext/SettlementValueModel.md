<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementValueModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementValueModel : MBGameModel<SettlementValueModel>`
**Base:** `MBGameModel<SettlementValueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementValueModel.cs`

## Overview

`SettlementValueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementValueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FindMostSuitableHomeSettlement
`public abstract Settlement FindMostSuitableHomeSettlement(Clan clan)`

**Purpose:** Handles logic related to `find most suitable home settlement`.

### CalculateSettlementValueForFaction
`public abstract float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)`

**Purpose:** Handles logic related to `calculate settlement value for faction`.

### CalculateSettlementBaseValue
`public abstract float CalculateSettlementBaseValue(Settlement settlement)`

**Purpose:** Handles logic related to `calculate settlement base value`.

### CalculateSettlementValueForEnemyHero
`public abstract float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)`

**Purpose:** Handles logic related to `calculate settlement value for enemy hero`.

## Usage Example

```csharp
var implementation = new CustomSettlementValueModel();
```

## See Also

- [Complete Class Catalog](../catalog)