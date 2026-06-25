---
title: "CheckPoint"
description: "CheckPoint 的自动生成类参考。"
---
# CheckPoint

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class CheckPoint`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TownHorseRaceMissionController.cs`

## 概述

`CheckPoint` 位于 `SandBox.Tournaments.MissionLogics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Tournaments.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## 主要方法

### GetBestTargetPosition
`public Vec3 GetBestTargetPosition()`

**用途 / Purpose:** 读取并返回当前对象中 best target position 的结果。

```csharp
// 先通过子系统 API 拿到 CheckPoint 实例
CheckPoint checkPoint = ...;
var result = checkPoint.GetBestTargetPosition();
```

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**用途 / Purpose:** 将 to check list 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CheckPoint 实例
CheckPoint checkPoint = ...;
checkPoint.AddToCheckList(agent);
```

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 from check list。

```csharp
// 先通过子系统 API 拿到 CheckPoint 实例
CheckPoint checkPoint = ...;
checkPoint.RemoveFromCheckList(agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CheckPoint checkPoint = ...;
checkPoint.GetBestTargetPosition();
```

## 参见

- [本区域目录](../)