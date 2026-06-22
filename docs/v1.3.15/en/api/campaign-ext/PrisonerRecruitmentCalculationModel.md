<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrisonerRecruitmentCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerRecruitmentCalculationModel : MBGameModel<PrisonerRecruitmentCalculationModel>`
**Base:** `MBGameModel<PrisonerRecruitmentCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs`

## Overview

`PrisonerRecruitmentCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PrisonerRecruitmentCalculationModel>(new MyPrisonerRecruitmentCalculationModel())` to change how it computes.

## Key Methods

### GetConformityNeededToRecruitPrisoner
```csharp
public abstract int GetConformityNeededToRecruitPrisoner(CharacterObject character)
```

### GetConformityChangePerHour
```csharp
public abstract ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)
```

### GetPrisonerRecruitmentMoraleEffect
```csharp
public abstract int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)
```

### IsPrisonerRecruitable
```csharp
public abstract bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)
```

### ShouldPartyRecruitPrisoners
```csharp
public abstract bool ShouldPartyRecruitPrisoners(PartyBase party)
```

### CalculateRecruitableNumber
```csharp
public abstract int CalculateRecruitableNumber(PartyBase party, CharacterObject character)
```

## Usage Example

```csharp
// Typical usage of PrisonerRecruitmentCalculationModel (Model)
Game.Current.ReplaceModel<PrisonerRecruitmentCalculationModel>(new MyPrisonerRecruitmentCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)