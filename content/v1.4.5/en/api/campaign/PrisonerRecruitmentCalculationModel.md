---
title: "PrisonerRecruitmentCalculationModel"
description: "Auto-generated class reference for PrisonerRecruitmentCalculationModel."
---
# PrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerRecruitmentCalculationModel : MBGameModel<PrisonerRecruitmentCalculationModel>`
**Base:** `MBGameModel<PrisonerRecruitmentCalculationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs`

## Overview

`PrisonerRecruitmentCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PrisonerRecruitmentCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetConformityNeededToRecruitPrisoner
`public abstract int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**Purpose:** Reads and returns the conformity needed to recruit prisoner value held by the this instance.

```csharp
// Obtain an instance of PrisonerRecruitmentCalculationModel from the subsystem API first
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.GetConformityNeededToRecruitPrisoner(character);
```

### GetConformityChangePerHour
`public abstract ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)`

**Purpose:** Reads and returns the conformity change per hour value held by the this instance.

```csharp
// Obtain an instance of PrisonerRecruitmentCalculationModel from the subsystem API first
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.GetConformityChangePerHour(party, character);
```

### GetPrisonerRecruitmentMoraleEffect
`public abstract int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**Purpose:** Reads and returns the prisoner recruitment morale effect value held by the this instance.

```csharp
// Obtain an instance of PrisonerRecruitmentCalculationModel from the subsystem API first
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.GetPrisonerRecruitmentMoraleEffect(party, character, 0);
```

### IsPrisonerRecruitable
`public abstract bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**Purpose:** Determines whether the this instance is in the prisoner recruitable state or condition.

```csharp
// Obtain an instance of PrisonerRecruitmentCalculationModel from the subsystem API first
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.IsPrisonerRecruitable(party, character, conformityNeeded);
```

### ShouldPartyRecruitPrisoners
`public abstract bool ShouldPartyRecruitPrisoners(PartyBase party)`

**Purpose:** Executes the ShouldPartyRecruitPrisoners logic.

```csharp
// Obtain an instance of PrisonerRecruitmentCalculationModel from the subsystem API first
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.ShouldPartyRecruitPrisoners(party);
```

### CalculateRecruitableNumber
`public abstract int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**Purpose:** Calculates the current value or result of recruitable number.

```csharp
// Obtain an instance of PrisonerRecruitmentCalculationModel from the subsystem API first
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.CalculateRecruitableNumber(party, character);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PrisonerRecruitmentCalculationModel instance = ...;
```

## See Also

- [Area Index](../)