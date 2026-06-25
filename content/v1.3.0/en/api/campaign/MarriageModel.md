---
title: "MarriageModel"
description: "Auto-generated class reference for MarriageModel."
---
# MarriageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel>`
**Base:** `MBGameModel<MarriageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`

## Overview

`MarriageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MarriageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public abstract int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public abstract int MinimumMarriageAgeFemale { get; }` |

## Key Methods

### IsCoupleSuitableForMarriage
`public abstract bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Determines whether the current object is in the `couple suitable for marriage` state or condition.

```csharp
// Obtain an instance of MarriageModel from the subsystem API first
MarriageModel marriageModel = ...;
var result = marriageModel.IsCoupleSuitableForMarriage(firstHero, secondHero);
```

### GetEffectiveRelationIncrease
`public abstract int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**Purpose:** Reads and returns the `effective relation increase` value held by the current object.

```csharp
// Obtain an instance of MarriageModel from the subsystem API first
MarriageModel marriageModel = ...;
var result = marriageModel.GetEffectiveRelationIncrease(firstHero, secondHero);
```

### GetClanAfterMarriage
`public abstract Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Reads and returns the `clan after marriage` value held by the current object.

```csharp
// Obtain an instance of MarriageModel from the subsystem API first
MarriageModel marriageModel = ...;
var result = marriageModel.GetClanAfterMarriage(firstHero, secondHero);
```

### IsSuitableForMarriage
`public abstract bool IsSuitableForMarriage(Hero hero)`

**Purpose:** Determines whether the current object is in the `suitable for marriage` state or condition.

```csharp
// Obtain an instance of MarriageModel from the subsystem API first
MarriageModel marriageModel = ...;
var result = marriageModel.IsSuitableForMarriage(hero);
```

### IsClanSuitableForMarriage
`public abstract bool IsClanSuitableForMarriage(Clan clan)`

**Purpose:** Determines whether the current object is in the `clan suitable for marriage` state or condition.

```csharp
// Obtain an instance of MarriageModel from the subsystem API first
MarriageModel marriageModel = ...;
var result = marriageModel.IsClanSuitableForMarriage(clan);
```

### NpcCoupleMarriageChance
`public abstract float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MarriageModel from the subsystem API first
MarriageModel marriageModel = ...;
var result = marriageModel.NpcCoupleMarriageChance(firstHero, secondHero);
```

### ShouldNpcMarriageBetweenClansBeAllowed
`public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MarriageModel from the subsystem API first
MarriageModel marriageModel = ...;
var result = marriageModel.ShouldNpcMarriageBetweenClansBeAllowed(consideringClan, targetClan);
```

### GetAdultChildrenSuitableForMarriage
`public abstract List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**Purpose:** Reads and returns the `adult children suitable for marriage` value held by the current object.

```csharp
// Obtain an instance of MarriageModel from the subsystem API first
MarriageModel marriageModel = ...;
var result = marriageModel.GetAdultChildrenSuitableForMarriage(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MarriageModel instance = ...;
```

## See Also

- [Area Index](../)