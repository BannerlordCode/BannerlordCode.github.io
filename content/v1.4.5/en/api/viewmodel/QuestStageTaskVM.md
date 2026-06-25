---
title: "QuestStageTaskVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestStageTaskVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestStageTaskVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestStageTaskVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestStageTaskVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Executes the `link` operation or workflow.

## Usage Example

```csharp
var value = new QuestStageTaskVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)