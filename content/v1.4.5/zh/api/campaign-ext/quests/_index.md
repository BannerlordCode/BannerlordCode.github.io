---
title: "Quests 家族"
description: "Quest 状态机、Issue 交接、目标完成与可存档的战役生命周期。"
---

# Quests 家族

**一句话职责：** Quest 持有跨多个 tick 和存档的战役叙事状态，包括目标、参与者与完成结果。

## 心智模型

### 阅读顺序

从 [QuestBase](../QuestBase) 开始，再对比 [ArmyNeedsSuppliesIssueQuest](../ArmyNeedsSuppliesIssueQuest) 的 Issue 与 Behavior。按创建、目标更新、完成、清理的顺序追踪。

## 何时使用

需要持久、面向玩家的多步骤流程时使用 Quest；提示通知使用 CampaignEvent，原子世界变更使用 Action。不要从 UI 回调直接推进目标而不检查 Quest 所有权和生命周期。

## 依赖关系

- 上游：Issue 解决、Campaign Behaviors、Hero、Party 与 Settlement。
- 下游：Menus、Conversations、通知、奖励 Action 与存档。
- 同级：[Issues](../issues)、[Dialogs](../dialogs)、[Actions](../actions)。

## 最小真实入口

```csharp
QuestManager manager = Campaign.Current.QuestManager;
IEnumerable<QuestBase> active = manager.Quests;
CampaignEvents.HourlyTickEvent.AddNonSerializedListener(this, OnHourlyTick);
```

`QuestManager` 持有当前战役的 Quest 集合；具体 Issue Quest 由所属 Behavior 创建并在完成/失败时清理。不要在条件回调中伪造 `Advance()`，目标推进必须走该 Quest 源码声明的事件、任务或 Action。

## 风险边界

Quest 状态会进入存档。事件订阅只注册一次，清理时解除，并让完成逻辑幂等。参与者查找失败后仍保留悬空引用会污染存档。

## Quest 与任务条目

每一行都是源码中的公共入口；Purpose 说明它负责的业务状态，Timing 指通常创建、更新或完成的阶段。

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem | [QuestManager](../QuestManager) | 持有活动 Quest，协调注册、完成、失败与存档恢复。 | Campaign 建立后与读档阶段 |
| TaleWorlds.CampaignSystem | [QuestCompleteDetails](../QuestCompleteDetails) | 携带 Quest 完成时的奖励、声望和结果说明。 | Quest 完成结算 |
| TaleWorlds.CampaignSystem | [QuestTaskBase](../QuestTaskBase) | 为具体 Quest 表达可完成的目标和完成状态。 | Quest 初始化、事件更新、完成检查 |
| TaleWorlds.CampaignSystem.Issues | [ArmyNeedsSuppliesIssueQuest](../ArmyNeedsSuppliesIssueQuest) | 将军队补给 Issue 转换为可跟踪的补给任务链。 | Issue 接受后至补给交付 |
| TaleWorlds.CampaignSystem.Issues | [ArtisanCantSellProductsAtAFairPriceIssueQuest](../ArtisanCantSellProductsAtAFairPriceIssueQuest) | 跟踪工匠低价出售问题的调查与解决结果。 | Issue 解决流程 |
| TaleWorlds.CampaignSystem.Issues | [ArtisanOverpricedGoodsIssueQuest](../ArtisanOverpricedGoodsIssueQuest) | 记录工匠货物定价问题及玩家选择的后果。 | Issue 接受与完成 |
| TaleWorlds.CampaignSystem.Issues | [BettingFraudQuest](../BettingFraudQuest) | 管理竞技场投注欺诈的调查、对话和奖励。 | 对话开始至奖励结算 |
| TaleWorlds.CampaignSystem.Issues | [CapturedByBountyHuntersIssueQuest](../CapturedByBountyHuntersIssueQuest) | 追踪被赏金猎人捕获后的逃脱或交涉目标。 | 事件触发至释放/失败 |
| TaleWorlds.CampaignSystem.Issues | [CaravanAmbushIssueQuest](../CaravanAmbushIssueQuest) | 记录商队遭袭、援护队伍和战斗结果。 | 遭遇创建至 MapEvent 结束 |
| TaleWorlds.CampaignSystem.Issues | [EscortMerchantCaravanIssueQuest](../EscortMerchantCaravanIssueQuest) | 将护送商队目标绑定到移动、遭遇与交付任务。 | 接受后至商队抵达 |
| TaleWorlds.CampaignSystem.Issues | [ExtortionByDesertersIssueQuest](../ExtortionByDesertersIssueQuest) | 跟踪逃兵勒索事件的谈判或清剿路线。 | Issue 接受至 consequence |
| TaleWorlds.CampaignSystem.Issues | [GangLeaderNeedsRecruitsIssueQuest](../GangLeaderNeedsRecruitsIssueQuest) | 记录帮派招募目标与交付名册。 | 接受后至招募完成 |
| TaleWorlds.CampaignSystem.Issues | [GangLeaderNeedsSpecialWeaponsIssueQuest](../GangLeaderNeedsSpecialWeaponsIssueQuest) | 追踪特殊武器收集与交付结果。 | 物品收集与完成检查 |
| TaleWorlds.CampaignSystem.Issues | [HeadmanNeedsGrainIssueQuest](../HeadmanNeedsGrainIssueQuest) | 追踪村长粮食需求及交付奖励。 | 村庄 Issue 生命周期 |
| TaleWorlds.CampaignSystem.Issues | [LandLordCompanyOfTroubleIssueQuest](../LandLordCompanyOfTroubleIssueQuest) | 管理地主与麻烦团伙冲突的多步目标。 | 对话、战斗与结算 |
| TaleWorlds.CampaignSystem.Issues | [LordNeedsGarrisonTroopsIssueQuest](../LordNeedsGarrisonTroopsIssueQuest) | 记录领主补充驻军的兵员目标。 | 接受后至驻军交付 |
| TaleWorlds.CampaignSystem.Issues | [MerchantNeedsHelpWithOutlawsIssueQuest](../MerchantNeedsHelpWithOutlawsIssueQuest) | 跟踪商人清剿盗匪并返回结果。 | 任务队伍创建至战斗完成 |
| TaleWorlds.CampaignSystem.Issues | [RaidAnEnemyTerritoryQuest](../RaidAnEnemyTerritoryQuest) | 记录袭扰敌方领地的目标、参与者和奖励。 | MapEvent 前后与 Quest 完成 |
| TaleWorlds.CampaignSystem.Issues | [ScoutEnemyGarrisonsQuest](../ScoutEnemyGarrisonsQuest) | 保存侦察敌方驻军的进度和报告结果。 | 侦察事件回调 |
| TaleWorlds.CampaignSystem.Issues | [SmugglersIssueQuest](../SmugglersIssueQuest) | 管理走私者 Issue 的路线、选择与后果。 | Issue 接受至 consequence |
| TaleWorlds.CampaignSystem.Issues | [TheConquestOfSettlementIssueQuest](../TheConquestOfSettlementIssueQuest) | 追踪征服据点 Issue 的战斗与所有权结果。 | 围城/战斗结算后 |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [CaptureAndBringNpcTask](../CaptureAndBringNpcTask) | 将捕获指定 NPC 的目标封装为可保存任务。 | 目标捕获事件 |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [ChangeSettlementOwnerTask](../ChangeSettlementOwnerTask) | 在 Quest 中等待据点所有权变更并报告完成。 | ChangeOwnerOfSettlementAction 后 |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [DefeatPartyQuestTask](../DefeatPartyQuestTask) | 监听指定 Party 被击败的任务条件。 | MapEvent 结束检查 |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [RaidVillageQuestTask](../RaidVillageQuestTask) | 跟踪指定村庄遭袭并记录结果。 | Raid Action/MapEvent 结算 |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [TalkToNpcQuestTask](../TalkToNpcQuestTask) | 等待与指定 NPC 的有效对话完成。 | Conversation consequence |

## 导航

- [上级：Campaign-Ext](..)
- [同级：Issues](../issues) · [Dialogs](../dialogs)
- [相关：CampaignEvents](../CampaignEvents)
