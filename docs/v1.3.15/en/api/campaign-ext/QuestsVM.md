<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestsVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `QuestsVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteOpenQuestGiverEncyclopedia

```csharp
public void ExecuteOpenQuestGiverEncyclopedia()
```

### ExecuteClose

```csharp
public void ExecuteClose()
```

### SetSelectedIssue

```csharp
public void SetSelectedIssue(IssueBase issue)
```

### SetSelectedQuest

```csharp
public void SetSelectedQuest(QuestBase quest)
```

### SetSelectedLog

```csharp
public void SetSelectedLog(JournalLogEntry log)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotKey)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)