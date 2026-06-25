---
title: "QuestStageTaskVM"
description: "Auto-generated class reference for QuestStageTaskVM."
---
# QuestStageTaskVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestStageTaskVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestStageTaskVM.cs`

## Overview

`QuestStageTaskVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TaskName` | `public string TaskName { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `TargetProgress` | `public int TargetProgress { get; set; }` |
| `ProgressType` | `public int ProgressType { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of QuestStageTaskVM from the subsystem API first
QuestStageTaskVM questStageTaskVM = ...;
questStageTaskVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of QuestStageTaskVM from the subsystem API first
QuestStageTaskVM questStageTaskVM = ...;
questStageTaskVM.ExecuteLink("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestStageTaskVM questStageTaskVM = ...;
questStageTaskVM.RefreshValues();
```

## See Also

- [Area Index](../)