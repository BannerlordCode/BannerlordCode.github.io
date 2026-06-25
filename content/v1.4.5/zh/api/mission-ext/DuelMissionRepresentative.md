---
title: "DuelMissionRepresentative"
description: "DuelMissionRepresentative 的自动生成类参考。"
---
# DuelMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionRepresentatives/DuelMissionRepresentative.cs`

## 概述

`DuelMissionRepresentative` 位于 `TaleWorlds.MountAndBlade.MissionRepresentatives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.MissionRepresentatives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Bounty` | `public int Bounty { get; }` |
| `Score` | `public int Score { get; }` |
| `NumberOfWins` | `public int NumberOfWins { get; }` |

## 主要方法

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.Initialize();
```

### AddRemoveMessageHandlers
`public void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)`

**用途 / Purpose:** 将 remove message handlers 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.AddRemoveMessageHandlers(mode);
```

### OnInteraction
`public void OnInteraction()`

**用途 / Purpose:** 在 interaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnInteraction();
```

### DuelRequested
`public void DuelRequested(Agent requesterAgent, TroopType selectedAreaTroopType)`

**用途 / Purpose:** 调用 DuelRequested 对应的操作。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.DuelRequested(requesterAgent, selectedAreaTroopType);
```

### CheckHasRequestFromAndRemoveRequestIfNeeded
`public bool CheckHasRequestFromAndRemoveRequestIfNeeded(MissionPeer requestOwner)`

**用途 / Purpose:** 检查has request from and remove request if needed在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
var result = duelMissionRepresentative.CheckHasRequestFromAndRemoveRequestIfNeeded(requestOwner);
```

### OnDuelPreparation
`public void OnDuelPreparation(MissionPeer requesterPeer, MissionPeer requesteePeer)`

**用途 / Purpose:** 在 duel preparation 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnDuelPreparation(requesterPeer, requesteePeer);
```

### OnObjectFocused
`public void OnObjectFocused(IFocusable focusedObject)`

**用途 / Purpose:** 在 object focused 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnObjectFocused(focusedObject);
```

### OnObjectFocusLost
`public void OnObjectFocusLost()`

**用途 / Purpose:** 在 object focus lost 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnObjectFocusLost();
```

### OnAgentSpawned
`public override void OnAgentSpawned()`

**用途 / Purpose:** 在 agent spawned 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnAgentSpawned();
```

### ResetBountyAndNumberOfWins
`public void ResetBountyAndNumberOfWins()`

**用途 / Purpose:** 将 bounty and number of wins 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.ResetBountyAndNumberOfWins();
```

### OnDuelWon
`public void OnDuelWon(float gainedScore)`

**用途 / Purpose:** 在 duel won 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DuelMissionRepresentative 实例
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.OnDuelWon(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DuelMissionRepresentative duelMissionRepresentative = ...;
duelMissionRepresentative.Initialize();
```

## 参见

- [本区域目录](../)