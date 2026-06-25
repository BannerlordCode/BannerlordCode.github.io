---
title: "RaftStateChangeAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RaftStateChangeAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RaftStateChangeAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaftStateChangeAction`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Actions/RaftStateChangeAction.cs`

## Overview

`RaftStateChangeAction` lives in `TaleWorlds.CampaignSystem.Actions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Actions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ActivateRaftStateForParty
`public static void ActivateRaftStateForParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `activate raft state for party`.

### DeactivateRaftStateForParty
`public static void DeactivateRaftStateForParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `deactivate raft state for party`.

## Usage Example

```csharp
RaftStateChangeAction.ActivateRaftStateForParty(mobileParty);
```

## See Also

- [Complete Class Catalog](../catalog)