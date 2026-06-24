<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeclareWarDecisionOutcome`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeclareWarDecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DeclareWarDecisionOutcome : DecisionOutcome`
**Base:** `DecisionOutcome`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/DeclareWarDecision.cs`

## Overview

`DeclareWarDecisionOutcome` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new DeclareWarDecisionOutcome();
value.GetDecisionTitle();
```

## See Also

- [Complete Class Catalog](../catalog)