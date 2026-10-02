---
title: "ItemModifierGroup"
description: "品质词缀组：一个可按掉落权重随机产出 ItemModifier 的 MBObjectBase 容器，是掉落表与合成模板共同引用的对象。"
---

# ItemModifierGroup

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ItemModifierGroup : MBObjectBase`
**Base:** `TaleWorlds.ObjectSystem.MBObjectBase`
**File:** `TaleWorlds.Core/ItemModifierGroup.cs`

## 概述

`ItemModifierGroup` 回答一个问题：**这件物品能从哪些品质词缀里长出来，长出来的概率各是多少。** 它是一个 `MBObjectBase`（XML 加载的全局数据对象），内部持有三个列表：`MBList<ItemModifier> _itemModifiers`（词条本体）、`MBList<ValueTuple<ItemModifier, float>> _lootDropItemModifierScores`（战利品权重）、`MBList<ValueTuple<ItemModifier, float>> _productionDropItemModifierScores`（生产工坊权重）。两个权重表都由同一个私有方法 `InitializeDropScoreLists()` 从词条列表加上两个「无词缀」哨兵项构造而成。它在物品体系里是 [ItemModifierGroup](../ItemModifierGroup) → `ItemModifier` 这条链的**上游容器**，[ItemComponent](../ItemComponent) 的 `ItemModifierGroup` 属性指向它，[ItemObject](../ItemObject) 的合成武器路径通过 [Crafting](../Crafting) 引用它。

## 心智模型

**记住「三份列表、两次初始化、一个反注册方向」这条主线。**

装配方向是 `ItemModifier` → 组，而不是 组 → 词缀。`ItemModifier.Deserialize` 的最后几行是：`MBObjectManager.Instance.ReadObjectReferenceFromXml<ItemModifierGroup>("modifier_group", node)`，拿到组就 `itemModifierGroup.AddItemModifier(this)`。也就是说**组里没有词缀时，通常是词缀自己把自己注册进来的**。这也解释了 [ItemComponent](../ItemComponent) 的 `Deserialize` 为什么反方向解析同一个 `modifier_group` 属性——组件侧要拿到组，词缀侧要挂进组。

**两次初始化是这个类型最大的坑。** `InitializeDropScoreLists()` 是私有的，只在 `ItemModifierGroup.Deserialize` 末尾被调一次。它遍历当时的 `_itemModifiers`，把每个词缀的 `LootDropScore` / `ProductionDropScore` 灌进两个权重表，**然后各追加一个 `(null, NoModifierLootScore)` / `(null, NoModifierProductionScore)` 哨兵项**，代表「这件物品可能不带词缀」。于是：**在 `Deserialize` 之后调 `AddItemModifier`，新词缀会出现在 `ItemModifiers` 里，但永远不会出现在两个权重表里**——也就是 `GetRandomItemModifierLootScoreBased()` 永远抽不到它。反过来，如果你在 `Deserialize` 之前调 `AddItemModifier`（比如在更早的加载阶段手动装配），它会进权重表，但 `NoModifierLootScore` / `NoModifierProductionScore` 此刻还是 0，「无词缀」这个选项权重为零。**两个方向各错一半，唯一正确姿势是让 `ItemModifier.Deserialize` 自己走完注册，然后谁都别再动。**

第二个坑是 **`AddItemModifier` 没有去重**。它就是 `this._itemModifiers.Add(itemModifier)`，重复调同一个词缀会加两次，权重表里也会出现两个同权重项（如果发生在 `InitializeDropScoreLists` 之前），实际概率翻倍。

第三个坑是**「无词缀」不是一个可判别的返回值**。`GetRandomItemModifierLootScoreBased()` 返回 `null` 表示抽到了哨兵项。**调用方必须处理 null**，而源码里 `Equipment` 的 `GetRandomEquipmentElements` 走的正是这条路。返回非 null 就一定是有效词缀，返回 null 不是错误。

第四个坑是**两个概率源不可互换**。`LootDropScore`（战利品掉落）与 `ProductionDropScore`（工坊生产）来源不同、数值不同，由 `GetRandomItemModifierLootScoreBased()` 与 `GetRandomItemModifierProductionScoreBased()` 分别选择。选错会得到跟设计意图不同的分布。

第五个是 `GetModifiersBasedOnQuality(ItemQuality)` 是**每次都 new 一个新 `List<ItemModifier>`**（LINQ `Where().ToList()`）。它只用于筛选展示，不是权重查询——**不要拿它的结果去推断概率**。

第六个是**默认构造器把 StringId 设成空串**。`public ItemModifierGroup() : base("")` 与 `public ItemModifierGroup(string id) : base(id)` 并存。前者造出来的对象 `StringId == ""`，用 `MBObjectManager.Instance.GetObject<ItemModifierGroup>("")` 能不能取到取决于注册方式；**正式组一律走 XML 加载**，两个构造器都只是给 `MBObjectManager` 和手工装配用的。全树 11,385 个 `.cs` 里**没有任何一处 `new ItemModifierGroup(`**——连游戏自己都不用这两个构造器。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `NoModifierLootScore` | `public int NoModifierLootScore { get; private set; }` | 「不带词缀」这个选项在战利品掉落里的权重。由 `XmlHelper.ReadInt(node, "no_modifier_loot_score")` 读入。**为 0 等于彻底关掉裸物品掉落。** |
| `NoModifierProductionScore` | `public int NoModifierProductionScore { get; private set; }` | 同上，但作用于工坊生产。对应 XML 属性 `no_modifier_production_score`。 |
| `ItemModifiers` | `public MBReadOnlyList<ItemModifier> ItemModifiers { get; }` | 词条列表的只读视图，包的是 `_itemModifiers` 这个 `MBList`。**注意 `MBReadOnlyList<T> : List<T>`（TaleWorlds.Library），它不是只读**——拿到的引用强转回 `List<ItemModifier>` 就能改。类型名字有误导性。 |
| `.ctor` | `public ItemModifierGroup() : base("")` | 空 StringId 构造。**全树无调用点。** |
| `.ctor` | `public ItemModifierGroup(string id) : base(id)` | 指定 StringId 构造。**全树无调用点。** |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | `base.Deserialize` → `XmlHelper.ReadInt` 两个分数 → **`InitializeDropScoreLists()`**。这是两个权重表**唯一**的构造时机。 |
| `AddItemModifier` | `public void AddItemModifier(ItemModifier itemModifier)` | 词缀把自己挂进组。**不去重。** `ItemModifier.Deserialize` 是全树唯一的调用方。**在 `Deserialize` 之后调它，新词缀不进权重表。** |
| `GetRandomItemModifierLootScoreBased` | `public ItemModifier GetRandomItemModifierLootScoreBased()` | 按 `LootDropScore` 加权随机抽一个词缀。**可能返回 null**（抽中「无词缀」哨兵）。 |
| `GetRandomItemModifierProductionScoreBased` | `public ItemModifier GetRandomItemModifierProductionScoreBased()` | 同上，但用 `ProductionDropScore`。**两个概率源不可互换。** |
| `GetModifiersBasedOnQuality` | `public List<ItemModifier> GetModifiersBasedOnQuality(ItemQuality quality)` | 按 `ItemQuality` 过滤，返回**新建的** `List`。`ItemModifiers` 为空时返回空列表而非 null。**每次调用都做一次 O(n) 扫描加一次堆分配。** |
| `InitializeDropScoreLists` | `private void InitializeDropScoreLists()`（私有） | 从 `_itemModifiers` 构造两个权重表并追加两个 `(null, score)` 哨兵。**只在 `Deserialize` 末尾调一次，不幂等——重跑会重复追加。** |
| `_itemModifiers` | `private readonly MBList<ItemModifier> _itemModifiers` | 词条本体列表。三个列表里唯一是 `readonly` 的。 |
| `_lootDropItemModifierScores` | `private readonly MBList<ValueTuple<ItemModifier, float>> _lootDropItemModifierScores` | 战利品权重表，`float` 权重。`MBRandom.ChooseWeighted` 的输入。 |
| `_productionDropItemModifierScores` | `private readonly MBList<ValueTuple<ItemModifier, float>> _productionDropItemModifierScores` | 生产权重表。结构同上。 |

## 真实示例

按 XML id 取组并抽一个战利品词缀（**必须处理 null**）：

```csharp
ItemModifierGroup group = MBObjectManager.Instance.GetObject<ItemModifierGroup>("legendary_modifier_group");
if (group == null)
{
    Debug.Print("modifier group not loaded", 0);
    return;
}

ItemModifier rolled = group.GetRandomItemModifierLootScoreBased();
if (rolled == null)
{
    Debug.Print("rolled no modifier (plain item)", 0);
}
else
{
    Debug.Print("rolled quality = " + rolled.ItemQuality, 0);
}
```

查某个品质档位下有哪些词缀（**返回新列表，不是权重**）：

```csharp
ItemModifierGroup group = MBObjectManager.Instance.GetObject<ItemModifierGroup>("legendary_modifier_group");
List<ItemModifier> legendaries = group.GetModifiersBasedOnQuality(ItemQuality.Legendary);

Debug.Print("legendary count = " + legendaries.Count, 0);
foreach (ItemModifier modifier in legendaries)
{
    Debug.Print("  " + modifier.StringId + " price x" + modifier.PriceMultiplier, 0);
}
```

遍历全部词条（`ItemModifiers` 是 `MBReadOnlyList<ItemModifier>`，可直接 foreach）：

```csharp
ItemModifierGroup group = MBObjectManager.Instance.GetObject<ItemModifierGroup>("legendary_modifier_group");
foreach (ItemModifier modifier in group.ItemModifiers)
{
    Debug.Print(modifier.StringId
        + " loot=" + modifier.LootDropScore
        + " production=" + modifier.ProductionDropScore
        + " beneficial=" + modifier.IsBeneficial(), 0);
}
Debug.Print("plain drop weight = " + group.NoModifierLootScore, 0);
```

从组件侧拿组（`ItemComponent.ItemModifierGroup` 是 `protected set`，只能读）：

```csharp
ItemObject blade = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Weapon0).Item;
if (blade != null && blade.ItemComponent != null)
{
    ItemModifierGroup attached = blade.ItemComponent.ItemModifierGroup;
    if (attached != null)
    {
        ItemModifier candidate = attached.GetRandomItemModifierProductionScoreBased();
        Debug.Print("production roll = " + (candidate == null ? "none" : candidate.StringId), 0);
    }
}
```

## 风险与边界

- **`AddItemModifier` 在 `Deserialize` 之后无效于权重表。** 权重表只由 `InitializeDropScoreLists()` 构造一次。加完的词缀 `ItemModifiers` 里有、`GetRandom*` 抽不到。
- **反过来在 `Deserialize` 之前加，哨兵权重是 0。** `NoModifierLootScore` / `NoModifierProductionScore` 那时还没读入，「不带词缀」这个选项等价于不存在。
- **`AddItemModifier` 不去重。** 重复注册同一 `ItemModifier` 会让权重表里出现同权重重复项，实际概率翻倍。
- **`InitializeDropScoreLists` 不幂等。** 私有方法被重复调用（例如自定义子类 override `Deserialize` 时误调）会重复追加哨兵项。
- **`GetRandom*` 可能返回 null。** 那是「无词缀」的正常结果，不是错误。全树唯一的调用方是 [Equipment](../Equipment) 的 `GetRandomEquipmentElements`。
- **`ItemModifiers` 名字骗人。** 返回的 `MBReadOnlyList<T>` 继承自 `List<T>`，是 `TaleWorlds.Library` 的类型，**强转回 `List<T>` 就能改**。
- **`GetModifiersBasedOnQuality` 每次分配新列表 + O(n) 扫描。** 不要在循环里调。
- **两个概率源不可互换。** `LootDropScore` 与 `ProductionDropScore` 由不同的 XML 属性决定。
- **`GetModifiersBasedOnQuality` 不代表概率。** 它只做过滤，返回列表顺序就是 `_itemModifiers` 的插入顺序。
- **全树无 `new ItemModifierGroup(`。** 两个构造器只是 `MBObjectBase` 的标准入口，游戏自己不用。
- **不 `sealed`。** 可继承，但继承了也改不了两个权重表（`readonly` 私有字段）。
- **`AutoGeneratedInstanceCollectObjects` 是空的。** 词条列表不进存档收集；组本身随 XML 重建。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/ItemModifierGroup.cs` 公开表面**完全一致**（11 个公开成员、3 个私有字段）。`bannerlord-1.4.5/` 本机只有 `Bannerlord.Source/bin/`，无解出的 C#，未能核对。

## 依赖关系

- 基类：[MBObjectBase](../../campaign-ext/MBObjectBase) 提供 `StringId` / `Id` / `Initialize()` 与 `Deserialize` 默认实现
- 注册与查找：[MBObjectManager](../../campaign-ext/MBObjectManager) 的 `GetObject<ItemModifierGroup>(stringId)` 是组的唯一取用入口，`ReadObjectReferenceFromXml<ItemModifierGroup>` 是词缀侧的注册钩子
- 词条：本组的 `ItemModifiers` 元素类型是 `ItemModifier`（`TaleWorlds.Core`，本机尚无对应深写页），它提供 `LootDropScore` / `ProductionDropScore` / `PriceMultiplier` / `ItemQuality` / `Modify*` 系列
- 反向引用：[ItemComponent](../ItemComponent) 的 `ItemModifierGroup` 属性持有本类型实例
- 合成引用：[Crafting](../Crafting) 的 `CraftingTemplate.ItemModifierGroup` 与 [ItemObject](../ItemObject) 的 `<CraftedItem modifier_group="...">` 分支
- 消费者：[Equipment](../Equipment) 的 `GetRandomEquipmentElements` 是全树唯一的 `GetRandomItemModifier*` 调用方
- 生效值：[EquipmentElement](../EquipmentElement) 的 `GetModified*` 系列在加工裸值时读取所属词缀
- 桶首页：[core-extra API 分区](../)