<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompressionInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CompressionInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompressionInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CompressionInfo.cs`

## Overview

`CompressionInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FullPrecision` | `public static CompressionInfo.Float FullPrecision { get; }` |

## Key Methods

### GetNumBits
`public int GetNumBits()`

**Purpose:** Gets the current value of `num bits`.

### GetMaximumValue
`public int GetMaximumValue()`

**Purpose:** Gets the current value of `maximum value`.

### GetNumBits
`public int GetNumBits()`

**Purpose:** Gets the current value of `num bits`.

### GetNumBits
`public int GetNumBits()`

**Purpose:** Gets the current value of `num bits`.

### GetNumBits
`public int GetNumBits()`

**Purpose:** Gets the current value of `num bits`.

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

## Usage Example

```csharp
var value = new CompressionInfo();
value.GetNumBits();
```

## See Also

- [Complete Class Catalog](../catalog)