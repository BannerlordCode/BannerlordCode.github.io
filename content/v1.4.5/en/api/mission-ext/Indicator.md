---
title: "Indicator"
description: "Auto-generated class reference for Indicator."
---
# Indicator

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Indicator`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/FormationIndicatorMissionView.cs`

## Overview

`Indicator` lives in `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DetermineIndicatorState
`public void DetermineIndicatorState(float dt, Vec3 position)`

**Purpose:** **Purpose:** Determines the result of indicator state based on the current state.

```csharp
// Obtain an instance of Indicator from the subsystem API first
Indicator indicator = ...;
indicator.DetermineIndicatorState(0, position);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Indicator indicator = ...;
indicator.DetermineIndicatorState(0, position);
```

## See Also

- [Area Index](../)