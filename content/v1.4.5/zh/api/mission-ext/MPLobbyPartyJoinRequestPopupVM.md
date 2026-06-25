---
title: "MPLobbyPartyJoinRequestPopupVM"
description: "MPLobbyPartyJoinRequestPopupVM 的自动生成类参考。"
---
# MPLobbyPartyJoinRequestPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyPartyJoinRequestPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends/MPLobbyPartyJoinRequestPopupVM.cs`

## 概述

`MPLobbyPartyJoinRequestPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Friends` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AcceptJoinRequestText` | `public string AcceptJoinRequestText { get; set; }` |
| `JoiningPlayerText` | `public string JoiningPlayerText { get; set; }` |
| `JoiningPlayer` | `public MPLobbyPlayerBaseVM JoiningPlayer { get; set; }` |
| `RemainingAnswerDuration` | `public float RemainingAnswerDuration { get; set; }` |
| `MaxAnswerDuration` | `public float MaxAnswerDuration { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyPartyJoinRequestPopupVM 实例
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(PlayerId joiningPlayer, PlayerId viaPlayerId, string viaPlayerName)`

**用途 / Purpose:** 打开with对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyPartyJoinRequestPopupVM 实例
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.OpenWith(joiningPlayer, viaPlayerId, "example");
```

### OpenWithNewParty
`public void OpenWithNewParty(PlayerId joiningPlayer)`

**用途 / Purpose:** 打开with new party对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyPartyJoinRequestPopupVM 实例
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.OpenWithNewParty(joiningPlayer);
```

### Close
`public void Close()`

**用途 / Purpose:** 关闭当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 MPLobbyPartyJoinRequestPopupVM 实例
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.Close();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyPartyJoinRequestPopupVM 实例
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.OnTick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyPartyJoinRequestPopupVM mPLobbyPartyJoinRequestPopupVM = ...;
mPLobbyPartyJoinRequestPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)