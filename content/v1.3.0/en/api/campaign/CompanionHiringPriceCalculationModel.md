---
title: "CompanionHiringPriceCalculationModel"
description: "Auto-generated class reference for CompanionHiringPriceCalculationModel."
---
# CompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CompanionHiringPriceCalculationModel : MBGameModel<CompanionHiringPriceCalculationModel>`
**Base:** `MBGameModel<CompanionHiringPriceCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CompanionHiringPriceCalculationModel.cs`

## Overview

`CompanionHiringPriceCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CompanionHiringPriceCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCompanionHiringPrice
`public abstract int GetCompanionHiringPrice(Hero companion)`

**Purpose:** Reads and returns the `companion hiring price` value held by the current object.

```csharp
// Obtain an instance of CompanionHiringPriceCalculationModel from the subsystem API first
CompanionHiringPriceCalculationModel companionHiringPriceCalculationModel = ...;
var result = companionHiringPriceCalculationModel.GetCompanionHiringPrice(companion);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CompanionHiringPriceCalculationModel instance = ...;
```

## See Also

- [Area Index](../)