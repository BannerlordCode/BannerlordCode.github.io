---
title: "SettlementPatrolModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementPatrolModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`
**Base:** `MBGameModel<SettlementPatrolModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementPatrolModel.cs`

## Overview

`SettlementPatrolModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementPatrolModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPatrolPartySpawnDuration
`public abstract CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)`

**Purpose:** Gets the current value of `patrol party spawn duration`.

### CanSettlementHavePatrolParties
`public abstract bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)`

**Purpose:** Checks whether the current object can `settlement have patrol parties`.

### GetPartyTemplateForPatrolParty
`public abstract PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)`

**Purpose:** Gets the current value of `party template for patrol party`.

## Usage Example

```csharp
var implementation = new CustomSettlementPatrolModel();
```

## See Also

- [Complete Class Catalog](../catalog)