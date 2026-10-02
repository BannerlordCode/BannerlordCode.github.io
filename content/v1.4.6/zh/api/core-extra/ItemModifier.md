---
title: "ItemModifier"
description: "物品词缀：XML 里的 ItemModifier 条目，通过 ItemModifierGroup 挂到武器形态上，用一串加值或倍率修正伤害、速度、护甲与马匹属性。"
---

# ItemModifier

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class ItemModifier : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/ItemModifier.cs`

## 概述

313 行、15 个公开属性、11 个以 `Modify` 开头的方法，全部围绕一件事：**在物品基础数值上加一层修正**。它是被 [ItemModifierGroup](../ItemModifierGroup) 收集的词缀条目，`Deserialize` 读的是 XML 里 `ItemModifiers` 目录下的 `<ItemModifier>` 节点；游戏注册时用的是 `RegisterType<ItemModifier>("ItemModifier", "ItemModifiers", 6U, ...)`，加载入口是 `Game.LoadBasicFiles()` 里的 `ObjectManager.LoadXML("ItemModifiers", false)`。

数值分两套，这是最容易看混的地方：

- **加值型**：`Damage` / `Speed` / `MissileSpeed` / `Armor` / `HitPoints` / `StackCount`，全是 `int` 或 `short`。对应方法做 `Math.Max(base + 本值, 1)`。
- **倍率型**：`MountSpeed` / `Maneuver` / `ChargeDamage` / `MountHitPoints`，全是 `float`。对应方法先过私有的 `ModifyFactor`：`baseValue == 0` 直接返回 0（**不做下限兜底**），否则按系数是小于 1 还是大于 1 分别走 `MathF.Ceiling` 或 `MathF.Floor`，最后外层再 `Math.Max(..., 1)`。

## 心智模型

把一个 `ItemModifier` 想成**一张贴在物品上的属性增减贴纸**，它自己不知道贴在谁身上，只知道自己「加多少 / 乘多少」。真正的装配发生在所属的词缀组（`TaleWorlds.Core.ItemModifierGroup`）：`ItemModifier.Deserialize` 末尾读 `modifier_group` 属性拿到组，然后调组上的 `AddItemModifier` 把它塞进组自己的 `MBList<ItemModifier>`。所以**XML 里不写 `modifier_group` 的词缀加载完就是孤儿**，谁也拿不到。

第二层是**怎么选**：组提供 `GetModifiersBasedOnQuality(ItemQuality)` 按品质返回候选、`GetRandomItemModifierLootScoreBased()` 按 `LootDropScore` 抽、`GetRandomItemModifierProductionScoreBased()` 按 `ProductionDropScore` 抽。选定一组词缀后，逐个调 `ModifyDamage` / `ModifySpeed` / `ModifyArmor` 之类把加成叠到 [ItemObject](../ItemObject) 的原始数值上。

三条真会咬人的边界：

1. **加值型方法有 1 的下限，倍率型对 0 没有。** `ModifyDamage(0)` 返回 1，但 `ModifyMountSpeed(0)` 返回 0——因为 `ModifyFactor` 一进来就 `if (baseValue == 0) return 0;`，外层的 `Math.Max` 拿到的还是 0。**给一个基础速度为 0 的马匹套上马速词缀，速度仍然是 0。**

2. **品质属性的解析走的是编译期字符串哈希 switch。** 私有 `ReadItemQuality` 用 `<PrivateImplementationDetails>.ComputeStringHash(text)` 对 `"poor"` / `"inferior"` / `"common"` / `"fine"` / `"masterwork"` / `"legendary"` 六个小写字面量分派，**任何不精确匹配的字符串（包括大小写不同、空串、拼错）都静默回落到 `ItemQuality.Common`**。它不做 `Enum.TryParse`，也不抛异常。

3. **`Equals` 只比 `StringId`。** `public bool Equals(ItemModifier other)` 的实现是 `other != null && base.StringId == other.StringId`，不是引用比较也不是值比较。而 `GetHashCode()` 是 `base.StringId.GetDeterministicHashCode()`。这意味着它**只重写了 `Equals(ItemModifier)` 这个具体重载，没有重写 `Equals(object)`**——把两个词缀塞进需要 `Equals(object)` 的结构里（`List.Contains`、不同实现类型的字典）时行为会和你预期不同。

第三条之外还有一个用途层面的：`IsBeneficial()` 只看六个加值型字段（`Damage` / `Speed` / `MissileSpeed` / `Armor` / `HitPoints` / `StackCount`），**完全不看四个倍率型字段，也不看 `PriceMultiplier` / `LootDropScore` / `ProductionDropScore`**。一个只加马速的词缀会被判为「无益」。

## 关键成员

### 加值型修正（int / short）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Damage` | `public int Damage { get; private set; }` | 武器伤害加值。`ModifyDamage` 做 `Math.Max(baseDamage + Damage, 1)`。 |
| `Speed` | `public int Speed { get; private set; }` | 挥砍/突刺速度加值。`ModifySpeed` 同样有 1 的下限。 |
| `MissileSpeed` | `public int MissileSpeed { get; private set; }` | 弹丸飞行速度加值。`ModifyMissileSpeed` 下限 1。 |
| `Armor` | `public int Armor { get; private set; }` | 护甲值加值。`ModifyArmor` 下限 1。 |
| `HitPoints` | `public short HitPoints { get; private set; }` | 物品耐久加值。`ModifyHitPoints(short)` 返回 `short`，下限 1。 |
| `StackCount` | `public short StackCount { get; private set; }` | 堆叠数量加值。`ModifyStackCount(short)` 下限 1。 |

### 倍率型修正（float，走私有 ModifyFactor）

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MountSpeed` | `public float MountSpeed { get; private set; }` | 坐骑移动速度**系数**（不是加值）。XML 属性名是 `horse_speed`，**名字对不上，别按属性名猜语义**。 |
| `Maneuver` | `public float Maneuver { get; private set; }` | 机动性系数，XML 属性名 `maneuver`。 |
| `ChargeDamage` | `public float ChargeDamage { get; private set; }` | 冲锋伤害系数，XML 属性名 `charge_damage`。 |
| `MountHitPoints` | `public float MountHitPoints { get; private set; }` | 坐骑生命系数，XML 属性名 `horse_hit_points`。 |
| `ModifyFactor` | `private static int ModifyFactor(int baseValue, float factor)` | 倍率型方法的公共内核。`baseValue == 0` 直接返回 0；系数为 0 时原样返回；系数 < 1 用 `MathF.Ceiling`（宁可少降一点），系数 > 1 用 `MathF.Floor`（宁可少加一点）。`MBMath.ApproximatelyEquals` 的容差是 `1E-05f`。 |

### 品质与评分

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ItemQuality` | `public ItemQuality ItemQuality { get; private set; }` | 品质标记。XML 属性名是 `quality`，取值 `poor` / `inferior` / `common` / `fine` / `masterwork` / `legendary`。 |
| `ReadItemQuality` | `private ItemQuality ReadItemQuality(XmlNode node)` | 编译期字符串哈希 switch，**未命中一律 `ItemQuality.Common`，不抛异常**。 |
| `LootDropScore` | `public float LootDropScore { get; private set; }` | 战利品掉落权重。XML 里是 `loot_drop_score`，读成 `int` 再转 `float`。 |
| `ProductionDropScore` | `public float ProductionDropScore { get; private set; }` | 工坊生产权重。XML 里是 `production_drop_score`，同样读成 `int` 再转 `float`。 |
| `PriceMultiplier` | `public float PriceMultiplier { get; private set; }` | 价格系数。XML 属性 `price_factor`，**缺省值是 1f**（其它浮点字段缺省 0f）。 |
| `IsBeneficial` | `public bool IsBeneficial()` | 判断是否正向词缀。**只看六个加值型字段**，倍率型与价格、评分一律不算。 |

### 标识与构造

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Name` | `public TextObject Name { get; private set; }` | 本地化名称，标了 `[CachedData]`。构造器里初始化为 `TextObject.GetEmpty()`，所以永远不会为 null，但可能是空串。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 先 `base.Deserialize`，再读全部数值，最后读 `modifier_group` 并调 `AddItemModifier` 入组。**组为 null 时提前 `return`，其余字段已经填完。** |
| `Equals` | `public bool Equals(ItemModifier other)` | 比 `StringId`。**没有对应的 `Equals(object)` 重载。** |
| `GetHashCode` | `public override int GetHashCode()` | `base.StringId.GetDeterministicHashCode()`。与 `Equals` 配套，但 `Equals` 是具体类型重载，两者不是同一个相等契约。 |
| `.ctor` | `public ItemModifier()` | 只把 `Name` 置为空 `TextObject`。**正式实例由 XML 加载产出**，`sealed` 且不可继承。 |

## 真实示例

按组取词缀并把修正叠到物品原始数值上（注意下限语义）：

```csharp
ItemModifierGroup group = MBObjectManager.Instance.GetObject<ItemModifierGroup>("weapon_modifier_group");
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("heavy_bearded_axe");

if (group == null || sword == null)
{
    Debug.Print("missing item or modifier group", 0);
    return;
}

List<ItemModifier> candidates = group.GetModifiersBasedOnQuality(ItemQuality.Fine);
foreach (ItemModifier modifier in candidates)
{
    Debug.Print(modifier.StringId + " beneficial=" + modifier.IsBeneficial() + " quality=" + modifier.ItemQuality, 0);
}

ItemModifier picked = group.GetRandomItemModifierLootScoreBased();
if (picked != null)
{
    int damage = picked.ModifyDamage(sword.PrimaryWeapon.ThrustDamage);
    int speed = picked.ModifySpeed(sword.PrimaryWeapon.SwingSpeed);
    Debug.Print("damage " + sword.PrimaryWeapon.ThrustDamage + " -> " + damage, 0);
    Debug.Print("speed  " + sword.PrimaryWeapon.SwingSpeed + " -> " + speed, 0);
    Debug.Print("stack count = " + picked.ModifyStackCount(1), 0);
}
```

看清加值型与倍率型的差别——同一个词缀对 0 和小值的处理完全不同：

```csharp
ItemModifier speedRider = MBObjectManager.Instance.GetObject<ItemModifier>("horse_speed_boost");

int fromZero = speedRider.ModifyDamage(0);        // 加值型：Math.Max(0 + Damage, 1) = 1
int mountFromZero = speedRider.ModifyMountSpeed(0); // 倍率型：ModifyFactor 先 return 0

Debug.Print("ModifyDamage(0)=" + fromZero, 0);
Debug.Print("ModifyMountSpeed(0)=" + mountFromZero, 0);

int baseManeuver = 100;
Debug.Print("ModifyMountManeuver(100)=" + speedRider.ModifyMountManeuver(baseManeuver), 0);
Debug.Print("ModifyMountCharge(100)=" + speedRider.ModifyMountCharge(baseManeuver), 0);
Debug.Print("ModifyMountHitPoints(100)=" + speedRider.ModifyMountHitPoints(baseManeuver), 0);
Debug.Print("ModifyArmor(20)=" + speedRider.ModifyArmor(20), 0);
Debug.Print("ModifyStackCount(5)=" + speedRider.ModifyStackCount(5), 0);
```

按品质过滤后再算一遍全套修正（走 `ItemModifierGroup` 的另一条选择路径）：

```csharp
ItemModifierGroup group = MBObjectManager.Instance.GetObject<ItemModifierGroup>("body_armor_modifier_group");

List<ItemModifier> fine = group.GetModifiersBasedOnQuality(ItemQuality.Masterwork);
for (int i = 0; i < fine.Count; i++)
{
    ItemModifier modifier = fine[i];
    Debug.Print(modifier.StringId
        + " price=" + modifier.PriceMultiplier
        + " loot=" + modifier.LootDropScore
        + " production=" + modifier.ProductionDropScore
        + " armor=" + modifier.ModifyArmor(30), 0);
}

ItemModifier produced = group.GetRandomItemModifierProductionScoreBased();
Debug.Print("production pick = " + produced.StringId, 0);
```

## 风险与边界

- **`sealed`，不能继承。** 想改行为只能改 XML 或改组的选择逻辑。
- **不是存档对象。** 继承 `MBObjectBase` 只为拿到 `StringId` 与 `MBObjectManager` 寻址能力。存档里存的是物品上的引用，词缀定义变了读档后拿到的是新定义。
- **`ModifyFactor` 对 0 不兜底。** 基础速度为 0 的坐骑套倍率词缀仍然是 0。加值型方法的 1 下限**不适用于**四个倍率型方法。
- **`IsBeneficial` 漏判倍率型词缀。** 只加马速、只加机动性、只改价格倍率的词缀都返回 `false`。用它做 UI 过滤会漏掉一整类。
- **品质解析静默兜底。** 拼错的 `quality` 值一律变成 `common`，加载期没有任何提示。
- **XML 属性名与属性名不同。** `MountSpeed` 读的是 `horse_speed`，`MountHitPoints` 读的是 `horse_hit_points`。按属性名去 XML 里找会找不到。
- **XML 里 `LootDropScore` / `ProductionDropScore` 是整数。** `ReadInt` 之后再转 `float`，写小数会被解析异常或被整数解析吃掉。
- **`Equals` 不是 `Equals(object)`。** 只有 `Equals(ItemModifier)` 这一个具体重载，`List<ItemModifier>.Contains` 能用，走 `object.Equals` 的路径行为不同。
- **`GetHashCode` 依赖 `StringId`。** 手工 `new ItemModifier()` 出来的实例 `StringId` 为 null，`GetDeterministicHashCode()` 会炸。
- **数值属性全是 `private set`。** 运行时改不了，只能改 XML 或反序列化。
- **孤儿词缀不会报错。** `Deserialize` 末尾 `modifier_group` 为 null 就直接 `return`，词缀加载完成但不在任何组里，`GetModifiersBasedOnQuality` 永远扫不到它。

## 依赖关系

- 归属：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId` 与 `MBObjectManager` 寻址；由 [MBObjectManager](../../campaign-ext/MBObjectManager) 的 `GetObject<ItemModifier>(stringId)` 按 id 取
- 装配：[ItemModifierGroup](../ItemModifierGroup) 的 `AddItemModifier` / `GetModifiersBasedOnQuality` / `GetRandomItemModifierLootScoreBased` / `GetRandomItemModifierProductionScoreBased` 决定一个词缀何时被用上
- 消费者：[WeaponComponent](../WeaponComponent) 持有词缀所在组，`[ItemObject](../ItemObject)` 的武器形态最终拿到叠加后的数值
- 品质枚举：`ItemQuality`（`poor` / `inferior` / `common` / `fine` / `masterwork` / `legendary`），与锻造与战利品共用
- 倍率内核：`TaleWorlds.Library.MBMath.ApproximatelyEquals`，容差常量写在 `ModifyFactor` 里
- 加载顺序：[Game](../Game) 的 `RegisterTypes` 用 typeId 6 注册、`LoadBasicFiles()` 调 `LoadXML("ItemModifiers", false)`——**必须早于 `ItemModifierGroups`**，因为组在装载时要靠 `modifier_group` 找词缀
- 本地化：[TextObject](../../localization/TextObject) 承载 `Name`，`Deserialize` 用 `XmlHelper.ReadString` 填
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)