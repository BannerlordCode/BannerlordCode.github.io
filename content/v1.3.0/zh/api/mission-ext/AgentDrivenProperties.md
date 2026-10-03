---
title: "AgentDrivenProperties"
description: "93 格 float 数组（v1.3.0）+ 92 个具名属性的一层包装：索引就是 DrivenProperty 的数值，Count=93（v1.3.0）恰好越界一格；UseRealisticBlocking 没有具名包装，只能走 GetStat/SetStat。本页所有计数均为 v1.3.0；v1.4.5 的对应值是 98，不要混用。"
---

# AgentDrivenProperties

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentDrivenProperties`
**Base:** 无（仅隐式 `System.Object`）
**File:** `TaleWorlds.MountAndBlade/AgentDrivenProperties.cs`（全文 1436 行）

## 概述

`AgentDrivenProperties` 是**一个 Agent 的全部「可驱动属性」的容器**——挥砍速度、负重、护甲值、跑动速度、AI 决策倾向，**93 个数值（v1.3.0）**都在里面。它是纯数据 + 属性包装层，没有任何行为逻辑。

结构极简：

```csharp
public class AgentDrivenProperties
{
    internal float[] Values { get { return this._statValues; } }

    public AgentDrivenProperties() { this._statValues = new float[93]; }

    public float GetStat(DrivenProperty propertyEnum) { return this._statValues[(int)propertyEnum]; }
    public void SetStat(DrivenProperty propertyEnum, float value) { this._statValues[(int)propertyEnum] = value; }

    // ... 92 个 public float/int 属性，每个都是 GetStat/SetStat 的一层壳
    protected readonly float[] _statValues;  // 实际是 private readonly
}
```

**92 个 public 标量属性（v1.3.0）**（91 个 `float` + 1 个 `int`，那个 `int` 就是 `AiSpeciesIndex`）。注意「92 个具名属性」**已经包含** `AiSpeciesIndex`，不是 92 + 1。它们与 **93 个槽位（v1.3.0）**正好差一格——下面解释那一格去哪了。

> ⚠ **本页全部计数只对 v1.3.0 成立。** v1.4.5 的同一类是 **98 项（v1.4.5）**、enum 成员 **101（v1.4.5）**。
> 两棵树结构相同但数值不同（实测 `new float[93]` vs `new float[98]`），**不要跨版本引用本页的计数**。

> **本页所有数字均为实测**，不是估计，且**均只对 v1.3.0 成立**。来源文件与计数方法见下面「计数怎么来的」小节。

## 心智模型

把它当成**「一个固定大小的 float 数组，外面套了一层带名字的索引器」**。心智模型的核心是**索引空间**，这是本页最需要算清楚的东西。

**索引空间的精确形状。** [DrivenProperty](../../core-extra/DrivenProperty) 在 `TaleWorlds.Core` 里，我逐个成员数过：

- `None = -1`
- **93 个真实属性（v1.3.0）**，隐式取值 **0..92**，从 `AiRangedHorsebackMissileRange = 0` 到 `OffhandWeaponDefendSpeedMultiplier = 92`
- `Count = 93`（v1.3.0）
- `DrivenPropertiesCalculatedAtSpawnEnd = 61` —— **这是 `WeaponsEncumbrance = 61` 的别名**，同一个数值

所以 `AgentDrivenProperties` 的 `new float[93]` 有效下标是 **0..92**，而 `DrivenProperty.Count = 93` **恰好越界一格**。这不是巧合，是设计：`Count` 是哨兵，不是有效槽位。**`GetStat(DrivenProperty.Count)` 会抛 `IndexOutOfRangeException`。**

### 计数怎么来的

本节每个数字都可复现。源文件都在 **v1.3.0 反编译源码树**里：

| 数字 | 值 | 来源 | 计数方法 |
| --- | --- | --- | --- |
| 枚举成员总数 | **96（v1.3.0）** | `TaleWorlds.Core/DrivenProperty.cs`（v1.3.0 树；全文 201 行；enum 声明 `:6`，成员区 `:9`-`:199`，闭合括号 `:200`） | 逐行解析 enum 体。**只有两个显式赋值**：`None = -1`（`:9`）与 `DrivenPropertiesCalculatedAtSpawnEnd = 61`（`:199`，末项无逗号）；其余 94 个是 C# 隐式递增，按 `previous + 1` 推值（`Count` 在 `:197`，同样无显式值，靠累加落到 93）。 |
| 真实槽位数 | **93（v1.3.0）** | 同上 | 96（v1.3.0）减去 `None`、`Count`、`DrivenPropertiesCalculatedAtSpawnEnd` 三个非槽位成员。 |
| 槽位区间 | 0..92 | 同上 | 93 个真实成员排序后的最小/最大值。**区间内无空洞**（逐值检查 `0..92` 全部命中）。 |
| `Count` | 93 | `DrivenProperty.cs:197` | 隐式递增落在这里。 |
| 别名 | `DrivenPropertiesCalculatedAtSpawnEnd = 61` = `WeaponsEncumbrance = 61` | `DrivenProperty.cs:199` | 把 93 个真实成员按数值分组，只有值 61 这一组有 2 个名字。 |
| 数组长度 | `new float[93]` | `TaleWorlds.MountAndBlade/AgentDrivenProperties.cs:23` | 全文只出现**一次** `new float[...]`，唯一实参是字面量 `93`。 |
| 具名属性数 | **92**（91 `float` + 1 `int`） | 同上（全文 1436 行） | 匹配形如 `public float Name` / `public int Name` 的属性声明行，得 92 个；按类型分得 91 `float` + 1 `int`。**无重名**。 |
| 缺包装的槽位 | **1**（`UseRealisticBlocking` = 56） | `AgentDrivenProperties.cs` + `DrivenProperty.cs:123` | 收集本类全部 `GetStat(DrivenProperty.X)` / `SetStat(DrivenProperty.X, …)` 的 `X`，得 92 个互不相同的枚举成员；与 93 个真实槽位求差集，差 1 个：`UseRealisticBlocking`。**差集里没有哨兵或别名成员。** |
| 槽位→属性映射 | 一对一 | 同上 | 92 个属性解析出的槽位集合是 `{0..92} \ {56}`，**92 个互不相同的值，无一对多**。 |

**成员名与枚举名不一致的只有两处**：槽位 69/70（见下）。其余 90 个属性的名字与其索引的枚举成员**完全同名**。

**那 93 个槽位 vs 92 个具名属性的差额去哪了？** 我把 `AgentDrivenProperties.cs` 里所有 `GetStat(DrivenProperty.X)` / `SetStat(DrivenProperty.X, ...)` 的 `X` 收集起来去和 93 个真实属性求差集，结果是**只有一个**：

```
没有具名包装的属性：DrivenProperty.UseRealisticBlocking（值 56）
```

（`DrivenPropertiesCalculatedAtSpawnEnd` 是别名，不算差额。）官方写入它的方式在 `AgentStatCalculateModel.SetAiRelatedProperties` 尾部：

```csharp
agentDrivenProperties.SetStat(DrivenProperty.UseRealisticBlocking,
    (agent.Controller != AgentControllerType.Player) ? 1f : 0f);
```

**所以 `UseRealisticBlocking` 只能通过 `GetStat` / `SetStat` 访问，没有具名属性。** 这条也说明为什么数组长度是 93 而不是 92。

**别名陷阱。** `DrivenProperty.DrivenPropertiesCalculatedAtSpawnEnd = 61` 与 `WeaponsEncumbrance = 61` 指向**同一格**。`SetStat(DrivenPropertiesCalculatedAtSpawnEnd, x)` 会把负重写坏。这不是本类的设计问题，但使用者必须知道 `DrivenProperty` 有别名成员。

**写入的时机只有两个内部入口。** 都在本类末尾：

```csharp
internal float[] InitializeDrivenProperties(Agent agent, Equipment spawnEquipment, AgentBuildData agentBuildData)
{
    MissionGameModels.Current.AgentStatCalculateModel.InitializeAgentStats(agent, spawnEquipment, this, agentBuildData);
    MissionGameModels.Current.AgentStatCalculateModel.UpdateAgentStats(agent, this);
    return this._statValues;
}

internal float[] UpdateDrivenProperties(Agent agent)
{
    MissionGameModels.Current.AgentStatCalculateModel.UpdateAgentStats(agent, this);
    return this._statValues;
}
```

两个都是 `internal`，返回 `float[]` 本身。它们的调用方是 [Agent](../../mission/Agent)：

```csharp
// TaleWorlds.MountAndBlade/Agent.cs:3780-3790  InitializeAgentProperties
this.AgentDrivenProperties = new AgentDrivenProperties();
float[] values = this.AgentDrivenProperties.InitializeDrivenProperties(this, spawnEquipment, agentBuildData);
this.UpdateDrivenProperties(values);

// TaleWorlds.MountAndBlade/Agent.cs:3808-3815  UpdateAgentProperties
if (this.AgentDrivenProperties != null)
{
    float[] values = this.AgentDrivenProperties.UpdateDrivenProperties(this);
    this.UpdateDrivenProperties(values);
}
```

**关键推论：数值最终来自 `AgentStatCalculateModel`，不是来自你在这里的赋值。** 你写进去的值会在下一次 `UpdateAgentStats` 被官方公式覆盖。持久生效的正确做法是覆写 [AgentStatCalculateModel](../AgentStatCalculateModel)（沙盒的 `InitializeAgentStats` / `UpdateAgentStats` 是 abstract 的），而不是在别处零散地 `SetStat`。

## 关键成员

### 核心 API

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AgentDrivenProperties()` | `public AgentDrivenProperties()` | 唯一构造器。函数体只有 `this._statValues = new float[93];`。**全部 93 格初始为 0f**——没有「默认值」概念，0 就是未初始化值。所以「`ArmorHead == 0`」不代表护甲为零，只代表**还没被算过**。 |
| `GetStat` | `public float GetStat(DrivenProperty propertyEnum)` | `return this._statValues[(int)propertyEnum];`。**不做范围检查**，`(int)propertyEnum` 越界即抛 `IndexOutOfRangeException`。这是访问 `UseRealisticBlocking` 的唯一途径。 |
| `SetStat` | `public void SetStat(DrivenProperty propertyEnum, float value)` | `this._statValues[(int)propertyEnum] = value;`。同样无范围检查。 |
| `Values` | `internal float[] Values { get { return this._statValues; } }` | **直接暴露底层数组**，只有同程序集能访问。用途是交给 `Agent.UpdateDrivenProperties(float[])` 推给 native——`MBAPI` 侧一次读 93 个 float，而不是 93 次跨语言调用。 |
| `InitializeDrivenProperties` | `internal float[] InitializeDrivenProperties(Agent, Equipment, AgentBuildData)` | 初始化路径。连调 `InitializeAgentStats` + `UpdateAgentStats` 两趟，然后返回数组。**只在 Agent 建立属性时调一次。** |
| `UpdateDrivenProperties` | `internal float[] UpdateDrivenProperties(Agent)` | 更新路径。只调 `UpdateAgentStats`，然后返回数组。由 `Agent.UpdateAgentProperties()` 调用——换武器、上下马、加 buff 都会触发。 |
| `_statValues` | `private readonly float[]` | 底层存储，构造器里定长 93。`readonly` 只锁引用，不锁内容。 |

### 具名属性的分类（92 个，按槽位号列出）

每个属性都是 `GetStat(DrivenProperty.X)` / `SetStat(DrivenProperty.X, value)` 的两行壳。槽位号取自 `TaleWorlds.Core/DrivenProperty.cs` 的实际声明顺序，**不是口算的**。

**武器手感（12 个，槽位 63–74）**

| 槽位 | 具名属性 |
| --- | --- |
| 63 | `SwingSpeedMultiplier` — 挥砍速度倍率 |
| 64 | `ThrustOrRangedReadySpeedMultiplier` — 刺击/远程预备速度倍率 |
| 65 | `HandlingMultiplier` — 操控性倍率 |
| 66 | `ReloadSpeed` — 装填速度 |
| 67 | `MissileSpeedMultiplier` — 弹道速度倍率 |
| 68 | `WeaponInaccuracy` — 武器不准度 |
| 69 | `WeaponMaxMovementAccuracyPenalty` → 实际索引 `DrivenProperty.WeaponWorstMobileAccuracyPenalty` |
| 70 | `WeaponMaxUnsteadyAccuracyPenalty` → 实际索引 `DrivenProperty.WeaponWorstUnsteadyAccuracyPenalty` |
| 71 | `WeaponBestAccuracyWaitTime` |
| 72 | `WeaponUnsteadyBeginTime` |
| 73 | `WeaponUnsteadyEndTime` |
| 74 | `WeaponRotationalAccuracyPenaltyInRadians` |

**69 / 70 两格是命名不一致**：属性叫 `Max`，枚举成员叫 `Worst`。源码 `AgentDrivenProperties.cs:131-141` 就是这样：

```csharp
public float WeaponMaxMovementAccuracyPenalty
{
    get { return this.GetStat(DrivenProperty.WeaponWorstMobileAccuracyPenalty); }
    set { this.SetStat(DrivenProperty.WeaponWorstMobileAccuracyPenalty, value); }
}
```

所以：**搜枚举成员名会搜不到**——`grep WeaponMaxMovementAccuracyPenalty TaleWorlds.Core/DrivenProperty.cs` 零命中。

**伤害与穿透（4 个，槽位 57–62）**

| 槽位 | 具名属性 | 含义 |
| --- | --- | --- |
| 57 | `ThrowingWeaponDamageMultiplierBonus` | 投掷伤害加成 |
| 58 | `MeleeWeaponDamageMultiplierBonus` | 近战伤害加成 |
| 59 | `ArmorPenetrationMultiplierCrossbow` | 弩的破甲倍率 |
| 60 | `ArmorPenetrationMultiplierBow` | 弓的破甲倍率 |
| 61 | `WeaponsEncumbrance` | 武器负重（**与 `DrivenPropertiesCalculatedAtSpawnEnd` 同格**） |
| 62 | `DamageMultiplierBonus` | 减伤加成 |

**护甲与负重（5 个，槽位 51–55）**——`ArmorEncumbrance`(51) 护甲负重，加上四个**护甲有效值** `ArmorHead`(52) / `ArmorTorso`(53) / `ArmorLegs`(54) / `ArmorArms`(55)。`GetTotalEncumbrance()`（`Agent.cs:3101-3104`）用 `ArmorEncumbrance + WeaponsEncumbrance` 求和。

**坐骑（5 个，槽位 49–50、87–89）**——`MountChargeDamage`(49)、`MountDifficulty`(50)、`MountManeuver`(87)、`MountSpeed`(88)、`MountDashAccelerationMultiplier`(89)。

**技能与机动（12 个，槽位 75–77、81–86）**——`AttributeRiding`(75)、`AttributeShield`(76)、`AttributeShieldMissileCollisionBodySizeAdder`(77)、`TopSpeedReachDuration`(81)、`MaxSpeedMultiplier`(82)、`CombatMaxSpeedMultiplier`(83)、`CrouchedSpeedMultiplier`(84)、`AttributeHorseArchery`(85)、`AttributeCourage`(86)。

**机动与节奏（4 个）**——`ReloadMovementPenaltyFactor`(80) 移动装填惩罚、`ShieldBashStunDurationMultiplier`(78) 盾击眩晕倍率、`KickStunDurationMultiplier`(79) 踢击眩晕倍率、`OffhandWeaponDefendSpeedMultiplier`(92) 副手防御速度。

**远程专属（2 个，槽位 90–91）**——`BipedalRangedReadySpeedMultiplier`、`BipedalRangedReloadSpeedMultiplier`。

**AI 决策（49 个，槽位 0–48）**——占了整个类的三分之二，从 `AiRangedHorsebackMissileRange`(0) 到 `AIHoldingReadyVariationPercentage`(48)，全部连续。由 `AgentStatCalculateModel.SetAiRelatedProperties` 集中计算，是「这个 AI 有多准、多爱格挡、多快拔刀」的参数集。其中：

- `AiSpeciesIndex` 是**唯一类型为 `int` 的属性**（槽位 36）：`get { return MathF.Round(this.GetStat(DrivenProperty.AiSpeciesIndex)); }` / `set { this.SetStat(DrivenProperty.AiSpeciesIndex, (float)value); }`。**底层仍然存 float，每次读做四舍五入**——所以你写 `2.4f` 读回来是 `2`。
- `AiWeaponFavorMultiplierMelee`(39) / `Ranged`(40) / `Polearm`(41) 三个是倍率，不是加成，初始值都是 `1f`。
- `AiShooterError`(38) 被官方硬编码为常量 `0.008f`（`AgentStatCalculateModel.cs:232`），**不随 AI 等级变化**——想改只能覆写模型。

**92 = 49（AI）+ 43（其余）**。上面各分类有重叠计数，**唯一的权威口径是槽位集合 `{0..92} \ {56}`，共 92 个值**。

#### AI 决策属性的完整名单（槽位 0–48，全部 49 个）

这是全类最大的一组，也是原文最容易漏列的一段，所以逐个列出。第三列是**该属性在 `AgentDrivenProperties.cs` 里的声明行号**（声明行，不是 `GetStat` 那一行）。

| 槽位 | 具名属性 | 索引的枚举成员 | 声明行 |
| --- | --- | --- | --- |
| 0 | `AiRangedHorsebackMissileRange` | `AiRangedHorsebackMissileRange` | `:671` |
| 1 | `AiFacingMissileWatch` | `AiFacingMissileWatch` | `:686` |
| 2 | `AiFlyingMissileCheckRadius` | `AiFlyingMissileCheckRadius` | `:701` |
| 3 | `AiShootFreq` | `AiShootFreq` | `:716` |
| 4 | `AiWaitBeforeShootFactor` | `AiWaitBeforeShootFactor` | `:731` |
| 5 | `AIBlockOnDecideAbility` | `AIBlockOnDecideAbility` | `:746` |
| 6 | `AIParryOnDecideAbility` | `AIParryOnDecideAbility` | `:761` |
| 7 | `AiTryChamberAttackOnDecide` | `AiTryChamberAttackOnDecide` | `:776` |
| 8 | `AIAttackOnParryChance` | `AIAttackOnParryChance` | `:791` |
| 9 | `AiAttackOnParryTiming` | `AiAttackOnParryTiming` | `:806` |
| 10 | `AIDecideOnAttackChance` | `AIDecideOnAttackChance` | `:821` |
| 11 | `AIParryOnAttackAbility` | `AIParryOnAttackAbility` | `:836` |
| 12 | `AiKick` | `AiKick` | `:851` |
| 13 | `AiAttackCalculationMaxTimeFactor` | `AiAttackCalculationMaxTimeFactor` | `:866` |
| 14 | `AiDecideOnAttackWhenReceiveHitTiming` | `AiDecideOnAttackWhenReceiveHitTiming` | `:881` |
| 15 | `AiDecideOnAttackContinueAction` | `AiDecideOnAttackContinueAction` | `:896` |
| 16 | `AiDecideOnAttackingContinue` | `AiDecideOnAttackingContinue` | `:911` |
| 17 | `AIParryOnAttackingContinueAbility` | `AIParryOnAttackingContinueAbility` | `:926` |
| 18 | `AIDecideOnRealizeEnemyBlockingAttackAbility` | `AIDecideOnRealizeEnemyBlockingAttackAbility` | `:941` |
| 19 | `AIRealizeBlockingFromIncorrectSideAbility` | `AIRealizeBlockingFromIncorrectSideAbility` | `:956` |
| 20 | `AiAttackingShieldDefenseChance` | `AiAttackingShieldDefenseChance` | `:971` |
| 21 | `AiAttackingShieldDefenseTimer` | `AiAttackingShieldDefenseTimer` | `:986` |
| 22 | `AiCheckMovementIntervalFactor` | `AiCheckMovementIntervalFactor` | `:1001` |
| 23 | `AiMovementDelayFactor` | `AiMovementDelayFactor` | `:1016` |
| 24 | `AiParryDecisionChangeValue` | `AiParryDecisionChangeValue` | `:1031` |
| 25 | `AiDefendWithShieldDecisionChanceValue` | `AiDefendWithShieldDecisionChanceValue` | `:1046` |
| 26 | `AiMoveEnemySideTimeValue` | `AiMoveEnemySideTimeValue` | `:1061` |
| 27 | `AiMinimumDistanceToContinueFactor` | `AiMinimumDistanceToContinueFactor` | `:1076` |
| 28 | `AiChargeHorsebackTargetDistFactor` | `AiChargeHorsebackTargetDistFactor` | `:1091` |
| 29 | `AiRangerLeadErrorMin` | `AiRangerLeadErrorMin` | `:1106` |
| 30 | `AiRangerLeadErrorMax` | `AiRangerLeadErrorMax` | `:1121` |
| 31 | `AiRangerVerticalErrorMultiplier` | `AiRangerVerticalErrorMultiplier` | `:1136` |
| 32 | `AiRangerHorizontalErrorMultiplier` | `AiRangerHorizontalErrorMultiplier` | `:1151` |
| 33 | `AIAttackOnDecideChance` | `AIAttackOnDecideChance` | `:1166` |
| 34 | `AiRaiseShieldDelayTimeBase` | `AiRaiseShieldDelayTimeBase` | `:1181` |
| 35 | `AiUseShieldAgainstEnemyMissileProbability` | `AiUseShieldAgainstEnemyMissileProbability` | `:1196` |
| 36 | `AiSpeciesIndex`（**唯一的 `int` 属性**） | `AiSpeciesIndex` | `:1211` |
| 37 | `AiRandomizedDefendDirectionChance` | `AiRandomizedDefendDirectionChance` | `:1226` |
| 38 | `AiShooterError` | `AiShooterError` | `:1241` |
| 39 | `AiWeaponFavorMultiplierMelee` | `AiWeaponFavorMultiplierMelee` | `:1256` |
| 40 | `AiWeaponFavorMultiplierRanged` | `AiWeaponFavorMultiplierRanged` | `:1271` |
| 41 | `AiWeaponFavorMultiplierPolearm` | `AiWeaponFavorMultiplierPolearm` | `:1286` |
| 42 | `AISetNoAttackTimerAfterBeingHitAbility` | `AISetNoAttackTimerAfterBeingHitAbility` | `:1301` |
| 43 | `AISetNoAttackTimerAfterBeingParriedAbility` | `AISetNoAttackTimerAfterBeingParriedAbility` | `:1316` |
| 44 | `AISetNoDefendTimerAfterHittingAbility` | `AISetNoDefendTimerAfterHittingAbility` | `:1331` |
| 45 | `AISetNoDefendTimerAfterParryingAbility` | `AISetNoDefendTimerAfterParryingAbility` | `:1346` |
| 46 | `AIEstimateStunDurationPrecision` | `AIEstimateStunDurationPrecision` | `:1361` |
| 47 | `AIHoldingReadyMaxDuration` | `AIHoldingReadyMaxDuration` | `:1376` |
| 48 | `AIHoldingReadyVariationPercentage` | `AIHoldingReadyVariationPercentage` | `:1391` |

读这张表的两个实用要点：**槽位 42–45 是「惩罚冷却」**（被打 / 被招架后多久不进攻、不防御），**槽位 29–32 是「远程弹道误差」的上下界与两个轴向倍率**——这两组是调远程 AI 手感时最常动的四个值，而它们的量纲**不一致**（29/30 是绝对误差距离，31/32 是倍率）。槽位 39–41 三个武器偏好倍率初始值均为 `1f`。

### 没有具名包装的那一个

| 属性 | 值 | 说明 |
| --- | --- | --- |
| `DrivenProperty.UseRealisticBlocking` | 56（`DrivenProperty.cs:123`） | **无具名属性包装**。含义是「AI 是否用真实的格挡判定而非简化判定」。**要改它只能走 `SetStat` / `GetStat`。** |

**它有两条官方写入路径**，都不是具名属性：

```csharp
// TaleWorlds.MountAndBlade/AgentStatCalculateModel.cs:256
// 在 protected void SetAiRelatedProperties(...)（:201 起）的尾部：
agentDrivenProperties.SetStat(DrivenProperty.UseRealisticBlocking,
    (agent.Controller != AgentControllerType.Player) ? 1f : 0f);

// TaleWorlds.MountAndBlade/MultiplayerAgentStatCalculateModel.cs:63
// 联机模型按当前房间的选项覆盖同一条：
agentDrivenProperties.SetStat(DrivenProperty.UseRealisticBlocking,
    MultiplayerOptions.OptionType.UseRealisticBlocking.GetBoolValue(...) ? 1f : 0f);
```

也就是说：**战役模式由「这个 Agent 是不是玩家操控」决定，联机模式由房间选项决定**，后者优先于前者。你想在战役里强制开启，只改 `AgentStatCalculateModel` 那一行会在联机房间失效。

## 真实示例

覆写模型才是持久生效的正路（这是 [AgentStatCalculateModel](../AgentStatCalculateModel) 的 `abstract` 成员，签名照抄自 `AgentStatCalculateModel.cs:12` / `:20`）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyStatModel : MBGameModel<AgentStatCalculateModel>
{
    public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)
    {
        this.BaseModel.UpdateAgentStats(agent, agentDrivenProperties);
        // 在官方公式之后叠加一层
        agentDrivenProperties.MountSpeed *= 1.15f;
    }

    public override void InitializeAgentStats(
        Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)
    {
        this.BaseModel.InitializeAgentStats(agent, spawnEquipment, agentDrivenProperties, agentBuildData);
    }
}
```

访问没有具名包装的那个属性——这是 `GetStat` / `SetStat` 唯一的正当用途：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void ForceRealisticBlocking(Agent agent)
{
    AgentDrivenProperties props = agent.AgentDrivenProperties;
    // AgentDrivenProperties 在 Agent 上是 public 只读属性
    props.SetStat(DrivenProperty.UseRealisticBlocking, 1f);
}
```

读几个具名属性做 UI 显示：

```csharp
using TaleWorlds.MountAndBlade;

public static string Describe(Agent agent)
{
    AgentDrivenProperties props = agent.AgentDrivenProperties;
    // 直接点属性即可，不需要 GetStat
    return agent.Name + " enc=" + props.ArmorEncumbrance.ToString("F1")
        + " carry=" + props.WeaponsEncumbrance.ToString("F1")
        + " mount=" + props.MountSpeed.ToString("F1");
}
```

`GetAgentDrivenPropertyValue(DrivenProperty)` 是 [Agent](../../mission/Agent) 上的转发（声明在 `Agent.cs:3120`，函数体 `return this.AgentDrivenProperties.GetStat(type);` 在 `:3122`），它在「想读的属性**不**在 `AgentDrivenProperties` 上具名」时才方便：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static float ReadUseRealisticBlocking(Agent agent)
{
    // Agent.GetAgentDrivenPropertyValue(DrivenProperty) -> AgentDrivenProperties.GetStat(type)
    return agent.GetAgentDrivenPropertyValue(DrivenProperty.UseRealisticBlocking);
}
```

## 风险与边界

- **`DrivenProperty.Count = 93` 必然越界。** 数组长 93、有效下标 0..92。`GetStat(Count)` / `SetStat(Count, x)` 抛 `IndexOutOfRangeException`。任何 `for (int i = 0; i <= (int)DrivenProperty.Count; i++)` 的循环都是错的。
- **`DrivenProperty.None = -1` 同样越界**（负下标）。它是「无属性」标记，不是槽位。
- **`DrivenProperty.DrivenPropertiesCalculatedAtSpawnEnd = 61` 是 `WeaponsEncumbrance` 的别名。** 写这个别名等于写负重，而且不会报任何错。**别用别名成员做数组索引。**
- **`UseRealisticBlocking`（槽位 56）没有具名属性。** 必须用 `GetStat` / `SetStat` 或 `Agent.GetAgentDrivenPropertyValue(DrivenProperty)`。
- **初始值全是 0f，没有「未设置」标记。** Agent 建立属性之前（本类刚 `new` 出来时）93 格全是 0。`ArmorHead == 0` 既可能是「真的没护甲」也可能是「还没算过」。
- **你在这里的赋值会被官方公式覆盖。** `UpdateDrivenProperties` → `AgentStatCalculateModel.UpdateAgentStats` 每次都重算。要持久生效必须覆写模型，而不是在别处 `SetStat`。
- **`Values` 是 `internal`。** 你的 mod 程序集读不到它，所以拿不到底层数组；只能通过 `GetStat` 逐个读。
- **`_statValues` 是 `private readonly`。** 数组内容可改（`SetStat`），引用不可换。你无法换成一个更大的数组——所以**槽位数在编译期就定死了**。
- **`AiSpeciesIndex` 是 `int` 属性但底层是 `float`。** 每次读做 `MathF.Round`。所以 `int` 与 `float` 混用时会有取整误差；而且它不能存小数语义。
- **`GetStat` / `SetStat` 无范围检查。** 传一个 `(int)` 值超出 0..92 的枚举成员直接抛异常。这跟 [Agent](../../mission/Agent) 的 `GetAgentDrivenPropertyValue` 一样——它不做任何防护。
- **`internal` 入口你调不到。** `InitializeDrivenProperties` / `UpdateDrivenProperties` 是 `internal`，只有引擎程序集能调。mod 的入口是覆写 `AgentStatCalculateModel`。
- **两个属性的名字与它们索引的枚举成员不一致。** `WeaponMaxMovementAccuracyPenalty` 实际索引 `DrivenProperty.WeaponWorstMobileAccuracyPenalty`(69)，`WeaponMaxUnsteadyAccuracyPenalty` 实际索引 `DrivenProperty.WeaponWorstUnsteadyAccuracyPenalty`(70)。**按枚举名去搜会搜不到，按属性名去搜枚举也搜不到。**
- **`SetAiRelatedProperties` 里有一个被写了两遍的属性。** 官方源码 `AgentStatCalculateModel.cs:213` 与 `:249` 两次赋值 `agentDrivenProperties.AiWaitBeforeShootFactor`，值相同（`(agent.PropertyModifiers.resetAiWaitBeforeShootFactor ? 0f : (1f - 0.5f * num2))`）。**这是无害的重复，不是 bug**——但你在读源码时会看到两次，别以为其中一处有额外含义。
- **`AiShooterError`(38) 是常量。** 官方 `SetAiRelatedProperties` 直接写死 `0.008f`，不随 AI 等级变化——它是「远程 AI 散射误差」，硬编码意味着**所有难度的远程 AI 散射都完全一样**。想改只能覆写模型。
- **`AgentStatCalculateModel` 有一批断言方法带 `[Conditional("_RGL_KEEP_ASSERTS")]`。** 这类方法在发布构建里被**整条编译掉**，调用点连参数求值都不会发生。跨程序集调它们时不要依赖返回值做逻辑分支。

## 跨版本提示

`AgentDrivenProperties` 的 1436 行在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里的**数组长度与具名属性集合是本类最需要盯的两项**：

- **数组长度**：`new float[93]` 是硬编码字面量。若新版本给 [DrivenProperty](../../core-extra/DrivenProperty) 追加成员且同步调大这个数字，旧版 mod 硬编码的下标就会错位。**永远不要在 mod 里硬编码 93 或任何槽位号**。
- **具名属性集合**：`DrivenProperty` 在 1.3 → 1.5 之间持续追加成员（新的 AI 决策维度、护甲细分），所以 `AgentDrivenProperties` 的具名属性数**会增加**。新增属性不影响你的代码编译，但**新版本的 `DrivenProperty.Count` 会变大**——这正是最危险的地方：**任何依赖 `DrivenProperty.Count` 做边界判断的代码在跨版本时语义会变**。

安全写法有两条：用具名属性（`props.MountSpeed`），或用 `Enum.IsDefined` 之后再 `GetStat`。**不要用 `(int)DrivenProperty.Count` 之外的方式猜边界。**

另外，`AgentStatCalculateModel` 的**抽象成员数量在 1.5.x 明显增加**（联机、攻城专用模型带来的新钩子）。覆写它的项目在升级时必须补齐新抽象方法——这是本类升级风险的真正来源，而不在 `AgentDrivenProperties` 本身。

## 依赖关系

- 宿主：[Agent](../../mission/Agent) 的 `AgentDrivenProperties` 只读属性、`GetAgentDrivenPropertyValue(DrivenProperty)`（`Agent.cs:3121`）、`GetTotalEncumbrance()`（`:3103`）、`InitializeAgentProperties` / `UpdateAgentProperties` / `UpdateCustomDrivenProperties`
- 索引来源：[DrivenProperty](../../core-extra/DrivenProperty)（`TaleWorlds.Core`）：`None = -1`、93 个真实属性 0..92、`Count = 93`、`DrivenPropertiesCalculatedAtSpawnEnd = 61` 别名
- 数值生产：[AgentStatCalculateModel](../AgentStatCalculateModel) 的 `InitializeAgentStats` / `UpdateAgentStats`（均 abstract）；沙盒实现里有 `SetAiRelatedProperties` / `SetAllWeaponInaccuracy` / `SetWeaponSkillEffectsOnAgent` / `SetMountedPenaltiesOnAgent` 等 protected 辅助
- 写入路径：`InitializeDrivenProperties` / `UpdateDrivenProperties` 两个 `internal` 方法 → `MissionGameModels.Current.AgentStatCalculateModel` → 返回 `float[]` → `Agent.UpdateDrivenProperties(float[])` → native
- 消费方：`SandboxAgentApplyDamageModel` 读 `ThrowingWeaponDamageMultiplierBonus` / `MeleeWeaponDamageMultiplierBonus` / `DamageMultiplierBonus`；`SandboxStrikeMagnitudeModel` 读 `ArmorPenetrationMultiplierBow` / `ArmorPenetrationMultiplierCrossbow`
- 创建期数据：[AgentBuildData](../AgentBuildData) 作为 `InitializeAgentStats` 的第三个参数传入
- 桶首页：[mission-ext API 分区](../)