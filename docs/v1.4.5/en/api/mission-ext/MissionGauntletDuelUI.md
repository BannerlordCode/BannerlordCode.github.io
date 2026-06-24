<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletDuelUI`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletDuelUI

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletDuelUI : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletDuelUI.cs`

## Overview

`MissionGauntletDuelUI` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Called when the `focus gained` event is raised.

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Called when the `focus lost` event is raised.

### OnPeerEquipmentIndexRefreshed
`public void OnPeerEquipmentIndexRefreshed(MissionPeer peer, int equipmentSetIndex)`

**Purpose:** Called when the `peer equipment index refreshed` event is raised.

## Usage Example

```csharp
var value = new MissionGauntletDuelUI();
value.OnMissionScreenInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)