---
title: "OrderOfBattleHeroItemVM"
description: "OrderOfBattleHeroItemVM 的自动生成类参考。"
---
# OrderOfBattleHeroItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleHeroItemVM.cs`

## 概述

`OrderOfBattleHeroItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BannerOfHero` | `public ItemObject BannerOfHero { get; }` |
| `IsAssignedBeforePlayer` | `public bool IsAssignedBeforePlayer { get; }` |
| `InitialFormation` | `public Formation InitialFormation { get; }` |
| `InitialFormationItem` | `public OrderOfBattleFormationItemVM InitialFormationItem { get; }` |
| `CurrentAssignedFormationItem` | `public OrderOfBattleFormationItemVM CurrentAssignedFormationItem { get; set; }` |
| `MismatchedAssignmentDescriptionText` | `public string MismatchedAssignmentDescriptionText { get; set; }` |
| `IsAssignedToAFormation` | `public bool IsAssignedToAFormation { get; set; }` |
| `IsLeadingAFormation` | `public bool IsLeadingAFormation { get; set; }` |
| `HasMismatchedAssignment` | `public bool HasMismatchedAssignment { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `IsHighlightActive` | `public bool IsHighlightActive { get; set; }` |

## 主要方法

### SetInitialFormation
`public void SetInitialFormation(OrderOfBattleFormationItemVM formation)`

**用途 / Purpose:** **用途 / Purpose:** 为 initial formation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleHeroItemVM 实例
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.SetInitialFormation(formation);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleHeroItemVM 实例
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.RefreshValues();
```

### OnAssignmentRemoved
`public void OnAssignmentRemoved()`

**用途 / Purpose:** **用途 / Purpose:** 在 assignment removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleHeroItemVM 实例
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.OnAssignmentRemoved();
```

### RefreshInformation
`public void RefreshInformation()`

**用途 / Purpose:** **用途 / Purpose:** 使 information 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleHeroItemVM 实例
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.RefreshInformation();
```

### RefreshAssignmentInfo
`public void RefreshAssignmentInfo()`

**用途 / Purpose:** **用途 / Purpose:** 使 assignment info 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleHeroItemVM 实例
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.RefreshAssignmentInfo();
```

### SetIsPreAssigned
`public void SetIsPreAssigned(bool isPreAssigned)`

**用途 / Purpose:** **用途 / Purpose:** 为 is pre assigned 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleHeroItemVM 实例
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.SetIsPreAssigned(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderOfBattleHeroItemVM orderOfBattleHeroItemVM = ...;
orderOfBattleHeroItemVM.SetInitialFormation(formation);
```

## 参见

- [本区域目录](../)