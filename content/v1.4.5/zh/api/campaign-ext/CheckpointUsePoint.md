---
title: "CheckpointUsePoint"
description: "CheckpointUsePoint 的自动生成类参考。"
---
# CheckpointUsePoint

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class CheckpointUsePoint : UsableMachine`
**Base:** `UsableMachine`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.Usables/CheckpointUsePoint.cs`

## 概述

`CheckpointUsePoint` 位于 `SandBox.Objects.Usables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.Usables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpawnPoint` | `public GameEntity SpawnPoint { get; }` |

## 主要方法

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 在 「mission start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CheckpointUsePoint 实例
CheckpointUsePoint checkpointUsePoint = ...;
checkpointUsePoint.AfterMissionStart();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 读取并返回当前对象中 「action text for standing point」 的结果。

```csharp
// 先通过子系统 API 拿到 CheckpointUsePoint 实例
CheckpointUsePoint checkpointUsePoint = ...;
var result = checkpointUsePoint.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 CheckpointUsePoint 实例
CheckpointUsePoint checkpointUsePoint = ...;
var result = checkpointUsePoint.GetDescriptionText(gameEntity);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CheckpointUsePoint checkpointUsePoint = ...;
checkpointUsePoint.AfterMissionStart();
```

## 参见

- [本区域目录](../)