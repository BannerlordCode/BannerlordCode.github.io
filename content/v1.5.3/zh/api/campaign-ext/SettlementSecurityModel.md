---
title: "SettlementSecurityModel"
description: "这个抽象契约规定城镇治安的上限、漂移与全部阈值/税率参数，mod 靠替换它改治安曲线"
---

# SettlementSecurityModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`

## 概述

这个抽象契约在游戏里规定城镇治安的上限、每日漂移与全部阈值/税率参数，被城镇每日 tick 与税收模型调用；它与 `SettlementLoyaltyModel`（忠诚度）、`SettlementProsperityModel`（繁荣度）是相邻的三条聚落曲线。治安不是孤立数值：它通过阈值直接决定税收的加成与腐蚀，又通过要人关系间接影响忠诚，而忠诚反过来也会改变治安的走向。mod 作者替换这个模型，就等于同时改写了治安曲线、税收奖惩与要人关系奖惩三套参数，是调整聚落经济手感最集中的入口。

## 心智模型

这 18 个抽象属性其实是「一条治安曲线 + 一组阈值」的参数表，`CalculateSecurityChange`(78) 才是唯一每日入口；治安影响忠诚、忠诚影响税收，所以改阈值会连锁改税收。常见误用：以为改属性就能立刻改治安（其实要等每日 tick 重算）。把这条曲线想象成一根弹簧：`SecurityDriftMedium` 是弹簧的拉力，`MaximumSecurityInSettlement` 是弹簧的天花板，而匪窝清除、商队被劫、匪帮被剿这些地图事件是外力，把弹簧拉离平衡点。阈值（32/36/40/55/59）不是治安本身，而是税收与要人关系两条下游曲线的开关——治安穿过它们时，税收和关系奖惩才切换方向。两个 `ref` 方法（84/87）不返回值，它们把金币影响写进调用方传入的 `ExplainedNumber`，这是 Bannerlord 里「可解释数值」模式的典型用法：每个数字都能附带一段文字说明，供 UI 展示。

## 怎么用

### 怎么拿到它

通过 Campaign 的 GameModels 聚合取到：`Campaign.Current.GameModels.GetGameModel<SettlementSecurityModel>()`。注意这是抽象类，实际拿到的是 `DefaultSettlementSecurityModel` 或 mod 替换后的子类实例。

### 典型用法

1. 调整整条治安曲线：替换模型后重写 `MaximumSecurityInSettlement` 与 `SecurityDriftMedium`，让所有城镇的治安量程和回归速度整体变化。
2. 改税收手感：只动 `ThresholdForTaxBoost` / `SettlementTaxBoostPercentage` 等四个税收相关属性，治安曲线本身不变。
3. 让剿匪更有回报：提高 `HideoutClearedSecurityGain` 并扩大 `HideoutClearedSecurityEffectRadius`，清匪窝能明显抬升周边治安。
4. 自定义治安变化来源：重写 `CalculateSecurityChange`，在官方因素之外加入自己的修正（如驻军、节日、瘟疫）。
5. 读取当前治安变化做 UI：用 `CalculateSecurityChange(town, true)` 拿到带描述的 `ExplainedNumber`，把每项原因显示给玩家。

### 最容易踩的坑

1. 两个 Gold 方法（84/87）返回 `void`，它们通过 `ref ExplainedNumber` 改写传入值；以为能拿到返回值会编译失败。
2. `GetLootedNearbyPartySecurityEffect`（51）与 `GetNearbyBanditPartyDefeatedSecurityEffect`（81）返回浮点修正值，不是累加器——要自己把返回值加到变化量上。
3. 改属性不会立刻改治安：属性只是参数表，实际治安要等每日 tick 由 `CalculateSecurityChange`(78) 重算后才变。
4. 阈值是下游开关：改 `ThresholdForTaxCorruption`(32) 会连锁改税收，而不是只改治安显示。
5. `CalculateSecurityChange` 的 `includeDescriptions` 参数控制 `ExplainedNumber` 是否附带文字说明，UI 展示时才传 `true`。

## 关键成员

- **MaximumSecurityInSettlement**（`SettlementSecurityModel.cs:12`）— 治安绝对上限，每日漂移把城镇治安推向这个天花板；默认实现通常返回 100，改它等于重标整条曲线的量程。
- **SecurityDriftMedium**（`SettlementSecurityModel.cs:16`）— 无事件时的每日基础漂移量，决定治安向上限回归的速度；负值会让治安持续下滑。
- **MapEventSecurityEffectRadius**（`SettlementSecurityModel.cs:20`）— 地图事件（如匪帮被剿）对周边城镇产生治安影响的半径，超出该距离的城镇不受波及。
- **HideoutClearedSecurityEffectRadius**（`SettlementSecurityModel.cs:24`）— 匪窝被清除后治安增益的作用半径，只覆盖该范围内的聚落。
- **HideoutClearedSecurityGain**（`SettlementSecurityModel.cs:28`）— 匪窝被清除时给范围内城镇一次性增加的治安点数，是少数能主动抬升治安的手段。
- **ThresholdForTaxCorruption**（`SettlementSecurityModel.cs:32`）— 治安低于该阈值时税收开始被腐蚀的临界点，税收模型据此扣减。
- **ThresholdForHigherTaxCorruption**（`SettlementSecurityModel.cs:36`）— 治安跌破该更低的阈值时税收腐蚀加重，与上一档形成两段式惩罚。
- **ThresholdForTaxBoost**（`SettlementSecurityModel.cs:40`）— 治安高于该阈值时税收获得加成的临界点，高治安城镇的财政奖励线。
- **SettlementTaxBoostPercentage**（`SettlementSecurityModel.cs:44`）— 治安超过加成阈值时税收提升的百分比，直接乘进税收计算。
- **SettlementTaxPenaltyPercentage**（`SettlementSecurityModel.cs:48`）— 治安低于腐蚀阈值时税收削减的百分比，与加成百分比对称。
- **GetLootedNearbyPartySecurityEffect**（`SettlementSecurityModel.cs:51`）— 计算城镇附近商队被劫掠对治安的打击，返回浮点修正值而非累加器，需自行加到变化量上。
- **ThresholdForNotableRelationBonus**（`SettlementSecurityModel.cs:55`）— 城镇领袖与本地要人关系高于该阈值时每日获得关系加成的门槛。
- **ThresholdForNotableRelationPenalty**（`SettlementSecurityModel.cs:59`）— 关系跌破该阈值时每日关系惩罚的门槛，与 bonus 阈值构成对称区间。
- **DailyNotableRelationBonus**（`SettlementSecurityModel.cs:63`）— 关系达标时每日给城镇领袖增加的关系点数，缓慢改善聚落态度。
- **DailyNotableRelationPenalty**（`SettlementSecurityModel.cs:67`）— 关系不达标时每日扣除的关系点数，长期不处理会拖垮忠诚。
- **DailyNotablePowerBonus**（`SettlementSecurityModel.cs:71`）— 关系达标时每日给要人增加的力量点数，影响要人在城镇的话语权。
- **DailyNotablePowerPenalty**（`SettlementSecurityModel.cs:75`）— 关系不达标时每日扣除的要人力量点数，与 bonus 对称。
- **CalculateSecurityChange**（`SettlementSecurityModel.cs:78`）— 唯一每日入口，汇总漂移、事件、要人关系等全部因素算出当日治安变化，返回 `ExplainedNumber` 可带描述。
- **GetNearbyBanditPartyDefeatedSecurityEffect**（`SettlementSecurityModel.cs:81`）— 计算附近匪帮被击败对治安的正面影响，返回浮点值，语义与劫掠效果相反。
- **CalculateGoldGainDueToHighSecurity**（`SettlementSecurityModel.cs:84`）— 把高治安带来的金币增益累加进传入的 `ref ExplainedNumber`，方法本身不返回值。
- **CalculateGoldCutDueToLowSecurity**（`SettlementSecurityModel.cs:87`）— 把低治安造成的金币损失累加进传入的 `ref ExplainedNumber`，与增益方法配对使用。

## 真实示例

```csharp
// 在 CampaignBehaviorBase 里拿到模型（实际类型是 DefaultSettlementSecurityModel 或 mod 子类）
var securityModel = Campaign.Current.GameModels.GetGameModel<SettlementSecurityModel>();

foreach (Town town in Town.AllTowns)
{
    // 唯一每日入口：返回带解释的治安变化量
    ExplainedNumber change = securityModel.CalculateSecurityChange(town, true);
    Debug.Print($"{town.Name}: security drift = {change.ResultNumber:F2}");

    // 高/低治安对税收的影响：通过 ref 参数累加，方法本身不返回值
    ExplainedNumber goldEffect = new ExplainedNumber(0f);
    securityModel.CalculateGoldGainDueToHighSecurity(town, ref goldEffect);
    securityModel.CalculateGoldCutDueToLowSecurity(town, ref goldEffect);
}
```

## 参见

- ↔ [DefaultSettlementSecurityModel](../DefaultSettlementSecurityModel) — 官方默认实现（已落盘，可直接链）
- ↔ [SettlementLoyaltyModel](../SettlementLoyaltyModel) — 忠诚度契约：治安与忠诚互相影响
- ↔ [DefaultSettlementProsperityModel](../DefaultSettlementProsperityModel) — 繁荣度模型：繁荣会压低治安
- ↔ [TownHelpers](../../core-extra/TownHelpers) — 城镇侧工具页

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
