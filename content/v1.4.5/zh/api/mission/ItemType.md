---
title: "ItemType"
description: "多人道具的 26 值分类枚举：第一项是 Invalid（也是「XML 没写 type」时的默认值），而 XML 解析走 Enum.Parse 且只大小写不敏感 —— 写下划线就抛 ArgumentException。"
---

# ItemType

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `internal enum ItemType`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ItemType.cs`

## 概述

`ItemType` 是 31 行的 `internal enum`，26 个成员（`ItemType.cs:5-30`）。它是多人对战道具表的分类维度 —— 从 `Horse`、`OneHandedWeapon`、`TwoHandedWeapon`、`Polearm`、`Arrows`…一直到 `Book`、`ChestArmor`、`Cape`、`HorseHarness`、`MultiplayerPerk`、`ArmorExtra`。

它的值域由 [ItemInnerData](../ItemInnerData/) 的 `Deserialize` 从 `mpitems.xml` 解析：`ItemInnerData.cs:29` 的 `Type = (ItemType)Enum.Parse(typeof(ItemType), value, ignoreCase: true)`。查询侧是 [ItemList](../ItemList/) 的 `GetItemTypeOf`（`ItemList.cs:48-51`）。

## 心智模型

把它当成**「一份需要在 XML 与代码之间保持一致的字符串表」**。三条推论：

第一,**`Invalid` 是第 0 个成员，而它同时是「没配」的默认值。** `:5` 的 `Invalid` 在枚举最前（序号 0），而 `ItemInnerData.Type` 的属性类型是 `ItemType`（`ItemInnerData.cs:10`）**没有显式初始化**，所以默认值就是 `Invalid`。**于是「XML 里没写 `<flag name="type">`」与「XML 里写了 `value="Invalid"`」在读取端完全不可区分。**

第二,**解析用 `Enum.Parse` 而不是 `Enum.TryParse`。** `ItemInnerData.cs:29`。**所以一个拼错的 `type` 值会让整个 `ItemList` 静态构造器抛 `ArgumentException`，而不是「这条被跳过」。** 对照同项目的 [HitType](../HitType/) 用的是 `Enum.TryParse`（`MPCombatPerkEffect.cs:30`）—— **两个地方的容错策略相反。**

第三,**`ignoreCase: true` 只宽容大小写，不宽容分隔符。** 所以 XML 里写 `onehandedweapon` 可以，写 `one_handed_weapon` 或 `one-handed-weapon` 会抛 —— 因为 `Enum.Parse` 是按**成员名精确匹配**（忽略大小写），不做任何词法变换。

## 如何使用

**怎么拿到它**：**只能通过 [ItemList](../ItemList/) 的三个静态方法间接拿值**，因为本类是 `internal`，mod 编译期引用不到。路径是 `ItemList.GetItemTypeOf(typeId)`（`ItemList.cs:50`）。

对应的公开面（`ItemList` 也是 internal，所以下面是它内部的形状）：

```csharp
using TaleWorlds.MountAndBlade.Diamond;

// ItemList.GetItemTypeOf(typeId)（ItemList.cs:48-51）的语义在这里复现一遍：
string typeId = "some_weapon_id";
bool valid = ItemList.IsItemValid(typeId, "");          // :53-56 用 ContainsKey，安全
Debug.Print("valid = " + valid, 0);
if (valid)
{
    ItemType t = ItemList.GetItemTypeOf(typeId);         // :50 是 _items[typeId].Type，无保护
    // t 可能是 Invalid —— 那代表 XML 里没写 <flag name="type">，而不是「无效道具」
    Debug.Print("type = " + t + "  isDefault = " + (t == ItemType.Invalid), 0);
}
```

**用它最容易踩的一条**：**26 个成员里没有任何一个名字含下划线或连字符，而 XML 的 `value` 必须精确匹配成员名（忽略大小写）。** 最容易写错的是复数与长单词：`TwoHandedWeapon`（不是 `two_handed_weapons`）、`ChestArmor`（不是 `chest_armor`）、`HorseHarness`、`MultiplayerPerk`。**写错的后果是 `ArgumentException` 抛在静态构造器里 —— 也就是游戏启动阶段，而不是某次查询时。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Invalid` | `Invalid`（枚举成员，序号 0，`ItemType.cs:5`） | **「无效/未指定」。** 它同时是 [ItemInnerData](../ItemInnerData/) 的 `Type` 属性的**默认值** —— 属性无初始化器（`ItemInnerData.cs:10`），所以 `new ItemInnerData()` 之后 `Type == ItemType.Invalid`。**这让「没配」与「配成 Invalid」不可区分。** |
| `Horse` | `Horse`（序号 1，`:6`） | 马匹类道具。 |
| `OneHandedWeapon` / `TwoHandedWeapon` / `Polearm` | 三个成员（序号 2/3/4，`:7`/`:8`/`:9`） | 单手/双手/长柄武器。**三个连续，且 `TwoHandedWeapon` 里没有下划线。** |
| `Arrows` / `Bolts` | 两个成员（序号 5/6，`:10`/`:11`） | 箭矢与弩箭。**英文里 `Arrows` 是复数，`Bolts` 也是复数 —— 成员名本身带 s。** |
| `Shield` / `Bow` / `Crossbow` / `Thrown` | 四个成员（序号 7/8/9/10，`:12`-`:15`） | 盾、弓、弩、投掷武器。 |
| `Goods` | `Goods`（序号 11，`:16`） | 货物/交易品。**在 26 个成员里它是唯一的「非装备非武器」大类。** |
| `HeadArmor` / `BodyArmor` / `LegArmor` / `HandArmor` | 四个成员（序号 12-15，`:17`-`:20`） | 四个护甲部位。**命名规律是 `<部位>Armor`，没有例外。** |
| `Pistol` / `Musket` / `Bullets` | 三个成员（序号 16/17/18，`:21`-`:23`） | 火器与子弹。**`Bullets` 在 `Arrows`/`Bolts` 之后，是第三个「弹药」类。** |
| `Animal` / `Book` / `ChestArmor` / `Cape` / `HorseHarness` | 五个成员（序号 19-23，`:24`-`:28`） | 动物、书、胸甲、披风、马具。**`Book` 与 `Animal` 是这个枚举里唯二不带装备/武器语义后缀的成员。** |
| `MultiplayerPerk` / `ArmorExtra` | 两个成员（序号 24/25，`:29`/`:30`） | 多人 perk、护甲附件。**`ArmorExtra` 是最后一个成员 —— 追加新类型只能加在它之后，否则序号全变。** |

## 真实示例

26 个成员与序号（这张表就是本类的全部，写 XML 时照抄）：

```csharp
// ItemType.cs:5-30，逐行对应，序号 0..25
// 序号 0   ItemType.cs:5   Invalid
// 序号 1   ItemType.cs:6   Horse
// 序号 2   ItemType.cs:7   OneHandedWeapon
// 序号 3   ItemType.cs:8   TwoHandedWeapon
// 序号 4   ItemType.cs:9   Polearm
// 序号 5   ItemType.cs:10  Arrows
// 序号 6   ItemType.cs:11  Bolts
// 序号 7   ItemType.cs:12  Shield
// 序号 8   ItemType.cs:13  Bow
// 序号 9   ItemType.cs:14  Crossbow
// 序号 10  ItemType.cs:15  Thrown
// 序号 11  ItemType.cs:16  Goods
// 序号 12  ItemType.cs:17  HeadArmor
// 序号 13  ItemType.cs:18  BodyArmor
// 序号 14  ItemType.cs:19  LegArmor
// 序号 15  ItemType.cs:20  HandArmor
// 序号 16  ItemType.cs:21  Pistol
// 序号 17  ItemType.cs:22  Musket
// 序号 18  ItemType.cs:23  Bullets
// 序号 19  ItemType.cs:24  Animal
// 序号 20  ItemType.cs:25  Book
// 序号 21  ItemType.cs:26  ChestArmor
// 序号 22  ItemType.cs:27  Cape
// 序号 23  ItemType.cs:28  HorseHarness
// 序号 24  ItemType.cs:29  MultiplayerPerk
// 序号 25  ItemType.cs:30  ArmorExtra   ← 最后一个成员
Debug.Print("26 个成员，ArmorExtra 是最后一个", 0);
```

两个 XML `type` 写法的对照（这是本类唯一的输入通道）：

```csharp
// ✅ 可以：成员名，大小写任意（ItemInnerData.cs:29 的 ignoreCase: true）
//   value="twohandedweapon"   value="TwoHandedWeapon"   value="TWOHANDEDWEAPON"
// ❌ 不行：分隔符不同 —— Enum.Parse 只做「忽略大小写的精确名匹配」
//   value="two_handed_weapon"  value="two-handed-weapon"  value="two handed weapon"
// ❌ 不行：复数
//   value="Horse"  可以；  value="Horses" 抛 ArgumentException
Debug.Print("只有大小写宽容，没有分隔符宽容", 0);
```

## 风险与边界

- **`internal enum`，编译期不可引用。** mod 看不到这些成员，也拿不到 `typeof(ItemType)`。
- **`Invalid` 是默认值且不可区分。** `ItemType.cs:5` + [ItemInnerData](../ItemInnerData/) 的 `Type` 属性无初始化器（`ItemInnerData.cs:10`）。**「XML 没写 type」与「写了 Invalid」在读取端同形。**
- **解析抛 `ArgumentException` 而非跳过。** `ItemInnerData.cs:29` 用 `Enum.Parse`（不是 `TryParse`），**且它发生在 `ItemList` 的静态构造器里 ⇒ 错误在游戏启动阶段暴露**（`ItemList.cs:34` 在循环里调 `Deserialize`）。对照 [HitType](../HitType/) 用的是 `Enum.TryParse`（`MPCombatPerkEffect.cs:30`）—— **同项目内两种容错策略。**
- **只有大小写宽容。** `ignoreCase: true`，**没有分隔符/命名风格变换**。
- **追加只能加在 `ArmorExtra` 之后。** 它是最后一个成员（`ItemType.cs:30`）。**我没有找到本项目显式声明该约定的证据**，只陈述事实。
- **`mpitems.xml` 不在源码树里。** 所以我**无法断言 26 个成员里哪些实际被使用、哪些是历史遗留**。
- **`ItemInnerData.Deserialize` 的 type 判定需要两层 XML 嵌套命中**（`ItemInnerData.cs:18-31`），缺任一层都会让 `Type` 停在 `Invalid` 而**不抛异常** —— 与上面「名字拼错则抛」形成对比：**结构缺失静默，名字错误抛异常。**

## 参见

- 唯一生产者：[ItemInnerData](../ItemInnerData/)（`:10` 的 `Type` 属性、`:26` 的 XML 双层过滤、`:29` 的 `Enum.Parse`）
- 唯一消费者：[ItemList](../ItemList/)（`:48-51` 的 `GetItemTypeOf`、`:33-38` 的构造与入表）
- 数据源：`mpitems.xml`（**不在源码树内**）
- 容错策略相反的对照：[HitType](../HitType/)（用 `Enum.TryParse`，失败回落 `Any`，见 `MPCombatPerkEffect.cs:30`）
- 同桶：[AgentHelper](../AgentHelper/)、[Target](../Target/)、[DropExtraWeaponOnStopUsageComponent](../DropExtraWeaponOnStopUsageComponent/)、[DefineGameNetworkMessageType](../DefineGameNetworkMessageType/)、[DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/)、[ScriptingInterfaceBase](../ScriptingInterfaceBase/)、[ThumbnailDebugUtility](../ThumbnailDebugUtility/)、[ItemInnerData](../ItemInnerData/)、[ItemList](../ItemList/)、[MultiplayerCultureColorInfo](../MultiplayerCultureColorInfo/)
- 桶首页：[mission API 分区](../)