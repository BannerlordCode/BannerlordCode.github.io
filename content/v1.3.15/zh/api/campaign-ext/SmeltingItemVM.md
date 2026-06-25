---
title: "SmeltingItemVM"
description: "SmeltingItemVM 的自动生成类参考。"
---
# SmeltingItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmeltingItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingItemVM.cs`

## 概述

`SmeltingItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `EquipmentElement` | `public EquipmentElement EquipmentElement { get; }` |
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Yield` | `public MBBindingList<CraftingResourceItemVM> Yield { get; set; }` |
| `InputMaterials` | `public MBBindingList<CraftingResourceItemVM> InputMaterials { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NumOfItems` | `public int NumOfItems { get; set; }` |
| `HasMoreThanOneItem` | `public bool HasMoreThanOneItem { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SmeltingItemVM 实例
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.RefreshValues();
```

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SmeltingItemVM 实例
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.ExecuteSelection();
```

### ExecuteShowItemTooltip
`public void ExecuteShowItemTooltip()`

**用途 / Purpose:** 执行 show item tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SmeltingItemVM 实例
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.ExecuteShowItemTooltip();
```

### ExecuteHideItemTooltip
`public void ExecuteHideItemTooltip()`

**用途 / Purpose:** 执行 hide item tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SmeltingItemVM 实例
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.ExecuteHideItemTooltip();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SmeltingItemVM smeltingItemVM = ...;
smeltingItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)