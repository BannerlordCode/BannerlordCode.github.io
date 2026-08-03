---
title: "PartyHealingModel"
description: "把队伍、俘虏和英雄的医疗规则转换成可解释结果的可替换战役模型，不直接修改生命值或名册。"
---

# PartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**Base:** `MBGameModel<PartyHealingModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyHealingModel.cs`

## 一句话职责

`PartyHealingModel` 根据队伍类型、医疗角色、补给、据点和战斗上下文计算治疗、受伤生存与战后恢复结果；它只回答“应该恢复多少/活下来的概率是多少”，不直接写 `Hero.HitPoints`、名册或死亡状态。

## 心智模型

这是 `PartyBase` 状态和战役医疗行为之间的策略层。运行时实例由 [GameModels](../GameModels) 从已注册的模型中取得，`PartyBase.HealingRateForMemberRegulars`、英雄治疗属性和 [PartyHealCampaignBehavior](../PartyHealCampaignBehavior) 再读取它的结果。模型的 `ExplainedNumber` 可以携带饥饿、据点、技能和 Perk 的解释行，但这些解释不会改变调用时机。

普通成员和英雄使用不同的每日方法，俘虏也有独立参数；地图模拟伤亡则走 `GetSurvivalChance`。因此“医疗规则”不是一个全局加成：同一替换实现必须保持普通兵、英雄、俘虏、围城炮击和战后治疗之间的边界。真正应用治疗仍由 Behavior 调用 `Hero.Heal` 或名册逻辑完成，模型回调不能产生副作用。

## 何时使用，何时不要用

- 想改变治疗速度、生存概率、医疗技能经验或战斗结束后的英雄恢复量时，继承模型并在战役启动阶段注册替代实现。
- 只想查询当前数值时，从 `Campaign.Current.Models.PartyHealingModel` 读取，不要 `new DefaultPartyHealingModel()` 绕过注册表。
- 不要在 `GetDailyHealing*` 或 `GetSurvivalChance` 中改名册、扣粮、杀死角色或调用 Action；这些方法会在预览、模拟和每日 tick 中被重复调用。
- 不要把 `isPrisoner` 当成“目标队伍是囚犯队伍”的全局判断。调用方会针对同一个 `PartyBase` 分别查询成员和俘虏，返回值必须只描述对应类别。

## 依赖关系

#### 上游

- [Campaign](../../campaign/Campaign) 通过 `Campaign.Current.Models` 持有已经注册的医疗模型。
- [PartyBase](../../campaign/PartyBase) 提供成员、俘虏、饥饿、据点和地图事件上下文。
- [MobileParty](../../campaign/MobileParty) 提供医疗角色、移动/驻扎/海上状态、Perk 和士气。
- [Hero](../../campaign/Hero) 提供生命值、年龄、护甲和英雄医疗特征。

#### 下游

- [PartyHealCampaignBehavior](../PartyHealCampaignBehavior) 在 hourly、quarter-daily、settlement tick 和战斗结束时把结果落实到生命值。
- `MapEventSide` 用生存概率决定模拟伤亡；战斗结束后的英雄恢复会再次进入 [Hero](../../campaign/Hero) 的治疗路径。
- [PartyMoraleModel](../PartyMoraleModel) 和 `PartyWageModel` 是相邻但独立的策略：饥饿/欠薪会影响士气，但不应由医疗模型直接修改士气。
- [GameModels](../GameModels) 是模型注册和运行时解析边界。

## 成员与调用时机

| 成员 | 用途与时机 | 副作用边界 |
|---|---|---|
| `GetSurgeryChance(PartyBase)` | 地图伤亡处理前，根据有效 Surgeon 计算手术成功概率。 | 只返回概率，不执行手术。 |
| `GetSurvivalChance(PartyBase, CharacterObject, DamageTypes, bool, PartyBase)` | MapEvent 模拟受伤/死亡时，结合伤害类型、角色等级、护甲、医疗 Perk 和敌方 Surgeon 计算生存概率。 | 不得调用 `KillCharacterAction` 或修改伤口。 |
| `GetSkillXpFromHealingTroop(PartyBase)` | 由医疗技能升级管理器把治疗兵员数量换算成 Medicine 经验。 | 只返回单位经验系数。 |
| `GetDailyHealingForRegulars(PartyBase, bool, bool)` | 计算普通成员或普通俘虏的每日治疗量；`includeDescriptions` 只控制解释行。 | 不能直接移除伤兵或修改 `TroopRoster`。 |
| `GetDailyHealingHpForHeroes(PartyBase, bool, bool)` | 计算英雄或英雄俘虏每日恢复的生命值；`partyBase` 为 `null` 时用于无队伍英雄的基础恢复。 | 返回结果由 Behavior 按小时拆分，不要在模型中自行取整并写 HP。 |
| `GetHeroesEffectedHealingAmount(Hero, float)` | `Hero.Heal` 将输入治疗率转换为受 Perk 影响并带随机取整的实际量时使用。 | 只转换数量，不调用 `Heal`。 |
| `GetSiegeBombardmentHitSurgeryChance(PartyBase)` | 围城炮击选取伤亡时读取炮击相关的医疗 Perk 概率。 | 不负责选择被击中的成员。 |
| `GetBattleEndHealingAmount(PartyBase, Hero)` | `PartyHealCampaignBehavior` 在有胜者的地图战斗结束后计算英雄战后恢复。 | 返回解释结果，实际恢复由英雄治疗路径完成。 |

## 真实获取与查询示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

Campaign campaign = Campaign.Current;
PartyBase party = MobileParty.MainParty.Party;
PartyHealingModel healing = campaign.Models.PartyHealingModel;

ExplainedNumber regularRate = healing.GetDailyHealingForRegulars(
    party,
    isPrisoners: false,
    includeDescriptions: true);
ExplainedNumber heroRate = healing.GetDailyHealingHpForHeroes(
    party,
    isPrisoners: false,
    includeDescriptions: true);
```

这个查询与 `PartyBase.HealingRateForMemberRegularsExplained` 的真实调用链一致。若要改变规则，应在 `CampaignGameStarter` 阶段注册 `PartyHealingModel` 子类，让 [Campaign](../../campaign/Campaign) 在建立 `GameModels` 时解析它。

## 风险与排错

1. 在模型中调用 `Hero.Heal`、`KillCharacterAction` 或 `GiveGoldAction` 会把只读计算变成重复写入；地图模拟和 UI 预览都可能再次触发，造成重复治疗、重复事件或坏存档。
2. 返回负的普通成员治疗量是合法的“受伤/恶劣条件”语义，但调用方会据此扣生命值；不要把未初始化的 `ExplainedNumber` 或未界定的随机结果作为默认值。
3. 修改 `GetSurvivalChance` 时必须保留 `DamageTypes.Blunt`、难度设置、英雄年龄和 `CanDie` 的上游契约，否则会改变非致命钝击和玩家角色的死亡保护。
4. 读取 `Campaign.Current`、`MobileParty.MainParty` 或 Perk 前确认战役已加载；主菜单、存档加载早期和无队伍的调用点不能假设所有对象存在。
5. 模型替换不会自动保存内部状态；如果自定义规则有持久化数据，应放进独立的 [CampaignBehaviorBase](../CampaignBehaviorBase) 和存档契约，不要把可变字典塞进模型。

## 导航

- [Parent: campaign-ext](./)
- [Models family guide](../models)
- [Sibling: PartyWageModel](../PartyWageModel) · [PartyMoraleModel](../PartyMoraleModel)
- [Related: Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [PartyBase](../../campaign/PartyBase)
