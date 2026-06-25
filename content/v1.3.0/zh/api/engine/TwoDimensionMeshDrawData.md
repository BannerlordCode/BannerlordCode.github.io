---
title: "TwoDimensionMeshDrawData"
description: "TwoDimensionMeshDrawData 的自动生成类参考。"
---
# TwoDimensionMeshDrawData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct TwoDimensionMeshDrawData`
**Base:** 无
**File:** `TaleWorlds.Engine/TwoDimensionMeshDrawData.cs`

## 概述

`TwoDimensionMeshDrawData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TwoDimensionMeshDrawData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
TwoDimensionMeshDrawData entry = ...;
```

## 参见

- [本区域目录](../)