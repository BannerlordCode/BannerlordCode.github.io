---
title: "BarterModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BarterModel : MBGameModel<BarterModel>`
**Base:** `MBGameModel<BarterModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BarterModel.cs`

## Overview

`BarterModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BarterModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BarterCooldownWithHeroInDays` | `public abstract int BarterCooldownWithHeroInDays { get; }` |
| `MaximumPercentageOfNpcGoldToSpendAtBarter` | `public abstract float MaximumPercentageOfNpcGoldToSpendAtBarter { get; }` |

## Key Methods

### CalculateOverpayRelationIncreaseCosts
`public abstract int CalculateOverpayRelationIncreaseCosts(Hero hero, float overpayAmount)`

**Purpose:** Handles logic related to `calculate overpay relation increase costs`.

### GetBarterPenalty
`public abstract ExplainedNumber GetBarterPenalty(IFaction faction, ItemBarterable itemBarterable, Hero otherHero, PartyBase otherParty)`

**Purpose:** Gets the current value of `barter penalty`.

## Usage Example

```csharp
var implementation = new CustomBarterModel();
```

## See Also

- [Complete Class Catalog](../catalog)