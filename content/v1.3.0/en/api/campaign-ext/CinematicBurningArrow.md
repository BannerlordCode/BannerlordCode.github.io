---
title: "CinematicBurningArrow"
description: "Auto-generated class reference for CinematicBurningArrow."
---
# CinematicBurningArrow

**Namespace:** SandBox.Objects.Cinematics
**Module:** SandBox.Objects
**Type:** `public class CinematicBurningArrow : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox/Objects/Cinematics/CinematicBurningArrow.cs`

## Overview

`CinematicBurningArrow` lives in `SandBox.Objects.Cinematics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Cinematics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartMovement
`public void StartMovement()`

**Purpose:** Starts the movement flow or state machine.

```csharp
// Obtain an instance of CinematicBurningArrow from the subsystem API first
CinematicBurningArrow cinematicBurningArrow = ...;
cinematicBurningArrow.StartMovement();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of CinematicBurningArrow from the subsystem API first
CinematicBurningArrow cinematicBurningArrow = ...;
var result = cinematicBurningArrow.GetTickRequirement();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CinematicBurningArrow cinematicBurningArrow = ...;
cinematicBurningArrow.StartMovement();
```

## See Also

- [Area Index](../)