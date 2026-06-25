---
title: "UsableMissionObjectComponent"
description: "UsableMissionObjectComponent 的自动生成类参考。"
---
# UsableMissionObjectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObjectComponent`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## 概述

`UsableMissionObjectComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `UsableMissionObjectComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsOnTickRequired
`public virtual bool IsOnTickRequired()`

**用途 / Purpose:** 判断当前对象是否处于 「on tick required」 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMissionObjectComponent 实例
UsableMissionObjectComponent usableMissionObjectComponent = ...;
var result = usableMissionObjectComponent.IsOnTickRequired();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
UsableMissionObjectComponent instance = ...;
```

## 参见

- [本区域目录](../)