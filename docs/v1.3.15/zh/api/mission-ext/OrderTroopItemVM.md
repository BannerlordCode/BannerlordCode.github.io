<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderTroopItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderTroopItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopItemVM : OrderSubjectVM`
**Base:** `OrderSubjectVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs`

## 概述

`OrderTroopItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ContainsDeadTroop` | `public bool ContainsDeadTroop { get; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `FormationIndex` | `public int FormationIndex { get; set; }` |
| `CurrentMemberCount` | `public int CurrentMemberCount { get; set; }` |
| `Morale` | `public int Morale { get; set; }` |
| `AmmoPercentage` | `public float AmmoPercentage { get; set; }` |
| `IsAmmoAvailable` | `public bool IsAmmoAvailable { get; set; }` |
| `HaveTroops` | `public bool HaveTroops { get; set; }` |
| `HasTarget` | `public bool HasTarget { get; set; }` |
| `IsTargetRelevant` | `public bool IsTargetRelevant { get; set; }` |
| `HasCaptain` | `public bool HasCaptain { get; set; }` |
| `CurrentOrderIconId` | `public string CurrentOrderIconId { get; set; }` |
| `CurrentTargetFormationType` | `public string CurrentTargetFormationType { get; set; }` |
| `FormationName` | `public string FormationName { get; set; }` |
| `CaptainImageIdentifier` | `public CharacterImageIdentifierVM CaptainImageIdentifier { get; set; }` |
| `ActiveFormationClasses` | `public MBBindingList<OrderTroopItemFormationClassVM> ActiveFormationClasses { get; set; }` |
| `ActiveFilters` | `public MBBindingList<OrderTroopItemFilterVM> ActiveFilters { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnFormationAgentRemoved
`public void OnFormationAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `formation agent removed` 事件触发时调用此方法。

### UpdateVisuals
`public virtual void UpdateVisuals()`

**用途 / Purpose:** 更新 `visuals` 的状态或数据。

### Update
`public virtual void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### UpdateSelectionKeyInfo
`public void UpdateSelectionKeyInfo()`

**用途 / Purpose:** 更新 `selection key info` 的状态或数据。

### SetFormationClassFromFormation
`public bool SetFormationClassFromFormation(Formation formation)`

**用途 / Purpose:** 设置 `formation class from formation` 的值或状态。

### UpdateFilterData
`public void UpdateFilterData(List<FormationFilterType> usedFilters)`

**用途 / Purpose:** 更新 `filter data` 的状态或数据。

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 `action` 操作或流程。

### RefreshTargetedOrderVisual
`public virtual void RefreshTargetedOrderVisual()`

**用途 / Purpose:** 刷新 `targeted order visual` 的显示或缓存。

### GetVisibleNameOfFormationForMessage
`public virtual TextObject GetVisibleNameOfFormationForMessage()`

**用途 / Purpose:** 获取 `visible name of formation for message` 的当前值。

## 使用示例

```csharp
var value = new OrderTroopItemVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)