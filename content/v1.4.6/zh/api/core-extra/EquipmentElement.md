---
title: "EquipmentElement"
description: "装备槽载荷结构体：ItemObject 加 ItemModifier 加 CosmeticItem 的组合体，负责把组件裸值加工成最终生效的护甲、伤害、坐骑属性。"
---

# EquipmentElement

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct EquipmentElement : ISerializableObject, ISavedStruct`
**File:** `TaleWorlds.Core/EquipmentElement.cs`

## 概述

`EquipmentElement` 是「一个装备槽里装了什么」的完整答案。它是**结构体**（值语义），内部装四样东西：`Item`（本体，[ItemObject](../ItemObject)）、`ItemModifier`（品质词缀，可空）、`IsQuestItem`（任务物品标记）、`CosmeticItem`（纯外观叠加层，可空）。前三个带 `[SaveableProperty]`，`CosmeticItem` **没有**——这是它最重要的一条边界，后面详述。它同时实现 `ISerializableObject` 与 `ISavedStruct`，所以既进 [SaveManager](../../save-system/SaveManager) 的结构体序列化，又参与 MBGUID 引用追踪。整个类型在装备体系里承担的是**「加工层」**：真正的护甲值在 [ArmorComponent](../ArmorComponent) 里，真正的机动值在 [HorseComponent](../HorseComponent) 里，而战斗实际用的数全部由本类型的 `GetModified*` 系列算出来。

## 心智模型

**把它当成「裸值 + 词缀 → 生效值」的函数集合**，而不是当成一个数据容器。链条是固定的：`Item.ArmorComponent.HeadArmor` 拿到裸值 → `ItemModifier.ModifyArmor(n)` 加工 → `Math.Max(..., 1)` 兜底 → `GetModifiedHeadArmor` 把负数钳到 0 → 战斗模型读。少走任何一步拿到的数都不是生效数。

第一个必须记住的边界是**几乎每个成员都假设 `Item != null`**。`GetModifiedHeadArmor` / `GetModifiedBodyArmor` / `GetModifiedLegArmor` / `GetModifiedArmArmor` / `GetModifiedStealthFactor` / `GetModifiedMountManeuver` / `GetModifiedMountSpeed` / `GetModifiedMountCharge` / `GetModifiedMountHitPoints` / `GetModifiedItemName` / `GetModified*ForUsage` 全部以 `this.Item.HasArmorComponent`、`this.Item.WeaponComponent`、`this.Item.Name` 开头，**没有一处先判 `Item == null`**。`ToString()` 更是直接 `return this.Item.ToString() ?? ""`，空槽位调它必 NRE。只有 `ItemValue`、`Weight`、`GetEquipmentElementWeight()`、`IsInvalid()` 四个做了 null 保护。**判空请用 `IsEmpty` 或 `IsVisualEmpty`，别自己写 `Item != null`。**

第二个是 `Clear()` 只清一半。`public void Clear()` 的实现是 `this.Item = null; this.ItemModifier = null;`——**`CosmeticItem` 和 `IsQuestItem` 原封不动留着**。清完再判 `IsEmpty` 会返回 true（因为 `Item` 是 null），但 `IsVisualEmpty` 仍可能返回 false（`CosmeticItem != null`），而且 `IsQuestItem` 还是旧值。这是复用结构体内存时的经典陷阱：数组 `Clear()` 过的槽位不能当全新对象用。

第三个是**两个「价格」属性算法不一致**。`ItemValue` 是 `num = MathF.Round((float)num * this.ItemModifier.PriceMultiplier)`，`GetBaseValue` 是 `num = (int)((float)num * this.ItemModifier.PriceMultiplier)`。前者四舍五入，后者直接截断小数。**同一个词缀下这两个属性可能差 1**，而且没有任何注释说明它们为什么不同。UI 定价用哪个、交易结算用哪个，结果可能不一致。

第四个是 `GetModifiedBodyArmor` 与 `GetModifiedMountBodyArmor` 是一对**故意互补**的方法。前者对 `ItemTypeEnum.HorseHarness` 返回 0（马具的躯干护甲不算人的），后者对非马具返回 0；两者都从 `ArmorComponent.BodyArmor` 取同一个源值，**区别只在 `ItemType` 的三元判断**。算人的减伤用前者，算坐骑的减伤用后者，用反了会静默得到 0。

第五个是 `GetModifiedMount*` 的双重词缀叠加。`GetModifiedMountManeuver(in harness)` 先取 `this.Item.HorseComponent.Maneuver`，`+` 掉 `harness.Item.ArmorComponent.ManeuverBonus`，再走 `this.ItemModifier.ModifyMountManeuver`，**然后如果马具自己也有 `ItemModifier`，再走一次 `harness.ItemModifier.ModifyMountManeuver`**。**马和马具的词缀是串联相乘/取整的**，不是简单相加。另外 `harness.Item` 为 null 时 `armorComponent` 为 null，`?? 0` 兜住了；但 `this.Item.HorseComponent` **没有 null 检查**——把一件非马匹物品塞进 `Horse` 槽再调这个方法会 NRE。

第六个是 `ToString()` 会 NRE、`GetHashCode()` 不会。`GetHashCode` 是 `(Item?.GetHashCode() ?? 0)` 再 `^ ItemModifier.GetHashCode()`，null 安全；`ToString()` 不是。日志里 `Debug.Print(element.ToString())` 在空槽上会崩。

## 关键成员

### 载荷字段

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Item` | `[SaveableProperty(1)] public ItemObject Item { get; private set; }` | 槽位里的本体物品。**结构体默认值就是 null**，所以 `default(EquipmentElement)` 是一个合法但必须先判空的「空槽」。 |
| `ItemModifier` | `[SaveableProperty(2)] public ItemModifier ItemModifier { get; private set; }` | 品质词缀，决定本槽的加工结果。为 null 表示「无词缀原值」。由 `SetModifier` 改。 |
| `IsQuestItem` | `[SaveableProperty(3)] public bool IsQuestItem { get; private set; }` | 任务物品标记，影响任务逻辑的物品识别。**`Clear()` 不会把它清回 false。** |
| `CosmeticItem` | `public ItemObject CosmeticItem;` | **公开字段，不是属性，也没有 `[SaveableProperty]`。** 纯外观叠加层（换色、换须）。**不进存档**——读档后一定是 null，尽管 `IsVisualEmpty` 依赖它。这是本类型最硬的一条边界。 |
| `Invalid` | `public static readonly EquipmentElement Invalid` | 全零构造的静态单例（`new EquipmentElement(null, null, null, false)`）。`IsInvalid()` 就是逐字段跟它比。**结构体不能有真正常量字段，所以这是 `readonly` 静态字段而非 `const`。** |

### 只读计算属性

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `IsEmpty` | `public bool IsEmpty { get; }` | `this.Item == null`。**判空的推荐入口。** 注意它不管 `CosmeticItem`。 |
| `IsVisualEmpty` | `public bool IsVisualEmpty { get; }` | `this.IsEmpty && this.CosmeticItem == null`。**要判「这个槽位画面上什么都没有」必须用这个**，因为带外观的槽位 `IsEmpty` 是 true 但仍有可见内容。 |
| `ItemValue` | `public int ItemValue { get; }` | 定价，`Item == null` 返回 0；有词缀时 `MathF.Round((float)Item.Value * ItemModifier.PriceMultiplier)`。**与 `GetBaseValue()` 算法不同，见上文。** |
| `Weight` | `public float Weight { get; }` | 重量，`Item == null` 时 0；**为负也返回 0**（`if (num <= 0f) return 0f;`）。不叠加词缀。 |
| `IsInvalid` | `public bool IsInvalid()`（方法） | 逐字段跟静态 `Invalid` 单例比：`Item == Invalid.Item && ItemModifier == Invalid.ItemModifier`。**不比较 `CosmeticItem`。** |

### 构造与变更

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | `public EquipmentElement(ItemObject item, ItemModifier itemModifier = null, ItemObject cosmeticItem = null, bool isQuestItem = false)` | 主构造器。后三个参数全可选，**只传物品是最常见用法**。 |
| `.ctor` | `public EquipmentElement(EquipmentElement other)` | 拷贝构造，等价于 `new EquipmentElement(other.Item, other.ItemModifier, other.CosmeticItem, other.IsQuestItem)`。**四个字段全拷。** |
| `SetModifier` | `public void SetModifier(ItemModifier itemModifier)` | 换词缀。注意**已有的 `GetModified*` 结果不会被缓存**（没有缓存字段），所以换完立刻生效。 |
| `Clear` | `public void Clear()` | 只置 `Item = null` 与 `ItemModifier = null`。**`CosmeticItem` 与 `IsQuestItem` 不动。** |
| `IsEqualTo` | `public bool IsEqualTo(EquipmentElement other)` | 比 `Item` 与 `ItemModifier` 两个引用。**不比 `CosmeticItem` 也不比 `IsQuestItem`。** |
| `Equals(object)` | `public override bool Equals(object obj)` | 转发到 `IsEqualTo`。 |
| `Equals(ItemRosterElement)` | `public bool Equals(ItemRosterElement other)` | 与 `ItemRosterElement`（`TaleWorlds.Core`，本机尚无对应深写页）比，取对方的 `EquipmentElement` 字段再比。**两个方向不等价。** |
| `GetHashCode` | `public override int GetHashCode()` | `(Item?.GetHashCode() ?? 0)`，有词缀时 `(num * 317) ^ ItemModifier.GetHashCode()`。**null 安全**，可安全当字典键。**但它与 `IsEqualTo` 的比较口径不一致的是 `CosmeticItem` 与 `IsQuestItem`——两个外观不同却 `IsEqualTo` 为 true 的元素哈希相同，这在 `HashSet` 里是合法但反直觉的行为。** |
| `ToString` | `public override string ToString()` | `return this.Item.ToString() ?? ""`。**`Item == null` 时 NRE。** |
| `GetBaseValue` | `public int GetBaseValue()` | 与 `ItemValue` 语义相同但算法不同：`(int)((float)Item.Value * ItemModifier.PriceMultiplier)`，**直接截断**。`Item == null` 时 NRE。 |
| `GetEquipmentElementWeight` | `public float GetEquipmentElementWeight()` | 弹药类算总重：本体不可空且 `PrimaryWeapon` 不可空且 `IsConsumable` 时返回 `Weight * GetModifiedStackCountForUsage(0)`，否则返回 `Weight`。**`Item == null` 返回 0f。** |

### 护甲与潜行（`GetModified*Armor` 系列）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetModifiedHeadArmor` | `public int GetModifiedHeadArmor()` | 头护甲。读 `ArmorComponent.HeadArmor` → `ItemModifier.ModifyArmor` → 负数钳 0。**`Item == null` 时 NRE。** |
| `GetModifiedBodyArmor` | `public int GetModifiedBodyArmor()` | **人用躯干护甲。`ItemType == HorseHarness` 时直接给 0；无 `ArmorComponent` 但有 `WeaponComponent` 时退而取 `PrimaryWeapon.BodyArmor`。** |
| `GetModifiedMountBodyArmor` | `public int GetModifiedMountBodyArmor()` | **坐骑躯干护甲。与上一个互补：`ItemType == HorseHarness` 才取 `ArmorComponent.BodyArmor`，否则 0。** |
| `GetModifiedLegArmor` | `public int GetModifiedLegArmor()` | 腿护甲，逻辑同 `GetModifiedHeadArmor`。 |
| `GetModifiedArmArmor` | `public int GetModifiedArmArmor()` | 臂护甲，逻辑同 `GetModifiedHeadArmor`。 |
| `GetModifiedStealthFactor` | `public int GetModifiedStealthFactor()` | 潜行因子，逻辑同 `GetModifiedHeadArmor`。**裸值为 0 时短路返回 0，不走词缀。** |

### 坐骑属性（`GetModifiedMount*` 系列，全部 `in EquipmentElement harness`）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetModifiedMountManeuver` | `public int GetModifiedMountManeuver(in EquipmentElement harness)` | 坐骑机动 = `HorseComponent.Maneuver + harness.ArmorComponent.ManeuverBonus`，先过 `this.ItemModifier.ModifyMountManeuver`，**harness 自己有词缀时再过一遍 `harness.ItemModifier.ModifyMountManeuver`**。**`this.Item.HorseComponent` 无 null 检查。** |
| `GetModifiedMountSpeed` | `public int GetModifiedMountSpeed(in EquipmentElement harness)` | 坐骑速度，双重词缀叠加规则同上，底值 `HorseComponent.Speed` + `SpeedBonus`。 |
| `GetModifiedMountCharge` | `public int GetModifiedMountCharge(in EquipmentElement harness)` | 坐骑冲撞伤害，底值 `HorseComponent.ChargeDamage` + `ChargeBonus`。 |
| `GetModifiedMountHitPoints` | `public int GetModifiedMountHitPoints()` | 坐骑血量 = `HorseComponent.HitPoints + HorseComponent.HitPointBonus`，过 `ItemModifier.ModifyMountHitPoints`，负数钳 0。**不接收 `harness`。** |
| `GetModifiedItemName` | `public TextObject GetModifiedItemName()` | 显示名。有词缀且物品非玩家锻造时返回 `ItemModifier.Name` 并 `SetTextVariable("ITEMNAME", Item.Name)`；否则返回 `Item.Name`。**两个坑：（1）源码里内层的 `&& this.ItemModifier == null` 恒为 false（外层已经在它为 null 时 return 了），那个 `HorseComponent.ModifiedName` 分支是死代码；（2）`textObject = this.ItemModifier.Name; textObject.SetTextVariable(...)` 改的是 [ItemModifierGroup](../ItemModifierGroup) 词缀对象持有的**共享** `TextObject` 实例——多次调用会把上一次装备的物品名写进全局词缀名里。** |

### 武器用法索引转发（八个方法，全部委托给 `Item.GetWeaponWithUsageIndex`）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetModifiedThrustDamageForUsage` | `public int GetModifiedThrustDamageForUsage(int usageIndex)` | 第 `usageIndex` 条武器形态的刺击伤害。转发 `Item.GetWeaponWithUsageIndex(usageIndex).GetModifiedThrustDamage(ItemModifier)`。**物品无 `WeaponComponent` 时 `Item.Weapons` 为 null → NRE。** |
| `GetModifiedSwingDamageForUsage` | `public int GetModifiedSwingDamageForUsage(int usageIndex)` | 同上，横扫伤害。 |
| `GetModifiedMissileDamageForUsage` | `public int GetModifiedMissileDamageForUsage(int usageIndex)` | 同上，远程伤害。 |
| `GetModifiedThrustSpeedForUsage` | `public int GetModifiedThrustSpeedForUsage(int usageIndex)` | 同上，刺击速度。 |
| `GetModifiedSwingSpeedForUsage` | `public int GetModifiedSwingSpeedForUsage(int usageIndex)` | 同上，横扫速度。 |
| `GetModifiedMissileSpeedForUsage` | `public int GetModifiedMissileSpeedForUsage(int usageIndex)` | 同上，弹道速度。 |
| `GetModifiedHandlingForUsage` | `public int GetModifiedHandlingForUsage(int usageIndex)` | 同上，操控值。 |
| `GetModifiedMaximumHitPointsForUsage` | `public short GetModifiedMaximumHitPointsForUsage(int usageIndex)` | 同上，武器耐久。**返回 `short`。** |
| `GetModifiedStackCountForUsage` | `public short GetModifiedStackCountForUsage(int usageIndex)` | 同上，堆叠数（箭矢/弹药）。**返回 `short`。** `GetEquipmentElementWeight` 内部会调它算弹药总重。 |

### 显式接口实现（存档）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ISerializableObject.DeserializeFrom` | `void ISerializableObject.DeserializeFrom(IReader reader)` | 先 `ReadString()` 拿词缀的 StringId（非空则 `Game.Current.ObjectManager.GetObject<ItemModifier>(text)`），再 `ReadUInt()` 造 `MBGUID` 并 `MBObjectManager.Instance.GetObject(mbguid) as ItemObject`。**依赖 `Game.Current`。** |
| `ISerializableObject.SerializeTo` | `void ISerializableObject.SerializeTo(IWriter writer)` | 先写词缀 StringId（无词缀写空串），再写 `Item.Id.InternalValue`（无物品写 `0U`）。**`CosmeticItem` 与 `IsQuestItem` 不写。** |
| `ISavedStruct.IsDefault` | `bool ISavedStruct.IsDefault()` | `Item == null && ItemModifier == null`。**显式接口实现，外部要访问得先转 `ISavedStruct`。** |

## 怎么用

### 怎么拿到它

`EquipmentElement` 是 `public struct EquipmentElement : ISerializableObject, ISavedStruct`（`TaleWorlds.Core/EquipmentElement.cs:11`）——**结构体 + 两个序列化接口**，这是它能进 [Equipment](../Equipment) 和存档的原因。

两个构造器：`public EquipmentElement(ItemObject item, ItemModifier itemModifier = null, ItemObject cosmeticItem = null, bool isQuestItem = false)`（`:117`）和拷贝构造器 `public EquipmentElement(EquipmentElement other)`（`:126`）。

实例来自两个方向：

- **读**：`Equipment.GetEquipmentFromSlot(EquipmentIndex)`（`Equipment.cs:635`）或索引器 `equipment[index]`（`Equipment.cs:106`/`:120`）。
- **写**：`Equipment.AddEquipmentToSlotWithoutAgent(EquipmentIndex, EquipmentElement)`（`Equipment.cs:629`）。
- **清空位**：静态哨兵 `public static readonly EquipmentElement Invalid = new EquipmentElement(null, null, null, false);`（`:546`），以及 `public void Clear()`（`:138`）。

判空有三个不同的语义，别混：`IsEmpty`（`:64`）、`IsVisualEmpty`（`:74`，只看外观物品）、`IsInvalid()`（`:406`）。

### 典型用法

```csharp
using TaleWorlds.Core;

// 造一个格子
var slot = new EquipmentElement(swordItemObject, someItemModifier, cosmeticSwordItem, isQuestItem: false);   // EquipmentElement.cs:117

// 装上
eq.AddEquipmentToSlotWithoutAgent(EquipmentIndex.Weapon0, slot);       // Equipment.cs:629

// 读回来并判断
EquipmentElement got = eq.GetEquipmentFromSlot(EquipmentIndex.Weapon0);
if (got.IsEmpty)         { /* 没有物品 */ }                            // :64
if (got.IsVisualEmpty)   { /* 只有数据、没有模型 */ }                     // :74
if (got.IsInvalid())     { /* 是 Invalid 哨兵 */ }                       // :406

// 数值永远用 GetModified* 系列，不要直接读 Item 的属性
int armor = got.GetModifiedBodyArmor();          // :178
int thrust = got.GetModifiedThrustDamageForUsage(usageIndex);   // :310，usageIndex 对应武器描述
int stack  = got.GetModifiedStackCountForUsage(usageIndex);      // :352，返回 short
float w = got.GetEquipmentElementWeight();       // :392
int value = got.GetBaseValue();                  // :358

// 换词缀 / 清空
got.SetModifier(otherModifier);                   // :132
got.Clear();                                      // :138
```

### 最容易踩的坑

**直接读 `slot.Item.<属性>` 来算战斗数值，从而绕过词缀。** `EquipmentElement` 的存在意义就是「物品 + `ItemModifier` + 外观物品」这个组合，所有带修正的数值都只在 `GetModified*` 系列里：`GetModifiedBodyArmor()`（`:178`）、`GetModifiedStealthFactor()`（`:264`）、`GetModifiedThrustDamageForUsage(int usageIndex)`（`:310`）、`GetModifiedMaximumHitPointsForUsage(int)`（`:283`，返回 `short`）。直接读 `slot.Item.BodyArmor` 拿到的是**未加词缀的裸值**，表现是「我改了词缀但面板和实战数值不变」——因为引擎内部算伤害时走的是 `GetModified*`，两边对不上。

第二个坑是三个判空方法语义不同而返回值都像 bool：`IsEmpty`（`:64`）、`IsVisualEmpty`（`:74`）、`IsInvalid()`（`:406`）。**`IsInvalid()` 才是用来识别 `Invalid` 哨兵（`:546`）的那个**，它是个方法不是属性；用 `IsEmpty` 去判断「这个槽是不是没初始化」会把 `Equipment.Clone(true)` 填进去的 `Invalid` 和真正的空槽混为一谈（`Equipment.cs:151` 正是用 `EquipmentElement.Invalid` 填武器位的），于是在只想要护甲的拷贝上，你仍然会看到武器槽“有东西”。

## 真实示例

安全遍历一整套装备（**先 `IsVisualEmpty` 再 `IsEmpty`**）：

```csharp
Equipment gear = hero.BattleEquipment;
for (int i = 0; i < Equipment.EquipmentSlotLength; i++)
{
    EquipmentElement element = gear.GetEquipmentFromSlot((EquipmentIndex)i);
    if (element.IsVisualEmpty)
    {
        continue;
    }

    Debug.Print("slot " + (EquipmentIndex)i + " weight = " + element.GetEquipmentElementWeight(), 0);
}
```

算人 / 坐骑两套躯干护甲（**别混用**）：

```csharp
EquipmentElement body = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Body);
EquipmentElement harness = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.HorseHarness);

if (!body.IsEmpty)
{
    int forHuman = body.GetModifiedBodyArmor();
    Debug.Print("body armor on a human = " + forHuman, 0);
}

if (!harness.IsEmpty)
{
    int forMount = harness.GetModifiedMountBodyArmor();
    Debug.Print("body armor on a mount = " + forMount, 0);
}
```

把马和马具的机动值合成（**马必须有 `HorseComponent`，且 harness 单独判空**）：

```csharp
EquipmentElement mount = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Horse);
EquipmentElement horseHarness = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.HorseHarness);

if (!mount.IsEmpty && mount.Item.HasHorseComponent)
{
    int maneuver = mount.GetModifiedMountManeuver(horseHarness);
    int speed = mount.GetModifiedMountSpeed(horseHarness);
    int charge = mount.GetModifiedMountCharge(horseHarness);
    Debug.Print("maneuver=" + maneuver + " speed=" + speed + " charge=" + charge, 0);
}
```

装填槽位并按品质挑词缀：

<!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.6 源码树均无法核对——该版本未随附 XML 语料。
```csharp
ItemModifier legendary = MBObjectManager.Instance.GetObject<ItemModifier>("legendary_modifier_1");
EquipmentElement slot = new EquipmentElement(hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0).Item, legendary);

if (Equipment.IsItemFitsToSlot(EquipmentIndex.Weapon0, slot.Item))
{
    hero.BattleEquipment.AddEquipmentToSlotWithoutAgent(EquipmentIndex.Weapon0, slot);
    Debug.Print("value=" + slot.GetBaseValue() + " name=" + slot.GetModifiedItemName(), 0);
}
```

## 风险与边界

- **`CosmeticItem` 不进存档。** 它是公开字段而非带 `[SaveableProperty]` 的属性，`SerializeTo` 也不写它。**读档后一定为 null**，外观叠加会丢。`IsVisualEmpty` 依赖它，所以读档前后的判空结果会不同。
- **绝大多数成员不判 `Item == null`。** 六个 `GetModified*Armor`、四个 `GetModifiedMount*`、`GetModifiedItemName`、`GetBaseValue`、`ToString()` 全都直接摸 `this.Item`。空槽位上调用一律 NRE。只有 `IsEmpty` / `IsVisualEmpty` / `ItemValue` / `Weight` / `GetEquipmentElementWeight()` / `IsInvalid()` / `GetHashCode()` 是 null 安全的。
- **`Clear()` 是半清。** 只清 `Item` 与 `ItemModifier`，`CosmeticItem` 与 `IsQuestItem` 保留。复用结构体数组时别指望 `Clear()` 等于重置。
- **`ItemValue` 与 `GetBaseValue` 算法不一致。** 前者 `MathF.Round`，后者 `(int)` 截断。同一词缀下可能差 1。
- **`GetModifiedBodyArmor` 与 `GetModifiedMountBodyArmor` 必须配对使用。** 判据是 `ItemType == HorseHarness`，用错静默返回 0，不报错。
- **`GetModifiedMount*` 会把马和马具的词缀串联两遍。** 不是相加。
- **`GetModifiedMount*` 不判 `HorseComponent` 为 null。** 非马匹物品塞进 `Horse` 槽后调用会 NRE。
- **`GetModified*ForUsage` 会 NRE。** 它们转发 `Item.GetWeaponWithUsageIndex`，而 [ItemObject](../ItemObject) 的 `Weapons` 在无 `WeaponComponent` 时返回 null（不是空列表）。
- **相等性只看两个字段。** `IsEqualTo` / `Equals` / `GetHashCode` 都不比较 `CosmeticItem` 与 `IsQuestItem`，所以「外观不同但本体相同」的两个元素互相相等。
- **`GetHashCode` 会撞。** `Item` 为 null 时基数是 0，多个空元素哈希相同。作为字典键安全，但作为 `HashSet` 去重依据时会误合并不同槽位状态。
- **值语义。** `Equipment` 内部是数组，`Equipment[slot]` 取到的是**副本**。`gear[EquipmentIndex.Head].SetModifier(x)` 改的是临时副本，不写回数组。**要改写回必须整个赋回。**
- **`Equals(ItemRosterElement)` 与 `Equals(EquipmentElement)` 语义不同。** 前者是「我等于对方槽位里的东西」，两个方向不等价。
- **`in EquipmentElement` 参数。** `GetModifiedMount*` 三个方法用 `in` 传参，调用侧不需要也不应该写 `in` 关键字。
- **`GetModifiedItemName` 会改写全局词缀名。** 它返回的 `TextObject` 是 `ItemModifier.Name` 那个**共享实例**，方法内对它调了 `SetTextVariable("ITEMNAME", ...)`。多件带同一词缀的物品依次取名，前一次的物品名会残留在词缀对象上。**要显示名字请自己 `new TextObject` 后再 `SetTextVariable`。**
- **`ItemModifier.Modify*` 的下限是 1。** 所有 `ModifyXxx` 都是 `Math.Max(结果, 1)`，所以词缀永远不能把伤害/护甲压到 0，钳零发生在 `EquipmentElement` 这一层。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/EquipmentElement.cs` 公开表面**完全一致**（42 行公开成员，含 9 个 `GetModified*Armor` / `GetModifiedMount*`、9 个 `GetModified*ForUsage`、3 个显式接口实现与 `Invalid` 静态字段）。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/EquipmentElement.cs`（477 行）与 `bannerlord-1.4.6/TaleWorlds.Core/EquipmentElement.cs`（552 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 42 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 477 行、1.4.6 是 552 行，差的是反编译注释。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 宿主容器：[Equipment](../Equipment) 的 `EquipmentElement[] _itemSlots`、`this[EquipmentIndex]` 索引器、`GetEquipmentFromSlot` / `AddEquipmentToSlotWithoutAgent`
- 槽位编号：[EquipmentIndex](../EquipmentIndex) 给出 12 个数组下标
- 本体：[ItemObject](../ItemObject) 提供 `Item` / `WeaponComponent` / `GetWeaponWithUsageIndex` / `IsCraftedByPlayer`
- 护甲来源：[ArmorComponent](../ArmorComponent) 提供五个护甲裸值与 `StealthFactor`
- 坐骑来源：[HorseComponent](../HorseComponent) 提供 `Maneuver` / `Speed` / `ChargeDamage` / `HitPoints` / `HitPointBonus`
- 词缀加工：`ItemModifier` 的 `ModifyArmor` / `ModifyMountManeuver` / `ModifyMountSpeed` / `ModifyMountCharge` / `ModifyMountHitPoints` / `PriceMultiplier`，词缀集合由 [ItemModifierGroup](../ItemModifierGroup) 管理
- 死代码里的马名：[HorseComponent](../HorseComponent) 的 `ModifiedName` 是公开 `TextObject` 字段，`GetModifiedItemName` 里那条分支在 1.4.6 永远进不去
- 显示名：[TextObject](../../localization/TextObject) 的 `SetTextVariable` 在这里既是读路径也是全局状态写入点
- 武器形态：[WeaponComponent](../WeaponComponent) 提供 `GetModified*ForUsage` 系列最终转发的 `WeaponComponentData`
- 存档：`ISerializableObject` / `ISavedStruct` 与 [SaveManager](../../save-system/SaveManager)；`SaveablePropertyAttribute` 定义见 [save-system 分区](../../save-system/SaveablePropertyAttribute)
- 包装类型：`ItemRosterElement`（本机无对应页）是它的数量化外壳，`EquipmentElement` 属性挂在上面
- 桶首页：[core-extra API 分区](../)