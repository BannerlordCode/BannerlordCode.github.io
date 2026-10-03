---
title: "ArmorComponent"
description: "护甲物品的行为组件：四个护甲值槽、三项机动加成、身体遮挡遮罩 MeshesMask、以及材质/体型/覆盖类型等 8 个嵌套枚举。全部属性 private set，唯一填充途径是 ItemObject.Deserialize 按 <Armor> 标签装配。它的 GetCopy() 漏拷 IsNoSlim。"
---

# ArmorComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ArmorComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `TaleWorlds.Core/ArmorComponent.cs`

## 概述

`ArmorComponent` 是 [ItemComponent](../ItemComponent) 的派生类，负责**护甲与护甲类物品的行为数据**。它回答三组问题：这件护甲给多少防护（`HeadArmor` / `BodyArmor` / `ArmArmor` / `LegArmor` 四个槽）、它带来什么机动代价或收益（`ManeuverBonus` / `SpeedBonus` / `ChargeBonus`）、以及它在模型上遮住身体的哪些部分（`MeshesMask` 配合 `covers_head` / `covers_body` / `covers_hands` / `covers_legs` 四个 XML 属性）。

它承担的是**物品体系中「护甲」这一类行为的唯一存放处**。消费方非常明确：`TooltipRefresherCollection.cs:520-548` 的物品提示框就是靠 `item.ArmorComponent.HeadArmor != 0` 这样的判断决定是否显示「头部护甲」这一行；`SPInventoryVM.cs:3923` 与 `:4112` 靠 `ArmorComponent.FamilyType` 检查坐骑与马具是否配套。**注意它同时服务于人体护甲与马具**——马鞍的护甲值走同一个 `BodyArmor` 字段，提示框靠 `item.Type == ItemObject.ItemTypeEnum.HorseHarness` 决定把它显示成「马匹护甲」还是「身体护甲」。

## 心智模型

把它当成**「护甲这个物品类别在 XML 上的完整投影」**——因为它是**唯一一个所有数值都只能通过 XML 填满的组件**。链式的 `Character(...)` / `Monster(...)` 那种构建器风格在 `AgentData` 上很好用，在这里完全用不上：`ItemComponent` 的 `Item` 与所有这些 `private set` 属性，唯一的官方填充路径是 `ItemObject.Deserialize` 遇到 `<Armor>` 标签后调 `ArmorComponent.Deserialize`。

**心智模型的核心是「MeshesMask 是反着算出来的」。** `ArmorComponent.cs:171-186` 的逻辑是：先读四个布尔 `covers_head` / `covers_body` / `covers_hands` / `covers_legs`，**然后对每一个为 false 的部位，把对应的 `...Visible` 位或上去**：

```csharp
if (!num) { MeshesMask |= SkinMask.HeadVisible; }
if (!flag) { MeshesMask |= SkinMask.BodyVisible; }
if (!flag2) { MeshesMask |= SkinMask.HandsVisible; }
if (!flag3) { MeshesMask |= SkinMask.LegsVisible; }
```

也就是说 **`covers_head="true"` 表示「盖住头」，不写或写 `false` 表示「露出头」**。这与大多数人的直觉正好相反，也是给自定义护甲配模型时最容易搞错的一处。另外要注意 `MeshesMask` 是**只累加、不清零**的——`Deserialize` 里没有任何一句把它重置为 0，所以**对同一个对象调用两次 `Deserialize`，遮罩只会越加越多**。

**第二个心智锚点是四个护甲值槽与 `Equipment` 的槽位并非一一对应。** 组件上有 `HeadArmor` / `BodyArmor` / `LegArmor` / `ArmArmor` 四个属性，而物品实际装备到哪个槽由 [EquipmentIndex](../EquipmentIndex) 决定；提示框读的是 `equipmentElement.Value.GetModifiedBodyArmor()` 这样的**含词缀修正值**，而 `ArmorComponent.BodyArmor` 是**原始定义值**。所以「组件值」与「最终生效值」是两个数。

由此推出三条实操结论。第一，**没有链式构建入口**。想程序化造一个 `ArmorComponent` 只能 `new ArmorComponent(item)` 然后手动 `Deserialize`，但 `ItemObject.ItemComponent` 是 `private set`——**外部装不回去**。第二，**`GetCopy()` 漏拷 `IsNoSlim`**。`ArmorComponent.cs:88-110` 拷了 17 个属性，唯独没有 `IsNoSlim`。而全树调用 `GetCopy()` 的只有 `Crafting.cs`（6 处）与 `CraftingCampaignBehavior.cs`（2 处），都在合成武器重建流程里——**在这个流程里复制一个 `no_slim="true"` 的护甲，slim 标记会静默丢失**。第三，**`material_type` 的解析失败会抛异常**：`Enum.Parse(typeof(ArmorMaterialTypes), node.Attributes["material_type"].Value)` 没有 `ignoreCase` 参数（对比 `hair_cover_type` 那一行有 `ignoreCase: true`），所以写 `<Armor material_type="plate" />` 会抛，写 `Plate` 才行。**这一处的不一致是源码里的真实差异。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `HeadArmor` / `BodyArmor` / `LegArmor` / `ArmArmor` | `public int XxxArmor { get; private set; }` | 四个防护值槽，来自 XML 的 `head_armor` / `body_armor` / `leg_armor` / `arm_armor`，**属性缺失时为 0**。提示框 `TooltipRefresherCollection.cs:526-545` 靠「值是否为 0」决定是否显示对应行。**马具也用 `BodyArmor`**（`:532-538` 按 `ItemTypeEnum.HorseHarness` 分支换文案）。 |
| `ManeuverBonus` / `SpeedBonus` / `ChargeBonus` | `public int XxxBonus { get; private set; }` | 机动加成三项，来自 `maneuver_bonus` / `speed_bonus` / `charge_bonus`，缺失为 0。**它们是加值还是乘值由上层消费方决定，`ArmorComponent` 本身不解释**——组件只存整数。 |
| `StealthFactor` | `public int StealthFactor { get; private set; }` | 潜行影响。**注意它是 `int` 但用 `CultureInfo.InvariantCulture.NumberFormat` 解析**（`:157`，读的是 `node.Attributes["stealth_factor"].InnerText` 而非 `.Value`），与其他 int 属性的读法不同。 |
| `MeshesMask` | `public SkinMask MeshesMask { get; private set; }` | 身体遮挡遮罩。**由四个 `covers_*` 属性反推**：`covers_*` 为 false 时把 `...Visible` 位或上去。**`Deserialize` 从不清零它**，重复调用会累加。 |
| `MaterialType` | `public ArmorMaterialTypes MaterialType { get; private set; }` | 材质类型（None/Cloth/Leather/Chainmail/Plate）。**`Enum.Parse` 没带 `ignoreCase`**（`:135`），而同方法里 `hair_cover_type` / `beard_cover_type` / `mane_cover_type` / `tail_cover_type` 都带了 `ignoreCase: true`——**这一处不一致会导致写小写 `plate` 时抛异常**。 |
| `FamilyType` | `public int FamilyType { get; private set; }` | 马匹家族类型，来自 `family_type`。**它最实际的用途是配套检查**：`SPInventoryVM.cs:3923/4112` 比较坐骑的 `HorseComponent.Monster.FamilyType` 与马具的 `ArmorComponent.FamilyType`，不等就判定不配套。 |
| `ReinsMesh` / `ReinsRopeMesh` | `public string ReinsMesh { get; private set; }` / `public string ReinsRopeMesh => ReinsMesh + "_rope";` | 缰绳 mesh 名与其派生名。`ReinsRopeMesh` 是**唯一有计算逻辑的成员**（表达式体属性），它无条件拼 `"_rope"` 后缀——`ReinsMesh` 为空串时它返回 `"_rope"` 而不是空串。 |
| `BodyMeshType` / `BodyDeformType` | `public BodyMeshTypes` / `public BodyDeformTypes` | 网格替换与体型变形。**注意它们不用 `Enum.Parse`**，而是手写 `if (value == "upperbody") ... else if (value == "shoulders")` 字符串比较（`:141-158`），**未知值会被静默忽略并保留默认**（`Normal` / `Medium`），不抛异常。 |
| `HairCoverType` / `BeardCoverType` / `ManeCoverType` / `TailCoverType` | 四个 `public XxxCoverTypes { get; private set; }` | 头发 / 胡须 / 马具 / 马尾的覆盖类型。四个都用 `Enum.Parse(..., ignoreCase: true)`，所以大小写不敏感；但**拼错的名字会抛异常**（`Enum.Parse` 找不到成员时抛 `ArgumentException`）。 |
| `IsNoSlim` / `MultiMeshHasGenderVariations` | `public bool IsNoSlim { get; private set; }` / `public bool MultiMeshHasGenderVariations { get; private set; }` | 前者来自 `no_slim`，**后者来自 `has_gender_variations` 但被硬编码默认为 `true`**（`:136` 先无条件赋 true，再看属性）。**`IsNoSlim` 是 `GetCopy()` 唯一漏拷的属性。** |
| `ArmorComponent(ItemObject)` | `public ArmorComponent(ItemObject item)` | 唯一构造器，函数体只有一句 `base.Item = item;`。**它不做任何初始化**——所有属性都是 `default`，所以一个裸构造出来的组件 `MaterialType` 是 `None`、`MeshesMask` 是 0、`ReinsMesh` 是 null（不是空串）。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 唯一的填充路径。内部调一次 `base.Deserialize(...)` 读 `modifier_group`。**它会抛异常的地方**：`material_type` 拼错或大小写不符（无 `ignoreCase`）、四个 `*_cover_type` 拼错；**它会静默的地方**：`body_mesh_type` / `body_deform_type` 的未知值。 |
| `GetCopy` | `public override ItemComponent GetCopy()` | 深拷贝。**拷 17 个属性，漏掉 `IsNoSlim` 与 `Item`**（后者由 `base.Item` 在新对象构造时设为同一个 item）。全树只有 `Crafting.cs`（6 处）与 `CraftingCampaignBehavior.cs`（2 处）调用它。 |
| 八个嵌套枚举 | `ArmorMaterialTypes` / `HairCoverTypes` / `BeardCoverTypes` / `HorseHarnessCoverTypes` / `HorseTailCoverTypes` / `BodyMeshTypes` / `BodyDeformTypes` | 类型内嵌声明，不占外部命名空间。**其中三个带哨兵成员**：`HairCoverTypes.NumHairCoverTypes`、`BeardCoverTypes.NumBeardBoverTypes`（拼写笔误 `Bever`）、`HorseHarnessCoverTypes.HorseHarnessCoverTypes`（**成员名与枚举名相同**）。`BodyMeshTypes.BodyMeshTypesNum` 与 `BodyDeformTypes.BodyMeshTypesNum` 也都是哨兵。 |

## 真实示例

从物品上读组件——**先判 `HasArmorComponent` 再用**，这是全树的标准写法（`TooltipRefresherCollection.cs:520` 就是这个顺序）：

```csharp
ItemObject helmet = MBObjectManager.Instance.GetObject<ItemObject>("empire_helmet");
if (helmet == null || !helmet.HasArmorComponent)
{
    Debug.Print("item has no <Armor> node", 0);
    return;
}

ArmorComponent armor = helmet.ArmorComponent;
Debug.Print("head = " + armor.HeadArmor + " body = " + armor.BodyArmor, 0);
Debug.Print("arm  = " + armor.ArmArmor + " leg  = " + armor.LegArmor, 0);
Debug.Print("material = " + armor.MaterialType, 0);

// The component holds the raw definition; the tooltip shows the modified value.
EquipmentElement element = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Head);
Debug.Print("modified head armor = " + element.GetModifiedHeadArmor(), 0);
```

按「身体是否被遮挡」做外观决策——**记住 `covers_*` 为 true 表示盖住，`MeshesMask` 里的 `...Visible` 表示露出**：

```csharp
ItemObject robe = MBObjectManager.Instance.GetObject<ItemObject>("empire_robe");
if (robe == null || robe.ArmorComponent == null)
{
    Debug.Print("no armor component on " + robe, 0);
    return;
}

ArmorComponent robeArmor = robe.ArmorComponent;

bool headHidden = robeArmor.MeshesMask.HasAnyFlag(SkinMask.HeadVisible) == false;
bool bodyHidden = robeArmor.MeshesMask.HasAnyFlag(SkinMask.BodyVisible) == false;
Debug.Print("head covered = " + headHidden + ", body covered = " + bodyHidden, 0);

// ReinsRopeMesh is a computed member: it unconditionally appends "_rope",
// so an empty ReinsMesh still yields "_rope" rather than an empty string.
Debug.Print("rope mesh = " + robeArmor.ReinsRopeMesh, 0);
```

坐骑与马具的配套检查（结构照 `SPInventoryVM.cs:3923`）：

```csharp
ItemObject harness = MBObjectManager.Instance.GetObject<ItemObject>("empire_harness");
Equipment mountArmor = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.ArmorItemEndSlot);

if (harness.HasArmorComponent && !mountArmor.IsEmpty && mountArmor.Item.HasHorseComponent)
{
    int harnessFamily = harness.ArmorComponent.FamilyType;
    int mountFamily = mountArmor.Item.HorseComponent.Monster.FamilyType;
    bool matched = harnessFamily == mountFamily;
    Debug.Print("harness family " + harnessFamily + " vs mount " + mountFamily
        + " -> matched = " + matched, 0);
}
```

## 风险与边界

- **`covers_*` 的语义与直觉相反。** `covers_head="true"` = **盖住头**；`MeshesMask` 里的 `HeadVisible` 位 = **露出头**。两者互为取反。配自定义护甲 mesh 时搞反，模型会正好挡住该露的地方。
- **`MeshesMask` 只累加不清零。** `Deserialize`（`:171-186`）里没有任何重置语句。**对同一个 `ArmorComponent` 实例调用两次 `Deserialize`，遮罩位会越加越多。** 实际中通常每次都是新实例所以看不出来，但你手动复用对象时必踩。
- **`material_type` 大小写敏感，其余 cover_type 不敏感。** `:135` 的 `Enum.Parse(typeof(ArmorMaterialTypes), value)` 缺 `ignoreCase: true`，而 `:161-164` 的四个 cover_type 都带了。**写 `<Armor material_type="plate" />` 会抛异常，写 `Plate` 才行。**
- **`body_mesh_type` / `body_deform_type` 的未知值被静默忽略。** `:141-158` 是手写字符串比较而不是 `Enum.Parse`，未知值既不抛异常也不记录，只是保留默认（`Normal` / `Medium`）。想知道自己拼错了，**只能读回属性值确认**。
- **四个 `*_cover_type` 拼错会抛异常。** 它们走 `Enum.Parse(..., ignoreCase: true)`，成员名找不到时抛 `ArgumentException`。加载期抛异常会中断整个 `MBObjectManager`。
- **`GetCopy()` 漏拷 `IsNoSlim`。** `ArmorComponent.cs:88-110` 拷了 17 个属性，独缺 `IsNoSlim`。全树只有 `Crafting.cs` 与 `CraftingCampaignBehavior.cs` 会调 `GetCopy()`，都在合成武器重建流程里——**在这条路径上复制 `no_slim="true"` 的护甲，slim 标记会静默丢失**。这是把 `GetCopy()` 当通用 Clone 的直接后果。
- **组件值 ≠ 最终生效值。** `ArmorComponent.BodyArmor` 是 XML 原始值；提示框显示的是 `equipmentElement.GetModifiedBodyArmor()`，含词缀修正。做数值对比时两者不能混用。
- **没有任何程序化装配入口。** `ItemObject.ItemComponent` 是 `private set`，本类所有属性也是 `private set`。**想造一个带护甲组件的物品，唯一途径是写 XML。**
- **构造器不做初始化。** `ArmorComponent(ItemObject item)` 只有 `base.Item = item;`。裸构造出的对象里 `MaterialType` 是 `None`、`MeshesMask` 是 0、**`ReinsMesh` 是 `null` 而不是空串**——而 `Deserialize` 在属性缺失时给的是 `""`。**所以「没 Deserialize 过」和「Deserialize 过但属性缺失」是两种不同的空值状态。**
- **马具复用人体护甲字段。** `BodyArmor` 同时服务身体护甲与马鞍，区分靠的是 `item.Type == ItemObject.ItemTypeEnum.HorseHarness`。**不要假设 `BodyArmor` 一定是穿在身上的。**
- **`SaveableCoreTypeDefiner.cs:18` 有 `AddClassDefinition(typeof(ArmorComponent), 2);`** ——但组件数据随 XML 重建，`AutoGeneratedInstanceCollectObjects` 的实现只是 `base` 调用，所以它**实际不进存档**。
- **八个嵌套枚举带哨兵成员，且有一处拼写笔误。** `BeardCoverTypes.NumBeardBoverTypes` 少了一个 `a`（`Bover` 应为 `Beard` 的大小写笔误，实际拼作 `Bover`）；`HorseHarnessCoverTypes` 里有一个**与枚举同名的成员** `HorseHarnessCoverTypes`。穷举 `Enum.GetValues` 时这些哨兵都会出现。

## 跨版本提示

`ArmorComponent.cs` 在 1.4.5 是 228 行、7 个嵌套枚举 + 20 个公开属性 + 3 个方法，是原始源码形态。1.4.6 的同名文件已被重写过（`ItemComponent` 的 `GetCopy()` 在 1.4.6 的其他派生类上更完整）。**跨版本迁移时值得核对三件事**：XML 属性名是否稳定（`covers_*`、`*_cover_type`、`body_mesh_type` 这些字符串是**数据契约**，不是 API，引擎升级改名会让自定义物品静默失效）；`GetCopy()` 是否补上了 `IsNoSlim`（**这是判断该文件是否被修过的最直接指标**）；以及 `material_type` 的 `ignoreCase` 不一致是否已被修掉。**注意 v1.4.6 的 `ArmorComponent` 与本版差异不小，`ItemComponent.GetCopy` 在那版有更多字段，迁移时不要假设本版的「漏拷」行为延续。**

## 依赖关系

- 基类：[ItemComponent](../ItemComponent) 提供 `Item` 与 `ItemModifierGroup`，并由 `ItemObject.Deserialize` 按 `<Armor>` 标签装配
- 宿主：[ItemObject](../ItemObject) 的 `ArmorComponent` 访问器与 `HasArmorComponent` 标志
- 遮挡枚举：[SkinMask](../SkinMask) 的 `HeadVisible` / `BodyVisible` / `HandsVisible` / `LegsVisible`
- 落位与修正：[Equipment](../Equipment) 与 [EquipmentElement](../EquipmentElement) 提供 `GetModifiedHeadArmor()` / `GetModifiedBodyArmor()` / `GetModifiedArmArmor()` / `GetModifiedLegArmor()` 等含词缀的实际值
- 主要消费方（UI）：`TaleWorlds.CampaignSystem.ViewModelCollection/TooltipRefresherCollection.cs:520-548`（物品提示框）、`SPInventoryVM.cs:3923/4112`（坐骑与马具配套检查）
- 描述符：[Monster](../Monster) 的 `FamilyType`，通过 `HorseComponent.Monster.FamilyType` 与本组件的 `FamilyType` 比较
- 类型：[BodyProperties](../BodyProperties) 与 [Vec3](../Vec3) 是 `Deserialize` 的输入契约（经 `base.Deserialize` 读 `modifier_group`）
- 深拷贝调用方：`Crafting.cs`（6 处）与 `CraftingCampaignBehavior.cs`（2 处），全树仅有的两个调用点
- 桶首页：[core-extra API 分区](../)