<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerRoundComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerRoundComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundComponent : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs`

## Overview

`MultiplayerRoundComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MultiplayerRoundComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingRoundTime` | `public float RemainingRoundTime { get { return this._gameModeClient.TimerComponent.GetRemainingTime(true); }` |

## Key Methods

### AfterStart
```csharp
public override void AfterStart()
```

## Usage Example

```csharp
// Typical usage of MultiplayerRoundComponent (Component)
agent.GetComponent<MultiplayerRoundComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)