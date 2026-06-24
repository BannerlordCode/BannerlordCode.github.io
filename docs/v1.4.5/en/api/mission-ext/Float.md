<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Float`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Float

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct Float`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CompressionInfo.cs`

## Overview

`Float` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FullPrecision` | `public static Float FullPrecision { get; }` |

## Key Methods

### GetNumBits
`public int GetNumBits()`

**Purpose:** Gets the current value of `num bits`.

### GetMaximumValue
`public float GetMaximumValue()`

**Purpose:** Gets the current value of `maximum value`.

### GetMinimumValue
`public float GetMinimumValue()`

**Purpose:** Gets the current value of `minimum value`.

### GetPrecision
`public float GetPrecision()`

**Purpose:** Gets the current value of `precision`.

### ClampValueAccordingToLimits
`public void ClampValueAccordingToLimits(ref float x)`

**Purpose:** Handles logic related to `clamp value according to limits`.

## Usage Example

```csharp
var value = new Float();
value.GetNumBits();
```

## See Also

- [Complete Class Catalog](../catalog)