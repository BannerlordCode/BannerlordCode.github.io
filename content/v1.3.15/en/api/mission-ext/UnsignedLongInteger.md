---
title: "UnsignedLongInteger"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UnsignedLongInteger`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UnsignedLongInteger

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct UnsignedLongInteger`
**Area:** mission-ext

## Overview

`UnsignedLongInteger` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### ClampValueAccordingToLimits
`public void ClampValueAccordingToLimits(ref float x)`

**Purpose:** Handles logic related to `clamp value according to limits`.

## Usage Example

```csharp
// First obtain a UnsignedLongInteger instance from game state, then call one of its public methods
var value = new UnsignedLongInteger();
value.GetNumBits();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
