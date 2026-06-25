---
title: "MissionCrimeHandler"
description: "Auto-generated class reference for MissionCrimeHandler."
---
# MissionCrimeHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionCrimeHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionCrimeHandler.cs`

## Overview

`MissionCrimeHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionCrimeHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionCrimeHandler>();
```

## See Also

- [Area Index](../)