---
title: "DefaultPartyTrainingModel"
description: "默认部队经验模型，计算升级所需经验曲线与每日训练、战斗经验加成。"
---
# DefaultPartyTrainingModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPartyTrainingModel : PartyTrainingModel`
**基类：** `PartyTrainingModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs`（声明见第 13 行）

## 概述
DefaultPartyTrainingModel 是 PartyTrainingModel 的默认实现，负责计算部队在行军、驻防、战斗等场景下获得的经验值（XP）。它通过 GetXpReward 定义升级所需经验曲线，通过 GetEffectiveDailyExperience 汇总每日训练经验（含领袖、技能、士气等加成），并通过 GenerateSharedXp 和 CalculateXpGainFromBattles 处理战斗经验的分配与加成。

## 心智模型
把这个类想成"经验值会计"：它不存储任何状态，所有方法都是纯计算——输入部队/角色/政党，输出经验值或带解释的经验值（ExplainedNumber）。GetEffectiveDailyExperience 是核心，它像一张加成清单，逐条检查领袖身份、技能（Perk）、士气、负重、文化等条件，把每项加成累加进同一个 ExplainedNumber。改这个类就是改游戏的经验经济：升级快慢、训练效率、战斗收益都由它决定。

## 怎么用
替换方式：实现自己的 PartyTrainingModel 子类，重写 GetXpReward / GetEffectiveDailyExperience / GenerateSharedXp / CalculateXpGainFromBattles，然后在 CampaignBehavior 或 GameModels 中注册替换默认模型。

坑：
1. GetEffectiveDailyExperience 的加成是累加的——如果你重写时只 return 自己的值而不调用 base 或漏掉某条加成，会导致训练经验异常偏低。参考 DefaultPartyTrainingModel.cs:26 的领袖条件判断。
2. GetPerkExperiencesForTroops 是 private 的，它把 Perk 映射到具体数值（PrimaryBonus 或 SecondaryBonus）。重写时要么复制这个映射逻辑，要么直接读 perk.PrimaryBonus/SecondaryBonus。参考 DefaultPartyTrainingModel.cs:108。
3. GenerateSharedXp 返回的是"额外加成"而非总经验——它用 `explainedNumber.ResultNumber - xp` 算出差值。如果你重写时直接返回总经验，会导致经验翻倍。参考 DefaultPartyTrainingModel.cs:137。
4. 海上经验被大量排除——很多加成条件都带 `!mobileParty.IsCurrentlyAtSea`。如果你希望海上也能训练，需要显式去掉这些条件。参考 DefaultPartyTrainingModel.cs:37。

## 关键成员
| 成员 | 用途 |
|------|------|
| `GetXpReward(CharacterObject)` | 计算角色升级所需经验，公式为 (Level+6)²/3。DefaultPartyTrainingModel.cs:16 |
| `GetEffectiveDailyExperience(MobileParty, TroopRosterElement)` | 计算部队每日训练经验，汇总领袖、技能、士气、负重、文化等全部加成。DefaultPartyTrainingModel.cs:23 |
| `GetPerkExperiencesForTroops(PerkObject)` | private：把 Perk 映射到具体经验数值，按技能类型取 PrimaryBonus 或 SecondaryBonus。DefaultPartyTrainingModel.cs:108 |
| `GenerateSharedXp(CharacterObject, int, MobileParty)` | 计算战斗中共享经验的额外加成（返回差值而非总值）。DefaultPartyTrainingModel.cs:122 |
| `CalculateXpGainFromBattles(FlattenedTroopRosterElement, PartyBase)` | 计算战斗经验的基础值并附加指挥官技能加成。DefaultPartyTrainingModel.cs:141 |

## 真实示例
```csharp
// 获取当前经验模型并计算每日训练经验
PartyTrainingModel model = Campaign.Current.Models.PartyTrainingModel;
ExplainedNumber dailyXp = model.GetEffectiveDailyExperience(party, troopElement);
float totalXp = dailyXp.ResultNumber;

// 计算升级所需经验
int xpToNextLevel = model.GetXpReward(character);

// 计算战斗共享经验加成
int sharedBonus = model.GenerateSharedXp(troop, baseXp, party);
```

## 参见
- [PartyTrainingModel 基类](../PartyTrainingModel)
- [MobileParty 政党](../../campaign/MobileParty)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
