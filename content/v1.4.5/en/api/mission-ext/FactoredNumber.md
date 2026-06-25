---
title: "FactoredNumber"
description: "Auto-generated class reference for FactoredNumber."
---
# FactoredNumber

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FactoredNumber`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FactoredNumber.cs`

## Overview

`FactoredNumber` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseNumber` | `public float BaseNumber { get; }` |

## Key Methods

### Add
`public void Add(float value)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of FactoredNumber from the subsystem API first
FactoredNumber factoredNumber = ...;
factoredNumber.Add(0);
```

### AddFactor
`public void AddFactor(float value)`

**Purpose:** Adds `factor` to the current collection or state.

```csharp
// Obtain an instance of FactoredNumber from the subsystem API first
FactoredNumber factoredNumber = ...;
factoredNumber.AddFactor(0);
```

### LimitMin
`public void LimitMin(float minValue)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FactoredNumber from the subsystem API first
FactoredNumber factoredNumber = ...;
factoredNumber.LimitMin(0);
```

### LimitMax
`public void LimitMax(float maxValue)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FactoredNumber from the subsystem API first
FactoredNumber factoredNumber = ...;
factoredNumber.LimitMax(0);
```

### Clamp
`public void Clamp(float minValue, float maxValue)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FactoredNumber from the subsystem API first
FactoredNumber factoredNumber = ...;
factoredNumber.Clamp(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FactoredNumber factoredNumber = ...;
factoredNumber.Add(0);
```

## See Also

- [Area Index](../)