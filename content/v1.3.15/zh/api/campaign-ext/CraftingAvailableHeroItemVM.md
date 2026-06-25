---
title: "CraftingAvailableHeroItemVM"
description: "CraftingAvailableHeroItemVM 的自动生成类参考。"
---
# CraftingAvailableHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingAvailableHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingAvailableHeroItemVM.cs`

## 概述

`CraftingAvailableHeroItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HeroData` | `public HeroVM HeroData { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `CurrentStamina` | `public float CurrentStamina { get; set; }` |
| `MaxStamina` | `public int MaxStamina { get; set; }` |
| `StaminaPercentage` | `public string StaminaPercentage { get; set; }` |
| `SmithySkillLevel` | `public int SmithySkillLevel { get; set; }` |
| `CraftingPerks` | `public MBBindingList<CraftingPerkVM> CraftingPerks { get; set; }` |
| `PerksText` | `public string PerksText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingAvailableHeroItemVM 实例
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshValues();
```

### RefreshStamina
`public void RefreshStamina()`

**用途 / Purpose:** **用途 / Purpose:** 使 stamina 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingAvailableHeroItemVM 实例
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshStamina();
```

### RefreshOrderAvailability
`public void RefreshOrderAvailability(CraftingOrder order)`

**用途 / Purpose:** **用途 / Purpose:** 使 order availability 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingAvailableHeroItemVM 实例
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshOrderAvailability(order);
```

### RefreshSkills
`public void RefreshSkills()`

**用途 / Purpose:** **用途 / Purpose:** 使 skills 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingAvailableHeroItemVM 实例
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshSkills();
```

### RefreshPerks
`public void RefreshPerks()`

**用途 / Purpose:** **用途 / Purpose:** 使 perks 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingAvailableHeroItemVM 实例
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshPerks();
```

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** **用途 / Purpose:** 执行 selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingAvailableHeroItemVM 实例
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.ExecuteSelection();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingAvailableHeroItemVM craftingAvailableHeroItemVM = ...;
craftingAvailableHeroItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)