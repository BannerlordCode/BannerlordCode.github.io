---
title: "FindHideoutTutorialQuest"
description: "Auto-generated class reference for FindHideoutTutorialQuest."
---
# FindHideoutTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode.Quests
**Type:** `public class FindHideoutTutorialQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.TutorialPhase/FindHideoutTutorialQuest.cs`

## Overview

`FindHideoutTutorialQuest` lives in `StoryMode.Quests.TutorialPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.TutorialPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### OnHeroCanDieInfoIsRequested
`public override void OnHeroCanDieInfoIsRequested(Hero hero, KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can die info is requested event is raised.

```csharp
// Obtain an instance of FindHideoutTutorialQuest from the subsystem API first
FindHideoutTutorialQuest findHideoutTutorialQuest = ...;
findHideoutTutorialQuest.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can be selected in inventory info is requested event is raised.

```csharp
// Obtain an instance of FindHideoutTutorialQuest from the subsystem API first
FindHideoutTutorialQuest findHideoutTutorialQuest = ...;
findHideoutTutorialQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Invoked when the hero can have campaign issues info is requested event is raised.

```csharp
// Obtain an instance of FindHideoutTutorialQuest from the subsystem API first
FindHideoutTutorialQuest findHideoutTutorialQuest = ...;
findHideoutTutorialQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FindHideoutTutorialQuest findHideoutTutorialQuest = ...;
findHideoutTutorialQuest.OnHeroCanDieInfoIsRequested(hero, causeOfDeath, result);
```

## See Also

- [Area Index](../)