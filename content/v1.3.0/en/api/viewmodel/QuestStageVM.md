---
title: "QuestStageVM"
description: "Auto-generated class reference for QuestStageVM."
---
# QuestStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestStageVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestStageVM.cs`

## Overview

`QuestStageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DateText` | `public string DateText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `HasATask` | `public bool HasATask { get; set; }` |
| `IsNew` | `public bool IsNew { get; set; }` |
| `IsLastStage` | `public bool IsLastStage { get; set; }` |
| `IsTaskCompleted` | `public bool IsTaskCompleted { get; set; }` |
| `StageTask` | `public QuestStageTaskVM StageTask { get; set; }` |

## Key Methods

### ExecuteResetUpdated
`public void ExecuteResetUpdated()`

**Purpose:** Runs the operation or workflow associated with reset updated.

```csharp
// Obtain an instance of QuestStageVM from the subsystem API first
QuestStageVM questStageVM = ...;
questStageVM.ExecuteResetUpdated();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of QuestStageVM from the subsystem API first
QuestStageVM questStageVM = ...;
questStageVM.ExecuteLink("example");
```

### UpdateIsNew
`public void UpdateIsNew()`

**Purpose:** Recalculates and stores the latest representation of is new.

```csharp
// Obtain an instance of QuestStageVM from the subsystem API first
QuestStageVM questStageVM = ...;
questStageVM.UpdateIsNew();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestStageVM questStageVM = ...;
questStageVM.ExecuteResetUpdated();
```

## See Also

- [Area Index](../)