---
title: "MultiplayerAdminComponent"
description: "MultiplayerAdminComponent 的自动生成类参考。"
---
# MultiplayerAdminComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerAdminComponent.cs`

## 概述

`MultiplayerAdminComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerAdminComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnSelectPlayerToKickDelegate
`public delegate void OnSelectPlayerToKickDelegate(bool banPlayer)`

**用途 / Purpose:** 在 「select player to kick delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnSelectPlayerToKickDelegate(false);
```

### OnSetAdminMenuActiveStateDelegate
`public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu)`

**用途 / Purpose:** 在 「set admin menu active state delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnSetAdminMenuActiveStateDelegate(false);
```

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**用途 / Purpose:** 在 「mission state activated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnMissionStateActivated();
```

### ChangeAdminMenuActiveState
`public void ChangeAdminMenuActiveState(bool isActive)`

**用途 / Purpose:** 获取或更新 「change admin menu active state」 的状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.ChangeAdminMenuActiveState(false);
```

### KickPlayer
`public void KickPlayer(NetworkCommunicator peerToKick, bool banPlayer)`

**用途 / Purpose:** 处理与 「kick player」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.KickPlayer(peerToKick, false);
```

### GlobalMuteUnmutePlayer
`public void GlobalMuteUnmutePlayer(NetworkCommunicator peerToMute, bool unmute)`

**用途 / Purpose:** 处理与 「global mute unmute player」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.GlobalMuteUnmutePlayer(peerToMute, false);
```

### EndWarmup
`public void EndWarmup()`

**用途 / Purpose:** 处理与 「end warmup」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.EndWarmup();
```

### ChangeWelcomeMessage
`public void ChangeWelcomeMessage(string newWelcomeMessage)`

**用途 / Purpose:** 处理与 「change welcome message」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.ChangeWelcomeMessage("example");
```

### AdminAnnouncement
`public void AdminAnnouncement(string message, bool isBroadcast)`

**用途 / Purpose:** 处理与 「admin announcement」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.AdminAnnouncement("example", false);
```

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool newValue)`

**用途 / Purpose:** 处理与 「change class restriction」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.ChangeClassRestriction(classToChangeRestriction, false);
```

### AdminEndMission
`public void AdminEndMission()`

**用途 / Purpose:** 处理与 「admin end mission」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.AdminEndMission();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnBehaviorInitialize();
```

### MPAdminAnnouncement
`public static string MPAdminAnnouncement(List<string> strings)`

**用途 / Purpose:** 处理与 「mp admin announcement」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerAdminComponent.MPAdminAnnouncement(strings);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAdminComponent 实例
MultiplayerAdminComponent multiplayerAdminComponent = ...;
multiplayerAdminComponent.OnRemoveBehavior();
```

### MPAdminKickPlayer
`public static string MPAdminKickPlayer(List<string> strings)`

**用途 / Purpose:** 处理与 「mp admin kick player」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerAdminComponent.MPAdminKickPlayer(strings);
```

### MPAdminBanPlayer
`public static string MPAdminBanPlayer(List<string> strings)`

**用途 / Purpose:** 处理与 「mp admin ban player」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerAdminComponent.MPAdminBanPlayer(strings);
```

### MPAdminChangeWelcomeMessage
`public static string MPAdminChangeWelcomeMessage(List<string> strings)`

**用途 / Purpose:** 处理与 「mp admin change welcome message」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerAdminComponent.MPAdminChangeWelcomeMessage(strings);
```

### MPAdminChangeClassRestriction
`public static string MPAdminChangeClassRestriction(List<string> strings)`

**用途 / Purpose:** 处理与 「mp admin change class restriction」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerAdminComponent.MPAdminChangeClassRestriction(strings);
```

### MPHostRestartGame
`public static string MPHostRestartGame(List<string> strings)`

**用途 / Purpose:** 处理与 「mp host restart game」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerAdminComponent.MPHostRestartGame(strings);
```

### MPAdminChangeServerSlots
`public static string MPAdminChangeServerSlots(List<string> strings)`

**用途 / Purpose:** 处理与 「mp admin change server slots」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MultiplayerAdminComponent.MPAdminChangeServerSlots(strings);
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerAdminComponent>();
```

## 参见

- [本区域目录](../)