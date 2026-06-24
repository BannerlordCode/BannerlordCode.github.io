<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLobbyEquipmentNetworkComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `behavior initialize` event is raised.

### PerkUpdated
`public void PerkUpdated(int perkList, int perkIndex)`

**Purpose:** Handles logic related to `perk updated`.

### EquipmentUpdated
`public void EquipmentUpdated()`

**Purpose:** Handles logic related to `equipment updated`.

### ToggleLoadout
`public void ToggleLoadout(bool isActive)`

**Purpose:** Handles logic related to `toggle loadout`.

### OnToggleLoadoutDelegate
`public delegate void OnToggleLoadoutDelegate(bool isActive)`

**Purpose:** Called when the `toggle loadout delegate` event is raised.

### OnRefreshEquipmentEventDelegate
`public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer)`

**Purpose:** Called when the `refresh equipment event delegate` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<MissionLobbyEquipmentNetworkComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)