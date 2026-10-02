---
title: "Equipment"
description: "装备槽容器：固定 12 个 EquipmentElement 槽位（0-4 武器、5-9 护甲、10 马具、11 披风），提供槽位合法性校验、装备码序列化与重量/护甲汇总。"
---
# Equipment

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Equipment`
**Base:** `System.Object`
**File:** `TaleWorlds.Core/Equipment.cs`

## 概述

装备不是可变字典，而是**固定长度 12 的数组**（`EquipmentSlotLength = 12`），每个元素是一个 [EquipmentElement](../EquipmentElement)（物品 + 品质修饰符 + 定制颜色）。槽位含义由 [EquipmentIndex](../EquipmentIndex) 枚举定义：0–4 是五个武器位，5–9 是护甲位，10 是马具（`Horse` 属性就是 `_itemSlots[10]`），11 是披风。

**它自身也被存档**：`[SaveableField(1)] _equipmentType` 和 `[SaveableField(2)] readonly EquipmentElement[] _itemSlots`。

设计上分三层：**槽位访问**（两个索引器 + `Horse`）、**约束校验**（`IsItemFitsToSlot` 静态判断 + 索引器 setter 里调它但**忽略返回值**）、**串行化**（`CalculateEquipmentCode` / `CreateFromEquipmentCode` 用 `槽位-物品-修饰符` 的格式）。

一个容易忽略的细节：**索引器 setter 调了 `Equipment.IsItemFitsToSlot((EquipmentIndex)index, value.Item);` 但丢弃了返回值**——也就是说这个校验**不阻止**非法装配，只是个无副作用调用。真正的拒绝逻辑在 `DeserializeNode` 里（那里检查返回值并回退到 `"Weapon0"`）。

## 心智模型

四种典型场景：

1. **从 XML / 装备码加载**。`Deserialize` 遍历子节点调 `DeserializeNode`；`CreateFromEquipmentCode("0-item-modifier+1-...")` 从 `+` 分段、`-` 取三段。
2. **运行时装备管理**。`Agent` / `Character` 的换装走 `this[EquipmentIndex.X] = new EquipmentElement(...)` 或 `AddEquipmentToSlotWithoutAgent`。
3. **派生统计**。`GetTotalWeightOfArmor(forHuman)` / `GetTotalWeightOfWeapons()` / `GetHeadArmorSum()` 等按槽位区间汇总。
4. **复制**。`Clone(cloneWithoutWeapons)` 清空 0–4 槽；`Equipment(Equipment)` 拷贝构造逐槽 `new EquipmentElement(equipment[i])`。

**最坑的一条是索引器 setter 忽略校验结果。** `equipment[EquipmentIndex.Weapon0] = someHorse;` **不会抛、不会拒绝**，马就被塞进武器槽了。之后 `GetTotalWeightOfWeapons()` 之类按区间汇总的逻辑会读到错误数据。想校验必须自己先调静态 `IsItemFitsToSlot`。

第二条：**`Horse` 属性硬编码索引 10**，不管 `EquipmentType` 是什么。人形装备的 `Horse` 读出来通常是空的 `EquipmentElement`。

第三条：**`CreateFromEquipmentCode` 不校验槽位合法性**。它直接 `equipment[num] = equipmentElement`，而索引器 setter 又不校验。所以一个畸形的装备码可以把马具写进武器槽。而 `DeserializeNode`（XML 路径）反而**有**校验并在失败时回退到 `"Weapon0"` 槽位——**两条加载路径的行为不一致**。

第四条：`CalculateEquipmentCode` 生成的串里，空槽位写的是 `NullCode`（`"@null"`）而不是省略。`CreateFromEquipmentCode` 对 `"@null"` 的物品段会跳过（但仍会读后面的段）。

常见误用：以为 `Clone()` 是深拷贝（槽位元素是**共享的同一个 `EquipmentElement` 引用**——`Clone` 走 `SetItem(i, this[i])` 没有 new）；对空 `Equipment` 调 `GetHeadArmorSum()` 之类区间方法（内部逐槽 `!IsEmpty` 判断，空槽跳过，安全）；用 `IsItemFitsToSlot` 之后忘了 `AddEquipmentToSlotWithoutAgent` 只是赋值不做任何其它事（名字里的 "WithoutAgent" 提示它不触发 agent 更新）。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public Equipment()` | 建 12 槽数组（元素是 `default(EquipmentElement)`），`_equipmentType = EquipmentType.Invalid`。**没有构造函数把 `EquipmentType` 设成 Battle/Civilian/Stealth 的无参版本之外的情况**——这个版本下槽位合法。 |
| `.ctor` | `public Equipment(Equipment.EquipmentType equipmentType)` | 同上但指定类型。**数组又 new 了一次**（先 `: this()` 再 `_itemSlots = new EquipmentElement[12]`，第一次分配的被丢弃）。 |
| `.ctor` | `public Equipment(Equipment equipment)` | 拷贝构造：逐槽 `new EquipmentElement(equipment[i])`（真正拷贝元素），`_equipmentType` 沿用。**这是比 `Clone()` 更深的拷贝。** |
| `this[int]` | `public EquipmentElement this[int index] { get; set; }` | 底层访问。setter 调 `IsItemFitsToSlot((EquipmentIndex)index, value.Item)` **但丢弃返回值**——非法装配照样写入。index 无范围校验。 |
| `this[EquipmentIndex]` | `public EquipmentElement this[EquipmentIndex index] { get; set; }` | 转发到 `this[(int)index]`。 |
| `Horse` | `public EquipmentElement Horse { get; }` | **硬编码 `_itemSlots[10]`**。人形装备读出来通常是空的。 |
| `ItemEquipmentType` | `public Equipment.EquipmentType ItemEquipmentType { get; }` | 只读返回 `_equipmentType`。区分 Battle / Civilian / Stealth / Invalid。 |
| `IsCivilian` / `IsBattle` / `IsStealth` | `public bool IsCivilian { get; }` / `IsBattle { get; }` / `IsStealth { get; }` | 都是 `_equipmentType == EquipmentType.X` 的比较。**`Invalid` 时三个全是 false。** |
| `Clone` | `public Equipment Clone(bool cloneWithoutWeapons = false)` | 新建同类型 `Equipment` 后逐槽 `SetItem`。`cloneWithoutWeapons` 为 true 时 **0–4 槽改写 `EquipmentElement.Invalid`**。**槽位元素是共享引用，不是深拷贝。** |
| `FillFrom` | `public void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)` | 逐槽覆盖（走 `this[i] = ...`，同样忽略合法性校验）。`useSourceEquipmentType` 为 false 时保留本对象的 `_equipmentType`。 |
| `Deserialize` | `public void Deserialize(MBObjectManager objectManager, XmlNode node)` | 遍历 `node.ChildNodes` 逐个 `DeserializeNode`。**没有先清空已有槽位**——对已装配的 Equipment 调它会叠加。 |
| `DeserializeNode` | `public void DeserializeNode(MBObjectManager objectManager, XmlNode node)` | 解析单个 `<EquipmentElement id="item" slot="..."/>`。注释节点直接 return。id 含 `.` 时取最后一段。`IsItemFitsToSlot` 失败时把局部变量 `text` 改成 `"Weapon0"`。**注意：它给 `EquipmentIndex` 赋的是解析出的槽位，而非强制 Weapon0。** |
| `GetEquipmentIndexFromOldEquipmentIndexName` | `public static EquipmentIndex GetEquipmentIndexFromOldEquipmentIndexName(string oldEquipmentIndexName)` | 旧版槽位名到 [EquipmentIndex](../EquipmentIndex) 的映射，未知名字 `Enum.Parse` 会抛 `ArgumentException`。 |
| `IsEmpty` | `public bool IsEmpty()` | 12 个槽的 `Item` 全部为 null。**不检查 `ItemModifier`。** |
| `GetTotalWeightOfArmor` | `public float GetTotalWeightOfArmor(bool forHuman)` | 区间汇总。`forHuman` 为 true 时从 `NumAllWeaponSlots` 累加到 `ArmorItemEndSlot`；为 false 时只算 `HorseHarness` 一段。空槽跳过。 |
| `GetTotalWeightOfWeapons` | `public float GetTotalWeightOfWeapons()` | 武器位区间逐槽 `GetEquipmentElementWeight()` 求和。 |
| `GetHeadArmorSum` / `GetHumanBodyArmorSum` / `GetLegArmorSum` / `GetArmArmorSum` | `public float GetHeadArmorSum()` 等 | 按护甲位区间累加 modified 值。`GetHorseArmorSum()` 只算 `HorseHarness` 的 `GetModifiedMountBodyArmor()`。 |
| `HairCoverType` / `BeardCoverType` / `ManeCoverType` | `public ArmorComponent.HairCoverTypes HairCoverType { get; }` 等 | 从头部/身体护甲的 `ArmorComponent` 里读遮蔽类型，枚举类型来自 [ArmorComponent](../ArmorComponent)。**没有头盔时通常返回枚举零值。** |
| `ReinsMeshName` | `public string ReinsMeshName { get; }` | 从马具读取的缰绳 mesh 名。 |
| `EarsAreHidden` / `MouthIsHidden` | `public bool EarsAreHidden { get; }` / `MouthIsHidden { get; }` | 马具/头部护甲对马耳与嘴部的遮蔽判定。 |
| `BodyMeshType` / `BodyDeformType` | `public ArmorComponent.BodyMeshTypes BodyMeshType { get; }` 等 | 从身体护甲读 mesh 类型与形变类型。 |
| `GetUnderwearType` | `public Equipment.UnderwearTypes GetUnderwearType(bool isFemale)` | 读 `[EquipmentIndex.Body]`。`Item == null` → `FullUnderwear`；`isFemale` 且 `item.DoesNotHideChest` → `OnlyTop`；否则 `NoUnderwear`。**这个反直觉的默认值是刻意的**：没穿胸甲视为全套内衣。 |
| `HasWeapon` | `public bool HasWeapon()` | 扫 0–4 槽：非空、`ItemType != Invalid`、且 `PrimaryWeapon.WeaponFlags.HasAnyFlag(WeaponFlags.WeaponMask)`。**`PrimaryWeapon` 对空武器位会 NRE 吗？不会**——`!equipmentElement.IsEmpty` 短路在前。 |
| `HasWeaponOfClass` | `public bool HasWeaponOfClass(WeaponClass weaponClass)` | 扫 0–4 槽比 `PrimaryWeapon.WeaponClass`。同样先判 `IsEmpty`。 |
| `CreateFromEquipmentCode` | `public static Equipment CreateFromEquipmentCode(string equipmentCode)` | 解析 `槽位-物品-修饰符` 用 `+` 连接、`-` 分隔的串。**先用 `default(EquipmentElement)` 填满 12 槽**，物品段为 `NullCode`（`"@null"`）时跳过该项。**不做槽位合法性校验**。格式错误（段数不足 3）会 `IndexOutOfRangeException`。 |
| `CalculateEquipmentCode` | `public string CalculateEquipmentCode()` | 反向生成。用 `MBStringBuilder(16, ...)`，空槽写 `NullCode`。 |
| `AddEquipmentToSlotWithoutAgent` | `public void AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)` | 纯赋值（走索引器 setter，忽略校验）。名字里的 "WithoutAgent" 表示**不触发 agent 侧的装备更新**。 |
| `GetEquipmentFromSlot` | `public EquipmentElement GetEquipmentFromSlot(EquipmentIndex equipmentIndex)` | 转发 `this[equipmentIndex]`。 |
| `IsItemFitsToSlot` | `public static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)` | **唯一的槽位合法性判断**。`item == null` → true。`Invalid` 类型 → false。`Horse` → 只允许 `ArmorItemEndSlot`。`OneHandedWeapon` / `TwoHandedWeapon` / `Polearm` / `Cape` → 只允许 `Cape` 槽。`HorseHarness` → 只允许 `HorseHarness` 槽。**其它类型（Goods / Banner / 未列举的）落到 default，返回 `flag` 初值 false。** |
| `GetWeaponPickUpSlotIndex` | `public EquipmentIndex GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)` | 武器位满时的落位计算：物品带 `DropOnWeaponChange` 或 `DropOnAnyAction` 标志 → 直接返回 `ExtraWeaponSlot`；否则从 `WeaponItemBeginSlot` 往后找第一个空槽；**全满时保持 `EquipmentIndex.None`**。 |
| `IsEquipmentEqualTo` | `public bool IsEquipmentEqualTo(Equipment other)` | `other == null` → false。逐槽 `IsEqualTo`，最后还要求 `IsStealth` / `IsCivilian` / `IsBattle` 三项都相同。**比类型，不只比内容。** |
| `GetRandomEquipmentElements` | `public static Equipment GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, Equipment.EquipmentType equipmentType, int seed = -1)` | 从 `character.BattleEquipments` / `CivilianEquipments` 里挑一套，逐槽复制；`randomEquipmentModifier` 为 true 时给每个槽随机一个 `ItemModifier`（经 `ItemModifierGroup.GetRandomItemModifierLootScoreBased()`）。**传 `seed = -1` 走无种子随机。** |
| `SwapWeapons` | `public static void SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)` | 三行交换。**不做槽位校验**——可以把马具和武器对调。 |
| `GetInitialWeaponIndicesToEquip` | `public void GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = Equipment.InitialWeaponEquipPreference.Any)` | 初始化 AI / 单位时选主副手武器槽位。三个 `out` 先被置为 `None` / `None` / `false`，再按偏好（`Any` / `MeleeForMainHand` / `RangedForMainHand`）填充。 |
| `EquipmentSlotLength` | `public const int EquipmentSlotLength = 12` | 槽位总数常量。**代码里大量地方直接写 12 而不是用它。** |
| `NullCode` | `public const string NullCode = "@null"` | 装备码里的空位占位符。`CreateFromEquipmentCode` 与 `CalculateEquipmentCode` 共用。 |
| `SyncEquipments` | `public bool SyncEquipments` | **公开可写字段**（不是属性），控制该装备是否参与同步。 |
| `EquipmentType` | `public enum EquipmentType { Invalid = -1, Battle, Civilian, Stealth }` | 装备用途分类。`Invalid = -1` 是显式赋值，序列化时能区分。 |
| `UnderwearTypes` | `public enum UnderwearTypes { NoUnderwear, FullUnderwear, OnlyTop }` | 内衣可见性分类。 |
| `InitialWeaponEquipPreference` | `public enum InitialWeaponEquipPreference { Any, MeleeForMainHand, RangedForMainHand }` | 初始选主手武器的偏好。 |

## 真实示例

装配前先校验（因为索引器 setter 不拦）：

```csharp
Equipment equipment = new Equipment(Equipment.EquipmentType.Battle);

if (Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon0, sword))
{
    equipment.AddEquipmentToSlotWithoutAgent(
        EquipmentIndex.Weapon0,
        new EquipmentElement(sword, null, null, false));
}
else
{
    Debug.Print("sword does not fit Weapon0", 0);
}
```

汇总派生数据（移动速度、体力消耗都基于这些）：

```csharp
Equipment equipment = agentVisualHolder.GetEquipment();

float armorWeight = equipment.GetTotalWeightOfArmor(true);
float weaponWeight = equipment.GetTotalWeightOfWeapons();
float legArmor = equipment.GetLegArmorSum();
float horseArmor = equipment.GetHorseArmorSum();

bool hasBow = equipment.HasWeaponOfClass(WeaponClass.Bow);
bool hasAnyWeapon = equipment.HasWeapon();

Debug.Print("armor " + armorWeight + " weapons " + weaponWeight, 0);
Debug.Print("bow=" + hasBow + " any=" + hasAnyWeapon, 0);
```

装备码往返（存档/复制粘贴/云同步都用这个串）：

```csharp
Equipment source = agentVisualHolder.GetEquipment();
string code = source.CalculateEquipmentCode();

Equipment restored = Equipment.CreateFromEquipmentCode(code);
bool same = restored.IsEquipmentEqualTo(source);
Debug.Print("round-trip identical: " + same, 0);
```

空槽与深浅拷贝的区别（注意 `Clone` 共享元素引用）：

```csharp
Equipment full = agentVisualHolder.GetEquipment();
Equipment noWeapons = full.Clone(true);          // 0-4 槽清空
Equipment deep = new Equipment(full);            // 逐槽 new EquipmentElement
Equipment stolen = full[EquipmentIndex.Body];     // 引用共享

Debug.Print("steal: " + stolen.Item.StringId, 0);
```

## 风险与边界

- **索引器 setter 丢弃合法性校验。** `IsItemFitsToSlot` 的返回值被忽略，非法装配照样写入。**必须自己先调静态方法。**
- **`CreateFromEquipmentCode` 完全不校验槽位。** 畸形装备码能把马具写进武器槽。XML 路径的 `DeserializeNode` 反而有校验——**两条加载路径行为不一致**。
- **`Clone` 不是深拷贝。** 它把同一个 `EquipmentElement` 引用赋过去（只有 `cloneWithoutWeapons` 时换成 `Invalid`）。要真正独立用 `new Equipment(source)`。修改克隆体会影响原装备。
- **`Horse` 硬编码索引 10。** 人形装备读出来通常是空的 `EquipmentElement`（不是 null）。
- **`IsItemFitsToSlot` 漏判常见类型。** `Goods` / `Banner` / `Arrows` / `Bolts` 等都落到 `default` 分支返回 `false`。**用它判断「这个物品能不能放进任何槽」会误判。**
- **`Deserialize` 不清空已有槽位。** 对已装配的 `Equipment` 调它会叠加而不是替换。
- **`GetUnderwearType` 的默认是 `FullUnderwear`。** `[EquipmentIndex.Body]` 为空时返回「全套内衣」而不是「无内衣」。做内衣判定时注意这个反向默认。
- **`GetEquipmentIndexFromOldEquipmentIndexName` 用 `Enum.Parse`。** 未知名字抛 `ArgumentException`，不返回 `None`。
- **`SwapWeapons` 不校验槽位。** 能把任何两个槽对调。
- **`SyncEquipments` 是公开可写字段。** 没有封装，同步行为受外部随意改写影响。
- **`GetRandomEquipmentElements` 依赖 `character.BattleEquipments` / `CivilianEquipments`。** 这两个集合来自 [BasicCharacterObject](../BasicCharacterObject) 的 XML 加载，未加载完时是空的。
- **存档兼容。** `_itemSlots` 是 `[SaveableField(2)]`，槽位下标是存档 ABI。官方改 `EquipmentIndex` 顺序会让旧存档的装备错位。
- **无并发保护。** 12 槽数组无锁，跨线程换装与读取有竞态。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/Equipment.cs` 逐行比对，**public 表面完全一致**：3 个构造器、两个索引器、`Horse` / `ItemEquipmentType` / `IsCivilian` / `IsBattle` / `IsStealth`、`Clone` / `FillFrom` / `Deserialize` / `DeserializeNode`、`GetEquipmentIndexFromOldEquipmentIndexName`、`IsEmpty`、8 个重量/护甲汇总方法、5 个遮蔽/形变属性、`GetUnderwearType`、`HasWeapon` / `HasWeaponOfClass`、`CreateFromEquipmentCode` / `CalculateEquipmentCode`、`AddEquipmentToSlotWithoutAgent` / `GetEquipmentFromSlot` / `IsItemFitsToSlot` / `GetWeaponPickUpSlotIndex` / `IsEquipmentEqualTo` / `GetRandomEquipmentElements` / `SwapWeapons` / `GetInitialWeaponIndicesToEquip`、`EquipmentSlotLength` / `NullCode` / `SyncEquipments` 与三个嵌套枚举全都没变；`Equipment(EquipmentType)` 里的重复 new 数组、`GetUnderwearType` 的 `FullUnderwear` 默认都在两版一致。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/Equipment.cs`（653 行）与 `bannerlord-1.4.6/TaleWorlds.Core/Equipment.cs`（930 行）逐成员比对 public/protected 表面。**与 1.4.6 的 public 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**（各 46 个成员）。**本段上文「1.3.15 与 1.4.6 完全一致」的说法要修正**：1.4.5 的 `Equipment.cs` 第 48 行已有 `public EquipmentType ItemEquipmentType => _equipmentType;`，而 1.3.15 整份 `Equipment.cs` 搜不到 `ItemEquipmentType` —— 该属性是 **1.3.15 → 1.4.5 之间**新增的，1.4.5 与 1.4.6 一致。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 元素类型：[EquipmentElement](../EquipmentElement)（物品 + 品质修饰符 + 定制颜色）
- 槽位枚举：[EquipmentIndex](../EquipmentIndex) 定义 12 个槽位的语义，索引器与所有区间汇总方法都依赖它
- 物品侧：[ItemObject](../ItemObject) 的 `ItemType` 决定 `IsItemFitsToSlot` 的判定结果
- 护甲组件：[ArmorComponent](../ArmorComponent) 提供 `HairCoverTypes` / `BeardCoverTypes` / `BodyMeshTypes` / `BodyDeformTypes` / `HorseHarnessCoverTypes` 这些枚举与 `GetModifiedMountBodyArmor()`
- 角色容器：[BasicCharacterObject](../BasicCharacterObject) 的 `BattleEquipments` / `CivilianEquipments`（都是 `IEnumerable<Equipment>`）是 `GetRandomEquipmentElements` 的数据源
- 存档：`_equipmentType` 与 `_itemSlots` 分别标了 `[SaveableField(1)]` / `[SaveableField(2)]`，由 [SaveManager](../../save-system/SaveManager) 落盘
- 桶首页：[core-extra API 分区](../)
