---
title: "PlayerBattleInfo"
description: "Auto-generated class reference for PlayerBattleInfo."
---
# PlayerBattleInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerBattleInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs`

## Overview

`PlayerBattleInfo` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `Fled` | `public bool Fled { get; }` |
| `Disconnected` | `public bool Disconnected { get; set; }` |
| `JoinType` | `public BattleJoinType JoinType { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `CurrentState` | `public PlayerBattleInfo.State CurrentState { get; }` |

## Key Methods

### Flee
`public void Flee()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayerBattleInfo from the subsystem API first
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.Flee();
```

### Disconnect
`public void Disconnect()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayerBattleInfo from the subsystem API first
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.Disconnect();
```

### Initialize
`public void Initialize(int peerIndex)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of PlayerBattleInfo from the subsystem API first
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.Initialize(0);
```

### RejoinBattle
`public void RejoinBattle(int teamNo)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PlayerBattleInfo from the subsystem API first
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.RejoinBattle(0);
```

### Clone
`public PlayerBattleInfo Clone()`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of PlayerBattleInfo from the subsystem API first
PlayerBattleInfo playerBattleInfo = ...;
var result = playerBattleInfo.Clone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.Flee();
```

## See Also

- [Area Index](../)