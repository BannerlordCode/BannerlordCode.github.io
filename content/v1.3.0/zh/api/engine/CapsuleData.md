---
title: "CapsuleData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CapsuleData`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

### GetBoxMin
`public Vec3 GetBoxMin()`

**用途 / Purpose:** 获取 `box min` 的当前值。

### GetBoxMax
`public Vec3 GetBoxMax()`

**用途 / Purpose:** 获取 `box max` 的当前值。

## 使用示例

```csharp
var value = new CapsuleData();
```

## 参见

- [完整类目录](../catalog)