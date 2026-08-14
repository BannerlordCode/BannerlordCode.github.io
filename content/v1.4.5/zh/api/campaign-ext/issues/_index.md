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

## SandBox 模块 Issues（SandBox.Issues）

下列 7 组城镇 Issue 来自 `Modules.SandBox` / StoryMode，沿用与核心 Issue 同一家族契约：`XxxIssue` 描述问题与玩家选项，`XxxIssueBehavior` 负责资格判断与生成，`XxxIssueQuest` 承载任务逻辑，`XxxIssueTypeDefiner` 注册存档（Saveable）字段。它们是主线为新玩家设计的情境化城镇任务，解决过程通常会创建或完成一条 Quest。

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| SandBox.Issues | `FamilyFeudIssue` | 城镇中两个家族（clan）因世仇对立，玩家可调解以换取影响力与关系。 | Issue 展示与玩家接受 |
| SandBox.Issues | `FamilyFeudIssueBehavior` | 监听城镇每日事件，按条件在 notable 间生成家族世仇 Issue 并管理冷却。 | Campaign 每日 tick |
| SandBox.Issues | `FamilyFeudIssueMissionBehavior` | 家族世仇调解任务对应的 MissionBehavior：承载调解战斗/对话演出。 | 调解任务进行 |
| SandBox.Issues | `FamilyFeudIssueQuest` | 实现家族世仇调解任务的目标链与奖励结算。 | Quest 启动至完成 |
| SandBox.Issues | `FamilyFeudIssueTypeDefiner` | 注册 FamilyFeudIssue 系列类的存档（Saveable）字段。 | 模组加载/读档 |
| SandBox.Issues | `NotableWantsDaughterFoundIssue` | 城镇 notable 的女儿失踪或被绑，请求玩家寻回。 | Issue 展示与玩家接受 |
| SandBox.Issues | `NotableWantsDaughterFoundIssueBehavior` | 在 notable 满足条件下生成「寻回女儿」Issue 并管理触发。 | Issue 扫描与生成 |
| SandBox.Issues | `NotableWantsDaughterFoundIssueQuest` | 实现寻回女儿任务（涉潜入/营救流程）。 | Quest 启动至完成 |
| SandBox.Issues | `NotableWantsDaughterFoundIssueTypeDefiner` | 注册该 Issue 系列的存档字段。 | 模组加载/读档 |
| SandBox.Issues | `ProdigalSonIssue` | 富家子弟挥霍家产、惹是生非，notable 请求玩家管教或带回。 | Issue 展示与玩家接受 |
| SandBox.Issues | `ProdigalSonIssueBehavior` | 生成「浪子」Issue 并管理触发条件与冷却。 | Issue 扫描与生成 |
| SandBox.Issues | `ProdigalSonIssueQuest` | 实现浪子任务（教训或带回家族）。 | Quest 启动至完成 |
| SandBox.Issues | `ProdigalSonIssueTypeDefiner` | 注册该 Issue 系列的存档字段。 | 模组加载/读档 |
| SandBox.Issues | `RivalGangMovingInIssue` | 敌对帮派迁入城镇、威胁 notable 的生意，玩家可驱逐。 | Issue 展示与玩家接受 |
| SandBox.Issues | `RivalGangMovingInIssueBehavior` | 生成敌对帮派迁入 Issue 并管理触发。 | Issue 扫描与生成 |
| SandBox.Issues | `RivalGangMovingInIssueQuest` | 实现驱逐帮派任务（清剿或谈判）。 | Quest 启动至完成 |
| SandBox.Issues | `RivalGangMovingInIssueTypeDefiner` | 注册该 Issue 系列的存档字段。 | 模组加载/读档 |
| SandBox.Issues | `RuralNotableInnAndOutIssue` | 乡村 notable 的客栈经营纠纷（进出权与所有权归属）。 | Issue 展示与玩家接受 |
| SandBox.Issues | `RuralNotableInnAndOutIssueBehavior` | 生成客栈经营 Issue 并管理触发。 | Issue 扫描与生成 |
| SandBox.Issues | `RuralNotableInnAndOutIssueQuest` | 实现客栈任务（经营权或收益分配）。 | Quest 启动至完成 |
| SandBox.Issues | `RuralNotableInnAndOutIssueTypeDefiner` | 注册该 Issue 系列的存档字段。 | 模组加载/读档 |
| SandBox.Issues | `SnareTheWealthyIssue` | 富人被设局勒索或欺诈，玩家介入揭穿阴谋。 | Issue 展示与玩家接受 |
| SandBox.Issues | `SnareTheWealthyIssueBehavior` | 生成设局勒索 Issue 并管理触发。 | Issue 扫描与生成 |
| SandBox.Issues | `SnareTheWealthyIssueQuest` | 实现揭穿设局任务（调查或对质）。 | Quest 启动至完成 |
| SandBox.Issues | `SnareTheWealthyIssueTypeDefiner` | 注册该 Issue 系列的存档字段。 | 模组加载/读档 |
| SandBox.Issues | `SnareTheWealthyQuestChoice` | 设局任务中的选项数据（choice 分支与对应后果）。 | 任务选项呈现 |
| SandBox.Issues | `TheSpyPartyIssue` | 间谍聚会事件，情报类 Issue。 | Issue 展示与玩家接受 |
| SandBox.Issues | `TheSpyPartyIssueQuest` | 实现间谍聚会任务（潜入或获取情报）。 | Quest 启动至完成 |
| SandBox.Issues | `TheSpyPartyIssueQuestBehavior` | 间谍聚会任务的 CampaignBehavior：生成、推进与结算。 | Campaign 启动/每日 tick |
| SandBox.Issues | `TheSpyPartyIssueQuestTypeDefiner` | 注册该任务系列的存档字段。 | 模组加载/读档 |
| SandBox.Issues | `SuspectNpc` | 间谍聚会任务中嫌疑 NPC 的数据载体（身份与线索标记）。 | 任务数据装配 |
