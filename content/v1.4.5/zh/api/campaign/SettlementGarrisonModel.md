---
title: "SettlementGarrisonModel"
description: "集中裁决驻军相关规则的计算模型：驻军每日自动募兵上限、驻军每日基础兵力增减、军队经过定居点时从/向驻军抽调或留下的兵力数，以及城墙每日最大修复量，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementGarrisonModel 解析。"
---

# SettlementGarrisonModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementGarrisonModel.cs

## 概述

该模型集中裁决“驻军”系统的核心规则：一个城镇/城堡每日最多能自动招募多少兵（`GetMaximumDailyAutoRecruitmentCount`）、每日驻军的基础兵力净增减是多少（`CalculateBaseGarrisonChange`）、一支军队经过定居点时应当从驻军里抽出多少兵作为增援（`FindNumberOfTroopsToTakeFromGarrison`）、又应当往驻军里留下多少兵（`FindNumberOfTroopsToLeaveToGarrison`），以及被围或受损城墙每日最多修复多少（`GetMaximumDailyRepairAmount`）。它只做纯计算，不持有任何会被写进存档的世界状态，真正把结果累加进驻军、城镇或城墙的是各 `CampaignBehavior` 与 `Town`/`Settlement` 对象。

## 心智模型

SettlementGarrisonModel 是一个纯计算的规则扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultSettlementGarrisonModel`）并缓存，运行时统一用 `Campaign.Current.Models.SettlementGarrisonModel` 取得；它不参与存档序列化，也不会在每个 tick 被重新构造。领地行为 `GarrisonRecruitmentCampaignBehavior` 在每日结算时调用 `CalculateBaseGarrisonChange` 与 `GetMaximumDailyAutoRecruitmentCount` 来算出驻军增减并把结果写入 `Town.GarrisonParty` 的兵力名册，而 `AiVisitSettlementBehavior` 在军队路过定居点时调用 `FindNumberOfTroopsToTakeFromGarrison` / `FindNumberOfTroopsToLeaveToGarrison` 来决定增援或驻防数量；`Town` 在刷新城墙修复时调用 `GetMaximumDailyRepairAmount`。要改规则就继承并注册一个替换实现，要读结果就走模型，绝不要把模型当成写世界的入口或直接改 `GarrisonParty` 名册与城墙血量——那些写入路径属于各 Behavior 与 `Town`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“驻军怎么增减 / 路过时抽留多少兵 / 城墙一天修多少”的规则时，读取 `Campaign.Current.Models.SettlementGarrisonModel` 的返回值，或提供一个新的派生类覆盖五个抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要直接给 `Town.GarrisonParty` 的兵力名册或城墙 `HitPoints` 之外的模型字段赋值来“让某个驻军多出兵/城墙快修”——模型是无状态纯函数，真正的状态在 [Town](../Town) / [Settlement](../Settlement) 上。要改变世界状态应走 [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) 等领地行为或对应的 `*Action`，而不是篡改模型。也不要在 AI 行军逻辑之外自行用 `FindNumberOfTroopsToTakeFromGarrison` / `FindNumberOfTroopsToLeaveToGarrison` 去改 `MobileParty` 名册，否则会与 AI 调度实际扣兵/补兵脱节。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementGarrisonModel>()` 解析并缓存实例。
- [IssueModel](../IssueModel) —— `CalculateBaseGarrisonChange` 内部调用 `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementGarrison, …)` 叠加议题对驻军的影响。
- [Town](../Town) / [Settlement](../Settlement) / [Village](../Village) —— 调用方与参数来源；`Town` 用 `GetMaximumDailyRepairAmount` 计算城墙单段修复量。

下游与协同系统（调用方）：

- [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) —— 每日 tick 调用 `GetMaximumDailyAutoRecruitmentCount` 决定自动募兵上限，调用 `CalculateBaseGarrisonChange` 计算驻军基础增减并写入名册。
- [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) —— 军队路过定居点时调用 `FindNumberOfTroopsToTakeFromGarrison` 抽取增援兵力、`FindNumberOfTroopsToLeaveToGarrison` 决定留下的兵力。
- [MobileParty](../MobileParty) —— 被抽兵/补兵的对象，作为参数传入两个 `Find*` 方法并被读取其兵力上限与名册。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述两个行为均继承自它，是实际修改驻军数量的调用者。
- [SettlementMilitiaModel](../SettlementMilitiaModel) —— 同属定居点规则模型簇，常一起被派生替换，分别裁决民兵与驻军。
- [ExplainedNumber](../ExplainedNumber) —— `CalculateBaseGarrisonChange` 的返回类型，用于携带带说明项的数值。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementGarrisonModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了增减/抽留公式，但真正把结果写入 `Town.GarrisonParty` 名册、城墙血量的仍是 `GarrisonRecruitmentCampaignBehavior` 与 [Town](../Town)。只替换模型、却让调用方按旧假设处理名单与血量，会出现界面预测数与实际不一致。
- **`GetMaximumDailyRepairAmount` 在围城/满血时返回 0**：默认实现在 `settlement.IsUnderSiege` 或所有墙段血量比例都 `>= 1f` 时直接返回 `0f`。若你派生时忘了这个条件，会算出在围城中仍可修复或墙已满仍刷修复量的错误结果。
- **`FindNumberOfTroopsToTakeFromGarrison` 强制保留底线兵**：默认实现会把可抽兵数截断到「驻军常规兵 - 25（城堡）/ -50（城镇）」，避免抽空驻军。覆盖时若去掉该底线，会导致路过军队把守军抽光，引发定居点失守。
- **`FindNumberOfTroopsToLeaveToGarrison` 仅在驻军低于理想值时生效**：当 `当前驻军强度 >= 理想强度` 时返回 `0`。派生实现若忽略该门槛，会让满员驻军仍被强行塞兵，挤占军队编制。

## 成员说明

### 每日增减与自动募兵

- **`GetMaximumDailyAutoRecruitmentCount(Town town)`**
  - 用途：返回该城镇/城堡驻军每日最多自动招募的兵力数。默认实现 `DefaultSettlementGarrisonModel` 返回常量 `1`。
  - 副作用：无，纯计算。
  - 调用时机：仅由 `GarrisonRecruitmentCampaignBehavior.TickAutoRecruitmentGarrisonChange` 在每日自动募兵时读取，作为可招募数量上限。

- **`CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)`**
  - 用途：返回该定居点驻军每日基础净增减的详细构成（`ExplainedNumber`）。默认实现：若定居点是城镇/城堡且所有者家族为叛军家族且不属于王国势力，则 `+2`（叛变加成）；再叠加 `IssueModel.GetIssueEffectsOfSettlement(DefaultIssueEffects.SettlementGarrison, …)` 的议题效果。注意这只是“基础”分量，完整驻军变化还由 `GarrisonRecruitmentCampaignBehavior` 追加自动募兵分量。
  - 副作用：无，纯计算；内部读取 [IssueModel](../IssueModel)。
  - 调用时机：`GarrisonRecruitmentCampaignBehavior.GetBaseGarrisonChangeExplainedNumber` 在每日结算与界面刷新时调用；传入 `includeDescriptions: true` 可得到带说明项的分解（见 `TownManagementVM` 与 `SettlementMenuOverlayVM` 的驻军变化显示）。

### 路过时的兵力调度

- **`FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float idealGarrisonStrengthPerWalledCenter = 0f)`**
  - 用途：返回 `mobileParty` 经过 `settlement` 时能从驻军里抽走多少常规兵作为增援。默认实现：取 `settlement.Town.GarrisonParty` 的当前强度 `num`，再算理想驻军强度 `num2`（受工资上限、或默认理想值 `FactionHelper.FindIdealGarrisonStrengthPerWalledCenter` 乘以家族经济与城镇/城堡倍数影响）；结合军队编制比、强度比与“领袖是否氏族首领”的系数得到候选值，最后截断到「驻军常规兵 - 25（城堡）/ -50（城镇）」的底线。无驻军则返回 `0`。
  - 副作用：无，纯计算；会读取 `Campaign.Current.AverageWage`、`FactionHelper` 等多个全局与阵营数据。
  - 调用时机：仅由 `AiVisitSettlementBehavior` 在军队到访定居点时调用，用于决定增援抽兵数。

- **`FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)`**
  - 用途：返回 `mobileParty` 经过时应当留多少兵进 `settlement` 的驻军。默认实现：当当前驻军强度 `< 理想强度` 时才计算，依据家族经济、城镇繁荣度、食物潜力（`FactionHelper` 三常量）算出理想值，再综合编制比、缺口比例、是否在军团中（军团里占比更小）、定居点是否无主/是否己方氏族等系数，最后 `RoundRandomized` 取整；否则返回 `0`（驻军已满则不填兵）。
  - 副作用：无，纯计算。
  - 调用时机：仅由 `AiVisitSettlementBehavior` 在军队到访定居点时调用，用于决定驻防留下数。

### 城墙修复

- **`GetMaximumDailyRepairAmount(Settlement settlement)`**
  - 用途：返回该定居点城墙每日最大修复总量。默认实现：若 `settlement.IsUnderSiege` 或所有墙段血量比例都已 `>= 1f`，返回 `0f`；否则基础值为 `MaxHitPointsOfOneWallSection * WallSectionCount * 0.04f`，若是堡垒再用 `Town.AddEffectOfBuildings(BuildingEffectEnum.WallRepairSpeed, …)` 叠加建筑加速效果。
  - 副作用：无，纯计算；内部用 `ExplainedNumber` 累积但最终只返回 `ResultNumber`。
  - 调用时机：`Town` 在刷新城墙修复速率时调用（约 `Town.cs:644`），除以单段最大血量得到每墙段的日修复量，最终写入城墙血量。

## 示例

查询某城镇的每日自动募兵上限与驻军基础增减：

```csharp
Town town = Settlement.CurrentSettlement.Town;
int autoRecruitCap = Campaign.Current.Models.SettlementGarrisonModel
    .GetMaximumDailyAutoRecruitmentCount(town);
ExplainedNumber baseChange = Campaign.Current.Models.SettlementGarrisonModel
    .CalculateBaseGarrisonChange(town.Settlement, includeDescriptions: false);
int dailyDelta = (int)baseChange.ResultNumber;
```

计算军队经过定居点时抽走的增援数与城墙日修复量：

```csharp
int reinforce = Campaign.Current.Models.SettlementGarrisonModel
    .FindNumberOfTroopsToTakeFromGarrison(mobileParty, settlement);
float repairAmount = Campaign.Current.Models.SettlementGarrisonModel
    .GetMaximumDailyRepairAmount(settlement);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) · [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) · [Town](../Town) · [Settlement](../Settlement) · [Village](../Village) · [MobileParty](../MobileParty) · [IssueModel](../IssueModel) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [ExplainedNumber](../ExplainedNumber) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [DefaultSettlementGarrisonModel](../DefaultSettlementGarrisonModel)
