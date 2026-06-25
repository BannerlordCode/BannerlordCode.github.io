---
title: "DefaultRidingModel"
description: "Auto-generated class reference for DefaultRidingModel."
---
# DefaultRidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultRidingModel : RidingModel`
**Base:** `RidingModel`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/DefaultRidingModel.cs`

## Overview

`DefaultRidingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultRidingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateAcceleration
`public override float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)`

**Purpose:** **Purpose:** Calculates the current value or result of acceleration.

```csharp
// Obtain an instance of DefaultRidingModel from the subsystem API first
DefaultRidingModel defaultRidingModel = ...;
var result = defaultRidingModel.CalculateAcceleration(mountElement, harnessElement, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultRidingModel>(new MyDefaultRidingModel());
```

## See Also

- [Area Index](../)