---
title: "SimpleSceneTestWithMission"
description: "Auto-generated class reference for SimpleSceneTestWithMission."
---
# SimpleSceneTestWithMission

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SimpleSceneTestWithMission`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/SimpleSceneTestWithMission.cs`

## Overview

`SimpleSceneTestWithMission` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadingFinished
`public bool LoadingFinished()`

**Purpose:** Reads `ing finished` from persistent storage or a stream.

```csharp
// Obtain an instance of SimpleSceneTestWithMission from the subsystem API first
SimpleSceneTestWithMission simpleSceneTestWithMission = ...;
var result = simpleSceneTestWithMission.LoadingFinished();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SimpleSceneTestWithMission simpleSceneTestWithMission = ...;
simpleSceneTestWithMission.LoadingFinished();
```

## See Also

- [Area Index](../)