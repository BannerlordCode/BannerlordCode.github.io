<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RebuildPlayerClanQuestBehaviorTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RebuildPlayerClanQuestBehaviorTypeDefiner

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode.Quests
**Type:** `public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`RebuildPlayerClanQuestBehaviorTypeDefiner` lives in `StoryMode.Quests.PlayerClanQuests`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.Quests.PlayerClanQuests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
// First obtain a RebuildPlayerClanQuestBehaviorTypeDefiner instance from game state, then call one of its public methods
var value = new RebuildPlayerClanQuestBehaviorTypeDefiner();
value.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
