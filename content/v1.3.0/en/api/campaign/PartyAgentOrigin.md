---
title: "PartyAgentOrigin"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyAgentOrigin`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyAgentOrigin

**Namespace:** TaleWorlds.CampaignSystem.AgentOrigins
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyAgentOrigin : IAgentOriginBase`
**Base:** `IAgentOriginBase`
**File:** `TaleWorlds.CampaignSystem/AgentOrigins/PartyAgentOrigin.cs`

## Overview

`PartyAgentOrigin` lives in `TaleWorlds.CampaignSystem.AgentOrigins` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.AgentOrigins` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public PartyBase Party { get; }` |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `Troop` | `public BasicCharacterObject Troop { get; }` |
| `Rank` | `public int Rank { get; }` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand { get; }` |
| `FactionColor` | `public uint FactionColor { get; }` |
| `FactionColor2` | `public uint FactionColor2 { get; }` |
| `Seed` | `public int Seed { get; }` |
| `UniqueSeed` | `public int UniqueSeed { get; }` |

## Key Methods

### SetWounded
`public void SetWounded()`

**Purpose:** Sets the value or state of `wounded`.

### SetKilled
`public void SetKilled()`

**Purpose:** Sets the value or state of `killed`.

### SetRouted
`public void SetRouted()`

**Purpose:** Sets the value or state of `routed`.

### OnAgentRemoved
`public void OnAgentRemoved(float agentHealth)`

**Purpose:** Called when the `agent removed` event is raised.

### SetBanner
`public void SetBanner(Banner banner)`

**Purpose:** Sets the value or state of `banner`.

## Usage Example

```csharp
var value = new PartyAgentOrigin();
value.SetWounded();
```

## See Also

- [Complete Class Catalog](../catalog)