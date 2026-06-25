---
title: "MinorFactionsModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MinorFactionsModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MinorFactionsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MinorFactionsModel : MBGameModel<MinorFactionsModel>`
**Base:** `MBGameModel<MinorFactionsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs`

## Overview

`MinorFactionsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MinorFactionsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DailyMinorFactionHeroSpawnChance` | `public abstract float DailyMinorFactionHeroSpawnChance { get; }` |
| `MinorFactionHeroLimit` | `public abstract int MinorFactionHeroLimit { get; }` |

## Key Methods

### GetMercenaryAwardFactorToJoinKingdom
`public abstract int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)`

**Purpose:** Gets the current value of `mercenary award factor to join kingdom`.

## Usage Example

```csharp
var implementation = new CustomMinorFactionsModel();
```

## See Also

- [Complete Class Catalog](../catalog)