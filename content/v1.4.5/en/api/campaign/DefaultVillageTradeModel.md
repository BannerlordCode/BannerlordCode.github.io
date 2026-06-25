---
title: "DefaultVillageTradeModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVillageTradeModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultVillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTradeModel : VillageTradeModel`
**Base:** `VillageTradeModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultVillageTradeModel.cs`

## Overview

`DefaultVillageTradeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultVillageTradeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### TradeBoundDistanceLimitAsDays
`public override float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)`

**Purpose:** Handles logic related to `trade bound distance limit as days`.

### GetTradeBoundToAssignForVillage
`public override Settlement GetTradeBoundToAssignForVillage(Village village)`

**Purpose:** Gets the current value of `trade bound to assign for village`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultVillageTradeModel>(new MyDefaultVillageTradeModel());
```

## See Also

- [Complete Class Catalog](../catalog)