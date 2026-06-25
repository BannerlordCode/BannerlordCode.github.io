---
title: "ClanPoliticsModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPoliticsModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanPoliticsModel : MBGameModel<ClanPoliticsModel>`
**Base:** `MBGameModel<ClanPoliticsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs`

## Overview

`ClanPoliticsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ClanPoliticsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateInfluenceChange
`public abstract ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate influence change`.

### CalculateSupportForPolicyInClan
`public abstract float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**Purpose:** Handles logic related to `calculate support for policy in clan`.

### CalculateRelationshipChangeWithSponsor
`public abstract float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**Purpose:** Handles logic related to `calculate relationship change with sponsor`.

### GetInfluenceRequiredToOverrideKingdomDecision
`public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**Purpose:** Gets the current value of `influence required to override kingdom decision`.

### CanHeroBeGovernor
`public abstract bool CanHeroBeGovernor(Hero hero)`

**Purpose:** Checks whether the current object can `hero be governor`.

## Usage Example

```csharp
var implementation = new CustomClanPoliticsModel();
```

## See Also

- [Complete Class Catalog](../catalog)