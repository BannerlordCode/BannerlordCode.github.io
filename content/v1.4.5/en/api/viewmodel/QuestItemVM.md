---
title: "QuestItemVM"
description: "Auto-generated class reference for QuestItemVM."
---
# QuestItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestItemVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of QuestItemVM from the subsystem API first
QuestItemVM questItemVM = ...;
questItemVM.RefreshValues();
```

### UpdateIsUpdated
`public void UpdateIsUpdated()`

**Purpose:** Recalculates and stores the latest representation of is updated.

```csharp
// Obtain an instance of QuestItemVM from the subsystem API first
QuestItemVM questItemVM = ...;
questItemVM.UpdateIsUpdated();
```

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Runs the operation or workflow associated with selection.

```csharp
// Obtain an instance of QuestItemVM from the subsystem API first
QuestItemVM questItemVM = ...;
questItemVM.ExecuteSelection();
```

### ExecuteToggleQuestTrack
`public void ExecuteToggleQuestTrack()`

**Purpose:** Runs the operation or workflow associated with toggle quest track.

```csharp
// Obtain an instance of QuestItemVM from the subsystem API first
QuestItemVM questItemVM = ...;
questItemVM.ExecuteToggleQuestTrack();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestItemVM questItemVM = ...;
questItemVM.RefreshValues();
```

## See Also

- [Area Index](../)