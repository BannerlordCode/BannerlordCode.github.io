---
title: "CinematicBurningArrow"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CinematicBurningArrow`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `start movement`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var value = new CinematicBurningArrow();
value.StartMovement();
```

## See Also

- [Complete Class Catalog](../catalog)