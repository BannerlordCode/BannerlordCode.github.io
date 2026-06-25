---
title: "TradeAgreementDecision"
description: "Auto-generated class reference for TradeAgreementDecision."
---
# TradeAgreementDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeAgreementDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/TradeAgreementDecision.cs`

## Overview

`TradeAgreementDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnShowDecision
`public override bool OnShowDecision()`

**Purpose:** Invoked when the show decision event is raised.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.OnShowDecision();
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.ApplyChosenOutcome(chosenOutcome);
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetProposerClanForPlayerKingdom
`public static Clan GetProposerClanForPlayerKingdom(Kingdom target)`

**Purpose:** Reads and returns the proposer clan for player kingdom value held by the this instance.

```csharp
// Static call; no instance required
TradeAgreementDecision.GetProposerClanForPlayerKingdom(target);
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineChooser();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineInitialCandidates();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.DetermineSponsors(possibleOutcomes);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineSupport(clan, possibleOutcome);
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChooseDescription();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChooseTitle();
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetGeneralTitle();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetProposalInfluenceCost();
```

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**Purpose:** Checks whether the this instance meets the preconditions for make decision.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.CanMakeDecision(reason, false);
```

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**Purpose:** Calculates the current value or result of support.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.CalculateSupport(clan);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSecondaryEffects();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSupportDescription();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSupportTitle();
```

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.IsAllowed();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionDescription();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionImageIdentifier();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionLink();
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionTitle();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.OnShowDecision();
```

## See Also

- [Area Index](../)