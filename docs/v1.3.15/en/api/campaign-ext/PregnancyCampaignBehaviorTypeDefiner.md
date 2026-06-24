<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PregnancyCampaignBehaviorTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PregnancyCampaignBehaviorTypeDefiner

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PregnancyCampaignBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`PregnancyCampaignBehaviorTypeDefiner` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### OnHeroKilled
`public void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)`

**Purpose:** Called when the `hero killed` event is raised.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
// First obtain a PregnancyCampaignBehaviorTypeDefiner instance from game state, then call one of its public methods
var value = new PregnancyCampaignBehaviorTypeDefiner();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
