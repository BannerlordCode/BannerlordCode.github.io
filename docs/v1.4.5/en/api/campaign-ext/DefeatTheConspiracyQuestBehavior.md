<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefeatTheConspiracyQuestBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefeatTheConspiracyQuestBehavior

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode.Quests
**Type:** `public class DefeatTheConspiracyQuestBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`

## Overview

`DefeatTheConspiracyQuestBehavior` lives in `StoryMode.Quests.ThirdPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.ThirdPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### CalculateReinforcedWarScore
`public void CalculateReinforcedWarScore()`

**Purpose:** Handles logic related to `calculate reinforced war score`.

### IsMobilePartyCreatedForQuest
`public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)`

**Purpose:** Handles logic related to `is mobile party created for quest`.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
var value = new DefeatTheConspiracyQuestBehavior();
value.CalculateReinforcedWarScore();
```

## See Also

- [Complete Class Catalog](../catalog)