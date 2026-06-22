<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageOfferCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MarriageOfferCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MarriageOfferCampaignBehavior` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### CreateMarriageOffer

```csharp
public void CreateMarriageOffer(Hero currentOfferedPlayerClanHero, Hero currentOfferedOtherClanHero)
```

### GetMarriageAcceptedConsequences

```csharp
public MBBindingList<TextObject> GetMarriageAcceptedConsequences()
```

### OnMarriageOfferAcceptedOnPopUp

```csharp
public void OnMarriageOfferAcceptedOnPopUp()
```

### OnMarriageOfferedToPlayer

```csharp
public void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)
```

### OnMarriageOfferDeclinedOnPopUp

```csharp
public void OnMarriageOfferDeclinedOnPopUp()
```

### OnMarriageOfferCanceled

```csharp
public void OnMarriageOfferCanceled(Hero suitor, Hero maiden)
```

### IsHeroEngaged

```csharp
public bool IsHeroEngaged(Hero hero)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)