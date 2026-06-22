<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTimerComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerTimerComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`

## Overview

`MultiplayerTimerComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MultiplayerTimerComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### StartTimerAsServer
```csharp
public void StartTimerAsServer(float duration)
```

### StartTimerAsClient
```csharp
public void StartTimerAsClient(float startTime, float duration)
```

### GetRemainingTime
```csharp
public float GetRemainingTime(bool isSynched)
```

### CheckIfTimerPassed
```csharp
public bool CheckIfTimerPassed()
```

### GetCurrentTimerStartTime
```csharp
public MissionTime GetCurrentTimerStartTime()
```

## Usage Example

```csharp
// Typical usage of MultiplayerTimerComponent (Component)
agent.GetComponent<MultiplayerTimerComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)