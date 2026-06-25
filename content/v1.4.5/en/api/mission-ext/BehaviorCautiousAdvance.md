---
title: "BehaviorCautiousAdvance"
description: "Auto-generated class reference for BehaviorCautiousAdvance."
---
# BehaviorCautiousAdvance

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class BehaviorCautiousAdvance : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorCautiousAdvance.cs`

## Overview

`BehaviorCautiousAdvance` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnBehaviorCanceled
`public override void OnBehaviorCanceled()`

**Purpose:** **Purpose:** Invoked when the behavior canceled event is raised.

```csharp
// Obtain an instance of BehaviorCautiousAdvance from the subsystem API first
BehaviorCautiousAdvance behaviorCautiousAdvance = ...;
behaviorCautiousAdvance.OnBehaviorCanceled();
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** **Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorCautiousAdvance from the subsystem API first
BehaviorCautiousAdvance behaviorCautiousAdvance = ...;
behaviorCautiousAdvance.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorCautiousAdvance behaviorCautiousAdvance = ...;
behaviorCautiousAdvance.OnBehaviorCanceled();
```

## See Also

- [Area Index](../)