---
title: "MapState"
description: "Auto-generated class reference for MapState."
---
# MapState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/MapState.cs`

## Overview

`MapState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextIncident` | `public Incident NextIncident { get; }` |
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `GameMenuId` | `public string GameMenuId { get; set; }` |
| `AtMenu` | `public bool AtMenu { get; }` |
| `MapConversationActive` | `public bool MapConversationActive { get; set; }` |
| `Handler` | `public IMapStateHandler Handler { get; set; }` |
| `IsSimulationActive` | `public bool IsSimulationActive { get; }` |

## Key Methods

### OnJoinArmy
`public void OnJoinArmy()`

**Purpose:** **Purpose:** Invoked when the join army event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnJoinArmy();
```

### OnLeaveArmy
`public void OnLeaveArmy()`

**Purpose:** **Purpose:** Invoked when the leave army event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnLeaveArmy();
```

### OnFadeInAndOut
`public void OnFadeInAndOut(float fadeOutTime, float blackTime, float fadeInTime)`

**Purpose:** **Purpose:** Invoked when the fade in and out event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnFadeInAndOut(0, 0, 0);
```

### OnDispersePlayerLeadedArmy
`public void OnDispersePlayerLeadedArmy()`

**Purpose:** **Purpose:** Invoked when the disperse player leaded army event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnDispersePlayerLeadedArmy();
```

### OnArmyCreated
`public void OnArmyCreated(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the army created event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnArmyCreated(mobileParty);
```

### StartIncident
`public void StartIncident(Incident incident)`

**Purpose:** **Purpose:** Starts the incident flow or state machine.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.StartIncident(incident);
```

### OnMainPartyEncounter
`public void OnMainPartyEncounter()`

**Purpose:** **Purpose:** Invoked when the main party encounter event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnMainPartyEncounter();
```

### ProcessTravel
`public void ProcessTravel(CampaignVec2 moveTargetPoint)`

**Purpose:** **Purpose:** Executes the ProcessTravel logic.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.ProcessTravel(moveTargetPoint);
```

### OnLoadingFinished
`public void OnLoadingFinished()`

**Purpose:** **Purpose:** Invoked when the loading finished event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnLoadingFinished();
```

### OnMapConversationStarts
`public void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**Purpose:** **Purpose:** Invoked when the map conversation starts event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnMapConversationStarts(playerCharacterData, conversationPartnerData);
```

### OnMapConversationOver
`public void OnMapConversationOver()`

**Purpose:** **Purpose:** Invoked when the map conversation over event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnMapConversationOver();
```

### EnterMenuMode
`public void EnterMenuMode()`

**Purpose:** **Purpose:** Executes the EnterMenuMode logic.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.EnterMenuMode();
```

### ExitMenuMode
`public void ExitMenuMode()`

**Purpose:** **Purpose:** Executes the ExitMenuMode logic.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.ExitMenuMode();
```

### StartBattleSimulation
`public void StartBattleSimulation()`

**Purpose:** **Purpose:** Starts the battle simulation flow or state machine.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.StartBattleSimulation();
```

### EndBattleSimulation
`public void EndBattleSimulation()`

**Purpose:** **Purpose:** Executes the EndBattleSimulation logic.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.EndBattleSimulation();
```

### OnPlayerSiegeActivated
`public void OnPlayerSiegeActivated()`

**Purpose:** **Purpose:** Invoked when the player siege activated event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnPlayerSiegeActivated();
```

### OnPlayerSiegeDeactivated
`public void OnPlayerSiegeDeactivated()`

**Purpose:** **Purpose:** Invoked when the player siege deactivated event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnPlayerSiegeDeactivated();
```

### OnSiegeEngineClick
`public void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)`

**Purpose:** **Purpose:** Invoked when the siege engine click event is raised.

```csharp
// Obtain an instance of MapState from the subsystem API first
MapState mapState = ...;
mapState.OnSiegeEngineClick(siegeEngineFrame);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapState mapState = ...;
mapState.OnJoinArmy();
```

## See Also

- [Area Index](../)