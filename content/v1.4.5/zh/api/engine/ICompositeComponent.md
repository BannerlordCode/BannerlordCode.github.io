---
title: "ICompositeComponent"
description: "ICompositeComponent 的自动生成类参考。"
---
# ICompositeComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface ICompositeComponent`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ICompositeComponent.cs`

## 概述

`ICompositeComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ICompositeComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IICompositeComponent service = ...;
```

## 参见

- [本区域目录](../)