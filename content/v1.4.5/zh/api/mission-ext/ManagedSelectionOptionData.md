---
title: "ManagedSelectionOptionData"
description: "ManagedSelectionOptionData 的自动生成类参考。"
---
# ManagedSelectionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Options.ManagedOptions/ManagedSelectionOptionData.cs`

## 概述

`ManagedSelectionOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ManagedSelectionOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSelectableOptionsLimit
`public int GetSelectableOptionsLimit()`

**用途 / Purpose:** 读取并返回当前对象中 「selectable options limit」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedSelectionOptionData 实例
ManagedSelectionOptionData managedSelectionOptionData = ...;
var result = managedSelectionOptionData.GetSelectableOptionsLimit();
```

### GetSelectableOptionNames
`public IEnumerable<SelectionData> GetSelectableOptionNames()`

**用途 / Purpose:** 读取并返回当前对象中 「selectable option names」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedSelectionOptionData 实例
ManagedSelectionOptionData managedSelectionOptionData = ...;
var result = managedSelectionOptionData.GetSelectableOptionNames();
```

### GetOptionsLimit
`public static int GetOptionsLimit(TaleWorlds.MountAndBlade.ManagedOptions.ManagedOptionsType optionType)`

**用途 / Purpose:** 读取并返回当前对象中 「options limit」 的结果。

```csharp
// 静态调用，不需要实例
ManagedSelectionOptionData.GetOptionsLimit(optionType);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
ManagedSelectionOptionData entry = ...;
```

## 参见

- [本区域目录](../)