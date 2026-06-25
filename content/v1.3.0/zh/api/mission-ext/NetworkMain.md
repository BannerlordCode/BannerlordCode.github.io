---
title: "NetworkMain"
description: "NetworkMain 的自动生成类参考。"
---
# NetworkMain

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class NetworkMain`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/NetworkMain.cs`

## 概述

`NetworkMain` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameClient` | `public static LobbyClient GameClient { get; }` |
| `CommunityClient` | `public static CommunityClient CommunityClient { get; }` |
| `CustomBattleServer` | `public static CustomBattleServer CustomBattleServer { get; }` |

## 主要方法

### SetPeers
`public static void SetPeers(LobbyClient gameClient, CommunityClient communityClient, CustomBattleServer customBattleServer)`

**用途 / Purpose:** **用途 / Purpose:** 为 peers 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
NetworkMain.SetPeers(gameClient, communityClient, customBattleServer);
```

## 使用示例

```csharp
NetworkMain.SetPeers(gameClient, communityClient, customBattleServer);
```

## 参见

- [本区域目录](../)