---
title: "MissionMultiplayerGameModeDuelClient"
description: "MissionMultiplayerGameModeDuelClient 的自动生成类参考。"
---
# MissionMultiplayerGameModeDuelClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeDuelClient : MissionMultiplayerGameModeBaseClient`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs`

## 概述

`MissionMultiplayerGameModeDuelClient` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MyRepresentative` | `public DuelMissionRepresentative MyRepresentative { get; }` |

## 主要方法

### GetGoldAmount
`public override int GetGoldAmount()`

**用途 / Purpose:** 读取并返回当前对象中 gold amount 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeDuelClient 实例
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
var result = missionMultiplayerGameModeDuelClient.GetGoldAmount();
```

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**用途 / Purpose:** 在 gold amount changed for representative 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeDuelClient 实例
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeDuelClient 实例
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeDuelClient 实例
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.OnRemoveBehavior();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeDuelClient 实例
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### CanRequestCultureChange
`public override bool CanRequestCultureChange()`

**用途 / Purpose:** 检查当前对象是否满足 request culture change 的前置条件。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeDuelClient 实例
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
var result = missionMultiplayerGameModeDuelClient.CanRequestCultureChange();
```

### CanRequestTroopChange
`public override bool CanRequestTroopChange()`

**用途 / Purpose:** 检查当前对象是否满足 request troop change 的前置条件。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeDuelClient 实例
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
var result = missionMultiplayerGameModeDuelClient.CanRequestTroopChange();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMultiplayerGameModeDuelClient missionMultiplayerGameModeDuelClient = ...;
missionMultiplayerGameModeDuelClient.GetGoldAmount();
```

## 参见

- [本区域目录](../)