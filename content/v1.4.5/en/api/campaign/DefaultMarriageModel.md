---
title: "DefaultMarriageModel"
description: "Auto-generated class reference for DefaultMarriageModel."
---
# DefaultMarriageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMarriageModel : MarriageModel`
**Base:** `MarriageModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMarriageModel.cs`

## Overview

`DefaultMarriageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMarriageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsCoupleSuitableForMarriage
`public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Determines whether the current object is in the `couple suitable for marriage` state or condition.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsCoupleSuitableForMarriage(firstHero, secondHero);
```

### IsClanSuitableForMarriage
`public override bool IsClanSuitableForMarriage(Clan clan)`

**Purpose:** Determines whether the current object is in the `clan suitable for marriage` state or condition.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsClanSuitableForMarriage(clan);
```

### NpcCoupleMarriageChance
`public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.NpcCoupleMarriageChance(firstHero, secondHero);
```

### ShouldNpcMarriageBetweenClansBeAllowed
`public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.ShouldNpcMarriageBetweenClansBeAllowed(consideringClan, targetClan);
```

### GetAdultChildrenSuitableForMarriage
`public override List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

**Purpose:** Reads and returns the `adult children suitable for marriage` value held by the current object.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetAdultChildrenSuitableForMarriage(hero);
```

### GetEffectiveRelationIncrease
`public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`

**Purpose:** Reads and returns the `effective relation increase` value held by the current object.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetEffectiveRelationIncrease(firstHero, secondHero);
```

### IsSuitableForMarriage
`public override bool IsSuitableForMarriage(Hero maidenOrSuitor)`

**Purpose:** Determines whether the current object is in the `suitable for marriage` state or condition.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.IsSuitableForMarriage(maidenOrSuitor);
```

### GetClanAfterMarriage
`public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)`

**Purpose:** Reads and returns the `clan after marriage` value held by the current object.

```csharp
// Obtain an instance of DefaultMarriageModel from the subsystem API first
DefaultMarriageModel defaultMarriageModel = ...;
var result = defaultMarriageModel.GetClanAfterMarriage(firstHero, secondHero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMarriageModel>(new MyDefaultMarriageModel());
```

## See Also

- [Area Index](../)