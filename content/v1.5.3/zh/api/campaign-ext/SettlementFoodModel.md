---
title: "SettlementFoodModel"
description: "这个抽象模型规定城镇食物存量的上限与每日净变化，mod 靠替换它来调整食物平衡。"
---

# SettlementFoodModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`

## 概述

这个抽象模型在游戏里规定城镇与城堡的食物存量上限，以及每日食物净变化怎么算。游戏每天对每个聚落 tick 时，会调用 `CalculateTownFoodStocksChange` 得到当日食物增量，再叠加到当前存量上，并用 `FoodStocksUpperLimit` 封顶。食物存量是聚落经济的一环：它影响繁荣度、驻军维持与物价，因此 mod 想调整「食物平衡」时，通常不是去改某个城镇的数值，而是整体替换这个模型。它和 `SettlementProsperityModel`（繁荣度）、`SettlementLoyaltyModel`（忠诚度）是相邻的三条聚落曲线，三者共同决定一个聚落是走向繁荣还是衰败。理解食物模型的关键在于：它不是一个「当前食物量」的容器，而是一组「上限参数 + 每日净变化算法」的契约，具体存量由城镇自身状态保存。

## 心智模型

为什么食物要拆成「上限 + 每日净变化」两件事？因为食物存量本身是一个会随时间累积的量，如果把它写死进模型，模型就得自己保存每个城镇的状态，难以被整体替换。于是引擎把「规则」和「状态」分离：模型只负责给出四个上限参数（城镇基础上限、繁荣度换算、驻军口粮换算、城堡加成）和一个每日净变化算法，而每个城镇当前有多少食物存在 `Town` 里。这样 mod 替换模型时，不需要迁移任何存档里的食物数值，规则一改，所有城镇从下一 tick 起就按新规则走。

什么时候该替换它？当你想系统性改变食物经济——比如让驻军更费粮、让城堡更能囤粮、让繁荣度产出更多食物——就应该写一个 `SettlementFoodModel` 子类，覆盖对应的抽象成员，再通过 `Campaign.Current.Models` 的模型替换机制挂上去。只改一个城镇的食物量不需要动模型，直接改城镇状态即可。

默认实现 `DefaultSettlementFoodModel` 的做法是逐项累加 `ExplainedNumber`：先按繁荣度算出产出，再按驻军人数算出消耗，最后用上限封顶，并把每一项作为解释行附在结果上，方便在 UI 里显示「食物 +3（繁荣产出）」。

常见误用有三个。第一，把 `FoodStocksUpperLimit` 当成「当前食物量」读，其实它只是上限。第二，覆盖 `CalculateTownFoodStocksChange` 时忘了处理 `includeMarketStocks` 开关，导致市场库存被重复计算或漏算。第三，覆盖时没实现 `includeDescriptions`，导致解释行为空，UI 上食物变化没有来源说明，玩家看不懂。

## 怎么用

### 怎么拿到它

通过 `Campaign.Current.Models.SettlementFoodModel` 拿到当前挂载的食物模型实例。这是本站约定写法；`Campaign.Current.Models` 是 `GameModels` 聚合，所有可替换模型都从这里取。

### 典型用法

- 读默认模型的四个上限参数，判断当前食物经济是否偏紧，再决定要不要替换。
- 在 mod 初始化时写一个子类，覆盖 `CalculateTownFoodStocksChange`，把驻军口粮系数调高，制造「驻军费粮」的硬核体验。
- 覆盖 `CastleFoodStockUpperLimitBonus`，让城堡比城镇更能囤粮，体现城堡的战略价值。
- 在自定义 UI 里调用 `CalculateTownFoodStocksChange(town, includeDescriptions: true)`，把解释行显示成「食物 +3（繁荣产出）」。
- 配合 `SettlementProsperityModel` 一起替换，让食物产出和繁荣度形成联动曲线。

### 最容易踩的坑

- `FoodStocksUpperLimit` 只是上限，不是当前食物量；当前量在 `Town` 上，别混用。
- `NumberOfProsperityToEatOneFood` 是「每吃 1 食物需要多少繁荣度」，数值越大产出越慢，方向别搞反。
- `NumberOfMenOnGarrisonToEatOneFood` 同理，是「每吃 1 食物需要多少驻军」，调小会让驻军更费粮。
- `CastleFoodStockUpperLimitBonus` 只对城堡生效，对城镇没有影响，别指望它改城镇上限。
- `CalculateTownFoodStocksChange` 的 `includeMarketStocks` 控制是否把市场库存算进净变化，`includeDescriptions` 控制是否生成解释行，覆盖时两个都要正确处理。

## 关键成员

- **FoodStocksUpperLimit**（`SettlementFoodModel.cs:12`）— 城镇食物存量的硬上限，累积到此后不再增长
- **NumberOfProsperityToEatOneFood**（`SettlementFoodModel.cs:16`）— 每消耗 1 食物所需的繁荣度，决定繁荣产出食物的速率
- **NumberOfMenOnGarrisonToEatOneFood**（`SettlementFoodModel.cs:20`）— 每消耗 1 食物所需的驻军人数，决定驻军每日口粮
- **CastleFoodStockUpperLimitBonus**（`SettlementFoodModel.cs:24`）— 城堡相对城镇额外获得的食物上限加成
- **CalculateTownFoodStocksChange**（`SettlementFoodModel.cs:27`）— 计算城镇当日食物净变化，返回带解释的 `ExplainedNumber`
- **类声明本身**（`SettlementFoodModel.cs:8`）— 继承 `MBGameModel`，作为 Campaign 可替换的食物模型槽位

## 真实示例

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public static void ReportTownFood(Town town)
{
    // 通过 Campaign 的 GameModels 聚合拿到食物模型
    SettlementFoodModel foodModel = Campaign.Current.Models.SettlementFoodModel;

    int upperLimit = foodModel.FoodStocksUpperLimit;
    int prosperityPerFood = foodModel.NumberOfProsperityToEatOneFood;
    int garrisonPerFood = foodModel.NumberOfMenOnGarrisonToEatOneFood;

    // 计算今日食物净变化（含市场库存，不含解释行）
    ExplainedNumber change = foodModel.CalculateTownFoodStocksChange(
        town, includeMarketStocks: true, includeDescriptions: false);

    float net = change.ResultNumber;
    Console.WriteLine($"{town.Name}: 上限 {upperLimit}, 今日净变化 {net:F1}");
}
```

## 参见

- ↔ [DefaultSettlementFoodModel](../DefaultSettlementFoodModel) — 官方默认实现（同批兄弟页，我先写它，链接先放着即可）
- ↔ [DefaultSettlementProsperityModel](../DefaultSettlementProsperityModel) — 繁荣度模型，与食物是相邻曲线
- ↔ [TownHelpers](../../core-extra/TownHelpers) — 城镇侧工具页，食物与物价/可会见人物的上游数据

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
