---
title: "WeakenEmpireQuestBehaviorTypeDefiner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeakenEmpireQuestBehaviorTypeDefiner`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeakenEmpireQuestBehaviorTypeDefiner

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode.Quests
**Type:** `public class WeakenEmpireQuestBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**Area:** campaign-ext

## Overview

`WeakenEmpireQuestBehaviorTypeDefiner` lives in `StoryMode.Quests.SecondPhase`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// First obtain a WeakenEmpireQuestBehaviorTypeDefiner instance from game state, then call one of its public methods
var value = new WeakenEmpireQuestBehaviorTypeDefiner();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
