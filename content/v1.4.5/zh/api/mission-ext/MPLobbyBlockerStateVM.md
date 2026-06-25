---
title: "MPLobbyBlockerStateVM"
description: "MPLobbyBlockerStateVM 的自动生成类参考。"
---
# MPLobbyBlockerStateVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBlockerStateVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyBlockerStateVM.cs`

## 概述

`MPLobbyBlockerStateVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Description` | `public string Description { get; set; }` |

## 主要方法

### OnLobbyStateIsBlocker
`public void OnLobbyStateIsBlocker(TextObject description)`

**用途 / Purpose:** 在 「lobby state is blocker」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyBlockerStateVM 实例
MPLobbyBlockerStateVM mPLobbyBlockerStateVM = ...;
mPLobbyBlockerStateVM.OnLobbyStateIsBlocker(description);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPLobbyBlockerStateVM 实例
MPLobbyBlockerStateVM mPLobbyBlockerStateVM = ...;
mPLobbyBlockerStateVM.RefreshValues();
```

### OnLobbyStateNotBlocker
`public void OnLobbyStateNotBlocker()`

**用途 / Purpose:** 在 「lobby state not blocker」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPLobbyBlockerStateVM 实例
MPLobbyBlockerStateVM mPLobbyBlockerStateVM = ...;
mPLobbyBlockerStateVM.OnLobbyStateNotBlocker();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPLobbyBlockerStateVM mPLobbyBlockerStateVM = ...;
mPLobbyBlockerStateVM.OnLobbyStateIsBlocker(description);
```

## 参见

- [本区域目录](../)