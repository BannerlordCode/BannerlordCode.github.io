---
title: "ItemModifier"
description: "品质词条：Damage/Speed 等十个整数字段加四个乘算的坐骑字段，ModifyDamage 等十个方法分两套算法——加法带 Math.Max 下限 1，乘法用 Ceiling/Floor 取整。"
---

# ItemModifier

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class ItemModifier : MBObjectBase`
**Base:** `MBObjectBase`（`TaleWorlds.ObjectSystem` 命名空间）
**File:** `TaleWorlds.Core/ItemModifier.cs`（全文 307 行，10501 字节）

## 概述

`ItemModifier` 就是游戏里那句「精良的剑：伤害 +12」。它是一个 `MBObjectBase`（所以能从 XML 读出来、按 `StringId` 查到），持有十个整数字段（`Damage` / `Speed` / `MissileSpeed` / `Armor` / `HitPoints` / `StackCount`）和四个 `float` 字段（`MountSpeed` / `Maneuver` / `ChargeDamage` / `MountHitPoints`），外加两个分数（`LootDropScore` / `ProductionDropScore`）、一个价格系数（`PriceMultiplier`）和一个 `ItemQuality` 品质枚举。

**它的十个 `ModifyXxx` 方法分成两套算法，这是本页最需要记住的分界线。** 六个是加法：`ModifyDamage` / `ModifySpeed` / `ModifyMissileSpeed` / `ModifyArmor` 是 `Math.Max(baseValue + X, 1)`，而 `ModifyHitPoints` / `ModifyStackCount` 是 `Math.Max(baseValue + X, 1)` 但返回 `short`。四个是乘算：`ModifyMountSpeed` / `ModifyMountManeuver` / `ModifyMountCharge` / `ModifyMountHitPoints` 走私有 `ModifyFactor`，**取整方向随倍数而变**：

```csharp
private static int ModifyFactor(int baseValue, float factor)
{
    if (baseValue == 0) { return 0; }
    if (!MBMath.ApproximatelyEquals(factor, 0f, 1E-05f))
    {
        baseValue = ((factor < 1f) ? MathF.Ceiling(factor * (float)baseValue) : MathF.Floor(factor * (float)baseValue));
    }
    return baseValue;
}
```

`factor < 1` 时用 `Ceiling`（**向上**取整，保守），`factor >= 1` 时用 `Floor`（**向下**取整，同样保守）。也就是说**乘算永远朝对玩家不利的方向舍入**。外层的 `Math.Max(..., 1)` 又保证了结果至少是 1。

它跟 [ItemModifierGroup](../ItemModifierGroup) 是一对：组里装着若干条词条，按 `ItemQuality` 分类；具体挂到武器上是靠 [WeaponComponent](../WeaponComponent) 的 `AddWeapon(weapon, itemModifierGroup)`——挂的是**组**，组里的每一条在计算时各自生效。

## 心智模型

**把它想成「一组加性/乘性修正量」，而不是「一个 buff」。** 它自己不作用于任何人，只在你调用 `ModifyXxx(base)` 时把修正套到一个基准值上。计算武器最终伤害的完整链路是：`WeaponComponentData.ThrustDamage`（原始值）→ `itemModifier.ModifyDamage(...)`（套词条）→ 交给战斗模型。这条链在 `WeaponComponentDataExtensions.cs` 里被固化成了扩展方法：

```csharp
public static int GetModifiedThrustDamage(this WeaponComponentData componentData, ItemModifier itemModifier)
{
    if (itemModifier != null && componentData.ThrustDamage > 0)
    {
        return itemModifier.ModifyDamage(componentData.ThrustDamage);
    }
    return componentData.ThrustDamage;
}
```

**注意这里的两道防线。** 第一道是 `itemModifier != null`——没有词条就直接返回原值。第二道更微妙：**`componentData.ThrustDamage > 0`**。原始值非正时**根本不套用词条**，原样返回。所以「一把 `ThrustDamage = 0` 的武器 + 一条 `+50 伤害` 的词条」结果还是 0。词条**只放大已有数值，不能凭空造出数值**。同理装备护甲那侧，`EquipmentElement.cs` 有六处 `num = this.ItemModifier.ModifyArmor(num);`，全部走同一个模式。

**第一步，理解 `Math.Max(..., 1)` 的地板。** 每个 `ModifyXxx` 都有这个下限。这有两个后果：一是负词条（「精良的剑：伤害 -5」）永远打不穿到 0 或负数；二是——**这条对显示文本的推导很重要**——伤害是 1 的剑加 `+0` 仍然是 1，「伤害 -1」和「伤害 +0」在运行期完全等价。要区分它们必须读 `Damage` 字段本身。

**第二步，理解 `ModifyFactor` 的两条护栏。** `if (baseValue == 0) { return 0; }` 意味着**乘数再大也不会把 0 变成正数**——和加法那侧的「不能凭空造数值」是同一个原则。其次 `MBMath.ApproximatelyEquals(factor, 0f, 1E-05f)` 是在说「乘数约等于 0 就别乘了」，避免浮点误差把整数搞出小数尾巴。

**第三步，理解 `Equals` 与 `GetHashCode` 被重写成了值语义。** `ItemModifier : MBObjectBase`，基类的默认相等是引用相等。但本类重写了：

```csharp
public bool Equals(ItemModifier other)
{
    return other != null && base.StringId == other.StringId;
}
public override int GetHashCode()
{
    return base.StringId.GetDeterministicHashCode();
}
```

**注意这个 `Equals` 有一个陷阱：它没有 `override` 修饰符。** 声明是 `public bool Equals(ItemModifier other)` 而不是 `public override bool Equals(ItemModifier other)`——所以它是 `object.Equals(object)` 的一个**重载**，不是覆写。后果是：把两个 `ItemModifier` 装箱成 `object` 放进字典或集合时，走的是 `object.Equals` 的引用比较，**你写的按 `StringId` 比较的那份根本不会被调用**。`GetHashCode` 是真的 `override`，它按 `StringId` 算。所以两者**不自洽**——哈希按 id 走，相等按引用走。这是个真实的、存在于 1.3.0 的陷阱。代码里要比较请直接写 `a.StringId == b.StringId`。

**第四步，理解它是被组「持有」而不是被物品持有。** `ItemModifierGroup.ItemModifierGroup` 那一层——`WeaponComponent` 拿到的是 `ItemModifierGroup`，`ItemModifierGroup` 内部才是一堆 `ItemModifier`。组负责回答「按品质给我一组词条」（`GetModifiersBasedOnQuality(ItemQuality)` 用 LINQ 过滤 `modifier.ItemQuality == quality`）和「随机抽一条」（`GetRandomItemModifierLootScoreBased()` 用 `MBRandom.ChooseWeighted` 按 `LootDropScore` 加权）。而**具体套哪一条是调用方的事**——扩展方法那套写法一次只套一条。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Name` | `[CachedData] public TextObject Name { get; private set; }` | 词条的显示名，XML 的 `name` 属性。构造器初始化为 `TextObject.GetEmpty()`。 |
| `Damage` | `public int Damage { get; private set; }` | 伤害**加量**。不是百分比，是整数点。 |
| `Speed` | `public int Speed { get; private set; }` | 攻速**加量**。 |
| `MissileSpeed` | `public int MissileSpeed { get; private set; }` | 弹丸速度**加量**。 |
| `Armor` | `public int Armor { get; private set; }` | 护甲**加量**。装备侧的六处调用都走 `ModifyArmor`。 |
| `HitPoints` | `public short HitPoints { get; private set; }` | 生命值**加量**。注意是 `short`，`ModifyHitPoints` 也返回 `short`。 |
| `StackCount` | `public short StackCount { get; private set; }` | 堆叠上限**加量**。同样 `short`。 |
| `MountSpeed` | `public float MountSpeed { get; private set; }` | 坐骑速度**乘数**，不是加量。XML 键是 `horse_speed`。 |
| `Maneuver` | `public float Maneuver { get; private set; }` | 坐骑机动**乘数**。 |
| `ChargeDamage` | `public float ChargeDamage { get; private set; }` | 坐骑冲锋伤害**乘数**。 |
| `MountHitPoints` | `public float MountHitPoints { get; private set; }` | 坐骑生命**乘数**。XML 键是 `horse_hit_points`。 |
| `LootDropScore` | `public float LootDropScore { get; private set; }` | 掉落权重。`ItemModifierGroup` 按它加权随机抽词条。XML 里是整数，转成 float。 |
| `ProductionDropScore` | `public float ProductionDropScore { get; private set; }` | 制作权重。 |
| `PriceMultiplier` | `public float PriceMultiplier { get; private set; }` | 价格**乘数**，XML 默认值 1f。 |
| `ItemQuality` | `public ItemQuality ItemQuality { get; private set; }` | 品质档位。`GetModifiersBasedOnQuality` 按它过滤。 |
| `ModifyDamage` | `public int ModifyDamage(int baseDamage)` | `Math.Max(baseDamage + this.Damage, 1)`。 |
| `ModifySpeed` | `public int ModifySpeed(int baseSpeed)` | `Math.Max(baseSpeed + this.Speed, 1)`。 |
| `ModifyMissileSpeed` | `public int ModifyMissileSpeed(int baseSpeed)` | `Math.Max(baseSpeed + this.MissileSpeed, 1)`。 |
| `ModifyArmor` | `public int ModifyArmor(int armorValue)` | `Math.Max(armorValue + this.Armor, 1)`。装备侧最高频的调用。 |
| `ModifyHitPoints` | `public short ModifyHitPoints(short baseHitPoints)` | `Math.Max(baseHitPoints + this.HitPoints, 1)`。返回 `short`，不是 int。 |
| `ModifyStackCount` | `public short ModifyStackCount(short baseStackCount)` | `Math.Max(baseStackCount + this.StackCount, 1)`。返回 `short`。 |
| `ModifyMountSpeed` | `public int ModifyMountSpeed(int baseSpeed)` | `Math.Max(ModifyFactor(baseSpeed, this.MountSpeed), 1)`。**乘算**。 |
| `ModifyMountManeuver` | `public int ModifyMountManeuver(int baseManeuver)` | `Math.Max(ModifyFactor(baseManeuver, this.Maneuver), 1)`。**乘算**。 |
| `ModifyMountCharge` | `public int ModifyMountCharge(int baseCharge)` | `Math.Max(ModifyFactor(baseCharge, this.ChargeDamage), 1)`。**乘算**。 |
| `ModifyMountHitPoints` | `public int ModifyMountHitPoints(int baseCharge)` | `Math.Max(ModifyFactor(baseCharge, this.MountHitPoints), 1)`。**乘算**。 |
| `Equals` | `public bool Equals(ItemModifier other)` | **没有 `override`**！是 `object.Equals(object)` 的重载，只在静态类型是 `ItemModifier` 时才可能被选中。 |
| `GetHashCode` | `public override int GetHashCode()` | **真的 `override`**，按 `StringId` 算。与上面那个 `Equals` 语义不一致。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 逐个读 XML 属性，末尾 `ReadObjectReferenceFromXml<ItemModifierGroup>("modifier_group", node)` 把自己注册进组。组为 `null` 时**直接 return，字段已填但没归组**。 |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档对象图钩子，只有 `base.` 一行。继承无意义。 |

| 私有辅助 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ModifyFactor` | `private static int ModifyFactor(int baseValue, float factor)` | 乘算核心：`baseValue == 0` 直接返回 0；`factor < 1` 用 `Ceiling`、`factor >= 1` 用 `Floor`——**永远朝保守方向舍入**。 |
| `ReadItemQuality` | `private ItemQuality ReadItemQuality(XmlNode node)` | 把 XML 的 `quality` 字符串转成 `ItemQuality`。基于字符串哈希的 switch，**无法识别的值一律返回 `ItemQuality.Common`，不报错**。 |

## 真实示例

官方封装好的那条链——注意它同时挡住了「没有词条」和「原始值非正」两种情况：

```csharp
using TaleWorlds.Core;

// 这就是引擎自己的写法，照抄即可。
int finalThrust = weaponData.GetModifiedThrustDamage(item.WeaponComponent.ItemModifierGroup.ItemModifiers[0]);
MBDebug.Print("thrust after modifier = " + finalThrust);
```

`WeaponComponentDataExtensions.cs` 的完整形态是四个近乎相同的扩展方法（`GetModifiedThrustDamage` / `GetModifiedSwingDamage` / `GetModifiedMissileDamage` / `GetModifiedThrustSpeed`），每个都判两次：`itemModifier != null` 且 `componentData.某个值 > 0`。

按品质取一组词条，是 `ItemModifierGroup` 的标准流程：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;

public static List<ItemModifier> PickModifiers(ItemModifierGroup group, ItemQuality quality)
{
    // GetModifiersBasedOnQuality 用 LINQ 过滤 modifier.ItemQuality == quality，返回新 List。
    List<ItemModifier> matches = group.GetModifiersBasedOnQuality(quality);
    MBDebug.Print("quality " + quality + " matched " + matches.Count + " modifiers");
    return matches;
}
```

`ItemModifierGroup.cs:89` 的实现就是 `from modifier in this.ItemModifiers where modifier.ItemQuality == quality select modifier).ToList<ItemModifier>()`。

自己叠词条时，加法与乘法的行为差异必须显式处理：

```csharp
using TaleWorlds.Core;

public static void ShowBothAlgorithms(ItemModifier mountBoon, ItemModifier bladeBoon, int baseSpeed, int baseDamage)
{
    // 乘算：MountSpeed = 1.2f，baseSpeed = 11
    // factor >= 1 走 Floor：Floor(1.2 * 11) = Floor(13.2) = 13
    int newSpeed = mountBoon.ModifyMountSpeed(baseSpeed);

    // 乘算：Maneuver = 0.8f
    // factor < 1 走 Ceiling：Ceiling(0.8 * 11) = Ceiling(8.8) = 9
    int newManeuver = mountBoon.ModifyMountManeuver(baseSpeed);

    // 加法：Damage = -5，baseDamage = 3 → Math.Max(3 - 5, 1) = 1
    int newDamage = bladeBoon.ModifyDamage(baseDamage);

    // 乘数再大也不能把 0 造出数值：baseSpeed = 0 → 直接 return 0
    int fromZero = mountBoon.ModifyMountSpeed(0);

    MBDebug.Print("speed " + baseSpeed + " -> " + newSpeed
        + ", maneuver -> " + newManeuver
        + ", damage " + baseDamage + " -> " + newDamage
        + ", from zero -> " + fromZero);
}
```

四条结果的来历完全不同：`13` 是 `Floor` 出来的，`9` 是 `Ceiling` 出来的，`1` 是 `Math.Max` 的地板，`0` 是 `ModifyFactor` 的短路。**把这两个乘数字段当加数字段用**（「以为 `MountSpeed = 1.2` 是「+1.2 速度」」）是这类数据最常见的误读。

比较两条词条时，绕开那个不 `override` 的 `Equals`：

```csharp
using TaleWorlds.Core;

public static bool SameModifier(ItemModifier a, ItemModifier b)
{
    if (a == null || b == null)
    {
        return false;
    }
    // 不要依赖 a.Equals(b) —— 那个重载在装箱后不会被调用。
    // StringId 相等才是引擎认可的「同一件东西」。
    return a.StringId == b.StringId;
}

public static void ShowHashMismatch(ItemModifierGroup group)
{
    // 两个独立的随机取样，可能拿到同一条，也可能不是。
    ItemModifier a = group.GetRandomItemModifierLootScoreBased();
    ItemModifier b = group.GetRandomItemModifierLootScoreBased();

    // a 与 b 是同一个实例时，两者都是 true。
    // 但如果它们来自两条不同的加载路径，引用不等而 StringId 相等：
    // SameModifier(a, b) == true，而 a.Equals(b) == false。
    MBDebug.Print("same id=" + SameModifier(a, b)
        + " same ref=" + ReferenceEquals(a, b)
        + " idA=" + a.StringId + " idB=" + b.StringId);
}
```

注意 `GetRandomItemModifierLootScoreBased()` 可能返回 **`null`** —— `ItemModifierGroup.InitializeDropScoreLists()` 显式往加权表里塞了一个 `null` 条目，代表「没有词条」这个选项（配的是 `NoModifierLootScore`）。所以上面这段代码里 `a` `b` 都必须判空。

## 风险与边界

- **`Equals(ItemModifier)` 没有 `override`。** 它是重载而非覆写。这意味着 `(object)a == (object)b`、把两个 `ItemModifier` 放进 `HashSet<ItemModifier>` 或以 `object` 为键的字典时，**走的是引用比较**。而 `GetHashCode` 却真的按 `StringId` 算——哈希与相等语义不一致，可能导致 `HashSet` 行为反直觉。**要比较就直接写 `StringId ==`。**
- **词条不能凭空造数值。** `ModifyFactor` 的 `baseValue == 0 → return 0`，以及扩展方法里的 `componentData.某个值 > 0` 双重保证。所以「+50 伤害」的词条挂在伤害 0 的物品上仍然是 0。
- **加法结果有 1 的地板。** 所有 `ModifyXxx` 都 `Math.Max(..., 1)`。想做「负词条」时，数值永远不会到 0 或负数，而 `ItemQuality` 仍会把物品标成 inferior。
- **`ModifyHitPoints` / `ModifyStackCount` 返回 `short`。** 不是 `int`。赋值给 `int` 会隐式提升（安全），但如果链式运算或重载解析出问题要留意。字段本身也是 `short`。
- **舍入方向是保守的，且不一致。** 乘数 < 1 向上取整、>= 1 向下取整。**不要试图预测精确结果**，算出来是什么就是什么。
- **`ModifyFactor` 用 `MathF`（单精度）。** 输入是 `float` 乘数乘 `int` 基准值，大数值上可能有精度损失。
- **`ReadItemQuality` 静默兜底。** 任何无法识别的 `quality` 字符串（包括拼错的）都返回 `ItemQuality.Common`，不报错、不警告。品质分级静默失效时先查这里。
- **`Deserialize` 可能填了字段但不归组。** 末尾 `ReadObjectReferenceFromXml<ItemModifierGroup>("modifier_group", node)` 返回 `null` 时直接 `return`——此时所有数值字段已经填好，但这条词条**不在任何 `ItemModifierGroup` 里**，`GetModifiersBasedOnQuality` 找不到它。XML 缺 `modifier_group` 就会这样。
- **`LootDropScore` / `ProductionDropScore` 在 XML 里是整数。** 代码 `(float)XmlHelper.ReadInt(node, "loot_drop_score")`，所以你没法通过 XML 配出小数权重。而 `PriceMultiplier` 是 `ReadFloat(node, "price_factor", 1f)`，**默认 1f**。
- **`PriceMultiplier` 没有对应的 `ModifyXxx` 方法。** 它是唯一一个存了但本类不提供计算方法的字段——价格计算在别处。
- **所有属性都是 `{ get; private set; }`。** 外部代码改不了任何字段，只能 `new ItemModifier()` 然后走 `Deserialize`，或者通过 XML 加载。
- **`sealed`。** 继承不了。想扩展只能自己写一个平行类型。
- **`Deserialize` 依赖对象管理器。** 加载路径上才有意义，手工 `new` 出来的 `ItemModifier` 只会拿到构造器设的 `Name = TextObject.GetEmpty()`，其余全是 0。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Core/ItemModifier.cs:11`，声明是 `public sealed class ItemModifier : MBObjectBase` —— 它**继承了 `MBObjectBase`，所以它是被 `MBObjectManager` 登记的正式游戏对象**，不是随手 new 的数据类。

**唯一的正确入口是按 `StringId` 查。** `SandBox/Missions/MissionLogics/MountAgentLogic.cs:68` 写的是 `MBObjectManager.Instance.GetObject<ItemModifier>("lame_horse");`，同样的写法在 `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBattleRecoveryBehavior.cs:26` 和 `SandBox/Missions/MissionEvents/OpenInventoryWithGivenItemsEventListenerLogic.cs:116` 各出现一次。**所以拿它的标准三段式是「已知字符串 id → `GetObject<ItemModifier>` → 交给消费方」**。

那个无参构造器 `public ItemModifier()`（`ItemModifier.cs:102`）你**应该当它不存在** —— 方法体只有一句 `this.Name = TextObject.GetEmpty();`，构造出来的东西没有 `StringId`，是个未登记的孤儿。真正的数据由 `Deserialize(MBObjectManager, XmlNode)`（`ItemModifier.cs:108`）从 XML 填入。

**一段可直接跑的三行取值与比较**：

```csharp
ItemModifier lame = MBObjectManager.Instance.GetObject<ItemModifier>("lame_horse");
ItemModifier same = MBObjectManager.Instance.GetObject<ItemModifier>("lame_horse");
Debug.Print("equal = " + lame.Equals(same) + ", hash = " + (lame.GetHashCode() == same.GetHashCode()), 0);
```

**这个例子里三个结果会分岔，这正是要点。** `Equals(same)` 返回 `true`（它按 `StringId` 比）；`GetHashCode()` 也相等（方法体是 `base.StringId.GetDeterministicHashCode()`）。但如果你把 `same` 换成**另一个 `StringId` 不同但数值恰好相同的**对象，或者干脆用 `object` 类型的变量去比：

```csharp
object a = MBObjectManager.Instance.GetObject<ItemModifier>("lame_horse");
object b = MBObjectManager.Instance.GetObject<ItemModifier>("lame_horse");
Debug.Print("objectEqual = " + a.Equals(b), 0);
```

`a.Equals(b)` 会走 `object.Equals` 的引用比较路径。**所以「相等语义」与「哈希语义」在这个类上是分叉的**，这不是 bug 而是 `sealed` + 重载 `Equals` 的直接后果。

**要比较就直接写 `StringId ==`。** `Equals(ItemModifier)` 是 `other != null && base.StringId == other.StringId`（`ItemModifier.cs:222`），显式写出来没有歧义，也不依赖调用点的静态类型。

**最常见的坑：`Equals(ItemModifier)` 没有 `override`。** 它是重载而非覆写，所以 `(object)a == (object)b`、`HashSet<ItemModifier>` 里的去重、以 `object` 为键的字典，都会走引用比较。这条已在「风险与边界」首条展开。

## 跨版本提示

`ItemModifier.cs` 在 1.3.0（307 行 / 10501 字节）与 1.3.15（307 行 / 10501 字节）之间**完全相同**。**从 1.4.6 起新增一个成员**：

```csharp
public bool IsBeneficial()
{
    return this.Damage > 0 || this.Speed > 0 || this.MissileSpeed > 0 || this.Armor > 0 || this.HitPoints > 0 || this.StackCount > 0;
}
```

1.4.6、1.4.7、1.5.3 三棵树都含这个方法（314 行 / 10750 字节，彼此一致），**1.3.0 与 1.3.15 都没有**。其余十个 `ModifyXxx`、十四个字段、两个重写在五个版本间**没有任何增删**。

`IsBeneficial()` 的判定口径值得留意：它只看六个**加法**字段（`Damage` / `Speed` / `MissileSpeed` / `Armor` / `HitPoints` / `StackCount`），**完全忽略四个坐骑乘数字段和两个掉落分数**。所以一条只加 `MountSpeed` 的词条在 1.4.6+ 上会被判为「无益」。

结论：**跨 1.3 与 1.5 写兼容代码时，`IsBeneficial` 需要条件编译**；其余部分完全稳定。想在 1.3.0 上提前拿到同样行为，直接照上面那个布尔表达式自己写一个静态方法就行——六个字段的判断一行搞定，不需要反射。

## 依赖关系

- 持有者：[ItemModifierGroup](../ItemModifierGroup) 内部是 `MBList<ItemModifier>`，`GetModifiersBasedOnQuality` 按 `ItemQuality` 过滤、`GetRandomItemModifierLootScoreBased` 按 `LootDropScore` 加权抽
- 挂载路径：[WeaponComponent](../WeaponComponent) 的 `AddWeapon(weapon, itemModifierGroup)` 挂的是**组**，词条是组里的元素
- 应用侧：[WeaponComponentData](../WeaponComponentData) 上的 `GetModifiedThrustDamage` 等扩展方法（`WeaponComponentDataExtensions.cs`）把词条套到武器伤害/速度上；[EquipmentElement](../EquipmentElement) 的六处调用把 `ModifyArmor` 套到装备上
- 品质分组：[ItemQuality](../ItemQuality) 是 `ItemQuality` 属性的枚举类型，分 poor / common / fine / masterwork / legendary / inferior 六档
- 物品侧宿主：[ItemObject](../ItemObject) 的 `AddWeapon` 第二个参数就是本类的组容器
- 桶首页：[core-extra API 分区](../)