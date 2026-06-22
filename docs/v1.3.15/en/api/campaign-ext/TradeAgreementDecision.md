<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TradeAgreementDecision`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeAgreementDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TradeAgreementDecision` is a class in the `TaleWorlds.CampaignSystem.Election` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### OnShowDecision

```csharp
public override bool OnShowDecision()
```

### ApplyChosenOutcome

```csharp
public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)
```

### ApplySecondaryEffects

```csharp
public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)
```

### GetProposerClanForPlayerKingdom

```csharp
public static Clan GetProposerClanForPlayerKingdom(Kingdom target)
```

### DetermineChooser

```csharp
public override Clan DetermineChooser()
```

### DetermineInitialCandidates

```csharp
public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()
```

### DetermineSponsors

```csharp
public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### DetermineSupport

```csharp
public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)
```

### GetChooseDescription

```csharp
public override TextObject GetChooseDescription()
```

### GetChooseTitle

```csharp
public override TextObject GetChooseTitle()
```

### GetChosenOutcomeText

```csharp
public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)
```

### GetGeneralTitle

```csharp
public override TextObject GetGeneralTitle()
```

### GetProposalInfluenceCost

```csharp
public override int GetProposalInfluenceCost()
```

### CanMakeDecision

```csharp
public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)
```

### CalculateSupport

```csharp
public float CalculateSupport(Clan clan)
```

### GetQueriedDecisionOutcome

```csharp
public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)
```

### GetSecondaryEffects

```csharp
public override TextObject GetSecondaryEffects()
```

### GetSupportDescription

```csharp
public override TextObject GetSupportDescription()
```

### GetSupportTitle

```csharp
public override TextObject GetSupportTitle()
```

### IsAllowed

```csharp
public override bool IsAllowed()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)