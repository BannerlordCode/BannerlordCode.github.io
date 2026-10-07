---
title: "HorseComponent"
description: "坐骑组件：挂载在马匹物品上的机动、速度、冲撞伤害与负重设定，挂 Monster 引用提供基础血量与 AI 体型。"
---

# HorseComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class HorseComponent : ItemComponent`
**Base:** `TaleWorlds.Core.ItemComponent`
**File:** `TaleWorlds.Core/HorseComponent.cs`

## 概述

`HorseComponent` 是马匹物品的行为插件，由 `<ItemComponent><Horse .../></ItemComponent>` 装配到 [ItemObject](../ItemObject) 的单槽上。它把「这是坐骑 / 这是驮畜 / 这是牲口」的判定和「骑上去手感如何」的数值放在一处：机动 `Maneuver`、速度 `Speed`、冲撞伤害 `ChargeDamage`、额外血量 `HitPointBonus`，外加一个指向 `Monster` 的引用（战斗里的马匹 AI 实体定义，提供 `HitPoints` 与全部体型/胶囊数据）。它还有一段别的组件都没有的**嵌套 XML 解析**——`<Materials>` 与 `<AdditionalMeshes>` 子节点，用来声明毛发材质分组、网格缩放倍数与额外网格。所以它是六个组件里 XML 形状最复杂的一个。

## 心智模型

**先分清「它是什么马」，再分清「它有多强」。** `IsRideable` 与 `IsPackAnimal` 两个 `private set` 的 bool 来自 XML 的 `is_mountable` 与 `is_pack_animal`，其余三个判定属性都是它们的组合：`IsMount = IsRideable && !IsPackAnimal`，`IsLiveStock = !IsRideable && !IsPackAnimal`。于是四种定位由两个 bool 完全决定——可骑不可驮（mount）、可驮不可骑（pack）、两者皆可、两者皆不可（livestock）。**注意 [ItemObject](../ItemObject) 的 `IsAnimal` 定义是 `HasHorseComponent && !HorseComponent.IsRideable`，与这里的 `IsLiveStock` 口径一致；但 `IsMountable` 是 `HasHorseComponent && HorseComponent.IsRideable`，**一个 `is_mountable="true"` 且 `is_pack_animal="true"` 的马在 `IsMountable` 与 `IsPackAnimal` 上同时为真，而 `IsMount` 为假。** 想区分「真坐骑」必须用 `IsMount`。

第二个锚点是 **`HitPoints` 不是字段而是转发**。`public int HitPoints { get { return this.Monster.HitPoints; } }`——**`Monster` 为 null 时直接 NRE**。而 `Monster` 来自 XML 的 `<Horse monster="...">` 引用（`objectManager.ReadObjectReferenceFromXml("monster", typeof(Monster), node)`），**属性缺失时就是 null**，不像其它字段有 XmlHelper 兜底。所以一份漏写 `monster` 的马定义会在任何读血量的地方炸掉。同理 `GetModifiedMountHitPoints()` 里 `horseComponent.HitPoints + horseComponent.HitPointBonus` 也依赖它。

第三个是 **`GetModifiedMount*` 在 EquipmentElement 上，不在这里**。本组件只提供裸值。真正的坐骑属性由 [EquipmentElement](../EquipmentElement) 的 `GetModifiedMountManeuver(in harness)` / `GetModifiedMountSpeed(in harness)` / `GetModifiedMountCharge(in harness)` 合成——它们会把 `this.Item.HorseComponent.Maneuver` 与 `harness.Item.ArmorComponent.ManeuverBonus` 相加，再串联马与马具两层词缀。**所以「马有多强」这个问题的答案不在本类型里**，别在这里找加成逻辑。

第四个是 **`MeatCount` 与 `HideCount` 是硬编码的经验公式**，不是 XML 数据：`MeatCount` 在 `IsRideable` 时返回 3，`Speed > 20` 返回 4，`Speed <= 11` 返回 2，其余返回 1；`HideCount` 在 `IsRideable` 或 `Speed <= 20` 时返回 0，否则返回 2。**改 `Speed` 会同时改掉落**，这是设计如此还是遗留，源码里没有任何注释说明。做平衡时要注意这个耦合。

第五个是 **`GetCopy()` 只拷四个 int**。实现是 `new HorseComponent { Maneuver, ChargeDamage, Speed, BodyLength }`，**丢失 `Monster`、`IsRideable`、`IsPackAnimal`、`HitPointBonus`、`SkeletonScale`、`ModifiedName`、`AdditionalMeshesNameList`、以及全部 `_monsterMaterialNames`**。副本的 `Monster` 是 null，于是副本的 `HitPoints` 必 NRE。全树只有 [Crafting](../Crafting) 与 `CraftingCampaignBehavior` 会调 `GetCopy()`。

第六个是 **`AdditionalMeshesNameList` 和 `ModifiedName` 是公开字段，不是属性**。`ModifiedName` 是 `TextObject`，由上层逻辑填入（[EquipmentElement](../EquipmentElement) 的 `GetModifiedItemName` 里有一条读它的分支，但在 1.4.6 中恒不可达，见该页）。`AdditionalMeshesNameList` 是 `List<KeyValuePair<string, bool>>`，布尔位表示该额外网格是否受遮挡影响（XML 属性 `affected_by_cover`）。**这两个字段没有 `private set`，外部可以直接改。**

第七个是 **XML 里的网格倍数走十六进制解析**。`<MeshMultiplier mesh_multiplier="..." percentage="..."/>` 的第一个属性用 `Convert.ToUInt32(value, 16)`——**是 16 进制**，`percentage` 用 `Convert.ToDouble`。解析完每个 Material 内部还会按 `x.Item2.CompareTo(y.Item2)`（即 `percentage`）排序。写 XML 时 `mesh_multiplier` 必须写成 16 进制，写 10 进制数字会被当 16 进制读出完全不同的值。

## 关键成员

### 身份与数值

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Monster` | `public Monster Monster { get; private set; }` | 战斗里的马匹实体定义，提供 `HitPoints` 与全部胶囊/体型数据。由 XML 的 `monster` 属性引用。**缺失时为 null，而 `HitPoints` 会 NRE。** |
| `Maneuver` | `public int Maneuver { get; private set; }` | 坐骑机动值。对应 `maneuver`。由 `GetModifiedMountManeuver` 读取后与马具加成相加。 |
| `ChargeDamage` | `public int ChargeDamage { get; private set; }` | 冲撞伤害。对应 `charge_damage`。由 `GetModifiedMountCharge` 读取。 |
| `Speed` | `public int Speed { get; private set; }` | 坐骑速度。对应 `speed`。**注意 `HideCount` 与 `MeatCount` 也读它**，改它会连带改掉落。 |
| `BodyLength` | `public int BodyLength { get; private set; }` | 躯干长度。对应 `body_length`。影响骑乘姿态与碰撞。 |
| `HitPointBonus` | `public int HitPointBonus { get; private set; }` | 额外血量。对应 `extra_health`。与 `Monster.HitPoints` 相加后才是总血量。 |
| `HitPoints` | `public int HitPoints { get; }` | **只读转发，`return this.Monster.HitPoints`。** 不是字段。**`Monster` 为 null 时 NRE。** |
| `SkeletonScale` | `public SkeletonScale SkeletonScale { get; private set; }` | 骨骼缩放定义（马骨架比例）。对应 XML 属性 `skeleton_scale`，经 `Game.Current.ObjectManager.GetObject<SkeletonScale>(text)` 解析。**默认构造器把它显式置 null。** |

### 四个身份判定

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `IsRideable` | `public bool IsRideable { get; private set; }` | 是否可骑。对应 `is_mountable`。[ItemObject](../ItemObject) 的 `IsMountable` 直接读它。 |
| `IsPackAnimal` | `public bool IsPackAnimal { get; private set; }` | 是否可驮。对应 `is_pack_animal`。 |
| `IsMount` | `public bool IsMount { get; }` | `IsRideable && !IsPackAnimal`。**要判「真坐骑」用这个**，因为 `ItemObject.IsMountable` 只判 `IsRideable`。 |
| `IsLiveStock` | `public bool IsLiveStock { get; }` | `!IsRideable && !IsPackAnimal`。即两头都不能用的纯牲畜。与 `ItemObject.IsAnimal`（`HasHorseComponent && !IsRideable`）**口径不同**：一匹 `is_mountable="true"` 的马 `IsLiveStock` 为 false 但 `IsAnimal` 也为 false，两者一致；但一匹 `is_pack_animal="true"` 的马 `IsLiveStock` 为 false 而 `ItemObject.IsAnimal` 为 true。 |

### 掉落（硬编码公式，非 XML 数据）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MeatCount` | `public int MeatCount { get; }` | 屠宰产出肉量。`IsRideable → 3`；`Speed > 20 → 4`；`Speed <= 11 → 2`；否则 `1`。**完全由身份与速度决定，XML 改不了。** |
| `HideCount` | `public int HideCount { get; }` | 屠宰产出毛皮量。`IsRideable → 0`；`Speed <= 20 → 0`；否则 `2`。**与 `Speed` 强耦合。** |

### 外观与公开字段

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `HorseMaterialNames` | `public MBReadOnlyList<HorseComponent.MaterialProperty> HorseMaterialNames { get; }` | 毛发材质分组列表。由 `<Materials><Material name="..."><MeshMultipliers>...` 解析填充。**`MBReadOnlyList<T> : List<T>`（`TaleWorlds.Library`），名字骗人，强转回 `List<T>` 就能改。** |
| `MaterialProperty` | `public struct MaterialProperty`（嵌套） | 单个材质分组。`Name` 是 `private set` 的字符串；**`MeshMultiplier` 是公开字段** `List<Tuple<uint, float>>`，元素为（16 进制解析出的网格 id，百分比）。 |
| `ModifiedName` | `public TextObject ModifiedName;`（**字段**） | 上层逻辑填入的改名文本。**无属性包装，外部可写。** [EquipmentElement](../EquipmentElement) 的 `GetModifiedItemName` 里有一条读它的分支，但因同方法的死代码判定而在 1.4.6 不可达。 |
| `AdditionalMeshesNameList` | `public List<KeyValuePair<string, bool>> AdditionalMeshesNameList;`（**字段**） | 额外网格名与「是否受遮挡影响」标记。由 `<AdditionalMeshes><Mesh name="..." affected_by_cover="..."/>` 解析。**外部可写，无保护。** |
| `_monsterMaterialNames` | `private readonly MBList<HorseComponent.MaterialProperty> _monsterMaterialNames` | 材质列表本体。无参构造器里 `new` 出来，所以任何 `new HorseComponent()` 都不会是 null。 |

### 构造与反序列化

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | `public HorseComponent()` | **无参构造器**，把五个 int 全置 0、`ModifiedName` 置 null、`_monsterMaterialNames` 与 `AdditionalMeshesNameList` 初始化为空容器、`SkeletonScale` 置 null。由 `ItemObject.Deserialize` 的 `<Horse>` 分支调用。 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | `base.Deserialize` 解析 `modifier_group`，然后读 `maneuver` / `charge_damage` / `speed` / `body_length` / `is_mountable` / `is_pack_animal` / `monster`（对象引用）/ `extra_health` / `skeleton_scale`（StringId 经 `Game.Current.ObjectManager`），最后遍历子节点处理 `Materials` 与 `AdditionalMeshes`。**整段约 80 行，是所有组件里最长的 `Deserialize`。** |
| `GetCopy` | `public override ItemComponent GetCopy()` | **只拷 `Maneuver` / `ChargeDamage` / `Speed` / `BodyLength` 四个 int。** 丢 `Monster`、`IsRideable`、`IsPackAnimal`、`HitPointBonus`、`SkeletonScale`、`ModifiedName`、材质列表与额外网格。副本的 `HitPoints` 必 NRE。全树只被 [Crafting](../Crafting) 与 `CraftingCampaignBehavior` 调用。 |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` | 存档引用收集钩子，实现是空的（只调 `base`）。**`Monster` 与 `SkeletonScale` 不进 `collectedObjects`。** |

## 怎么用

### 怎么拿到它

`HorseComponent` 是 `public class HorseComponent : ItemComponent`（`TaleWorlds.Core/HorseComponent.cs:12`）。拿它的唯一入口是 `ItemObject.ItemComponent` 单槽字段上的 `as` 转型——组件类型由物品类型决定。

**它最独特的一点是 `Monster`（`:29`）**：不是数值也不是字符串，而是一个 `Monster` 对象引用（`TaleWorlds.Core/Monster.cs:11`）。于是 `HitPoints` 变成了**计算属性**——它没有 setter，getter 是 `return this.Monster.HitPoints;`（`:53-59`）。其余是普通 `{ get; private set; }`：`Maneuver`（`:34`）、`ChargeDamage`（`:39`）、`Speed`（`:44`）、`BodyLength`（`:49`）、`HitPointBonus`（`:64`）、`IsRideable`（`:69`）、`IsPackAnimal`（`:74`）、`IsMount`（`:79`，有计算逻辑）。

### 典型用法

```csharp
using TaleWorlds.Core;

ItemObject horseItem = MBObjectManager.Instance.GetObject<ItemObject>("horse_1");   // MBObjectManager.cs:288
var hc = horseItem.ItemComponent as HorseComponent;   // as：类型不对是 null
if (hc != null)
{
    Monster baseMonster = hc.Monster;                 // HorseComponent.cs:29
    int hp = hc.HitPoints;                           // :53，getter 转发到 Monster.HitPoints
    bool rideable = hc.IsRideable;                    // :69
    bool pack = hc.IsPackAnimal;                      // :74
    bool mount = hc.IsMount;                          // :79
    int bonus = hc.HitPointBonus;                     // :64
    int speed = hc.Speed;                             // :44
}
```

### 最容易踩的坑

**改 `HitPoints` 改不动，然后去查为什么属性是只读的。** 它的 getter 是 `return this.Monster.HitPoints;`（`HorseComponent.cs:56`）——**只读而且完全转发**，没有 setter、没有缓存、没有 `HitPointBonus` 之外的叠加。要改马的血量只能改它背后那个 `Monster`（`Monster.cs:61`，同样是 `{ get; private set; }`）或者改 XML。模组想「给所有马加 10% 血」时，唯一可行的位置是在计算侧而不是在数据侧。

第二个坑是 `Monster` 可能为 null，于是 `HitPoints` 空引用。`Monster`（`:29`）由 `Deserialize` 从 XML 的怪物引用解析，而 [Monster](../Monster) 自己只能从 XML 加载——如果物品 XML 里引用的怪物 id 不存在，你得到的是一个 `Monster` 为 null 的 `HorseComponent`，**读任何数值属性都会空引用**（`HitPoints` 是第一个暴露问题的）。载入期不会有任何提示。

第三个坑是 `as` 转型的沉默性：马匹物品装的是 `HorseComponent`、鞍具装的是 [SaddleComponent](../SaddleComponent)、其它装备装 [ArmorComponent](../ArmorComponent)——读错类型得到 null 而不是异常。

## 真实示例

判别一匹马能怎么用（**区分 `IsMountable` 与 `IsMount`**）：

```csharp
ItemObject mountItem = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Horse).Item;
if (mountItem == null || !mountItem.HasHorseComponent)
{
    Debug.Print("hero has no mount", 0);
    return;
}

HorseComponent horse = mountItem.HorseComponent;
Debug.Print("item.IsMountable = " + mountItem.IsMountable, 0);
Debug.Print("horse.IsMount    = " + horse.IsMount, 0);
Debug.Print("horse.IsPackAnimal = " + horse.IsPackAnimal, 0);
Debug.Print("horse.IsLiveStock  = " + horse.IsLiveStock, 0);
```

读裸数值与屠宰掉落（**`HitPoints` 需要 `Monster` 非空**）：

```csharp
HorseComponent horse = mountItem.HorseComponent;
Debug.Print("maneuver=" + horse.Maneuver + " speed=" + horse.Speed, 0);
Debug.Print("charge=" + horse.ChargeDamage + " extraHp=" + horse.HitPointBonus, 0);

if (horse.Monster != null)
{
    Debug.Print("total hp = " + horse.GetModifiedMountHitPoints(), 0);
}
Debug.Print("meat=" + horse.MeatCount + " hide=" + horse.HideCount, 0);
```

合成坐骑最终属性（**在 EquipmentElement 上做，马具可空**）：

```csharp
EquipmentElement mount = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.Horse);
EquipmentElement harness = hero.BattleEquipment.GetEquipmentFromSlot(EquipmentIndex.HorseHarness);

if (!mount.IsEmpty && mount.Item.HasHorseComponent)
{
    int maneuver = mount.GetModifiedMountManeuver(harness);
    int speed = mount.GetModifiedMountSpeed(harness);
    int charge = mount.GetModifiedMountCharge(harness);
    Debug.Print("mount maneuver=" + maneuver + " speed=" + speed + " charge=" + charge, 0);
}
```

遍历毛发材质分组（`MeshMultiplier` 是公开字段，`Tuple` 的 `Item1` 是 16 进制网格 id，`Item2` 是百分比）：

```csharp
HorseComponent horse = mountItem.HorseComponent;
foreach (HorseComponent.MaterialProperty material in horse.HorseMaterialNames)
{
    Debug.Print("material = " + material.Name, 0);
    foreach (Tuple<uint, float> multiplier in material.MeshMultiplier)
    {
        Debug.Print("  mesh 0x" + multiplier.Item1.ToString("x") + " -> " + multiplier.Item2, 0);
    }
}
```

## 风险与边界

- **`HitPoints` 会 NRE。** 它是 `return this.Monster.HitPoints`，而 `Monster` 在 XML 缺 `monster` 属性时为 null。读之前必须判 `Monster != null`。
- **`GetCopy()` 只拷四个 int。** 副本丢 `Monster`（于是 `HitPoints` 必 NRE）、丢 `IsRideable` / `IsPackAnimal`（于是副本被当成牲畜）、丢 `HitPointBonus`、丢 `SkeletonScale` 与全部外观数据。**不要把 `GetCopy()` 当 Clone。**
- **`ItemObject.IsMountable` 与本类型 `IsMount` 口径不同。** 前者只看 `IsRideable`，后者要求 `!IsPackAnimal`。一匹同时可骑可驮的马在两者上结果相反。
- **`MeatCount` / `HideCount` 是硬编码公式。** `Speed` 一改，屠宰掉落跟着改。XML 无法覆盖。
- **XML 的 `mesh_multiplier` 是 16 进制。** `Convert.ToUInt32(value, 16)`。写 10 进制数字会被读成完全不同的网格 id。
- **`SkeletonScale` 解析依赖 `Game.Current`。** 且默认就是 null，不需要时别假设它有值。
- **`Monster` 解析不依赖 `Game.Current`**（走 `objectManager.ReadObjectReferenceFromXml`），但 `SkeletonScale` 走 `Game.Current.ObjectManager.GetObject<SkeletonScale>`——同一段代码里两种寻址方式并存。
- **`AdditionalMeshesNameList` 与 `ModifiedName` 是公开字段。** 外部可写，无校验、无版本标记。
- **`HorseMaterialNames` 名字骗人。** `MBReadOnlyList<T>` 继承自 `List<T>`。
- **占用 [ItemObject](../ItemObject) 的单槽。** 写了 `<Horse>` 就不能再写 `<Armor>` / `<Weapon>` / `<Trade>`。
- **不进存档。** 组件随物品 XML 重建，存档存的是物品 StringId。
- **无参构造器是唯一的构造入口。** 没有带 `ItemObject` 的构造器，所以 `HorseComponent.Item` **永远是 null**（无参构造器不写 `base.Item`，而 `ItemObject.Deserialize` 挂载时也不回填）。**`horseComponent.Item` 在 1.4.6 恒为 null**——只有 `ArmorComponent(ItemObject)` / `WeaponComponent(ItemObject)` / `BannerComponent(ItemObject)` 这三个构造器会填它。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/HorseComponent.cs` 公开表面**完全一致**（25 行公开成员，含两个公开字段、嵌套 `MaterialProperty` 结构体与全部 `private set` 属性）。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/HorseComponent.cs`（210 行）与 `bannerlord-1.4.6/TaleWorlds.Core/HorseComponent.cs`（281 行）逐成员比对 public/protected 表面。**与 1.4.6 的 public/protected 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**。嵌套结构体 `MaterialProperty` 两边都有，**写法差异属反编译形态**：1.4.5 用 C# 12 主构造器写成一行 `public struct MaterialProperty(string name)`，1.4.6 反编译成块体（第 262 行的 `public struct MaterialProperty` + 第 265 行的构造器），语义相同。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 基类：[ItemComponent](../ItemComponent) 提供 `Item`（本类型实际上不填）、`ItemModifierGroup`（由 `Deserialize` 的 `modifier_group` 属性解析）与抽象 `GetCopy()`
- 宿主：[ItemObject](../ItemObject) 的 `HasHorseComponent` / `HorseComponent`（`as` 转型）/ `IsMountable` / `IsAnimal`
- 槽位：[EquipmentIndex](../EquipmentIndex) 的 `Horse`（10）与 `HorseHarness`（11）
- 坐骑最终值：[EquipmentElement](../EquipmentElement) 的 `GetModifiedMountManeuver` / `GetModifiedMountSpeed` / `GetModifiedMountCharge` / `GetModifiedMountHitPoints`，以及 `GetModifiedItemName` 里读 `ModifiedName` 的（不可达）分支
- 马具加成：[ArmorComponent](../ArmorComponent) 的 `ManeuverBonus` / `SpeedBonus` / `ChargeBonus` 是本组件三项裸值的另一半来源
- 血量来源：`Monster`（`TaleWorlds.Core`，`sealed class Monster : MBObjectBase`，本机尚无对应深写页）提供 `HitPoints`
- 骨骼：`SkeletonScale`（`TaleWorlds.Core`，`sealed class`，本机尚无对应深写页）提供 `SkeletonModel` / `Scales` / `BoneNames`
- 词缀：[ItemModifierGroup](../ItemModifierGroup) 与 `ItemModifier.ModifyMount*`
- 注册与查找：[MBObjectManager](../../campaign-ext/MBObjectManager) 解析 `skeleton_scale`
- 桶首页：[core-extra API 分区](../)