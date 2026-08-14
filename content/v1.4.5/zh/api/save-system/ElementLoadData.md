---
title: "ElementLoadData"
description: "ElementLoadData 的自动生成类参考。"
---
# ElementLoadData

**Namespace:** TaleWorlds.SaveSystem.Load
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ElementLoadData : VariableLoadData`
**Base:** `VariableLoadData`
**File:** `TaleWorlds.SaveSystem/Load/ElementLoadData.cs`

## 概述

`ElementLoadData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ElementLoadData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ContainerLoadData` | `public ContainerLoadData ContainerLoadData { get; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ElementLoadData entry = ...;
```

## 参见

- [本区域目录](../)