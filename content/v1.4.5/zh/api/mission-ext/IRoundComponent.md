---
title: "IRoundComponent"
description: "IRoundComponent 的自动生成类参考。"
---
# IRoundComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IRoundComponent : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IRoundComponent.cs`

## 概述

`IRoundComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `IRoundComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIRoundComponent service = ...;
```

## 参见

- [本区域目录](../)