---
title: "RidingModel"
description: "Auto-generated class reference for RidingModel."
---
# RidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class RidingModel : MBGameModel<RidingModel>`
**Base:** `MBGameModel<RidingModel>`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/RidingModel.cs`

## Overview

`RidingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RidingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateAcceleration
`public abstract float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)`

**Purpose:** **Purpose:** Calculates the current value or result of acceleration.

```csharp
// Obtain an instance of RidingModel from the subsystem API first
RidingModel ridingModel = ...;
var result = ridingModel.CalculateAcceleration(mountElement, harnessElement, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RidingModel instance = ...;
```

## See Also

- [Area Index](../)