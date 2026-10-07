---
title: "EquipmentIndex"
description: "装备槽位枚举：12 个装备槽的整数编号表，Equipment 用它做数组下标，武器槽、护甲槽、马匹槽三段紧邻排列。"
---

# EquipmentIndex

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum EquipmentIndex`
**File:** `TaleWorlds.Core/EquipmentIndex.cs`

## 概述

`EquipmentIndex` 是 12 个装备槽的整数编号表，底层 `int`。它是 [Equipment](../Equipment) 的寻址语言：`Equipment` 内部持有一个 `EquipmentElement[] _itemSlots`（长度 `Equipment.EquipmentSlotLength == 12`），而这个枚举的值就是那个数组的下标。所以它不是「装饰性常量」，**枚举值和数组长度必须严格对上，改一个就全盘错位**。三段布局：索引 0–4 是武器段（`Weapon0`..`Weapon3` 加一个 `ExtraWeaponSlot`），索引 5–9 是护甲段（`Head` / `Body` / `Leg` / `Gloves` / `Cape`），索引 10–11 是马匹段（`Horse` / `HorseHarness`）。

## 心智模型

**先记住它是数组下标，再记名字。** `Equipment` 的索引器 `public EquipmentElement this[EquipmentIndex index]` 只是 `this._itemSlots[(int)index]`，没有任何边界检查；越界就是 `IndexOutOfRangeException`。所以拿它做循环变量时，循环上界应该是 `Equipment.EquipmentSlotLength`（12），而不是枚举的成员个数——枚举里还有 `None`、`WeaponItemBeginSlot`、`NumAllWeaponSlots` 这些**不是槽位**的成员。

第二个坑是**枚举里混了三类语义完全不同的值**。槽位（`Weapon0`–`Weapon3`、`ExtraWeaponSlot`、`Head`、`Body`、`Leg`、`Gloves`、`Cape`、`Horse`、`HorseHarness`）、哨兵/边界（`None = -1`、`WeaponItemBeginSlot`、`ExtraWeaponSlot` 之后的 `NumAllWeaponSlots`、`ArmorItemBeginSlot`、`ArmorItemEndSlot`、`NumAllArmorSlots`、`NumEquipmentSetSlots`）、以及**计数常量**（`NumPrimaryWeaponSlots = 4`、`NumAllWeaponSlots = 5`、`NumAllArmorSlots = 5`）。注意 `NumAllArmorSlots = 5` 这个值看起来像槽位数，其实它是「护甲段长度 5」而被显式赋 5，不是「护甲段最后一个槽下标」——护甲段最后一个槽 `Cape` 是 9。这组计数常量的实际用途是**偏移量**：`ArmorItemBeginSlot = 5` 就是护甲段起点，`NumAllWeaponSlots = 5` 也就是护甲段起点。两个含义在这个枚举里被复用了同一个数字。

第三个坑是**隐式值必须手算**。`WeaponItemBeginSlot` 紧跟在 `None = -1` 后面，编译器给它 0，与显式的 `Weapon0 = 0` **值相同**；`NonWeaponItemBeginSlot` 跟在 `NumPrimaryWeaponSlots = 4` 后面得 5，与显式的 `ArmorItemBeginSlot = 5` 相同；`ArmorItemEndSlot` 跟在 `Cape`（9）后面得 10；`NumEquipmentSetSlots` 跟在 `HorseHarness`（11）后面得 12。**四个「别名成员」**，值撞车不是 bug，是刻意的区段标记。

第四个心智锚点：**`IsItemFitsToSlot` 的返回值在索引器里被丢弃**。`Equipment` 的 `set` 索引器写成 `Equipment.IsItemFitsToSlot((EquipmentIndex)index, value.Item); this._itemSlots[index] = value;`——调用了但**没有用返回的 bool**。所以那套槽位合法性规则（按 `ItemObject.ItemType` switch）**不会阻止你把马放进头盔槽**。想校验必须自己显式调 `Equipment.IsItemFitsToSlot(slotIndex, item)`。而且该方法对 `ItemTypeEnum.Horse` 判定的是 `slotIndex == EquipmentIndex.ArmorItemEndSlot`（值为 10），与 `EquipmentIndex.Horse`（也是 10）值相同——这里又是数字巧合在兜底。

第五个是**旧编号到新编号的迁移**。`Equipment.GetEquipmentIndexFromOldEquipmentIndexName(string)` 专门处理 1.2.x 存档里写死的槽位名（`Weapon0` 之类）到本枚举的映射，mod 读老存档时会碰到它。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None = -1` | 「没有槽位」的唯一表示。**唯一的负值成员**，也是 `Equipment.IsItemFitsToSlot` 在 `ItemTypeEnum.Invalid` 时返回 false 的那个判据来源。 |
| `WeaponItemBeginSlot` | `WeaponItemBeginSlot`（隐式 **0**） | 武器段起点标记。**与 `Weapon0` 同值 0**，不代表一个独立槽位。 |
| `Weapon0` | `Weapon0 = 0` | 主手位。数组下标 0。 |
| `Weapon1` | `Weapon1`（1） | 副手位。数组下标 1。 |
| `Weapon2` | `Weapon2`（2） | 备用武器位。数组下标 2。 |
| `Weapon3` | `Weapon3`（3） | 备用武器位。数组下标 3。 |
| `ExtraWeaponSlot` | `ExtraWeaponSlot`（4） | 额外武器位。**注意它不等于 `NumPrimaryWeaponSlots = 4` 的含义**，那个是「常规武器槽数」的计数。 |
| `NumAllWeaponSlots` | `NumAllWeaponSlots = 5` | 武器段长度/下界。同时也是护甲段起点（`ArmorItemBeginSlot` 同为 5）。**作为「下一个区段起点」用，不要当最后一个武器槽。** |
| `NumPrimaryWeaponSlots` | `NumPrimaryWeaponSlots = 4` | **常规武器槽数量**（`Weapon0`–`Weapon3` 共 4 个），不含 `ExtraWeaponSlot`。`[ItemObject](../ItemObject)` 的 `MaxHolsterSlotCount = 4` 是同一数量级的另一个常量。 |
| `NonWeaponItemBeginSlot` | `NonWeaponItemBeginSlot`（隐式 **5**） | 非武器槽区段起点标记。**与 `ArmorItemBeginSlot` 同值 5**。 |
| `ArmorItemBeginSlot` | `ArmorItemBeginSlot = 5` | 护甲段起点，即数组下标 5（=`Head`）。 |
| `Head` | `Head = 5` | 头部槽。数组下标 5。 |
| `Body` | `Body`（6） | 躯干槽。数组下标 6。 |
| `Leg` | `Leg`（7） | 腿部槽。数组下标 7。 |
| `Gloves` | `Gloves`（8） | 手套槽。数组下标 8。 |
| `Cape` | `Cape`（9） | 披风槽。数组下标 9。**护甲段最后一个真槽位。** |
| `ArmorItemEndSlot` | `ArmorItemEndSlot`（隐式 **10**） | 护甲段之后的第一个下标。**`Equipment.IsItemFitsToSlot` 判马匹时比较的就是它——值 10 恰好等于 `Horse`，所以它同时也是「合法马匹槽」的判据。** |
| `NumAllArmorSlots` | `NumAllArmorSlots = 5` | 护甲段**长度**（5 个槽），不是最后一个槽的下标。**这是本枚举里最容易被误读的一个值。** |
| `Horse` | `Horse = 10` | 坐骑槽。数组下标 10。 |
| `HorseHarness` | `HorseHarness`（11） | 马具/马鞍槽。数组下标 11。 |
| `NumEquipmentSetSlots` | `NumEquipmentSetSlots`（隐式 **12**） | 整套装备的槽位总数。**必须等于 `Equipment.EquipmentSlotLength = 12`**，它就是那个数组的长度。 |

## 怎么用

### 怎么拿到它

`EquipmentIndex` 是 `TaleWorlds.Core/EquipmentIndex.cs` 里**全文 52 行、只有一个声明**的东西：

```
public enum EquipmentIndex      // EquipmentIndex.cs:6
```

所以「怎么拿到它」的答案就是：它是一个编译期常量枚举，不需要任何实例。真正要记的是它的取值布局（`EquipmentIndex.cs:8-50`）：

| 段 | 取值 | 成员 |
| --- | --- | --- |
| 哨兵 | `None = -1` | `:9` |
| 武器段 | `Weapon0 = 0` 到 `ExtraWeaponSlot = 4` | `:13`-`:19` |
| 计数常量 | `NumAllWeaponSlots = 5`、`NumPrimaryWeaponSlots = 4` | `:21`、`:23` |
| 段标记 | `WeaponItemBeginSlot = 0`、`NonWeaponItemBeginSlot` | `:11`、`:25` |
| 护甲段 | `ArmorItemBeginSlot = 5`、`Head = 5`、`Body`、`Leg`、`Gloves`、`Cape`、`ArmorItemEndSlot` | `:27`-`:35` |
| 计数常量 | `NumAllArmorSlots = 5` | `:37` |
| 马匹段 | `Horse = 10`、`HorseHarness = 11`、`NumEquipmentSetSlots` | `:39`-`:43` |

注意它是**一个扁平枚举，不是嵌套**——武器槽在护甲槽之前，中间的 5/6/7/8/9 是段标记与计数常量，**马匹槽直接跳到了 10**。

### 典型用法

按槽位读写装备，以及用枚举自带的下标做区间判断：

```csharp
using TaleWorlds.Core;

Equipment eq = hero.CharacterObject.Equipment;

// 读写单个槽位（Equipment.cs:629 / :635）
eq.AddEquipmentToSlotWithoutAgent(EquipmentIndex.Body, new EquipmentElement(armorItem));
EquipmentElement head = eq.GetEquipmentFromSlot(EquipmentIndex.Head);
EquipmentElement horse = eq[EquipmentIndex.Horse];          // Equipment.cs:120 的枚举索引器

// 武器在 0..4，护甲在 5..9，马匹在 10..11 —— 判断某槽是不是武器位
bool isWeaponSlot = (int)index >= (int)EquipmentIndex.WeaponItemBeginSlot
                 && (int)index <  (int)EquipmentIndex.NumAllWeaponSlots;

// 判有效
if (index != EquipmentIndex.None) { /* ... */ }             // None = -1，:9

// 兼容旧存档里的下标名
EquipmentIndex parsed = Equipment.GetEquipmentIndexFromOldEquipmentIndexName("weapon0");   // Equipment.cs:205
```

### 最容易踩的坑

**把 `EquipmentIndex` 当成连续下标去 `for` 循环整个枚举。** 它里面有大量**不占槽位的哨兵与常量**：`None = -1`（`:9`）、`NumAllWeaponSlots = 5` 和 `NumPrimaryWeaponSlots = 4` 都等于武器段末尾的真实槽位、`ArmorItemEndSlot`（`:35`）等于 `Cape`、`NumAllArmorSlots = 5`（`:37`）**等于 `Head` 的值 5 而不是槽位数量**。后果是 `foreach (EquipmentIndex i in Enum.GetValues(typeof(EquipmentIndex)))` 会在同一个槽位上反复迭代（`ArmorItemEndSlot` 和 `NumAllArmorSlots` 都是 5），而 `+1` 循环则会撞进马匹段（10）与武器段（0）之间的空洞。**遍历请显式写死区间**：武器 `0..4`、护甲 `(int)ArmorItemBeginSlot..(int)Cape`、马匹 `(int)Horse..(int)HorseHarness`。

第二个坑是 `NumAllArmorSlots = 5`（`:37`）这个命名极具误导性：它看着像「护甲槽有 5 个」，但它的值是 **5**，也就是**护甲段的起始下标**（与 `ArmorItemBeginSlot`、`Head` 同值），而护甲槽实际是 `Head/Body/Leg/Gloves/Cape` 五个——值等于数量纯属巧合。写 `for (int i = 0; i < (int)EquipmentIndex.NumAllArmorSlots; i++)` 去取护甲会只取到 `Head`。武器段的 `NumAllWeaponSlots = 5`（`:21`）才是真正的数量（`Weapon0`..`ExtraWeaponSlot` 共 5 个）。**同一个命名习惯在同一个枚举里含义相反，必须逐个核对。**

## 真实示例

按枚举名取槽位内容（`GetEquipmentFromSlot` 是官方的读取入口，内部走 `Equipment` 索引器）：

```csharp
Equipment gear = hero.BattleEquipment;

EquipmentElement head = gear.GetEquipmentFromSlot(EquipmentIndex.Head);
EquipmentElement mount = gear.GetEquipmentFromSlot(EquipmentIndex.Horse);
EquipmentElement offHand = gear.GetEquipmentFromSlot(EquipmentIndex.Weapon1);

Debug.Print("head=" + head.IsEmpty + " mount=" + mount.IsEmpty, 0);
if (!head.IsEmpty)
{
    Debug.Print("head armor (modified) = " + head.GetModifiedHeadArmor(), 0);
}
```

遍历全部 12 个槽位，**上界用 `Equipment.EquipmentSlotLength` 而不是枚举成员数**：

```csharp
Equipment gear = hero.CivilianEquipment;
for (int i = 0; i < Equipment.EquipmentSlotLength; i++)
{
    EquipmentIndex slot = (EquipmentIndex)i;
    EquipmentElement element = gear.GetEquipmentFromSlot(slot);
    if (element.IsVisualEmpty)
    {
        continue;
    }
    Debug.Print("slot " + slot + " item = " + element.Item.StringId, 0);
}
```

装填前先自己校验——因为 `Equipment` 的索引器**丢弃了 `IsItemFitsToSlot` 的返回值**：

```csharp
EquipmentIndex targetSlot = EquipmentIndex.Body;
ItemObject candidate = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0).Item;

if (candidate != null && Equipment.IsItemFitsToSlot(targetSlot, candidate))
{
    hero.BattleEquipment.AddEquipmentToSlotWithoutAgent(targetSlot, new EquipmentElement(candidate));
    Debug.Print("equipped into " + targetSlot, 0);
}
else
{
    Debug.Print("item does not fit slot " + targetSlot, 0);
}
```

读写数值下标（枚举可以强转成 `int`，反过来不行）：

```csharp
EquipmentIndex picked = EquipmentIndex.Gloves;
int rawIndex = (int)picked;
Debug.Print("slot name=" + picked + " array index=" + rawIndex, 0);
Debug.Print("sentinel equals Horse? " + (EquipmentIndex.ArmorItemEndSlot == EquipmentIndex.Horse), 0);
```

## 风险与边界

- **枚举值是数组下标，越界无检查。** `Equipment` 的 `this[int]` 直接 `this._itemSlots[index]`。用 `(EquipmentIndex)999` 取值会 `IndexOutOfRangeException`。
- **`NumEquipmentSetSlots`（12）必须与 `Equipment.EquipmentSlotLength`（12）一致。** 源码里两个常量是各自独立声明的，没有断言关联；任何一个被改动都会越界或漏槽。
- **三组值撞车的别名成员。** `WeaponItemBeginSlot == Weapon0`（都 0）、`NonWeaponItemBeginSlot == ArmorItemBeginSlot == Head`（都 5）、`ArmorItemEndSlot == Horse`（都 10）。**`Enum.GetValues` + `Enum.GetName` 的互转在这些值上只会返回一个名字**，拿名字做反向索引会丢信息。
- **`NumAllArmorSlots = 5` 是长度不是下标。** 护甲段最后一个槽 `Cape` 是 9。把 5 当下标会取到 `Head`。
- **`IsItemFitsToSlot` 的返回值在索引器里被丢弃。** 官方调用点只有 `Equipment` 的 set 索引器一处，而那处没用返回值。**非法落位不会报错。**
- **`ExtraWeaponSlot` 与 `NumPrimaryWeaponSlots` 同为 4，但含义不同。** 前者是「第五个武器槽这个位置」，后者是「常规武器槽的数量」。
- **`None = -1` 不能当数组下标。** 传进 `Equipment` 索引器会抛 `IndexOutOfRangeException`。
- **底层是 `int` 不是 `sbyte`。** 跨语言或反射传值时注意与 `ArmorComponent.ArmorMaterialTypes : sbyte` 的区别。
- **只是寻址层，不含合法性。** 哪些物品能进哪些槽由 [ItemObject](../ItemObject) 的 `ItemType` 与 `Equipment.IsItemFitsToSlot` 决定，不由本枚举决定。
- **旧存档编号另有一套名字。** 跨版本读档要走 `Equipment.GetEquipmentIndexFromOldEquipmentIndexName(string)`。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/EquipmentIndex.cs` **完全一致**（1 个公开成员，19 个枚举值，隐式值全部相同）。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/EquipmentIndex.cs`（27 行）与 `bannerlord-1.4.6/TaleWorlds.Core/EquipmentIndex.cs`（52 行）逐成员比对 public/protected 表面。**三版全部 20 个枚举值的数值完全相同**。1.4.5 把隐式值全部写成了显式值（如 `None = -1`、`WeaponItemBeginSlot = 0`、`Horse = 10`、`NumEquipmentSetSlots = 12`），1.3.15 与 1.4.6 的反编译产物省略了隐式值（如只留 `Weapon0 = 0`、`NumPrimaryWeaponSlots = 4`）；**逐值回填后两边数值一致，这是反编译形态差异、不是语义差异**。注意本段上文写的是「19 个枚举值」，实际是 20 个。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 唯一的消费者：[Equipment](../Equipment) 的 `this[EquipmentIndex]` / `this[int]` 索引器、`GetEquipmentFromSlot` / `AddEquipmentToSlotWithoutAgent` / `IsItemFitsToSlot` / `SwapWeapons` / `GetWeaponPickUpSlotIndex` / `GetInitialWeaponIndicesToEquip`，以及常量 `Equipment.EquipmentSlotLength = 12`
- 槽内载荷：[EquipmentElement](../EquipmentElement) 是索引器返回的结构体（`Item` + `ItemModifier` + `IsQuestItem` + `CosmeticItem`）
- 槽位合法性：[ItemObject](../ItemObject) 的 `ItemType` / `ItemTypeEnum` 是 `IsItemFitsToSlot` switch 的判据
- 组件：[ArmorComponent](../ArmorComponent) 在护甲槽提供减伤与遮挡；[HorseComponent](../HorseComponent) 在 `Horse` 槽提供坐骑属性；[SaddleComponent](../SaddleComponent) 在 `HorseHarness` 槽提供鞍具标记
- 词缀：[ItemModifierGroup](../ItemModifierGroup) 决定槽内 `EquipmentElement.ItemModifier` 的可能取值
- 贸易品：[TradeItemComponent](../TradeItemComponent) 的物品通常落在 `Cape` / `Body` 之类的槽位上
- 桶首页：[core-extra API 分区](../)