---
title: "DefaultSettlementMilitiaModel"
description: "默认据点民兵增长、老兵概率和攻城后补充规则的源码驱动实现。"
---
# DefaultSettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`  
**Base:** [`SettlementMilitiaModel`](../SettlementMilitiaModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`（1.4.5 权威源码；1.3.15 同名实现）

## 一句话职责

`DefaultSettlementMilitiaModel` 将据点类型、当前民兵、村庄 hearth、城镇繁荣、低忠诚反叛状态、市场销售、建筑、政策、总督 Perk 和问题转换成民兵结果，并提供攻城后补充和生成分布。它不直接写民兵状态或名册。

## 心智模型

每日变化是一个增量模型：城堡/城镇基准为 `2`，村庄基准为 `0.5`，当前民兵按 `-2.5%` 回收，村庄再加 `Hearth / 400`，城镇再加 `Prosperity / 1000`。城镇还读取市场中具有民兵属性的商品销售记录，反叛城镇会根据忠诚阈值增加民兵增长。建筑、政策、Perk 和问题最后继续叠加到 `ExplainedNumber`。

攻城胜利补充、每日变化、老兵概率和近战/远程比例分别由四个公开方法承担。`Town.DailyTick`、`MilitiasCampaignBehavior` 和 `Settlement` 负责把结果应用到 `Settlement.Militia` 或民兵队伍；Model 内没有这些状态的所有权。

## 依赖关系

| 类型/流程 | 关系 |
| --- | --- |
| [`SettlementMilitiaModel`](../SettlementMilitiaModel) / [`GameModels`](../GameModels) | 提供抽象契约和注册后的访问入口。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | 提供据点类别、当前民兵、繁荣、hearth、忠诚和文化。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 提供反叛状态阈值和 `MilitiaBoostPercentage`。 |
| `MilitiasCampaignBehavior` | 在新游戏和攻城结束时应用结果。 |
| `DefaultPolicies`、建筑、Perk 和 `IssueModel` | 作为解释项加入每日民兵变化。 |

## 默认公式锚点

| 分支 | 1.4.5 行为 |
| --- | --- |
| `MilitiaToSpawnAfterSiege` | 返回 `2 * (45 + MBRandom.RandomInt(10))`，因此是随机的攻城后补充。 |
| 基础变化 | 城堡/城镇 `+2`；村庄 `+0.5`。 |
| 当前民兵回收 | `-0.025 * settlement.Militia`，说明名为 `Retired`。 |
| 村庄输入 | `Village.Hearth / 400`。 |
| 城镇输入 | `Town.Prosperity / 1000`；市场 `BonusToMilitia` 销售记录每件 `+0.2`。 |
| 反叛低忠诚 | 用 `SettlementLoyaltyModel.RebelliousStateStartLoyaltyThreshold` 映射，并乘 `MilitiaBoostPercentage`。 |
| 政策与文化 | `Citizenship +1`；城镇 `Serfdom -1`、`Cantons +1`；文化特性可继续加成。 |
| 生成比例 | `meleeTroopRate = 0.5f`，`rangedTroopRate = 0.5f`。 |

`CalculateVeteranMilitiaSpawnChance` 还读取总督的 `CitizenMilitia`、`Drills`、`SevenVeterans`，Battanian 民兵文化特性、城镇建筑和 `LandGrantsForVeteran` 政策。`CalculateMilitiaChange` 在城堡或城镇继续加入建筑、政策、Perk 和问题效果；村庄不会走这些城镇分支。

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

SettlementMilitiaModel model = Campaign.Current.Models.SettlementMilitiaModel;
Town town = Town.AllTowns.FirstOrDefault();
if (town != null)
{
    Settlement settlement = town.Settlement;
    ExplainedNumber change = model.CalculateMilitiaChange(settlement, includeDescriptions: true);
    model.CalculateMilitiaSpawnRate(settlement, out float meleeRate, out float rangedRate);
    int postSiege = model.MilitiaToSpawnAfterSiege(town);
}
```

若要保留 vanilla 公式并增加一个因素，应在 `InitializeGameStarter` 中注册派生类，并在重写方法中调用 `base` 后再追加自己的 `ExplainedNumber` 项。不要从 `Campaign.Current.Models.SettlementMilitiaModel` 读取“原实现”，因为该属性可能已经指向替换类。

## 风险与版本边界

- `MilitiaToSpawnAfterSiege` 使用随机数；不要在预览路径反复调用并把结果保存成确定状态。
- `CalculateMilitiaChange` 只返回每日增量；重复由 Behavior 应用会把民兵增长放大。保存字段属于 `Settlement`，不是该 Model。
- 反叛、市场销售、建筑和政策分支跨越忠诚、经济和据点系统；改动增长公式必须回归这三个下游。
- `CalculateVeteranMilitiaSpawnChance` 的结果会被 `MBRandom.RandomFloat` 消费；返回超出有效概率范围的值会改变生成稳定性。
- 本页以 1.4.5 source 为权威；1.3.15 的随机范围和模块注册顺序要以目标安装包复核。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementMilitiaModel](../SettlementMilitiaModel)
- [相关：SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementEconomyModel](../SettlementEconomyModel)
- [执行边界：Actions](../actions)
