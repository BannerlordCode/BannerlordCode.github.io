---
title: "StartAllianceDecision"
description: "Auto-generated class reference for StartAllianceDecision."
---
# StartAllianceDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class StartAllianceDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/StartAllianceDecision.cs`

## Overview

`StartAllianceDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllianceCampaignBehavior` | `public IAllianceCampaignBehavior AllianceCampaignBehavior { get; }` |

## Key Methods

### GetProposerClanForPlayerKingdom
`public static Clan GetProposerClanForPlayerKingdom(Kingdom target)`

**Purpose:** **Purpose:** Reads and returns the proposer clan for player kingdom value held by the this instance.

```csharp
// Static call; no instance required
StartAllianceDecision.GetProposerClanForPlayerKingdom(target);
```

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** **Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.IsAllowed();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** **Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** **Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetGeneralTitle();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** **Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetSupportTitle();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** **Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetChooseTitle();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** **Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetSupportDescription();
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** **Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetChooseDescription();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** **Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.DetermineInitialCandidates();
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** **Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.DetermineChooser();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** **Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
startAllianceDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** **Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
startAllianceDecision.ApplyChosenOutcome(chosenOutcome);
```

### OnShowDecision
`public override bool OnShowDecision()`

**Purpose:** **Purpose:** Invoked when the show decision event is raised.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.OnShowDecision();
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** **Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
startAllianceDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** **Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetSecondaryEffects();
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** **Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** **Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### CalculateSupport
`public float CalculateSupport(Clan clan, out TextObject hint, bool includeExplanation = false)`

**Purpose:** **Purpose:** Calculates the current value or result of support.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.CalculateSupport(clan, hint, false);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** **Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.DetermineSupport(clan, possibleOutcome);
```

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for make decision.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.CanMakeDecision(reason, false);
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** **Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** **Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** **Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** **Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of StartAllianceDecision from the subsystem API first
StartAllianceDecision startAllianceDecision = ...;
var result = startAllianceDecision.GetDecisionImageIdentifier();
```

## Usage Example

```csharp
StartAllianceDecision.GetProposerClanForPlayerKingdom(target);
```

## See Also

- [Area Index](../)