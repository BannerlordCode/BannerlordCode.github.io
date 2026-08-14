---
title: "CapsuleData"
description: "CapsuleData 的自动生成类参考。"
---
# CapsuleData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct CapsuleData`
**Base:** 无
**File:** `TaleWorlds.Engine/CapsuleData.cs`

## 概述

`CapsuleData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CapsuleData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `P1` | `public Vec3 P1 { get; set; }` |
| `P2` | `public Vec3 P2 { get; set; }` |
| `Radius` | `public float Radius { get; set; }` |

## 主要方法

### GetBoxMinMax
`public ValueTuple<Vec3, Vec3> GetBoxMinMax()`

**用途 / Purpose:** 读取并返回当前对象中 box min max 的结果。

```csharp
// 先通过子系统 API 拿到 CapsuleData 实例
CapsuleData capsuleData = ...;
var result = capsuleData.GetBoxMinMax();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
CapsuleData entry = ...;
```

## 参见

- [本区域目录](../)