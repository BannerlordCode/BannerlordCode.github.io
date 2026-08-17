---
title: "SettlementProsperityModel"
description: "计算城镇/城堡每日繁荣度（Prosperity）净变化与村庄炉灶（Hearth）净变化的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementProsperityModel 解析，被 Town / Village 的每日结算属性与城镇管理界面调用。"
---

# SettlementProsperityModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementProsperityModel.cs

## 概述

该模型集中裁决每个定居点每日的“繁荣度/炉灶”增减：对城镇与城堡，`CalculateProsperityChange` 综合饥荒、住房成本、剩余粮食、市场售卖、建筑与专长、忠诚度门槛、总督特权以及王国政策给出繁荣度净变化；对村庄，`CalculateHearthChange` 依据村庄状态、附庸城镇专长、文化特性与政策给出炉灶净变化。它只做纯计算，真正的繁荣度/炉灶数值由 `Town`、`Village` 与领地行为读写。

## 心智模型

SettlementProsperityModel 是一个纯计算的规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultSettlementProsperityModel`）并持有，运行时统一用 `Campaign.Current.Models.SettlementProsperityModel` 取得，它既不参与存档序列化，也不会在每个 tick 被重新构造。每日结算时，`Town.cs` 的 `ProsperityChange` / `ProsperityChangeExplanation` 属性与 `Village.cs` 的 `HearthChange` / `HearthChangeExplanation` 属性直接调用这两个方法读取净变化，城镇管理界面 `TownManagementVM` 也用 `CalculateProsperityChange` 预测次日繁荣；其内部实现又反向依赖 `Campaign.Current.Models.SettlementLoyaltyModel`（忠诚度门槛）与 `Campaign.Current.Models.IssueModel`（议题效果）。要改规则就继承并注册一个替换实现，要读结果就走模型，绝不要直接给 `Town.Prosperity` 或 `Village.Hearth` 赋值来“灌水”——模型是无状态纯函数，真正的世界状态写入发生在定居点对象与领地行为（`ClanVariables`/每日结算）里。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“繁荣度/炉灶如何增长”的规则时，读取 `Campaign.Current.Models.SettlementProsperityModel` 的返回值，或提供一个新的派生类覆盖两个抽象方法并通过子模块注册替换默认实现。
- **不要使用**：不要直接给 `Town.Prosperity` 或 `Village.Hearth` 之外的模型字段赋值来操纵增长——模型是无状态的纯函数，真正的状态在 [Town](../Town) 与 [Village](../Village) 上。要改变世界状态应走领地行为或对应的 `*Action`，而不是篡改模型；也不要在 `Mission` 或战场逻辑里取 `Campaign.Current.Models`，那是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementProsperityModel>()` 解析并缓存实例。
- [SettlementLoyaltyModel](../SettlementLoyaltyModel) —— `DefaultSettlementProsperityModel.CalculateProsperityChangeInternal` 读取其 `ThresholdForProsperityBoost`、`HighLoyaltyProsperityEffect`、`ThresholdForProsperityPenalty`、`LowLoyaltyProsperityEffect`。
- [IssueModel](../IssueModel) —— 默认实现两次调用 `GetIssueEffectsOfSettlement` 累加 `DefaultIssueEffects.SettlementProsperity` 与 `DefaultIssueEffects.VillageHearth`。

下游与协同系统（调用方）：

- [Town](../Town) —— `Town.cs` 第 130、132 行的 `ProsperityChange` / `ProsperityChangeExplanation` 属性直接调用 `CalculateProsperityChange(this[, includeDescriptions: true])`。
- [Village](../Village) —— `Village.cs` 第 134、142 行的 `HearthChange` / `HearthChangeExplanation` 属性直接调用 `CalculateHearthChange(this[, includeDescriptions: true])`。
- [Settlement](../Settlement) —— 城镇与村庄的宿主对象，繁荣度/炉灶最终写回其下的 `Town` / `Village`。
- [ExplainedNumber](../ExplainedNumber) —— 两个抽象方法的返回类型，用于携带带说明项的数值分解。
- [SettlementSecurityModel](../SettlementSecurityModel) / [SettlementMilitiaModel](../SettlementMilitiaModel) —— 同属定居点规则模型簇，常一起被派生替换。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementProsperityModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了增长公式，但真正累加繁荣度/炉灶的是 `Town` / `Village` 的每日结算上下文。只替换模型、却让调用方按旧假设处理 `Town.Prosperity` / `Village.Hearth`，会出现界面预测与真实数值不一致。
- **依赖其它模型的状态**：默认实现内部读取 `SettlementLoyaltyModel` 的阈值与 `IssueModel` 的议题效果。若你替换了这些模型，繁荣度计算会随之联动变化；若替换本模型时忽略这些上游依赖，容易算错“高忠诚加成”或遗漏议题贡献。

## 成员说明

### 城镇繁荣度计算

- **`CalculateProsperityChange(Town fortification, bool includeDescriptions = false)`**
  - 用途：返回该城镇/城堡每日繁荣度净变化（`ExplainedNumber`）。默认实现 `DefaultSettlementProsperityModel` 综合：① 若 `Owner.IsStarving`，按粮食缺口的 `0.5` 倍惩罚（叠加 `HelpingHands` 专长减免）；② 城镇繁荣度分段——低于 250/500/750/1000/1250/1500 分别给 +6…+1 的“住房成本”正加成，超过 6000/9000/12000/15000/18000/21000 分别给 -1…-6 的递减惩罚；③ 超出粮仓上限的剩余粮食按 `×0.1` 加成；④ 售卖带 `BonusToProsperity` 属性的商品累计按 `×0.1` 加成；⑤ `PristineStreets` 专长、`Apprenticeship` 工程专长因子、建筑 `Prosperity` 效果、`CleanInfrastructure` 专长；⑥ 忠诚度高于 `ThresholdForProsperityBoost` 且粮食为正时给 `HighLoyaltyProsperityEffect` 正效果，低于 `ThresholdForProsperityPenalty` 时给 `LowLoyaltyProsperityEffect` 负效果；⑦ 总督 `TrickleDown` 专长；⑧ 王国政策 `RoadTolls`(-0.2)、`ImperialTowns`(+1)、`CrownDuty`(-1)、`WarTax`(-1)；⑨ 议题 `SettlementProsperity` 效果。
  - 副作用：无，纯计算；会反向读取 [SettlementLoyaltyModel](../SettlementLoyaltyModel) 与 [IssueModel](../IssueModel)。
  - 调用时机：`Town.ProsperityChange` / `Town.ProsperityChangeExplanation` 属性在每日结算与界面刷新时调用；`TownManagementVM` 在城镇管理面板预测次日繁荣时调用；传入 `includeDescriptions: true` 可得到带说明项的分解。

### 村庄炉灶计算

- **`CalculateHearthChange(Village village, bool includeDescriptions = false)`**
  - 用途：返回该村庄每日炉灶（Hearth）净变化（`ExplainedNumber`）。默认实现 `DefaultSettlementProsperityModel` 综合：① 村庄状态 `Normal` 时按炉灶数分段基础增长（`<300:+4`、`<600:+1.2`、否则 `+0.2`）；② 状态 `Looted` 时 `-1`（Raided）；③ 王国政策 `GrazingRights` 时 `-0.25`；④ 附庸城镇的 `BushDoctor`/`Energetic`/`AidCorps` 专长加成，以及城镇建筑 `VillageHeartsPerDay` 效果；⑤ 若领主文化具备 `EmpireVillageHearthFeat` 且当前结果非负，加权加成；⑥ 议题 `VillageHearth` 效果。
  - 副作用：无，纯计算；会读取附庸城镇的 `Town` 与 [IssueModel](../IssueModel)。
  - 调用时机：`Village.HearthChange` / `Village.HearthChangeExplanation` 属性在每日结算与界面刷新时调用；传入 `includeDescriptions: true` 可得到带说明项的分解。

## 示例

读取某城镇的每日繁荣度净变化：

```csharp
Town town = Settlement.CurrentSettlement.Town;
ExplainedNumber prosperityChange = Campaign.Current.Models.SettlementProsperityModel
    .CalculateProsperityChange(town, includeDescriptions: false);
float dailyProsperityDelta = prosperityChange.ResultNumber;
```

读取某村庄的每日炉灶净变化（带说明项分解）：

```csharp
Village village = Settlement.CurrentSettlement.Village;
ExplainedNumber hearthChange = Campaign.Current.Models.SettlementProsperityModel
    .CalculateHearthChange(village, includeDescriptions: true);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Town](../Town) · [Village](../Village) · [Settlement](../Settlement) · [ExplainedNumber](../ExplainedNumber) · [SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementSecurityModel](../SettlementSecurityModel) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [IssueModel](../IssueModel) · [DefaultSettlementProsperityModel](../DefaultSettlementProsperityModel)
