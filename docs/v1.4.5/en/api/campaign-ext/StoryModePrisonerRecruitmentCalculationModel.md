<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModePrisonerRecruitmentCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`

## Overview

`StoryModePrisonerRecruitmentCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModePrisonerRecruitmentCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateRecruitableNumber
`public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**Purpose:** Handles logic related to `calculate recruitable number`.

### GetConformityChangePerHour
`public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)`

**Purpose:** Gets the current value of `conformity change per hour`.

### GetConformityNeededToRecruitPrisoner
`public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**Purpose:** Gets the current value of `conformity needed to recruit prisoner`.

### GetPrisonerRecruitmentMoraleEffect
`public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**Purpose:** Gets the current value of `prisoner recruitment morale effect`.

### IsPrisonerRecruitable
`public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**Purpose:** Handles logic related to `is prisoner recruitable`.

### ShouldPartyRecruitPrisoners
`public override bool ShouldPartyRecruitPrisoners(PartyBase party)`

**Purpose:** Handles logic related to `should party recruit prisoners`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModePrisonerRecruitmentCalculationModel>(new MyStoryModePrisonerRecruitmentCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)