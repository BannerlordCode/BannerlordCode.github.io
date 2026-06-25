---
title: "DefaultSettlementProsperityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementProsperityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementProsperityModel : SettlementProsperityModel`
**Base:** `SettlementProsperityModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementProsperityModel.cs`

## Overview

`DefaultSettlementProsperityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementProsperityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateProsperityChange
`public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate prosperity change`.

### CalculateHearthChange
`public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate hearth change`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementProsperityModel>(new MyDefaultSettlementProsperityModel());
```

## See Also

- [Complete Class Catalog](../catalog)