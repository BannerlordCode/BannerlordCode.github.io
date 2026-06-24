<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingListPropertyItem`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingListPropertyItem

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingListPropertyItem : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingListPropertyItem.cs`

## 概述

`CraftingListPropertyItem` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValidForUsage` | `public bool IsValidForUsage { get; set; }` |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial { get; set; }` |
| `HasValidTarget` | `public bool HasValidTarget { get; set; }` |
| `HasValidValue` | `public bool HasValidValue { get; set; }` |
| `TargetValue` | `public float TargetValue { get; set; }` |
| `TargetValueText` | `public string TargetValueText { get; set; }` |
| `IsAlternativeUsageProperty` | `public bool IsAlternativeUsageProperty { get; set; }` |
| `PropertyLbl` | `public string PropertyLbl { get; set; }` |
| `PropertyValue` | `public float PropertyValue { get; set; }` |
| `PropertyMaxValue` | `public float PropertyMaxValue { get; set; }` |
| `PropertyValueText` | `public string PropertyValueText { get; set; }` |
| `SeparatorText` | `public string SeparatorText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

## 使用示例

```csharp
var value = new CraftingListPropertyItem();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)