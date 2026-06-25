---
title: "JoinCustomGameResultMessage"
description: "JoinCustomGameResultMessage 的自动生成类参考。"
---
# JoinCustomGameResultMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class JoinCustomGameResultMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/JoinCustomGameResultMessage.cs`

## 概述

`JoinCustomGameResultMessage` 位于 `Messages.FromLobbyServer.ToClient`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Messages.FromLobbyServer.ToClient` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `JoinGameData` | `public JoinGameData JoinGameData { get; }` |
| `Success` | `public bool Success { get; }` |
| `Response` | `public CustomGameJoinResponse Response { get; }` |
| `MatchId` | `public string MatchId { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |

## 主要方法

### CreateSuccess
`public static JoinCustomGameResultMessage CreateSuccess(JoinGameData joinGameData, string matchId, bool isAdmin)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 success 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
JoinCustomGameResultMessage.CreateSuccess(joinGameData, "example", false);
```

### CreateFailed
`public static JoinCustomGameResultMessage CreateFailed(CustomGameJoinResponse response)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 failed 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
JoinCustomGameResultMessage.CreateFailed(response);
```

## 使用示例

```csharp
JoinCustomGameResultMessage.CreateSuccess(joinGameData, "example", false);
```

## 参见

- [本区域目录](../)