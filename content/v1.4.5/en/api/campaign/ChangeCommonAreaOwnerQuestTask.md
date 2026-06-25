---
title: "ChangeCommonAreaOwnerQuestTask"
description: "Auto-generated class reference for ChangeCommonAreaOwnerQuestTask."
---
# ChangeCommonAreaOwnerQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeCommonAreaOwnerQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues.IssueQuestTasks/ChangeCommonAreaOwnerQuestTask.cs`

## Overview

`ChangeCommonAreaOwnerQuestTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnCommonAreaOwnerChanged
`public void OnCommonAreaOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**Purpose:** Invoked when the common area owner changed event is raised.

```csharp
// Obtain an instance of ChangeCommonAreaOwnerQuestTask from the subsystem API first
ChangeCommonAreaOwnerQuestTask changeCommonAreaOwnerQuestTask = ...;
changeCommonAreaOwnerQuestTask.OnCommonAreaOwnerChanged(alley, newOwner, oldOwner);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of ChangeCommonAreaOwnerQuestTask from the subsystem API first
ChangeCommonAreaOwnerQuestTask changeCommonAreaOwnerQuestTask = ...;
changeCommonAreaOwnerQuestTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChangeCommonAreaOwnerQuestTask changeCommonAreaOwnerQuestTask = ...;
changeCommonAreaOwnerQuestTask.OnCommonAreaOwnerChanged(alley, newOwner, oldOwner);
```

## See Also

- [Area Index](../)