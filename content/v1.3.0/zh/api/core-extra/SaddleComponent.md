---
title: "SaddleComponent"
description: "SaddleComponent 的自动生成类参考。"
---
# SaddleComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SaddleComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/SaddleComponent.cs`

## 概述

`SaddleComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `SaddleComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 copy 的结果。

```csharp
// 先通过子系统 API 拿到 SaddleComponent 实例
SaddleComponent saddleComponent = ...;
var result = saddleComponent.GetCopy();
```

## 使用示例

```csharp
var component = agent.GetComponent<SaddleComponent>();
```

## 参见

- [本区域目录](../)