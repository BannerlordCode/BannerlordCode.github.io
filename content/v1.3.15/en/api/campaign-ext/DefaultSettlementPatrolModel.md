---
title: "DefaultSettlementPatrolModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementPatrolModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementPatrolModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementPatrolModel : SettlementPatrolModel`
**Base:** `SettlementPatrolModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementPatrolModel.cs`

## Overview

`DefaultSettlementPatrolModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementPatrolModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPatrolPartySpawnDuration
`public override CampaignTime GetPatrolPartySpawnDuration(Settlement settlement, bool naval)`

**Purpose:** Gets the current value of `patrol party spawn duration`.

### CanSettlementHavePatrolParties
`public override bool CanSettlementHavePatrolParties(Settlement settlement, bool naval)`

**Purpose:** Checks whether the current object can `settlement have patrol parties`.

### GetPartyTemplateForPatrolParty
`public override PartyTemplateObject GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)`

**Purpose:** Gets the current value of `party template for patrol party`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementPatrolModel>(new MyDefaultSettlementPatrolModel());
```

## See Also

- [Complete Class Catalog](../catalog)