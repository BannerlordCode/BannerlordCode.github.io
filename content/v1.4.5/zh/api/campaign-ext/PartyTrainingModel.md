---
title: "PartyTrainingModel"
description: "计算部队日常训练、战斗经验和共享 XP 的可替换策略，不直接给兵员升级或写技能状态。"
---

# PartyTrainingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`  
**Base:** `MBGameModel<PartyTrainingModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTrainingModel.cs`

## 一句话职责

`PartyTrainingModel` 把部队领袖、兵种、战斗和 Perk 转换为可解释的部队 XP 结果；它决定“应获得多少训练经验”，不直接向 `TroopRoster` 添加 XP，也不执行升级。

## 心智模型

训练模型是 `MobileParty` 名册与技能/升级行为之间的计算层。默认实例由 [GameModels](../GameModels) 注册，`MobilePartyTrainingBehavior` 在每日队伍 tick 读取 `GetEffectiveDailyExperience`，再把结果乘以兵员数量后写入名册。地图战斗由 `MapEventParty` 读取 `CalculateXpGainFromBattles` 和 `GenerateSharedXp`，技能管理器则用 `GetXpReward` 计算击杀经验。

共享 XP 和每日训练不是同一个池：共享 XP 受到领袖 Perk、兵种是否骑乘/远程等因素影响，日常经验还会考虑队伍是否活动、海上、驻扎、军团和兵种等级。模型可以返回 `ExplainedNumber` 供调试，但所有持久化写入必须在 Behavior 或技能管理器的正确事件阶段完成。

## 何时使用，何时不要用

- 想修改训练速度、战斗 XP、共享 XP 分配或击杀奖励时，替换模型并在战役启动阶段注册。
- 想读取当前队伍训练预览时，从 `Campaign.Current.Models.PartyTrainingModel` 获取结果。
- 不要在模型方法里调用 `AddXpToTroop`、`AddSkillXp` 或升级 Action；同一个结果可能在每日 tick、战斗结算和 UI 预览中被读取多次。
- 不要把模型返回的每日经验直接当成每个兵员的最终 XP；原版会按 `TroopRosterElement.Number` 乘算并在正确 tick 写入名册。

## 依赖关系

#### 上游

- [Campaign](../../campaign/Campaign) 和 [GameModels](../GameModels) 持有注册后的训练策略。
- [MobileParty](../../campaign/MobileParty)、[PartyBase](../../campaign/PartyBase/) 和 `TroopRosterElement` 提供队伍、战斗和兵员上下文。
- `CharacterObject`、兵种 Tier、领袖技能和 Leadership/Steward 等 Perk 提供训练修正。

#### 下游

- `MobilePartyTrainingBehavior` 在 hourly/daily 事件读取每日训练结果，并把 XP 添加到 `TroopRoster`。
- `MapEventParty` 在战斗经验结算时读取 `CalculateXpGainFromBattles` 和 `GenerateSharedXp`。
- `DefaultSkillLevelingManager` 使用 `GetXpReward` 与升级回调分配英雄技能经验；兵员升级资格属于 [PartyTroopUpgradeModel](../PartyTroopUpgradeModel)。

## 成员与调用时机

| 成员 | 用途与时机 | 副作用边界 |
|---|---|---|
| `GenerateSharedXp(CharacterObject, int, MobileParty)` | 战斗中将可分享 XP 按领袖和兵种特征转换为共享增量。 | 返回增量，不写名册。 |
| `CalculateXpGainFromBattles(FlattenedTroopRosterElement, PartyBase)` | 地图战斗结束时，为指定扁平兵员结果加入战斗/Perk 修正。 | 不结算战斗、不直接给 XP。 |
| `GetXpReward(CharacterObject)` | 技能管理器根据被击杀兵种等级计算基础奖励。 | 只返回奖励，不授予经验。 |
| `GetEffectiveDailyExperience(MobileParty, TroopRosterElement)` | 每日队伍 tick 计算单个兵种的有效训练 XP，结合活动状态、兵种 Tier、Perk 与军团/驻扎条件。 | `ExplainedNumber` 只描述结果，写入由 Behavior 完成。 |

## 真实查询示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Roster;

MobileParty party = MobileParty.MainParty;
PartyTrainingModel training = Campaign.Current.Models.PartyTrainingModel;
TroopRosterElement troop = party.MemberRoster.GetElementCopyAtIndex(0);
ExplainedNumber dailyExperience = training.GetEffectiveDailyExperience(party, troop);
```

这段代码只预览原版每日训练公式。真正的 `AddXpToTroop` 由 `MobilePartyTrainingBehavior.OnDailyTickParty` 执行；如果自定义 Behavior 也写入 XP，应明确只订阅一个阶段，避免双倍训练。

## 风险与排错

1. 把 `GetEffectiveDailyExperience` 返回值当作每个兵员的总 XP 而跳过名册数量乘算，会让大队伍和小队伍获得相同训练量。
2. 在模型中写 `TroopRoster` 或触发升级会让每日 tick、战斗结算和 UI 查询产生重复写入，可能导致升级顺序和存档结果不一致。
3. 训练模型会区分海上、活动、军团领袖、玩家家族和兵种 Tier。粗暴地返回固定值会绕过 Perk 设计，也可能让不应训练的兵员获得 XP。
4. `CalculateXpGainFromBattles` 的输入来自地图事件的扁平名册；不要把它当作当前 `MobileParty.MemberRoster` 的实时索引，也不要在 MapEvent 结束后缓存其中的临时引用。
5. 替换模型只改变规则，不自动保存自定义训练状态；持久化计数器应由 [CampaignBehaviorBase](../CampaignBehaviorBase) 的存档契约管理。

## 导航

- [Parent: campaign-ext](../)
- [Models family guide](../models/)
- [Sibling: PartyTroopUpgradeModel](../PartyTroopUpgradeModel) · [PartyWageModel](../PartyWageModel)
- [Related: Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [MobileParty](../../campaign/MobileParty)
