---
title: "NavigationData"
description: "NavigationData 的自动生成类参考。"
---
# NavigationData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct NavigationData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/NavigationData.cs`

## 概述

`NavigationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `NavigationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TickDebug
`public void TickDebug()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「debug」的状态。

```csharp
// 先通过子系统 API 拿到 NavigationData 实例
NavigationData navigationData = ...;
navigationData.TickDebug();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
NavigationData entry = ...;
```

## 参见

- [本区域目录](../)