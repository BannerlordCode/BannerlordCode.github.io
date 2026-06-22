<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLobbyEquipmentNetworkComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionLobbyEquipmentNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLobbyEquipmentNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs`

## Overview

`MissionLobbyEquipmentNetworkComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MissionLobbyEquipmentNetworkComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### PerkUpdated
```csharp
public void PerkUpdated(int perkList, int perkIndex)
```

### EquipmentUpdated
```csharp
public void EquipmentUpdated()
```

### ToggleLoadout
```csharp
public void ToggleLoadout(bool isActive)
```

### OnToggleLoadoutDelegate
```csharp
public delegate void OnToggleLoadoutDelegate(bool isActive)
```

### OnRefreshEquipmentEventDelegate
```csharp
public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer)
```

## Usage Example

```csharp
// Typical usage of MissionLobbyEquipmentNetworkComponent (Component)
agent.GetComponent<MissionLobbyEquipmentNetworkComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)