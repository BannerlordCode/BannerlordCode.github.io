---
title: "Float"
description: "Auto-generated class reference for Float."
---
# Float

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct Float`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CompressionInfo.cs`

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

**Purpose:** Reads and returns the num bits value held by the this instance.

```csharp
// Obtain an instance of Float from the subsystem API first
Float float = ...;
var result = float.GetNumBits();
```

### GetMaximumValue
`public float GetMaximumValue()`

**Purpose:** Reads and returns the maximum value value held by the this instance.

```csharp
// Obtain an instance of Float from the subsystem API first
Float float = ...;
var result = float.GetMaximumValue();
```

### GetMinimumValue
`public float GetMinimumValue()`

**Purpose:** Reads and returns the minimum value value held by the this instance.

```csharp
// Obtain an instance of Float from the subsystem API first
Float float = ...;
var result = float.GetMinimumValue();
```

### GetPrecision
`public float GetPrecision()`

**Purpose:** Reads and returns the precision value held by the this instance.

```csharp
// Obtain an instance of Float from the subsystem API first
Float float = ...;
var result = float.GetPrecision();
```

### ClampValueAccordingToLimits
`public void ClampValueAccordingToLimits(ref float x)`

**Purpose:** Executes the ClampValueAccordingToLimits logic.

```csharp
// Obtain an instance of Float from the subsystem API first
Float float = ...;
float.ClampValueAccordingToLimits(x);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Float float = ...;
float.GetNumBits();
```

## See Also

- [Area Index](../)