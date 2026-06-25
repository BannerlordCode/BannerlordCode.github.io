---
title: "StoryModeMissionViews"
description: "Auto-generated class reference for StoryModeMissionViews."
---
# StoryModeMissionViews

**Namespace:** StoryMode.View.Missions
**Module:** StoryMode.View
**Type:** `public class StoryModeMissionViews`
**Base:** none
**File:** `StoryMode.View/Missions/StoryModeMissionViews.cs`

## Overview

`StoryModeMissionViews` lives in `StoryMode.View.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.View.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenVillageMission
`public static MissionView OpenVillageMission(Mission mission)`

**Purpose:** Opens the resource or UI associated with `village mission`.

```csharp
// Static call; no instance required
StoryModeMissionViews.OpenVillageMission(mission);
```

### OpenSneakIntoTheVillaMission
`public static MissionView OpenSneakIntoTheVillaMission(Mission mission)`

**Purpose:** Opens the resource or UI associated with `sneak into the villa mission`.

```csharp
// Static call; no instance required
StoryModeMissionViews.OpenSneakIntoTheVillaMission(mission);
```

## Usage Example

```csharp
StoryModeMissionViews.OpenVillageMission(mission);
```

## See Also

- [Area Index](../)