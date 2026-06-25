---
title: "MissionOptionsComponent"
description: "Auto-generated class reference for MissionOptionsComponent."
---
# MissionOptionsComponent

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOptionsComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/MissionOptionsComponent.cs`

## Overview

`MissionOptionsComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionOptionsComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnAddOptionsUIHandler
`public void OnAddOptionsUIHandler()`

**Purpose:** **Purpose:** Invoked when the add options u i handler event is raised.

```csharp
// Obtain an instance of MissionOptionsComponent from the subsystem API first
MissionOptionsComponent missionOptionsComponent = ...;
missionOptionsComponent.OnAddOptionsUIHandler();
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionOptionsComponent>();
```

## See Also

- [Area Index](../)