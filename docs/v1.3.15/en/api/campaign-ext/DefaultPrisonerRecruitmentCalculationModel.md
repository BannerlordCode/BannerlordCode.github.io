<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPrisonerRecruitmentCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs`

## Overview

`DefaultPrisonerRecruitmentCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPrisonerRecruitmentCalculationModel>(new MyDefaultPrisonerRecruitmentCalculationModel())` to change how it computes.

## Key Methods

### GetConformityNeededToRecruitPrisoner
```csharp
public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)
```

### GetConformityChangePerHour
```csharp
public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject troopToBoost)
```

### GetPrisonerRecruitmentMoraleEffect
```csharp
public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)
```

### IsPrisonerRecruitable
```csharp
public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)
```

### ShouldPartyRecruitPrisoners
```csharp
public override bool ShouldPartyRecruitPrisoners(PartyBase party)
```

### CalculateRecruitableNumber
```csharp
public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)
```

## Usage Example

```csharp
// Typical usage of DefaultPrisonerRecruitmentCalculationModel (Model)
Game.Current.ReplaceModel<DefaultPrisonerRecruitmentCalculationModel>(new MyDefaultPrisonerRecruitmentCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)