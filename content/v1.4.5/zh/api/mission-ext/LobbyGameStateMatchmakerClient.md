---
title: "LobbyGameStateMatchmakerClient"
description: "LobbyGameStateMatchmakerClient 的自动生成类参考。"
---
# LobbyGameStateMatchmakerClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class LobbyGameStateMatchmakerClient : LobbyGameState`
**Base:** `LobbyGameState`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyGameStateMatchmakerClient.cs`

## 概述

`LobbyGameStateMatchmakerClient` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetStartingParameters
`public void SetStartingParameters(LobbyGameClientHandler lobbyGameClientHandler, int playerIndex, int sessionKey, string address, int assignedPort, string multiplayerGameType, string scene)`

**用途 / Purpose:** **用途 / Purpose:** 为 starting parameters 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LobbyGameStateMatchmakerClient 实例
LobbyGameStateMatchmakerClient lobbyGameStateMatchmakerClient = ...;
lobbyGameStateMatchmakerClient.SetStartingParameters(lobbyGameClientHandler, 0, 0, "example", 0, "example", "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LobbyGameStateMatchmakerClient lobbyGameStateMatchmakerClient = ...;
lobbyGameStateMatchmakerClient.SetStartingParameters(lobbyGameClientHandler, 0, 0, "example", 0, "example", "example");
```

## 参见

- [本区域目录](../)