---
title: "CustomBattleAgentOrigin"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleAgentOrigin`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleAgentOrigin

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentOrigin : IAgentOriginBase`
**Base:** `IAgentOriginBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs`

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

## Key Methods

### SetWounded
`public void SetWounded()`

**Purpose:** Sets the value or state of `wounded`.

### SetKilled
`public void SetKilled()`

**Purpose:** Sets the value or state of `killed`.

### SetRouted
`public void SetRouted(bool isOrderRetreat)`

**Purpose:** Sets the value or state of `routed`.

### OnAgentRemoved
`public void OnAgentRemoved(float agentHealth)`

**Purpose:** Called when the `agent removed` event is raised.

### SetBanner
`public void SetBanner(Banner banner)`

**Purpose:** Sets the value or state of `banner`.

## Usage Example

```csharp
var value = new CustomBattleAgentOrigin();
value.SetWounded();
```

## See Also

- [Complete Class Catalog](../catalog)