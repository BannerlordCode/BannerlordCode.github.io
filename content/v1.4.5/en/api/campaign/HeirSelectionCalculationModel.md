---
title: "HeirSelectionCalculationModel"
description: "Auto-generated class reference for HeirSelectionCalculationModel."
---
# HeirSelectionCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeirSelectionCalculationModel : MBGameModel<HeirSelectionCalculationModel>`
**Base:** `MBGameModel<HeirSelectionCalculationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/HeirSelectionCalculationModel.cs`

## Overview

`HeirSelectionCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `HeirSelectionCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighestSkillPoint` | `public abstract int HighestSkillPoint { get; }` |

## Key Methods

### CalculateHeirSelectionPoint
`public abstract int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)`

**Purpose:** Calculates the current value or result of `heir selection point`.

```csharp
// Obtain an instance of HeirSelectionCalculationModel from the subsystem API first
HeirSelectionCalculationModel heirSelectionCalculationModel = ...;
var result = heirSelectionCalculationModel.CalculateHeirSelectionPoint(candidateHeir, deadHero, maxSkillHero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
HeirSelectionCalculationModel instance = ...;
```

## See Also

- [Area Index](../)