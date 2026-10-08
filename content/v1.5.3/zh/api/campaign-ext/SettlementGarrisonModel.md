---
title: "SettlementGarrisonModel"
description: "驻军模型抽象接口：定义城镇驻军每日自动招募上限、驻军基础变化、部队抽兵数量与城墙修复上限四项计算。"
---

# SettlementGarrisonModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class SettlementGarrisonModel : MBGameModel<SettlementGarrisonModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementGarrisonModel.cs`

## 概述

`SettlementGarrisonModel` 是战役层驻军机制的抽象模型接口，位于 `TaleWorlds.CampaignSystem.ComponentInterfaces` 命名空间，继承自 `MBGameModel<SettlementGarrisonModel>` 自泛型基类。它把「驻军」这一玩法拆成四项纯计算：每日自动招募上限、驻军每日基础净变化、移动部队从驻军抽走的士兵数量、以及城墙每日修复上限。游戏启动时由 `DefaultSettlementGarrisonModel` 提供默认实现并注册进 `Campaign.Current.Models` 聚合，Mod 可以整体替换实现来调整驻军节奏。调用方主要是驻军每日 tick 逻辑、部队招募 AI、以及城墙修复流程。与相邻模型的分工上，`SettlementMilitiaModel` 负责民兵这种临时性守军增益，本类负责常驻驻军本身；`TownHelpers` 等辅助类提供城镇属性查询，不参与驻军数值决策。

## 心智模型

结构上，本类是 ComponentInterfaces 模式的典型产物：一个抽象类只声明计算契约，不含任何字段与状态，所有数值决策都推给实现类。四个方法构成一条每日结算链：`CalculateBaseGarrisonChange` 先算基础净变化（默认实现里叛军城镇 +2，再叠加议题效果），`GetMaximumDailyAutoRecruitmentCount` 给出当天还能自动招募多少兵，`FindNumberOfTroopsToTakeFromGarrison` 决定一支部队最多能从驻军抽走多少人，`GetMaximumDailyRepairAmount` 限制城墙每天能修多少。前两个方法返回 `ExplainedNumber`，这是 Bannerlord 的数值解释结构：传 `includeDescriptions = true` 时，每个加项都会附带一条本地化文本，供 Mod 在设置界面或调试面板里展示「这个数是怎么来的」。调用顺序上，游戏每日 tick 先算变化量再应用，抽兵与修复则是事件触发。常见误用有三：一是把查询方法当成命令方法，以为调用 `FindNumberOfTroopsToTakeFromGarrison` 就会真的抽兵，实际它只返回数量；二是对非城镇或城堡调用 `CalculateBaseGarrisonChange`，默认实现只对 `IsTown` 或 `IsCastle` 且叛军 clan 有加成；三是忽略 `includeDescriptions` 默认值 `false`，直接拿 `ExplainedNumber` 当普通 float 用会丢掉描述信息。

## 怎么用

### 怎么拿到它

通过 Campaign 的 GameModels 聚合取到：游戏在战役启动时把默认实现注册进 `Campaign.Current.Models`，Mod 代码从该聚合上解析本模型实例，无需自己 new。

### 典型用法

1. 查询某城镇每日自动招募上限：`GetMaximumDailyAutoRecruitmentCount(town, true)`，传 `true` 拿到带描述的 `ExplainedNumber` 用于 UI。
2. 计算驻军每日基础净变化：`CalculateBaseGarrisonChange(settlement, false)`，取 `ResultNumber` 作为当天增量。
3. 部队进城招募时算抽兵量：`FindNumberOfTroopsToTakeFromGarrison(party, settlement, 0.5f)`，第三个参数是每座城防的理想驻军强度。
4. 城墙修复流程查每日修复上限：`GetMaximumDailyRepairAmount(settlement)`。
5. Mod 想调整驻军节奏时，继承本类写自己的实现，替换 GameModels 里的注册。

### 最容易踩的坑

1. 对非城镇或城堡调用 `CalculateBaseGarrisonChange` 会得到 0 基础值——默认实现只对 `IsTown` 或 `IsCastle` 且叛军 clan 加 2（锚点 15、27）。
2. `FindNumberOfTroopsToTakeFromGarrison` 只返回数量，不执行抽调；调用方必须自己从驻军 roster 里减兵（锚点 18、39）。
3. `GetMaximumDailyRepairAmount` 在城墙全部完好或城镇被围困时返回 0，别指望它一直给正数（锚点 21、81）。
4. `includeDescriptions` 默认 `false`，需要展示数值构成时必须显式传 `true`（锚点 12、15）。
5. 驻军和民兵是两套模型：民兵归 `SettlementMilitiaModel`，本类只管常驻驻军，混用会算错守军规模。

## 关键成员

- **类声明**（`SettlementGarrisonModel.cs:9`）— 抽象基类，继承 `MBGameModel<SettlementGarrisonModel>` 自泛型，随 GameModels 聚合注册，Mod 可整体替换。
- **GetMaximumDailyAutoRecruitmentCount**（`SettlementGarrisonModel.cs:12`）— 每日自动招募上限；入参是 `Town` 而非 `Settlement`，返回 `ExplainedNumber`，默认实现从 1 起步叠加建筑效果。
- **CalculateBaseGarrisonChange**（`SettlementGarrisonModel.cs:15`）— 驻军每日基础净变化；默认实现从 0 起步，叛军城镇 +2，再叠加议题效果。
- **FindNumberOfTroopsToTakeFromGarrison**（`SettlementGarrisonModel.cs:18`）— 计算部队从驻军抽走的士兵数；只返回数量，不执行抽调，调用方负责实际减兵。
- **GetMaximumDailyRepairAmount**（`SettlementGarrisonModel.cs:21`）— 城墙每日修复上限；城墙完好或被围困时返回 0。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static class GarrisonQueryExample
{
    public static void PrintGarrisonInfo(Settlement settlement, MobileParty party)
    {
        var model = Campaign.Current.Models.SettlementGarrisonModel;
        ExplainedNumber dailyChange = model.CalculateBaseGarrisonChange(settlement, true);
        int recruitCap = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town, false).ResultNumber;
        int takeCount = model.FindNumberOfTroopsToTakeFromGarrison(party, settlement, 0.5f);
        float repair = model.GetMaximumDailyRepairAmount(settlement);
        InformationManager.DisplayMessage(new InformationMessage(
            $"change={dailyChange.ResultNumber}, cap={recruitCap}, take={takeCount}, repair={repair}"));
    }
}
```

## 参见

- [DefaultSettlementGarrisonModel](../DefaultSettlementGarrisonModel) — 本批，先放着
- [SettlementMilitiaModel](../SettlementMilitiaModel) — 已落盘
- [TownHelpers](../../core-extra/TownHelpers)
- [GameModel](../../core-extra/GameModel)

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
