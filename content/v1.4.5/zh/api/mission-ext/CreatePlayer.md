---
title: "CreatePlayer"
description: "CreatePlayer 的自动生成类参考。"
---
# CreatePlayer

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class CreatePlayer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network.Messages/CreatePlayer.cs`

## 概述

`CreatePlayer` 位于 `TaleWorlds.MountAndBlade.Network.Messages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Messages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerIndex` | `public int PlayerIndex { get; }` |
| `PlayerName` | `public string PlayerName { get; }` |
| `DisconnectedPeerIndex` | `public int DisconnectedPeerIndex { get; }` |
| `IsNonExistingDisconnectedPeer` | `public bool IsNonExistingDisconnectedPeer { get; }` |
| `IsReceiverPeer` | `public bool IsReceiverPeer { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
CreatePlayer instance = ...;
```

## 参见

- [本区域目录](../)