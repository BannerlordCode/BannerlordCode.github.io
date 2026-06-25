---
title: "TacticComponent"
description: "TacticComponent 的自动生成类参考。"
---
# TacticComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TacticComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/TacticComponent.cs`

## 概述

`TacticComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `TacticComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Team` | `public Team Team { get; set; }` |

## 主要方法

### TickOccasionally
`public virtual void TickOccasionally()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「occasionally」的状态。

```csharp
// 先通过子系统 API 拿到 TacticComponent 实例
TacticComponent tacticComponent = ...;
tacticComponent.TickOccasionally();
```

### ResetTactic
`public void ResetTactic()`

**用途 / Purpose:** 将 「tactic」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TacticComponent 实例
TacticComponent tacticComponent = ...;
tacticComponent.ResetTactic();
```

### SetDefaultBehaviorWeights
`public static void SetDefaultBehaviorWeights(Formation f)`

**用途 / Purpose:** 为 「default behavior weights」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
TacticComponent.SetDefaultBehaviorWeights(f);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TacticComponent instance = ...;
```

## 参见

- [本区域目录](../)