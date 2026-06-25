---
title: "OtherMissionViews"
description: "Auto-generated class reference for OtherMissionViews."
---
# OtherMissionViews

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class OtherMissionViews`
**Base:** none
**File:** `SandBox.View/Missions/OtherMissionViews.cs`

## Overview

`OtherMissionViews` lives in `SandBox.View.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenBattleChallengeMission
`public static MissionView OpenBattleChallengeMission(Mission mission)`

**Purpose:** **Purpose:** Opens the resource or UI associated with battle challenge mission.

```csharp
// Static call; no instance required
OtherMissionViews.OpenBattleChallengeMission(mission);
```

## Usage Example

```csharp
OtherMissionViews.OpenBattleChallengeMission(mission);
```

## See Also

- [Area Index](../)