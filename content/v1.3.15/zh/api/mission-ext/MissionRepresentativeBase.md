---
title: "MissionRepresentativeBase"
description: "MissionRepresentativeBase 的自动生成类参考。"
---
# MissionRepresentativeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionRepresentativeBase : PeerComponent`
**Base:** `PeerComponent`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentativeBase.cs`

## 概述

`MissionRepresentativeBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ControlledAgent` | `public Agent ControlledAgent { get; }` |
| `Gold` | `public int Gold { get; }` |
| `MissionPeer` | `public MissionPeer MissionPeer { get; }` |

## 主要方法

### SetAgent
`public void SetAgent(Agent agent)`

**用途 / Purpose:** 为 「agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionRepresentativeBase 实例
MissionRepresentativeBase missionRepresentativeBase = ...;
missionRepresentativeBase.SetAgent(agent);
```

### OnAgentSpawned
`public virtual void OnAgentSpawned()`

**用途 / Purpose:** 在 「agent spawned」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionRepresentativeBase 实例
MissionRepresentativeBase missionRepresentativeBase = ...;
missionRepresentativeBase.OnAgentSpawned();
```

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionRepresentativeBase 实例
MissionRepresentativeBase missionRepresentativeBase = ...;
missionRepresentativeBase.Tick(0);
```

### UpdateGold
`public void UpdateGold(int gold)`

**用途 / Purpose:** 重新计算并更新 「gold」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionRepresentativeBase 实例
MissionRepresentativeBase missionRepresentativeBase = ...;
missionRepresentativeBase.UpdateGold(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionRepresentativeBase instance = ...;
```

## 参见

- [本区域目录](../)