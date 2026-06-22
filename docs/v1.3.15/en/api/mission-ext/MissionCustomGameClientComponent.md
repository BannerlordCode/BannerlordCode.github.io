<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCustomGameClientComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionCustomGameClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCustomGameClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionCustomGameClientComponent.cs`

## Overview

`MissionCustomGameClientComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MissionCustomGameClientComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

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
// Typical usage of MissionCustomGameClientComponent (Component)
agent.GetComponent<MissionCustomGameClientComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)