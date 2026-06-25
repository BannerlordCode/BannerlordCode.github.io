---
title: "SquareFormation"
description: "SquareFormation 的自动生成类参考。"
---
# SquareFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SquareFormation : LineFormation`
**Base:** `LineFormation`
**File:** `TaleWorlds.MountAndBlade/SquareFormation.cs`

## 概述

`SquareFormation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public override float Width { get; set; }` |
| `Depth` | `public override float Depth { get; }` |
| `MinimumWidth` | `public override float MinimumWidth { get; }` |
| `MaximumWidth` | `public override float MaximumWidth { get; }` |

## 主要方法

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 SquareFormation 实例
SquareFormation squareFormation = ...;
var result = squareFormation.Clone(formation);
```

### DeepCopyFrom
`public override void DeepCopyFrom(IFormationArrangement arrangement)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SquareFormation 实例
SquareFormation squareFormation = ...;
squareFormation.DeepCopyFrom(arrangement);
```

### FormFromBorderSideWidth
`public void FormFromBorderSideWidth(float borderSideWidth)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SquareFormation 实例
SquareFormation squareFormation = ...;
squareFormation.FormFromBorderSideWidth(0);
```

### FormFromBorderUnitCountPerSide
`public void FormFromBorderUnitCountPerSide(int unitCountPerSide)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SquareFormation 实例
SquareFormation squareFormation = ...;
squareFormation.FormFromBorderUnitCountPerSide(0);
```

### GetUnitsPerSideFromRankCount
`public int GetUnitsPerSideFromRankCount(int rankCount)`

**用途 / Purpose:** 读取并返回当前对象中 「units per side from rank count」 的结果。

```csharp
// 先通过子系统 API 拿到 SquareFormation 实例
SquareFormation squareFormation = ...;
var result = squareFormation.GetUnitsPerSideFromRankCount(0);
```

### FormFromRankCount
`public void FormFromRankCount(int rankCount)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SquareFormation 实例
SquareFormation squareFormation = ...;
squareFormation.FormFromRankCount(0);
```

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** 读取并返回当前对象中 「local direction of unit or default」 的结果。

```csharp
// 先通过子系统 API 拿到 SquareFormation 实例
SquareFormation squareFormation = ...;
var result = squareFormation.GetLocalDirectionOfUnitOrDefault(unit);
```

### TurnBackwards
`public override void TurnBackwards()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SquareFormation 实例
SquareFormation squareFormation = ...;
squareFormation.TurnBackwards();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SquareFormation squareFormation = ...;
squareFormation.Clone(formation);
```

## 参见

- [本区域目录](../)