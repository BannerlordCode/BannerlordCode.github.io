---
title: "DefaultClanPoliticsModel"
description: "Auto-generated class reference for DefaultClanPoliticsModel."
---
# DefaultClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**Base:** `ClanPoliticsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs`

## Overview

`DefaultClanPoliticsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanPoliticsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateInfluenceChange
`public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of influence change.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateInfluenceChange(clan, false);
```

### CalculateSupportForPolicyInClan
`public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**Purpose:** **Purpose:** Calculates the current value or result of support for policy in clan.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateSupportForPolicyInClan(clan, policy);
```

### CalculateRelationshipChangeWithSponsor
`public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**Purpose:** **Purpose:** Calculates the current value or result of relationship change with sponsor.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CalculateRelationshipChangeWithSponsor(clan, sponsorClan);
```

### GetInfluenceRequiredToOverrideKingdomDecision
`public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**Purpose:** **Purpose:** Reads and returns the influence required to override kingdom decision value held by the this instance.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.GetInfluenceRequiredToOverrideKingdomDecision(popularOption, overridingOption, decision);
```

### CanHeroBeGovernor
`public override bool CanHeroBeGovernor(Hero hero)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero be governor.

```csharp
// Obtain an instance of DefaultClanPoliticsModel from the subsystem API first
DefaultClanPoliticsModel defaultClanPoliticsModel = ...;
var result = defaultClanPoliticsModel.CanHeroBeGovernor(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultClanPoliticsModel>(new MyDefaultClanPoliticsModel());
```

## See Also

- [Area Index](../)