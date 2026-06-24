<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapState`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/MapState.cs`

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
| `Handler` | `public IMapStateHandler Handler { get; set; }` |

## Key Methods

### OnJoinArmy
`public void OnJoinArmy()`

**Purpose:** Called when the `join army` event is raised.

### OnLeaveArmy
`public void OnLeaveArmy()`

**Purpose:** Called when the `leave army` event is raised.

### OnDispersePlayerLeadedArmy
`public void OnDispersePlayerLeadedArmy()`

**Purpose:** Called when the `disperse player leaded army` event is raised.

### OnArmyCreated
`public void OnArmyCreated(MobileParty mobileParty)`

**Purpose:** Called when the `army created` event is raised.

### StartIncident
`public void StartIncident(Incident incident)`

**Purpose:** Handles logic related to `start incident`.

### OnMainPartyEncounter
`public void OnMainPartyEncounter()`

**Purpose:** Called when the `main party encounter` event is raised.

### ProcessTravel
`public void ProcessTravel(CampaignVec2 moveTargetPoint)`

**Purpose:** Handles logic related to `process travel`.

### OnLoadingFinished
`public void OnLoadingFinished()`

**Purpose:** Called when the `loading finished` event is raised.

### OnMapConversationStarts
`public void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**Purpose:** Called when the `map conversation starts` event is raised.

### OnMapConversationOver
`public void OnMapConversationOver()`

**Purpose:** Called when the `map conversation over` event is raised.

### EnterMenuMode
`public void EnterMenuMode()`

**Purpose:** Handles logic related to `enter menu mode`.

### ExitMenuMode
`public void ExitMenuMode()`

**Purpose:** Handles logic related to `exit menu mode`.

### StartBattleSimulation
`public void StartBattleSimulation()`

**Purpose:** Handles logic related to `start battle simulation`.

### EndBattleSimulation
`public void EndBattleSimulation()`

**Purpose:** Handles logic related to `end battle simulation`.

### OnPlayerSiegeActivated
`public void OnPlayerSiegeActivated()`

**Purpose:** Called when the `player siege activated` event is raised.

### OnPlayerSiegeDeactivated
`public void OnPlayerSiegeDeactivated()`

**Purpose:** Called when the `player siege deactivated` event is raised.

### OnSiegeEngineClick
`public void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)`

**Purpose:** Called when the `siege engine click` event is raised.

## Usage Example

```csharp
var value = new MapState();
value.OnJoinArmy();
```

## See Also

- [Complete Class Catalog](../catalog)