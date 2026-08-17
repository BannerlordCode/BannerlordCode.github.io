---
title: "PartyTrainingModel"
description: "决定部队在战斗、升级和每日驻留时获得多少训练经验的规则模型，集中了所有与练兵相关的经验加成计算。"
---

# PartyTrainingModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTrainingModel.cs

## 概述

决定一支部队在战斗中、战斗外升级时以及每日驻留期间能够获得多少经验值的规则模型。它集中了所有与“练兵”相关的经验加成计算（统帅 perk、驻军总督、部队 tier 等），由战役在对应时机逐次调用求值，是纯规则层、不保存任何世界状态。

## 心智模型

SandBoxManager 在开局初始化时通过 `gameStarter.AddModel(new DefaultPartyTrainingModel())` 把唯一的具体实例注册进战役的 `GameModels` 容器；之后每次需要计算训练经验，战役代码都通过 `Campaign.Current.Models.PartyTrainingModel` 这一只读入口取出同一实例，而不是自行 new 一个。该实例存活于整场战役的生命周期中，并随 `GameModels` 在每次读档时被重新装载；因此任何把实例缓存到静态字段、或在战役重载后继续持有旧引用的做法，都会指向一个已被替换的失效对象。真正的调用方是战役行为（按每小时与每天 tick）以及地图战斗结算阶段，模型本身只做纯函数式的数值计算，从不修改部队或英雄本身。

## 何时使用 / 何时不要使用

- **使用它**：当你需要以只读方式查询某部队/某兵种当前应得多少训练经验，或要改动“练兵”节奏时，继承 `DefaultPartyTrainingModel` 覆盖其中某个抽象方法并重新注册一个新模型。
- **不要使用它**：不要用这个模型去“发放”经验——真正把经验写进部队的是 `MobileParty.Party.MemberRoster.AddXpToTroop` 之类的世界状态写入，属于行为层而非模型层。模型实例本身没有可变字段，也不应缓存或持有其引用。
- **替代方案**：若要读的是整支部队的工资/速度而非训练经验，查阅同级的 `PartyWageModel` / `PartySpeedModel`；若要触发升级后的技能成长，那是 `SkillLevelingManager` 的职责。

## 依赖图

- 上游被注册进 [`GameModels`](../GameModels)（属性 `PartyTrainingModel`），由 [`Campaign`](../Campaign) 在运行时暴露为 `Campaign.Current.Models`。
- 唯一具体实现 `DefaultPartyTrainingModel` 由 `SandBoxManager` 在开局通过 `CampaignGameStarter.AddModel` 注入。
- 调用方是 [`CampaignBehaviorBase`](../CampaignBehaviorBase) 派生类 `MobilePartyTrainingBehavior`（每小时/每天 tick），以及地图战斗结算。
- 计算输入依赖 [`MobileParty`](../MobileParty)、[`PartyBase`](../PartyBase)、[`TroopRoster`](../TroopRoster) 中的 `TroopRosterElement`、`FlattenedTroopRosterElement` 与 [`CharacterObject`](../CharacterObject)。
- 相关事件来自 [`CampaignEvents`](../CampaignEvents)（如 `DailyTickPartyEvent`、`HourlyTickPartyEvent`）。

## 风险

- **跨战役持有引用**：把 `Campaign.Current.Models.PartyTrainingModel` 存进 `static` 字段或在读档后继续使用旧引用，重载后模型实例会被 `GameModels` 整体替换，旧引用指向失效对象，读到的加成规则与当前战役不一致。
- **战役开始前访问**：在 `Campaign.Current` 或 `Campaign.Current.Models` 尚未建立时（如主菜单、模块初始化阶段）调用会直接空引用崩溃；模型只在战役运行中可用。
- **在非战役层调用**：模型依赖 `MobileParty`、`MapEvent` 等战役概念，在 `Mission`/战场表现层里调用会得到无意义的零值或抛异常。
- **误把它当状态容器**：它本身无状态，覆盖方法时必须保持纯计算；把“应得经验”误当成“已发放经验”会导致实际加成被重复或遗漏计算。

## 成员说明

### 战斗与升级相关

#### GenerateSharedXp
`int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

在战斗经验结算时，计算除基础值之外、因统帅系 perk（如 `Leadership.LeaderOfMasses`、`LeadByExample`、`MakeADifference`）额外分摊给该兵种的经验增量。输入 `xp` 为当前已累计值，返回值是叠加 perk 后的**差值**而非总量。在 `MapEventParty` 战斗结算阶段被调用，纯计算、无副作用。

#### CalculateXpGainFromBattles
`ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

对单个部队成员计算从一场战斗获得的经验，并叠加相关 perk（如 `Leadership.TrustedCommander`）。返回 `ExplainedNumber` 以保留各项加成明细，便于调试。由 `MapEventParty` 在战斗经验分配时调用，纯计算、不修改任何世界状态。

#### GetXpReward
`int GetXpReward(CharacterObject character)`

返回某兵种/英雄**每升一级**时应奖励多少经验（基础公式约为 `(Level + 6)² / 3`）。它表示的是“升级这一动作自身带来的额外经验”，由 `DefaultSkillLevelingManager` 在部队升级后调用以追加经验，模型本身不负责写入。

### 每日驻留训练

#### GetEffectiveDailyExperience
`ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)`

计算该兵种在所处部队中每天被动获得的经验，综合了部队是否为领主队、领袖身份、各种统帅/治理 perk、驻军总督、部队 tier 与士气/负重等因素。返回 `ExplainedNumber` 明细。`MobilePartyTrainingBehavior` 在 `DailyTickPartyEvent` 中按此结果乘以兵数量后调用 `AddXpToTroop` 写入经验；模型本身只负责求值。

## 示例

读取主玩家部队中每个兵种当天的有效训练经验，并按部队行为的方式把它写入经验（等价于 `MobilePartyTrainingBehavior` 的每日 tick 逻辑）：

```csharp
var model = Campaign.Current.Models.PartyTrainingModel;
foreach (TroopRosterElement troop in MobileParty.MainParty.MemberRoster.GetTroopRoster())
{
    ExplainedNumber dailyXp = model.GetEffectiveDailyExperience(MobileParty.MainParty, troop);
    MobileParty.MainParty.Party.MemberRoster.AddXpToTroop(
        troop.Character, MathF.Round(dailyXp.ResultNumber * (float)troop.Number));
}
```

查询一个兵种升一级时被奖励的经验值（与 `DefaultSkillLevelingManager` 升级流程一致）：

```csharp
var model = Campaign.Current.Models.PartyTrainingModel;
int reward = model.GetXpReward(CharacterObject.PlayerCharacter);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [TroopRoster](../TroopRoster) · [CharacterObject](../CharacterObject) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignEvents](../CampaignEvents) · [PartyWageModel](../PartyWageModel) · [PartySpeedModel](../PartySpeedModel)
