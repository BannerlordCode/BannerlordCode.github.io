---
title: "DefaultPartySizeLimitModel"
description: "Auto-generated class reference for DefaultPartySizeLimitModel."
---
# DefaultPartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartySizeLimitModel.cs`

## Overview

`DefaultPartySizeLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartySizeLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPartyMemberSizeLimit
`public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Reads and returns the party member size limit value held by the this instance.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.GetPartyMemberSizeLimit(party, false);
```

### GetPartyPrisonerSizeLimit
`public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Reads and returns the party prisoner size limit value held by the this instance.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.GetPartyPrisonerSizeLimit(party, false);
```

### CalculateGarrisonPartySizeLimit
`public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Calculates the current value or result of garrison party size limit.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.CalculateGarrisonPartySizeLimit(settlement, false);
```

### GetNextClanTierPartySizeEffectChangeForHero
`public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the next clan tier party size effect change for hero value held by the this instance.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.GetNextClanTierPartySizeEffectChangeForHero(hero);
```

### GetAssumedPartySizeForLordParty
`public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**Purpose:** **Purpose:** Reads and returns the assumed party size for lord party value held by the this instance.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.GetAssumedPartySizeForLordParty(leaderHero, partyMapFaction, actualClan);
```

### GetClanTierPartySizeEffectForHero
`public override int GetClanTierPartySizeEffectForHero(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the clan tier party size effect for hero value held by the this instance.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.GetClanTierPartySizeEffectForHero(hero);
```

### GetIdealVillagerPartySize
`public override int GetIdealVillagerPartySize(Village village)`

**Purpose:** **Purpose:** Reads and returns the ideal villager party size value held by the this instance.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.GetIdealVillagerPartySize(village);
```

### FindAppropriateInitialRosterForMobileParty
`public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** **Purpose:** Looks up the matching appropriate initial roster for mobile party in the current collection or scope.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.FindAppropriateInitialRosterForMobileParty(party, partyTemplate);
```

### FindAppropriateInitialShipsForMobileParty
`public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** **Purpose:** Looks up the matching appropriate initial ships for mobile party in the current collection or scope.

```csharp
// Obtain an instance of DefaultPartySizeLimitModel from the subsystem API first
DefaultPartySizeLimitModel defaultPartySizeLimitModel = ...;
var result = defaultPartySizeLimitModel.FindAppropriateInitialShipsForMobileParty(party, partyTemplate);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartySizeLimitModel>(new MyDefaultPartySizeLimitModel());
```

## See Also

- [Area Index](../)