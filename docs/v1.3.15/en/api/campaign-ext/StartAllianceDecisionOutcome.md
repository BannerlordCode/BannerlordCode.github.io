<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StartAllianceDecisionOutcome`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StartAllianceDecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `StartAllianceDecisionOutcome` is a class in the `TaleWorlds.CampaignSystem.Election` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `AllianceCampaignBehavior` | `public IAllianceCampaignBehavior AllianceCampaignBehavior { get; }` |


## Key Methods

### GetProposerClanForPlayerKingdom

```csharp
public static Clan GetProposerClanForPlayerKingdom(Kingdom target)
```

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

### DetermineInitialCandidates

```csharp
public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()
```

### DetermineChooser

```csharp
public override Clan DetermineChooser()
```

### DetermineSponsors

```csharp
public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### ApplyChosenOutcome

```csharp
public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)
```

### OnShowDecision

```csharp
public override bool OnShowDecision()
```

### ApplySecondaryEffects

```csharp
public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)
```

### GetSecondaryEffects

```csharp
public override TextObject GetSecondaryEffects()
```

### GetChosenOutcomeText

```csharp
public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)
```

### GetQueriedDecisionOutcome

```csharp
public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### CalculateSupport

```csharp
public float CalculateSupport(Clan clan, out TextObject hint, bool includeExplanation = false)
```

### DetermineSupport

```csharp
public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)
```

### CanMakeDecision

```csharp
public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)