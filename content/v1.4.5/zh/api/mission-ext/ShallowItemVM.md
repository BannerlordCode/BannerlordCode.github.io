---
title: "ShallowItemVM"
description: "ShallowItemVM 的自动生成类参考。"
---
# ShallowItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShallowItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/ShallowItemVM.cs`

## 概述

`ShallowItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Icon` | `public string Icon { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `Type` | `public ItemGroup Type { get; }` |
| `ItemInformationList` | `public MBBindingList<ArmoryItemFlagVM> ItemInformationList { get; set; }` |
| `PropertyList` | `public MBBindingList<ShallowItemPropertyVM> PropertyList { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Icon` | `public ItemImageIdentifierVM Icon { get; set; }` |
| `TypeAsString` | `public string TypeAsString { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasAnyAlternativeUsage` | `public bool HasAnyAlternativeUsage { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `AlternativeUsageSelector` | `public SelectorVM<AlternativeUsageItemOptionVM> AlternativeUsageSelector { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ShallowItemVM 实例
ShallowItemVM shallowItemVM = ...;
shallowItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ShallowItemVM 实例
ShallowItemVM shallowItemVM = ...;
shallowItemVM.OnFinalize();
```

### RefreshWith
`public void RefreshWith(EquipmentIndex equipmentIndex, Equipment equipment)`

**用途 / Purpose:** 使 with 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ShallowItemVM 实例
ShallowItemVM shallowItemVM = ...;
shallowItemVM.RefreshWith(equipmentIndex, equipment);
```

### OnSelect
`public void OnSelect()`

**用途 / Purpose:** 在 select 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ShallowItemVM 实例
ShallowItemVM shallowItemVM = ...;
shallowItemVM.OnSelect();
```

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

**用途 / Purpose:** 判断当前对象是否处于 item usage applicable 状态或条件。

```csharp
// 静态调用，不需要实例
ShallowItemVM.IsItemUsageApplicable(weapon);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ShallowItemVM shallowItemVM = ...;
shallowItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)