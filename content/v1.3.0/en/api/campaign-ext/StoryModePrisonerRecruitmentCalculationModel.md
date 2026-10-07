---
title: "StoryModePrisonerRecruitmentCalculationModel"
description: "Auto-generated class reference for StoryModePrisonerRecruitmentCalculationModel."
---
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`

## Overview

`StoryModePrisonerRecruitmentCalculationModel` governs how prisoners join the player's party, and its single edit stops conformity from rising during the tutorial. `GetConformityChangePerHour` (StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs:18) returns a zero-valued `ExplainedNumber` when the party is the main party and the tutorial phase is unfinished (`:20`, `:22`); otherwise it returns the sandbox hourly rate (`:24`). The five other members — recruitable count, conformity needed, morale effect, the recruitable check and the party-level recruitment gate — are unmodified passthroughs (`:14`, `:30`, `:36`, `:42`, `:48`).

## Mental Model

The zero is on the *rate*, not the threshold, which is the distinction that matters: prisoners still accumulate conformity by other routes during the tutorial, they simply do not gain any per hour from being in the party. The consumers are the prisoner-recruitment behaviour, which reads the recruitable count at `RecruitPrisonersCampaignBehavior.cs:38` for the main party and at `:68` for any other mobile party, and the conformity rate itself feeds the hourly tick that same behaviour applies. Because the condition tests `party == PartyBase.MainParty` by reference (`:20`), a mod that hands the tutorial a different party reference will see conformity tick normally there while the real main party stays frozen; and because the class exposes no way to configure the sandbox rate, restoring normal ticking means returning the base value rather than a tuned constant.

## Key Methods

### CalculateRecruitableNumber
`public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**Purpose:** Calculates the current value or result of recruitable number.

```csharp
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.CalculateRecruitableNumber(party, character);
```

### GetConformityChangePerHour
`public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)`

**Purpose:** Reads and returns the conformity change per hour value held by this instance.

```csharp
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetConformityChangePerHour(party, character);
```

### GetConformityNeededToRecruitPrisoner
`public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**Purpose:** Reads and returns the conformity needed to recruit prisoner value held by this instance.

```csharp
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetConformityNeededToRecruitPrisoner(character);
```

### GetPrisonerRecruitmentMoraleEffect
`public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**Purpose:** Reads and returns the prisoner recruitment morale effect value held by this instance.

```csharp
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetPrisonerRecruitmentMoraleEffect(party, character, 0);
```

### IsPrisonerRecruitable
`public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**Purpose:** Determines whether this instance is in the prisoner recruitable state or condition.

```csharp
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.IsPrisonerRecruitable(party, character, conformityNeeded);
```

### ShouldPartyRecruitPrisoners
`public override bool ShouldPartyRecruitPrisoners(PartyBase party)`

**Purpose:** Executes the ShouldPartyRecruitPrisoners logic.

```csharp
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.ShouldPartyRecruitPrisoners(party);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<PrisonerRecruitmentCalculationModel>(new StoryModePrisonerRecruitmentCalculationModel());
}
```

`PrisonerRecruitmentCalculationModel` is declared as `MBGameModel<PrisonerRecruitmentCalculationModel>` (`PrisonerRecruitmentCalculationModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:103`.

## See Also

- [Area Index](../)