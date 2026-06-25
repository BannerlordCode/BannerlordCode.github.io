---
title: "PlayersAddedToPartyMessage"
description: "PlayersAddedToPartyMessage 的自动生成类参考。"
---
# PlayersAddedToPartyMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class PlayersAddedToPartyMessage : Message`
**Base:** `Message`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromLobbyServer.ToClient/PlayersAddedToPartyMessage.cs`

## 概述

`PlayersAddedToPartyMessage` 位于 `Messages.FromLobbyServer.ToClient`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Messages.FromLobbyServer.ToClient` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddPlayer
`public void AddPlayer(PlayerId playerId, string playerName, bool isPartyLeader)`

**用途 / Purpose:** 将 player 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PlayersAddedToPartyMessage 实例
PlayersAddedToPartyMessage playersAddedToPartyMessage = ...;
playersAddedToPartyMessage.AddPlayer(playerId, "example", false);
```

### AddInvitedPlayer
`public void AddInvitedPlayer(PlayerId playerId, string playerName)`

**用途 / Purpose:** 将 invited player 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PlayersAddedToPartyMessage 实例
PlayersAddedToPartyMessage playersAddedToPartyMessage = ...;
playersAddedToPartyMessage.AddInvitedPlayer(playerId, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayersAddedToPartyMessage playersAddedToPartyMessage = ...;
playersAddedToPartyMessage.AddPlayer(playerId, "example", false);
```

## 参见

- [本区域目录](../)