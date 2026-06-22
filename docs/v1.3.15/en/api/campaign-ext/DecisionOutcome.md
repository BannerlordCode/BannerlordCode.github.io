<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DecisionOutcome`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `DecisionOutcome` is a class in the `TaleWorlds.CampaignSystem.Election` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public abstract TextObject GetDecisionTitle()
```

### GetDecisionDescription

```csharp
public abstract TextObject GetDecisionDescription()
```

### GetDecisionLink

```csharp
public abstract string GetDecisionLink()
```

### GetDecisionImageIdentifier

```csharp
public abstract ImageIdentifier GetDecisionImageIdentifier()
```

### AddSupport

```csharp
public void AddSupport(Supporter supporter)
```

### ResetSupport

```csharp
public void ResetSupport(Supporter supporter)
```

### SetSponsor

```csharp
public void SetSponsor(Clan sponsorClan)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)