<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerGlobalMutedPlayersManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGlobalMutedPlayersManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGlobalMutedPlayersManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs`

## 概述

`MultiplayerGlobalMutedPlayersManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MultiplayerGlobalMutedPlayersManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MutePlayer
`public static void MutePlayer(PlayerId playerId)`

**用途 / Purpose:** 处理 `mute player` 相关逻辑。

### UnmutePlayer
`public static void UnmutePlayer(PlayerId playerId)`

**用途 / Purpose:** 处理 `unmute player` 相关逻辑。

### IsUserMuted
`public static bool IsUserMuted(PlayerId playerId)`

**用途 / Purpose:** 处理 `is user muted` 相关逻辑。

### ClearMutedPlayers
`public static void ClearMutedPlayers()`

**用途 / Purpose:** 处理 `clear muted players` 相关逻辑。

## 使用示例

```csharp
var manager = MultiplayerGlobalMutedPlayersManager.Current;
```

## 参见

- [完整类目录](../catalog)