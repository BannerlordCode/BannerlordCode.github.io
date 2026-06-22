<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BanditSpawnCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BanditSpawnCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BanditSpawnCampaignBehavior` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
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

### InitializeInitialHideouts

```csharp
public void InitializeInitialHideouts()
```

### OnSettlementEntered

```csharp
public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)
```

### DailyTick

```csharp
public void DailyTick()
```

### AddBanditToHideout

```csharp
public MobileParty AddBanditToHideout(Hideout hideoutComponent, PartyTemplateObject overridenPartyTemplate = null, bool isBanditBossParty = false)
```

### SpawnBanditsAroundHideoutAtNewGame

```csharp
public void SpawnBanditsAroundHideoutAtNewGame()
```

### SpawnLootersAtNewGame

```csharp
public void SpawnLootersAtNewGame()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)