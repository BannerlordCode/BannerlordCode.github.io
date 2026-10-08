---
title: "WeaponComponentData"
description: "一把武器形态的完整参数表：伤害、速度、手感、重量与物理，由 WeaponComponent 按物品挂在 WeaponDescriptions XML 上，不是 MBObjectManager 可寻址对象。"
---

# WeaponComponentData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponComponentData`
**File:** `TaleWorlds.Core/WeaponComponentData.cs`

## 概述

725 行、约 50 个公开成员，是**一把武器形态的完整参数表**。它和 `ItemObject` 的关系是：一件物品（斧）可以有好几个形态（一手斧、双持斧、投掷斧），每个形态就是一份 `WeaponComponentData`。它们由 `WeaponComponent` 装在 `private readonly MBList<WeaponComponentData> _weaponList` 里，按下标暴露。

**它不是 `MBObjectBase` 的子类**，也没有 `StringId`。整个类就是一个纯数据类，实例由 `WeaponComponent.Deserialize` 直接 `new` 出来再 `Deserialize(item, node)`。所以 `MBObjectManager.Instance.GetObject<WeaponComponentData>(...)` 是取不到东西的——取形态的正确路径是 `item.Weapons` / `item.PrimaryWeapon`。

三个参数来源：`Deserialize` 从 XML 属性读、`Init` 由 27 个参数一次性灌（锻造流程用）、构造器给一组零值。

## 心智模型

把它想成**一张「手感表」**：伤害数字之外，还管挥砍多快、柄多长、重心在哪、惯性多大、出手多容易。这些量在战斗模型（`AgentStatCalculateModel` / `SandboxStrikeMagnitudeModel`）和物理模拟里被反复读。

理解它的关键是**三条派生关系**：

1. **XML 路径** —— `WeaponComponentData.Deserialize(item, node)` 读完标量后有两条派生链：
   - `TotalInertia = (IsConsumable ? MaxDataValue : 1) * item.Weight * 0.05f`，**注意它依赖 `item.Weight`，所以 `item` 参数不能是 null**。
   - `SetDamageFactors(item.Weight)` 按武器类别分支：弓 / 弩 / 投掷斧 / 飞刀 / 标枪 / 箭 / 弩箭一律 `SwingDamageFactor = ThrustDamageFactor = 1f` 直接返回；其余近战按 `Sqrt(Sqrt(weight / (WeaponLength * 0.01f)))` 算出系数，再按伤害类型乘 `Cut 0.8 / Pierce 0.7 / Blunt 1.0`，最后**两个因子都再乘 0.8**。**换句话说：近战武器的这两个因子你在 XML 里写不了，只能由重量与长度推出来。**
   - 另外 `Handling = ThrustSpeed`、`SweetSpotReach = 0.93f`、`CenterOfMass = WeaponLength * 0.5f * 0.01f` 也是硬编码派生。
2. **`Init` 路径** —— 27 个参数，`TotalInertia = inertia * (IsConsumable ? maxDataValue : 1)`（**不乘重量**），`Frame = MatrixFrame.Identity`，三维重心按 `(0f, 0f, 传入的重心值, -1f)` 构造。这是锻造 / 程序化生成武器用的路径。
3. **`WeaponFlags` 路径** —— `IsMeleeWeapon` / `IsRangedWeapon` / `IsPolearm` / `IsConsumable` / `IsAmmo` / `IsShield` / `IsTwoHanded` / `IsOneHanded` / `IsBow` / `IsCrossBow` 十个布尔属性**全部从 `public WeaponFlags WeaponFlags;` 这个公开字段推出来**。而 `WeaponFlags` 只有 `Deserialize` 里读 `<WeaponFlags .../>` 子节点才会填——**用 `Init` 或构造器造出来的实例，`WeaponFlags` 是零，所有分类属性全 false**。

## 关键成员

### 伤害与伤害类型

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ThrustDamage` | `public int ThrustDamage { get; private set; }` | 突刺伤害。XML 属性 `thrust_damage`。**投射类武器的实际伤害走这个字段**——`MissileDamage` 就是它的别名。 |
| `MissileDamage` | `public int MissileDamage { get; }` | **只读别名，getter 直接返回 `ThrustDamage`。没有独立存储。** |
| `SwingDamage` | `public int SwingDamage { get; private set; }` | 斩击伤害。XML 属性 `swing_damage`。 |
| `FireDamage` | `public int FireDamage { get; private set; }` | 火焰伤害。XML 属性 `fire_damage`。 |
| `ThrustDamageType` / `SwingDamageType` | `public DamageTypes ThrustDamageType { get; private set; }` / `public DamageTypes SwingDamageType { get; private set; }` | 两种伤害的类型。`Deserialize` 缺省都是 `DamageTypes.Blunt`；`Enum.Parse` **忽略大小写**。 |
| `ThrustDamageFactor` / `SwingDamageFactor` | `public float ThrustDamageFactor { get; private set; }` / `public float SwingDamageFactor { get; private set; }` | 伤害系数。**`Deserialize` 路径下由重量与长度推导，近战不能手写。** `Init` 路径下由参数直接给。 |

### 速度与距离

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SwingSpeed` | `public int SwingSpeed { get; private set; }` | 挥砍速度。XML 属性是 `speed_rating`，**名字对不上**。 |
| `ThrustSpeed` | `public int ThrustSpeed { get; private set; }` | 突刺速度。XML 属性 `thrust_speed`。**`Deserialize` 里 `Handling` 直接等于它。** |
| `MissileSpeed` | `public int MissileSpeed { get; private set; }` | 弹丸飞行速度。XML 属性 `missile_speed`。 |
| `WeaponLength` | `public int WeaponLength { get; private set; }` | 武器长度，**单位是厘米**。`GetRealWeaponLength()` 会乘 `0.01f` 再加上 `Frame` 的位移。 |
| `Accuracy` | `public int Accuracy { get; private set; }` | 命中精度。`Deserialize` 缺省 `100`，**不是 0**。 |
| `SweetSpotReach` | `public float SweetSpotReach { get; private set; }` | 最佳距离占比。`Deserialize` 里硬编码 `0.93f`。 |
| `BodyArmor` | `public int BodyArmor { get; private set; }` | 提供的护甲值。XML 属性 `body_armor`。 |

### 手感与物理

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `WeaponBalance` | `public float WeaponBalance { get; private set; }` | 平衡度。XML 属性 `weapon_balance` 读成整数后乘 `0.01f`。 |
| `TotalInertia` | `public float TotalInertia { get; private set; }` | 总惯性。**`Deserialize` 与 `Init` 两条路径算法不同**：前者 `系数 * item.Weight * 0.05f`，后者 `inertia * 系数`。 |
| `CenterOfMass` | `public float CenterOfMass { get; private set; }` | 重心。`Deserialize` 里等于 `WeaponLength * 0.5f * 0.01f`。 |
| `CenterOfMass3D` | `public Vec3 CenterOfMass3D { get; private set; }` | 三维重心。`Deserialize` 读 `center_of_mass`；`Init` 造一个三分量为 `(0f, 0f, 传入的重心值, -1f)` 的向量（**w 分量 -1**）。 |
| `Handling` | `public int Handling { get; private set; }` | 操控性。**`Deserialize` 里直接赋值为 `ThrustSpeed`。** |
| `Frame` | `public MatrixFrame Frame { get; private set; }` | 武器相对挂点的位姿。`Deserialize` 从 `position` / `rotation` 属性组装；`Init` 里是 `MatrixFrame.Identity`。可用 `SetFrame` 改。 |
| `StickingFrame` | `public MatrixFrame StickingFrame { get; private set; }` | 插在尸体 / 墙上的位姿。由 `sticking_position` / `sticking_rotation` 组装，构造器里是 `MatrixFrame.Identity`。 |
| `RotationSpeed` | `public Vec3 RotationSpeed { get; private set; }` | 旋转角速度。XML 属性 `rotation_speed`，缺省 `Vec3.Zero`。 |
| `MaxDataValue` | `public short MaxDataValue { get; private set; }` | 数据值上限。**`Deserialize` 按 `ammo_limit` → `stack_amount` → `hit_points` 的优先级取第一个存在的**，都没有则为 0。**护盾的耐久与箭矢的数量都走这里。** |
| `ReloadPhaseCount` | `public short ReloadPhaseCount { get; private set; }` | 上膛阶段数。XML 属性 `reload_phase_count`，缺省 1。 |

### 类别与标志位派生

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `WeaponFlags` | `public WeaponFlags WeaponFlags;` | **公开可写字段，不是属性。** 所有分类属性的唯一数据源。**构造器默认值是 0（`WeaponFlags.Undefined`）。** |
| `IsMeleeWeapon` / `IsRangedWeapon` | `public bool IsMeleeWeapon { get; }` / `public bool IsRangedWeapon { get; }` | `HasAllFlags(MeleeWeapon)` / `HasAllFlags(RangedWeapon)`。 |
| `IsPolearm` | `public bool IsPolearm { get; }` | `HasAllFlags(MeleeWeapon | WideGrip)`。 |
| `IsConsumable` | `public bool IsConsumable { get; }` | `HasAllFlags(Consumable)`。**箭、弩箭、弹药都是。** |
| `IsAmmo` | `public bool IsAmmo { get; }` | `!HasAnyFlag(WeaponMask) && IsConsumable`。 |
| `IsShield` | `public bool IsShield { get; }` | `!HasAnyFlag(WeaponMask) && HasAllFlags(HasHitPoints | CanBlockRanged)`。 |
| `IsTwoHanded` / `IsOneHanded` | `public bool IsTwoHanded { get; }` / `public bool IsOneHanded { get; }` | 前者 `HasAllFlags(MeleeWeapon | NotUsableWithOneHand)`；后者 `HasAnyFlag(MeleeWeapon) && !IsTwoHanded`。 |
| `IsBow` / `IsCrossBow` | `public bool IsBow { get; }` / `public bool IsCrossBow { get; }` | `IsBow` 是 `HasAllFlags((WeaponFlags)527360)`——**这个魔数等于 `HasString | StringHeldByHand | AutoReload` 三个位，必须全中**。`IsCrossBow` 是 `HasAnyFlag(HasString) && !IsBow`。 |
| `WeaponClass` | `public WeaponClass WeaponClass { get; private set; }` | 武器类别枚举。`RelevantSkill` 与 `GetItemTypeFromWeaponClass` 都按它分派。 |
| `AmmoClass` | `public WeaponClass AmmoClass { get; private set; }` | 弹药类别。 |
| `WeaponTier` | `public WeaponComponentData.WeaponTiers WeaponTier { get; private set; }` | 武器档位（嵌套枚举 `Tier1` … `Tier4` / `Special`）。 |

### 呈现与静态查询

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `PhysicsMaterial` | `public string PhysicsMaterial { get; private set; }` | 物理材质名。**构造器给的是空串，`Deserialize` 缺项时给 null。** |
| `FlyingSoundCode` / `PassbySoundCode` | `public string FlyingSoundCode { get; private set; }` / `public string PassbySoundCode { get; private set; }` | 飞行与掠过音效代码。构造器给空串，`Deserialize` 缺项时 null。 |
| `ItemUsage` | `public string ItemUsage { get; private set; }` | 使用动作代码。**构造器给 null**，`Deserialize` 缺项时也 null。 |
| `WeaponDescriptionId` | `public string WeaponDescriptionId { get; private set; }` | 对应的武器描述 id。**只有 `Init` 会填它，`Deserialize` 不填。** |
| `TrailParticleName` | `public string TrailParticleName { get; private set; }` | 拖尾粒子名。构造器给空串。 |
| `AmmoOffset` | `public Vec3 AmmoOffset { get; private set; }` | 弹药挂点偏移。构造器给 `Vec3.Zero`，可用 `SetAmmoOffset` 改。 |
| `.ctor` | `public WeaponComponentData(ItemObject item, WeaponClass weaponClass = WeaponClass.Undefined, WeaponFlags weaponFlags = (WeaponFlags)0UL)` | 给一组零值 + 指定类别与标志位。**`item` 参数在构造器里完全没用到。** |
| `Deserialize` | `public void Deserialize(ItemObject item, XmlNode node)` | 读全部 XML 属性并派生惯性、操控性、甜点、伤害系数。**`item.Weight` 参与运算，`item` 为 null 会炸。** |
| `Init` | `public void Init(...)（27 个参数，末位是重载阶段数）` | 27 参数的编程式初始化，供锻造 / 程序化生成用。**不设 `WeaponFlags`、不设 `Fitting`、不派生伤害系数。** |
| `SetFrame` / `SetAmmoOffset` | `public void SetFrame(MatrixFrame frame)` / `public void SetAmmoOffset(Vec3 ammoOffset)` | 两个仅有的公开写入口。其余全部 `private set` 或只读。 |
| `GetRealWeaponLength` | `public float GetRealWeaponLength()` | `WeaponLength * 0.01f + Vec3.DotProduct(Frame.rotation.u, Frame.origin)`。**默认 `Frame` 是 `MatrixFrame.Identity`，偏移量为 0。** |
| `GetMissileStartingFrame` | `public MatrixFrame GetMissileStartingFrame()` | 按类别给投射物出膛位姿：箭 / 弩箭 / 投石索给一个旋转 `Mat3`；投掷斧与飞刀先绕 up 轴转 `-1.5707964f`；**其余全部给同一个旋转 `Mat3`**。 |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` | 转发 `GetRelevantSkillFromWeaponClass(WeaponClass)`。**`WeaponClass` 为 `Undefined` / `NumClasses` 时返回 null。** |
| `CanHitMultipleTargets` | `public bool CanHitMultipleTargets { get; }` | 只有 `WeaponClass.TwoHandedAxe` 与 `TwoHandedMace` 为 true。 |
| `GetRelevantSkillFromWeaponClass` | `public static SkillObject GetRelevantSkillFromWeaponClass(WeaponClass weaponClass)` | 静态映射：匕首 / 单手剑 / 单手斧 / 钉锤 → `DefaultSkills.OneHanded`；双手剑 / 双手斧 / 双手钉锤 → `TwoHanded`；三种长柄 → `Polearm`；箭 / 弓 → `Bow`；弩箭 / 弩 → `Crossbow`；投石索石 / 投石索 / 石 / 巨石 / 飞斧 / 飞刀 / 标枪 / 两种弩炮弹药 → `Throwing`；小盾 / 大盾 → `OneHanded`；**其余返回 null**。 |
| `GetItemTypeFromWeaponClass` | `public static ItemObject.ItemTypeEnum GetItemTypeFromWeaponClass(WeaponClass weaponClass)` | 静态映射到物品大类。`Undefined` / `NumClasses` 与 `default` 分支返回 `ItemObject.ItemTypeEnum.Invalid`。 |
| `SetDamageFactors` | `private void SetDamageFactors(float weight)` | 私有派生内核。弓 / 弩 / 飞斧 / 飞刀 / 标枪 / 箭 / 弩箭直接双因子置 1；否则按 `Sqrt(Sqrt(weight / (WeaponLength * 0.01f)))` 与伤害类型系数算出，**再统一乘 0.8**。 |
| `WeaponTiers` | `public enum WeaponTiers` | 嵌套枚举：`Tier1` / `Tier2` / `Tier3` / `Tier4` / `Special`。 |

## 怎么用

### 怎么拿到它

`WeaponComponentData` 是 `public class WeaponComponentData`（`TaleWorlds.Core/WeaponComponentData.cs:9`）——**它不继承 `MBObjectBase`**，是 726 行、59 个公开成员的纯值对象，一个 `WeaponComponent`（`WeaponComponent.cs:10`）内部可以挂好几条。

构造器 `public WeaponComponentData(ItemObject item, WeaponClass weaponClass = WeaponClass.Undefined, WeaponFlags weaponFlags = (WeaponFlags)0UL)`（`:476`），三个参数都有默认值——而且构造器体**逐个给二十多个字段赋初值**（`:477` 起，`BodyArmor = 0`、`PhysicsMaterial = ""`、`ItemUsage = null`…），不是留 0。填充靠 `public void Deserialize(ItemObject item, XmlNode node)`（`:501`）——注意**签名是 `(ItemObject, XmlNode)` 而不是基类那一套 `(MBObjectManager, XmlNode)`**，它根本没有基类。

绝大多数成员是 `{ get; private set; }` 且只有一条 XML 读取路径，所以运行期几乎全部只读。常用字段：`WeaponTier`（`:25`）、`WeaponDescriptionId`（`:30`）、`ThrustDamage`（`:85`）/ `ThrustDamageType`（`:90`）、`SwingDamage`（`:95`）/ `SwingDamageType`（`:100`）、`WeaponClass`（`:115`）、`Handling`（`:160`）、`WeaponLength`（`:75`）、`WeaponBalance`（`:80`）、`Accuracy`（`:110`）。

唯一的例外是 `public int MissileDamage`（`:124`）——它有 getter 也有计算逻辑，不是单纯的 `{ get; private set; }`。

### 典型用法

```csharp
using TaleWorlds.Core;

ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("sword_1");   // MBObjectManager.cs:288
var wc = sword.ItemComponent as WeaponComponent;      // WeaponComponent.cs:10
if (wc != null)
{
    foreach (WeaponComponentData data in wc.Weapons)   // WeaponComponent.cs:26
    {
        int total = data.ThrustDamage + data.SwingDamage;          // :85 / :95
        DamageTypes thrustType = data.ThrustDamageType;            // :90
        WeaponClass cls = data.WeaponClass;                        // :115
        int thrustSpeed = data.ThrustSpeed;                        // :60
        int fire = data.FireDamage;                               // :105
        string usage = data.ItemUsage;                            // :55
        float inertia = data.TotalInertia;                        // :135
    }
    WeaponComponentData primary = wc.PrimaryWeapon;                // WeaponComponent.cs:36
}

// 自己造一条并注册进组件
var mine = new WeaponComponentData(sword, WeaponClass.OneHandedSword, default(WeaponFlags));   // :476，WeaponClass 见 WeaponClass.cs:6
mine.Deserialize(sword, node);                                   // :501，(ItemObject, XmlNode)
wc.AddWeapon(mine, someModifierGroup);                           // WeaponComponent.cs:45
```

### 最容易踩的坑

**把 `Deserialize` 当成统一约定去调 `Deserialize(objectManager, node)`。** 它在 `WeaponComponentData` 上的签名是 `public void Deserialize(ItemObject item, XmlNode node)`（`:501`）——**第一个参数是 `ItemObject` 不是 `MBObjectManager`**，而且这是唯一的重载，没有别的形状可选。写成 `(objectManager, node)` 直接编译不过，这反而是好事；真正会出事的是反过来的场景——在你自己的组件类里按基类习惯写 `override void Deserialize(MBObjectManager, XmlNode)`，结果 `WeaponComponentData` 这一条永远不会被填充，所有伤害字段停在构造时的默认值 0，武器拿在手里打不出伤害而**没有任何报错**。

第二个坑是它**没有任何公开 setter**，59 个成员几乎全是 `{ get; private set; }`（`:25` 起）。想改数值只能 `Deserialize`（`:501`）或者用 `new` 造一条新的——所以「运行时调平衡」这类需求不能靠改属性，只能重新 `Deserialize` 一遍改过的 XML 节点。

第三，`WeaponComponent.PrimaryWeapon`（`WeaponComponent.cs:36`）在 `_weaponList` 为空时是 `ArgumentOutOfRangeException`，因为 getter 是裸的 `_weaponList[0]`（`WeaponComponent.cs:40`）——而 `WeaponComponent.GetCopy()` 返回的组件恰好是空的。

从物品取一把武器形态并读手感（`item.Weapons` 是正确入口，不是 `MBObjectManager`）：

## 真实示例

<!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.6 源码树均无法核对——该版本未随附 XML 语料。
```csharp
ItemObject axe = MBObjectManager.Instance.GetObject<ItemObject>("heavy_bearded_axe");

if (axe == null || !axe.HasWeaponComponent)
{
    Debug.Print("not a weapon item", 0);
    return;
}

WeaponComponentData data = axe.PrimaryWeapon;
Debug.Print("class=" + data.WeaponClass + " tier=" + data.WeaponTier, 0);
Debug.Print("swing=" + data.SwingDamage + " x" + data.SwingDamageFactor
    + " (" + data.SwingDamageType + ")", 0);
Debug.Print("thrust=" + data.ThrustDamage + " x" + data.ThrustDamageFactor
    + " (" + data.ThrustDamageType + ")", 0);
Debug.Print("missileDamage aliases thrustDamage: " + (data.MissileDamage == data.ThrustDamage), 0);

MBReadOnlyList<WeaponComponentData> forms = axe.Weapons;
Debug.Print("form count=" + forms.Count, 0);
```

读分类布尔属性（**全部由 `WeaponFlags` 派生，未走 `Deserialize` 时全是 false**）：

```csharp
WeaponComponentData arrow = MBObjectManager.Instance
    .GetObject<ItemObject>("strange_crossbow_arrow_1")
    .PrimaryWeapon;

Debug.Print("consumable=" + arrow.IsConsumable + " ammo=" + arrow.IsAmmo, 0);
Debug.Print("maxDataValue=" + arrow.MaxDataValue, 0);

WeaponComponentData shield = MBObjectManager.Instance
    .GetObject<ItemObject>("heater_shield_1")
    .PrimaryWeapon;

Debug.Print("shield=" + shield.IsShield + " maxDataValue=" + shield.MaxDataValue, 0);

WeaponComponentData sword = MBObjectManager.Instance
    .GetObject<ItemObject>("sword_empire_1")
    .PrimaryWeapon;

Debug.Print("oneHanded=" + sword.IsOneHanded + " twoHanded=" + sword.IsTwoHanded, 0);
Debug.Print("polearm=" + sword.IsPolearm + " multiTarget=" + sword.CanHitMultipleTargets, 0);
```

用静态映射做分类换算（两个方法的 `default` 分支都要留意）：

```csharp
ItemObject.ItemTypeEnum type = WeaponComponentData.GetItemTypeFromWeaponClass(WeaponClass.Crossbow);
Debug.Print("crossbow -> " + type, 0);

ItemObject.ItemTypeEnum undefinedType = WeaponComponentData.GetItemTypeFromWeaponClass(WeaponClass.Undefined);
Debug.Print("undefined -> " + undefinedType, 0);

SkillObject skill = WeaponComponentData.GetRelevantSkillFromWeaponClass(WeaponClass.TwoHandedAxe);
Debug.Print("two handed axe skill=" + skill.StringId, 0);
```

程序化造一份（**注意 `Init` 不设 `WeaponFlags`，所有分类属性仍是 false**）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public class WeaponFactory
{
    public static WeaponComponentData CreateSword(ItemObject item)
    {
        WeaponComponentData data = new WeaponComponentData(item, WeaponClass.OneHandedSword, WeaponFlags.MeleeWeapon);
        data.Init(
            "sword",
            "sword",
            "sword",
            DamageTypes.Cut,
            DamageTypes.Cut,
            0,
            100,
            0.6f,
            8f,
            0.5f,
            90,
            0.8f,
            0.8f,
            0,
            "",
            100,
            0,
            MatrixFrame.Identity,
            WeaponClass.Undefined,
            0.93f,
            110,
            75,
            105,
            60,
            Vec3.Zero,
            WeaponComponentData.WeaponTiers.Tier2,
            1);
        return data;
    }
}

ItemObject host = MBObjectManager.Instance.GetObject<ItemObject>("custom_sword");
WeaponComponentData made = WeaponFactory.CreateSword(host);

host.AddWeapon(made, host.ItemModifierGroup);

Debug.Print("realLength=" + made.GetRealWeaponLength(), 0);
Debug.Print("oneHanded=" + made.IsOneHanded + " tier=" + made.WeaponTier, 0);
```

## 风险与边界

- **不是 `MBObjectBase`，没有 `StringId`。** `MBObjectManager.Instance.GetObject<WeaponComponentData>(...)` 取不到任何东西。**取形态只能走 `item.Weapons` / `item.PrimaryWeapon`。**
- **`WeaponFlags` 是公开字段不是属性。** 可以随手改，改完十个分类属性立刻跟着变——**包括 `IsAmmo` / `IsShield` 这种依赖 `WeaponMask` 取反的**。
- **非 XML 路径下所有分类属性为 false。** 构造器默认 `weaponFlags = (WeaponFlags)0UL`，`Init` 也完全不碰它。**用 `Init` 造武器就必须自己设 `WeaponFlags`。**
- **`Deserialize` 依赖 `item.Weight`。** `item` 传 null 直接炸；传错物品会让惯性与伤害系数全错。
- **`TotalInertia` 两条路径公式不同。** XML 路径乘 `item.Weight * 0.05f`，`Init` 路径只乘 `IsConsumable ? maxDataValue : 1`。**同一份参数走两条路结果不同。**
- **两条路径都只有 `Init` 会填 `WeaponDescriptionId`，`Deserialize` 不填。** 两条路径都只有 `Init` 会填它。**依赖 `WeaponDescriptionId` 的代码在 XML 路径下拿到的是 null。**
- **`MaxDataValue` 三级优先级。** `ammo_limit` → `stack_amount` → `hit_points`，取第一个存在的。**同名语义的东西挂在不同属性名上，写错不会报错，只会静默取 0。**
- **`IsBow` 是魔数比较。** `(WeaponFlags)527360` 等于 `HasString | StringHeldByHand | AutoReload` 三个位**全部命中**。少一个位就不算弓，转而被 `IsCrossBow` 判成弩。
- **`IsAmmo` / `IsShield` 依赖 `WeaponMask` 取反。** `WeaponMask = MeleeWeapon | RangedWeapon`。**如果某个模组同时设了 `Consumable` 又设了 `RangedWeapon`，`IsAmmo` 会是 false。**
- **`SwingDamageFactor` 近战不能手写。** `Deserialize` 里由重量与长度推导，近战还额外乘 0.8。想改手感得改 `item.Weight` 或 `WeaponLength`。
- **`SwingSpeed` 的 XML 属性叫 `speed_rating`。** 属性名与 XML 名字对不上。
- **`Handling` 等于 `ThrustSpeed`。** `Deserialize` 里直接赋值，不是独立配置项。
- **单位混杂。** `WeaponLength` 是厘米（`0.01f` 转米）、`WeaponBalance` 是百分数（`0.01f`）、`HolsterMeshLength` 之类同理、`Accuracy` 缺省 100、`Frame` 的第四分量常是 -1。**混算之前先确认单位。**
- **字符串属性构造与反序列化的缺省不同。** 构造器给空串，`Deserialize` 缺项时给 null（`PhysicsMaterial` / `FlyingSoundCode` / `PassbySoundCode` / `TrailParticleName`）。**判空用 `string.IsNullOrEmpty`。**
- **`GetMissileStartingFrame` 的 else 分支是兜底不是逻辑。** 除三类之外的所有类别都拿同一个旋转矩阵，**它不是逐类别设计的**。
- **`RelevantSkill` 对未映射类别返回 null。** `Undefined` / `NumClasses` 以及任何没在 switch 里列的类别都 null。**下游直接解引用会炸。**
- **非 `sealed`，但成员基本不可改。** 类本身可继承，可是所有有意义的属性都是 `private set`，只有 `WeaponFlags` 一个公开字段。**继承它基本没用。**
- **`GetRealWeaponLength` 依赖 `Frame`。** `Frame` 为 `MatrixFrame.Identity` 时第二项是 0，数值就是 `WeaponLength * 0.01f`。
- **按下标取形态会越界。** `PrimaryWeapon` 是 `_weaponList[0]` 硬索引，列表为空时抛 `ArgumentOutOfRangeException`。

## 依赖关系

- 宿主：[WeaponComponent](../WeaponComponent) 的 `_weaponList` 是 `MBList<WeaponComponentData>`，`Weapons` / `PrimaryWeapon` / `AddWeapon` / `GetItemType` 都走它
- 物品侧：[ItemObject](../ItemObject) 的 `Weapons`（`MBReadOnlyList<WeaponComponentData>`）、`PrimaryWeapon`、`GetWeaponWithUsageIndex(int)`、`HasWeaponComponent`
- 品质：[ItemModifierGroup](../ItemModifierGroup) 通过 `AddWeapon(WeaponComponentData, ItemModifierGroup)` 的第二个参数挂到形态上
- 类别枚举：`TaleWorlds.Core.WeaponClass`（匕首 / 单手剑 / 单手斧 / 钉锤 / 双手剑 / 双手斧 / 镐 / 双手钉锤 / 三种长柄 / 箭 / 弓 / 弩箭 / 弩 / 投石索石 / 投石索 / 石 / 巨石 / 飞斧 / 飞刀 / 标枪 / 两种弩炮弹药 / 弹药 / 火枪 / 步枪 / 小盾 / 大盾 / 旗 / 弹匣 …）
- 标志位：`TaleWorlds.Core.WeaponFlags`（`MeleeWeapon` / `RangedWeapon` / `WeaponMask` / `Consumable` / `HasHitPoints` / `HasString` / `StringHeldByHand` / `WideGrip` / `NotUsableWithOneHand` / `CanBlockRanged` / `AutoReload` …）
- 伤害类型：`TaleWorlds.Core.DamageTypes`（`Cut` / `Pierce` / `Blunt` 等）
- 数学类型：`TaleWorlds.Library.MatrixFrame`（`Frame` / `StickingFrame`）、`TaleWorlds.Library.Vec3`、`TaleWorlds.Library.Mat3`
- 技能映射：`GetRelevantSkillFromWeaponClass` 落到 [DefaultSkills](../DefaultSkills) 的静态属性，产出 [SkillObject](../SkillObject)
- 锻造出口：[Crafting](../Crafting) 生成带形态的物品，[CraftingPiece](../CraftingPiece) 与 [BladeData](../BladeData) 提供刀身侧的输入
- 加载来源：`TaleWorlds.Core.Game.LoadBasicFiles()` 里的 `LoadXML("WeaponDescriptions", false)`，由 `WeaponComponent.Deserialize` 逐形态构造
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../WeaponComponent`](../WeaponComponent) · [`../ItemObject`](../ItemObject) · [`../SkillObject`](../SkillObject)
- 父索引：[`../_index`](../_index)
