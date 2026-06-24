<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementClaimantPreliminaryOutcome`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementClaimantPreliminaryOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementClaimantPreliminaryOutcome : DecisionOutcome`
**Base:** `DecisionOutcome`
**File:** `TaleWorlds.CampaignSystem/Election/SettlementClaimantPreliminaryDecision.cs`

## Overview

`SettlementClaimantPreliminaryOutcome` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Gets the current value of `decision title`.

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Gets the current value of `decision description`.

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Gets the current value of `decision link`.

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Gets the current value of `decision image identifier`.

## Usage Example

```csharp
var value = new SettlementClaimantPreliminaryOutcome();
value.GetDecisionTitle();
```

## See Also

- [Complete Class Catalog](../catalog)