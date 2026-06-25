---
title: "BattlePeer"
description: "Auto-generated class reference for BattlePeer."
---
# BattlePeer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePeer`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattlePeer.cs`

## Overview

`BattlePeer` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Name` | `public string Name { get; }` |
| `TeamNo` | `public int TeamNo { get; }` |
| `BattleJoinType` | `public BattleJoinType BattleJoinType { get; }` |
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `SessionKey` | `public int SessionKey { get; }` |
| `QuitType` | `public BattlePeerQuitType QuitType { get; }` |

## Key Methods

### Rejoin
`public void Rejoin(int teamNo)`

**Purpose:** **Purpose:** Executes the Rejoin logic.

```csharp
// Obtain an instance of BattlePeer from the subsystem API first
BattlePeer battlePeer = ...;
battlePeer.Rejoin(0);
```

### InitializeSession
`public void InitializeSession(int index, int sessionKey)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by session.

```csharp
// Obtain an instance of BattlePeer from the subsystem API first
BattlePeer battlePeer = ...;
battlePeer.InitializeSession(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BattlePeer battlePeer = ...;
battlePeer.Rejoin(0);
```

## See Also

- [Area Index](../)