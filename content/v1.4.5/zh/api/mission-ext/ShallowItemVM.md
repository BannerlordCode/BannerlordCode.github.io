---
title: "ShallowItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShallowItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ShallowItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShallowItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/ShallowItemVM.cs`

## 概述

`ShallowItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Icon` | `public string Icon { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `Type` | `public ItemGroup Type { get; }` |
| `ItemInformationList` | `public MBBindingList<ArmoryItemFlagVM> ItemInformationList { get; set; }` |
| `PropertyList` | `public MBBindingList<ShallowItemPropertyVM> PropertyList { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Icon` | `public ItemImageIdentifierVM Icon { get; set; }` |
| `TypeAsString` | `public string TypeAsString { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasAnyAlternativeUsage` | `public bool HasAnyAlternativeUsage { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `AlternativeUsageSelector` | `public SelectorVM<AlternativeUsageItemOptionVM> AlternativeUsageSelector { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshWith
`public void RefreshWith(EquipmentIndex equipmentIndex, Equipment equipment)`

**用途 / Purpose:** 刷新 `with` 的显示或缓存。

### OnSelect
`public void OnSelect()`

**用途 / Purpose:** 当 `select` 事件触发时调用此方法。

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

**用途 / Purpose:** 处理 `is item usage applicable` 相关逻辑。

## 使用示例

```csharp
var value = new ShallowItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)