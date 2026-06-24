<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerlordNetwork`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordNetwork

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class BannerlordNetwork`
**领域:** mission-ext

## 概述

`BannerlordNetwork` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
BannerlordNetwork.CreateServerPeer();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
