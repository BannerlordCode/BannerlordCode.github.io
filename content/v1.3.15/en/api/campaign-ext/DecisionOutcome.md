---
title: "DecisionOutcome"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DecisionOutcome`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DecisionOutcome`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Election/DecisionOutcome.cs`

## Overview

`DecisionOutcome` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Support` | `public float Support { get; }` |
| `Merit` | `public float Merit { get; set; }` |
| `SponsorClan` | `public Clan SponsorClan { get; set; }` |
| `InitialSupport` | `public float InitialSupport { get; set; }` |
| `Likelihood` | `public float Likelihood { get; set; }` |
| `TotalSupportPoints` | `public float TotalSupportPoints { get; set; }` |
| `WinChance` | `public float WinChance { get; set; }` |

## Key Methods

### GetDecisionTitle
`public abstract TextObject GetDecisionTitle()`

**Purpose:** Gets the current value of `decision title`.

### GetDecisionDescription
`public abstract TextObject GetDecisionDescription()`

**Purpose:** Gets the current value of `decision description`.

### GetDecisionLink
`public abstract string GetDecisionLink()`

**Purpose:** Gets the current value of `decision link`.

### GetDecisionImageIdentifier
`public abstract ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Gets the current value of `decision image identifier`.

### AddSupport
`public void AddSupport(Supporter supporter)`

**Purpose:** Adds `support` to the current collection or state.

### ResetSupport
`public void ResetSupport(Supporter supporter)`

**Purpose:** Resets `support` to its initial state.

### SetSponsor
`public void SetSponsor(Clan sponsorClan)`

**Purpose:** Sets the value or state of `sponsor`.

## Usage Example

```csharp
var implementation = new CustomDecisionOutcome();
```

## See Also

- [Complete Class Catalog](../catalog)