---
title: "VisualDefinition"
description: "Auto-generated class reference for VisualDefinition."
---
# VisualDefinition

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualDefinition`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs`

## Overview

`VisualDefinition` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `DelayOnBegin` | `public float DelayOnBegin { get; }` |
| `EaseType` | `public AnimationInterpolation.Type EaseType { get; }` |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction { get; }` |
| `VisualStates` | `public Dictionary<string, VisualState> VisualStates { get; }` |

## Key Methods

### AddVisualState
`public void AddVisualState(VisualState visualState)`

**Purpose:** Adds visual state to the current collection or state.

```csharp
// Obtain an instance of VisualDefinition from the subsystem API first
VisualDefinition visualDefinition = ...;
visualDefinition.AddVisualState(visualState);
```

### GetVisualState
`public VisualState GetVisualState(string state)`

**Purpose:** Reads and returns the visual state value held by the this instance.

```csharp
// Obtain an instance of VisualDefinition from the subsystem API first
VisualDefinition visualDefinition = ...;
var result = visualDefinition.GetVisualState("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VisualDefinition visualDefinition = ...;
visualDefinition.AddVisualState(visualState);
```

## See Also

- [Area Index](../)