---
title: "PartySizeLimitModel"
description: "Auto-generated class reference for PartySizeLimitModel."
---
# PartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**Base:** `MBGameModel<PartySizeLimitModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartySizeLimitModel.cs`

## Overview

`PartySizeLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartySizeLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public abstract int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## Key Methods

### GetPartyMemberSizeLimit
`public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the party member size limit value held by the this instance.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetPartyMemberSizeLimit(party, false);
```

### GetPartyPrisonerSizeLimit
`public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the party prisoner size limit value held by the this instance.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetPartyPrisonerSizeLimit(party, false);
```

### CalculateGarrisonPartySizeLimit
`public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of garrison party size limit.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.CalculateGarrisonPartySizeLimit(settlement, false);
```

### GetClanTierPartySizeEffectForHero
`public abstract int GetClanTierPartySizeEffectForHero(Hero hero)`

**Purpose:** Reads and returns the clan tier party size effect for hero value held by the this instance.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetClanTierPartySizeEffectForHero(hero);
```

### GetNextClanTierPartySizeEffectChangeForHero
`public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**Purpose:** Reads and returns the next clan tier party size effect change for hero value held by the this instance.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetNextClanTierPartySizeEffectChangeForHero(hero);
```

### GetAssumedPartySizeForLordParty
`public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**Purpose:** Reads and returns the assumed party size for lord party value held by the this instance.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetAssumedPartySizeForLordParty(leaderHero, partyMapFaction, actualClan);
```

### GetIdealVillagerPartySize
`public abstract int GetIdealVillagerPartySize(Village village)`

**Purpose:** Reads and returns the ideal villager party size value held by the this instance.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.GetIdealVillagerPartySize(village);
```

### FindAppropriateInitialRosterForMobileParty
`public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Looks up the matching appropriate initial roster for mobile party in the current collection or scope.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.FindAppropriateInitialRosterForMobileParty(party, partyTemplate);
```

### FindAppropriateInitialShipsForMobileParty
`public abstract List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Looks up the matching appropriate initial ships for mobile party in the current collection or scope.

```csharp
// Obtain an instance of PartySizeLimitModel from the subsystem API first
PartySizeLimitModel partySizeLimitModel = ...;
var result = partySizeLimitModel.FindAppropriateInitialShipsForMobileParty(party, partyTemplate);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartySizeLimitModel instance = ...;
```

## See Also

- [Area Index](../)