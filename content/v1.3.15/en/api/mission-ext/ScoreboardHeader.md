---
title: "ScoreboardHeader"
description: "Auto-generated class reference for ScoreboardHeader."
---
# ScoreboardHeader

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ScoreboardHeader`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionScoreboardComponent.cs`

## Overview

`ScoreboardHeader` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetValueOf
`public string GetValueOf(MissionPeer missionPeer)`

**Purpose:** Reads and returns the value of value held by the this instance.

```csharp
// Obtain an instance of ScoreboardHeader from the subsystem API first
ScoreboardHeader scoreboardHeader = ...;
var result = scoreboardHeader.GetValueOf(missionPeer);
```

### GetValueOf
`public string GetValueOf(BotData botData)`

**Purpose:** Reads and returns the value of value held by the this instance.

```csharp
// Obtain an instance of ScoreboardHeader from the subsystem API first
ScoreboardHeader scoreboardHeader = ...;
var result = scoreboardHeader.GetValueOf(botData);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ScoreboardHeader scoreboardHeader = ...;
scoreboardHeader.GetValueOf(missionPeer);
```

## See Also

- [Area Index](../)