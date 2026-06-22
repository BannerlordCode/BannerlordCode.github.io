<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBattleSchedulerClientComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionBattleSchedulerClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSchedulerClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionBattleSchedulerClientComponent.cs`

## Overview

`MissionBattleSchedulerClientComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MissionBattleSchedulerClientComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### QuitMission
```csharp
public override void QuitMission()
```

## Usage Example

```csharp
// Typical usage of MissionBattleSchedulerClientComponent (Component)
agent.GetComponent<MissionBattleSchedulerClientComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)