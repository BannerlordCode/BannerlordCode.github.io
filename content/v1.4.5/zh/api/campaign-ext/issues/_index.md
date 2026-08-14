---
title: "Issues 家族"
description: "战役 Issue 的发现、解决选项、Behavior 所有权与 Quest 交接。"
---

# Issues 家族

**一句话职责：** Issue 是带有资格条件、玩家决策和解决路径的战役问题，解决过程可能创建或完成 Quest。

## 心智模型

### 阅读顺序

先读 [IssueBase](../IssueBase)，再看具体实现 [ArmyNeedsSuppliesIssue](../ArmyNeedsSuppliesIssue)。如果存在对应 Behavior 和 Quest，沿着同名组件继续读；Issue 本身是问题描述，不是调度器。

## 何时使用

需要资格判断和玩家解决的持久战役问题使用 Issue；一次性状态变更使用 Event 或 Action。不要每个 tick 新建 Issue，也不要从 UI 直接改 Issue 字段，生命周期由所属 Behavior 管理。

## 依赖关系

- 上游：Campaign Behaviors、贵族/据点状态与 `CampaignEvents`。
- 下游：Issue 菜单、[QuestBase](../QuestBase)、通知与存档。
- 同级：[Quests](../quests)、[Behaviors](../behaviors)。

## 最小真实入口

```csharp
IssueBase issue = Campaign.Current.IssueManager.GetIssueForHero(hero);
bool eligible = issue != null && issue.CanBeShown();
```

具体 Issue 由 `IssuesCampaignBehavior` 持有并按资格与冷却管理；不要把 Issue 当作普通 DTO，也不要在 UI 条件中直接写字段。

## 风险边界

资格判断应可在读档前后保持稳定且不产生副作用。通过 Issue 支持的 Action 或 Quest 交接解决问题，确保通知与清理链路完整。

## Issue 与 Behavior 条目

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.ComponentInterfaces | [IssueModel](../IssueModel) | 计算某类 Issue 的资格、冷却和显示优先级。 | Campaign Issue 扫描阶段 |
| TaleWorlds.CampaignSystem.GameComponents | [DefaultIssueModel](../DefaultIssueModel) | 提供 vanilla Issue 资格与刷新规则。 | 每日扫描和存档恢复 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [IssuesCampaignBehavior](../IssuesCampaignBehavior) | 持有活动 Issue，创建/销毁实例并接入事件。 | Campaign 启动、每日 tick、读档 |
| TaleWorlds.CampaignSystem.Issues | [ArmyNeedsSuppliesIssue](../ArmyNeedsSuppliesIssue) | 描述军队补给不足的问题并选择解决路径。 | Issue 展示与玩家接受 |
| TaleWorlds.CampaignSystem.Issues | [ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior) | 为补给 Issue 管理触发条件、冷却和 Quest 创建。 | Issue 扫描与解决后清理 |
| TaleWorlds.CampaignSystem.Issues | [ArtisanCantSellProductsAtAFairPriceIssue](../ArtisanCantSellProductsAtAFairPriceIssue) | 表示工匠低价销售问题及其玩家选项。 | 城镇 Issue 生命周期 |
| TaleWorlds.CampaignSystem.Issues | [ArtisanOverpricedGoodsIssue](../ArtisanOverpricedGoodsIssue) | 表示工匠货物定价异常并提供解决分支。 | 城镇 Issue 生命周期 |
| TaleWorlds.CampaignSystem.Issues | [BettingFraudIssue](../BettingFraudIssue) | 暴露竞技场投注欺诈问题并交给对应 Quest。 | 竞技场/对话触发 |
| TaleWorlds.CampaignSystem.Issues | [CaravanAmbushIssue](../CaravanAmbushIssue) | 将商队遇袭状态变成可接受的援护问题。 | 遭遇创建后、战斗前 |
| TaleWorlds.CampaignSystem.Issues | [EscortMerchantCaravanIssue](../EscortMerchantCaravanIssue) | 提供护送商队的资格、参与方和奖励入口。 | Issue 展示至 Quest 启动 |
| TaleWorlds.CampaignSystem.Issues | [ExtortionByDesertersIssue](../ExtortionByDesertersIssue) | 表示逃兵勒索并协调谈判或清剿后果。 | 村镇 Issue 扫描与解决 |
| TaleWorlds.CampaignSystem.Issues | [GangLeaderNeedsRecruitsIssue](../GangLeaderNeedsRecruitsIssue) | 表示帮派招募需求并生成招募 Quest。 | 城镇 Issue 展示 |
| TaleWorlds.CampaignSystem.Issues | [HeadmanNeedsGrainIssue](../HeadmanNeedsGrainIssue) | 表示村长缺粮问题并提供交付路线。 | 村庄每日扫描 |
| TaleWorlds.CampaignSystem.Issues | [LordNeedsGarrisonTroopsIssue](../LordNeedsGarrisonTroopsIssue) | 表示领主驻军缺口并绑定兵员交付。 | 领主 Issue 展示与完成 |
| TaleWorlds.CampaignSystem.Issues | [MerchantNeedsHelpWithOutlawsIssue](../MerchantNeedsHelpWithOutlawsIssue) | 表示商人遭盗匪威胁并转交清剿 Quest。 | 商队/城镇事件后 |
| TaleWorlds.CampaignSystem.Issues | [NearbyBanditBaseIssue](../NearbyBanditBaseIssue) | 暴露附近匪巢问题并提供侦察或攻击选择。 | 地图 Issue 扫描 |
| TaleWorlds.CampaignSystem.Issues | [SmugglersIssue](../SmugglersIssue) | 表示走私网络问题并将选择交给 Quest/Action。 | 城镇对话与解决 |
| TaleWorlds.CampaignSystem.Issues | [TheConquestOfSettlementIssue](../TheConquestOfSettlementIssue) | 将据点征服问题连接到围城与所有权结果。 | 围城状态与结算 |
| TaleWorlds.CampaignSystem.Issues | [VillageNeedsToolsIssue](../VillageNeedsToolsIssue) | 表示村庄工具短缺并定义交付目标。 | 村庄每日扫描 |
| TaleWorlds.CampaignSystem.Issues | [DefaultIssueEffects](../DefaultIssueEffects) | 集中提供 Issue 解决后的默认经济/关系效果。 | consequence 执行后 |

## 导航

- [上级：Campaign-Ext](..)
- [同级：Quests](../quests) · [Behaviors](../behaviors)
- [相关：CampaignEvents](../CampaignEvents)
