<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefeatTheConspiracyQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefeatTheConspiracyQuest

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode.Quests
**Type:** `public class DefeatTheConspiracyQuest`
**Area:** campaign-ext

## Overview

`DefeatTheConspiracyQuest` lives in `StoryMode.Quests.ThirdPhase`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// First obtain a DefeatTheConspiracyQuest instance from game state, then call one of its public methods
var value = new DefeatTheConspiracyQuest();
value.CalculateReinforcedWarScore();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
