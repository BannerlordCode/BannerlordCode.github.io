<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HideoutCampaignBehavior` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### OnNewGameCreated

```csharp
public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)
```

### OnGameLoaded

```csharp
public void OnGameLoaded(CampaignGameStarter campaignGameStarter)
```

### HourlyTickSettlement

```csharp
public void HourlyTickSettlement(Settlement settlement)
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### GetInitialHideoutPopulation

```csharp
public int GetInitialHideoutPopulation()
```

### hideout_wait_menu_on_condition

```csharp
public bool hideout_wait_menu_on_condition(MenuCallbackArgs args)
```

### hideout_wait_menu_on_tick

```csharp
public void hideout_wait_menu_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)
```

### hideout_wait_menu_on_consequence

```csharp
public void hideout_wait_menu_on_consequence(MenuCallbackArgs args)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)