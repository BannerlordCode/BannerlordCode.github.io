---
title: "GlobalLayer"
description: "Auto-generated class reference for GlobalLayer."
---
# GlobalLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class GlobalLayer : IComparable`
**Base:** `IComparable`
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/GlobalLayer.cs`

## Overview

`GlobalLayer` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Layer` | `public ScreenLayer Layer { get; set; }` |

## Key Methods

### CompareTo
`public int CompareTo(object obj)`

**Purpose:** Compares the this instance with the supplied instance for ordering.

```csharp
// Obtain an instance of GlobalLayer from the subsystem API first
GlobalLayer globalLayer = ...;
var result = globalLayer.CompareTo(obj);
```

### UpdateLayout
`public virtual void UpdateLayout()`

**Purpose:** Recalculates and stores the latest representation of layout.

```csharp
// Obtain an instance of GlobalLayer from the subsystem API first
GlobalLayer globalLayer = ...;
globalLayer.UpdateLayout();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GlobalLayer globalLayer = ...;
globalLayer.CompareTo(obj);
```

## See Also

- [Area Index](../)