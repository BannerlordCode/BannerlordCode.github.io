---
title: "JoinPremadeGameRequestMessage"
description: "JoinPremadeGameRequestMessage 的自动生成类参考。"
---
# JoinPremadeGameRequestMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class JoinPremadeGameRequestMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/JoinPremadeGameRequestMessage.cs`

## 概述

`JoinPremadeGameRequestMessage` 位于 `Messages.FromLobbyServer.ToClient`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Messages.FromLobbyServer.ToClient` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ChallengerPartyId` | `public Guid ChallengerPartyId { get; }` |
| `ClanName` | `public string ClanName { get; }` |
| `Sigil` | `public string Sigil { get; }` |
| `ChallengerPlayers` | `public PlayerId ChallengerPlayers { get; }` |
| `ChallengerPartyLeaderId` | `public PlayerId ChallengerPartyLeaderId { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |

## 主要方法

### CreateClanGameRequest
`public static JoinPremadeGameRequestMessage CreateClanGameRequest(Guid challengerPartyId, string clanName, string sigil, PlayerId challengerPlayers)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 clan game request 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
JoinPremadeGameRequestMessage.CreateClanGameRequest(challengerPartyId, "example", "example", challengerPlayers);
```

### CreatePracticeGameRequest
`public static JoinPremadeGameRequestMessage CreatePracticeGameRequest(Guid challengerPartyId, PlayerId leaderId, PlayerId challengerPlayers)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 practice game request 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
JoinPremadeGameRequestMessage.CreatePracticeGameRequest(challengerPartyId, leaderId, challengerPlayers);
```

## 使用示例

```csharp
JoinPremadeGameRequestMessage.CreateClanGameRequest(challengerPartyId, "example", "example", challengerPlayers);
```

## 参见

- [本区域目录](../)