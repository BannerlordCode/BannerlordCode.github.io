---
title: "WarmupSpawningBehavior"
description: "WarmupSpawningBehavior 的自动生成类参考。"
---
# WarmupSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WarmupSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WarmupSpawningBehavior.cs`

## 概述

`WarmupSpawningBehavior` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WarmupSpawningBehavior 实例
WarmupSpawningBehavior warmupSpawningBehavior = ...;
warmupSpawningBehavior.OnTick(0);
```

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**用途 / Purpose:** 允许当前对象启用或执行「early agent visuals despawning」。

```csharp
// 先通过子系统 API 拿到 WarmupSpawningBehavior 实例
WarmupSpawningBehavior warmupSpawningBehavior = ...;
var result = warmupSpawningBehavior.AllowEarlyAgentVisualsDespawning(lobbyPeer);
```

### GetMaximumReSpawnPeriodForPeer
`public override int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**用途 / Purpose:** 读取并返回当前对象中 「maximum re spawn period for peer」 的结果。

```csharp
// 先通过子系统 API 拿到 WarmupSpawningBehavior 实例
WarmupSpawningBehavior warmupSpawningBehavior = ...;
var result = warmupSpawningBehavior.GetMaximumReSpawnPeriodForPeer(peer);
```

### Clear
`public override void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 WarmupSpawningBehavior 实例
WarmupSpawningBehavior warmupSpawningBehavior = ...;
warmupSpawningBehavior.Clear();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WarmupSpawningBehavior warmupSpawningBehavior = ...;
warmupSpawningBehavior.OnTick(0);
```

## 参见

- [本区域目录](../)