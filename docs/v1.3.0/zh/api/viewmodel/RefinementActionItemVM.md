<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RefinementActionItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshDynamicProperties
`public void RefreshDynamicProperties()`

**用途 / Purpose:** 刷新 `dynamic properties` 的显示或缓存。

### ExecuteSelectAction
`public void ExecuteSelectAction()`

**用途 / Purpose:** 执行 `select action` 操作或流程。

## 使用示例

```csharp
var value = new RefinementActionItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)