---
title: "ReplayCaptureLogic"
description: "Auto-generated class reference for ReplayCaptureLogic."
---
# ReplayCaptureLogic

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayCaptureLogic : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/ReplayCaptureLogic.cs`

## Overview

`ReplayCaptureLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ReplayCaptureLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of ReplayCaptureLogic from the subsystem API first
ReplayCaptureLogic replayCaptureLogic = ...;
replayCaptureLogic.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of ReplayCaptureLogic from the subsystem API first
ReplayCaptureLogic replayCaptureLogic = ...;
replayCaptureLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<ReplayCaptureLogic>();
```

## See Also

- [Area Index](../)