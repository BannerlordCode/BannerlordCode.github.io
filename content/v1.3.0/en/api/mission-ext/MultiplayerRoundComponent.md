---
title: "MultiplayerRoundComponent"
description: "Auto-generated class reference for MultiplayerRoundComponent."
---
# MultiplayerRoundComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundComponent : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs`

## Overview

`MultiplayerRoundComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerRoundComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingRoundTime` | `public float RemainingRoundTime { get; }` |
| `LastRoundEndRemainingTime` | `public float LastRoundEndRemainingTime { get; }` |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState { get; }` |
| `RoundCount` | `public int RoundCount { get; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get; }` |
| `RoundEndReason` | `public RoundEndReason RoundEndReason { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerRoundComponent from the subsystem API first
MultiplayerRoundComponent multiplayerRoundComponent = ...;
multiplayerRoundComponent.AfterStart();
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerRoundComponent>();
```

## See Also

- [Area Index](../)