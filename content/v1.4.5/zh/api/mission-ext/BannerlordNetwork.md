---
title: "BannerlordNetwork"
description: "BannerlordNetwork 的自动生成类参考。"
---
# BannerlordNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordNetwork`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordNetwork.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 server peer 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BannerlordNetwork.CreateServerPeer();
```

### StartMultiplayerLobbyMission
`public static void StartMultiplayerLobbyMission(LobbyMissionType lobbyMissionType)`

**用途 / Purpose:** **用途 / Purpose:** 启动multiplayer lobby mission流程或状态机。

```csharp
// 静态调用，不需要实例
BannerlordNetwork.StartMultiplayerLobbyMission(lobbyMissionType);
```

### EndMultiplayerLobbyMission
`public static void EndMultiplayerLobbyMission()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EndMultiplayerLobbyMission 对应的操作。

```csharp
// 静态调用，不需要实例
BannerlordNetwork.EndMultiplayerLobbyMission();
```

## 使用示例

```csharp
BannerlordNetwork.CreateServerPeer();
```

## 参见

- [本区域目录](../)