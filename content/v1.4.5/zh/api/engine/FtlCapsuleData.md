---
title: "FtlCapsuleData"
description: "FtlCapsuleData 的自动生成类参考。"
---
# FtlCapsuleData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal struct FtlCapsuleData`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/FtlCapsuleData.cs`

## 概述

`FtlCapsuleData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `FtlCapsuleData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBoxMin
`public Vec3 GetBoxMin()`

**用途 / Purpose:** 读取并返回当前对象中 box min 的结果。

```csharp
// 先通过子系统 API 拿到 FtlCapsuleData 实例
FtlCapsuleData ftlCapsuleData = ...;
var result = ftlCapsuleData.GetBoxMin();
```

### GetBoxMax
`public Vec3 GetBoxMax()`

**用途 / Purpose:** 读取并返回当前对象中 box max 的结果。

```csharp
// 先通过子系统 API 拿到 FtlCapsuleData 实例
FtlCapsuleData ftlCapsuleData = ...;
var result = ftlCapsuleData.GetBoxMax();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
FtlCapsuleData entry = ...;
```

## 参见

- [本区域目录](../)