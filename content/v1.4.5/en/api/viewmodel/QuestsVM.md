---
title: "QuestsVM"
description: "Auto-generated class reference for QuestsVM."
---
# QuestsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestsVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Quests/QuestsVM.cs`

## Overview

`QuestsVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `SelectedQuest` | `public QuestItemVM SelectedQuest { get; set; }` |
| `ActiveQuestsList` | `public MBBindingList<QuestItemVM> ActiveQuestsList { get; set; }` |
| `OldQuestsList` | `public MBBindingList<QuestItemVM> OldQuestsList { get; set; }` |
| `CurrentQuestGiverHero` | `public HeroVM CurrentQuestGiverHero { get; set; }` |
| `TimeRemainingLbl` | `public string TimeRemainingLbl { get; set; }` |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest { get; set; }` |
| `NoActiveQuestText` | `public string NoActiveQuestText { get; set; }` |
| `SortQuestsText` | `public string SortQuestsText { get; set; }` |
| `QuestGiverText` | `public string QuestGiverText { get; set; }` |
| `QuestTitleText` | `public string QuestTitleText { get; set; }` |
| `OldQuestsText` | `public string OldQuestsText { get; set; }` |
| `ActiveQuestsText` | `public string ActiveQuestsText { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CurrentQuestTitle` | `public string CurrentQuestTitle { get; set; }` |
| `IsCurrentQuestGiverHeroHidden` | `public bool IsCurrentQuestGiverHeroHidden { get; set; }` |
| `CurrentQuestStages` | `public MBBindingList<QuestStageVM> CurrentQuestStages { get; set; }` |
| `TimeRemainingHint` | `public HintViewModel TimeRemainingHint { get; set; }` |
| `OldQuestsHint` | `public HintViewModel OldQuestsHint { get; set; }` |
| `ActiveQuestsSortController` | `public QuestItemSortControllerVM ActiveQuestsSortController { get; set; }` |
| `OldQuestsSortController` | `public QuestItemSortControllerVM OldQuestsSortController { get; set; }` |
| `SortSelector` | `public SelectorVM<SelectorItemVM> SortSelector { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of QuestsVM from the subsystem API first
QuestsVM questsVM = ...;
questsVM.RefreshValues();
```

### ExecuteOpenQuestGiverEncyclopedia
`public void ExecuteOpenQuestGiverEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with open quest giver encyclopedia.

```csharp
// Obtain an instance of QuestsVM from the subsystem API first
QuestsVM questsVM = ...;
questsVM.ExecuteOpenQuestGiverEncyclopedia();
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of QuestsVM from the subsystem API first
QuestsVM questsVM = ...;
questsVM.ExecuteClose();
```

### SetSelectedIssue
`public void SetSelectedIssue(IssueBase issue)`

**Purpose:** Assigns a new value to selected issue and updates the object's internal state.

```csharp
// Obtain an instance of QuestsVM from the subsystem API first
QuestsVM questsVM = ...;
questsVM.SetSelectedIssue(issue);
```

### SetSelectedQuest
`public void SetSelectedQuest(QuestBase quest)`

**Purpose:** Assigns a new value to selected quest and updates the object's internal state.

```csharp
// Obtain an instance of QuestsVM from the subsystem API first
QuestsVM questsVM = ...;
questsVM.SetSelectedQuest(quest);
```

### SetSelectedLog
`public void SetSelectedLog(JournalLogEntry log)`

**Purpose:** Assigns a new value to selected log and updates the object's internal state.

```csharp
// Obtain an instance of QuestsVM from the subsystem API first
QuestsVM questsVM = ...;
questsVM.SetSelectedLog(log);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of QuestsVM from the subsystem API first
QuestsVM questsVM = ...;
questsVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of QuestsVM from the subsystem API first
QuestsVM questsVM = ...;
questsVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestsVM questsVM = ...;
questsVM.RefreshValues();
```

## See Also

- [Area Index](../)