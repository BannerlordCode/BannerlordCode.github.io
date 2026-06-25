---
title: "PermaMuteList"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PermaMuteList`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PermaMuteList

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class PermaMuteList`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PermaMuteList.cs`

## 概述

`PermaMuteList` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasMutedPlayersLoaded` | `public static bool HasMutedPlayersLoaded { get; }` |

## 主要方法

### SetPermanentMuteAvailableCallback
`public static void SetPermanentMuteAvailableCallback(Func<bool> getPermanentMuteAvailable)`

**用途 / Purpose:** 设置 `permanent mute available callback` 的值或状态。

### LoadMutedPlayers
`public static async Task LoadMutedPlayers(PlayerId currentPlayerId)`

**用途 / Purpose:** 加载 `muted players` 数据。

### SaveMutedPlayers
`public static async void SaveMutedPlayers()`

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
PermaMuteList.SetPermanentMuteAvailableCallback(getPermanentMuteAvailable);
```

## 参见

- [完整类目录](../catalog)