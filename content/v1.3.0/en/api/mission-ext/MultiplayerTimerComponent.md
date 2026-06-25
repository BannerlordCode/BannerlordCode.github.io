---
title: "MultiplayerTimerComponent"
description: "Auto-generated class reference for MultiplayerTimerComponent."
---
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

**Purpose:** Starts the timer as server flow or state machine.

```csharp
// Obtain an instance of MultiplayerTimerComponent from the subsystem API first
MultiplayerTimerComponent multiplayerTimerComponent = ...;
multiplayerTimerComponent.StartTimerAsServer(0);
```

### StartTimerAsClient
`public void StartTimerAsClient(float startTime, float duration)`

**Purpose:** Starts the timer as client flow or state machine.

```csharp
// Obtain an instance of MultiplayerTimerComponent from the subsystem API first
MultiplayerTimerComponent multiplayerTimerComponent = ...;
multiplayerTimerComponent.StartTimerAsClient(0, 0);
```

### GetRemainingTime
`public float GetRemainingTime(bool isSynched)`

**Purpose:** Reads and returns the remaining time value held by the this instance.

```csharp
// Obtain an instance of MultiplayerTimerComponent from the subsystem API first
MultiplayerTimerComponent multiplayerTimerComponent = ...;
var result = multiplayerTimerComponent.GetRemainingTime(false);
```

### CheckIfTimerPassed
`public bool CheckIfTimerPassed()`

**Purpose:** Verifies whether if timer passed holds true for the this instance.

```csharp
// Obtain an instance of MultiplayerTimerComponent from the subsystem API first
MultiplayerTimerComponent multiplayerTimerComponent = ...;
var result = multiplayerTimerComponent.CheckIfTimerPassed();
```

### GetCurrentTimerStartTime
`public MissionTime GetCurrentTimerStartTime()`

**Purpose:** Reads and returns the current timer start time value held by the this instance.

```csharp
// Obtain an instance of MultiplayerTimerComponent from the subsystem API first
MultiplayerTimerComponent multiplayerTimerComponent = ...;
var result = multiplayerTimerComponent.GetCurrentTimerStartTime();
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerTimerComponent>();
```

## See Also

- [Area Index](../)