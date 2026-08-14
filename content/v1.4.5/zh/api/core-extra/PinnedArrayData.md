---
title: "PinnedArrayData"
description: "PinnedArrayData 的自动生成类参考。"
---
# PinnedArrayData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PinnedArrayData<T>`
**Base:** 无
**File:** `TaleWorlds.Library/PinnedArrayData.cs`

## 概述

`PinnedArrayData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PinnedArrayData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Pinned` | `public bool Pinned { get; }` |
| `Pointer` | `public IntPtr Pointer { get; }` |
| `Array` | `public T Array { get; }` |
| `Array2D` | `public T Array2D { get; }` |
| `Handle` | `public GCHandle Handle { get; }` |

## 主要方法

### CheckIfTypeRequiresManualPinning
`public static bool CheckIfTypeRequiresManualPinning(Type type)`

**用途 / Purpose:** 检查if type requires manual pinning在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
PinnedArrayData.CheckIfTypeRequiresManualPinning(type);
```

### Dispose
`public void Dispose()`

**用途 / Purpose:** 释放当前对象占用的非托管资源。

```csharp
// 先通过子系统 API 拿到 PinnedArrayData 实例
PinnedArrayData pinnedArrayData = ...;
pinnedArrayData.Dispose();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
PinnedArrayData entry = ...;
```

## 参见

- [本区域目录](../)