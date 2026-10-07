---
title: "DefaultSettlementFoodModel"
description: "默认食物模型逐项累加繁荣度、驻军、村庄产量与围城损耗，是城镇食物曲线的实际执行者。"
---

# DefaultSettlementFoodModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultSettlementFoodModel : SettlementFoodModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementFoodModel.cs`

## 概述

这个类是 `SettlementFoodModel` 的官方默认实现，把抽象契约落成一套具体的食物算法。它用四个可覆盖的常量参数（城镇食物上限、繁荣度换算、驻军口粮换算、城堡上限加成）决定「规则」，再用 `CalculateTownFoodChangeInternal` 把每日净变化按固定顺序逐项累加进同一个 `ExplainedNumber`。累加顺序是：繁荣度吃粮、驻军吃粮、周边村庄产量、被劫掠村庄、围城村庄、市民买粮，最后交给 `GetSettlementFoodChangeDueToIssues` 处理聚落事件带来的额外增减。每一项都带一条解释行文本，所以 UI 上能看到「食物 +3（繁荣产出）」「食物 -2（驻军消耗）」这样的来源说明。理解这个类的关键，是把它当成一个「按顺序往同一个累加器上加项」的流水线，而不是六个互不相干的公式。

## 心智模型

为什么食物会「莫名在掉」？因为这个类的算法是一条固定顺序的累加流水线，任何一项的方向或系数错了，最终净值就会偏离预期。`CalculateTownFoodChangeInternal` 从 64 行开始，先建一个 `ref ExplainedNumber`，然后按顺序加项：第一项是繁荣度带来的食物产出（正方向，繁荣越高产出越多），第二项是驻军每日口粮消耗（负方向，驻军越多消耗越快），第三项是周边正常村庄的产量（正方向，每个村庄按 `FoodProductionPerVillage` 固定产出），第四项是被劫掠村庄的损失（负方向，村庄被劫后产量归零），第五项是围城村庄的损失（负方向，围城期间村庄无法产出），第六项是市民买粮（正方向，市民从市场买入食物补充存量）。这六项加完，才交给 `GetSettlementFoodChangeDueToIssues` 处理聚落事件（如饥荒、丰收）带来的额外增减。

这条流水线的设计意图是「可解释」：每一项都往 `ExplainedNumber` 里加一条带文本的解释行，所以玩家能看到食物为什么涨、为什么跌。`FoodProductionPerVillage` 是每个村庄的固定产量系数，7 个 `TextObject` 字段（繁荣、驻军、周边村庄、正常村庄、被劫村庄、围城村庄、市民买粮）是这些解释行的文本来源，通过 `GameTexts.FindText` 从游戏文本表里按 key 查找。

什么时候该读这个类？当你想理解「为什么我的城镇食物在掉」时，按累加顺序逐项排查：先看驻军是不是太多，再看周边村庄是不是被劫了，最后看是不是被围城了。什么时候该改它？当你想调整食物经济的某一项系数（比如让村庄产出更高、让驻军更费粮）时，覆盖对应的抽象成员即可，不需要动累加顺序。

## 怎么用

### 怎么拿到它

通过 `Campaign.Current.Models.SettlementFoodModel` 拿到当前挂载的食物模型实例；如果当前挂的就是默认实现，这个实例就是 `DefaultSettlementFoodModel`。这是本站约定写法；`Campaign.Current.Models` 是 `GameModels` 聚合，所有可替换模型都从这里取。

### 典型用法

- 读四个上限参数，判断当前食物经济是否偏紧，再决定要不要替换整个模型。
- 覆盖 `NumberOfMenOnGarrisonToEatOneFood`，调小让驻军更费粮，制造「驻军拖垮经济」的硬核体验。
- 覆盖 `CastleFoodStockUpperLimitBonus`，让城堡比城镇更能囤粮，体现城堡的战略价值。
- 在自定义 UI 里调用 `CalculateTownFoodStocksChange(town, includeDescriptions: true)`，把解释行显示成来源说明。
- 继承这个类而不是直接继承 `SettlementFoodModel`，只覆盖你想改的那几项，保留默认累加顺序。

### 最容易踩的坑

- 覆盖 `CalculateTownFoodStocksChange` 时忘了调用 `CalculateTownFoodChangeInternal`，导致六项累加全丢，只剩你写的那一项。
- 覆盖时没正确处理 `includeMarketStocks`，导致市场库存被重复计算或漏算。
- 覆盖时没实现 `includeDescriptions`，导致解释行为空，UI 上食物变化没有来源说明。
- 直接改 `FoodProductionPerVillage` 这个 `const` 是做不到的，它是编译期常量，想改村庄产量得覆盖累加逻辑。
- 以为 `GetSettlementFoodChangeDueToIssues` 是公开可扩展的，其实它是 `private static`，外部无法直接调用或覆盖。

## 关键成员

- **类声明本身**（`DefaultSettlementFoodModel.cs:15`）— 继承 `SettlementFoodModel`，把抽象契约落成具体算法
- **FoodStocksUpperLimit**（`DefaultSettlementFoodModel.cs:19`）— 城镇食物存量的硬上限，累积到此后不再增长
- **NumberOfProsperityToEatOneFood**（`DefaultSettlementFoodModel.cs:29`）— 每消耗 1 食物所需的繁荣度，决定繁荣产出食物的速率
- **NumberOfMenOnGarrisonToEatOneFood**（`DefaultSettlementFoodModel.cs:39`）— 每消耗 1 食物所需的驻军人数，决定驻军每日口粮
- **CastleFoodStockUpperLimitBonus**（`DefaultSettlementFoodModel.cs:49`）— 城堡相对城镇额外获得的食物上限加成
- **CalculateTownFoodStocksChange**（`DefaultSettlementFoodModel.cs:58`）— 公开入口，转发到内部累加逻辑并返回带解释的 `ExplainedNumber`
- **CalculateTownFoodChangeInternal**（`DefaultSettlementFoodModel.cs:64`）— 核心累加流水线，按固定顺序把六项食物增减加进同一个 `ref ExplainedNumber`
- **GetSettlementFoodChangeDueToIssues**（`DefaultSettlementFoodModel.cs:133`）— 处理聚落事件（饥荒、丰收等）带来的额外食物增减
- **ProsperityText**（`DefaultSettlementFoodModel.cs:139`）— 繁荣度解释行的文本来源，通过 `GameTexts.FindText` 按 key 查找
- **GarrisonText**（`DefaultSettlementFoodModel.cs:142`）— 驻军消耗解释行的文本来源
- **LandsAroundSettlementText**（`DefaultSettlementFoodModel.cs:145`）— 周边土地产量解释行的文本来源
- **NormalVillagesText**（`DefaultSettlementFoodModel.cs:148`）— 正常村庄产量解释行的文本来源
- **RaidedVillagesText**（`DefaultSettlementFoodModel.cs:151`）— 被劫掠村庄损失解释行的文本来源
- **VillagesUnderSiegeText**（`DefaultSettlementFoodModel.cs:154`）— 围城村庄损失解释行的文本来源
- **FoodBoughtByCiviliansText**（`DefaultSettlementFoodModel.cs:157`）— 市民买粮解释行的文本来源
- **FoodProductionPerVillage**（`DefaultSettlementFoodModel.cs:160`）— 每个村庄的固定食物产量系数，编译期常量

## 真实示例

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public static void DiagnoseTownFood(Town town)
{
    // 通过 Campaign 的 GameModels 聚合拿到食物模型
    SettlementFoodModel foodModel = Campaign.Current.Models.SettlementFoodModel;

    int upperLimit = foodModel.FoodStocksUpperLimit;
    int prosperityPerFood = foodModel.NumberOfProsperityToEatOneFood;
    int garrisonPerFood = foodModel.NumberOfMenOnGarrisonToEatOneFood;

    // 计算今日食物净变化，带解释行用于定位「食物为什么在掉」
    ExplainedNumber change = foodModel.CalculateTownFoodStocksChange(
        town, includeMarketStocks: true, includeDescriptions: true);

    float net = change.ResultNumber;
    Console.WriteLine($"{town.Name}: 上限 {upperLimit}, 今日净变化 {net:F1}");
    foreach (var line in change.Lines)
        Console.WriteLine($"  {line}");
}
```

## 参见

- ↔ [SettlementFoodModel](../SettlementFoodModel) — 抽象基类，规定食物模型的契约与四个上限参数
- ↔ [DefaultSettlementProsperityModel](../DefaultSettlementProsperityModel) — 繁荣度模型默认实现，与食物是相邻曲线
- ↔ [TownHelpers](../../core-extra/TownHelpers) — 城镇侧工具页，食物与物价/可会见人物的上游数据
- ↔ [PartyBaseHelper](../../core-extra/PartyBaseHelper) — 驻军与队伍侧工具页，驻军口粮消耗的上游数据

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
