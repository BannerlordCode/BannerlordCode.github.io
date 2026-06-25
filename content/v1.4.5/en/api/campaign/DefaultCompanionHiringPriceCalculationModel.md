---
title: "DefaultCompanionHiringPriceCalculationModel"
description: "Auto-generated class reference for DefaultCompanionHiringPriceCalculationModel."
---
# DefaultCompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCompanionHiringPriceCalculationModel : CompanionHiringPriceCalculationModel`
**Base:** `CompanionHiringPriceCalculationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCompanionHiringPriceCalculationModel.cs`

## Overview

`DefaultCompanionHiringPriceCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCompanionHiringPriceCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCompanionHiringPrice
`public override int GetCompanionHiringPrice(Hero companion)`

**Purpose:** **Purpose:** Reads and returns the companion hiring price value held by the this instance.

```csharp
// Obtain an instance of DefaultCompanionHiringPriceCalculationModel from the subsystem API first
DefaultCompanionHiringPriceCalculationModel defaultCompanionHiringPriceCalculationModel = ...;
var result = defaultCompanionHiringPriceCalculationModel.GetCompanionHiringPrice(companion);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCompanionHiringPriceCalculationModel>(new MyDefaultCompanionHiringPriceCalculationModel());
```

## See Also

- [Area Index](../)