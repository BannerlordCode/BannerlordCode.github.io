---
title: "MPArmoryHeroPerkSelectionVM"
description: "MPArmoryHeroPerkSelectionVM 的自动生成类参考。"
---
# MPArmoryHeroPerkSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryHeroPerkSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryHeroPerkSelectionVM.cs`

## 概述

`MPArmoryHeroPerkSelectionVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentHeroClass` | `public MPHeroClass CurrentHeroClass { get; }` |
| `CurrentSelectedPerks` | `public List<IReadOnlyPerkObject> CurrentSelectedPerks { get; }` |
| `Perks` | `public MBBindingList<HeroPerkVM> Perks { get; set; }` |
| `GameModes` | `public SelectorVM<SelectorItemVM> GameModes { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryHeroPerkSelectionVM 实例
MPArmoryHeroPerkSelectionVM mPArmoryHeroPerkSelectionVM = ...;
mPArmoryHeroPerkSelectionVM.RefreshValues();
```

### RefreshPerksListWithHero
`public void RefreshPerksListWithHero(MPHeroClass heroClass)`

**用途 / Purpose:** 使 「perks list with hero」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryHeroPerkSelectionVM 实例
MPArmoryHeroPerkSelectionVM mPArmoryHeroPerkSelectionVM = ...;
mPArmoryHeroPerkSelectionVM.RefreshPerksListWithHero(heroClass);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPArmoryHeroPerkSelectionVM mPArmoryHeroPerkSelectionVM = ...;
mPArmoryHeroPerkSelectionVM.RefreshValues();
```

## 参见

- [本区域目录](../)