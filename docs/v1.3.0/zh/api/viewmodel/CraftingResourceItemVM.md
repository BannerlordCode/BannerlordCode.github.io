<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingResourceItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingResourceItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingResourceItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingResourceItemVM.cs`

## 概述

`CraftingResourceItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ResourceItem` | `public ItemObject ResourceItem { get; }` |
| `ResourceMaterial` | `public CraftingMaterials ResourceMaterial { get; }` |
| `ResourceName` | `public string ResourceName { get; set; }` |
| `ResourceHint` | `public HintViewModel ResourceHint { get; set; }` |
| `ResourceMaterialTypeAsStr` | `public string ResourceMaterialTypeAsStr { get; set; }` |
| `ResourceAmount` | `public int ResourceAmount { get; set; }` |
| `ResourceChangeAmount` | `public int ResourceChangeAmount { get; set; }` |
| `ResourceItemStringId` | `public string ResourceItemStringId { get; set; }` |
| `IsResourceAvailable` | `public bool IsResourceAvailable { get; set; }` |

## 使用示例

```csharp
var example = new CraftingResourceItemVM();
```

## 参见

- [完整类目录](../catalog)