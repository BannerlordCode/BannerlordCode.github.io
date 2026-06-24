<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestsVM.cs`

## 概述

`QuestsVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `OldQuestsSortController` | `public QuestItemSortControllerVM OldQuestsSortController { get; set; }` |
| `SortSelector` | `public SelectorVM<SelectorItemVM> SortSelector { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteOpenQuestGiverEncyclopedia
`public void ExecuteOpenQuestGiverEncyclopedia()`

**用途 / Purpose:** 执行 `open quest giver encyclopedia` 操作或流程。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

### SetSelectedIssue
`public void SetSelectedIssue(IssueBase issue)`

**用途 / Purpose:** 设置 `selected issue` 的值或状态。

### SetSelectedQuest
`public void SetSelectedQuest(QuestBase quest)`

**用途 / Purpose:** 设置 `selected quest` 的值或状态。

### SetSelectedLog
`public void SetSelectedLog(JournalLogEntry log)`

**用途 / Purpose:** 设置 `selected log` 的值或状态。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new QuestsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)