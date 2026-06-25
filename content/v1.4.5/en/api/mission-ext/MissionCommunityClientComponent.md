---
title: "MissionCommunityClientComponent"
description: "Auto-generated class reference for MissionCommunityClientComponent."
---
# MissionCommunityClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCommunityClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs`

## Overview

`MissionCommunityClientComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionCommunityClientComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionCommunityClientComponent from the subsystem API first
MissionCommunityClientComponent missionCommunityClientComponent = ...;
missionCommunityClientComponent.OnBehaviorInitialize();
```

### SetServerEndingBeforeClientLoaded
`public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)`

**Purpose:** **Purpose:** Assigns a new value to server ending before client loaded and updates the object's internal state.

```csharp
// Obtain an instance of MissionCommunityClientComponent from the subsystem API first
MissionCommunityClientComponent missionCommunityClientComponent = ...;
missionCommunityClientComponent.SetServerEndingBeforeClientLoaded(false);
```

### QuitMission
`public override void QuitMission()`

**Purpose:** **Purpose:** Executes the QuitMission logic.

```csharp
// Obtain an instance of MissionCommunityClientComponent from the subsystem API first
MissionCommunityClientComponent missionCommunityClientComponent = ...;
missionCommunityClientComponent.QuitMission();
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionCommunityClientComponent>();
```

## See Also

- [Area Index](../)