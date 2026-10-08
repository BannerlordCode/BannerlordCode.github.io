---
title: "DefaultSettlementMilitiaModel"
description: "聚落民兵模型的默认实现：原版数值（围城后 90–108 民兵、城堡 +2/天、村庄 +0.5/天）与完整的每日民兵增减计算逻辑，包含基础产出、退休消耗、市场武器、政策、perk 与 issue 修正。"
---
# DefaultSettlementMilitiaModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**基类：** `SettlementMilitiaModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`（声明见第 16 行）

## 概述

`DefaultSettlementMilitiaModel` 是 `SettlementMilitiaModel` 契约的原版实现。它定义了游戏默认的民兵经济参数——围城后一次性生成 90–108 民兵、城堡基础 +2/天、村庄基础 +0.5/天、每 400 hearth 等级 +1 民兵等——并通过 `CalculateMilitiaChangeInternal` 方法将这些参数组合成每日民兵净变化的完整计算。计算涵盖基础产出、退休消耗、市场武器、建筑效果、政策修正、perk 加成和 issue 效果。

## 心智模型

**算法结构**：`CalculateMilitiaChange` 是契约入口，直接委托给 private static 的 `CalculateMilitiaChangeInternal`（`DefaultSettlementMilitiaModel.cs:85`）。内部方法按固定顺序叠加修正：基础产出（城堡 +2 / 村庄 +0.5）→ 退休消耗（当前民兵 × -0.025）→ hearth/繁荣度产出 → 市场武器 → 政策（农奴制 -1、郡县制 +1、公民权 +1）→ 文化 feat → 建筑效果 → perk 修正 → issue 效果。

**数值设计**：`MilitiaToSpawnAfterSiege` 返回 `2 * (45 + MBRandom.RandomInt(10))`，即 90–108 的随机值。`CalculateMilitiaSpawnRate` 固定返回 0.5/0.5 的近战/远程比例。`CalculateVeteranMilitiaSpawnChance` 是四个方法中最复杂的——它检查总督的 `CitizenMilitia`、`Drills`、`SevenVeterans` perk，文化的 `BattanianMilitiaFeat`，建筑的 `MilitiaVeterancyChance` 效果，以及 `LandGrantsForVeteran` 政策的 +10% 因子。

**修正层级**：计算按固定顺序叠加修正——基础产出 → 退休消耗 → hearth/繁荣度 → 市场 → 政策 → 文化 → 建筑 → perk → issue。理解这个顺序对 mod 覆写至关重要：后注册的修正会叠加在先注册的之上。

## 怎么用

**继承与覆写**：
- 只调数值：覆写 `MilitiaToSpawnAfterSiege` 和 `CalculateMilitiaSpawnRate`，保留 `CalculateMilitiaChange` 默认实现。
- 改算法：覆写 `CalculateMilitiaChange`，可选择调用 `base` 后追加修正，或完全重写。
- 注册：`gameStarter.AddModel<SettlementMilitiaModel>(new DefaultSettlementMilitiaModel())` 是原版注册方式（`SandBoxManager.cs:293`）。mod 替换时改为注册自己的实例。

**真实坑**：
- **村庄状态检查**：`CalculateMilitiaChangeInternal` 在村庄状态非 `Normal` 时直接返回 0（`DefaultSettlementMilitiaModel.cs:88`）。覆写时需保留此分支逻辑。
- **市场物品过滤**：`CalculateMilitiaChangeInternal` 遍历 `town.SoldItems`，只累加 `ItemCategory.Property.BonusToMilitia` 类别的物品，每个物品贡献 +0.2 民兵。自定义物品需正确设置 `Category.Properties` 才能被计入。
- **ExplainedNumber 累加器**：`Add` 方法的第二个参数是描述文本 key。传 `null` 表示不显示来源。UI 调用时 `includeDescriptions=true` 会填充这些文本。
- **issue 效果**：`GetSettlementMilitiaChangeDueToIssues` 通过 `IssueModel` 查询聚落相关的 issue 效果。自定义 issue 需正确注册 `DefaultIssueEffects.SettlementMilitia` 才能生效。
- **perk 修正**：`GetSettlementMilitiaChangeDueToPerks` 检查总督的 6 个 perk（`SwiftStrike`、`KeepAtBay`、`MerryMen`、`LongShots`、`SlingingCompetitions`、`SevenVeterans`），围城时额外检查 `ArmsDealer`。覆写时需保留这些 perk 的引用。

**使用点**（真实调用方）：
- `SandBoxManager.cs:293` — 原版注册 `AddModel<SettlementMilitiaModel>(new DefaultSettlementMilitiaModel())`
- `MilitiasCampaignBehavior.cs:55` — 围城后生成 `MilitiaToSpawnAfterSiege(siegeSettlement.Town)`
- `Settlement.cs:1586` — 兵种比例 `CalculateMilitiaSpawnRate(this, out num, out num2)`
- `Settlement.cs:1595` — 老兵概率 `CalculateVeteranMilitiaSpawnChance(this).ResultNumber`
- `Town.cs:295` — 每日变化 `CalculateMilitiaChange(base.Owner.Settlement, false).ResultNumber`
- `Town.cs:305` — 带描述的每日变化 `CalculateMilitiaChange(base.Owner.Settlement, true)`
- `Village.cs:400` — 村庄每日变化 `CalculateMilitiaChange(base.Owner.Settlement, false).ResultNumber`
- `Village.cs:410` — 村庄带描述的每日变化 `CalculateMilitiaChange(base.Owner.Settlement, true)`
- `TownManagementVM.cs:127` — UI 面板调用 `CalculateMilitiaChange` 显示预测

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `int MilitiaToSpawnAfterSiege(Town town)` | 返回 `2 * (45 + MBRandom.RandomInt(10))`，即 90–108 的随机值。围城结束后一次性生成。`DefaultSettlementMilitiaModel.cs:19` |
| `ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions)` | 契约入口。直接委托给 `CalculateMilitiaChangeInternal`。`DefaultSettlementMilitiaModel.cs:25` |
| `ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)` | 计算老兵生成概率。检查总督 perk（`CitizenMilitia`、`Drills`、`SevenVeterans`）、文化 feat（`BattanianMilitiaFeat`）、建筑效果（`MilitiaVeterancyChance`）和政策（`LandGrantsForVeteran` +10%）。`DefaultSettlementMilitiaModel.cs:31` |
| `void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)` | 返回 0.5 / 0.5 的近战/远程比例。`DefaultSettlementMilitiaModel.cs:78` |
| `ExplainedNumber CalculateMilitiaChangeInternal(Settlement settlement, bool includeDescriptions)` | private static。核心算法：基础产出 → 退休消耗 → hearth/繁荣度 → 市场武器 → 政策 → 文化 → 建筑 → perk → issue。`DefaultSettlementMilitiaModel.cs:85` |
| `void GetSettlementMilitiaChangeDueToPerks(Settlement settlement, ref ExplainedNumber result)` | private static。检查总督的 6 个 perk（`SwiftStrike`、`KeepAtBay`、`MerryMen`、`LongShots`、`SlingingCompetitions`、`SevenVeterans`），围城时额外检查 `ArmsDealer`。`DefaultSettlementMilitiaModel.cs:164` |
| `void GetSettlementMilitiaChangeDueToPolicies(Settlement settlement, ref ExplainedNumber result)` | private static。检查 `Citizenship` 政策（+1 民兵）。`DefaultSettlementMilitiaModel.cs:182` |
| `void GetSettlementMilitiaChangeDueToIssues(Settlement settlement, ref ExplainedNumber result)` | private static。通过 `IssueModel.GetIssueEffectsOfSettlement` 查询 `DefaultIssueEffects.SettlementMilitia` 效果。`DefaultSettlementMilitiaModel.cs:192` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public class HardcoreMilitiaModel : DefaultSettlementMilitiaModel
{
    public override int MilitiaToSpawnAfterSiege(Town town)
    {
        // 围城后生成固定 200 民兵
        return 200;
    }

    public override ExplainedNumber CalculateMilitiaChange(
        Settlement settlement, bool includeDescriptions = false)
    {
        ExplainedNumber baseResult = base.CalculateMilitiaChange(settlement, includeDescriptions);
        // 城堡额外 +2 民兵
        if (settlement.IsFortification)
        {
            baseResult.Add(2f, null, null);
        }
        return baseResult;
    }

    public override void CalculateMilitiaSpawnRate(
        Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
    {
        // 80% 近战 / 20% 远程
        meleeTroopRate = 0.8f;
        rangedTroopRate = 1f - meleeTroopRate;
    }
}
```

## 参见

- ↔ 契约：[SettlementMilitiaModel](../SettlementMilitiaModel)
- ↔ 同桶模型：[SettlementFoodModel](../SettlementFoodModel) · [DefaultSettlementFoodModel](../DefaultSettlementFoodModel)
- ↔ 基类机制：[MBObjectBase](../MBObjectBase) · [MBObjectManager](../MBObjectManager)
- ↔ 战役入口：[Campaign](../../campaign/Campaign) · [CampaignGameStarter](../../campaign/CampaignGameStarter)

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
