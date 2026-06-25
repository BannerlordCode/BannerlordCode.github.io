---
title: "EventTriggeringUsableMachine"
description: "Auto-generated class reference for EventTriggeringUsableMachine."
---
# EventTriggeringUsableMachine

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EventTriggeringUsableMachine : UsableMachine`
**Base:** `UsableMachine`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects.Usables/EventTriggeringUsableMachine.cs`

## Overview

`EventTriggeringUsableMachine` lives in `TaleWorlds.MountAndBlade.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** **Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of EventTriggeringUsableMachine from the subsystem API first
EventTriggeringUsableMachine eventTriggeringUsableMachine = ...;
var result = eventTriggeringUsableMachine.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** **Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of EventTriggeringUsableMachine from the subsystem API first
EventTriggeringUsableMachine eventTriggeringUsableMachine = ...;
var result = eventTriggeringUsableMachine.GetDescriptionText(gameEntity);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EventTriggeringUsableMachine eventTriggeringUsableMachine = ...;
eventTriggeringUsableMachine.GetActionTextForStandingPoint(usableGameObject);
```

## See Also

- [Area Index](../)