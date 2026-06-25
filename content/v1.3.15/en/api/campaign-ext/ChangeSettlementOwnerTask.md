---
title: "ChangeSettlementOwnerTask"
description: "Auto-generated class reference for ChangeSettlementOwnerTask."
---
# ChangeSettlementOwnerTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ChangeSettlementOwnerTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueQuestTasks/ChangeSettlementOwnerTask.cs`

## Overview

`ChangeSettlementOwnerTask` lives in `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnSettlementOwnerChanged
`public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** **Purpose:** Invoked when the settlement owner changed event is raised.

```csharp
// Obtain an instance of ChangeSettlementOwnerTask from the subsystem API first
ChangeSettlementOwnerTask changeSettlementOwnerTask = ...;
changeSettlementOwnerTask.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### SetReferences
`public override void SetReferences()`

**Purpose:** **Purpose:** Assigns a new value to references and updates the object's internal state.

```csharp
// Obtain an instance of ChangeSettlementOwnerTask from the subsystem API first
ChangeSettlementOwnerTask changeSettlementOwnerTask = ...;
changeSettlementOwnerTask.SetReferences();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChangeSettlementOwnerTask changeSettlementOwnerTask = ...;
changeSettlementOwnerTask.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

## See Also

- [Area Index](../)