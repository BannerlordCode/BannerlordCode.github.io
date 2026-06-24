<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerAdminComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerAdminComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerAdminComponent.cs`

## 概述

`MultiplayerAdminComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerAdminComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnSelectPlayerToKickDelegate
`public delegate void OnSelectPlayerToKickDelegate(bool banPlayer)`

**用途 / Purpose:** 当 `select player to kick delegate` 事件触发时调用此方法。

### OnSetAdminMenuActiveStateDelegate
`public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu)`

**用途 / Purpose:** 当 `set admin menu active state delegate` 事件触发时调用此方法。

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

**用途 / Purpose:** 当 `mission state activated` 事件触发时调用此方法。

### ChangeAdminMenuActiveState
`public void ChangeAdminMenuActiveState(bool isActive)`

**用途 / Purpose:** 处理 `change admin menu active state` 相关逻辑。

### KickPlayer
`public void KickPlayer(NetworkCommunicator peerToKick, bool banPlayer)`

**用途 / Purpose:** 处理 `kick player` 相关逻辑。

### GlobalMuteUnmutePlayer
`public void GlobalMuteUnmutePlayer(NetworkCommunicator peerToMute, bool unmute)`

**用途 / Purpose:** 处理 `global mute unmute player` 相关逻辑。

### EndWarmup
`public void EndWarmup()`

**用途 / Purpose:** 处理 `end warmup` 相关逻辑。

### ChangeWelcomeMessage
`public void ChangeWelcomeMessage(string newWelcomeMessage)`

**用途 / Purpose:** 处理 `change welcome message` 相关逻辑。

### AdminAnnouncement
`public void AdminAnnouncement(string message, bool isBroadcast)`

**用途 / Purpose:** 处理 `admin announcement` 相关逻辑。

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool newValue)`

**用途 / Purpose:** 处理 `change class restriction` 相关逻辑。

### AdminEndMission
`public void AdminEndMission()`

**用途 / Purpose:** 处理 `admin end mission` 相关逻辑。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### MPAdminAnnouncement
`public static string MPAdminAnnouncement(List<string> strings)`

**用途 / Purpose:** 处理 `m p admin announcement` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### MPAdminKickPlayer
`public static string MPAdminKickPlayer(List<string> strings)`

**用途 / Purpose:** 处理 `m p admin kick player` 相关逻辑。

### MPAdminBanPlayer
`public static string MPAdminBanPlayer(List<string> strings)`

**用途 / Purpose:** 处理 `m p admin ban player` 相关逻辑。

### MPAdminChangeWelcomeMessage
`public static string MPAdminChangeWelcomeMessage(List<string> strings)`

**用途 / Purpose:** 处理 `m p admin change welcome message` 相关逻辑。

### MPAdminChangeClassRestriction
`public static string MPAdminChangeClassRestriction(List<string> strings)`

**用途 / Purpose:** 处理 `m p admin change class restriction` 相关逻辑。

### MPHostRestartGame
`public static string MPHostRestartGame(List<string> strings)`

**用途 / Purpose:** 处理 `m p host restart game` 相关逻辑。

### MPAdminChangeServerSlots
`public static string MPAdminChangeServerSlots(List<string> strings)`

**用途 / Purpose:** 处理 `m p admin change server slots` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerAdminComponent>();
```

## 参见

- [完整类目录](../catalog)