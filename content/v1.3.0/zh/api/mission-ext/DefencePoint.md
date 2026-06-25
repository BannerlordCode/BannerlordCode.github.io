---
title: "DefencePoint"
description: "DefencePoint 的自动生成类参考。"
---
# DefencePoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefencePoint : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/DefencePoint.cs`

## 概述

`DefencePoint` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Defenders` | `public IEnumerable<Agent> Defenders { get; }` |

## 主要方法

### AddDefender
`public void AddDefender(Agent defender)`

**用途 / Purpose:** 将 「defender」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DefencePoint 实例
DefencePoint defencePoint = ...;
defencePoint.AddDefender(defender);
```

### RemoveDefender
`public bool RemoveDefender(Agent defender)`

**用途 / Purpose:** 从当前容器或状态中移除 「defender」。

```csharp
// 先通过子系统 API 拿到 DefencePoint 实例
DefencePoint defencePoint = ...;
var result = defencePoint.RemoveDefender(defender);
```

### PurgeInactiveDefenders
`public void PurgeInactiveDefenders()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefencePoint 实例
DefencePoint defencePoint = ...;
defencePoint.PurgeInactiveDefenders();
```

### GetVacantPosition
`public MatrixFrame GetVacantPosition(Agent a)`

**用途 / Purpose:** 读取并返回当前对象中 「vacant position」 的结果。

```csharp
// 先通过子系统 API 拿到 DefencePoint 实例
DefencePoint defencePoint = ...;
var result = defencePoint.GetVacantPosition(a);
```

### CountOccupiedDefenderPositions
`public int CountOccupiedDefenderPositions()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefencePoint 实例
DefencePoint defencePoint = ...;
var result = defencePoint.CountOccupiedDefenderPositions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefencePoint defencePoint = ...;
defencePoint.AddDefender(defender);
```

## 参见

- [本区域目录](../)