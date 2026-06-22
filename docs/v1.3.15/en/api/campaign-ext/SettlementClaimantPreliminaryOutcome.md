<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementClaimantPreliminaryOutcome`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementClaimantPreliminaryOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SettlementClaimantPreliminaryOutcome` is a class in the `TaleWorlds.CampaignSystem.Election` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### IsAllowed

```csharp
public override bool IsAllowed()
```

### GetProposalInfluenceCost

```csharp
public override int GetProposalInfluenceCost()
```

### GetGeneralTitle

```csharp
public override TextObject GetGeneralTitle()
```

### GetSupportTitle

```csharp
public override TextObject GetSupportTitle()
```

### GetChooseTitle

```csharp
public override TextObject GetChooseTitle()
```

### GetSupportDescription

```csharp
public override TextObject GetSupportDescription()
```

### GetChooseDescription

```csharp
public override TextObject GetChooseDescription()
```

### CalculateMeritOfOutcome

```csharp
public override float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)
```

### DetermineInitialCandidates

```csharp
public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()
```

### DetermineChooser

```csharp
public override Clan DetermineChooser()
```

### CalculateSupport

```csharp
public float CalculateSupport(Clan clan)
```

### DetermineSupport

```csharp
public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)
```

### DetermineSponsors

```csharp
public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### ApplyChosenOutcome

```csharp
public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)
```

### GetSecondaryEffects

```csharp
public override TextObject GetSecondaryEffects()
```

### ApplySecondaryEffects

```csharp
public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)
```

### GetChosenOutcomeText

```csharp
public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)
```

### GetQueriedDecisionOutcome

```csharp
public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### GetFollowUpDecision

```csharp
public override KingdomDecision GetFollowUpDecision()
```

### GetDecisionTitle

```csharp
public override TextObject GetDecisionTitle()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)