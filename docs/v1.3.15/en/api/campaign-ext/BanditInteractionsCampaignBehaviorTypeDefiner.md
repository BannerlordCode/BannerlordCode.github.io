<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BanditInteractionsCampaignBehaviorTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BanditInteractionsCampaignBehaviorTypeDefiner

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditInteractionsCampaignBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`BanditInteractionsCampaignBehaviorTypeDefiner` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session launched` event is raised.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
// First obtain a BanditInteractionsCampaignBehaviorTypeDefiner instance from game state, then call one of its public methods
var value = new BanditInteractionsCampaignBehaviorTypeDefiner();
value.OnSessionLaunched(campaignGameStarter);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
