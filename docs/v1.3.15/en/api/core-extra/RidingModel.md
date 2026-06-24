<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RidingModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RidingModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class RidingModel : MBGameModel<RidingModel>`
**Base:** `MBGameModel<RidingModel>`
**File:** `TaleWorlds.Core/RidingModel.cs`

## Overview

`RidingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RidingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateAcceleration
`public abstract float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)`

**Purpose:** Handles logic related to `calculate acceleration`.

## Usage Example

```csharp
var implementation = new CustomRidingModel();
```

## See Also

- [Complete Class Catalog](../catalog)