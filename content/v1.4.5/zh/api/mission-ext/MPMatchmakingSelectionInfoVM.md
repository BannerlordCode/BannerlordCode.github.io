---
title: "MPMatchmakingSelectionInfoVM"
description: "MPMatchmakingSelectionInfoVM 的自动生成类参考。"
---
# MPMatchmakingSelectionInfoVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingSelectionInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame/MPMatchmakingSelectionInfoVM.cs`

## 概述

`MPMatchmakingSelectionInfoVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.OfficialGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ExtraInfos` | `public MBBindingList<StringPairItemVM> ExtraInfos { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingSelectionInfoVM 实例
MPMatchmakingSelectionInfoVM mPMatchmakingSelectionInfoVM = ...;
mPMatchmakingSelectionInfoVM.RefreshValues();
```

### UpdateForGameType
`public void UpdateForGameType(string gameTypeStr)`

**用途 / Purpose:** 重新计算并更新 for game type 的最新表示。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingSelectionInfoVM 实例
MPMatchmakingSelectionInfoVM mPMatchmakingSelectionInfoVM = ...;
mPMatchmakingSelectionInfoVM.UpdateForGameType("example");
```

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**用途 / Purpose:** 为 enabled 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingSelectionInfoVM 实例
MPMatchmakingSelectionInfoVM mPMatchmakingSelectionInfoVM = ...;
mPMatchmakingSelectionInfoVM.SetEnabled(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPMatchmakingSelectionInfoVM mPMatchmakingSelectionInfoVM = ...;
mPMatchmakingSelectionInfoVM.RefreshValues();
```

## 参见

- [本区域目录](../)