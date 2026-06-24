<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomElection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomElection

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomElection`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Election/KingdomElection.cs`

## Overview

`KingdomElection` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PossibleOutcomes` | `public MBReadOnlyList<DecisionOutcome> PossibleOutcomes { get; }` |
| `IsCancelled` | `public bool IsCancelled { get; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; }` |
| `IsPlayerChooser` | `public bool IsPlayerChooser { get; }` |

## Key Methods

### StartElection
`public void StartElection()`

**Purpose:** Handles logic related to `start election`.

### StartElectionWithoutPlayer
`public void StartElectionWithoutPlayer()`

**Purpose:** Handles logic related to `start election without player`.

### GetLikelihoodForSponsor
`public float GetLikelihoodForSponsor(Clan sponsor)`

**Purpose:** Gets the current value of `likelihood for sponsor`.

### GetRelationChangeWithSponsor
`public int GetRelationChangeWithSponsor(Hero opposerOrSupporter, Supporter.SupportWeights supportWeight, bool isOpposingSides)`

**Purpose:** Gets the current value of `relation change with sponsor`.

### GetChosenOutcomeText
`public TextObject GetChosenOutcomeText()`

**Purpose:** Gets the current value of `chosen outcome text`.

### DetermineOfficialSupport
`public void DetermineOfficialSupport()`

**Purpose:** Handles logic related to `determine official support`.

### GetInfluenceCostOfOutcome
`public int GetInfluenceCostOfOutcome(DecisionOutcome outcome, Clan supporter, Supporter.SupportWeights weight)`

**Purpose:** Gets the current value of `influence cost of outcome`.

### GetSecondaryEffects
`public TextObject GetSecondaryEffects()`

**Purpose:** Gets the current value of `secondary effects`.

### OnPlayerSupport
`public void OnPlayerSupport(DecisionOutcome decisionOutcome, Supporter.SupportWeights supportWeight)`

**Purpose:** Called when the `player support` event is raised.

### ApplySelection
`public void ApplySelection()`

**Purpose:** Applies `selection` to the current object.

### GetSortedDecisionOutcomes
`public MBList<DecisionOutcome> GetSortedDecisionOutcomes()`

**Purpose:** Gets the current value of `sorted decision outcomes`.

### GetGeneralTitle
`public TextObject GetGeneralTitle()`

**Purpose:** Gets the current value of `general title`.

### GetTitle
`public TextObject GetTitle()`

**Purpose:** Gets the current value of `title`.

### GetDescription
`public TextObject GetDescription()`

**Purpose:** Gets the current value of `description`.

## Usage Example

```csharp
var value = new KingdomElection();
value.StartElection();
```

## See Also

- [Complete Class Catalog](../catalog)