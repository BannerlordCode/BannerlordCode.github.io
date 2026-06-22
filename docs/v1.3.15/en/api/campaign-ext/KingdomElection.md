<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomElection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KingdomElection

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `KingdomElection` is a class in the `TaleWorlds.CampaignSystem.Election` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PossibleOutcomes` | `public MBReadOnlyList<DecisionOutcome> PossibleOutcomes { get; }` |
| `IsCancelled` | `public bool IsCancelled { get; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; }` |
| `IsPlayerChooser` | `public bool IsPlayerChooser { get; }` |


## Key Methods

### StartElection

```csharp
public void StartElection()
```

### StartElectionWithoutPlayer

```csharp
public void StartElectionWithoutPlayer()
```

### GetLikelihoodForSponsor

```csharp
public float GetLikelihoodForSponsor(Clan sponsor)
```

### GetRelationChangeWithSponsor

```csharp
public int GetRelationChangeWithSponsor(Hero opposerOrSupporter, Supporter.SupportWeights supportWeight, bool isOpposingSides)
```

### GetChosenOutcomeText

```csharp
public TextObject GetChosenOutcomeText()
```

### DetermineOfficialSupport

```csharp
public void DetermineOfficialSupport()
```

### GetInfluenceCostOfOutcome

```csharp
public int GetInfluenceCostOfOutcome(DecisionOutcome outcome, Clan supporter, Supporter.SupportWeights weight)
```

### GetSecondaryEffects

```csharp
public TextObject GetSecondaryEffects()
```

### OnPlayerSupport

```csharp
public void OnPlayerSupport(DecisionOutcome decisionOutcome, Supporter.SupportWeights supportWeight)
```

### ApplySelection

```csharp
public void ApplySelection()
```

### GetSortedDecisionOutcomes

```csharp
public MBList<DecisionOutcome> GetSortedDecisionOutcomes()
```

### GetGeneralTitle

```csharp
public TextObject GetGeneralTitle()
```

### GetTitle

```csharp
public TextObject GetTitle()
```

### GetDescription

```csharp
public TextObject GetDescription()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)