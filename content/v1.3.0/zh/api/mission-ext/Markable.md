---
title: "Markable"
description: "Markable 的自动生成类参考。"
---
# Markable

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Markable : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Markable.cs`

## 概述

`Markable` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 Markable 实例
Markable markable = ...;
var result = markable.GetTickRequirement();
```

### DisableMarkerActivation
`public void DisableMarkerActivation()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Markable 实例
Markable markable = ...;
markable.DisableMarkerActivation();
```

### ActivateMarkerFor
`public void ActivateMarkerFor(float activeSeconds, float passiveSeconds)`

**用途 / Purpose:** 激活「marker for」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 Markable 实例
Markable markable = ...;
markable.ActivateMarkerFor(0, 0);
```

### ResetPassiveDurationTimer
`public void ResetPassiveDurationTimer()`

**用途 / Purpose:** 将 「passive duration timer」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Markable 实例
Markable markable = ...;
markable.ResetPassiveDurationTimer();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Markable markable = ...;
markable.GetTickRequirement();
```

## 参见

- [本区域目录](../)