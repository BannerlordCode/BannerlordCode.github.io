---
title: "DefaultPartySpeedCalculatingModel"
description: "Auto-generated class reference for DefaultPartySpeedCalculatingModel."
---
# DefaultPartySpeedCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**Base:** `PartySpeedModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs`

## Overview

`DefaultPartySpeedCalculatingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartySpeedCalculatingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseSpeed` | `public override float BaseSpeed { get; }` |
| `MinimumSpeed` | `public override float MinimumSpeed { get; }` |

## Key Methods

### CalculateBaseSpeed
`public override ExplainedNumber CalculateBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)`

**Purpose:** Calculates the current value or result of `base speed`.

```csharp
// Obtain an instance of DefaultPartySpeedCalculatingModel from the subsystem API first
DefaultPartySpeedCalculatingModel defaultPartySpeedCalculatingModel = ...;
var result = defaultPartySpeedCalculatingModel.CalculateBaseSpeed(mobileParty, false, 0, 0);
```

### CalculateFinalSpeed
`public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)`

**Purpose:** Calculates the current value or result of `final speed`.

```csharp
// Obtain an instance of DefaultPartySpeedCalculatingModel from the subsystem API first
DefaultPartySpeedCalculatingModel defaultPartySpeedCalculatingModel = ...;
var result = defaultPartySpeedCalculatingModel.CalculateFinalSpeed(mobileParty, finalSpeed);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartySpeedCalculatingModel>(new MyDefaultPartySpeedCalculatingModel());
```

## See Also

- [Area Index](../)