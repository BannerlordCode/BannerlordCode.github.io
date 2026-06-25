---
title: "DefaultPrisonerRecruitmentCalculationModel"
description: "Auto-generated class reference for DefaultPrisonerRecruitmentCalculationModel."
---
# DefaultPrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs`

## Overview

`DefaultPrisonerRecruitmentCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPrisonerRecruitmentCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetConformityNeededToRecruitPrisoner
`public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**Purpose:** Reads and returns the `conformity needed to recruit prisoner` value held by the current object.

```csharp
// Obtain an instance of DefaultPrisonerRecruitmentCalculationModel from the subsystem API first
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.GetConformityNeededToRecruitPrisoner(character);
```

### GetConformityChangePerHour
`public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject troopToBoost)`

**Purpose:** Reads and returns the `conformity change per hour` value held by the current object.

```csharp
// Obtain an instance of DefaultPrisonerRecruitmentCalculationModel from the subsystem API first
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.GetConformityChangePerHour(party, troopToBoost);
```

### GetPrisonerRecruitmentMoraleEffect
`public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**Purpose:** Reads and returns the `prisoner recruitment morale effect` value held by the current object.

```csharp
// Obtain an instance of DefaultPrisonerRecruitmentCalculationModel from the subsystem API first
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.GetPrisonerRecruitmentMoraleEffect(party, character, 0);
```

### IsPrisonerRecruitable
`public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**Purpose:** Determines whether the current object is in the `prisoner recruitable` state or condition.

```csharp
// Obtain an instance of DefaultPrisonerRecruitmentCalculationModel from the subsystem API first
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.IsPrisonerRecruitable(party, character, conformityNeeded);
```

### ShouldPartyRecruitPrisoners
`public override bool ShouldPartyRecruitPrisoners(PartyBase party)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultPrisonerRecruitmentCalculationModel from the subsystem API first
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.ShouldPartyRecruitPrisoners(party);
```

### CalculateRecruitableNumber
`public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**Purpose:** Calculates the current value or result of `recruitable number`.

```csharp
// Obtain an instance of DefaultPrisonerRecruitmentCalculationModel from the subsystem API first
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.CalculateRecruitableNumber(party, character);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPrisonerRecruitmentCalculationModel>(new MyDefaultPrisonerRecruitmentCalculationModel());
```

## See Also

- [Area Index](../)