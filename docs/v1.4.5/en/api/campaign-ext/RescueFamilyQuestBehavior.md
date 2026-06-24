<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RescueFamilyQuestBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RescueFamilyQuestBehavior

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode.Quests
**Type:** `public class RescueFamilyQuestBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.PlayerClanQuests/RescueFamilyQuestBehavior.cs`

## Overview

`RescueFamilyQuestBehavior` lives in `StoryMode.Quests.PlayerClanQuests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new RescueFamilyQuestBehavior();
value.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Complete Class Catalog](../catalog)