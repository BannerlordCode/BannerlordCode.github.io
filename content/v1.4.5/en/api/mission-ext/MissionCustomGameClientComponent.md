---
title: "MissionCustomGameClientComponent"
description: "Auto-generated class reference for MissionCustomGameClientComponent."
---
# MissionCustomGameClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCustomGameClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionCustomGameClientComponent.cs`

## Overview

`MissionCustomGameClientComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionCustomGameClientComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionCustomGameClientComponent from the subsystem API first
MissionCustomGameClientComponent missionCustomGameClientComponent = ...;
missionCustomGameClientComponent.OnBehaviorInitialize();
```

### SetServerEndingBeforeClientLoaded
`public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)`

**Purpose:** Assigns a new value to server ending before client loaded and updates the object's internal state.

```csharp
// Obtain an instance of MissionCustomGameClientComponent from the subsystem API first
MissionCustomGameClientComponent missionCustomGameClientComponent = ...;
missionCustomGameClientComponent.SetServerEndingBeforeClientLoaded(false);
```

### QuitMission
`public override void QuitMission()`

**Purpose:** Executes the QuitMission logic.

```csharp
// Obtain an instance of MissionCustomGameClientComponent from the subsystem API first
MissionCustomGameClientComponent missionCustomGameClientComponent = ...;
missionCustomGameClientComponent.QuitMission();
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionCustomGameClientComponent>();
```

## See Also

- [Area Index](../)