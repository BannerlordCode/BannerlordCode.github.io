---
title: "RefinementVM"
description: "RefinementVM 的自动生成类参考。"
---
# RefinementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RefinementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs`

## 概述

`RefinementVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSelectedAction` | `public RefinementActionItemVM CurrentSelectedAction { get; set; }` |
| `IsValidRefinementActionSelected` | `public bool IsValidRefinementActionSelected { get; set; }` |
| `AvailableRefinementActions` | `public MBBindingList<RefinementActionItemVM> AvailableRefinementActions { get; set; }` |
| `RefinementText` | `public string RefinementText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RefinementVM 实例
RefinementVM refinementVM = ...;
refinementVM.RefreshValues();
```

### ExecuteSelectedRefinement
`public void ExecuteSelectedRefinement(Hero currentCraftingHero)`

**用途 / Purpose:** **用途 / Purpose:** 执行 selected refinement 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 RefinementVM 实例
RefinementVM refinementVM = ...;
refinementVM.ExecuteSelectedRefinement(currentCraftingHero);
```

### RefreshRefinementActionsList
`public void RefreshRefinementActionsList(Hero craftingHero)`

**用途 / Purpose:** **用途 / Purpose:** 使 refinement actions list 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 RefinementVM 实例
RefinementVM refinementVM = ...;
refinementVM.RefreshRefinementActionsList(craftingHero);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RefinementVM refinementVM = ...;
refinementVM.RefreshValues();
```

## 参见

- [本区域目录](../)