---
title: "DefaultRidingModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultRidingModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultRidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultRidingModel : RidingModel`
**Base:** `RidingModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/DefaultRidingModel.cs`

## Overview

`DefaultRidingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultRidingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateAcceleration
`public override float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)`

**Purpose:** Handles logic related to `calculate acceleration`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultRidingModel>(new MyDefaultRidingModel());
```

## See Also

- [Complete Class Catalog](../catalog)