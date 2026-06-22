<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestsVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`QuestsVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)