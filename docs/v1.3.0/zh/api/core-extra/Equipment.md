<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Equipment`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Equipment

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Equipment`
**Base:** 无
**File:** `TaleWorlds.Core/Equipment.cs`

## 概述

`Equipment` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCivilian` | `public bool IsCivilian { get; }` |
| `IsBattle` | `public bool IsBattle { get; }` |
| `IsStealth` | `public bool IsStealth { get; }` |
| `this` | `public EquipmentElement this { get; set; }` |
| `this` | `public EquipmentElement this { get; set; }` |
| `Horse` | `public EquipmentElement Horse { get; }` |
| `HairCoverType` | `public ArmorComponent.HairCoverTypes HairCoverType { get; }` |
| `BeardCoverType` | `public ArmorComponent.BeardCoverTypes BeardCoverType { get; }` |
| `ManeCoverType` | `public ArmorComponent.HorseHarnessCoverTypes ManeCoverType { get; }` |
| `ReinsMeshName` | `public string ReinsMeshName { get; }` |
| `EarsAreHidden` | `public bool EarsAreHidden { get; }` |
| `MouthIsHidden` | `public bool MouthIsHidden { get; }` |
| `BodyMeshType` | `public ArmorComponent.BodyMeshTypes BodyMeshType { get; }` |
| `BodyDeformType` | `public ArmorComponent.BodyDeformTypes BodyDeformType { get; }` |

## 主要方法

### Clone
`public Equipment Clone(bool cloneWithoutWeapons = false)`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### FillFrom
`public void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### Deserialize
`public void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### DeserializeNode
`public void DeserializeNode(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize node` 相关逻辑。

### GetEquipmentIndexFromOldEquipmentIndexName
`public static EquipmentIndex GetEquipmentIndexFromOldEquipmentIndexName(string oldEquipmentIndexName)`

**用途 / Purpose:** 获取 `equipment index from old equipment index name` 的当前值。

### IsEmpty
`public bool IsEmpty()`

**用途 / Purpose:** 处理 `is empty` 相关逻辑。

### GetTotalWeightOfArmor
`public float GetTotalWeightOfArmor(bool forHuman)`

**用途 / Purpose:** 获取 `total weight of armor` 的当前值。

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

**用途 / Purpose:** 获取 `total weight of weapons` 的当前值。

### GetHeadArmorSum
`public float GetHeadArmorSum()`

**用途 / Purpose:** 获取 `head armor sum` 的当前值。

### GetHumanBodyArmorSum
`public float GetHumanBodyArmorSum()`

**用途 / Purpose:** 获取 `human body armor sum` 的当前值。

### GetLegArmorSum
`public float GetLegArmorSum()`

**用途 / Purpose:** 获取 `leg armor sum` 的当前值。

### GetArmArmorSum
`public float GetArmArmorSum()`

**用途 / Purpose:** 获取 `arm armor sum` 的当前值。

### GetHorseArmorSum
`public float GetHorseArmorSum()`

**用途 / Purpose:** 获取 `horse armor sum` 的当前值。

### GetUnderwearType
`public Equipment.UnderwearTypes GetUnderwearType(bool isFemale)`

**用途 / Purpose:** 获取 `underwear type` 的当前值。

### HasWeapon
`public bool HasWeapon()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `weapon`。

### HasWeaponOfClass
`public bool HasWeaponOfClass(WeaponClass weaponClass)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `weapon of class`。

### CreateFromEquipmentCode
`public static Equipment CreateFromEquipmentCode(string equipmentCode)`

**用途 / Purpose:** 创建一个 `from equipment code` 实例或对象。

### CalculateEquipmentCode
`public string CalculateEquipmentCode()`

**用途 / Purpose:** 处理 `calculate equipment code` 相关逻辑。

### AddEquipmentToSlotWithoutAgent
`public void AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)`

**用途 / Purpose:** 向当前集合/状态中添加 `equipment to slot without agent`。

### GetEquipmentFromSlot
`public EquipmentElement GetEquipmentFromSlot(EquipmentIndex equipmentIndex)`

**用途 / Purpose:** 获取 `equipment from slot` 的当前值。

### IsItemFitsToSlot
`public static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)`

**用途 / Purpose:** 处理 `is item fits to slot` 相关逻辑。

### GetWeaponPickUpSlotIndex
`public EquipmentIndex GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)`

**用途 / Purpose:** 获取 `weapon pick up slot index` 的当前值。

### IsEquipmentEqualTo
`public bool IsEquipmentEqualTo(Equipment other)`

**用途 / Purpose:** 处理 `is equipment equal to` 相关逻辑。

### GetRandomEquipmentElements
`public static Equipment GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, Equipment.EquipmentType equipmentType, int seed = -1)`

**用途 / Purpose:** 获取 `random equipment elements` 的当前值。

### SwapWeapons
`public static void SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)`

**用途 / Purpose:** 处理 `swap weapons` 相关逻辑。

### GetInitialWeaponIndicesToEquip
`public void GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = Equipment.InitialWeaponEquipPreference.Any)`

**用途 / Purpose:** 获取 `initial weapon indices to equip` 的当前值。

## 使用示例

```csharp
var value = new Equipment();
value.Clone(false);
```

## 参见

- [完整类目录](../catalog)