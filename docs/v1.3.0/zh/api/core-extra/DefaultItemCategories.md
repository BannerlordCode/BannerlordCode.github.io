<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultItemCategories`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultItemCategories

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DefaultItemCategories`
**Base:** 无
**File:** `TaleWorlds.Core/DefaultItemCategories.cs`

## 概述

`DefaultItemCategories` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Grain` | `public static ItemCategory Grain { get; }` |
| `Wood` | `public static ItemCategory Wood { get; }` |
| `Meat` | `public static ItemCategory Meat { get; }` |
| `Wool` | `public static ItemCategory Wool { get; }` |
| `Cheese` | `public static ItemCategory Cheese { get; }` |
| `Iron` | `public static ItemCategory Iron { get; }` |
| `Salt` | `public static ItemCategory Salt { get; }` |
| `Silver` | `public static ItemCategory Silver { get; }` |
| `Cotton` | `public static ItemCategory Cotton { get; }` |
| `Fish` | `public static ItemCategory Fish { get; }` |
| `Flax` | `public static ItemCategory Flax { get; }` |
| `Grape` | `public static ItemCategory Grape { get; }` |
| `Hides` | `public static ItemCategory Hides { get; }` |
| `Clay` | `public static ItemCategory Clay { get; }` |
| `DateFruit` | `public static ItemCategory DateFruit { get; }` |
| `Olives` | `public static ItemCategory Olives { get; }` |
| `Beer` | `public static ItemCategory Beer { get; }` |
| `Wine` | `public static ItemCategory Wine { get; }` |
| `Oil` | `public static ItemCategory Oil { get; }` |
| `Tools` | `public static ItemCategory Tools { get; }` |
| `Pottery` | `public static ItemCategory Pottery { get; }` |
| `Cloth` | `public static ItemCategory Cloth { get; }` |
| `Linen` | `public static ItemCategory Linen { get; }` |
| `Leather` | `public static ItemCategory Leather { get; }` |
| `Velvet` | `public static ItemCategory Velvet { get; }` |
| `Sheep` | `public static ItemCategory Sheep { get; }` |
| `Cow` | `public static ItemCategory Cow { get; }` |
| `Hog` | `public static ItemCategory Hog { get; }` |
| `Horse` | `public static ItemCategory Horse { get; }` |
| `WarHorse` | `public static ItemCategory WarHorse { get; }` |
| `NobleHorse` | `public static ItemCategory NobleHorse { get; }` |
| `Butter` | `public static ItemCategory Butter { get; }` |
| `Fur` | `public static ItemCategory Fur { get; }` |
| `Jewelry` | `public static ItemCategory Jewelry { get; }` |
| `PackAnimal` | `public static ItemCategory PackAnimal { get; }` |
| `MeleeWeapons1` | `public static ItemCategory MeleeWeapons1 { get; }` |
| `MeleeWeapons2` | `public static ItemCategory MeleeWeapons2 { get; }` |
| `MeleeWeapons3` | `public static ItemCategory MeleeWeapons3 { get; }` |
| `MeleeWeapons4` | `public static ItemCategory MeleeWeapons4 { get; }` |
| `MeleeWeapons5` | `public static ItemCategory MeleeWeapons5 { get; }` |
| `RangedWeapons1` | `public static ItemCategory RangedWeapons1 { get; }` |
| `RangedWeapons2` | `public static ItemCategory RangedWeapons2 { get; }` |
| `RangedWeapons3` | `public static ItemCategory RangedWeapons3 { get; }` |
| `RangedWeapons4` | `public static ItemCategory RangedWeapons4 { get; }` |
| `RangedWeapons5` | `public static ItemCategory RangedWeapons5 { get; }` |
| `Shield1` | `public static ItemCategory Shield1 { get; }` |
| `Shield2` | `public static ItemCategory Shield2 { get; }` |
| `Shield3` | `public static ItemCategory Shield3 { get; }` |
| `Shield4` | `public static ItemCategory Shield4 { get; }` |
| `Shield5` | `public static ItemCategory Shield5 { get; }` |
| `Garment` | `public static ItemCategory Garment { get; }` |
| `LightArmor` | `public static ItemCategory LightArmor { get; }` |
| `MediumArmor` | `public static ItemCategory MediumArmor { get; }` |
| `HeavyArmor` | `public static ItemCategory HeavyArmor { get; }` |
| `UltraArmor` | `public static ItemCategory UltraArmor { get; }` |
| `HorseEquipment` | `public static ItemCategory HorseEquipment { get; }` |
| `HorseEquipment2` | `public static ItemCategory HorseEquipment2 { get; }` |
| `HorseEquipment3` | `public static ItemCategory HorseEquipment3 { get; }` |
| `HorseEquipment4` | `public static ItemCategory HorseEquipment4 { get; }` |
| `HorseEquipment5` | `public static ItemCategory HorseEquipment5 { get; }` |
| `Arrows` | `public static ItemCategory Arrows { get; }` |
| `Banners` | `public static ItemCategory Banners { get; }` |
| `Unassigned` | `public static ItemCategory Unassigned { get; }` |
| `Felt` | `public static ItemCategory Felt { get; }` |
| `Planks` | `public static ItemCategory Planks { get; }` |

## 使用示例

```csharp
var example = new DefaultItemCategories();
```

## 参见

- [完整类目录](../catalog)