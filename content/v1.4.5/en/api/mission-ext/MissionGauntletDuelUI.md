---
title: "MissionGauntletDuelUI"
description: "Auto-generated class reference for MissionGauntletDuelUI."
---
# MissionGauntletDuelUI

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletDuelUI : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletDuelUI.cs`

## Overview

`MissionGauntletDuelUI` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletDuelUI from the subsystem API first
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletDuelUI from the subsystem API first
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletDuelUI from the subsystem API first
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnMissionScreenTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionGauntletDuelUI from the subsystem API first
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the `agent build` event is raised.

```csharp
// Obtain an instance of MissionGauntletDuelUI from the subsystem API first
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnAgentBuild(agent, banner);
```

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Invoked when the `focus gained` event is raised.

```csharp
// Obtain an instance of MissionGauntletDuelUI from the subsystem API first
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnFocusGained(agent, focusableObject, false);
```

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Invoked when the `focus lost` event is raised.

```csharp
// Obtain an instance of MissionGauntletDuelUI from the subsystem API first
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnFocusLost(agent, focusableObject);
```

### OnPeerEquipmentIndexRefreshed
`public void OnPeerEquipmentIndexRefreshed(MissionPeer peer, int equipmentSetIndex)`

**Purpose:** Invoked when the `peer equipment index refreshed` event is raised.

```csharp
// Obtain an instance of MissionGauntletDuelUI from the subsystem API first
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnPeerEquipmentIndexRefreshed(peer, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletDuelUI missionGauntletDuelUI = ...;
missionGauntletDuelUI.OnMissionScreenInitialize();
```

## See Also

- [Area Index](../)