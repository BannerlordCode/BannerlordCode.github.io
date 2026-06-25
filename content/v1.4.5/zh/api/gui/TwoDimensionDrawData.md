---
title: "TwoDimensionDrawData"
description: "TwoDimensionDrawData 的自动生成类参考。"
---
# TwoDimensionDrawData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `internal struct TwoDimensionDrawData`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TwoDimensionDrawData.cs`

## 概述

`TwoDimensionDrawData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TwoDimensionDrawData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DrawTo
`public void DrawTo(TwoDimensionContext twoDimensionContext, int layer)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawData 实例
TwoDimensionDrawData twoDimensionDrawData = ...;
twoDimensionDrawData.DrawTo(twoDimensionContext, 0);
```

### UpdateVisualRect
`public void UpdateVisualRect()`

**用途 / Purpose:** 重新计算并更新 「visual rect」 的最新表示。

```csharp
// 先通过子系统 API 拿到 TwoDimensionDrawData 实例
TwoDimensionDrawData twoDimensionDrawData = ...;
twoDimensionDrawData.UpdateVisualRect();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
TwoDimensionDrawData entry = ...;
```

## 参见

- [本区域目录](../)