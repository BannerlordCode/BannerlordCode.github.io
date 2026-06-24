<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeNumericOptionData`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NativeNumericOptionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public class NativeNumericOptionData : NativeOptionData, INumericOptionData, IOptionData`
**Base:** `NativeOptionData`
**File:** `TaleWorlds.Engine/Options/NativeNumericOptionData.cs`

## Overview

`NativeNumericOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `NativeNumericOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
NativeNumericOptionData example = NativeNumericOptionData.Value;
```

## See Also

- [Complete Class Catalog](../catalog)