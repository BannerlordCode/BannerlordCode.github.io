---
title: "MPAfterBattlePopupVM"
description: "MPAfterBattlePopupVM 的自动生成类参考。"
---
# MPAfterBattlePopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAfterBattlePopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle/MPAfterBattlePopupVM.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPAfterBattlePopupVM 实例
MPAfterBattlePopupVM mPAfterBattlePopupVM = ...;
mPAfterBattlePopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(int oldExperience, int newExperience, List<string> badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo)`

**用途 / Purpose:** **用途 / Purpose:** 打开with对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPAfterBattlePopupVM 实例
MPAfterBattlePopupVM mPAfterBattlePopupVM = ...;
mPAfterBattlePopupVM.OpenWith(0, 0, badgesEarned, 0, oldRankBarInfo, newRankBarInfo);
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPAfterBattlePopupVM 实例
MPAfterBattlePopupVM mPAfterBattlePopupVM = ...;
mPAfterBattlePopupVM.ExecuteClose();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPAfterBattlePopupVM mPAfterBattlePopupVM = ...;
mPAfterBattlePopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)