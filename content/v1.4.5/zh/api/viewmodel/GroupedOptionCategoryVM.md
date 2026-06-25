---
title: "GroupedOptionCategoryVM"
description: "GroupedOptionCategoryVM 的自动生成类参考。"
---
# GroupedOptionCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GroupedOptionCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/GroupedOptionCategoryVM.cs`

## 概述

`GroupedOptionCategoryVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsResetSupported` | `public bool IsResetSupported { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ResetText` | `public string ResetText { get; set; }` |
| `Groups` | `public MBBindingList<OptionGroupVM> Groups { get; set; }` |
| `BaseOptions` | `public MBBindingList<GenericOptionDataVM> BaseOptions { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GroupedOptionCategoryVM 实例
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
groupedOptionCategoryVM.RefreshValues();
```

### ResetData
`public void ResetData()`

**用途 / Purpose:** **用途 / Purpose:** 将 data 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 GroupedOptionCategoryVM 实例
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
groupedOptionCategoryVM.ResetData();
```

### ExecuteResetToDefault
`public void ExecuteResetToDefault()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset to default 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 GroupedOptionCategoryVM 实例
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
groupedOptionCategoryVM.ExecuteResetToDefault();
```

### GetOption
`public GenericOptionDataVM GetOption(ManagedOptions.ManagedOptionsType optionType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 option 的结果。

```csharp
// 先通过子系统 API 拿到 GroupedOptionCategoryVM 实例
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
var result = groupedOptionCategoryVM.GetOption(optionType);
```

### GetOption
`public GenericOptionDataVM GetOption(NativeOptions.NativeOptionsType optionType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 option 的结果。

```csharp
// 先通过子系统 API 拿到 GroupedOptionCategoryVM 实例
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
var result = groupedOptionCategoryVM.GetOption(optionType);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GroupedOptionCategoryVM groupedOptionCategoryVM = ...;
groupedOptionCategoryVM.RefreshValues();
```

## 参见

- [本区域目录](../)