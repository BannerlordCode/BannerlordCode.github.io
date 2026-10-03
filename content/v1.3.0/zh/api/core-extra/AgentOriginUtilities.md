---
title: "AgentOriginUtilities"
description: "两个 static 工具方法：GetDefaultTroopTraits 靠 WeaponClass 的连续区间反推长矛/投掷/盾，GetDefaultTraitsMask 把它们折成 TroopTraitsMask；被全部 5 个 IAgentOriginBase 实现调用。"
---

# AgentOriginUtilities

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class AgentOriginUtilities`（**不是 `static class`**，但只有 static 成员）
**Base:** 无（仅隐式 `System.Object`；无构造函数、无字段、无属性）
**File:** `TaleWorlds.Core/AgentOriginUtilities.cs`（全文 86 行 / 2170 字节）

> 核对记录：读了 `TaleWorlds.Core/AgentOriginUtilities.cs`（2170 B）+ `TaleWorlds.Core/IAgentOriginBase.cs`（15 个成员的接口）+ `TaleWorlds.Core/WeaponClass.cs`（29 个成员逐个编号）+ `TaleWorlds.Core/TroopTraitsMask.cs` + `TaleWorlds.Core/Equipment.cs` 的 `GetHumanBodyArmorSum` 与索引器 + 5 个调用方（`TaleWorlds.MountAndBlade/BasicBattleAgentOrigin.cs`、`CustomBattleAgentOrigin.cs`，`TaleWorlds.CampaignSystem/AgentOrigins/` 下的 `PartyAgentOrigin.cs` / `PartyGroupAgentOrigin.cs` / `SimpleAgentOrigin.cs`）。约 22 min。最难判断点：`GetDefaultTroopTraits` 里那三层 `weaponClass - X > 2` 的写法是**依赖 `WeaponClass` 枚举的连续编号**做区间判断，不是一般意义上的范围检查——必须把 `WeaponClass` 每个成员的整数值数出来才能确定覆盖了哪几类。

## 概述

`AgentOriginUtilities` 是两个纯函数放在一个普通类里的工具集合，一个类零字段零属性零构造函数，两个方法全是 `public static`。它存在的理由是：**「这个士兵带矛吗 / 带盾吗 / 穿重甲吗」这个问题被问过 5 次，每次的答案必须一致**。

- **`GetDefaultTraitsMask(IAgentOriginBase origin)`** 把问题压缩成一个 `TroopTraitsMask` 位掩码。实现只有 30 行，全部是 `if (origin.某个 bool 属性) mask |= TroopTraitsMask.某个位;`，**一行逻辑分支都没有**。
- **`GetDefaultTroopTraits(BasicCharacterObject troop, out bool hasThrownWeapon, out bool hasSpear, out bool hasShield, out bool hasHeavyArmor)`** 真正去翻装备。它是这一页的重点，下面单独讲。

它被**全部 5 个 `IAgentOriginBase` 实现**在构造器里无差别调用一次（把结果缓存进 `_hasThrownWeapon` 等私有字段），并在 `IAgentOriginBase.GetTraitsMask()` 的实现里转发：

| 调用方 | 调 `GetDefaultTroopTraits` 的位置 | 调 `GetDefaultTraitsMask` 的位置 |
| --- | --- | --- |
| [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin) | 构造器 `SimpleAgentOrigin.cs:180` | `SimpleAgentOrigin.cs:231`（`IAgentOriginBase.GetTraitsMask()` 的显式实现） |
| [PartyAgentOrigin](../../campaign/PartyAgentOrigin) | `PartyAgentOrigin.cs:195` | `PartyAgentOrigin.cs:269` |
| [PartyGroupAgentOrigin](../../campaign/PartyGroupAgentOrigin) | `PartyGroupAgentOrigin.cs:20` | `PartyGroupAgentOrigin.cs:245` |
| [BasicBattleAgentOrigin](../../mission-ext/BasicBattleAgentOrigin) | `BasicBattleAgentOrigin.cs:133` | `BasicBattleAgentOrigin.cs:169` |
| [CustomBattleAgentOrigin](../../mission-ext/CustomBattleAgentOrigin) | `CustomBattleAgentOrigin.cs:143` | `CustomBattleAgentOrigin.cs:195` |

**「调用 5 次」这个事实本身就是一条设计约束**：任何自定义 `IAgentOriginBase` 实现都应该在构造器里调一次 `GetDefaultTroopTraits`，而不是在每次查询时重算——`FirstBattleEquipment` 的遍历要开 5 个槽位。

## 心智模型

把它当成**「从 `BasicCharacterObject` 反推战术标签」的唯一权威判定**，并且认清两条路径的方向相反。

**路径一：`BasicCharacterObject` → 4 个 bool（`GetDefaultTroopTraits`）。** 它的数据源只有一个：`troop.FirstBattleEquipment`。逻辑是**遍历 5 个武器槽位**（`for (int i = 0; i < 5; i++)`，5 = `EquipmentIndex.NumAllWeaponSlots`），对每个非空槽位读 `equipmentElement.Item.PrimaryWeapon.WeaponClass`，然后按 `WeaponClass` 的**整数连续性**分三档：

```csharp
WeaponClass weaponClass = equipmentElement.Item.PrimaryWeapon.WeaponClass;
if (weaponClass - WeaponClass.OneHandedPolearm > 2)      // 不是 9,10,11 → 不是长柄
{
    if (weaponClass - WeaponClass.ThrowingAxe > 2)     // 不是 21,22,23 → 不是投掷
    {
        if (weaponClass - WeaponClass.SmallShield <= 1) // 是 26,27 → 是盾
        {
            hasShield = true;
        }
    }
    else
    {
        hasThrownWeapon = true;
    }
}
else
{
    hasSpear = true;
}
```

把这三层区间还原成 [WeaponClass](../WeaponClass) 的实际成员（`grep -n` 数出编号，0 起）：

| 区间判断 | 命中的 `WeaponClass` | 结论 |
| --- | --- | --- |
| `wc - 9 <= 2` 即 `9..11` | `OneHandedPolearm`(9)、`TwoHandedPolearm`(10)、`LowGripPolearm`(11) | `hasSpear = true` |
| `wc - 21 <= 2` 即 `21..23` | `ThrowingAxe`(21)、`ThrowingKnife`(22)、`Javelin`(23) | `hasThrownWeapon = true` |
| `wc - 26 <= 1` 即 `26..27` | `SmallShield`(26)、`LargeShield`(27) | `hasShield = true` |
| 其余（0–8、12–20、24–25、28） | 剑、斧、锤、箭、弩、弹、石、手枪、火枪、`Banner`(28) | 三个标志都不置位 |

**这张表就是 mod 查这个方法时唯一需要的东西。** 注意 `Polearm`（技能）虽然叫「长柄武器」，但只有**三个 polearm 类别**算 `hasSpear`——单手剑不算、长柄枪算。而 `Javelin`(23) 归到「投掷」而不是「长矛」，尽管它物理上就是一支矛。

重甲是另一条完全独立的判定，走的不是槽位遍历而是装备求和：

```csharp
if (firstBattleEquipment.GetHumanBodyArmorSum() > 24f)
{
    hasHeavyArmor = true;
}
```

`GetHumanBodyArmorSum()` 在 `Equipment.cs:291`，它从 `EquipmentIndex.NumAllWeaponSlots` 累加到 `ArmorItemEndSlot` 之间的护甲值，所以它只看护甲槽、不看武器槽。**阈值 `24f` 是硬编码在方法里的字面量**，没有任何配置项。

还有一个容易被忽略的前置条件：**`firstBattleEquipment != null` 守卫**。整个 4 个 bool 的初始化在 `if (firstBattleEquipment != null)` 之外（都先置 `false`），但**循环和护甲求和都在守卫之内**。`BasicCharacterObject` 没有 `FirstBattleEquipment`（返回 `null`）时，结果全是 `false`——**不是抛异常，是静默全否**。

**路径二：`IAgentOriginBase` → `TroopTraitsMask`（`GetDefaultTraitsMask`）。** 它**不重新查装备**，只读 `IAgentOriginBase` 上已经缓存好的 4 个属性：

```csharp
if (origin.Troop.IsMounted)          { troopTraitsMask |= TroopTraitsMask.Mount; }
if (origin.Troop.IsRanged)           { troopTraitsMask |= TroopTraitsMask.Ranged; }
else                                 { troopTraitsMask |= TroopTraitsMask.Melee; }
if (origin.HasShield)                { troopTraitsMask |= TroopTraitsMask.Shield; }
if (origin.HasSpear)                 { troopTraitsMask |= TroopTraitsMask.Spear; }
if (origin.HasThrownWeapon)          { troopTraitsMask |= TroopTraitsMask.Thrown; }
if (origin.HasHeavyArmor)            { troopTraitsMask |= TroopTraitsMask.Armor; }
return troopTraitsMask;
```

**`Ranged` 与 `Melee` 是 if/else 互斥且必中其一的**——不 ranged 一定是 melee，所以 `Melee` 永远跟 `Ranged` 反向。后 4 位直接来自路径一的缓存。而 [IAgentOriginBase](../IAgentOriginBase) 的 `HasThrownWeapon` / `HasHeavyArmor` / `HasShield` / `HasSpear` 四个属性，对官方 5 个 origin 实现来说**全部是构造器里那次 `GetDefaultTroopTraits` 的输出**。

对 mod 作者的心智模型一句话：**`GetDefaultTroopTraits` 是唯一的「装备 → 标签」翻译器，`GetDefaultTraitsMask` 只是把已缓存的标签打包成位掩码**。你自定义 origin 时若绕开前者直接填 `HasShield` 等属性，标签就会与实际装备不一致，而且**没有任何一致性检查会告诉你**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetDefaultTraitsMask` | `public static TroopTraitsMask GetDefaultTraitsMask(IAgentOriginBase origin)` | 把 origin 上已缓存的装备标签 + `Troop.IsMounted` / `Troop.IsRanged` 折成一个 [TroopTraitsMask](../TroopTraitsMask)。**纯转发，不查装备**，所以它拿到的正确性完全依赖调用方是否在构造器里跑过 `GetDefaultTroopTraits`。注意它**直接解引用 `origin.Troop`**，传 `null` 会 NRE。 |
| `GetDefaultTroopTraits` | `public static void GetDefaultTroopTraits(BasicCharacterObject troop, out bool hasThrownWeapon, out bool hasSpear, out bool hasShield, out bool hasHeavyArmor)` | 遍历 `troop.FirstBattleEquipment` 的 5 个武器槽，按 `WeaponClass` 的连续编号区间反推长矛（9–11）/ 投掷（21–23）/ 盾（26–27），再用 `GetHumanBodyArmorSum() > 24f` 判重甲。`FirstBattleEquipment == null` 时四个 out 全 `false`。**顺序是 out 参数的顺序，别写反。** |
| （无构造函数） | `public class AgentOriginUtilities { }` 隐式默认构造 | 类不是 `static`，所以你可以（但没理由）`new AgentOriginUtilities()`。官方 5 个 origin 实现全是 `static` 调用，无一例外。 |

**返回值类型对照（写代码时最常查的一张表）**：

| 装备事实 | `GetDefaultTroopTraits` 的 out 参数 | `GetDefaultTraitsMask` 的位 |
| --- | --- | --- |
| `Troop.IsMounted == true` | 无对应 out（**不来自装备**） | `TroopTraitsMask.Mount`(4) |
| `Troop.IsRanged == true` | 无对应 out | `TroopTraitsMask.Ranged`(2) |
| `Troop.IsRanged == false` | 无对应 out | `TroopTraitsMask.Melee`(1)（**必置，与 Ranged 互斥**） |
| `WeaponClass ∈ {9,10,11}` | `hasSpear` | `TroopTraitsMask.Spear`(32) |
| `WeaponClass ∈ {21,22,23}` | `hasThrownWeapon` | `TroopTraitsMask.Thrown`(16) |
| `WeaponClass ∈ {26,27}` | `hasShield` | `TroopTraitsMask.Shield`(64) |
| `GetHumanBodyArmorSum() > 24f` | `hasHeavyArmor` | `TroopTraitsMask.Armor`(8) |

## 真实示例

在自定义 origin 实现里缓存这四个标签（照抄官方 5 个实现的形状）：

```csharp
public class MyBattleAgentOrigin : IAgentOriginBase
{
    private readonly BasicCharacterObject _troop;
    private bool _hasThrownWeapon;
    private bool _hasSpear;
    private bool _hasShield;
    private bool _hasHeavyArmor;

    public MyBattleAgentOrigin(BasicCharacterObject troop)
    {
        this._troop = troop;
        // 构造器里跑一次，结果缓存进字段
        AgentOriginUtilities.GetDefaultTroopTraits(troop, out this._hasThrownWeapon, out this._hasSpear, out this._hasShield, out this._hasHeavyArmor);
    }

    public bool HasThrownWeapon { get { return this._hasThrownWeapon; } }
    public bool HasSpear { get { return this._hasSpear; } }
    public bool HasShield { get { return this._hasShield; } }
    public bool HasHeavyArmor { get { return this._hasHeavyArmor; } }
    public BasicCharacterObject Troop { get { return this._troop; } }

    TroopTraitsMask IAgentOriginBase.GetTraitsMask()
    {
        // 官方 SimpleAgentOrigin.cs:231 就是这一行
        return AgentOriginUtilities.GetDefaultTraitsMask(this);
    }
}
```

自己实现装备 → 标签的翻译（想改判定规则时，把官方那三层区间换成自己的 switch）：

```csharp
public static void GetMyTroopTraits(BasicCharacterObject troop, out bool hasThrownWeapon, out bool hasSpear, out bool hasShield, out bool hasHeavyArmor)
{
    hasThrownWeapon = false;
    hasSpear = false;
    hasShield = false;
    hasHeavyArmor = false;
    Equipment first = troop.FirstBattleEquipment;
    if (first == null)
    {
        return;   // 与官方一致的静默全否
    }
    for (int i = 0; i < 5; i++)
    {
        // Equipment 有 int 索引器（Equipment.cs:95），5 == EquipmentIndex.NumAllWeaponSlots
        EquipmentElement element = first[i];
        if (element.IsEmpty)
        {
            continue;
        }
        WeaponClass weaponClass = element.Item.PrimaryWeapon.WeaponClass;
        switch (weaponClass)
        {
            case WeaponClass.OneHandedPolearm:
            case WeaponClass.TwoHandedPolearm:
            case WeaponClass.LowGripPolearm:
                hasSpear = true;
                break;
            case WeaponClass.ThrowingAxe:
            case WeaponClass.ThrowingKnife:
            case WeaponClass.Javelin:
                hasThrownWeapon = true;
                break;
            case WeaponClass.SmallShield:
            case WeaponClass.LargeShield:
                hasShield = true;
                break;
        }
    }
    hasHeavyArmor = first.GetHumanBodyArmorSum() > 24f;
}
```

读一个已生成 agent 的完整战术标签——**注意走 [Agent](../../mission/Agent) 自己的方法，不是 origin 的**：

```csharp
public class MyAgentLabelLogic : MissionLogic
{
    public override void OnMissionStart()
    {
        Agent agent = Agent.Main;
        if (agent == null)
        {
            return;
        }
        TroopTraitsMask mask = agent.GetTraitsMask();
        bool ranged = mask.HasAnyFlag(TroopTraitsMask.Ranged);
        bool melee = mask.HasAnyFlag(TroopTraitsMask.Melee);
        bool shield = mask.HasAnyFlag(TroopTraitsMask.Shield);
        bool mounted = mask.HasAnyFlag(TroopTraitsMask.Mount);
        MBDebug.Print("[MyMod] melee=" + melee + " ranged=" + ranged + " shield=" + shield + " mounted=" + mounted);
    }
}
```

`Agent.GetTraitsMask()`（`Agent.cs:2626`）的代码形状与 `GetDefaultTraitsMask` 一模一样（同样是 `Mount` / `Ranged`-`Melee` 互斥 / `Shield` / `Spear` / `Thrown` / `Armor` 六个分支），**但数据源完全不同**：

| 位 | `AgentOriginUtilities.GetDefaultTraitsMask(origin)` | `Agent.GetTraitsMask()` |
| --- | --- | --- |
| `Mount` | `origin.Troop.IsMounted`（**部队配置**，与实际骑没骑无关） | `this.HasMount`（**当前真骑着马**） |
| `Ranged` / `Melee` | `origin.Troop.IsRanged` | `this.IsRangedCached` |
| `Shield` | `origin.HasShield`（构造期快照） | `this.HasShieldCached`（运行时缓存） |
| `Spear` / `Thrown` | `origin.HasSpear` / `origin.HasThrownWeapon`（快照） | `this.HasSpearCached` / `this.HasThrownCached` |
| `Armor` | `origin.HasHeavyArmor`（快照，来自 `> 24f`） | `MissionGameModels.Current.AgentStatCalculateModel.HasHeavyArmor(this)`（**每次重算**） |

所以：**origin 版是「这个兵种被设计成什么」，agent 版是「他现在实际是什么」**。一个没带矛的农民骑上了马，origin 版不给 `Mount`、agent 版给；一个矛兵丢了矛，origin 版仍给 `Spear`、agent 版不给。想按「兵种设计」筛就用 `agent.Origin.GetTraitsMask()`（[IAgentOriginBase](../IAgentOriginBase) 的接口方法），想按「当前状态」筛就用 `agent.GetTraitsMask()`。

## 风险与边界

- **区间判断绑死 `WeaponClass` 的编号。** `weaponClass - WeaponClass.OneHandedPolearm > 2` 依赖 `OneHandedPolearm`、`TwoHandedPolearm`、`LowGripPolearm` 在枚举里**恰好连续**。官方把 `LowGripPolearm`(11) 和 `TwoHandedPolearm`(10) 放在 `OneHandedPolearm`(9) 之后、`Arrow`(12) 之前，就是为了让这三个数连续。**你在派生 mod 里往 [WeaponClass](../WeaponClass) 中间插一个成员会静默改变这三个标志的含义**，编译通过、行为错。
- **`FirstBattleEquipment == null` 静默全否。** 不抛异常。`GetHumanBodyArmorSum()` 那条路也被同一个 `if` 守卫住，所以「没有战斗装备的士兵」在标签系统里等同于「赤手空拳且不穿甲」，而这在自定义 `BasicCharacterObject` 上很容易发生。
- **硬编码阈值 `24f`。** 它在方法体里，不在 `ParameterContainer`、不在任何 XML、不在任何 Model 里。改它只能改代码或重写整个方法。
- **`hasSpear` 覆盖了「有长柄技能装备」的直觉。** 判据是 `WeaponClass` 而不是武器的 `RelevantSkill`。一把 `RelevantSkill == DefaultSkills.Polearm` 的单手剑**不会**置 `hasSpear`。
- **`Javelin` 归投掷不归长矛。** `WeaponClass.Javelin`(23) 落在 `21..23` 区间里，所以标了 `hasThrownWeapon` 而不是 `hasSpear`。
- **标签在构造期快照，之后改装备不会反映。** 5 个 origin 都在构造器里算一次并缓存。任务中途给士兵换武器，标签**不会**重算——`agent.Origin.HasShield` 仍是构造时的答案。官方对此的处理是换 origin（换 origin 就重新 `new` 一次），不是重算。
- **`GetDefaultTraitsMask(null)` 直接 NRE。** 第一行就是 `origin.Troop.IsMounted`，没有判空。任何自定义代码路径在 origin 可能为 `null` 时都要先判。
- **类不是 `static`。** 它是 `public class`，有一个隐式公开构造函数。你能 `new` 它，但实例没有任何状态、没有成员是实例的——**没有任何理由这么做**。
- **`TroopTraitsMask` 的 `LowTier`(128) / `HighTier`(256) / `All`(511) 这三个位，本方法从不设置。** 想按装备档次筛 troop 得自己去读 `troop.Tier`，这个工具不管。
- **不要把 `Agent.GetTraitsMask()` 当成这个方法的等价物。** 两者分支结构相同但数据源不同（见示例里的对照表）：agent 版用 `HasMount` / `IsRangedCached` / `AgentStatCalculateModel.HasHeavyArmor(agent)` 这些**运行期缓存**，origin 版用**构造期快照**。同一时刻两者可能给出不同答案。

## 跨版本提示

`AgentOriginUtilities.cs` 在 `bannerlord-1.3.0/`（86 行 / 2170 字节）与 1.3.15、1.4.6、1.4.7、1.5.3 **四棵树 `grep -v Token` 逐行 diff 后完全一致**（md5 不同仅因 `// Token:` 注释）。**方法签名、两个 out 参数顺序、`FirstBattleEquipment` 的 5 槽循环、三层 `WeaponClass` 区间、`24f` 阈值，全部跨 1.3 → 1.5 三个大版本零变化。**

需要盯的是它**依赖的外部数据**：

- `WeaponClass` 的成员编号（区间判断的前提）。跨这几个版本 `WeaponClass` 里新增成员（如新增火器类）会改变 `wc - X > N` 这类区间判断的边界，从而**静默改变 `hasSpear` / `hasThrownWeapon` / `hasShield` 的判定**。改判定前必须先数当版 [WeaponClass](../WeaponClass) 的实际编号。
- `TroopTraitsMask` 的位值。本页表格里的 `Mount=4`、`Ranged=2`、`Melee=1`、`Armor=8`、`Thrown=16`、`Spear=32`、`Shield=64` 来自 1.3.0 的 [TroopTraitsMask](../TroopTraitsMask)（`ushort`、`All = 511`）。**位稳定时这段映射才稳定。**
- 5 个 `IAgentOriginBase` 实现的调用点。1.3.0 里它们全部在构造器无差别调一次；新版本可能改懒加载，但**只要还调这两个方法之一，行为不变**。

`bannerlord-1.4.5/` 那棵树的 `AgentOriginUtilities.cs` 只有 72 行 / 1923 字节，是去掉了 `// Token:` 注释的精简存储版本，不是功能裁剪。

## 依赖关系

- 消费方：[SimpleAgentOrigin](../../campaign/SimpleAgentOrigin) / [PartyAgentOrigin](../../campaign/PartyAgentOrigin) / [PartyGroupAgentOrigin](../../campaign/PartyGroupAgentOrigin) / [BasicBattleAgentOrigin](../../mission-ext/BasicBattleAgentOrigin) / [CustomBattleAgentOrigin](../../mission-ext/CustomBattleAgentOrigin) 是全部 5 个调用方，构造器里各调一次 `GetDefaultTroopTraits`，显式实现 `GetTraitsMask()` 里各调一次 `GetDefaultTraitsMask`
- 接口契约：[IAgentOriginBase](../IAgentOriginBase) 声明 `HasThrownWeapon` / `HasHeavyArmor` / `HasShield` / `HasSpear` / `Troop` / `GetTraitsMask()`，`GetDefaultTraitsMask` 的每一个 `if` 都读其中一项
- 区间前提：[WeaponClass](../WeaponClass) 的成员连续编号（9–11 polearm、21–23 投掷、26–27 盾）决定了「差值比较」能覆盖到哪些类别
- 装备数据：[Equipment](../Equipment) 的 `FirstBattleEquipment` 提供 5 个武器槽与 `GetHumanBodyArmorSum()`，逐槽读数依赖 [EquipmentElement](../EquipmentElement) 的 `IsEmpty` / `Item.PrimaryWeapon`
- 输出类型：[TroopTraitsMask](../TroopTraitsMask) 是 `GetDefaultTraitsMask` 的返回类型，位值与本方法的判断一一对应
- 桶首页：[core-extra API 分区](../)