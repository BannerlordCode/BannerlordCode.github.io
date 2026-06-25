---
title: "MPAuthenticationVM"
description: "MPAuthenticationVM 的自动生成类参考。"
---
# MPAuthenticationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAuthenticationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication/MPAuthenticationVM.cs`

## 概述

`MPAuthenticationVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsLoginRequestActive` | `public bool IsLoginRequestActive { get; set; }` |
| `CanTryLogin` | `public bool CanTryLogin { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `MessageText` | `public string MessageText { get; set; }` |
| `ExitText` | `public string ExitText { get; set; }` |
| `LoginText` | `public string LoginText { get; set; }` |
| `CommunityGamesText` | `public string CommunityGamesText { get; set; }` |
| `AuthenticationDebug` | `public MPAuthenticationDebugVM AuthenticationDebug { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPAuthenticationVM 实例
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPAuthenticationVM 实例
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.OnFinalize();
```

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPAuthenticationVM 实例
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.OnTick(0);
```

### ExecuteExit
`public void ExecuteExit()`

**用途 / Purpose:** **用途 / Purpose:** 执行 exit 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPAuthenticationVM 实例
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.ExecuteExit();
```

### ExecuteLogin
`public async void ExecuteLogin()`

**用途 / Purpose:** **用途 / Purpose:** 执行 login 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPAuthenticationVM 实例
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.ExecuteLogin();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPAuthenticationVM 实例
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 cancel input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPAuthenticationVM 实例
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.SetCancelInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPAuthenticationVM mPAuthenticationVM = ...;
mPAuthenticationVM.RefreshValues();
```

## 参见

- [本区域目录](../)