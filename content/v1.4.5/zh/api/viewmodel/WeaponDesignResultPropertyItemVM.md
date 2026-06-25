---
title: "WeaponDesignResultPropertyItemVM"
description: "WeaponDesignResultPropertyItemVM 的自动生成类参考。"
---
# WeaponDesignResultPropertyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignResultPropertyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/WeaponDesignResultPropertyItemVM.cs`

## 概述

`WeaponDesignResultPropertyItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertyLbl` | `public string PropertyLbl { get; set; }` |
| `InitialValue` | `public float InitialValue { get; set; }` |
| `TargetValue` | `public float TargetValue { get; set; }` |
| `RequiredValueText` | `public string RequiredValueText { get; set; }` |
| `ChangeAmount` | `public float ChangeAmount { get; set; }` |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint { get; set; }` |
| `IsOrderResult` | `public bool IsOrderResult { get; set; }` |
| `HasBenefit` | `public bool HasBenefit { get; set; }` |
| `OrderRequirementTooltip` | `public HintViewModel OrderRequirementTooltip { get; set; }` |
| `CraftedValueTooltip` | `public HintViewModel CraftedValueTooltip { get; set; }` |
| `BonusPenaltyTooltip` | `public HintViewModel BonusPenaltyTooltip { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 WeaponDesignResultPropertyItemVM 实例
WeaponDesignResultPropertyItemVM weaponDesignResultPropertyItemVM = ...;
weaponDesignResultPropertyItemVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeaponDesignResultPropertyItemVM weaponDesignResultPropertyItemVM = ...;
weaponDesignResultPropertyItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)