---
title: "QuestItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QuestItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestItemVM.cs`

## Overview

`QuestItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Quest` | `public QuestBase Quest { get; set; }` |
| `Issue` | `public IssueBase Issue { get; set; }` |
| `QuestLogEntry` | `public JournalLogEntry QuestLogEntry { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `CompletionTypeAsInt` | `public int CompletionTypeAsInt { get; set; }` |
| `IsMainQuest` | `public bool IsMainQuest { get; set; }` |
| `IsNavalQuest` | `public bool IsNavalQuest { get; set; }` |
| `IsCompletedSuccessfully` | `public bool IsCompletedSuccessfully { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; set; }` |
| `IsUpdated` | `public bool IsUpdated { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsTrackable` | `public bool IsTrackable { get; set; }` |
| `RemainingDaysText` | `public string RemainingDaysText { get; set; }` |
| `RemainingDaysTextCombined` | `public string RemainingDaysTextCombined { get; set; }` |
| `RemainingDays` | `public int RemainingDays { get; set; }` |
| `QuestGiverHero` | `public HeroVM QuestGiverHero { get; set; }` |
| `IsQuestGiverHeroHidden` | `public bool IsQuestGiverHeroHidden { get; set; }` |
| `Stages` | `public MBBindingList<QuestStageVM> Stages { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateIsUpdated
`public void UpdateIsUpdated()`

**Purpose:** Updates the state or data of `is updated`.

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Executes the `selection` operation or workflow.

### ExecuteToggleQuestTrack
`public void ExecuteToggleQuestTrack()`

**Purpose:** Executes the `toggle quest track` operation or workflow.

## Usage Example

```csharp
var value = new QuestItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)