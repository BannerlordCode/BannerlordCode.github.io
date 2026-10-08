---
title: "SettlementMilitiaModel"
description: "规定定居点民兵的每日变化、围城后重建数量与兵种生成比例；mod 替换它可重写民兵经济。"
---

# SettlementMilitiaModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`

## 概述

这个抽象模型规定定居点民兵（Militia）这条军事经济线的全部数值行为：每日民兵数量如何变化、围城结束后重建多少民兵、老兵（Veteran）民兵的生成概率有多高、以及生成的民兵里近战与远程各占什么比例。它由定居点的每日 tick 驱动（`CalculateMilitiaChange`、`CalculateVeteranMilitiaSpawnChance`、`CalculateMilitiaSpawnRate`），而 `MilitiaToSpawnAfterSiege` 则在围城结算流程中被调用，决定一座城镇被打下来之后立刻补充的民兵基数。相邻模型分工明确：`SettlementProsperityModel` 管钱与人口，`DefaultSettlementLoyaltyModel` 管忠诚度，本模型只管「兵」这条线。mod 替换它之后，可以重写民兵经济——比如让村庄在战时爆兵、让围城后的恢复更慢、或让老兵概率随建筑等级提升。

## 心智模型

这个模型与 `SettlementProsperityModel` 同构，是「参数表 + 曲线方法」结构：它不保存状态，状态在 `Settlement` 上，自己只提供纯计算方法。三个 `ExplainedNumber` 方法（每日变化、老兵概率）都走引擎累加器模式——默认实现把基础值、建筑加成、政策修正逐项 `Add` / `AddFactor`，每项可带说明文字，最终拼成悬停提示。`MilitiaToSpawnAfterSiege` 是个例外：它返回一个 `int`，是围城结算时的一次性基数计算，不走累加器。`CalculateMilitiaSpawnRate` 用 `out` 参数同时给出近战与远程两个比例，调用方拿到的是已经归一化好的数值。什么时候该替换它：想改变民兵随时间演化的规律（成长、衰减、上限）、想改变围城后的军事恢复节奏、或想改变兵种构成时。常见误用有三：一是重写 `CalculateMilitiaChange` 时忘记调 `base`，导致默认民兵曲线失效、全图民兵归零；二是把 `CalculateMilitiaSpawnRate` 的 `out` 参数当成可选——它们是必填的，不赋值就返回会编译报错；三是把 `MilitiaToSpawnAfterSiege` 当成每日方法反复调用，实际上它只在围城结算时触发一次。

## 怎么用

### 怎么拿到它

通过 Campaign 的 GameModels 聚合取到：从当前 Campaign 实例的 GameModels 集合中按类型取出该模型实例，取用方式与其他 GameModel 一致。

### 典型用法

- 想让村庄在战时快速爆兵：重写 `CalculateMilitiaChange`，检测战争状态并给村庄追加正修正。
- 想让围城后恢复更慢：重写 `MilitiaToSpawnAfterSiege`，把返回的基数压低。
- 想让老兵民兵更常见：重写 `CalculateVeteranMilitiaSpawnChance`，乘一个大于 1 的因子。
- 想让民兵里远程兵更多：重写 `CalculateMilitiaSpawnRate`，调高 `rangedTroopRate`。

### 最容易踩的坑

- 忘记调用 `base.CalculateMilitiaChange`，导致默认民兵曲线完全失效，全图民兵数量停滞。
- 把 `CalculateMilitiaSpawnRate` 的 `out` 参数当可选，漏赋值导致编译错误或拿到未初始化数值。
- 把 `MilitiaToSpawnAfterSiege` 当成每日方法反复调用，实际上它只在围城结算时触发一次。
- 在 `CalculateVeteranMilitiaSpawnChance` 里返回了超出合理范围的概率，导致老兵民兵刷屏或绝迹。

## 关键成员

- **类声明**（`SettlementMilitiaModel.cs:8`）— 抽象类声明，继承 `MBGameModel<SettlementMilitiaModel>`，是 mod 替换的入口；子类必须实现下面四个抽象成员。
- **MilitiaToSpawnAfterSiege**（`SettlementMilitiaModel.cs:11`）— 计算围城结束后城镇一次性重建的民兵基数；由围城结算流程调用，返回 `int`。
- **CalculateMilitiaChange**（`SettlementMilitiaModel.cs:14`）— 计算定居点每日民兵数量变化；由每日 tick 驱动，`includeDescriptions` 控制悬停说明文字。
- **CalculateVeteranMilitiaSpawnChance**（`SettlementMilitiaModel.cs:17`）— 计算老兵民兵的生成概率；返回 `ExplainedNumber`，走累加器模式。
- **CalculateMilitiaSpawnRate**（`SettlementMilitiaModel.cs:20`）— 用 `out` 参数同时给出近战与远程民兵的生成比例；两个 `out` 参数都必须赋值。

## 真实示例

```csharp
public class MyMilitiaModel : SettlementMilitiaModel
{
    public override int MilitiaToSpawnAfterSiege(Town town)
    {
        int baseCount = base.MilitiaToSpawnAfterSiege(town);
        return baseCount + 5;
    }

    public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)
    {
        ExplainedNumber result = base.CalculateMilitiaChange(settlement, includeDescriptions);
        if (settlement.IsVillage)
        {
            result.Add(1f, "MyMod: 村庄民兵加成");
        }
        return result;
    }

    public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
    {
        ExplainedNumber chance = base.CalculateVeteranMilitiaSpawnChance(settlement);
        chance.AddFactor(1.25f, "MyMod: 老兵概率提升");
        return chance;
    }

    public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
    {
        base.CalculateMilitiaSpawnRate(settlement, out meleeTroopRate, out rangedTroopRate);
        rangedTroopRate += 0.1f;
    }
}
```

## 参见

- [DefaultSettlementMilitiaModel](../DefaultSettlementMilitiaModel) — 默认实现，逐项累加民兵变化与概率修正的参考
- [SettlementProsperityModel](../SettlementProsperityModel) — 同层的经济模型，与民兵模型分工相邻
- [DefaultSettlementLoyaltyModel](../DefaultSettlementLoyaltyModel) — 忠诚度模型，影响民兵的间接因素
- [TownHelpers](../../core-extra/TownHelpers) — 城镇相关辅助方法

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
