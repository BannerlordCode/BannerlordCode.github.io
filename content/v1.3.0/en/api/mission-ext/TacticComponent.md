---
title: "TacticComponent"
description: "Auto-generated class reference for TacticComponent."
---
# TacticComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TacticComponent`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TacticComponent.cs`

## Overview

`TacticComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `TacticComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Team` | `public Team Team { get; set; }` |

## Key Methods

### TickOccasionally
`public virtual void TickOccasionally()`

**Purpose:** Advances the `occasionally` state each frame or update cycle.

```csharp
// Obtain an instance of TacticComponent from the subsystem API first
TacticComponent tacticComponent = ...;
tacticComponent.TickOccasionally();
```

### ResetTactic
`public void ResetTactic()`

**Purpose:** Returns `tactic` to its default or initial condition.

```csharp
// Obtain an instance of TacticComponent from the subsystem API first
TacticComponent tacticComponent = ...;
tacticComponent.ResetTactic();
```

### SetDefaultBehaviorWeights
`public static void SetDefaultBehaviorWeights(Formation f)`

**Purpose:** Assigns a new value to `default behavior weights` and updates the object's internal state.

```csharp
// Static call; no instance required
TacticComponent.SetDefaultBehaviorWeights(f);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TacticComponent instance = ...;
```

## See Also

- [Area Index](../)