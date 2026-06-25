---
title: "DefaultHeirSelectionCalculationModel"
description: "Auto-generated class reference for DefaultHeirSelectionCalculationModel."
---
# DefaultHeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeirSelectionCalculationModel : HeirSelectionCalculationModel`
**Base:** `HeirSelectionCalculationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeirSelectionCalculationModel.cs`

## Overview

`DefaultHeirSelectionCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeirSelectionCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHeirSelectionPoint
`public override int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)`

**Purpose:** Calculates the current value or result of `heir selection point`.

```csharp
// Obtain an instance of DefaultHeirSelectionCalculationModel from the subsystem API first
DefaultHeirSelectionCalculationModel defaultHeirSelectionCalculationModel = ...;
var result = defaultHeirSelectionCalculationModel.CalculateHeirSelectionPoint(candidateHeir, deadHero, maxSkillHero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHeirSelectionCalculationModel>(new MyDefaultHeirSelectionCalculationModel());
```

## See Also

- [Area Index](../)