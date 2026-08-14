---
title: "ElementSaveData"
description: "ElementSaveData 的自动生成类参考。"
---
# ElementSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ElementSaveData : VariableSaveData`
**Base:** `VariableSaveData`
**File:** `TaleWorlds.SaveSystem/Save/ElementSaveData.cs`

## 概述

`ElementSaveData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ElementSaveData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ElementValue` | `public object ElementValue { get; }` |
| `ElementIndex` | `public int ElementIndex { get; }` |

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ElementSaveData entry = ...;
```

## 参见

- [本区域目录](../)