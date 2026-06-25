---
title: "WeakenEmpireQuest"
description: "Auto-generated class reference for WeakenEmpireQuest."
---
# WeakenEmpireQuest

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode.Quests
**Type:** `public class WeakenEmpireQuest`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.SecondPhase/WeakenEmpireQuestBehavior.cs`

## Overview

`WeakenEmpireQuest` lives in `StoryMode.Quests.SecondPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.SecondPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of WeakenEmpireQuest from the subsystem API first
WeakenEmpireQuest weakenEmpireQuest = ...;
weakenEmpireQuest.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of WeakenEmpireQuest from the subsystem API first
WeakenEmpireQuest weakenEmpireQuest = ...;
weakenEmpireQuest.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeakenEmpireQuest weakenEmpireQuest = ...;
weakenEmpireQuest.RegisterEvents();
```

## See Also

- [Area Index](../)