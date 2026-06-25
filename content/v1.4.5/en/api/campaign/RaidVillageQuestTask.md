---
title: "RaidVillageQuestTask"
description: "Auto-generated class reference for RaidVillageQuestTask."
---
# RaidVillageQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaidVillageQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues.IssueQuestTasks/RaidVillageQuestTask.cs`

## Overview

`RaidVillageQuestTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnVillageLooted
`public void OnVillageLooted(Village village)`

**Purpose:** Invoked when the village looted event is raised.

```csharp
// Obtain an instance of RaidVillageQuestTask from the subsystem API first
RaidVillageQuestTask raidVillageQuestTask = ...;
raidVillageQuestTask.OnVillageLooted(village);
```

### OnClanChangedKingdom
`public void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification)`

**Purpose:** Invoked when the clan changed kingdom event is raised.

```csharp
// Obtain an instance of RaidVillageQuestTask from the subsystem API first
RaidVillageQuestTask raidVillageQuestTask = ...;
raidVillageQuestTask.OnClanChangedKingdom(clan, oldKingdom, newKingdom, detail, true);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of RaidVillageQuestTask from the subsystem API first
RaidVillageQuestTask raidVillageQuestTask = ...;
raidVillageQuestTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RaidVillageQuestTask raidVillageQuestTask = ...;
raidVillageQuestTask.OnVillageLooted(village);
```

## See Also

- [Area Index](../)