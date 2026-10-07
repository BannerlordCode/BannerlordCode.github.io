---
title: "ArmorComponent"
description: "护甲组件：ItemComponent 的护甲派生类，四个护甲值 + 马术三项加成 + 六个嵌套枚举 + SkinMask 身体可见性遮罩，全部由 XML 的 <Armor> 节点填充，属性一律 private set。"
---

# ArmorComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ArmorComponent : ItemComponent`
**Base:** `TaleWorlds.Core.ItemComponent`（→ `TaleWorlds.ObjectSystem.MBObjectBase`）
**File:** `TaleWorlds.Core/ArmorComponent.cs`（338 行 / 13591 字节）

## 概述

`ArmorComponent` 是护甲类物品的**行为插槽**，源码 338 行里包含 19 个 `public` 属性（全部 `private set`）、1 个构造函数、2 个 `override`、6 个嵌套枚举。它填的东西可以分成四组：

- **护甲数值**：四个 `int`，即 `HeadArmor` / `BodyArmor` / `LegArmor` / `ArmArmor`，由 XML 的 `head_armor` / `body_armor` / `leg_armor` / `arm_armor` 填充。
- **马术加成**：`ManeuverBonus` / `SpeedBonus` / `ChargeBonus`，只有 `ItemTypeEnum.HorseHarness` 的物品用得上。
- **外观遮罩**：[SkinMask](../SkinMask) 类型的 `MeshesMask`，由四个布尔属性 `covers_head` / `covers_body` / `covers_hands` / `covers_legs` **取反**后按位或出来——**注意语义是反的**：不写 `covers_head` 就等于把 `SkinMask.HeadVisible` 置上，即「不遮挡头部」。
- **材质与体型**：[ArmorMaterialTypes](../ArmorMaterialTypes) 的 `MaterialType`（影响护甲声音）、[BodyMeshTypes](../BodyMeshTypes) / [BodyDeformTypes](../BodyDeformTypes)（体型网格），以及 [HairCoverTypes](../HairCoverTypes) / [BeardCoverTypes](../BeardCoverTypes) / [HorseHarnessCoverTypes](../HorseHarnessCoverTypes) / [HorseTailCoverTypes](../HorseTailCoverTypes) 四个遮挡枚举。

## 心智模型

把它当成**「XML 属性 → 只读属性的单向装配器」**就对了。这个类型**没有任何写入 API**：19 个属性全是 `{ get; private set; }`，唯一的构造函数 `ArmorComponent(ItemObject item)` 只做一件事 `base.Item = item;`——**它连一个数值都不接受**。所以护甲的每一个数值只有一条来路：`ItemObject.Deserialize` 遇到 `<Armor>` 节点后调 `new ArmorComponent(this)`，再调它的 `Deserialize(objectManager, node)`。

`Deserialize` 是全篇最长的一段，值得拆成四组看，因为**每组的容错策略都不一样**：

**第一组，纯 `int`，缺失即 0。** `HeadArmor` / `BodyArmor` / `LegArmor` / `ArmArmor` / `FamilyType` / `ManeuverBonus` / `SpeedBonus` / `ChargeBonus` / `StealthFactor` 全是 `node.Attributes["x"] != null ? int.Parse(...) : 0` 的形状。

**第二组，枚举解析，容错策略分裂。** `MaterialType` 走 `Enum.Parse(typeof(ArmorMaterialTypes), value)`——**没传 `ignoreCase`**，所以 `material_type="plate"` 会抛异常，必须写 `"Plate"`。而 `HairCoverType` / `BeardCoverType` / `ManeCoverType` / `TailCoverType` 全都传了第三个参数 `true`（忽略大小写）。**同一段代码里两套大小写策略**，这是本页最值得记住的一条。

**第三组，字符串硬比较。** `BodyMeshType` 和 `BodyDeformType` 不用 `Enum.Parse`，而是手写 `if (value == "upperbody") / else if (value == "shoulders")`——**同样大小写敏感**，而且写第三个值（比如 `"belly"`）会被静默吞掉，保留默认值 `Normal` / `Medium`。

**第四组，布尔取反成遮罩。** 四个 `covers_*` 各自算一个 `bool flag`，然后：

```csharp
if (!flag) { this.MeshesMask |= SkinMask.HeadVisible; }
if (!flag2) { this.MeshesMask |= SkinMask.BodyVisible; }
if (!flag3) { this.MeshesMask |= SkinMask.HandsVisible; }
if (!flag4) { this.MeshesMask |= SkinMask.LegsVisible; }
```

`MeshesMask` 只在 `Deserialize` 里被 `|=` 累积，**没有一处把它清零**——所以同一个实例被 `Deserialize` 两次（比如重复加载）遮罩只会越来越宽，不会恢复。

最后一个心智锚点：**`GetCopy()` 漏了一个成员**。1.3.0 的 `GetCopy()` 用对象初始化器拷 19 个属性（`HeadArmor` … `StealthFactor`），但 `Item` 是 `base.Item = item` 单独传的。而 `GetCopy()` 是 [Crafting](../Crafting) 合成武器重建流程唯一用到的深拷贝入口，**在这个版本里它恰好是完整的**——但到 1.4.6 官方加了 `IsNoSlim` 属性，`GetCopy()` 却没跟着拷（见跨版本段）。**别把 `GetCopy()` 当通用 Clone 用。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `HeadArmor` | `public int HeadArmor { get; private set; }` | 头部护甲值。XML 属性 `head_armor`，缺失为 0。参与 [ItemObject](../ItemObject).`CalculateEffectiveness` 的加权（系数 34）。 |
| `BodyArmor` | `public int BodyArmor { get; private set; }` | 躯干护甲值。XML `body_armor`。**权重最高（系数 42）**，而且 `ItemTypeEnum.HorseHarness` 时走完全不同的公式 `BodyArmor * 1.67f`。 |
| `LegArmor` | `public int LegArmor { get; private set; }` | 腿部护甲值。XML `leg_armor`，系数 12。 |
| `ArmArmor` | `public int ArmArmor { get; private set; }` | 手臂护甲值。XML `arm_armor`，系数 12。注意 XML 里没有 `hand_armor`，手部护甲靠 [SkinMask](../SkinMask) 的 `HandsVisible` 表达。 |
| `ManeuverBonus` | `public int ManeuverBonus { get; private set; }` | 马匹机动加成。XML `maneuver_bonus`，缺失 0。 |
| `SpeedBonus` | `public int SpeedBonus { get; private set; }` | 马匹速度加成。XML `speed_bonus`，缺失 0。 |
| `ChargeBonus` | `public int ChargeBonus { get; private set; }` | 冲锋加成。XML `charge_bonus`，缺失 0。 |
| `FamilyType` | `public int FamilyType { get; private set; }` | 家族类型编号。XML `family_type`。本类里没有任何逻辑读它，是纯粹透传给渲染层的整数标签。 |
| `MultiMeshHasGenderVariations` | `public bool MultiMeshHasGenderVariations { get; private set; }` | 是否按性别生成不同 mesh。**默认值是 `true`**（先无条件赋值再读属性），XML `has_gender_variations` 存在时才覆盖。 |
| `MaterialType` | `public ArmorComponent.ArmorMaterialTypes MaterialType { get; private set; }` | 护甲材质，决定护甲声音与金属质感。XML `material_type`，**`Enum.Parse` 不忽略大小写**，缺失为 [ArmorMaterialTypes](../ArmorMaterialTypes).`None`。被 [Agent](../../mission/Agent) 的 `SetBodyArmorMaterialType` 消费。 |
| `MeshesMask` | `public SkinMask MeshesMask { get; private set; }` | 身体可见性遮罩，由四个 `covers_*` **取反**累积而成。只被 `|=` 更新、无清零路径。 |
| `BodyMeshType` | `public ArmorComponent.BodyMeshTypes BodyMeshType { get; private set; }` | 体型网格变体。XML `body_mesh_type` 只认 `"upperbody"` / `"shoulders"` 两个小写字面量，其余静默保留默认 `Normal`。 |
| `BodyDeformType` | `public ArmorComponent.BodyDeformTypes BodyDeformType { get; private set; }` | 体型变形档位。XML `body_deform_type` 只认 `"large"` / `"skinny"`，其余静默保留默认 `Medium`。 |
| `HairCoverType` | `public ArmorComponent.HairCoverTypes HairCoverType { get; private set; }` | 头发遮挡档位。XML `hair_cover_type`，`Enum.Parse(..., true)` **忽略大小写**，缺失为 `None`。 |
| `BeardCoverType` | `public ArmorComponent.BeardCoverTypes BeardCoverType { get; private set; }` | 胡须遮挡档位。XML `beard_cover_type`，忽略大小写，缺失 `None`。 |
| `ManeCoverType` | `public ArmorComponent.HorseHarnessCoverTypes ManeCoverType { get; private set; }` | 马鬃遮挡档位。XML `mane_cover_type`，忽略大小写，缺失 `None`。 |
| `TailCoverType` | `public ArmorComponent.HorseTailCoverTypes TailCoverType { get; private set; }` | 马尾遮挡档位。XML `tail_cover_type`，忽略大小写，缺失 `None`。 |
| `StealthFactor` | `public int StealthFactor { get; private set; }` | 潜行影响。XML `stealth_factor`，用 `CultureInfo.InvariantCulture.NumberFormat` 解析（小数点固定为 `.`），缺失 0。 |
| `ReinsMesh` | `public string ReinsMesh { get; private set; }` | 缰绳 mesh 名。XML `reins_mesh`，**缺失是空串 `""` 而不是 null**。 |
| `ReinsRopeMesh` | `public string ReinsRopeMesh { get; }` | **只读派生属性**，返回 `this.ReinsMesh + "_rope"`。`ReinsMesh` 为 `""` 时会得到 `"_rope"`——不是 null，是个看起来合法的字符串。 |
| 构造函数 | `public ArmorComponent(ItemObject item)` | 唯一构造函数，只做 `base.Item = item;`。**不接受任何数值**——护甲值只能由 XML 填。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 全部 19 个属性的唯一写入口。四组容错策略各不相同（见心智模型）。**必须先 `base.Deserialize(objectManager, node)`**，否则 `modifier_group` 不会被解析。 |
| `GetCopy` | `public override ItemComponent GetCopy()` | 深拷贝，返回新的 `ArmorComponent(base.Item)` 加 19 个属性初始化。调用方只有 [Crafting](../Crafting) 与 `CraftingCampaignBehavior` 的合成武器重建流程。 |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档遍历钩子，**实现只有一句 `base.AutoGeneratedInstanceCollectObjects(collectedObjects);`**。护甲组件不进存档。 |
| `ArmorMaterialTypes` | `public enum ArmorMaterialTypes : sbyte` | 嵌套枚举，底层类型 `sbyte`，5 个值。见独立页 [ArmorMaterialTypes](../ArmorMaterialTypes)。 |
| `HairCoverTypes` / `BeardCoverTypes` / `HorseHarnessCoverTypes` / `HorseTailCoverTypes` / `BodyMeshTypes` / `BodyDeformTypes` | `public enum ...` | 另外五个嵌套枚举，各自都有独立页。 |

## 真实示例

读一件护甲的四个数值与材质（**先用 `HasArmorComponent` 判存在**，因为 `ItemObject.ArmorComponent` 是一次 `as` 转型，失败返回 null）：

<!-- xml-id-unverifiable: v1.3.0 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.3.0 源码树均无法核对——该版本未随附 XML 语料。
```csharp
ItemObject helm = MBObjectManager.Instance.GetObject<ItemObject>("empire_helmet_a");
if (helm == null || !helm.HasArmorComponent)
{
    Debug.Print("not an armor item or missing <Armor> node", 0);
    return;
}

ArmorComponent armor = helm.ArmorComponent;
Debug.Print("head=" + armor.HeadArmor + " body=" + armor.BodyArmor
    + " leg=" + armor.LegArmor + " arm=" + armor.ArmArmor, 0);
Debug.Print("material=" + armor.MaterialType + " stealth=" + armor.StealthFactor, 0);
Debug.Print("head visible under helm = " + armor.MeshesMask.HasAnyFlag(SkinMask.HeadVisible), 0);
Debug.Print("reins = '" + armor.ReinsMesh + "' rope = '" + armor.ReinsRopeMesh + "'", 0);
```

算这套护甲的性价比（复刻 [ItemObject](../ItemObject).`CalculateEffectiveness` 里护甲那一段的公式，两条分支完全不同）：

```csharp
public static float ArmorEffectiveness(ItemObject item)
{
    ArmorComponent armor = item.ArmorComponent;
    if (armor == null)
    {
        return 1f;
    }
    if (item.Type == ItemObject.ItemTypeEnum.HorseHarness)
    {
        return armor.BodyArmor * 1.67f;
    }
    return (armor.HeadArmor * 34f + armor.BodyArmor * 42f + armor.LegArmor * 12f + armor.ArmArmor * 12f) * 0.03f;
}
```

在任务里给单位换装并按材质调音效（同 [MissionScreen](../../mission-ext/MissionScreen) 第 3326–3332 行的形状；那边直接 `.ArmorComponent.MaterialType`，装备非护甲就会 NRE）：

```csharp
public static void RefreshArmorMaterial(Agent agent)
{
    ItemObject bodyItem = agent.SpawnEquipment[EquipmentIndex.Body].Item;
    ArmorComponent.ArmorMaterialTypes material = ArmorComponent.ArmorMaterialTypes.None;
    if (bodyItem != null && bodyItem.ArmorComponent != null)
    {
        material = bodyItem.ArmorComponent.MaterialType;
    }
    agent.SetBodyArmorMaterialType(material);
    Debug.Print("armor sound param = " + (float)material * 0.1f, 0);
}
```

自定义一件自己的护甲（**只能走 XML**——`ItemObject.ItemComponent` 是 `private set`，`ArmorComponent` 的属性也全是 `private set`）：

```csharp
// <Item id="my_heavy_armor" name="my_heavy_armor" mesh="my_armor_mesh" type="body_armor">
//   <ItemComponent>
//     <Armor body_armor="60" head_armor="20" leg_armor="18" arm_armor="18"
//            material_type="Plate" covers_body="true" stealth_factor="15"
//            body_mesh_type="shoulders" hair_cover_type="All" />
//   </ItemComponent>
// </Item>
ItemObject plate = MBObjectManager.Instance.GetObject<ItemObject>("my_heavy_armor");
if (plate != null && plate.HasArmorComponent)
{
    Debug.Print("body=" + plate.ArmorComponent.BodyArmor + " material=" + plate.ArmorComponent.MaterialType, 0);
}
```

## 风险与边界

- **属性全 `private set`，XML 是唯一填充途径。** 19 个数值没有任何程序化写入入口。想在运行时改护甲值只能改 XML 定义或 `new ArmorComponent(item)` + `Deserialize`（但后者会跳过 `MBObjectManager` 的注册流程）。
- **`material_type` 大小写敏感。** `Enum.Parse(typeof(ArmorMaterialTypes), value)` 没传 `ignoreCase`，写 `"plate"` 直接抛异常、中断整个 `MBObjectManager` 加载。而 `hair_cover_type` 等四个忽略大小写——**同一段 `Deserialize` 里两套策略**。
- **`body_mesh_type` / `body_deform_type` 静默吞掉未知值。** 手写 `if` 比较，没命中就保留默认值 `Normal` / `Medium`，**没有任何日志**。写 `"UpperBody"`（大写 U）会被当成没写。
- **`MeshesMask` 只增不减。** `Deserialize` 里全是 `|=`，没有清零。同一实例重复 `Deserialize` 会让遮罩单调变宽。
- **`covers_*` 的语义是反的。** 不写 `covers_head` 意味着**不遮挡头部**（会置上 `SkinMask.HeadVisible`）。加一件没写 `covers_body` 的胸甲，头和四肢会同时变透明。
- **`ReinsRopeMesh` 会产出 `"_rope"`。** `ReinsMesh` 缺失时是 `""`（不是 null），派生属性因此返回 `"_rope"` 而不是空——判空要用 `string.IsNullOrEmpty`。
- **`GetCopy()` 不能当通用 Clone。** 1.3.0 里它拷全 19 个属性，但 1.4.6 官方加了 `IsNoSlim` 却忘了加进 `GetCopy()`。且它的调用方只有 [Crafting](../Crafting) 的合成流程，别的场景没测过。
- **不进存档。** `AutoGeneratedInstanceCollectObjects` 只有一句 `base` 调用。护甲数值随物品 XML 重建，改 XML 会让旧存档里的物品呈现新数值（但不会崩）。
- **`FamilyType` 是纯透传整数。** 本类里没有任何逻辑读它，含义完全在渲染侧。
- **嵌套枚举的 `Num*` 成员是哨兵。** [HairCoverTypes](../HairCoverTypes).`NumHairCoverTypes`、[BodyMeshTypes](../BodyMeshTypes).`BodyMeshTypesNum` 等是数组长度哨兵，不是可选值。另外 [BeardCoverTypes](../BeardCoverTypes) 的哨兵拼错成了 `NumBeardBoverTypes`（缺 `r`）。
- **类不是 `sealed`。** 可以被 mod 继承，但继承后所有属性仍是 `private set`，你没法在子类里补数值——除了 override `Deserialize` 再改。

## 跨版本提示

`ArmorComponent.cs` 在五棵树里的行数相同（338 行），但字节数与**公开表面**都在变：

| 版本 | 字节数 | 公开表面差异 |
| --- | --- | --- |
| 1.3.0 | 13591 | 19 个属性 + 6 个嵌套枚举 |
| 1.3.15 | 14078 | **公开表面与 1.3.0 完全一致**；差异全是反编译产物形态——`node.Attributes["x"]` 变成 `node.Attributes.get_ItemOf("x")`，`Split(new char[] { ... })` 折行等。零语义变化。 |
| 1.4.6 / 1.4.7 / 1.5.3 | 13943 | **新增 `public bool IsNoSlim { get; private set; }`（第 20 个属性）**，`Deserialize` 新增一行读 XML 属性 `no_slim`：`this.IsNoSlim = node.Attributes["no_slim"] != null && Convert.ToBoolean(node.Attributes["no_slim"].Value);` |

**1.3.0 → 1.4.6 的唯一实质变更就是 `IsNoSlim`。** 你的 1.3.0 mod 想在新版本上跑，改用 `no_slim` 这个 XML 属性即可；反过来，从 1.4.6 回迁时这个属性不存在，`Deserialize` 会忽略它。

**注意 `GetCopy()` 的漏洞在 1.4.6 就存在了**：官方加了 `IsNoSlim` 属性却没把它加进 `GetCopy()` 的对象初始化器。所以 1.4.6+ 的合成流程复制护甲时会静默丢掉这个标志——`ItemComponent` 那页说的「漏拷 `IsNoSlim`」指的就是这一处。

`ArmorMaterialTypes` 枚举本身在五个版本里**逐字节一致**（5 个值、`sbyte` 底层、`None` / `Cloth` / `Leather` / `Chainmail` / `Plate`），详见它自己的页。

## 依赖关系

- 基类：[ItemComponent](../ItemComponent) 提供 `Item` / `ItemModifierGroup` 与 `Deserialize` / `GetCopy` 的抽象契约，`ArmorComponent` 是它六个派生类之一
- 宿主：[ItemObject](../ItemObject) 的 `ArmorComponent`（一次 `as` 转型）与 `HasArmorComponent`（判 null），以及 `<Armor>` 标签分支是本类型唯一的装配入口
- 遮罩类型：[SkinMask](../SkinMask) 是 `MeshesMask` 的类型，`covers_*` 的四个布尔直接映射到它的 `HeadVisible` / `BodyVisible` / `HandsVisible` / `LegsVisible` 四个位
- 嵌套枚举：[ArmorMaterialTypes](../ArmorMaterialTypes)、[HairCoverTypes](../HairCoverTypes)、[BeardCoverTypes](../BeardCoverTypes)、[HorseHarnessCoverTypes](../HorseHarnessCoverTypes)、[HorseTailCoverTypes](../HorseTailCoverTypes)、[BodyMeshTypes](../BodyMeshTypes)、[BodyDeformTypes](../BodyDeformTypes) 全部声明在本文件内
- 运行时消费：[Agent](../../mission/Agent) 的 `SetBodyArmorMaterialType` 与私有 `GetProtectorArmorMaterialOfBone` / `GetSoundParameterForArmorType`（后者就是 `(float)armorMaterialType * 0.1f`）
- 视觉侧：[MissionScreen](../../mission-ext/MissionScreen) 在创建 Agent 视觉后读 `SpawnEquipment[EquipmentIndex.Body].Item.ArmorComponent.MaterialType` 并回写给 Agent
- 落位：[EquipmentIndex](../EquipmentIndex) 决定这些数值最终装备到哪个槽位
- 合成流程：[Crafting](../Crafting) 是 `GetCopy()` 唯一的实质调用方
- 桶首页：[core-extra API 分区](../)