---
title: "BehaviorWaitForLadders"
description: "Auto-generated class reference for BehaviorWaitForLadders."
---
# BehaviorWaitForLadders

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorWaitForLadders : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorWaitForLadders.cs`

## Overview

`BehaviorWaitForLadders` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnValidBehaviorSideChanged
`public override void OnValidBehaviorSideChanged()`

**Purpose:** **Purpose:** Invoked when the valid behavior side changed event is raised.

```csharp
// Obtain an instance of BehaviorWaitForLadders from the subsystem API first
BehaviorWaitForLadders behaviorWaitForLadders = ...;
behaviorWaitForLadders.OnValidBehaviorSideChanged();
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** **Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorWaitForLadders from the subsystem API first
BehaviorWaitForLadders behaviorWaitForLadders = ...;
behaviorWaitForLadders.TickOccasionally();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorWaitForLadders behaviorWaitForLadders = ...;
behaviorWaitForLadders.OnValidBehaviorSideChanged();
```

## See Also

- [Area Index](../)