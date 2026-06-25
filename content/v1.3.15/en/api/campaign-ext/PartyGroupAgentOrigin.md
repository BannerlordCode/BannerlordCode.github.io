---
title: "PartyGroupAgentOrigin"
description: "Auto-generated class reference for PartyGroupAgentOrigin."
---
# PartyGroupAgentOrigin

**Namespace:** TaleWorlds.CampaignSystem.AgentOrigins
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyGroupAgentOrigin : IAgentOriginBase`
**Base:** `IAgentOriginBase`
**File:** `TaleWorlds.CampaignSystem/AgentOrigins/PartyGroupAgentOrigin.cs`

## Overview

`PartyGroupAgentOrigin` lives in `TaleWorlds.CampaignSystem.AgentOrigins` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.AgentOrigins` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public PartyBase Party { get; }` |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `UniqueSeed` | `public int UniqueSeed { get; }` |
| `Troop` | `public CharacterObject Troop { get; }` |
| `TroopDesc` | `public UniqueTroopDescriptor TroopDesc { get; }` |
| `Rank` | `public int Rank { get; }` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand { get; }` |
| `FactionColor` | `public uint FactionColor { get; }` |
| `FactionColor2` | `public uint FactionColor2 { get; }` |
| `Seed` | `public int Seed { get; }` |

## Key Methods

### SetWounded
`public void SetWounded()`

**Purpose:** Assigns a new value to `wounded` and updates the object's internal state.

```csharp
// Obtain an instance of PartyGroupAgentOrigin from the subsystem API first
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetWounded();
```

### SetKilled
`public void SetKilled()`

**Purpose:** Assigns a new value to `killed` and updates the object's internal state.

```csharp
// Obtain an instance of PartyGroupAgentOrigin from the subsystem API first
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetKilled();
```

### SetRouted
`public void SetRouted(bool isOrderRetreat)`

**Purpose:** Assigns a new value to `routed` and updates the object's internal state.

```csharp
// Obtain an instance of PartyGroupAgentOrigin from the subsystem API first
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetRouted(false);
```

### OnAgentRemoved
`public void OnAgentRemoved(float agentHealth)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of PartyGroupAgentOrigin from the subsystem API first
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.OnAgentRemoved(0);
```

### SetBanner
`public void SetBanner(Banner banner)`

**Purpose:** Assigns a new value to `banner` and updates the object's internal state.

```csharp
// Obtain an instance of PartyGroupAgentOrigin from the subsystem API first
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetBanner(banner);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetWounded();
```

## See Also

- [Area Index](../)