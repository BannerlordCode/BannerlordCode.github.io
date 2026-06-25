---
title: "PartyPlayerInLobbyClient"
description: "PartyPlayerInLobbyClient 的自动生成类参考。"
---
# PartyPlayerInLobbyClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyPlayerInLobbyClient`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PartyPlayerInLobbyClient.cs`

## 概述

`PartyPlayerInLobbyClient` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `Name` | `public string Name { get; }` |
| `WaitingInvitation` | `public bool WaitingInvitation { get; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; }` |

## 主要方法

### SetAtParty
`public void SetAtParty()`

**用途 / Purpose:** 为 at party 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyPlayerInLobbyClient 实例
PartyPlayerInLobbyClient partyPlayerInLobbyClient = ...;
partyPlayerInLobbyClient.SetAtParty();
```

### SetLeader
`public void SetLeader()`

**用途 / Purpose:** 为 leader 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyPlayerInLobbyClient 实例
PartyPlayerInLobbyClient partyPlayerInLobbyClient = ...;
partyPlayerInLobbyClient.SetLeader();
```

### SetMember
`public void SetMember()`

**用途 / Purpose:** 为 member 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyPlayerInLobbyClient 实例
PartyPlayerInLobbyClient partyPlayerInLobbyClient = ...;
partyPlayerInLobbyClient.SetMember();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyPlayerInLobbyClient partyPlayerInLobbyClient = ...;
partyPlayerInLobbyClient.SetAtParty();
```

## 参见

- [本区域目录](../)