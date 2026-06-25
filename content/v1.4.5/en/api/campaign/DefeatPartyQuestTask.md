---
title: "DefeatPartyQuestTask"
description: "Auto-generated class reference for DefeatPartyQuestTask."
---
# DefeatPartyQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefeatPartyQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues.IssueQuestTasks/DefeatPartyQuestTask.cs`

## Overview

`DefeatPartyQuestTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PartyConditionDelegateType
`public delegate bool PartyConditionDelegateType(PartyBase defeatedParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefeatPartyQuestTask from the subsystem API first
DefeatPartyQuestTask defeatPartyQuestTask = ...;
var result = defeatPartyQuestTask.PartyConditionDelegateType(defeatedParty);
```

### OnPartyDefeatedDelegateType
`public delegate void OnPartyDefeatedDelegateType(PartyBase party)`

**Purpose:** Invoked when the `party defeated delegate type` event is raised.

```csharp
// Obtain an instance of DefeatPartyQuestTask from the subsystem API first
DefeatPartyQuestTask defeatPartyQuestTask = ...;
defeatPartyQuestTask.OnPartyDefeatedDelegateType(party);
```

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Invoked when the `map event ended` event is raised.

```csharp
// Obtain an instance of DefeatPartyQuestTask from the subsystem API first
DefeatPartyQuestTask defeatPartyQuestTask = ...;
defeatPartyQuestTask.OnMapEventEnded(mapEvent);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** Assigns a new value to `references` and updates the object's internal state.

```csharp
// Obtain an instance of DefeatPartyQuestTask from the subsystem API first
DefeatPartyQuestTask defeatPartyQuestTask = ...;
defeatPartyQuestTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefeatPartyQuestTask defeatPartyQuestTask = ...;
defeatPartyQuestTask.PartyConditionDelegateType(defeatedParty);
```

## See Also

- [Area Index](../)