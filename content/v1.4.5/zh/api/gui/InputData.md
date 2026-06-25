---
title: "InputData"
description: "InputData 的自动生成类参考。"
---
# InputData

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class InputData`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/InputData.cs`

## 概述

`InputData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `InputData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `KeyData` | `public bool KeyData { get; set; }` |
| `LeftMouse` | `public bool LeftMouse { get; set; }` |
| `RightMouse` | `public bool RightMouse { get; set; }` |
| `CursorX` | `public int CursorX { get; set; }` |
| `CursorY` | `public int CursorY { get; set; }` |
| `MouseMove` | `public bool MouseMove { get; set; }` |
| `MouseScrollDelta` | `public float MouseScrollDelta { get; set; }` |

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 InputData 实例
InputData inputData = ...;
inputData.Reset();
```

### FillFrom
`public void FillFrom(InputData inputData)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InputData 实例
InputData inputData = ...;
inputData.FillFrom(inputData);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
InputData entry = ...;
```

## 参见

- [本区域目录](../)