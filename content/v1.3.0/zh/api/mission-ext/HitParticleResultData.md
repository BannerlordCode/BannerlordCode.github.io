---
title: "HitParticleResultData"
description: "HitParticleResultData 的自动生成类参考。"
---
# HitParticleResultData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct HitParticleResultData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/HitParticleResultData.cs`

## 概述

`HitParticleResultData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `HitParticleResultData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 HitParticleResultData 实例
HitParticleResultData hitParticleResultData = ...;
hitParticleResultData.Reset();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
HitParticleResultData entry = ...;
```

## 参见

- [本区域目录](../)