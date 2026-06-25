---
title: "MultiplayerPollProgressVM"
description: "MultiplayerPollProgressVM 的自动生成类参考。"
---
# MultiplayerPollProgressVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollProgressVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerPollProgressVM.cs`

## 概述

`MultiplayerPollProgressVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasOngoingPoll` | `public bool HasOngoingPoll { get; set; }` |
| `AreKeysEnabled` | `public bool AreKeysEnabled { get; set; }` |
| `VotesAccepted` | `public int VotesAccepted { get; set; }` |
| `VotesRejected` | `public int VotesRejected { get; set; }` |
| `PollInitiatorName` | `public string PollInitiatorName { get; set; }` |
| `PollDescription` | `public string PollDescription { get; set; }` |
| `TargetPlayer` | `public MPPlayerVM TargetPlayer { get; set; }` |
| `Keys` | `public MBBindingList<InputKeyItemVM> Keys { get; set; }` |

## 主要方法

### OnKickPollOpened
`public void OnKickPollOpened(MissionPeer initiatorPeer, MissionPeer targetPeer, bool isBanRequested)`

**用途 / Purpose:** **用途 / Purpose:** 在 kick poll opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollProgressVM 实例
MultiplayerPollProgressVM multiplayerPollProgressVM = ...;
multiplayerPollProgressVM.OnKickPollOpened(initiatorPeer, targetPeer, false);
```

### OnPollUpdated
`public void OnPollUpdated(int votesAccepted, int votesRejected)`

**用途 / Purpose:** **用途 / Purpose:** 在 poll updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollProgressVM 实例
MultiplayerPollProgressVM multiplayerPollProgressVM = ...;
multiplayerPollProgressVM.OnPollUpdated(0, 0);
```

### OnPollClosed
`public void OnPollClosed()`

**用途 / Purpose:** **用途 / Purpose:** 在 poll closed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollProgressVM 实例
MultiplayerPollProgressVM multiplayerPollProgressVM = ...;
multiplayerPollProgressVM.OnPollClosed();
```

### OnPollOptionPicked
`public void OnPollOptionPicked()`

**用途 / Purpose:** **用途 / Purpose:** 在 poll option picked 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollProgressVM 实例
MultiplayerPollProgressVM multiplayerPollProgressVM = ...;
multiplayerPollProgressVM.OnPollOptionPicked();
```

### AddKey
`public void AddKey(GameKey key)`

**用途 / Purpose:** **用途 / Purpose:** 将 key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollProgressVM 实例
MultiplayerPollProgressVM multiplayerPollProgressVM = ...;
multiplayerPollProgressVM.AddKey(key);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerPollProgressVM multiplayerPollProgressVM = ...;
multiplayerPollProgressVM.OnKickPollOpened(initiatorPeer, targetPeer, false);
```

## 参见

- [本区域目录](../)