---
title: "BehaviorProtectFlank"
description: "Auto-generated class reference for BehaviorProtectFlank."
---
# BehaviorProtectFlank

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorProtectFlank : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorProtectFlank.cs`

## Overview

`BehaviorProtectFlank` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnValidBehaviorSideChanged
`public override void OnValidBehaviorSideChanged()`

**Purpose:** Invoked when the valid behavior side changed event is raised.

```csharp
// Obtain an instance of BehaviorProtectFlank from the subsystem API first
BehaviorProtectFlank behaviorProtectFlank = ...;
behaviorProtectFlank.OnValidBehaviorSideChanged();
```

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of BehaviorProtectFlank from the subsystem API first
BehaviorProtectFlank behaviorProtectFlank = ...;
behaviorProtectFlank.TickOccasionally();
```

### GetBehaviorString
`public override TextObject GetBehaviorString()`

**Purpose:** Reads and returns the behavior string value held by the this instance.

```csharp
// Obtain an instance of BehaviorProtectFlank from the subsystem API first
BehaviorProtectFlank behaviorProtectFlank = ...;
var result = behaviorProtectFlank.GetBehaviorString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BehaviorProtectFlank behaviorProtectFlank = ...;
behaviorProtectFlank.OnValidBehaviorSideChanged();
```

## See Also

- [Area Index](../)