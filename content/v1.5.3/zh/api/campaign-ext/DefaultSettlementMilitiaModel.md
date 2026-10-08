---
title: "DefaultSettlementMilitiaModel"
description: "官方默认的城镇/村庄民兵增长曲线：按固定顺序逐项累加炉灶、繁荣、退役老兵、市场武器、低忠诚、文化、perk、政策、议题，是聚落每日 tick 的民兵结算器。"
---

# DefaultSettlementMilitiaModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`

## 概述

`DefaultSettlementMilitiaModel` 是官方默认的民兵增长曲线实现，继承自抽象基类 `SettlementMilitiaModel`，被聚落每日 tick 调用，决定一座城镇或村庄每天净增/净减多少民兵。它把「民兵」拆成一条联动链：炉灶（Hearths）与繁荣（Prosperity）提供基础增量，退役老兵与市场武器提供额外加成，而低忠诚会反向扣减，文化、perk、政策、议题再依次修正最终结果。所有修正项都累加进同一个 `ExplainedNumber`，因此每一项都能在 UI 里单独显示为一条解释文本。 siege 之后还有专门的加速常量，让被围过的聚落更快恢复民兵。想调民兵节奏的 mod 作者，通常要么改这里的常量，要么整体替换这个 GameModel。

## 心智模型

核心入口是 `CalculateMilitiaChange`(25)，它只是转发到私有的 `CalculateMilitiaChangeInternal`(73)，后者按**固定顺序**往同一个 `ref ExplainedNumber` 加项，顺序即优先级：

1. **炉灶（From Hearths）** — 基础项，由聚落炉灶等级决定，恒为正向。
2. **繁荣（From Prosperity）** — 聚落繁荣度越高，民兵越多，正向。
3. **退役老兵（Retired）** — 聚落里退役士兵转化为民兵，正向。
4. **市场武器（Weapons From Market）** — 市场等级提供武器，正向。
5. **低忠诚（Low Loyalty）** — 忠诚低于阈值时**扣减**民兵，负向，是「为什么我的城镇民兵不涨」的常见元凶。
6. **文化（Culture）** — 聚落文化修正，可正可负。
7. **perk** — `GetSettlementMilitiaChangeDueToPerks`(149) 读取相关 perk 修正。
8. **政策** — `GetSettlementMilitiaChangeDueToPolicies`(167) 读取政策修正。
9. **议题** — `GetSettlementMilitiaChangeDueToIssues`(177) 读取议题修正。

每一项都通过 `BaseText`(183) 等 `TextObject` 生成解释文本，所以最终 `ExplainedNumber` 既能给出总数，也能在 UI 里逐项展示来源。理解这条链，就能回答「为什么我的城镇民兵不涨」——按顺序逐项排查即可。

## 怎么用

### 怎么拿到它

通过 Campaign 的 `GameModels` 聚合取到：`Campaign.Current.GameModels.GetModel<SettlementMilitiaModel>()` 返回当前注册的实现，默认就是本类的实例。不要自己 new，聚落 tick 用的是注册在 Campaign 上的那份。

### 典型用法

- **每日 tick 结算**：聚落每天调用 `CalculateMilitiaChange` 得到净增量，加到当前民兵数上。
- ** siege 后恢复**：`MilitiaToSpawnAfterSiege`(19) 在围城结束后一次性补一波民兵。
- **UI 解释面板**：`includeDescriptions = true` 时，`ExplainedNumber` 里每一项都带 `TextObject` 说明，可直接显示给玩家。
- **战斗生成**：`CalculateMilitiaSpawnRate`(66) 在战斗生成时给出近战/远程比例，与日常增长是两条独立路径。
- **老兵转化**：`CalculateVeteranMilitiaSpawnChance`(31) 计算退役士兵转民兵的概率。

### 最容易踩的坑

- **三个常量的真实取值**：`AutoSpawnMilitiaDayMultiplierAfterSiege = 25`(204)、`BaseFortificationMilitiaChange = 2`(207)、`BaseVillageMilitiaChange = 0.5f`(210)——别凭感觉写， siege 后加速是 25 倍，村庄基础只有 0.5。
- **`out` 参数语义**：`CalculateMilitiaSpawnRate`(66) 用两个 `out float` 分别返回近战率和远程率，调用前不要预设值，调用后两个都会被覆写。
- **`CalculateMilitiaSpawnRate` 只在战斗生成时用**：它不参与每日 tick 的日常增长，别把它当日常曲线读。
- **`ref ExplainedNumber` 是累加器**：内部方法都往同一个 `ref` 上传，顺序固定，不要试图并行调用。
- **低忠诚是负向项**：忠诚低于阈值会扣减民兵，且扣减幅度可能超过炉灶+繁荣的正向项，导致净增为负。

## 关键成员

- **MilitiaToSpawnAfterSiege**（`DefaultSettlementMilitiaModel.cs:19`）— 围城结束后一次性补多少民兵，被 siege 结算流程调用。
- **CalculateMilitiaChange**（`DefaultSettlementMilitiaModel.cs:25`）— 每日 tick 的公开入口，返回带解释的净增量。
- **CalculateVeteranMilitiaSpawnChance**（`DefaultSettlementMilitiaModel.cs:31`）— 退役士兵转民兵的概率，被聚落 tick 调用。
- **CalculateMilitiaSpawnRate**（`DefaultSettlementMilitiaModel.cs:66`）— 战斗生成时给出近战/远程比例，用两个 `out` 参数返回。
- **CalculateMilitiaChangeInternal**（`DefaultSettlementMilitiaModel.cs:73`）— 真正的累加实现，按固定顺序往 `ref ExplainedNumber` 加九项。
- **GetSettlementMilitiaChangeDueToPerks**（`DefaultSettlementMilitiaModel.cs:149`）— 读取 perk 对民兵的修正，被 Internal 调用。
- **GetSettlementMilitiaChangeDueToPolicies**（`DefaultSettlementMilitiaModel.cs:167`）— 读取政策对民兵的修正，被 Internal 调用。
- **GetSettlementMilitiaChangeDueToIssues**（`DefaultSettlementMilitiaModel.cs:177`）— 读取议题对民兵的修正，被 Internal 调用。
- **AutoSpawnMilitiaDayMultiplierAfterSiege**（`DefaultSettlementMilitiaModel.cs:204`）— 常量 25，siege 后自动恢复的天数倍率。
- **BaseFortificationMilitiaChange**（`DefaultSettlementMilitiaModel.cs:207`）— 常量 2，城镇基础民兵增量。
- **BaseVillageMilitiaChange**（`DefaultSettlementMilitiaModel.cs:210`）— 常量 0.5f，村庄基础民兵增量。
- **BaseText**（`DefaultSettlementMilitiaModel.cs:183`）— 基础项的 `TextObject` 解释模板，用于 UI 显示。

## 真实示例

```csharp
// 取到当前注册的民兵模型（默认实现即 DefaultSettlementMilitiaModel）
var militiaModel = Campaign.Current.GameModels.GetModel<SettlementMilitiaModel>();

// 每日 tick：计算聚落今日民兵净增量（带解释）
ExplainedNumber change = militiaModel.CalculateMilitiaChange(settlement, includeDescriptions: true);
settlement.Militia += (int)change.ResultNumber;

// 围城结束后一次性补民兵
int afterSiege = militiaModel.MilitiaToSpawnAfterSiege(town);
town.Militia += afterSiege;

// 战斗生成时读取近战/远程比例
militiaModel.CalculateMilitiaSpawnRate(settlement, out float meleeRate, out float rangedRate);
```

## 参见

- ↔ [SettlementMilitiaModel](../SettlementMilitiaModel) — 它实现的契约（已落盘，可直接链）
- ↔ [DefaultSettlementLoyaltyModel](../DefaultSettlementLoyaltyModel) — 忠诚度模型：低忠诚会压低民兵
- ↔ [PerkHelper](../../core-extra/PerkHelper) — `GetSettlementMilitiaChangeDueToPerks` 读的就是 perk
- ↔ [TownHelpers](../../core-extra/TownHelpers) — 城镇侧工具页

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
