---
title: "RescueFamilyQuest"
description: "Auto-generated class reference for RescueFamilyQuest."
---
# RescueFamilyQuest

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode.Quests
**Type:** `public class RescueFamilyQuest`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.PlayerClanQuests/RescueFamilyQuestBehavior.cs`

## Overview

`RescueFamilyQuest` lives in `StoryMode.Quests.PlayerClanQuests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.PlayerClanQuests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Invoked when the `hero can have campaign issues info is requested` event is raised.

```csharp
// Obtain an instance of RescueFamilyQuest from the subsystem API first
RescueFamilyQuest rescueFamilyQuest = ...;
rescueFamilyQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RescueFamilyQuest from the subsystem API first
RescueFamilyQuest rescueFamilyQuest = ...;
rescueFamilyQuest.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of RescueFamilyQuest from the subsystem API first
RescueFamilyQuest rescueFamilyQuest = ...;
rescueFamilyQuest.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RescueFamilyQuest rescueFamilyQuest = ...;
rescueFamilyQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## See Also

- [Area Index](../)