---
title: "SettlementMilitiaModel"
description: "聚落民兵模型的抽象契约：定义围城后民兵生成数量、每日民兵增减计算、老兵生成概率与兵种比例接口，由 MBGameModel 单例机制在战役层替换。"
---
# SettlementMilitiaModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`
**基类：** `MBGameModel<SettlementMilitiaModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`（声明见第 8 行）

## 概述

`SettlementMilitiaModel` 是聚落民兵子系统的抽象契约层。它定义了四个核心接口：围城结束后一次性生成的民兵数量、每日民兵净变化的计算、老兵（veteran）民兵的生成概率、以及新兵中近战与远程兵种的比例分配。引擎通过 `MBGameModel<T>` 泛型基类将其注册为可替换模型——mod 继承本契约并覆写全部抽象成员后，用 `AddModel` 注册即可全局替换默认实现。

## 心智模型

**契约与默认实现的分工**：本契约只声明「民兵系统需要哪些计算」，不涉及任何具体算法。`DefaultSettlementMilitiaModel` 提供原版数值（围城后生成 90–108 民兵、城堡基础 +2/天、村庄基础 +0.5/天等）和完整计算逻辑。mod 继承本契约时，可以只覆写一个方法（如提高围城后生成量）而保留其余默认行为，也可以完全重写 `CalculateMilitiaChange` 实现自定义民兵经济。

**替换机制**：`MBGameModel<T>` 基类让本契约成为 `Campaign.Current.Models` 上的一个槽位。`GameModels` 在初始化时通过 `GetGameModel<SettlementMilitiaModel>()` 从已注册模型中解析实例（`GameModels.cs:689`）。mod 在 `SubModuleBase` 的加载流程中调用 `gameStarter.AddModel<SettlementMilitiaModel>(new MyMilitiaModel())` 完成注册（`SandBoxManager.cs:293` 是原版注册默认实现的位置）。

**何时被调用**：`MilitiasCampaignBehavior` 在围城结束后调用 `MilitiaToSpawnAfterSiege` 生成一次性民兵奖励（`MilitiasCampaignBehavior.cs:55`）。`Settlement` 类在每日 tick 时调用 `CalculateMilitiaSpawnRate` 和 `CalculateVeteranMilitiaSpawnChance` 决定新兵类型（`Settlement.cs:1586`、`Settlement.cs:1595`）。`Town` 和 `Village` 的 `MilitiaChange` 属性调用 `CalculateMilitiaChange` 获取每日净变化（`Town.cs:295`、`Village.cs:400`）。

## 怎么用

**替换步骤**：
1. 创建继承 `SettlementMilitiaModel` 的类，覆写全部 4 个抽象成员。
2. 在 `SubModuleBase` 的 `OnSubModuleLoad` 或 `CampaignGameStarter` 初始化时调用 `AddModel<SettlementMilitiaModel>(new MyModel())`。
3. 确保注册时机早于任何读取 `Campaign.Current.Models.SettlementMilitiaModel` 的代码。

**真实坑**：
- **注册时机**：`Campaign.Current.Models` 在战役启动后才可用。在 `OnSubModuleLoad` 中注册是安全的，但不要在静态构造函数或模块加载早期读取模型实例。
- **ExplainedNumber 语义**：`CalculateMilitiaChange` 和 `CalculateVeteranMilitiaSpawnChance` 返回 `ExplainedNumber` 而非 `int`。`includeDescriptions` 参数控制是否填充描述文本——UI 调用时传 `true` 以显示详细来源，逻辑判断时传 `false` 以跳过字符串构建开销。
- **out 参数**：`CalculateMilitiaSpawnRate` 使用 `out` 参数返回两个比例值。调用方必须声明变量接收，且方法内部保证赋值。两个比例之和始终为 1.0。
- **契约不约束数值范围**：本契约只定义接口签名，不限制返回值范围。返回负数、零或极大值在语法上合法，但可能导致 UI 显示异常或游戏逻辑错误。

**使用点**（真实调用方）：
- `GameModels.cs:299` — 属性声明 `public SettlementMilitiaModel SettlementMilitiaModel { get; private set; }`
- `GameModels.cs:689` — 模型解析 `this.SettlementMilitiaModel = base.GetGameModel<SettlementMilitiaModel>()`
- `SandBoxManager.cs:293` — 原版注册 `gameStarter.AddModel<SettlementMilitiaModel>(new DefaultSettlementMilitiaModel())`
- `MilitiasCampaignBehavior.cs:55` — 围城后生成 `MilitiaToSpawnAfterSiege(siegeSettlement.Town)`
- `Settlement.cs:1586` — 兵种比例 `CalculateMilitiaSpawnRate(this, out num, out num2)`
- `Settlement.cs:1595` — 老兵概率 `CalculateVeteranMilitiaSpawnChance(this).ResultNumber`
- `Town.cs:295` — 每日变化 `CalculateMilitiaChange(base.Owner.Settlement, false).ResultNumber`
- `Village.cs:400` — 村庄每日变化 `CalculateMilitiaChange(base.Owner.Settlement, false).ResultNumber`
- `TownManagementVM.cs:127` — UI 面板调用 `CalculateMilitiaChange` 显示预测

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `int MilitiaToSpawnAfterSiege(Town town)` | 围城结束后一次性生成的民兵数量。默认实现返回 `2 * (45 + Random(10))` 即 90–108。`MilitiasCampaignBehavior.cs:55` 在围城结束时调用。`SettlementMilitiaModel.cs:11` |
| `ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)` | 计算聚落每日民兵净变化。`includeDescriptions` 控制是否填充描述文本。`Town.cs:295` 和 `Village.cs:400` 在 `MilitiaChange` 属性中调用。`SettlementMilitiaModel.cs:14` |
| `ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)` | 计算新兵中老兵（veteran）的生成概率。受总督 perk、文化 feat、建筑效果和政策影响。`Settlement.cs:1595` 在生成新兵时调用。`SettlementMilitiaModel.cs:17` |
| `void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)` | 计算新兵中近战与远程兵种的比例。两个 out 参数之和为 1.0。默认实现返回 0.5 / 0.5。`Settlement.cs:1586` 在生成新兵时调用。`SettlementMilitiaModel.cs:20` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public class MyMilitiaModel : SettlementMilitiaModel
{
    public override int MilitiaToSpawnAfterSiege(Town town)
    {
        // 围城后生成固定 150 民兵
        return 150;
    }

    public override ExplainedNumber CalculateMilitiaChange(
        Settlement settlement, bool includeDescriptions = false)
    {
        // 每天固定 +3 民兵，调用基类获取 issue 效果
        ExplainedNumber result = new ExplainedNumber(3f, includeDescriptions, null);
        if (settlement.Town != null)
        {
            result.Add(1f, null, null);
        }
        return result;
    }

    public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
    {
        // 30% 老兵概率
        return new ExplainedNumber(0.3f, false, null);
    }

    public override void CalculateMilitiaSpawnRate(
        Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
    {
        // 70% 近战 / 30% 远程
        meleeTroopRate = 0.7f;
        rangedTroopRate = 1f - meleeTroopRate;
    }
}
```

## 参见

- ↔ 默认实现：[DefaultSettlementMilitiaModel](../DefaultSettlementMilitiaModel)
- ↔ 同桶模型：[SettlementFoodModel](../SettlementFoodModel) · [DefaultSettlementFoodModel](../DefaultSettlementFoodModel)
- ↔ 基类机制：[MBObjectBase](../MBObjectBase) · [MBObjectManager](../MBObjectManager)
- ↔ 战役入口：[Campaign](../../campaign/Campaign) · [CampaignGameStarter](../../campaign/CampaignGameStarter)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
