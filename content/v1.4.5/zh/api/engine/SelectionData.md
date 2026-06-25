---
title: "SelectionData"
description: "SelectionData 的自动生成类参考。"
---
# SelectionData

**Namespace:** TaleWorlds.Engine.Options
**Module:** TaleWorlds.Engine
**Type:** `public struct SelectionData`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine.Options/SelectionData.cs`

## 概述

`SelectionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SelectionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SelectionData
`public struct SelectionData(bool isLocalizationId, string data)`

**用途 / Purpose:** 获取或维护 「selection data」 数据。

```csharp
// 先通过子系统 API 拿到 SelectionData 实例
SelectionData selectionData = ...;
var result = selectionData.SelectionData(false, "example");
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
SelectionData entry = ...;
```

## 参见

- [本区域目录](../)