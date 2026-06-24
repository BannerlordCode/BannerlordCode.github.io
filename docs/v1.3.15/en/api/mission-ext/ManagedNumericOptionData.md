<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedNumericOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedNumericOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`

## Overview

`ManagedNumericOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ManagedNumericOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinValue
`public float GetMinValue()`

**Purpose:** Gets the current value of `min value`.

### GetMaxValue
`public float GetMaxValue()`

**Purpose:** Gets the current value of `max value`.

### GetIsDiscrete
`public bool GetIsDiscrete()`

**Purpose:** Gets the current value of `is discrete`.

### GetDiscreteIncrementInterval
`public int GetDiscreteIncrementInterval()`

**Purpose:** Gets the current value of `discrete increment interval`.

### GetShouldUpdateContinuously
`public bool GetShouldUpdateContinuously()`

**Purpose:** Gets the current value of `should update continuously`.

## Usage Example

```csharp
var value = new ManagedNumericOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)