---
title: "KingdomDecision"
description: "Auto-generated class reference for KingdomDecision."
---
# KingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecision`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Election/KingdomDecision.cs`

## Overview

`KingdomDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `ProposerClan` | `public Clan ProposerClan { get; }` |
| `IsEnforced` | `public bool IsEnforced { get; set; }` |
| `PlayerExamined` | `public bool PlayerExamined { get; set; }` |
| `NotifyPlayer` | `public bool NotifyPlayer { get; set; }` |
| `IsPlayerParticipant` | `public bool IsPlayerParticipant { get; set; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; set; }` |
| `IsKingsVoteAllowed` | `public virtual bool IsKingsVoteAllowed { get; }` |
| `NeedsPlayerResolution` | `public bool NeedsPlayerResolution { get; }` |

## Key Methods

### IsAllowed
`public abstract bool IsAllowed()`

**Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.IsAllowed();
```

### GetInfluenceCost
`public int GetInfluenceCost(Clan sponsorClan)`

**Purpose:** Reads and returns the influence cost value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetInfluenceCost(sponsorClan);
```

### GetProposalInfluenceCost
`public abstract int GetProposalInfluenceCost()`

**Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public abstract TextObject GetGeneralTitle()`

**Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetGeneralTitle();
```

### GetSupportTitle
`public abstract TextObject GetSupportTitle()`

**Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetSupportTitle();
```

### GetChooseTitle
`public abstract TextObject GetChooseTitle()`

**Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetChooseTitle();
```

### GetSupportDescription
`public abstract TextObject GetSupportDescription()`

**Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetSupportDescription();
```

### GetChooseDescription
`public abstract TextObject GetChooseDescription()`

**Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetChooseDescription();
```

### CalculateMeritOfOutcome
`public virtual float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)`

**Purpose:** Calculates the current value or result of merit of outcome.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.CalculateMeritOfOutcome(candidateOutcome);
```

### DetermineInitialCandidates
`public abstract IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineInitialCandidates();
```

### NarrowDownCandidates
`public MBList<DecisionOutcome> NarrowDownCandidates(MBList<DecisionOutcome> initialCandidates, int maxCandidateCount)`

**Purpose:** Executes the NarrowDownCandidates logic.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.NarrowDownCandidates(initialCandidates, 0);
```

### DetermineChooser
`public abstract Clan DetermineChooser()`

**Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineChooser();
```

### DetermineSupporters
`public IEnumerable<Supporter> DetermineSupporters()`

**Purpose:** Determines the result of supporters based on the current state.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineSupporters();
```

### CanMakeDecision
`public virtual bool CanMakeDecision(out TextObject reason)`

**Purpose:** Checks whether the this instance meets the preconditions for make decision.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.CanMakeDecision(reason);
```

### ShouldBeCancelled
`public bool ShouldBeCancelled()`

**Purpose:** Executes the ShouldBeCancelled logic.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.ShouldBeCancelled();
```

### DetermineSupportOption
`public DecisionOutcome DetermineSupportOption(Supporter supporter, MBReadOnlyList<DecisionOutcome> possibleOutcomes, out Supporter.SupportWeights supportWeightOfSelectedOutcome, bool calculateRelationshipEffect)`

**Purpose:** Determines the result of support option based on the current state.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineSupportOption(supporter, possibleOutcomes, supportWeightOfSelectedOutcome, false);
```

### DetermineSupport
`public abstract float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineSupport(clan, possibleOutcome);
```

### DetermineSponsors
`public abstract void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
kingdomDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public abstract void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
kingdomDecision.ApplyChosenOutcome(chosenOutcome);
```

### GetInfluenceCost
`public int GetInfluenceCost(DecisionOutcome decisionOutcome, Clan clan, Supporter.SupportWeights supportWeight)`

**Purpose:** Reads and returns the influence cost value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetInfluenceCost(decisionOutcome, clan, supportWeight);
```

### GetSecondaryEffects
`public abstract TextObject GetSecondaryEffects()`

**Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetSecondaryEffects();
```

### ApplySecondaryEffects
`public abstract void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
kingdomDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetChosenOutcomeText
`public abstract TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### SortDecisionOutcomes
`public MBList<DecisionOutcome> SortDecisionOutcomes(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Executes the SortDecisionOutcomes logic.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.SortDecisionOutcomes(possibleOutcomes);
```

### GetQueriedDecisionOutcome
`public abstract DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### IsSingleClanDecision
`public bool IsSingleClanDecision()`

**Purpose:** Determines whether the this instance is in the single clan decision state or condition.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.IsSingleClanDecision();
```

### CalculateRelationshipEffectWithSponsor
`public virtual float CalculateRelationshipEffectWithSponsor(Clan clan)`

**Purpose:** Calculates the current value or result of relationship effect with sponsor.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.CalculateRelationshipEffectWithSponsor(clan);
```

### GetInfluenceCostOfSupport
`public int GetInfluenceCostOfSupport(Clan clan, Supporter.SupportWeights supportWeight)`

**Purpose:** Reads and returns the influence cost of support value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetInfluenceCostOfSupport(clan, supportWeight);
```

### OnShowDecision
`public virtual bool OnShowDecision()`

**Purpose:** Invoked when the show decision event is raised.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.OnShowDecision();
```

### GetFollowUpDecision
`public virtual KingdomDecision GetFollowUpDecision()`

**Purpose:** Reads and returns the follow up decision value held by the this instance.

```csharp
// Obtain an instance of KingdomDecision from the subsystem API first
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetFollowUpDecision();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
KingdomDecision instance = ...;
```

## See Also

- [Area Index](../)