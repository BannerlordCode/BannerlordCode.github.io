<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AssembleEmpireQuestBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AssembleEmpireQuestBehavior

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode.Quests
**Type:** `public class AssembleEmpireQuestBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.SecondPhase/AssembleEmpireQuestBehavior.cs`

## Overview

`AssembleEmpireQuestBehavior` lives in `StoryMode.Quests.SecondPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.SecondPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
var value = new AssembleEmpireQuestBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)