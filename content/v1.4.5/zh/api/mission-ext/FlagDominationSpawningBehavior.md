---
title: "FlagDominationSpawningBehavior"
description: "FlagDominationSpawningBehavior 的自动生成类参考。"
---
# FlagDominationSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagDominationSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs`

## 概述

`FlagDominationSpawningBehavior` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public override void Initialize(SpawnComponent spawnComponent)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 FlagDominationSpawningBehavior 实例
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.Initialize(spawnComponent);
```

### Clear
`public override void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 FlagDominationSpawningBehavior 实例
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.Clear();
```

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FlagDominationSpawningBehavior 实例
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.OnTick(0);
```

### RequestStartSpawnSession
`public override void RequestStartSpawnSession()`

**用途 / Purpose:** 处理与 「request start spawn session」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 FlagDominationSpawningBehavior 实例
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.RequestStartSpawnSession();
```

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**用途 / Purpose:** 允许当前对象启用或执行「early agent visuals despawning」。

```csharp
// 先通过子系统 API 拿到 FlagDominationSpawningBehavior 实例
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
var result = flagDominationSpawningBehavior.AllowEarlyAgentVisualsDespawning(lobbyPeer);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 「clear scene」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FlagDominationSpawningBehavior 实例
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.OnClearScene();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FlagDominationSpawningBehavior flagDominationSpawningBehavior = ...;
flagDominationSpawningBehavior.Initialize(spawnComponent);
```

## 参见

- [本区域目录](../)