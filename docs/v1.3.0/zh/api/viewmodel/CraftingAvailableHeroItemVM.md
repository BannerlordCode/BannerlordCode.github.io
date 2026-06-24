<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingAvailableHeroItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshStamina
`public void RefreshStamina()`

**用途 / Purpose:** 刷新 `stamina` 的显示或缓存。

### RefreshOrderAvailability
`public void RefreshOrderAvailability(CraftingOrder order)`

**用途 / Purpose:** 刷新 `order availability` 的显示或缓存。

### RefreshSkills
`public void RefreshSkills()`

**用途 / Purpose:** 刷新 `skills` 的显示或缓存。

### RefreshPerks
`public void RefreshPerks()`

**用途 / Purpose:** 刷新 `perks` 的显示或缓存。

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 `selection` 操作或流程。

## 使用示例

```csharp
var value = new CraftingAvailableHeroItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)