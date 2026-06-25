---
title: "RaftStateChangeAction"
description: "Auto-generated class reference for RaftStateChangeAction."
---
# RaftStateChangeAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaftStateChangeAction`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/RaftStateChangeAction.cs`

## Overview

`RaftStateChangeAction` lives in `TaleWorlds.CampaignSystem.Actions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ActivateRaftStateForParty
`public static void ActivateRaftStateForParty(MobileParty mobileParty)`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with raft state for party.

```csharp
// Static call; no instance required
RaftStateChangeAction.ActivateRaftStateForParty(mobileParty);
```

### DeactivateRaftStateForParty
`public static void DeactivateRaftStateForParty(MobileParty mobileParty)`

**Purpose:** **Purpose:** Deactivates the resource, state, or feature associated with raft state for party.

```csharp
// Static call; no instance required
RaftStateChangeAction.DeactivateRaftStateForParty(mobileParty);
```

## Usage Example

```csharp
RaftStateChangeAction.ActivateRaftStateForParty(mobileParty);
```

## See Also

- [Area Index](../)