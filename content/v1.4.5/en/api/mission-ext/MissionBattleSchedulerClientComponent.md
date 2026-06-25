---
title: "MissionBattleSchedulerClientComponent"
description: "Auto-generated class reference for MissionBattleSchedulerClientComponent."
---
# MissionBattleSchedulerClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSchedulerClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBattleSchedulerClientComponent.cs`

## Overview

`MissionBattleSchedulerClientComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionBattleSchedulerClientComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### QuitMission
`public override void QuitMission()`

**Purpose:** **Purpose:** Executes the QuitMission logic.

```csharp
// Obtain an instance of MissionBattleSchedulerClientComponent from the subsystem API first
MissionBattleSchedulerClientComponent missionBattleSchedulerClientComponent = ...;
missionBattleSchedulerClientComponent.QuitMission();
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionBattleSchedulerClientComponent>();
```

## See Also

- [Area Index](../)