---
title: "Equipment"
description: "固定 12 槽的装备容器：0-4 武器、5-9 护甲、10 马匹、11 马具，装备集由 MBEquipmentRoster 的 <EquipmentSet> 节点装配，也能编成 @null 占位串往返传递。"
---

# Equipment

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Equipment`
**Base:** 无（不继承任何类型，`Equipment` 是顶层类）
**File:** `TaleWorlds.Core/Equipment.cs`（全文 927 行）

## 概述

`Equipment` 是一个**固定 12 槽的装备容器**。每个槽存一个 [EquipmentElement](../EquipmentElement)（`ItemObject` + 可选 `ItemModifier` + 任务物品标志），没有动态增删，没有字典，全部靠 `EquipmentIndex` 枚举下标访问。

12 个槽位的实际布局是这样的（枚举里有几个别名值，写循环边界时极易搞错）：

| 下标 | 枚举名 | 放什么 |
| --- | --- | --- |
| 0–3 | `Weapon0` `Weapon1` `Weapon2` `Weapon3` | 四把常规武器 |
| 4 | `ExtraWeaponSlot` | 弹药 / 投掷物 / 横幅等带 `DropOnWeaponChange` 或 `DropOnAnyAction` 标志的物品 |
| 5–9 | `Head` `Body` `Leg` `Gloves` `Cape` | 护甲区 |
| 10 | `Horse` | 马匹 |
| 11 | `HorseHarness` | 马具（挽具） |

几个必须记住的枚举别名，它们是同一批数字的不同叫法：`NonWeaponItemBeginSlot` = `ArmorItemBeginSlot` = `NumAllWeaponSlots` = `Head` = **5**；`NumAllArmorSlots` = **5**（不是 6！它是「数量」不是「边界」）；`ArmorItemEndSlot` = `Horse` = **10**；`NumEquipmentSetSlots` = **12**。全类里的循环几乎都写成 `for (EquipmentIndex i = A; i < B; i++)`，一旦把 `NumAllArmorSlots`(5) 当成结束边界，护甲区就一个槽都遍历不到。

它有三个用途，形状完全不同：

1. **作为英雄属性**——[Hero](../../campaign/Hero) 的 `BattleEquipment` / `CivilianEquipment`（`Hero.cs:579/589`），空的时候回退到 `Campaign.Current.DeadBattleEquipment`。
2. **作为 XML 装备集**——[MBEquipmentRoster](../MBEquipmentRoster) 里的 `<EquipmentSet>` 节点，一个角色可以有多个装备集（`AllEquipments`），战斗/民用各选一套。
3. **作为字符串**——`CalculateEquipmentCode()` 把它压成 `+0-item-modifier+1-item-modifier...` 这样一串，[CharacterData](../../campaign/CharacterData) 存自定义角色、UI 层传给 `CharacterTableau`、自定义英雄预览界面全走这条。

类尾部还有三个枚举和两个常量：`EquipmentType { Invalid = -1, Battle, Civilian, Stealth }`（决定「战斗 / 民用 / 潜行」是同一个 `Equipment` 的哪一面）、`UnderwearTypes`（给角色建模判定胸部遮挡）、`InitialWeaponEquipPreference`（开局选主副手的偏好），以及 `EquipmentSlotLength = 12` 和 `NullCode = "@null"`。

## 心智模型

**装配：XML 这一路是唯一的官方途径。** 形态大致是这样：

```xml
<EquipmentRoster id="empire_nobleman" culture="empire">
  <Flags CoversHead="true" />
  <EquipmentSet equipmentType="Battle">
    <Item id="empire.nobleman_sword" slot="Weapon0" />
    <Item id="empire.nobleman_armor" slot="Body" />
    <Item id="empire.charger"      slot="Horse" />
  </EquipmentSet>
  <EquipmentSet civilian="true">
    <Item id="empire.nobleman_tunic" slot="Body" />
  </EquipmentSet>
</EquipmentRoster>
```

`MBEquipmentRoster.Deserialize` 遍历子节点，见 `<EquipmentSet>` 调 `InitEquipment`，见 `<Flags>` 解析 [EquipmentFlags](../ItemFlags)。`InitEquipment` 先定类型：优先读 `equipmentType` 属性并 `Enum.TryParse`（解析失败走 `Debug.FailedAssert("This equipment definition is wrong")`），没有这个属性才看 `civilian="true"` → `Civilian`；然后 `new Equipment(equipmentType)`，把这个节点的**所有子节点**交给 `Equipment.Deserialize`，加进 `_equipments`，最后 `AfterInitialized()`。

真正干活的是 `DeserializeNode`，它的行为比想象中更宽松也更脆弱，有五条必须记住：

- **它从不检查 `node.Name`。** 上面例子里的 `<Item>` 只是习惯写法；`<Foo id="..." slot="..."/>` 一样会被处理。所以改标签名不会报错。
- **它只跳过 `Comment`。** `node.NodeType == XmlNodeType.Comment` 才 return。文本 / 空白节点（`XmlNodeType.Text` / `Whitespace`）会一路走到 `node.Attributes["id"]`，那里是 `null` → **NRE**。实际不炸是因为 .NET 的 XML reader 默认 `PreserveWhitespace = false` 会把纯缩进剥掉；一旦你的加载链打开了保留空白，这里就崩。
- **`id` 属性允许带命名空间前缀。** `xmlAttribute.Value.Contains(".")` 时取 `Split('.')[1]`，所以 `empire.nobleman_sword` 和 `nobleman_sword` 都能查到同一个物品。
- **`slot` 属性支持旧名。** `GetEquipmentIndexFromOldEquipmentIndexName` 把 `Item0..Item4` 映射成 `Weapon0` `Weapon1` `Weapon2` `Weapon3` `ExtraWeaponSlot`，其它字符串原样交给 `Enum.Parse(typeof(EquipmentIndex), value)`——**写错名字不是忽略，是直接抛异常**。
- **形配失败只断言，不拒绝。** `if (Equipment.IsItemFitsToSlot(...))` 成立就写入，否则 `Debug.FailedAssert("... does not fit to slot ...")`，**槽位保持原值**。发布版里 `FailedAssert` 不会中断加载，于是你会得到一条断言日志 + 一个静默少了一件装备的装备集。

顺带一个反直觉点：`Deserialize(MBObjectManager objectManager, XmlNode node)` 有 `objectManager` 参数，`DeserializeNode` 也收下并继续转发——但 `DeserializeNode` 内部取物品时用的是**静态** `MBObjectManager.Instance.GetObject<ItemObject>(objectName)`，那个传进来的 `objectManager` 从头到尾没被用过。想在自定义对象管理器下装配装备，这条路做不到。

**写入：setter 不做任何校验。** `this[int]` 的 setter 是这样：

```csharp
set
{
    Equipment.IsItemFitsToSlot((EquipmentIndex)index, value.Item);   // 返回值被丢弃
    this._itemSlots[index] = value;
}
```

`IsItemFitsToSlot` 被调用了，**结果直接扔掉**，然后无条件写入。所以「把一把剑塞进 Body 槽」在 API 层面畅通无阻，只会在下游某个读 `ArmorComponent` 的地方炸掉。同理 `AddEquipmentToSlotWithoutAgent(EquipmentIndex, EquipmentElement)` 也只是 `this[equipmentIndex] = itemRosterElement` 的别名，没有任何额外检查。**校验只存在于 XML 装配路径上**（以断言形式）。

**克隆与拷贝有三种，别混。** `Clone(bool cloneWithoutWeapons = false)` 是浅拷贝槽位元素：`bool flag = cloneWithoutWeapons && i >= 0 && i < 5`，那个 `i >= 0` 恒真（反编译遗留的无符号比较），所以实际语义就是「`true` 就清空槽 0–4」。它**不拷贝 `SyncEquipments` 标志**。`Equipment(Equipment equipment)` 拷贝构造器则逐槽 `new EquipmentElement(equipment[i])`，把 `Item` / `ItemModifier` / `CosmeticItem` / `IsQuestItem` 四个字段都带走，并拷贝 `_equipmentType`，同样不拷 `SyncEquipments`。

**代码串往返会丢类型。** `CalculateEquipmentCode()` 对每个槽输出 `+<下标>-<itemId|@null>-<modifierId|@null>`（注意**每段前面都带 `+`**，所以结果串以 `+` 开头）。`CreateFromEquipmentCode` 反解时第一句是 `Equipment equipment = new Equipment();`——走的是**无参构造器**，`_equipmentType` 被设成 `Equipment.EquipmentType.Invalid`。于是往返之后 `IsBattle` / `IsCivilian` / `IsStealth` **三个全为 false**，而 `IsEquipmentEqualTo` 恰好把三项都纳入比较，所以「编码 → 解码 → 和原件比较」必然返回 false。UI 层用它来传装备是安全的（只关心物品和词缀），但拿它做装备集 diff 会得到假阴性。往返还会丢掉 `IsQuestItem` 和 `CosmeticItem`。另外反解时 `array2[2]` 是无条件取值，少一段就 `IndexOutOfRangeException`。

**读：那些 `GetXxxSum()` 名字骗人。** `GetHeadArmorSum()` / `GetHumanBodyArmorSum()` / `GetLegArmorSum()` / `GetArmArmorSum()` 四个方法的循环体**完全一样**：

```csharp
for (EquipmentIndex i = EquipmentIndex.NumAllWeaponSlots; i < EquipmentIndex.ArmorItemEndSlot; i++)
```

也就是 5..9，**整块护甲区**；它们之间的唯一差别是调用 [EquipmentElement](../EquipmentElement) 上的 `GetModifiedHeadArmor()` / `GetModifiedBodyArmor()` / `GetModifiedLegArmor()` / `GetModifiedArmArmor()`。所以「头部护甲之和」实际是「把每件护甲的头部减伤加总」——一件护胸也会贡献头部减伤。这不是 bug，是护甲减伤在游戏里本来就是分区叠加计算的；只是名字很容易让人以为它在只读 Head 槽。

**外观属性全是从 ArmorComponent 现算的。** `HairCoverType` / `BeardCoverType` / `BodyMeshType` / `BodyDeformType` / `ReinsMeshName` 都是「取某个槽的 `Item` → `item.ArmorComponent` → 读一个枚举/字符串」，没有缓存。其中 `HairCoverType` 有一处特殊兜底：**头部槽为空且身体槽也为空时返回 `Type4`**（其余空槽情况返回 `None`）；`BodyMeshType` 空槽返回 `Normal`，`BodyDeformType` 空槽返回 `Medium`，`ReinsMeshName` 空槽返回 `""`（不是 null）。

**两个方法有 NRE 隐患。** `HasWeapon()` / `HasWeaponOfClass()` 都走 `equipmentElement.Item.PrimaryWeapon`，而 [ItemObject](../ItemObject) 的 `PrimaryWeapon` 在该物品没有 `WeaponComponent` 时返回 `null`。`IsItemFitsToSlot` 允许 Shield 落进 0–3 号武器槽，所以只要有一个不带 `WeaponComponent` 的物品待在武器槽上，调这两个方法就会 NRE。

**还有一个明确未使用的参数。** `GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)` 的方法体从头到尾**没有引用 `isStuckMissile`**——它在 `1.3.0`、`1.3.15`、`1.4.6` 三份源码里逐字相同，所以这是 API 本身的性质，不是反编译噪音。传 true 或 false 结果完全一样。函数逻辑本身很简单：物品带 `DropOnWeaponChange | DropOnAnyAction` 就只能进 `ExtraWeaponSlot`，否则返回 0–3 里第一个空槽，全满则返回 `None`。

**存档：`Equipment` 是真进存档的。** 两个字段都带 `[SaveableField]`：`_equipmentType` 是 1 号字段，`readonly EquipmentElement[12] _itemSlots` 是 2 号字段；`AutoGeneratedInstanceCollectObjects` 里 `collectedObjects.Add(this._itemSlots)`。这跟 [ItemComponent](../ArmorComponent) 那类「不进存档、随 XML 重建」的设计正好相反——**装备是英雄/角色的存档数据，物品定义不是**。改装备 XML 不会破坏旧存档，但旧存档里已保存的装备按旧数值生效。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `EquipmentSlotLength` | `public const int EquipmentSlotLength = 12` | 槽位数常量，等于 `EquipmentIndex.NumEquipmentSetSlots`。`Enum.Parse` 拿它转字符串用，不要拿它当上界去和 `EquipmentIndex` 比较。 |
| `NullCode` | `public const string NullCode = "@null"` | 编码里表示「空」的占位符。`CalculateEquipmentCode` 用它、`CreateFromEquipmentCode` 认它；自己拼代码串时必须一字不差。 |
| `SyncEquipments` | `public bool SyncEquipments` | 公开字段，标志这套装备要与 AI/同伴同步。由 `CharacterObject` 在两处（`CharacterObject.cs:438` 和 `:442`）置 `true`。**`Clone` 和拷贝构造器都不搬这个字段**，克隆出来的装备默认不同步。 |
| `EquipmentType` | `public enum EquipmentType { Invalid = -1, Battle, Civilian, Stealth }` | 装备集的类型标签。无参构造器给的是 `Invalid`。`IsBattle` / `IsCivilian` / `IsStealth` 三个属性都是对它做相等比较。 |
| `UnderwearTypes` | `public enum UnderwearTypes { NoUnderwear, FullUnderwear, OnlyTop }` | `GetUnderwearType(bool isFemale)` 的返回值，给角色建模判定胸部是否被遮挡。 |
| `InitialWeaponEquipPreference` | `public enum InitialWeaponEquipPreference { Any, MeleeForMainHand, RangedForMainHand }` | 开局选主手武器时的偏好：`GetInitialWeaponIndicesToEquip` 的第四个参数。 |
| `IsCivilian` / `IsBattle` / `IsStealth` | `public bool ... { get; }` | 三个互斥的类型判定，各自读 `_equipmentType` 与某个枚举值比较。**`EquipmentType.Invalid` 时三者全为 false**，`IsEquipmentEqualTo` 和 `GetRandomEquipmentElements` 都依赖这一点。 |
| `this[int]` | `public EquipmentElement this[int index] { get; set; }` | 按整型下标读写。setter 调用 `IsItemFitsToSlot` 但**丢弃结果**，不做任何拦截；越界下标直接 `IndexOutOfRangeException`。 |
| `this[EquipmentIndex]` | `public EquipmentElement this[EquipmentIndex index] { get; set; }` | 按枚举读写的便捷重载，setter 只是 `this[(int)index] = value`。**优先用这个**，写错名字编译期就报错。 |
| `Horse` | `public EquipmentElement Horse { get; }` | 等价于 `this[EquipmentIndex.Horse]`，即下标 10。只读 getter；要写就用索引器。 |
| `.ctor` | `public Equipment()` | 建 12 个空槽，类型设 `Invalid`。`CreateFromEquipmentCode` 用的就是它，所以解出来的装备三个类型标记全 false。 |
| `.ctor` | `public Equipment(Equipment.EquipmentType equipmentType)` | 建 12 个空槽并给定类型。`MBEquipmentRoster.InitEquipment` 用它。 |
| `.ctor` | `public Equipment(Equipment equipment)` | 深拷贝构造器：逐槽 `new EquipmentElement(equipment[i])`（连 `CosmeticItem` 和 `IsQuestItem` 一起带走），并拷贝 `_equipmentType`。**不拷 `SyncEquipments`。** |
| `Clone` | `public Equipment Clone(bool cloneWithoutWeapons = false)` | 浅克隆。传 `true` 会把 0–4 号槽替换成 `EquipmentElement.Invalid`（丢所有武器和弹药）。官方代码里清一色传 `false`。 |
| `FillFrom` | `public void FillFrom(Equipment sourceEquipment, bool useSourceEquipmentType = true)` | 用另一套装备**填满全部 12 槽**并（可选）连类型一起接收。`MBEquipmentRoster.InitializeDefaultEquipment` 用它把默认装备灌进第一套。 |
| `Deserialize` | `public void Deserialize(MBObjectManager objectManager, XmlNode node)` | XML 装配入口，遍历 `node.ChildNodes` 逐个转交 `DeserializeNode`。**自己不用 `objectManager`**，只做转发。 |
| `DeserializeNode` | `public void DeserializeNode(MBObjectManager objectManager, XmlNode node)` | 真正解析单个槽位节点。跳过注释；读 `id`（可带 `点分前缀`）和 `slot`（可写旧名 `Item0..Item4`）；**不检查 `node.Name`**；用静态 `MBObjectManager.Instance` 查物品；形配不上只 `Debug.FailedAssert`。 |
| `GetEquipmentIndexFromOldEquipmentIndexName` | `public static EquipmentIndex GetEquipmentIndexFromOldEquipmentIndexName(string oldEquipmentIndexName)` | 静态方法，把 `Item0..Item4` 翻译成现代槽位名，其它字符串**原样 `Enum.Parse`**——传错名字抛 `ArgumentException`，不返回 `None`。 |
| `IsItemFitsToSlot` | `public static bool IsItemFitsToSlot(EquipmentIndex slotIndex, ItemObject item)` | 物品/槽位的合法配对表。`item == null` 返回 `true`（清槽永远合法）；按 `ItemType` 大 switch。**`Goods` 和 `ChestArmor` 不在 switch 里，落到初始值 `false`**——这两类物品无法通过校验装进任何槽。带 `DropOnWeaponChange`/`DropOnAnyAction` 的武器类物品只能进 `ExtraWeaponSlot`，其余武器类只能进 0–3。 |
| `AddEquipmentToSlotWithoutAgent` | `public void AddEquipmentToSlotWithoutAgent(EquipmentIndex equipmentIndex, EquipmentElement itemRosterElement)` | 不涉及 Agent 的写槽口，实现就是 `this[equipmentIndex] = itemRosterElement`。功能上和索引器 setter 完全相同，区别只是调用点更明确。 |
| `GetEquipmentFromSlot` | `public EquipmentElement GetEquipmentFromSlot(EquipmentIndex equipmentIndex)` | `return this[equipmentIndex];` 的纯别名。`GetRandomizedEquipment` 内部走它。 |
| `IsEmpty` | `public bool IsEmpty()` | 12 个槽的 `Item` 全为 null 时返回 true。`Hero` 在 `BattleEquipment.IsEmpty()` 时会用模板克隆一套装备进去。 |
| `GetTotalWeightOfArmor` | `public float GetTotalWeightOfArmor(bool forHuman)` | `forHuman == true` 遍历护甲区 5..9；`false` 只遍历 `HorseHarness`..`NumEquipmentSetSlots`，也就是**仅马具一项**。逐槽调 `EquipmentElement.GetEquipmentElementWeight()`。 |
| `GetTotalWeightOfWeapons` | `public float GetTotalWeightOfWeapons()` | 遍历 `WeaponItemBeginSlot`(0) 到 `NumAllWeaponSlots`(5)，即武器区 0–4，逐槽累加重量。 |
| `GetHeadArmorSum` | `public float GetHeadArmorSum()` | 遍历**整个护甲区** 5..9，对每件非空装备累加 `GetModifiedHeadArmor()`。名字里的 "Head" 指的是减伤部位，**不是只读 Head 槽**。 |
| `GetHumanBodyArmorSum` | `public float GetHumanBodyArmorSum()` | 与上面循环范围完全相同，只是换成 `GetModifiedBodyArmor()`。三个护甲 Sum 方法的差异仅在此一行。 |
| `GetLegArmorSum` | `public float GetLegArmorSum()` | 同范围，换成 `GetModifiedLegArmor()`。 |
| `GetArmArmorSum` | `public float GetArmArmorSum()` | 同范围，换成 `GetModifiedArmArmor()`。 |
| `GetHorseArmorSum` | `public float GetHorseArmorSum()` | **不是循环**，直接取 `HorseHarness`（下标 11）一个槽的 `GetModifiedMountBodyArmor()`。 |
| `HasWeapon` | `public bool HasWeapon()` | 遍历 0..4，判断 `PrimaryWeapon.WeaponFlags` 是否含 `WeaponMask`。**`PrimaryWeapon` 为 null 时 NRE**——没有 `WeaponComponent` 的物品待在武器槽就会触发。 |
| `HasWeaponOfClass` | `public bool HasWeaponOfClass(WeaponClass weaponClass)` | 同样遍历 0..4，比对 `PrimaryWeapon.WeaponClass`。同样有 null 隐患。 |
| `CreateFromEquipmentCode` | `public static Equipment CreateFromEquipmentCode(string equipmentCode)` | 解析 `+idx-item-modifier...` 串。用**无参构造器**，所以类型是 `Invalid`；`@null` 物品段会被跳过；`array2[2]` 无条件取值，段格式不对直接越界。**丢弃 `IsQuestItem` 与 `CosmeticItem`。** |
| `CalculateEquipmentCode` | `public string CalculateEquipmentCode()` | 反向编码：12 段 `+下标-itemId-词缀Id`，空值写 `@null`。用 [MBStringBuilder](../MBStringBuilder)（从池里借的，`ToStringAndRelease` 归还）。`Initialize(16, ...)` 里的 16 只是初始容量提示，不是上限。 |
| `GetWeaponPickUpSlotIndex` | `public EquipmentIndex GetWeaponPickUpSlotIndex(EquipmentElement itemRosterElement, bool isStuckMissile)` | 找「这件武器该捡进哪个槽」：带 `DropOnWeaponChange`/`DropOnAnyAction` 就给 `ExtraWeaponSlot`，否则返回 0..3 里第一个空槽，全满给 `None`。**`isStuckMissile` 参数在方法体内完全未被使用**（1.3.0 / 1.3.15 / 1.4.6 三份源码逐字相同）。 |
| `IsEquipmentEqualTo` | `public bool IsEquipmentEqualTo(Equipment other)` | 逐槽 `EquipmentElement.IsEqualTo`（比 `Item` 与 `ItemModifier` 两个引用，**不比 `CosmeticItem` 也不比 `IsQuestItem`**），再比三个类型标记。`other == null` 返回 false。所以经 `CreateFromEquipmentCode` 还原的装备与原件比必然 false（类型标记不同）。 |
| `GetRandomEquipmentElements` | `public static Equipment GetRandomEquipmentElements(BasicCharacterObject character, bool randomEquipmentModifier, Equipment.EquipmentType equipmentType, int seed = -1)` | 从角色的多套装备里随机拼一套。`Battle` 取 `BattleEquipments`、`Civilian` 取 `CivilianEquipments`，**`Stealth` 拿不到任何来源，直接返回空装备**。槽位分组取样：0–1 用第一个种子、2–3 用第二个、4–11 用第三个，所以护甲区永远来自同一套。`seed == -1` 走全局 `MBRandom.RandomInt`，否则用本地 `Random`。 |
| `SwapWeapons` | `public static void SwapWeapons(Equipment equipment, EquipmentIndex index1, EquipmentIndex index2)` | 静态三行交换两个槽位。**不限于武器槽**，`EquipmentIndex` 任意值都能换。 |
| `GetInitialWeaponIndicesToEquip` | `public void GetInitialWeaponIndicesToEquip(out EquipmentIndex mainHandWeaponIndex, out EquipmentIndex offHandWeaponIndex, out bool isMainHandNotUsableWithOneHand, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = Any)` | 挑主副手。遍历顺序是 `{ ExtraWeaponSlot, Weapon0, Weapon1, Weapon2, Weapon3 }`——**投射物槽排第一**。带 `ItemFlags.HeldInOffHand` 的进副手，其余按偏好进主手；副手位置全满时主手会继续往下扫。`isMainHandNotUsableWithOneHand` 来自 `WeaponFlags.NotUsableWithOneHand`。 |

## 真实示例

最常见的读法——取一件装备看它是什么，再判它属于哪个槽：

```csharp
EquipmentElement weapon = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0);
if (!weapon.IsEmpty)
{
    Debug.Print("weapon = " + weapon.Item.StringId, 0);
    Debug.Print("class  = " + weapon.Item.PrimaryWeapon.WeaponClass, 0);
    Debug.Print("weight = " + hero.BattleEquipment.GetTotalWeightOfWeapons(), 0);
}
```

写入前**自己**校验——索引器不帮你拦：

```csharp
Equipment target = hero.BattleEquipment;
EquipmentElement element = new EquipmentElement(item, modifier);
if (Equipment.IsItemFitsToSlot(EquipmentIndex.Body, element.Item))
{
    target[EquipmentIndex.Body] = element;
}
else
{
    Debug.Print("refusing to put " + item.StringId + " into Body", 0);
}
```

克隆一套去掉武器的装备去做「角色预览 / 只看穿着」：

```csharp
Equipment preview = hero.BattleEquipment.Clone(true);
Debug.Print("head armor = " + preview.GetHeadArmorSum(), 0);
Debug.Print("body type  = " + preview.BodyDeformType, 0);
Debug.Print("ears hidden= " + preview.EarsAreHidden, 0);
```

编码串往返（注意类型会丢）：

```csharp
string code = hero.CivilianEquipment.CalculateEquipmentCode();
Equipment restored = Equipment.CreateFromEquipmentCode(code);

Debug.Print("same code  = " + (restored.CalculateEquipmentCode() == code), 0);
Debug.Print("same type  = " + hero.CivilianEquipment.IsEquipmentEqualTo(restored), 0); // false
Debug.Print("restored is battle? " + restored.IsBattle, 0);                          // false
```

最后一行那个 `false` 是这一页最容易咬人的地方：**代码串只编码物品和词缀，不编码 `EquipmentType`**。

开局选主副手，拿来做 AI 或 UI 提示：

```csharp
EquipmentIndex mainHand;
EquipmentIndex offHand;
bool needsTwoHands;
hero.BattleEquipment.GetInitialWeaponIndicesToEquip(
    out mainHand, out offHand, out needsTwoHands,
    Equipment.InitialWeaponEquipPreference.MeleeForMainHand);

if (mainHand != EquipmentIndex.None)
{
    Debug.Print("main = " + mainHand + " two-hand only = " + needsTwoHands, 0);
}
```

## 风险与边界

- **写槽完全不校验。** `this[int]` 的 setter 调了 `IsItemFitsToSlot` 却**丢弃返回值**，`AddEquipmentToSlotWithoutAgent` 同理。形配失败只在 `DeserializeNode` 里以 `Debug.FailedAssert` 形式出现，而发布版的 `FailedAssert` 不中断加载，于是「断言日志 + 静默少一件装备」。写槽前自己调一次 `IsItemFitsToSlot`。
- **`Goods` 和 `ChestArmor` 装不进任何槽。** `IsItemFitsToSlot` 的 switch 覆盖 `ItemTypeEnum` 27 个成员中的 25 个，**漏了 `Goods` 和 `ChestArmor`**，它们落到初始值 `false`。`ItemTypeEnum.Banner` 是被覆盖的（走武器分支）。
- **`HasWeapon()` / `HasWeaponOfClass()` 有 NRE 隐患。** 二者都解引用 `Item.PrimaryWeapon`，而 [ItemObject](../ItemObject) 的 `PrimaryWeapon` 在物品没有 `WeaponComponent` 时返回 `null`。`IsItemFitsToSlot` 允许 Shield 落进 0–3 号槽，所以这组合是可达的。调之前先判 `!element.IsEmpty` **不够**，还得判 `element.Item.PrimaryWeapon != null`。
- **`GetWeaponPickUpSlotIndex` 的 `isStuckMissile` 参数完全无效。** 方法体一次也没引用它，且 1.3.0 / 1.3.15 / 1.4.6 三份源码逐字相同。别指望传 true 能改变箭矢插在身上的处理。
- **代码串往返丢类型、丢任务标志。** `CreateFromEquipmentCode` 走无参构造器 → `_equipmentType == Invalid` → 三个类型标记全 false，`IsEquipmentEqualTo` 必然 false。同时丢 `IsQuestItem` 和 `CosmeticItem`。段格式写错则 `array2[2]` 越界。
- **`Clone` 和拷贝构造器都不搬 `SyncEquipments`。** 克隆出来的装备默认「不同步」，需要同步得自己再写一次。
- **`Clone(true)` 只清 0–4 号槽。** 判定式是 `cloneWithoutWeapons && i >= 0 && i < 5`，那个 `i >= 0` 恒真。护甲、马匹、马具全部保留。
- **`GetXxxSum` 系列的名字有误导性。** 四个护甲 Sum 方法循环范围完全相同（5..9 整块护甲区），差别只在调哪个 `GetModifiedXxxArmor()`。`GetHorseArmorSum()` 反而不循环，只看 `HorseHarness` 一个槽。
- **枚举别名是循环边界事故的高发区。** `NumAllArmorSlots == 5`（是数量不是边界）、`ArmorItemEndSlot == Horse == 10`、`NonWeaponItemBeginSlot == ArmorItemBeginSlot == NumAllWeaponSlots == Head == 5`。写 `i < NumAllArmorSlots` 会让护甲区一个槽都不遍历。
- **XML 装配只跳过注释。** `DeserializeNode` 对 `Text` / `Whitespace` 节点会 NRE。目前不炸是因为 XML reader 默认丢弃纯缩进空白。
- **`node.Name` 不被检查。** `<Item>` 只是习惯；任何带 `id` 和 `slot` 属性的元素都会被当槽位处理。
- **`slot` 属性写错名字直接抛异常。** `GetEquipmentIndexFromOldEquipmentIndexName` 对非 `Item0..Item4` 的字符串走 `Enum.Parse`，不匹配就 `ArgumentException`。只有「用了旧名」这一种情况会被翻译。
- **`Deserialize` 的 `objectManager` 参数是死的。** `DeserializeNode` 内部用静态 `MBObjectManager.Instance`。自定义对象管理器下装配装备走不通。
- **`GetRandomEquipmentElements` 对 `Stealth` 返回空装备。** 它只从 `BattleEquipments` / `CivilianEquipments` 取来源列表，传 `EquipmentType.Stealth` 时 `list` 保持空，随即 `if (list.IsEmpty()) return equipment;` 提前返回。
- **真进存档。** `_equipmentType` 是 `[SaveableField(1)]`，`_itemSlots` 是 `[SaveableField(2)]`，`AutoGeneratedInstanceCollectObjects` 会把 `_itemSlots` 加进 `collectedObjects`。这与 [ItemComponent](../ArmorComponent) 的设计相反——改装备 XML 不会破坏旧存档，但旧存档里的英雄按保存时的物品定义计算数值。
- **不继承任何基类。** `public class Equipment` 是顶层类，没有接口约束，因此第三方可以自由派生；但两个索引器、`EquipmentType` 等嵌套枚举名会被继承，派生类里写 `Equipment.EquipmentType` 指的是基类的那个。

## 跨版本提示

`Equipment.cs` 的 public/protected 表面在 `bannerlord-1.3.0/`（46 个成员）与 `bannerlord-1.3.15/`（46 个）**完全一致**。从 `bannerlord-1.4.6/` 起**新增 1 个成员 `ItemEquipmentType`**，变成 47 个；`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 同样是 47 个，形状不再变化。也就是说 1.3 → 1.4 的唯一 API 增量是多一个属性，其余 45 个成员的签名、可访问性、嵌套枚举全部未动。

对 mod 的实际影响：如果你的代码只在 1.3.x 上跑，这个类的行为可以完全信任；如果要跨 1.3 与 1.4，**不要假设 `Equipment` 有 `ItemEquipmentType`**——它只在新版存在。老版本上编译的代码能原样跑在新版上，反过来不行。

## 依赖关系

- 槽位内容：[EquipmentElement](../EquipmentElement) 是每个槽的实际载荷（`Item` / `ItemModifier` / `CosmeticItem` / `IsQuestItem` 与全部 `GetModifiedXxx` 计算）
- 下标枚举：[EquipmentIndex](../EquipmentIndex) 定义 12 个槽与全部别名边界值
- 物品与词缀：[ItemObject](../ItemObject) 提供 `ItemType` / `ItemFlags` / `Weight` / `PrimaryWeapon` / `ArmorComponent`；[ItemModifier](../ItemModifier) 是品质词缀
- 外观判定：[ArmorComponent](../ArmorComponent) 是 `HairCoverType` / `BeardCoverType` / `ManeCoverType` / `ReinsMesh` / `BodyMeshType` / `BodyDeformType` 的真实来源
- XML 装配：[MBEquipmentRoster](../MBEquipmentRoster) 的 `<EquipmentSet>` → `InitEquipment` → `Equipment.Deserialize` → `DeserializeNode`；它的 `AllEquipments` / `DefaultEquipment` / `EmptyEquipment` 是装备集的读取口
- 存档：[CharacterData](../../campaign/CharacterData) 与 [CharacterCode](../CharacterCode) 靠 `CalculateEquipmentCode` / `CreateFromEquipmentCode` 在存档与预览之间搬运整套装备
- 数值宿主：[Hero](../../campaign/Hero) 的 `BattleEquipment` / `CivilianEquipment` / `FirstBattleEquipment` / `FirstCivilianEquipment`；[BasicCharacterObject](../BasicCharacterObject) 的 `BattleEquipments` / `CivilianEquipments` 是随机拼装的取样来源
- 武器分类：[WeaponClass](../WeaponClass) 是 `HasWeaponOfClass` 的入参；[WeaponFlags](../WeaponFlags) 决定 `HasWeapon` 的判定
- 编码工具：[MBStringBuilder](../MBStringBuilder) 是 `CalculateEquipmentCode` 的拼串器
- 同族对象：[ItemObject](../ItemObject) 的单件定义与本类的 12 槽容器是「一件 / 一套」的关系
- 桶首页：[core-extra API 分区](../)