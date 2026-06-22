<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCommunityClientComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionCommunityClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCommunityClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs`

## Overview

`MissionCommunityClientComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MissionCommunityClientComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### SetServerEndingBeforeClientLoaded
```csharp
public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)
```

### QuitMission
```csharp
public override void QuitMission()
```

## Usage Example

```csharp
// Typical usage of MissionCommunityClientComponent (Component)
agent.GetComponent<MissionCommunityClientComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)