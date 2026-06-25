---
title: "KillDeathCountChange"
description: "KillDeathCountChange 的自动生成类参考。"
---
# KillDeathCountChange

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class KillDeathCountChange : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/KillDeathCountChange.cs`

## 概述

`KillDeathCountChange` 位于 `NetworkMessages.FromServer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `NetworkMessages.FromServer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VictimPeer` | `public NetworkCommunicator VictimPeer { get; }` |
| `AttackerPeer` | `public NetworkCommunicator AttackerPeer { get; }` |
| `KillCount` | `public int KillCount { get; }` |
| `AssistCount` | `public int AssistCount { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `Score` | `public int Score { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
KillDeathCountChange instance = ...;
```

## 参见

- [本区域目录](../)