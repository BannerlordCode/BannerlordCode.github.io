---
title: "DefaultRansomValueCalculationModel"
description: "Auto-generated class reference for DefaultRansomValueCalculationModel."
---
# DefaultRansomValueCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRansomValueCalculationModel : RansomValueCalculationModel`
**Base:** `RansomValueCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRansomValueCalculationModel.cs`

## Overview

`DefaultRansomValueCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultRansomValueCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### PrisonerRansomValue
`public override int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultRansomValueCalculationModel from the subsystem API first
DefaultRansomValueCalculationModel defaultRansomValueCalculationModel = ...;
var result = defaultRansomValueCalculationModel.PrisonerRansomValue(prisoner, null);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultRansomValueCalculationModel>(new MyDefaultRansomValueCalculationModel());
```

## See Also

- [Area Index](../)