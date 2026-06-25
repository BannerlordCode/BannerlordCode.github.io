---
title: "RansomValueCalculationModel"
description: "Auto-generated class reference for RansomValueCalculationModel."
---
# RansomValueCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RansomValueCalculationModel : MBGameModel<RansomValueCalculationModel>`
**Base:** `MBGameModel<RansomValueCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RansomValueCalculationModel.cs`

## Overview

`RansomValueCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RansomValueCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### PrisonerRansomValue
`public abstract int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)`

**Purpose:** Executes the PrisonerRansomValue logic.

```csharp
// Obtain an instance of RansomValueCalculationModel from the subsystem API first
RansomValueCalculationModel ransomValueCalculationModel = ...;
var result = ransomValueCalculationModel.PrisonerRansomValue(prisoner, null);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RansomValueCalculationModel instance = ...;
```

## See Also

- [Area Index](../)