---
title: "DefaultSettlementValueModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementValueModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementValueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**Base:** `SettlementValueModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementValueModel.cs`

## Overview

`DefaultSettlementValueModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementValueModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### FindMostSuitableHomeSettlement
`public override Settlement FindMostSuitableHomeSettlement(Clan clan)`

**Purpose:** Handles logic related to `find most suitable home settlement`.

### CalculateSettlementBaseValue
`public override float CalculateSettlementBaseValue(Settlement settlement)`

**Purpose:** Handles logic related to `calculate settlement base value`.

### CalculateSettlementValueForFaction
`public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)`

**Purpose:** Handles logic related to `calculate settlement value for faction`.

### CalculateSettlementValueForEnemyHero
`public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)`

**Purpose:** Handles logic related to `calculate settlement value for enemy hero`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementValueModel>(new MyDefaultSettlementValueModel());
```

## See Also

- [Complete Class Catalog](../catalog)