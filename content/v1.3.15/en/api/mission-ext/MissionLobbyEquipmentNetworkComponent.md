---
title: "MissionLobbyEquipmentNetworkComponent"
description: "Auto-generated class reference for MissionLobbyEquipmentNetworkComponent."
---
# MissionLobbyEquipmentNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLobbyEquipmentNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs`

## Overview

`MissionLobbyEquipmentNetworkComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionLobbyEquipmentNetworkComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionLobbyEquipmentNetworkComponent from the subsystem API first
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.OnBehaviorInitialize();
```

### PerkUpdated
`public void PerkUpdated(int perkList, int perkIndex)`

**Purpose:** Executes the PerkUpdated logic.

```csharp
// Obtain an instance of MissionLobbyEquipmentNetworkComponent from the subsystem API first
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.PerkUpdated(0, 0);
```

### EquipmentUpdated
`public void EquipmentUpdated()`

**Purpose:** Executes the EquipmentUpdated logic.

```csharp
// Obtain an instance of MissionLobbyEquipmentNetworkComponent from the subsystem API first
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.EquipmentUpdated();
```

### ToggleLoadout
`public void ToggleLoadout(bool isActive)`

**Purpose:** Executes the ToggleLoadout logic.

```csharp
// Obtain an instance of MissionLobbyEquipmentNetworkComponent from the subsystem API first
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.ToggleLoadout(false);
```

### OnToggleLoadoutDelegate
`public delegate void OnToggleLoadoutDelegate(bool isActive)`

**Purpose:** Invoked when the toggle loadout delegate event is raised.

```csharp
// Obtain an instance of MissionLobbyEquipmentNetworkComponent from the subsystem API first
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.OnToggleLoadoutDelegate(false);
```

### OnRefreshEquipmentEventDelegate
`public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer)`

**Purpose:** Invoked when the refresh equipment event delegate event is raised.

```csharp
// Obtain an instance of MissionLobbyEquipmentNetworkComponent from the subsystem API first
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.OnRefreshEquipmentEventDelegate(lobbyPeer);
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionLobbyEquipmentNetworkComponent>();
```

## See Also

- [Area Index](../)