---
title: "MPLobbyRankProgressInformationVM"
description: "MPLobbyRankProgressInformationVM 的自动生成类参考。"
---
# MPLobbyRankProgressInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRankProgressInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRankProgressInformationVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankProgressInformationVM 实例
MPLobbyRankProgressInformationVM mPLobbyRankProgressInformationVM = ...;
mPLobbyRankProgressInformationVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankProgressInformationVM 实例
MPLobbyRankProgressInformationVM mPLobbyRankProgressInformationVM = ...;
mPLobbyRankProgressInformationVM.OnFinalize();
```

### OpenWith
`public void OpenWith(MPLobbyPlayerBaseVM player)`

**用途 / Purpose:** 打开「with」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankProgressInformationVM 实例
MPLobbyRankProgressInformationVM mPLobbyRankProgressInformationVM = ...;
mPLobbyRankProgressInformationVM.OpenWith(player);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 「close popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyRankProgressInformationVM 实例
MPLobbyRankProgressInformationVM mPLobbyRankProgressInformationVM = ...;
mPLobbyRankProgressInformationVM.ExecuteClosePopup();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyRankProgressInformationVM mPLobbyRankProgressInformationVM = ...;
mPLobbyRankProgressInformationVM.RefreshValues();
```

## 参见

- [本区域目录](../)