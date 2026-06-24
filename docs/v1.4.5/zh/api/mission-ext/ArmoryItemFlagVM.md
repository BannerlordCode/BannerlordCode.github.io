<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmoryItemFlagVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmoryItemFlagVM

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class ArmoryItemFlagVM : ViewModel`
**Base:** `ViewModel`
**领域:** mission-ext

## 概述

`ArmoryItemFlagVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 ArmoryItemFlagVM 实例，再调用它的公开方法
var value = new ArmoryItemFlagVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
