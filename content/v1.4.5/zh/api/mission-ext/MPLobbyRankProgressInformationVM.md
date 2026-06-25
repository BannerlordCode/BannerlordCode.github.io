---
title: "MPLobbyRankProgressInformationVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyRankProgressInformationVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyRankProgressInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRankProgressInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRankProgressInformationVM.cs`

## 概述

`MPLobbyRankProgressInformationVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsAtFinalRank` | `public bool IsAtFinalRank { get; set; }` |
| `IsEvaluating` | `public bool IsEvaluating { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClickToCloseText` | `public string ClickToCloseText { get; set; }` |
| `CurrentRankTitleText` | `public string CurrentRankTitleText { get; set; }` |
| `RatingRemainingTitleText` | `public string RatingRemainingTitleText { get; set; }` |
| `CurrentRankID` | `public string CurrentRankID { get; set; }` |
| `PreviousRankID` | `public string PreviousRankID { get; set; }` |
| `NextRankID` | `public string NextRankID { get; set; }` |
| `CurrentRating` | `public int CurrentRating { get; set; }` |
| `NextRankRating` | `public int NextRankRating { get; set; }` |
| `RatingRatio` | `public int RatingRatio { get; set; }` |
| `Player` | `public MPLobbyPlayerBaseVM Player { get; set; }` |
| `AllRanks` | `public MBBindingList<StringPairItemVM> AllRanks { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OpenWith
`public void OpenWith(MPLobbyPlayerBaseVM player)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

## 使用示例

```csharp
var value = new MPLobbyRankProgressInformationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)