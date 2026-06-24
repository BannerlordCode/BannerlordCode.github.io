<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrisonerRecruitmentCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerRecruitmentCalculationModel : MBGameModel<PrisonerRecruitmentCalculationModel>`
**Base:** `MBGameModel<PrisonerRecruitmentCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs`

## Overview

`PrisonerRecruitmentCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PrisonerRecruitmentCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetConformityNeededToRecruitPrisoner
`public abstract int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**Purpose:** Gets the current value of `conformity needed to recruit prisoner`.

### GetConformityChangePerHour
`public abstract ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)`

**Purpose:** Gets the current value of `conformity change per hour`.

### GetPrisonerRecruitmentMoraleEffect
`public abstract int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**Purpose:** Gets the current value of `prisoner recruitment morale effect`.

### IsPrisonerRecruitable
`public abstract bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**Purpose:** Handles logic related to `is prisoner recruitable`.

### ShouldPartyRecruitPrisoners
`public abstract bool ShouldPartyRecruitPrisoners(PartyBase party)`

**Purpose:** Handles logic related to `should party recruit prisoners`.

### CalculateRecruitableNumber
`public abstract int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**Purpose:** Handles logic related to `calculate recruitable number`.

## Usage Example

```csharp
var implementation = new CustomPrisonerRecruitmentCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)