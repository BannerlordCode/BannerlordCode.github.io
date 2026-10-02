---
title: "ArmorComponent"
description: "护甲组件：装在 ItemObject 单槽上的护甲值、身体遮挡遮罩与网格变形设置，是 1.4.6 相对 1.3.15 唯一新增成员的类型。"
---

# ArmorComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ArmorComponent : ItemComponent`
**Base:** `TaleWorlds.Core.ItemComponent`
**File:** `TaleWorlds.Core/ArmorComponent.cs`

## 概述

`ArmorComponent` 回答「这件东西穿上身之后，能挡多少伤害、盖住哪块身体、网格怎么变形」。它挂在 [ItemObject](../ItemObject) 的单槽上，由物品 XML 里 `<ItemComponent><Armor .../></ItemComponent>` 装配，是 [ItemComponent](../ItemComponent) 的六个具体派生实现之一。数据上分四组：**护甲数值**（`HeadArmor` / `BodyArmor` / `LegArmor` / `ArmArmor` / `StealthFactor`）、**坐骑加成**（`ManeuverBonus` / `SpeedBonus` / `ChargeBonus`，只在马匹身上生效）、**遮挡遮罩**（`MeshesMask` 由四个 `covers_*` 属性反推出 `SkinMask` 位组合，外加头发/胡子/鬃毛/马尾的 `*CoverType`）、**网格形态**（`MaterialType` / `BodyMeshType` / `BodyDeformType` / `MultiMeshHasGenderVariations` / `IsNoSlim` / `FamilyType`）。七组嵌套枚举是它最容易被忽略的部分——`HairCoverTypes.BeardCoverTypes` 等枚举里都带一个 `...Num...` 哨兵值，那是给数组长度用的，不是语义值。

## 心智模型

把它当成**「穿戴后渲染与减伤的那一半规则」**来用，而不是「物品的护甲值字段的容器」。它的数值属性全是 `private set`，只有 `Deserialize` 能写，也就是**只有 XML 能写**。程序化生成物品时拿不到填数值的官方 API（`ItemObject.ItemComponent` 也是 `private set`），这是整个护甲体系的设计取舍：护甲定义属于内容（XML），不属于代码。

装配时机在 `ItemObject.Deserialize` 的 `<Armor>` 分支：先 `new ArmorComponent(this)`（构造器只做 `base.Item = item`），再 `component.Deserialize(objectManager, xmlNode12)`，最后挂到 `ItemObject.ItemComponent`。所以**同一件物品上写两个 `<Armor>` 节点，第二个会覆盖第一个**——护甲组件不累加。想让一件物品既有护甲值又有武器形态，唯一可行的官方姿势是把护甲值写进 `<Armor>`、把武器形态写进 `<Weapon>`，但因为两者抢同一个单槽，**这个组合在 1.4.6 里做不出来**（[WeaponComponent](../WeaponComponent) 是 `ItemComponent` 的兄弟，不是儿子）。要同时有护甲和武器，mod 必须自己派生一个 `ArmorComponent` 的子类同时继承两边——而 C# 不支持多继承，所以现实答案是在自己的派生类里复制 `WeaponComponent` 的字段。

`MeshesMask` 的推导方向和直觉相反：它**不是**「遮住哪里」，而是「哪里看得见」。`Deserialize` 读四个 `covers_head` / `covers_body` / `covers_hands` / `covers_legs` 属性，凡是**没有**写的部位就 `|= SkinMask.XxxVisible`。换句话说 `covers_head="true"` 什么都不加（头被盖住，不可见），不写 `covers_head` 就 `SkinMask.HeadVisible`。[ItemObject](../ItemObject) 的 `UsingFacegenScaling` 正是靠 `MeshesMask.HasAnyFlag(SkinMask.HeadVisible)` 判断要不要走脸型缩放。

第二个心智锚点是**马匹专用的三个加成**。`ManeuverBonus` / `SpeedBonus` / `ChargeBonus` 写在护甲组件里，但它们只在马鞍/马甲这类马匹护具上被读——[EquipmentElement](../EquipmentElement) 的 `GetModifiedMountManeuver(in harness)` / `GetModifiedMountSpeed(in harness)` / `GetModifiedMountCharge(in harness)` 先取 `this.Item.HorseComponent.Maneuver`，再 `+` 掉 `harness.Item.ArmorComponent.ManeuverBonus`。也就是说**马匹护具自己也必须挂 `ArmorComponent`**，否则加成那半边取不到。

第三个是**战斗数值不是直接读这里**。所有实际生效的护甲值都要经过 [EquipmentElement](../EquipmentElement) 的 `GetModified*Armor()` 系列，它们在读完组件原值后调用 `ItemModifier.ModifyArmor(num)` 再把负数钳到 0。直接读 `ArmorComponent.BodyArmor` 拿到的是**未加工、未钳零**的裸值。

第四个是 `GetCopy()` 的不完整：它的对象初始化器列表覆盖 20 个属性，**唯独漏了 `IsNoSlim`**。而全树只有 [Crafting](../Crafting) 与 `CraftingCampaignBehavior` 会调 `GetCopy()`，所以走合成武器重建路径时 `IsNoSlim` 会静默回落到 false。

## 关键成员

### 护甲数值（`private set`，只能由 `Deserialize` 写）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `HeadArmor` | `public int HeadArmor { get; private set; }` | 头部护甲值。对应 XML 属性 `head_armor`，缺失时为 0。 |
| `BodyArmor` | `public int BodyArmor { get; private set; }` | 躯干护甲值。对应 `body_armor`。**马具（`ItemTypeEnum.HorseHarness`）身上这个值会被 [EquipmentElement](../EquipmentElement) 的 `GetModifiedBodyArmor` 判为 0，改走 `GetModifiedMountBodyArmor`。** |
| `LegArmor` | `public int LegArmor { get; private set; }` | 腿部护甲值。对应 `leg_armor`。 |
| `ArmArmor` | `public int ArmArmor { get; private set; }` | 手臂护甲值。对应 `arm_armor`。 |
| `StealthFactor` | `public int StealthFactor { get; private set; }` | 潜行因子。对应 `stealth_factor`，用 `CultureInfo.InvariantCulture.NumberFormat` 解析成 float 再取整。**值为 0 时 [EquipmentElement](../EquipmentElement) 的 `GetModifiedStealthFactor` 直接返回 0，不走词缀加成。** |
| `FamilyType` | `public int FamilyType { get; private set; }` | 材质家族编号，对应 `family_type`。与 [Monster](../HorseComponent) 的 `FamilyType` 是同一个概念的物品侧版本。 |

### 坐骑加成（只在马匹护具上生效）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ManeuverBonus` | `public int ManeuverBonus { get; private set; }` | 加到坐骑机动上的固定值。对应 `maneuver_bonus`，由 `GetModifiedMountManeuver` 读取。 |
| `SpeedBonus` | `public int SpeedBonus { get; private set; }` | 加到坐骑速度上的固定值。对应 `speed_bonus`，由 `GetModifiedMountSpeed` 读取。 |
| `ChargeBonus` | `public int ChargeBonus { get; private set; }` | 加到坐骑冲撞伤害上的固定值。对应 `charge_bonus`，由 `GetModifiedMountCharge` 读取。 |

### 遮挡遮罩与网格形态

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MeshesMask` | `public SkinMask MeshesMask { get; private set; }` | **「哪里看得见」而不是「哪里被盖住」**。`Deserialize` 对每个缺失的 `covers_*` 属性做 `\|= SkinMask.XxxVisible`。`SkinMask` 是 1.4.6 的扁平枚举，不是 [Flags]，源码里没有任何 `&`/`\|` 运算——**这个属性是按位或出来的数值，但类型系统不保证它。** |
| `HairCoverType` | `public ArmorComponent.HairCoverTypes HairCoverType { get; private set; }` | 头发被遮挡的形态。对应 `hair_cover_type`，`Enum.Parse(..., true)` 大小写不敏感，缺失为 `None`。 |
| `BeardCoverType` | `public ArmorComponent.BeardCoverTypes BeardCoverType { get; private set; }` | 胡须遮挡形态。对应 `beard_cover_type`，缺失为 `None`。枚举里有拼写错误的哨兵 `NumBeardBoverTypes`（Bover 少一个 a），照抄即可。 |
| `ManeCoverType` | `public ArmorComponent.HorseHarnessCoverTypes ManeCoverType { get; private set; }` | 马鬃遮挡形态。对应 `mane_cover_type`，缺失为 `None`。枚举的最后一个成员名就叫 `HorseHarnessCoverTypes`，与枚举类型同名。 |
| `TailCoverType` | `public ArmorComponent.HorseTailCoverTypes TailCoverType { get; private set; }` | 马尾遮挡形态。对应 `tail_cover_type`。枚举只有 `None` 与 `All` 两个值。 |
| `MaterialType` | `public ArmorComponent.ArmorMaterialTypes MaterialType { get; private set; }` | 材质类别（布/皮/锁子甲/板甲）。对应 `material_type`，底层是 **`: sbyte`** 的枚举。影响负重与穿脱耗时。 |
| `BodyMeshType` | `public ArmorComponent.BodyMeshTypes BodyMeshType { get; private set; }` | 身体网格类型。对应 `body_mesh_type`，**不走 `Enum.Parse` 而是手写字符串比较**：只认 `"upperbody"` 与 `"shoulders"`，其它值静默回落 `Normal`。 |
| `BodyDeformType` | `public ArmorComponent.BodyDeformTypes BodyDeformType { get; private set; }` | 体型变形档位。对应 `body_deform_type`，同样是手写比较：只认 `"large"` 与 `"skinny"`，默认 `Medium`。 |
| `MultiMeshHasGenderVariations` | `public bool MultiMeshHasGenderVariations { get; private set; }` | 是否区分性别网格。对应 `has_gender_variations`，**缺省值是 `true`**（源���里先无条件赋 true 再看属性是否存在），与大多数属性的「缺失即 0/false」相反。 |
| `IsNoSlim` | `public bool IsNoSlim { get; private set; }` | 禁止瘦身网格。对应 `no_slim`，**1.4.6 新增**。**注意 `GetCopy()` 没有复制它。** |
| `ReinsMesh` | `public string ReinsMesh { get; private set; }` | 缰绳 mesh 名。对应 `reins_mesh`，**缺失时是空字符串 `""` 而非 null**，所以可以安全拼后缀。 |
| `ReinsRopeMesh` | `public string ReinsRopeMesh { get; }` | 只读派生值，`return this.ReinsMesh + "_rope"`。缰绳的绳索变体。**`ReinsMesh` 为空时会得到字符串 `"_rope"`，不是 null。** |

### 方法与构造

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | `public ArmorComponent(ItemObject item)` | 只做 `base.Item = item`。**所有数值都要等 `Deserialize` 才填**，所以构造完立刻读 `BodyArmor` 拿到的一定是 0。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 先 `base.Deserialize` 解析 `modifier_group`，再逐个读 `head_armor` / `body_armor` / `leg_armor` / `arm_armor` / `family_type` / `maneuver_bonus` / `speed_bonus` / `charge_bonus` / `material_type` / `has_gender_variations` / `body_mesh_type` / `body_deform_type` / `hair_cover_type` / `beard_cover_type` / `mane_cover_type` / `tail_cover_type` / `stealth_factor` / `reins_mesh` / `covers_*` / `no_slim`。整段有 20 多个 `node.Attributes[...]` 直读，**`node` 为 null 时立刻 NRE，且解析用当前线程的区域设置**（`int.Parse` 无 invariantCulture）。 |
| `GetCopy` | `public override ItemComponent GetCopy()` | 返回 `new ArmorComponent(base.Item)` 加 20 个属性的对象初始化器。**漏拷 `IsNoSlim`，也没拷 `ItemModifierGroup`。** 全树只有 [Crafting](../Crafting) 与 `CraftingCampaignBehavior` 会调。 |

### 嵌套枚举

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ArmorMaterialTypes` | `public enum ArmorMaterialTypes : sbyte` | 材质：`None` / `Cloth` / `Leather` / `Chainmail` / `Plate`。**底层是 `sbyte` 不是 int**，跨语言/反射调用时注意装箱类型。 |
| `HairCoverTypes` | `public enum HairCoverTypes` | `None` / `Type1`..`Type4` / `All` / `NumHairCoverTypes`。**末尾的 `NumHairCoverTypes` 是数组长度哨兵，不是语义值。** |
| `BeardCoverTypes` | `public enum BeardCoverTypes` | `None` / `Type1`..`Type4` / `All` / `NumBeardBoverTypes`。哨兵拼写为 `Bover`。 |
| `HorseHarnessCoverTypes` | `public enum HorseHarnessCoverTypes` | `None` / `Type1` / `Type2` / `All` / `HorseHarnessCoverTypes`。**末尾成员名与类型名完全相同**，写 `ArmorComponent.HorseHarnessCoverTypes.HorseHarnessCoverTypes` 是合法的。 |
| `HorseTailCoverTypes` | `public enum HorseTailCoverTypes` | 只有 `None` 与 `All`。 |
| `BodyMeshTypes` | `public enum BodyMeshTypes` | `Normal` / `Upperbody` / `Shoulders` / `BodyMeshTypesNum`。哨兵叫 `BodyMeshTypesNum`。 |
| `BodyDeformTypes` | `public enum BodyDeformTypes` | `Medium` / `Large` / `Skinny` / `BodyMeshTypesNum`。**哨兵名与上一个枚举撞了——`BodyDeformTypes.BodyMeshTypesNum` 是真实成员，别当笔误改掉。** |

## 真实示例

读一件护甲的减伤值，并算出「未加词缀的裸值」：

```csharp
EquipmentElement headSlot = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Head);
if (headSlot.Item == null || !headSlot.Item.HasArmorComponent)
{
    Debug.Print("hero has no helmet", 0);
    return;
}

ArmorComponent armor = headSlot.Item.ArmorComponent;
Debug.Print("raw head armor = " + armor.HeadArmor, 0);
Debug.Print("raw body armor = " + armor.BodyArmor, 0);
Debug.Print("material      = " + armor.MaterialType, 0);
Debug.Print("using facegen = " + headSlot.Item.UsingFacegenScaling, 0);
```

判断身体哪些部位可见（注意方向是「可见」不是「被盖」）。`HasAnyFlag<T>` 是 `TaleWorlds.Library.Extensions` 里的泛型扩展方法，对任何 `struct` 枚举都成立：

```csharp
ArmorComponent chest = hero.CivilianEquipment.GetEquipmentFromSlot(EquipmentIndex.Body).Item.ArmorComponent;
if (chest.MeshesMask.HasAnyFlag(SkinMask.BodyVisible))
{
    Debug.Print("covers_body was NOT set, body skin shows through", 0);
}
else
{
    Debug.Print("covers_body was set", 0);
}
```

读词缀加工后的最终护甲值（**这才是战斗真正用的数**）：

```csharp
Equipment gear = hero.BattleEquipment;
EquipmentElement headSlot = gear.GetEquipmentFromSlot(EquipmentIndex.Head);

if (headSlot.Item != null && headSlot.Item.HasArmorComponent)
{
    int effectiveHeadArmor = headSlot.GetModifiedHeadArmor();
    int effectiveStealth = headSlot.GetModifiedStealthFactor();
    Debug.Print("head armor (modified) = " + effectiveHeadArmor, 0);
    Debug.Print("stealth (modified)    = " + effectiveStealth, 0);
}
```

自定义一个带护甲数据的派生组件（演示 `ItemComponent` 的扩展点；`ArmorComponent` 的数值是 `private set`，所以派生类要自己声明可写入口）：

```csharp
public class MyCloakComponent : ItemComponent
{
    public int CloakArmor { get; private set; }

    public override ItemComponent GetCopy()
    {
        MyCloakComponent copy = new MyCloakComponent();
        copy.Item = this.Item;
        copy.CloakArmor = this.CloakArmor;
        return copy;
    }

    public override void Deserialize(MBObjectManager objectManager, XmlNode node)
    {
        base.Deserialize(objectManager, node);
        XmlAttribute attr = node.Attributes["cloak_armor"];
        this.CloakArmor = attr != null ? int.Parse(attr.Value) : 0;
    }

    public int GetEffectiveArmor(ItemModifier quality)
    {
        return quality != null ? quality.ModifyArmor(this.CloakArmor) : this.CloakArmor;
    }
}
```

## 风险与边界

- **所有数值 `private set`，只有 XML 能填。** `ItemObject.ItemComponent` 也是 `private set`，`AddWeapon` 只能装 `WeaponComponent`，`InitializeTradeGood` 只能装 `TradeItemComponent`。**程序化创建一件带完整护甲数据的物品在 1.4.6 没有官方路径。**
- **单槽，不能同时有护甲与武器。** `<Armor>` 与 `<Weapon>` 都写 `this.ItemComponent = itemComponent`，后写的赢。
- **`GetCopy()` 漏拷 `IsNoSlim`。** 合成武器重建路径上这个标记会丢失。
- **`GetCopy()` 也没拷 `ItemModifierGroup`。** 副本的品质词缀组为 null。
- **`MeshesMask` 的语义是「可见」。** 想遮住头就得让 `covers_head="true"`；`SkinMask` 不是 `[Flags]`，枚举名里没有 `Combined` 之类的组合值。
- **`MultiMeshHasGenderVariations` 缺省为 `true`。** 与其它「缺失即零值」属性相反，XML 里不写等于开启。
- **`BodyMeshType` / `BodyDeformType` 走手写字符串比较，不走 `Enum.Parse`。** 写 `"UpperBody"`（大写 B）会静默回落成 `Normal`，不报错。
- **`ReinsMesh` 缺失时是 `""`。** `ReinsRopeMesh` 因此会得到 `"_rope"` 这个看起来像路径的字符串。
- **`Deserialize` 直读 `node.Attributes`，不判 null。** 手写调用（不经过 `ItemObject.Deserialize`）传 null 节点会 NRE。
- **裸值 ≠ 生效值。** 战斗走 [EquipmentElement](../EquipmentElement) 的 `GetModified*Armor()`，它会过 `ItemModifier.ModifyArmor` 并把负数钳到 0。
- **`MaterialType` 底层是 `sbyte`。** 跨语言边界或反射时容易踩。
- **枚举哨兵值重名。** `BodyMeshTypes.BodyMeshTypesNum` 与 `BodyDeformTypes.BodyMeshTypesNum` 是两个不同枚举里的不同成员，`BeardCoverTypes.NumBeardBoverTypes` 拼写错误，`HorseHarnessCoverTypes` 的最后一个成员与类型同名。
- **不 `sealed`，可继承。** 继承时小心上面那两条 `private set`。
- **不进存档。** 组件随物品 XML 重建。

## 跨版本提示

与 `bannerlord-1.3.15/TaleWorlds.Core/ArmorComponent.cs` 的公开表面逐行比对：1.3.15 有 31 个公开成员，1.4.6 有 32 个，**唯一差异是新增的 `public bool IsNoSlim { get; private set; }`**（XML 属性 `no_slim`）。其余 31 个成员、七个嵌套枚举、`ArmorComponent(ItemObject)` 构造器、`GetCopy()`、`Deserialize()` 全部一致。`bannerlord-1.4.5/` 本机只有 `Bannerlord.Source/bin/`，无解出的 C#，未能核对。

## 依赖关系

- 基类：[ItemComponent](../ItemComponent) 提供 `Item` / `ItemModifierGroup` / `Deserialize` 的 `modifier_group` 解析与抽象 `GetCopy()`
- 宿主：[ItemObject](../ItemObject) 的 `HasArmorComponent` / `ArmorComponent`（`as` 转型，无组件时为 null）与 `UsingFacegenScaling`
- 消费方：[Equipment](../Equipment) 的 `GetHeadArmorSum` / `GetHumanBodyArmorSum` / `GetLegArmorSum` / `GetArmArmorSum` / `GetTotalWeightOfArmor`，以及它转发出去的 `HairCoverType` / `BeardCoverType` / `ManeCoverType` / `ReinsMeshName` / `EarsAreHidden` / `MouthIsHidden` / `BodyMeshType` / `BodyDeformType` 八个聚合属性
- 生效值：[EquipmentElement](../EquipmentElement) 的 `GetModifiedHeadArmor` / `GetModifiedBodyArmor` / `GetModifiedMountBodyArmor` / `GetModifiedLegArmor` / `GetModifiedArmArmor` / `GetModifiedStealthFactor`
- 词缀：[ItemModifierGroup](../ItemModifierGroup) / `ItemModifier.ModifyArmor` 是裸值到生效值的唯一加工路径
- 马匹：[HorseComponent](../HorseComponent) 与 [EquipmentIndex](../EquipmentIndex) 的 `Horse` / `HorseHarness` 槽位决定三个坐骑加成在哪读
- 枚举同族：[BannerComponent](../BannerComponent) 是另一条走 `WeaponComponent` 血统的组件分支
- 桶首页：[core-extra API 分区](../)