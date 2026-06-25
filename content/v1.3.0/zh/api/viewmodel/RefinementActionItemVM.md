---
title: "RefinementActionItemVM"
description: "RefinementActionItemVM 的自动生成类参考。"
---
# RefinementActionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RefinementActionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs`

## 概述

`RefinementActionItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RefineFormula` | `public Crafting.RefiningFormula RefineFormula { get; }` |
| `InputMaterials` | `public MBBindingList<CraftingResourceItemVM> InputMaterials { get; set; }` |
| `OutputMaterials` | `public MBBindingList<CraftingResourceItemVM> OutputMaterials { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RefinementActionItemVM 实例
RefinementActionItemVM refinementActionItemVM = ...;
refinementActionItemVM.RefreshValues();
```

### RefreshDynamicProperties
`public void RefreshDynamicProperties()`

**用途 / Purpose:** 使 「dynamic properties」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RefinementActionItemVM 实例
RefinementActionItemVM refinementActionItemVM = ...;
refinementActionItemVM.RefreshDynamicProperties();
```

### ExecuteSelectAction
`public void ExecuteSelectAction()`

**用途 / Purpose:** 执行 「select action」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RefinementActionItemVM 实例
RefinementActionItemVM refinementActionItemVM = ...;
refinementActionItemVM.ExecuteSelectAction();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RefinementActionItemVM refinementActionItemVM = ...;
refinementActionItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)