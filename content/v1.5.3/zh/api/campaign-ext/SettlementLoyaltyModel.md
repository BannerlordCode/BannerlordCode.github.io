---
title: "SettlementLoyaltyModel"
description: "聚落忠诚度曲线的抽象契约：21 个阈值与效果参数加 3 个计算方法，决定城镇每日忠诚度变化、税收增减与叛乱判定。"
---

# SettlementLoyaltyModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`

## 概述

`SettlementLoyaltyModel` 是聚落忠诚度系统的抽象契约，位于 `ComponentInterfaces` 命名空间，继承 `MBGameModel<SettlementLoyaltyModel>`，由 `GameModels` 在战役初始化时通过 `GetGameModel<SettlementLoyaltyModel>()` 注册。它把「一条忠诚度曲线」拆成两部分：21 个抽象属性是参数表（安全、繁荣、税收、叛乱、饥荒、文化、名人关系等阈值与效果），3 个抽象方法是曲线本身（每日变化计算与两个税收因子计算）。城镇每天通过 `Town.LoyaltyChange` 与 `Town.LoyaltyChangeExplanation` 两个属性调用 `CalculateLoyaltyChange`；税收模型调用两个 gold 方法；繁荣度模型、民兵模型、叛乱行为与城镇管理界面读取叛乱阈值。Mod 开发者通过继承本类型并覆写属性来重新平衡忠诚度曲线。

## 心智模型

这个类型的结构要点是：**属性是参数，方法是曲线**。21 个抽象属性没有任何逻辑，它们只是把忠诚度曲线的所有可调旋钮暴露给覆写者——安全效果的门槛与上下限、繁荣度加减的触发阈值、税收加成的起点、叛乱与叛乱状态的触发线、饥荒惩罚的起始天数、文化差异的每日惩罚、名人关系的每日加成。真正每天被调用的入口只有 `CalculateLoyaltyChange` 一个：它接收一个 `Town` 和一个 `includeDescriptions` 开关，返回一个 `ExplainedNumber`，后者既携带数值结果也携带解释行文本。两个 `CalculateGold...` 方法不返回值，而是通过 `ref ExplainedNumber` 把因子累加进调用方传入的数值——这是「修改调用方数据」而非「返回结果」的典型用法。典型调用顺序是：战役每日结算 → `Town.LoyaltyChange` → `CalculateLoyaltyChange(town, false)` 取数值；城镇管理界面打开时 → `Town.LoyaltyChangeExplanation` → `CalculateLoyaltyChange(town, true)` 取解释明细。常见误用：试图 `new` 一个实例（它是抽象类，只能从 `Campaign.Current.Models` 拿）；把两个 gold 方法的 `ref` 参数当成返回值接收；在不需要解释行时传 `true` 造成不必要的文本构建开销；硬编码叛乱阈值而忽略它随战役选项变化。

## 怎么用

### 怎么拿到它

本类型是抽象类，不能直接实例化。运行时通过战役模型容器获取：

```csharp
SettlementLoyaltyModel model = Campaign.Current.Models.SettlementLoyaltyModel;
```

`GameModels` 在初始化时用 `GetGameModel<SettlementLoyaltyModel>()` 把当前注册的实现（默认是 `DefaultSettlementLoyaltyModel`）放进 `SettlementLoyaltyModel` 属性。Mod 若要替换实现，需用自己的子类替换该注册。

### 典型用法

1. **读每日忠诚度变化**：`Campaign.Current.Models.SettlementLoyaltyModel.CalculateLoyaltyChange(town, false).ResultNumber`——`Town.LoyaltyChange` 属性的实际实现。
2. **读解释明细**：`CalculateLoyaltyChange(town, true)` 返回的 `ExplainedNumber` 携带每个加项的文本行，城镇管理界面的忠诚度明细用它。
3. **判断叛乱风险**：把 `town.Loyalty` 与 `RebellionStartLoyaltyThreshold`、`RebelliousStateStartLoyaltyThreshold` 比较，UI 警告与叛乱行为都读这两个阈值。
4. **税收增减**：`DefaultSettlementTaxModel` 调用 `CalculateGoldGainDueToHighLoyalty` 与 `CalculateGoldCutDueToLowLoyalty`，把忠诚度映射成金币因子。
5. **繁荣度联动**：`DefaultSettlementProsperityModel` 读取 `ThresholdForProsperityBoost`、`ThresholdForProsperityPenalty`、`HighLoyaltyProsperityEffect`、`LowLoyaltyProsperityEffect`，把忠诚度转成繁荣度加减。
6. **重新平衡**：继承本类型，只覆写想改的属性（例如把 `MaximumLoyaltyInSettlement` 改成 120），其余保持默认。

### 最容易踩的坑

1. **抽象类不能 new**：必须走 `Campaign.Current.Models.SettlementLoyaltyModel`，直接 `new DefaultSettlementLoyaltyModel()` 会绕过模型注册。
2. **`ref ExplainedNumber` 是入参不是返回值**：两个 `CalculateGold...` 方法返回 `void`，结果写进你传进去的那个 `ExplainedNumber`；不传自己的实例就拿不到结果。
3. **`includeDescriptions` 有开销**：传 `true` 会构建解释行文本，每日结算路径（`Town.LoyaltyChange`）传的是 `false`。
4. **叛乱阈值随选项变化**：`RebellionStartLoyaltyThreshold` 在「高叛乱」选项关闭时返回 15、开启时返回 50；`RebelliousStateStartLoyaltyThreshold` 对应 25/60。写死数值会在玩家改选项后失准。
5. **属性全是 get-only**：21 个抽象属性都没有 setter，调参的唯一方式是覆写属性，不能在运行时赋值。
6. **阈值在 0–100 忠诚度标尺上**：默认实现里 `MaximumLoyaltyInSettlement` 是 100，所有阈值（75/50/25 等）都按这个标尺解释。

## 关键成员

- **SettlementLoyaltyChangeDueToSecurityThreshold**（`SettlementLoyaltyModel.cs:12`）— 安全效果的起效门槛：忠诚度变化计算中，城镇安全值高于它时按高安全曲线给加成，低于它时按低安全曲线给惩罚。
- **MaximumLoyaltyInSettlement**（`SettlementLoyaltyModel.cs:16`）— 聚落忠诚度的上限值，同时是高安全映射曲线的终点坐标。
- **LoyaltyDriftMedium**（`SettlementLoyaltyModel.cs:20`）— 忠诚度漂移的中点：每日变化里有一项把忠诚度往这个值拉，高于它则衰减、低于它则回升。
- **HighLoyaltyProsperityEffect**（`SettlementLoyaltyModel.cs:24`）— 高忠诚度对繁荣度的加成幅度，由繁荣度模型在忠诚度超过 `ThresholdForProsperityBoost` 且食物变化为正时读取。
- **LowLoyaltyProsperityEffect**（`SettlementLoyaltyModel.cs:28`）— 低忠诚度对繁荣度的惩罚幅度，由繁荣度模型在忠诚度低于等于 `ThresholdForProsperityPenalty` 时读取。
- **MilitiaBoostPercentage**（`SettlementLoyaltyModel.cs:32`）— 叛乱状态下民兵扩编的百分比上限，民兵模型把忠诚度 0 到叛乱阈值映射到 0 到该值。
- **HighSecurityLoyaltyEffect**（`SettlementLoyaltyModel.cs:36`）— 高安全曲线的最大忠诚度日增益。
- **LowSecurityLoyaltyEffect**（`SettlementLoyaltyModel.cs:40`）— 低安全曲线的最大忠诚度日惩罚（负值）。
- **SettlementOwnerDifferentCultureLoyaltyEffect**（`SettlementLoyaltyModel.cs:44`）— 聚落所有者氏族文化与聚落文化不同时的每日忠诚度惩罚。
- **ThresholdForTaxBoost**（`SettlementLoyaltyModel.cs:48`）— 税收加成的起点：忠诚度从它到 100 被线性映射为 0 到 +0.2 的金币因子。
- **RebellionStartLoyaltyThreshold**（`SettlementLoyaltyModel.cs:52`）— 叛乱开始的忠诚度触发线，低于等于它时叛乱行为开始累积；数值随「高叛乱」战役选项在 15 与 50 之间切换。
- **ThresholdForTaxCorruption**（`SettlementLoyaltyModel.cs:56`）— 税收腐败的起点：忠诚度低于它时开始按忠诚度线性扣减金币。
- **ThresholdForHigherTaxCorruption**（`SettlementLoyaltyModel.cs:60`）— 重度腐败线：忠诚度低于它时腐败扣减达到 -0.5 上限。
- **ThresholdForProsperityBoost**（`SettlementLoyaltyModel.cs:64`）— 繁荣度加成的忠诚度触发线，繁荣度模型在食物变化为正时读取它。
- **ThresholdForProsperityPenalty**（`SettlementLoyaltyModel.cs:68`）— 繁荣度惩罚的忠诚度触发线。
- **AdditionalStarvationPenaltyStartDay**（`SettlementLoyaltyModel.cs:72`）— 饥荒额外惩罚的起始天数：聚落断粮天数超过它之后，每日忠诚度惩罚加重。
- **AdditionalStarvationLoyaltyEffect**（`SettlementLoyaltyModel.cs:76`）— 饥荒超过起始天数后追加的每日忠诚度惩罚值。
- **RebelliousStateStartLoyaltyThreshold**（`SettlementLoyaltyModel.cs:80`）— 进入叛乱状态的忠诚度线，低于等于它时城镇被标记为叛乱中；数值随「高叛乱」选项在 25 与 60 之间切换。
- **LoyaltyBoostAfterRebellionStartValue**（`SettlementLoyaltyModel.cs:84`）— 叛乱爆发时的忠诚度初始回升值，叛乱行为用它把叛乱天数映射回忠诚度加成。
- **ThresholdForNotableRelationBonus**（`SettlementLoyaltyModel.cs:88`）— 名人关系每日加成的忠诚度触发线，关系行为在聚落忠诚度高于它时给领主与名人加关系。
- **DailyNotableRelationBonus**（`SettlementLoyaltyModel.cs:92`）— 名人关系加成每天提供的关系点数。
- **CalculateLoyaltyChange**（`SettlementLoyaltyModel.cs:95`）— 每日忠诚度变化的唯一入口：接收城镇与解释开关，返回带解释行的 `ExplainedNumber`；`Town.LoyaltyChange` 与 `Town.LoyaltyChangeExplanation` 都委托给它。
- **CalculateGoldGainDueToHighLoyalty**（`SettlementLoyaltyModel.cs:98`）— 把高忠诚度映射为金币加成因子并累加进调用方的 `ExplainedNumber`，由税收模型调用；注意是 `ref` 入参、无返回值。
- **CalculateGoldCutDueToLowLoyalty**（`SettlementLoyaltyModel.cs:101`）— 把低忠诚度映射为腐败扣减因子并累加进调用方的 `ExplainedNumber`，由税收模型调用；同样是 `ref` 入参。

## 真实示例

```csharp
// 读某城镇今日忠诚度变化（不带解释行，每日结算路径）
Town town = Settlement.CurrentSettlement.Town;
float dailyChange = Campaign.Current.Models.SettlementLoyaltyModel
    .CalculateLoyaltyChange(town, false).ResultNumber;

// 读解释明细：城镇管理界面「忠诚度变化」列表的数据源
ExplainedNumber explanation = Campaign.Current.Models.SettlementLoyaltyModel
    .CalculateLoyaltyChange(town, true);

// 叛乱风险判定：忠诚度低于叛乱触发线时 UI 显示警告
SettlementLoyaltyModel model = Campaign.Current.Models.SettlementLoyaltyModel;
bool rebellionRisk = town.Loyalty < model.RebellionStartLoyaltyThreshold;

// 高忠诚度税收加成：DefaultSettlementTaxModel 的调用方式
ExplainedNumber gold = new ExplainedNumber(0f, false, null);
model.CalculateGoldGainDueToHighLoyalty(town, ref gold);
```

## 参见

- ↔ [DefaultSettlementLoyaltyModel](../DefaultSettlementLoyaltyModel) — 官方默认实现：21 个参数的具体取值与 9 项累加顺序
- ↔ [DefaultSettlementProsperityModel](../DefaultSettlementProsperityModel) — 相邻的聚落曲线：本页的繁荣度阈值与效果属性由它读取
- ↔ [GameModel](../../core-extra/GameModel) — 模型体系抽象根：`MBGameModel<T>` 的注册方式与生命周期
- ↔ [TownHelpers](../../core-extra/TownHelpers) — 城镇侧工具页：忠诚度上游数据（食物、安全、总督）的读取方式

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
