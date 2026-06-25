---
title: "QuestStageVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestStageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestStageVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestStageVM.cs`

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

**Purpose:** Executes the `reset updated` operation or workflow.

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Executes the `link` operation or workflow.

### UpdateIsNew
`public void UpdateIsNew()`

**Purpose:** Updates the state or data of `is new`.

## Usage Example

```csharp
var value = new QuestStageVM();
value.ExecuteResetUpdated();
```

## See Also

- [Complete Class Catalog](../catalog)