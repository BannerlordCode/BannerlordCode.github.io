<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTimerComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerTimerComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`

## Overview

`MultiplayerTimerComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerTimerComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTimerRunning` | `public bool IsTimerRunning { get; }` |

## Key Methods

### StartTimerAsServer
`public void StartTimerAsServer(float duration)`

**Purpose:** Handles logic related to `start timer as server`.

### StartTimerAsClient
`public void StartTimerAsClient(float startTime, float duration)`

**Purpose:** Handles logic related to `start timer as client`.

### GetRemainingTime
`public float GetRemainingTime(bool isSynched)`

**Purpose:** Gets the current value of `remaining time`.

### CheckIfTimerPassed
`public bool CheckIfTimerPassed()`

**Purpose:** Handles logic related to `check if timer passed`.

### GetCurrentTimerStartTime
`public MissionTime GetCurrentTimerStartTime()`

**Purpose:** Gets the current value of `current timer start time`.

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerTimerComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)