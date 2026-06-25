---
title: "ManagedSelectionOptionData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedSelectionOptionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedSelectionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`

## 概述

`ManagedSelectionOptionData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `ManagedSelectionOptionData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSelectableOptionsLimit
`public int GetSelectableOptionsLimit()`

**用途 / Purpose:** 获取 `selectable options limit` 的当前值。

### GetSelectableOptionNames
`public IEnumerable<SelectionData> GetSelectableOptionNames()`

**用途 / Purpose:** 获取 `selectable option names` 的当前值。

### GetOptionsLimit
`public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)`

**用途 / Purpose:** 获取 `options limit` 的当前值。

## 使用示例

```csharp
var value = new ManagedSelectionOptionData();
```

## 参见

- [完整类目录](../catalog)