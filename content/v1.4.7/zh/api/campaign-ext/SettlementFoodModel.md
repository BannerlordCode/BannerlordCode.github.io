---
title: "SettlementFoodModel"
description: "聚落食物模型的抽象契约：定义城镇食物库存上限、消耗速率与每日食物增减计算接口，由 MBGameModel 单例机制在战役层替换。"
---
# SettlementFoodModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class SettlementFoodModel : MBGameModel<SettlementFoodModel>`
**基类：** `MBGameModel<SettlementFoodModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementFoodModel.cs`（声明见第 8 行）

## 概述

`SettlementFoodModel` 是聚落食物子系统的抽象契约层。它定义了城镇食物库存的上限规则、繁荣度与驻军对食物的消耗速率，以及每日食物净变化的计算接口。引擎通过 `MBGameModel<T>` 泛型基类将其注册为可替换模型——mod 继承本契约并覆写全部抽象成员后，用 `AddModel` 注册即可全局替换默认实现，无需改动任何调用方代码。

## 心智模型

**契约与默认实现的分工**：本契约只声明「食物系统需要哪些数值和计算」，不涉及任何具体算法。`DefaultSettlementFoodModel` 提供原版数值（库存上限 300、每 40 繁荣度消耗 1 食物等）和完整计算逻辑。mod 继承本契约时，可以只覆写一个属性（如提高库存上限）而保留其余默认行为，也可以完全重写 `CalculateTownFoodStocksChange` 实现自定义食物经济。

**替换机制**：`MBGameModel<T>` 基类让本契约成为 `Campaign.Current.Models` 上的一个槽位。`GameModels` 在初始化时通过 `GetGameModel<SettlementFoodModel>()` 从已注册模型中解析实例（`GameModels.cs:690`）。mod 在 `SubModuleBase` 的加载流程中调用 `gameStarter.AddModel<SettlementFoodModel>(new MyFoodModel())` 完成注册（`SandBoxManager.cs:295` 是原版注册默认实现的位置）。注册顺序决定优先级——后注册的同名模型会覆盖先注册的。

**何时被调用**：城镇每日 tick 时，`Town.FoodChange` 属性调用 `CalculateTownFoodStocksChange` 获取当日食物净变化（`Town.cs:225`）。驻军行为在特定条件下也读取本模型（`GarrisonTroopsCampaignBehavior.cs:325`）。UI 侧的城镇管理面板直接调用本模型显示食物预测（`TownManagementVM.cs:121`）。

## 怎么用

**替换步骤**：
1. 创建继承 `SettlementFoodModel` 的类，覆写全部 5 个抽象成员。
2. 在 `SubModuleBase` 的 `OnSubModuleLoad` 或 `CampaignGameStarter` 初始化时调用 `AddModel<SettlementFoodModel>(new MyModel())`。
3. 确保注册时机早于任何读取 `Campaign.Current.Models.SettlementFoodModel` 的代码。

**真实坑**：
- **注册时机**：`Campaign.Current.Models` 在战役启动后才可用。在 `OnSubModuleLoad` 中注册是安全的，但不要在静态构造函数或模块加载早期读取模型实例。
- **ExplainedNumber 语义**：`CalculateTownFoodStocksChange` 返回 `ExplainedNumber` 而非 `int`。`includeDescriptions` 参数控制是否填充描述文本——UI 调用时传 `true` 以显示详细来源，逻辑判断时传 `false` 以跳过字符串构建开销。
- **includeMarketStocks 参数**：默认 `true` 表示计算包含市场购买的食物。传 `false` 可排除市场因素，用于纯生产/消耗分析。
- **契约不约束数值范围**：本契约只定义接口签名，不限制返回值范围。返回负数、零或极大值在语法上合法，但可能导致 UI 显示异常或游戏逻辑错误。

**使用点**（真实调用方）：
- `GameModels.cs:289` — 属性声明 `public SettlementFoodModel SettlementFoodModel { get; private set; }`
- `GameModels.cs:690` — 模型解析 `this.SettlementFoodModel = base.GetGameModel<SettlementFoodModel>()`
- `SandBoxManager.cs:295` — 原版注册 `gameStarter.AddModel<SettlementFoodModel>(new DefaultSettlementFoodModel())`
- `Town.cs:225` — 每日食物变化 `CalculateTownFoodStocksChange(this, true, false).ResultNumber`
- `Town.cs:420` — 库存上限 `FoodStocksUpperLimit`
- `Town.cs:423` — 城堡加成 `CastleFoodStockUpperLimitBonus`
- `GarrisonTroopsCampaignBehavior.cs:325` — 驻军食物检查
- `SettlementHelper.cs:610` — 繁荣度消耗阈值 `NumberOfProsperityToEatOneFood`

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `int FoodStocksUpperLimit { get; }` | 城镇食物库存的硬上限。默认实现返回 300。超过此值后食物不再积累。`Town.cs:420` 在计算库存百分比时读取此值。`SettlementFoodModel.cs:12` |
| `int NumberOfProsperityToEatOneFood { get; }` | 每消耗 1 单位食物所需的繁荣度。默认 40。值越大表示食物消耗越慢。`SettlementHelper.cs:610` 用此值判断食物短缺严重程度。`SettlementFoodModel.cs:16` |
| `int NumberOfMenOnGarrisonToEatOneFood { get; }` | 每消耗 1 单位食物所需的驻军人数。默认 20。驻军越多消耗越快。`SettlementFoodModel.cs:20` |
| `int CastleFoodStockUpperLimitBonus { get; }` | 城堡（而非城镇）的额外库存上限。默认 150。`Town.cs:423` 在 `IsCastle` 时加到基础上限上。`SettlementFoodModel.cs:24` |
| `ExplainedNumber CalculateTownFoodStocksChange(Town town, bool includeMarketStocks = true, bool includeDescriptions = false)` | 计算城镇每日食物净变化。`includeMarketStocks` 控制是否包含市场购买的食物；`includeDescriptions` 控制是否填充 `ExplainedNumber` 的描述文本。返回值的 `ResultNumber` 属性是最终数值。`SettlementFoodModel.cs:27` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public class MyFoodModel : SettlementFoodModel
{
    public override int FoodStocksUpperLimit => 500;
    public override int NumberOfProsperityToEatOneFood => 60;
    public override int NumberOfMenOnGarrisonToEatOneFood => 25;
    public override int CastleFoodStockUpperLimitBonus => 200;

    public override ExplainedNumber CalculateTownFoodStocksChange(
        Town town, bool includeMarketStocks = true, bool includeDescriptions = false)
    {
        // 基础消耗：驻军每天吃 2 食物
        float consumption = -2f;
        // 每个村庄生产 5 食物
        float production = town.Owner.Settlement.BoundVillages.Count * 5f;
        ExplainedNumber result = new ExplainedNumber(production + consumption, includeDescriptions, null);
        // 调用基类获取 issue 效果修正
        if (town.Settlement.OwnerClan != null)
        {
            result.Add(1f, null, null);
        }
        return result;
    }
}
```

## 参见

- ↔ 默认实现：[DefaultSettlementFoodModel](../DefaultSettlementFoodModel)
- ↔ 同桶模型：[SettlementMilitiaModel](../SettlementMilitiaModel) · [PartyMoraleModel](../PartyMoraleModel)
- ↔ 基类机制：[MBObjectBase](../MBObjectBase) · [MBObjectManager](../MBObjectManager)
- ↔ 战役入口：[Campaign](../../campaign/Campaign) · [CampaignGameStarter](../../campaign/CampaignGameStarter)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
