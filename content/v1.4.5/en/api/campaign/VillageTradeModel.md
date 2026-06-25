---
title: "VillageTradeModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageTradeModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageTradeModel : MBGameModel<VillageTradeModel>`
**Base:** `MBGameModel<VillageTradeModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VillageTradeModel.cs`

## Overview

`VillageTradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `VillageTradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TradeBoundDistanceLimitAsDays
`public abstract float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `trade bound distance limit as days`.

### GetTradeBoundToAssignForVillage
`public abstract Settlement GetTradeBoundToAssignForVillage(Village village)`

**Purpose:** Gets the current value of `trade bound to assign for village`.

## Usage Example

```csharp
var implementation = new CustomVillageTradeModel();
```

## See Also

- [Complete Class Catalog](../catalog)