---
title: "VolunteerModel"
description: "Auto-generated class reference for VolunteerModel."
---
# VolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**Base:** `MBGameModel<VolunteerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`

## Overview

`VolunteerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `VolunteerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public abstract int MaxVolunteerTier { get; }` |

## Key Methods

### MaximumIndexHeroCanRecruitFromHero
`public abstract int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)`

**Purpose:** Executes the MaximumIndexHeroCanRecruitFromHero logic.

```csharp
// Obtain an instance of VolunteerModel from the subsystem API first
VolunteerModel volunteerModel = ...;
var result = volunteerModel.MaximumIndexHeroCanRecruitFromHero(buyerHero, sellerHero, 0);
```

### MaximumIndexGarrisonCanRecruitFromHero
`public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`

**Purpose:** Executes the MaximumIndexGarrisonCanRecruitFromHero logic.

```csharp
// Obtain an instance of VolunteerModel from the subsystem API first
VolunteerModel volunteerModel = ...;
var result = volunteerModel.MaximumIndexGarrisonCanRecruitFromHero(settlement, sellerHero);
```

### GetDailyVolunteerProductionProbability
`public abstract float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`

**Purpose:** Reads and returns the daily volunteer production probability value held by the this instance.

```csharp
// Obtain an instance of VolunteerModel from the subsystem API first
VolunteerModel volunteerModel = ...;
var result = volunteerModel.GetDailyVolunteerProductionProbability(hero, 0, settlement);
```

### GetBasicVolunteer
`public abstract CharacterObject GetBasicVolunteer(Hero hero)`

**Purpose:** Reads and returns the basic volunteer value held by the this instance.

```csharp
// Obtain an instance of VolunteerModel from the subsystem API first
VolunteerModel volunteerModel = ...;
var result = volunteerModel.GetBasicVolunteer(hero);
```

### CanHaveRecruits
`public abstract bool CanHaveRecruits(Hero hero)`

**Purpose:** Checks whether the this instance meets the preconditions for have recruits.

```csharp
// Obtain an instance of VolunteerModel from the subsystem API first
VolunteerModel volunteerModel = ...;
var result = volunteerModel.CanHaveRecruits(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
VolunteerModel instance = ...;
```

## See Also

- [Area Index](../)