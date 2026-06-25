---
title: "PlayerSelectedAKingdomDecisionOptionEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerSelectedAKingdomDecisionOptionEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerSelectedAKingdomDecisionOptionEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerSelectedAKingdomDecisionOptionEvent : EventBase`
**Base:** `EventBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions/PlayerSelectedAKingdomDecisionOptionEvent.cs`

## Overview

`PlayerSelectedAKingdomDecisionOptionEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Option` | `public DecisionOutcome Option { get; }` |

## Usage Example

```csharp
var example = new PlayerSelectedAKingdomDecisionOptionEvent();
```

## See Also

- [Complete Class Catalog](../catalog)