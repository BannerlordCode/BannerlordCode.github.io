---
title: "SiegeMissionPreparationHandler"
description: "Auto-generated class reference for SiegeMissionPreparationHandler."
---
# SiegeMissionPreparationHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeMissionPreparationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs`

## Overview

`SiegeMissionPreparationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SiegeMissionPreparationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of SiegeMissionPreparationHandler from the subsystem API first
SiegeMissionPreparationHandler siegeMissionPreparationHandler = ...;
siegeMissionPreparationHandler.OnBehaviorInitialize();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SiegeMissionPreparationHandler>();
```

## See Also

- [Area Index](../)