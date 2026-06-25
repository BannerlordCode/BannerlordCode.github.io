---
title: "ExitDoor"
description: "Auto-generated class reference for ExitDoor."
---
# ExitDoor

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ExitDoor : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/ExitDoor.cs`

## Overview

`ExitDoor` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of ExitDoor from the subsystem API first
ExitDoor exitDoor = ...;
var result = exitDoor.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of ExitDoor from the subsystem API first
ExitDoor exitDoor = ...;
var result = exitDoor.GetDescriptionText(gameEntity);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of ExitDoor from the subsystem API first
ExitDoor exitDoor = ...;
var result = exitDoor.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ExitDoor exitDoor = ...;
exitDoor.GetActionTextForStandingPoint(usableGameObject);
```

## See Also

- [Area Index](../)