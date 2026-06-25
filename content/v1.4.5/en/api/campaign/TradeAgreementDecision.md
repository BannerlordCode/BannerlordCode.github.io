---
title: "TradeAgreementDecision"
description: "Auto-generated class reference for TradeAgreementDecision."
---
# TradeAgreementDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeAgreementDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/TradeAgreementDecision.cs`

## Overview

`TradeAgreementDecision` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** **Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionDescription();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** **Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionImageIdentifier();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** **Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionLink();
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** **Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionTitle();
```

### OnShowDecision
`public override bool OnShowDecision()`

**Purpose:** **Purpose:** Invoked when the show decision event is raised.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.OnShowDecision();
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**Purpose:** **Purpose:** Applies the effect of chosen outcome to the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.ApplyChosenOutcome(chosenOutcome);
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**Purpose:** **Purpose:** Applies the effect of secondary effects to the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetProposerClanForPlayerKingdom
`public static Clan GetProposerClanForPlayerKingdom(Kingdom target)`

**Purpose:** **Purpose:** Reads and returns the proposer clan for player kingdom value held by the this instance.

```csharp
// Static call; no instance required
TradeAgreementDecision.GetProposerClanForPlayerKingdom(target);
```

### DetermineChooser
`public override Clan DetermineChooser()`

**Purpose:** **Purpose:** Determines the result of chooser based on the current state.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineChooser();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**Purpose:** **Purpose:** Determines the result of initial candidates based on the current state.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineInitialCandidates();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** **Purpose:** Determines the result of sponsors based on the current state.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.DetermineSponsors(possibleOutcomes);
```

### CalculateSupport
`public float CalculateSupport(Clan clan, out TextObject hint)`

**Purpose:** **Purpose:** Calculates the current value or result of support.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.CalculateSupport(clan, hint);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**Purpose:** **Purpose:** Determines the result of support based on the current state.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineSupport(clan, possibleOutcome);
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**Purpose:** **Purpose:** Reads and returns the choose description value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChooseDescription();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**Purpose:** **Purpose:** Reads and returns the choose title value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChooseTitle();
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, SupportStatus supportStatus, bool isShortVersion = false)`

**Purpose:** **Purpose:** Reads and returns the chosen outcome text value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**Purpose:** **Purpose:** Reads and returns the general title value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetGeneralTitle();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**Purpose:** **Purpose:** Reads and returns the proposal influence cost value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetProposalInfluenceCost();
```

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for make decision.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.CanMakeDecision(reason, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**Purpose:** **Purpose:** Reads and returns the queried decision outcome value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**Purpose:** **Purpose:** Reads and returns the secondary effects value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSecondaryEffects();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**Purpose:** **Purpose:** Reads and returns the support description value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSupportDescription();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**Purpose:** **Purpose:** Reads and returns the support title value held by the this instance.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSupportTitle();
```

### IsAllowed
`public override bool IsAllowed()`

**Purpose:** **Purpose:** Determines whether the this instance is in the allowed state or condition.

```csharp
// Obtain an instance of TradeAgreementDecision from the subsystem API first
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.IsAllowed();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.GetDecisionDescription();
```

## See Also

- [Area Index](../)