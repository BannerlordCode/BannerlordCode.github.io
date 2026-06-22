<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderTroopItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderTroopItemVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OrderTroopItemVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void OnFinalize()
```

### OnFormationAgentRemoved

```csharp
public void OnFormationAgentRemoved(Agent agent)
```

### UpdateVisuals

```csharp
public virtual void UpdateVisuals()
```

### Update

```csharp
public virtual void Update()
```

### UpdateSelectionKeyInfo

```csharp
public void UpdateSelectionKeyInfo()
```

### SetFormationClassFromFormation

```csharp
public bool SetFormationClassFromFormation(Formation formation)
```

### UpdateFilterData

```csharp
public void UpdateFilterData(List<FormationFilterType> usedFilters)
```

### ExecuteAction

```csharp
public void ExecuteAction()
```

### RefreshTargetedOrderVisual

```csharp
public virtual void RefreshTargetedOrderVisual()
```

### GetVisibleNameOfFormationForMessage

```csharp
public virtual TextObject GetVisibleNameOfFormationForMessage()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)