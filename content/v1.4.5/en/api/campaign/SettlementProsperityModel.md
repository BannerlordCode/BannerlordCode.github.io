---
title: "SettlementProsperityModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementProsperityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementProsperityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`
**Base:** `MBGameModel<SettlementProsperityModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementProsperityModel.cs`

## Overview

`SettlementProsperityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementProsperityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateProsperityChange
`public abstract ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate prosperity change`.

### CalculateHearthChange
`public abstract ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate hearth change`.

## Usage Example

```csharp
var implementation = new CustomSettlementProsperityModel();
```

## See Also

- [Complete Class Catalog](../catalog)