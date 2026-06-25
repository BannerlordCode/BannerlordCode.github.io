---
title: "CustomBattleAgentOrigin"
description: "Auto-generated class reference for CustomBattleAgentOrigin."
---
# CustomBattleAgentOrigin

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentOrigin : IAgentOriginBase`
**Base:** `IAgentOriginBase`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs`

## Overview

`CustomBattleAgentOrigin` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomBattleCombatant` | `public CustomBattleCombatant CustomBattleCombatant { get; }` |
| `Troop` | `public BasicCharacterObject Troop { get; }` |
| `Rank` | `public int Rank { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand { get; }` |
| `FactionColor` | `public uint FactionColor { get; }` |
| `FactionColor2` | `public uint FactionColor2 { get; }` |
| `Seed` | `public int Seed { get; }` |
| `UniqueSeed` | `public int UniqueSeed { get; }` |

## Key Methods

### SetWounded
`public void SetWounded()`

**Purpose:** Assigns a new value to `wounded` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleAgentOrigin from the subsystem API first
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetWounded();
```

### SetKilled
`public void SetKilled()`

**Purpose:** Assigns a new value to `killed` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleAgentOrigin from the subsystem API first
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetKilled();
```

### SetRouted
`public void SetRouted(bool isOrderRetreat)`

**Purpose:** Assigns a new value to `routed` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleAgentOrigin from the subsystem API first
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetRouted(false);
```

### OnAgentRemoved
`public void OnAgentRemoved(float agentHealth)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of CustomBattleAgentOrigin from the subsystem API first
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.OnAgentRemoved(0);
```

### SetBanner
`public void SetBanner(Banner banner)`

**Purpose:** Assigns a new value to `banner` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleAgentOrigin from the subsystem API first
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetBanner(banner);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetWounded();
```

## See Also

- [Area Index](../)