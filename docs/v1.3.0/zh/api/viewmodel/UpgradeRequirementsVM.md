<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UpgradeRequirementsVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UpgradeRequirementsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class UpgradeRequirementsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/UpgradeRequirementsVM.cs`

## 概述

`UpgradeRequirementsVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsItemRequirementMet` | `public bool IsItemRequirementMet { get; set; }` |
| `IsPerkRequirementMet` | `public bool IsPerkRequirementMet { get; set; }` |
| `HasItemRequirement` | `public bool HasItemRequirement { get; set; }` |
| `HasPerkRequirement` | `public bool HasPerkRequirement { get; set; }` |
| `PerkRequirement` | `public string PerkRequirement { get; set; }` |
| `ItemRequirement` | `public string ItemRequirement { get; set; }` |
| `ItemRequirementHint` | `public HintViewModel ItemRequirementHint { get; set; }` |
| `PerkRequirementHint` | `public HintViewModel PerkRequirementHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetItemRequirement
`public void SetItemRequirement(ItemCategory category)`

**用途 / Purpose:** 设置 `item requirement` 的值或状态。

### SetPerkRequirement
`public void SetPerkRequirement(PerkObject perk)`

**用途 / Purpose:** 设置 `perk requirement` 的值或状态。

### SetRequirementsMet
`public void SetRequirementsMet(bool isItemRequirementMet, bool isPerkRequirementMet)`

**用途 / Purpose:** 设置 `requirements met` 的值或状态。

## 使用示例

```csharp
var value = new UpgradeRequirementsVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)