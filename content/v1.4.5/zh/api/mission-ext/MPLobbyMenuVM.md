---
title: "MPLobbyMenuVM"
description: "MPLobbyMenuVM 的自动生成类参考。"
---
# MPLobbyMenuVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyMenuVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyMenuVM.cs`

## 概述

`MPLobbyMenuVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasProfileNotification` | `public bool HasProfileNotification { get; set; }` |
| `IsClanSupported` | `public bool IsClanSupported { get; set; }` |
| `IsMatchmakingSupported` | `public bool IsMatchmakingSupported { get; set; }` |
| `PageIndex` | `public int PageIndex { get; set; }` |
| `HomeText` | `public string HomeText { get; set; }` |
| `MatchmakingText` | `public string MatchmakingText { get; set; }` |
| `ProfileText` | `public string ProfileText { get; set; }` |
| `ArmoryText` | `public string ArmoryText { get; set; }` |
| `PreviousPageInputKey` | `public InputKeyItemVM PreviousPageInputKey { get; set; }` |
| `NextPageInputKey` | `public InputKeyItemVM NextPageInputKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyMenuVM 实例
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyMenuVM 实例
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.OnFinalize();
```

### SetPage
`public void SetPage(MPLobbyVM.LobbyPage lobbyPage)`

**用途 / Purpose:** 为 page 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPLobbyMenuVM 实例
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.SetPage(lobbyPage);
```

### ExecuteExit
`public async void ExecuteExit()`

**用途 / Purpose:** 执行 exit 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPLobbyMenuVM 实例
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.ExecuteExit();
```

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**用途 / Purpose:** 在 supported features refreshed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyMenuVM 实例
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.OnSupportedFeaturesRefreshed(supportedFeatures);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyMenuVM mPLobbyMenuVM = ...;
mPLobbyMenuVM.RefreshValues();
```

## 参见

- [本区域目录](../)