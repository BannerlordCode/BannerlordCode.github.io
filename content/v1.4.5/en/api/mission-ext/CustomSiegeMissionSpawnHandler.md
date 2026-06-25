---
title: "CustomSiegeMissionSpawnHandler"
description: "Auto-generated class reference for CustomSiegeMissionSpawnHandler."
---
# CustomSiegeMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomSiegeMissionSpawnHandler : CustomMissionSpawnHandler`
**Base:** `CustomMissionSpawnHandler`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionSpawnHandlers/CustomSiegeMissionSpawnHandler.cs`

## Overview

`CustomSiegeMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CustomSiegeMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomSiegeMissionSpawnHandler from the subsystem API first
CustomSiegeMissionSpawnHandler customSiegeMissionSpawnHandler = ...;
customSiegeMissionSpawnHandler.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomSiegeMissionSpawnHandler>();
```

## See Also

- [Area Index](../)