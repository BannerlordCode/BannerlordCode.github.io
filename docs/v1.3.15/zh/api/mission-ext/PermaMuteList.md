<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PermaMuteList`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PermaMuteList

**命名空间:** TaleWorlds.MountAndBlade.Diamond
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class PermaMuteList`
**领域:** mission-ext

## 概述

`PermaMuteList` 位于 `TaleWorlds.MountAndBlade.Diamond`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasMutedPlayersLoaded` | `public static bool HasMutedPlayersLoaded { get; }` |
| `MutedPlayers` | `public static IReadOnlyList<ValueTuple<string, string>> MutedPlayers { get; }` |

## 主要方法

### SetPermanentMuteAvailableCallback
`public static void SetPermanentMuteAvailableCallback(Func<bool> getPermanentMuteAvailable)`

**用途 / Purpose:** 设置 `permanent mute available callback` 的值或状态。

### LoadMutedPlayers
`public static Task LoadMutedPlayers(PlayerId currentPlayerId)`

**用途 / Purpose:** 加载 `muted players` 数据。

### SaveMutedPlayers
`public static void SaveMutedPlayers()`

**用途 / Purpose:** 保存 `muted players` 数据。

### IsPlayerMuted
`public static bool IsPlayerMuted(PlayerId player)`

**用途 / Purpose:** 处理 `is player muted` 相关逻辑。

### MutePlayer
`public static void MutePlayer(PlayerId player, string name)`

**用途 / Purpose:** 处理 `mute player` 相关逻辑。

### RemoveMutedPlayer
`public static void RemoveMutedPlayer(PlayerId player)`

**用途 / Purpose:** 从当前集合/状态中移除 `muted player`。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
PermaMuteList.SetPermanentMuteAvailableCallback(getPermanentMuteAvailable);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
