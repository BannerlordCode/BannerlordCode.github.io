<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTeamSelectComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerTeamSelectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs`

## Overview

`MultiplayerTeamSelectComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MultiplayerTeamSelectComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### SelectTeam
```csharp
public void SelectTeam()
```

### UpdateTeams
```csharp
public void UpdateTeams(NetworkCommunicator peer, Team oldTeam, Team newTeam)
```

### GetDisabledTeams
```csharp
public List<Team> GetDisabledTeams()
```

### ChangeTeamServer
```csharp
public void ChangeTeamServer(NetworkCommunicator networkPeer, Team team)
```

### ChangeTeam
```csharp
public void ChangeTeam(Team team)
```

### GetPlayerCountForTeam
```csharp
public int GetPlayerCountForTeam(Team team)
```

### GetFriendsForTeam
```csharp
public IEnumerable<VirtualPlayer> GetFriendsForTeam(Team team)
```

### BalanceTeams
```csharp
public void BalanceTeams()
```

### AutoAssignTeam
```csharp
public void AutoAssignTeam(NetworkCommunicator peer)
```

### OnSelectingTeamDelegate
```csharp
public delegate void OnSelectingTeamDelegate(List<Team> disableTeams)
```

## Usage Example

```csharp
// Typical usage of MultiplayerTeamSelectComponent (Component)
agent.GetComponent<MultiplayerTeamSelectComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)