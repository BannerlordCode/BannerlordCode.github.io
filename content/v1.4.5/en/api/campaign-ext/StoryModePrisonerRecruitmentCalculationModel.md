---
title: "StoryModePrisonerRecruitmentCalculationModel"
description: "Auto-generated class reference for StoryModePrisonerRecruitmentCalculationModel."
---
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`

## Overview

`StoryModePrisonerRecruitmentCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModePrisonerRecruitmentCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateRecruitableNumber
`public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**Purpose:** **Purpose:** Calculates the current value or result of recruitable number.

```csharp
// Obtain an instance of StoryModePrisonerRecruitmentCalculationModel from the subsystem API first
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.CalculateRecruitableNumber(party, character);
```

### GetConformityChangePerHour
`public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the conformity change per hour value held by the this instance.

```csharp
// Obtain an instance of StoryModePrisonerRecruitmentCalculationModel from the subsystem API first
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetConformityChangePerHour(party, character);
```

### GetConformityNeededToRecruitPrisoner
`public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the conformity needed to recruit prisoner value held by the this instance.

```csharp
// Obtain an instance of StoryModePrisonerRecruitmentCalculationModel from the subsystem API first
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetConformityNeededToRecruitPrisoner(character);
```

### GetPrisonerRecruitmentMoraleEffect
`public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**Purpose:** **Purpose:** Reads and returns the prisoner recruitment morale effect value held by the this instance.

```csharp
// Obtain an instance of StoryModePrisonerRecruitmentCalculationModel from the subsystem API first
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetPrisonerRecruitmentMoraleEffect(party, character, 0);
```

### IsPrisonerRecruitable
`public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**Purpose:** **Purpose:** Determines whether the this instance is in the prisoner recruitable state or condition.

```csharp
// Obtain an instance of StoryModePrisonerRecruitmentCalculationModel from the subsystem API first
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.IsPrisonerRecruitable(party, character, conformityNeeded);
```

### ShouldPartyRecruitPrisoners
`public override bool ShouldPartyRecruitPrisoners(PartyBase party)`

**Purpose:** **Purpose:** Executes the ShouldPartyRecruitPrisoners logic.

```csharp
// Obtain an instance of StoryModePrisonerRecruitmentCalculationModel from the subsystem API first
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.ShouldPartyRecruitPrisoners(party);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModePrisonerRecruitmentCalculationModel>(new MyStoryModePrisonerRecruitmentCalculationModel());
```

## See Also

- [Area Index](../)