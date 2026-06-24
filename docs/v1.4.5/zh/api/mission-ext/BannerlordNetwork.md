<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordNetwork`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerlordNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordNetwork`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordNetwork.cs`

## 概述

`BannerlordNetwork` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LobbyMissionType` | `public static LobbyMissionType LobbyMissionType { get; }` |

## 主要方法

### CreateServerPeer
`public static void CreateServerPeer()`

**用途 / Purpose:** 创建一个 `server peer` 实例或对象。

### StartMultiplayerLobbyMission
`public static void StartMultiplayerLobbyMission(LobbyMissionType lobbyMissionType)`

**用途 / Purpose:** 处理 `start multiplayer lobby mission` 相关逻辑。

### EndMultiplayerLobbyMission
`public static void EndMultiplayerLobbyMission()`

**用途 / Purpose:** 处理 `end multiplayer lobby mission` 相关逻辑。

## 使用示例

```csharp
BannerlordNetwork.CreateServerPeer();
```

## 参见

- [完整类目录](../catalog)