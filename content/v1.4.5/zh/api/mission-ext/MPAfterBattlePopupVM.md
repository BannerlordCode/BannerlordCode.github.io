---
title: "MPAfterBattlePopupVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPAfterBattlePopupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPAfterBattlePopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAfterBattlePopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle/MPAfterBattlePopupVM.cs`

## 概述

`MPAfterBattlePopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsShowingGeneralProgression` | `public bool IsShowingGeneralProgression { get; set; }` |
| `IsShowingNewLevel` | `public bool IsShowingNewLevel { get; set; }` |
| `IsShowingRankProgression` | `public bool IsShowingRankProgression { get; set; }` |
| `IsShowingNewRank` | `public bool IsShowingNewRank { get; set; }` |
| `HasLostRating` | `public bool HasLostRating { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `LevelText` | `public string LevelText { get; set; }` |
| `ExperienceText` | `public string ExperienceText { get; set; }` |
| `ClickToContinueText` | `public string ClickToContinueText { get; set; }` |
| `ReachedLevelText` | `public string ReachedLevelText { get; set; }` |
| `PointsText` | `public string PointsText { get; set; }` |
| `PointChangedText` | `public string PointChangedText { get; set; }` |
| `OldRankID` | `public string OldRankID { get; set; }` |
| `NewRankID` | `public string NewRankID { get; set; }` |
| `OldRankName` | `public string OldRankName { get; set; }` |
| `NewRankName` | `public string NewRankName { get; set; }` |
| `FinalRatio` | `public int FinalRatio { get; set; }` |
| `NumOfLevelUps` | `public int NumOfLevelUps { get; set; }` |
| `InitialRatio` | `public int InitialRatio { get; set; }` |
| `GainedExperience` | `public int GainedExperience { get; set; }` |
| `LevelsExperienceRequirment` | `public int LevelsExperienceRequirment { get; set; }` |
| `NextLevel` | `public int NextLevel { get; set; }` |
| `CurrentLevel` | `public int CurrentLevel { get; set; }` |
| `ShownRating` | `public int ShownRating { get; set; }` |
| `RewardsEarned` | `public MBBindingList<MPAfterBattleRewardItemVM> RewardsEarned { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OpenWith
`public void OpenWith(int oldExperience, int newExperience, List<string> badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** 执行 `close` 操作或流程。

## 使用示例

```csharp
var value = new MPAfterBattlePopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)