---
title: "HeroInformationVM"
description: "HeroInformationVM 的自动生成类参考。"
---
# HeroInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HeroInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/HeroInformationVM.cs`

## 概述

`HeroInformationVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeroClass` | `public MPHeroClass HeroClass { get; }` |
| `ArmySizeHint` | `public HintViewModel ArmySizeHint { get; set; }` |
| `MovementSpeedHint` | `public HintViewModel MovementSpeedHint { get; set; }` |
| `HitPointsHint` | `public HintViewModel HitPointsHint { get; set; }` |
| `ArmorHint` | `public HintViewModel ArmorHint { get; set; }` |
| `Item1` | `public ShallowItemVM Item1 { get; set; }` |
| `Item2` | `public ShallowItemVM Item2 { get; set; }` |
| `Item3` | `public ShallowItemVM Item3 { get; set; }` |
| `Item4` | `public ShallowItemVM Item4 { get; set; }` |
| `ItemHorse` | `public ShallowItemVM ItemHorse { get; set; }` |
| `ItemSelected` | `public ShallowItemVM ItemSelected { get; set; }` |
| `Information` | `public string Information { get; set; }` |
| `EquipmentText` | `public string EquipmentText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `MovementSpeed` | `public int MovementSpeed { get; set; }` |
| `ArmySize` | `public int ArmySize { get; set; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |
| `Armor` | `public int Armor { get; set; }` |
| `IsArmyAvailable` | `public bool IsArmyAvailable { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 HeroInformationVM 实例
HeroInformationVM heroInformationVM = ...;
heroInformationVM.RefreshValues();
```

### RefreshWith
`public void RefreshWith(MPHeroClass heroClass, List<IReadOnlyPerkObject> perks)`

**用途 / Purpose:** 使 「with」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 HeroInformationVM 实例
HeroInformationVM heroInformationVM = ...;
heroInformationVM.RefreshWith(heroClass, perks);
```

### UpdateHighlightedItem
`public void UpdateHighlightedItem(ShallowItemVM item)`

**用途 / Purpose:** 重新计算并更新 「highlighted item」 的最新表示。

```csharp
// 先通过子系统 API 拿到 HeroInformationVM 实例
HeroInformationVM heroInformationVM = ...;
heroInformationVM.UpdateHighlightedItem(item);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeroInformationVM heroInformationVM = ...;
heroInformationVM.RefreshValues();
```

## 参见

- [本区域目录](../)