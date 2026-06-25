---
title: "ShipVisual"
description: "Auto-generated class reference for ShipVisual."
---
# ShipVisual

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShipVisual : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/ShipVisual.cs`

## Overview

`ShipVisual` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Seed` | `public int Seed { get; }` |
| `CustomSailPatternId` | `public string CustomSailPatternId { get; }` |
| `SailVisuals` | `public List<ScriptComponentBehavior> SailVisuals { get; }` |
| `Health` | `public float Health { get; set; }` |

## Key Methods

### Initialize
`public void Initialize(int seed, string customSailPatternId = "")`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of ShipVisual from the subsystem API first
ShipVisual shipVisual = ...;
shipVisual.Initialize(0, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipVisual shipVisual = ...;
shipVisual.Initialize(0, "example");
```

## See Also

- [Area Index](../)