<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerWarmupComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerWarmupComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerWarmupComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerWarmupComponent.cs`

## Overview

`MultiplayerWarmupComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MultiplayerWarmupComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalWarmupDuration` | `public static float TotalWarmupDuration { get { return (float)MultiplayerOptions.OptionType.WarmupTimeLimitInSeconds.GetIntValue(MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions); }` |
| `IsInWarmup` | `public bool IsInWarmup { get { return this.WarmupState != MultiplayerWarmupComponent.WarmupStates.Ended; }` |

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### CheckForWarmupProgressEnd
```csharp
public bool CheckForWarmupProgressEnd()
```

### OnPreDisplayMissionTick
```csharp
public override void OnPreDisplayMissionTick(float dt)
```

### EndWarmupProgress
```csharp
public void EndWarmupProgress()
```

### CanMatchStartAfterWarmup
```csharp
public bool CanMatchStartAfterWarmup()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### CommandEndWarmup
```csharp
public static string CommandEndWarmup(List<string> strings)
```

## Usage Example

```csharp
// Typical usage of MultiplayerWarmupComponent (Component)
agent.GetComponent<MultiplayerWarmupComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)