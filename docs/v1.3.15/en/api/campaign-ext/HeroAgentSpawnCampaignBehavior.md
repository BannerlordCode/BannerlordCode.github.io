<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroAgentSpawnCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroAgentSpawnCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HeroAgentSpawnCampaignBehavior` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
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

### OnSettlementEntered

```csharp
public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)
```

### OnSettlementLeft

```csharp
public void OnSettlementLeft(MobileParty mobileParty, Settlement settlement)
```

### OnPrisonersChangeInSettlement

```csharp
public void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)