---
title: "InputData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputData

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class InputData`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/InputData.cs`

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

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### FillFrom
`public void FillFrom(InputData inputData)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

## 使用示例

```csharp
var value = new InputData();
```

## 参见

- [完整类目录](../catalog)