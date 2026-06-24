<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroInformationVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HeroInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/HeroInformationVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshWith
`public void RefreshWith(MPHeroClass heroClass, List<IReadOnlyPerkObject> perks)`

**用途 / Purpose:** 刷新 `with` 的显示或缓存。

### UpdateHighlightedItem
`public void UpdateHighlightedItem(ShallowItemVM item)`

**用途 / Purpose:** 更新 `highlighted item` 的状态或数据。

## 使用示例

```csharp
var value = new HeroInformationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)