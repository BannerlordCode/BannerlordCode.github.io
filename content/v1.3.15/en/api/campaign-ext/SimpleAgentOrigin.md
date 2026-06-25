---
title: "SimpleAgentOrigin"
description: "Auto-generated class reference for SimpleAgentOrigin."
---
# SimpleAgentOrigin

**Namespace:** TaleWorlds.CampaignSystem.AgentOrigins
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SimpleAgentOrigin : IAgentOriginBase`
**Base:** `IAgentOriginBase`
**File:** `TaleWorlds.CampaignSystem/AgentOrigins/SimpleAgentOrigin.cs`

## Overview

`SimpleAgentOrigin` lives in `TaleWorlds.CampaignSystem.AgentOrigins` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.AgentOrigins` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Troop` | `public BasicCharacterObject Troop { get; }` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand { get; }` |
| `FactionColor` | `public uint FactionColor { get; }` |
| `FactionColor2` | `public uint FactionColor2 { get; }` |
| `Seed` | `public int Seed { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `Rank` | `public int Rank { get; }` |
| `UniqueSeed` | `public int UniqueSeed { get; }` |

## Key Methods

### SetWounded
`public void SetWounded()`

**Purpose:** Assigns a new value to wounded and updates the object's internal state.

```csharp
// Obtain an instance of SimpleAgentOrigin from the subsystem API first
SimpleAgentOrigin simpleAgentOrigin = ...;
simpleAgentOrigin.SetWounded();
```

### SetKilled
`public void SetKilled()`

**Purpose:** Assigns a new value to killed and updates the object's internal state.

```csharp
// Obtain an instance of SimpleAgentOrigin from the subsystem API first
SimpleAgentOrigin simpleAgentOrigin = ...;
simpleAgentOrigin.SetKilled();
```

### SetRouted
`public void SetRouted(bool isOrderRetreat)`

**Purpose:** Assigns a new value to routed and updates the object's internal state.

```csharp
// Obtain an instance of SimpleAgentOrigin from the subsystem API first
SimpleAgentOrigin simpleAgentOrigin = ...;
simpleAgentOrigin.SetRouted(false);
```

### OnAgentRemoved
`public void OnAgentRemoved(float agentHealth)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of SimpleAgentOrigin from the subsystem API first
SimpleAgentOrigin simpleAgentOrigin = ...;
simpleAgentOrigin.OnAgentRemoved(0);
```

### SetBanner
`public void SetBanner(Banner banner)`

**Purpose:** Assigns a new value to banner and updates the object's internal state.

```csharp
// Obtain an instance of SimpleAgentOrigin from the subsystem API first
SimpleAgentOrigin simpleAgentOrigin = ...;
simpleAgentOrigin.SetBanner(banner);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SimpleAgentOrigin simpleAgentOrigin = ...;
simpleAgentOrigin.SetWounded();
```

## See Also

- [Area Index](../)