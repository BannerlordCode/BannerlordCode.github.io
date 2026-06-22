<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleFormationItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationItemVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OrderOfBattleFormationItemVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasFormation` | `public bool HasFormation { get; set; }` |
| `HasCaptain` | `public bool HasCaptain { get; set; }` |
| `HasHeroTroops` | `public bool HasHeroTroops { get; set; }` |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsAdjustable` | `public bool IsAdjustable { get; set; }` |
| `IsMarkerShown` | `public bool IsMarkerShown { get; set; }` |
| `IsBeingFocused` | `public bool IsBeingFocused { get; set; }` |
| `IsAcceptingCaptain` | `public bool IsAcceptingCaptain { get; set; }` |
| `IsAcceptingHeroTroops` | `public bool IsAcceptingHeroTroops { get; set; }` |
| `IsHeroTroopsOverflowing` | `public bool IsHeroTroopsOverflowing { get; set; }` |
| `IsClassSelectionActive` | `public bool IsClassSelectionActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `FormationIsEmptyText` | `public string FormationIsEmptyText { get; set; }` |
| `OverflowHeroTroopCountText` | `public string OverflowHeroTroopCountText { get; set; }` |
| `TroopCount` | `public int TroopCount { get; set; }` |
| `BannerBearerCount` | `public int BannerBearerCount { get; set; }` |
| `OrderOfBattleFormationClassInt` | `public int OrderOfBattleFormationClassInt { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### Tick

```csharp
public void Tick()
```

### RefreshFormation

```csharp
public void RefreshFormation(Formation formation, DeploymentFormationClass overriddenClass = DeploymentFormationClass.Unset, bool mustExist = false)
```

### MakeMarkerWorldPositionDirty

```csharp
public void MakeMarkerWorldPositionDirty()
```

### OnSizeChanged

```csharp
public void OnSizeChanged()
```

### GetOrderOfBattleClass

```csharp
public DeploymentFormationClass GetOrderOfBattleClass()
```

### UpdateAdjustable

```csharp
public void UpdateAdjustable()
```

### HasFilter

```csharp
public bool HasFilter(FormationFilterType filter)
```

### HasOnlyOneClass

```csharp
public bool HasOnlyOneClass()
```

### HasClass

```csharp
public bool HasClass(FormationClass formationClass)
```

### HasClasses

```csharp
public bool HasClasses(FormationClass formationClasses)
```

### UnassignCaptain

```csharp
public void UnassignCaptain()
```

### ExecuteAcceptCaptain

```csharp
public void ExecuteAcceptCaptain()
```

### ExecuteAcceptHeroTroops

```csharp
public void ExecuteAcceptHeroTroops()
```

### OnHeroSelectionUpdated

```csharp
public void OnHeroSelectionUpdated(int selectedHeroCount, bool hasOwnHeroTroopInSelection)
```

### AddHeroTroop

```csharp
public void AddHeroTroop(OrderOfBattleHeroItemVM heroItem)
```

### RemoveHeroTroop

```csharp
public void RemoveHeroTroop(OrderOfBattleHeroItemVM heroItem)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)