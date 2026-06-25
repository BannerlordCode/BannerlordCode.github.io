---
title: "ClanPoliticsModel"
description: "Auto-generated class reference for ClanPoliticsModel."
---
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

**Purpose:** Calculates the current value or result of influence change.

```csharp
// Obtain an instance of ClanPoliticsModel from the subsystem API first
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.CalculateInfluenceChange(clan, false);
```

### CalculateSupportForPolicyInClan
`public abstract float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**Purpose:** Calculates the current value or result of support for policy in clan.

```csharp
// Obtain an instance of ClanPoliticsModel from the subsystem API first
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.CalculateSupportForPolicyInClan(clan, policy);
```

### CalculateRelationshipChangeWithSponsor
`public abstract float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**Purpose:** Calculates the current value or result of relationship change with sponsor.

```csharp
// Obtain an instance of ClanPoliticsModel from the subsystem API first
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.CalculateRelationshipChangeWithSponsor(clan, sponsorClan);
```

### GetInfluenceRequiredToOverrideKingdomDecision
`public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**Purpose:** Reads and returns the influence required to override kingdom decision value held by the this instance.

```csharp
// Obtain an instance of ClanPoliticsModel from the subsystem API first
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.GetInfluenceRequiredToOverrideKingdomDecision(popularOption, overridingOption, decision);
```

### CanHeroBeGovernor
`public abstract bool CanHeroBeGovernor(Hero hero)`

**Purpose:** Checks whether the this instance meets the preconditions for hero be governor.

```csharp
// Obtain an instance of ClanPoliticsModel from the subsystem API first
ClanPoliticsModel clanPoliticsModel = ...;
var result = clanPoliticsModel.CanHeroBeGovernor(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ClanPoliticsModel instance = ...;
```

## See Also

- [Area Index](../)