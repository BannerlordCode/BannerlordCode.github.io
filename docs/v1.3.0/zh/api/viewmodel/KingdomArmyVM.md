<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomArmyVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomArmyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomArmyVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmyVM.cs`

## 概述

`KingdomArmyVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ArmySortController` | `public KingdomArmySortControllerVM ArmySortController { get; set; }` |
| `CreateArmyText` | `public string CreateArmyText { get; set; }` |
| `DisbandActionExplanationText` | `public string DisbandActionExplanationText { get; set; }` |
| `ManageActionExplanationText` | `public string ManageActionExplanationText { get; set; }` |
| `CurrentSelectedArmy` | `public KingdomArmyItemVM CurrentSelectedArmy { get; set; }` |
| `CreateArmyHint` | `public HintViewModel CreateArmyHint { get; set; }` |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint { get; set; }` |
| `PlayerHasArmy` | `public bool PlayerHasArmy { get; set; }` |
| `CanCreateArmy` | `public bool CanCreateArmy { get; set; }` |
| `LeaderText` | `public string LeaderText { get; set; }` |
| `ShowOnMapText` | `public string ShowOnMapText { get; set; }` |
| `ArmyNameText` | `public string ArmyNameText { get; set; }` |
| `StrengthText` | `public string StrengthText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `Armies` | `public MBBindingList<KingdomArmyItemVM> Armies { get; set; }` |
| `CanDisbandCurrentArmy` | `public bool CanDisbandCurrentArmy { get; set; }` |
| `CanManageCurrentArmy` | `public bool CanManageCurrentArmy { get; set; }` |
| `CanChangeLeaderOfCurrentArmy` | `public bool CanChangeLeaderOfCurrentArmy { get; set; }` |
| `CanShowLocationOfCurrentArmy` | `public bool CanShowLocationOfCurrentArmy { get; set; }` |
| `DisbandText` | `public string DisbandText { get; set; }` |
| `ManageText` | `public string ManageText { get; set; }` |
| `DisbandCost` | `public int DisbandCost { get; set; }` |
| `ChangeLeaderText` | `public string ChangeLeaderText { get; set; }` |
| `ChangeLeaderCost` | `public int ChangeLeaderCost { get; set; }` |
| `DisbandHint` | `public HintViewModel DisbandHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshArmyList
`public void RefreshArmyList()`

**用途 / Purpose:** 刷新 `army list` 的显示或缓存。

### SelectArmy
`public void SelectArmy(Army army)`

**用途 / Purpose:** 处理 `select army` 相关逻辑。

## 使用示例

```csharp
var value = new KingdomArmyVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)