---
title: "SiegeEventModel"
description: "Bannerlord 攻城子系统的只读计算契约：伤亡、攻城引擎的命中/伤害/耐久、建造进度与策略评分。可替换为自定义实现以改写攻城规则。"
---
# SiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel>`
**Base:** `MBGameModel<SiegeEventModel>`（位于 TaleWorlds.Core）
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SiegeEventModel.cs`

## 概述

`SiegeEventModel` 是攻城（siege）玩法的**纯计算契约**：它不保存攻城状态，只在引擎需要数值时回答“这次应该是多少”。它覆盖攻城全过程的关键算式——攻城引擎被摧毁/附带伤害造成的兵力损失、引擎的命中率与伤害、引擎耐久、每小时建造进度、攻城策略评分，以及地图上引擎图标的资源名。游戏自带的 [`DefaultSiegeEventModel`](../DefaultSiegeEventModel/) 实现了全部抽象成员；模组想改写攻城数值时，替换这个 Model 即可，而**不要**去直接修改部队或据点的字段。

## 心智模型

把 `SiegeEventModel` 想成一张**“攻城计算器”**而不是一座据点：

- 它是只读的：调用它的方法只是返回一个数或一个枚举，不会创建、移动或销毁任何战役对象，也没有需要你维护的内部状态。
- 每个战役只有一个有效实例，由 [`Campaign.Current.Models.SiegeEventModel`](../../campaign/Campaign/) 持有。战役未初始化时这个属性为 `null`，不能提前读。
- 真正的攻城状态在 [`SiegeEvent`](../SiegeEvent/) 与 [`BesiegerCamp`](../BesiegerCamp/) 上：`SiegeEvent` 记录哪座 [`Settlement`](../../campaign/Settlement/) 被围、攻方营地和双方参与的部队；`BesiegerCamp` 是攻方营地。Model 的方法通常以它们为参数，算出结果后交还调用方。
- 它的方法被引擎和 [`SiegeEventManager`](../SiegeEventManager/) / [`SiegeEventCampaignBehavior`] 在 tick、建造和轰炸时频繁调用。例如 [`SiegeEvent`](../SiegeEvent/) 在每帧用 `GetConstructionProgressPerHour` 推进引擎建造、用 `GetSiegeEngineHitChance` 决定炮弹是否命中。
- 想改规则就提供一个自己的子类（通常继承 [`DefaultSiegeEventModel`](../DefaultSiegeEventModel/) 只覆写需要的几个方法），在游戏初始化时注册进去；不要尝试在运行时给 `Campaign.Current.Models.SiegeEventModel` 赋值，也不要在 Model 方法内部去改传入的 `SiegeEvent` / [`MobileParty`](../../campaign/MobileParty/)。

## 如何获取

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

// 战役开始后，通过 Models 集合拿到当前生效的实例
SiegeEventModel siegeModel = Campaign.Current.Models.SiegeEventModel;
```

底层由 `GameModels`（继承 `GameModelsManager`）在战役启动时通过 `GetGameModel<SiegeEventModel>()` 解析出来；原版在 `SandBoxManager` 里用 `gameStarter.AddModel(new DefaultSiegeEventModel())` 注册默认实现。模组要替换时，同样在初始化阶段 `AddModel` 自己的子类即可，引擎会改用你注册的那一个。

## 何时用 / 何时不要用

**用它：**
- 你想读取或修改攻城相关的数值（伤亡倍率、引擎命中/伤害、建造速度、策略评分）。
- 你想整体改写攻城规则，例如让引擎更脆、附带伤害更高、某种策略更受 AI 青睐。

**不要用它（正确替代）：**
- 想“触发一次攻城”或“结束攻城”：那是 [`SiegeEventManager`](../SiegeEventManager/) 和 [`Settlement`](../../campaign/Settlement/) 的职责，调用对应的 Action / Behavior，而不是直接调 Model。
- 想在攻城过程中直接给某支部队减人：走正规的伤亡/俘虏 Action，不要因为读了 `GetCasualtyChance` 就自己改 `MobileParty` 的花名册——Model 只是“算概率”，执行由调用方负责。
- 想即时改变某个据点的攻城状态：改 [`Settlement`](../../campaign/Settlement/) / [`Town`](../../campaign/Town/) / `SiegeEvent` 上的数据，而不是改 Model 的返回值。

## 成员说明

下面按主题分组列出对模组有意义的公开成员。每个方法都是只读计算；`DefaultSiegeEventModel` 中的默认实现已考虑了工程/医术等特性（perk）与建筑加成。

### 伤亡与附带伤害

#### `public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)`
某台攻城引擎被摧毁时，该侧损失的兵力数。默认固定返回 `2`。引擎在战斗中损毁时由系统调用，用来决定守军/攻军折损。

#### `public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`
返回该攻城/守城部队的**伤亡几率乘子**（基准 `1.0`）。默认实现会叠加工程“营地建造”、医术“攻城军医”等 perk 影响；攻方守方含义不同，调用方把它当作概率系数使用。

#### `public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty)`
攻城方炮击造成的**附带（误伤）伤亡**人数，通常作用于守军/平民。默认基础为 `1`，若攻方拥有十字弩“恐怖”特性且随机命中则 `+1`。

### 攻城引擎命中、伤害与耐久

#### `public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`
某引擎轰击某目标（`Wall` / `RangedEngines` / `People`）的**命中率**（0~1）。默认取引擎自身的 `HitChance` 或 `AntiPersonnelHitChance`，再叠加城墙等级、总督与工程师特性、以及对方有效攻城主部队的特性修正。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Core;

SiegeEvent siegeEvent = settlement.SiegeEvent;
if (siegeEvent != null)
{
    float hitChance = Campaign.Current.Models.SiegeEventModel
        .GetSiegeEngineHitChance(DefaultSiegeEngineTypes.Onager, BattleSideEnum.Attacker,
                                 SiegeBombardTargets.Wall, settlement.Town);
}
```

#### `public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`
引擎对指定目标的伤害值，默认从 `siegeEngine.Damage` 起步，叠加“破城者”“巧匠”“战术·以牙还牙”等特性。

#### `public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`
引擎的耐久（生命值）。默认从 `siegeEngine.BaseHitPoints` 起步，再叠加总督与工程师特性。

#### `public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`
远程引擎（投石机/弩炮等）的**装填时间（分钟）**。默认用引擎的每日射速换算成分钟；拥有“发条”“建筑工程”等特性的有效主部队会缩短。

### 建造进度与有效攻城方

#### `public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`
该侧每小时能推进的引擎建造进度。综合了可用人力、工程技能、守方城镇建筑加成与多项 perk；攻方/守方公式不同。

#### `public abstract float GetAvailableManDayPower(ISiegeEventSide side)`
该侧可用于建造/维护攻城器械的**人力（人日能力）**，等于该侧健康成员数的平方根。建造速度直接依赖它。

#### `public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side)`
该侧的“有效攻城主部队”——攻方是 `BesiegerCamp.LeaderParty`，守方是参与守城、工程技能最高的那支部队。大量其他计算（伤害、耐久、建造、装填）都先取它来套用 perk，所以返回 `null` 时相关加成会被跳过。

### 攻城策略评分

#### `public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`
给定攻城策略的评分，供 AI 选择攻城战术（围困、强攻、断粮等）。默认对“保存实力”给极低分、`Custom` 给随机分；玩家亲自指挥且主攻方是玩家部队时给极高分。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Core;

float score = Campaign.Current.Models.SiegeEventModel
    .GetSiegeStrategyScore(siegeEvent, BattleSideEnum.Attacker, DefaultSiegeStrategies.PreserveStrength);
```

### 可用 / 预设攻城引擎

这组方法返回引擎类型枚举，决定某一方能造什么、开战时已摆好什么。

#### `public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`
攻方可建造的远程引擎（弩炮、投石机、配火油变体等），是否含火油型取决于该部队的工程特性。

#### `public abstract IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`
守方可布置的防御引擎（弩炮、抛石机及火油变体）。

#### `public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`
攻方可建造的冲车（默认仅 `Ram`）。

#### `public abstract IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`
攻方可建造的攻城塔（默认仅 `SiegeTower`）。

#### `public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`
围城开始时，该 [`Settlement`](../../campaign/Settlement/)（需为要塞）依据城镇建筑与总督特性**预先摆好**的防御引擎列表。

#### `public abstract IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp)`
攻方营地依据领袖部队特性预先拥有的攻击引擎（默认仅领袖有“城垛”特性时给一台弩炮）。

### 地图图标与动画资源名

这些方法返回字符串/索引，仅用于地图 UI 上引擎图标的 prefab、抛射物与动画名，一般不改战斗数值。

#### `public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side)`
地图图标 prefab 名（如 `trebuchet_a_mapicon`）；攻城塔还随城墙等级（`wallLevel`）区分高度。

#### `public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType)`
引擎抛射物的 prefab 名。

#### `public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`
地图装填动画名。

#### `public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side)`
地图开火动画名。

#### `public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side)`
抛射物挂点的骨骼索引（映射模型骨骼，默认实现按引擎类型返回 `2`/`7`/`4`/`20` 等）。

### 突围伏击

#### `public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`
守军出城突围/伏击时，应**优先挑选**的部队花名册（默认优先有坐骑的普通兵和全部英雄）。只在玩家正在围城（[`PlayerSiege`](../PlayerSiege/)）时调用。

## 风险

- **战役未初始化就读取**：`Campaign.Current.Models` 在战役真正启动前为 `null`，此时取 `SiegeEventModel` 会抛空引用。务必在 `Campaign.Current` 已就绪之后、或在 Behavior/Action 内部调用。
- **假设返回值非 `null`**：`GetEffectiveSiegePartyForSide` 在找不到合适部队时返回 `null`。很多派生计算会判空后跳过加成，但你自己调用时应先判空再使用，避免 `NullReferenceException`。
- **在 Model 里改状态**：Model 是纯函数式计算契约。若在重写的方法里修改传入的 `SiegeEvent`、`MobileParty` 或 [`Town`](../../campaign/Town/)，会破坏引擎的 recalc 时序并在存档/读档时出现不一致。
- **重算时机**：建造进度、装填时间在攻城进行中由 `SiegeEvent.Tick` 每帧按 `DeltaTime` 调用 `GetConstructionProgressPerHour` / `GetRangedSiegeEngineReloadTime` 推进。如果你替换的模型在不同 tick 返回跳变很大的值，会造成进度忽快忽慢甚至负数；注意给 `ExplainedNumber` 兜底（默认实现会钳到 `0`）。
- **版本差异**：抽象契约在 1.3.0 / 1.3.15 / 1.4.5 三版完全一致（成员签名无变化），可放心跨这三版使用；差异只存在于 `DefaultSiegeEventModel` 的具体数值与特性处理，子类若调用 `base.` 方法需注意。

## 最小真实示例

### 示例 1：读取一座正被围攻据点的攻城引擎装填时间

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Core;

Settlement settlement = Settlement.CurrentSettlement;
SiegeEvent siegeEvent = settlement?.SiegeEvent;
if (siegeEvent != null)
{
    SiegeEventModel model = Campaign.Current.Models.SiegeEventModel;

    // 攻方投石机装填所需分钟数
    int reloadMinutes = model.GetRangedSiegeEngineReloadTime(
        siegeEvent, BattleSideEnum.Attacker, DefaultSiegeEngineTypes.Trebuchet);

    // 该侧有效主力部队（工程技能最高者），可能为 null
    MobileParty attackerParty = model.GetEffectiveSiegePartyForSide(siegeEvent, BattleSideEnum.Attacker);
    if (attackerParty != null)
    {
        float damage = model.GetSiegeEngineDamage(
            siegeEvent, BattleSideEnum.Attacker, DefaultSiegeEngineTypes.Trebuchet, SiegeBombardTargets.Wall);
    }
}
```

### 示例 2：用一个自定义子类替换默认实现

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.Core;

// 在 SubModule 的 InitializeGameStarter 中注册，覆盖原版 DefaultSiegeEventModel
public override void InitializeGameStarter(Game game, CampaignGameStarter starter)
{
    starter.AddModel(new MySiegeEventModel());
}

public class MySiegeEventModel : DefaultSiegeEventModel
{
    // 只覆写你需要的计算；其余继承默认行为
    public override int GetSiegeEngineDestructionCasualties(
        SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)
    {
        // 原版固定返回 2，这里让被毁引擎折损更多兵力
        return 5;
    }
}
```

## 依赖图

- 上游（谁创建/持有它）：[Campaign](../../campaign/Campaign/) → `GameModels` / [`GameModels`](../GameModels/)（`GameModelsManager.GetGameModel<T>`），由 `SandBoxManager` 注册 [`DefaultSiegeEventModel`](../DefaultSiegeEventModel/)。
- 直接数据来源：[SiegeEvent](../SiegeEvent/)（被围据点、攻方营地、双方参与方）、[BesiegerCamp](../BesiegerCamp/)（攻方营地与领袖部队）、[Settlement](../../campaign/Settlement/) / [Town](../../campaign/Town/)（城墙等级、建筑、总督）。
- 调用方：[SiegeEventManager](../SiegeEventManager/) 与攻城行为在 tick/建造/轰炸时调用；战斗（Battle）结算命中与伤亡时读取其返回值。
- 参与对象：[MobileParty](../../campaign/MobileParty/)（攻守部队）、[PartyBase](../../campaign/PartyBase/)（传入的派对基）、[PlayerSiege](../PlayerSiege/)（仅玩家亲自围城时用到突围伏击列表）。
- 同级攻城模型：[SiegeAftermathModel](../SiegeAftermathModel/)（陷落后处置）、[SiegeStrategyActionModel](../SiegeStrategyActionModel/)（策略动作）、[SiegeLordsHallFightModel](../SiegeLordsHallFightModel/)（领主厅战斗）。

## 参见

- [DefaultSiegeEventModel](../DefaultSiegeEventModel/) — 默认实现，改写规则时通常继承它
- [SiegeEvent](../SiegeEvent/) — 攻城事件本身（被围据点、双方部队）
- [SiegeEventManager](../SiegeEventManager/) — 创建/推进/清理所有攻城事件
- [BesiegerCamp](../BesiegerCamp/) — 攻方营地
- [Settlement](../../campaign/Settlement/) · [Town](../../campaign/Town/) — 据点与城镇（城墙、建筑、总督）
- [MobileParty](../../campaign/MobileParty/) · [Campaign](../../campaign/Campaign/) — 攻守部队与世界入口
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 在 Behavior 里安全地读取 Model

---

↑ [父级：campaign-ext 索引](../)　·　↔ 同级：[SiegeAftermathModel](../SiegeAftermathModel/) · [SiegeStrategyActionModel](../SiegeStrategyActionModel/) · [SiegeLordsHallFightModel](../SiegeLordsHallFightModel/) · [SiegeEventManager](../SiegeEventManager/) · [BesiegerCamp](../BesiegerCamp/)
