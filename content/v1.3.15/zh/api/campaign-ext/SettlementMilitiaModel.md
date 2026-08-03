---
title: "SettlementMilitiaModel"
description: "定义据点民兵日变化、攻城后补充、老兵概率和兵种生成比例的可替换模型契约。"
---
# SettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`  
**Base:** `MBGameModel<SettlementMilitiaModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`  
**Default:** [`DefaultSettlementMilitiaModel`](../DefaultSettlementMilitiaModel)

## 一句话职责

`SettlementMilitiaModel` 回答据点每天增加多少民兵、围城结束后补多少、生成的民兵中有多少机会成为老兵以及近战/远程比例。它提供计算结果，不直接修改 `Settlement.Militia` 或名册。

## 心智模型

`Town.MilitiaChange`、`Village.MilitiaChange` 和 `Settlement` 的民兵生成路径都会从 `Campaign.Current.Models.SettlementMilitiaModel` 读取结果。`Town.DailyTick` 或 `MilitiasCampaignBehavior` 随后把变化写入据点状态；`Settlement.AddMilitiasToParty` 才按比例选择文化兵种并写入民兵队伍。因此四个方法分别服务于每日变化、攻城事件、生成质量和生成分布，不能把 `CalculateMilitiaChange` 当成名册操作。

## 依赖与消费链

| 类型/流程 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) / [`GameModels`](../GameModels) | 持有注册的民兵策略。 |
| [`Settlement`](../../campaign/Settlement) / [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | 提供据点类型、民兵、繁荣、炉灶、忠诚和文化输入。 |
| [`DefaultSettlementMilitiaModel`](../DefaultSettlementMilitiaModel) | 提供 vanilla 的基准、建筑、政策、Perk 和问题公式。 |
| `MilitiasCampaignBehavior` | 在新游戏初始化和攻城结束时应用模型结果。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 反叛城镇的低忠诚阈值和民兵倍率来自该模型。 |

## 公共契约

| 成员 | 真实职责 | 典型调用时机 |
| --- | --- | --- |
| `MilitiaToSpawnAfterSiege(Town)` | 返回胜利攻城后要加入的民兵数量；默认实现包含随机性。 | `AfterSiegeCompletedEvent` |
| `CalculateMilitiaChange(Settlement, bool)` | 返回每日民兵变化，并可保留 `ExplainedNumber` 说明。 | `Town.DailyTick`、村庄 tick、预览 |
| `CalculateVeteranMilitiaSpawnChance(Settlement)` | 返回生成老兵民兵的概率型解释结果。 | 新民兵加入队伍时 |
| `CalculateMilitiaSpawnRate(Settlement, out float, out float)` | 返回近战与远程民兵的比例，两个输出应构成有效分布。 | `Settlement` 生成民兵时 |

## 真实获取路径

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
    ExplainedNumber veteranChance = model.CalculateVeteranMilitiaSpawnChance(settlement);
    model.CalculateMilitiaSpawnRate(settlement, out float meleeRate, out float rangedRate);
    int siegeReinforcement = model.MilitiaToSpawnAfterSiege(town);
}
```

查询代码只能用于预览或自定义 Behavior。要替换规则，应在启动阶段通过 `IGameStarter.AddModel` 注册 `SettlementMilitiaModel` 的实现，而不是在 `DailyTick` 中临时创建 Model。

## 风险与版本边界

- `CalculateMilitiaChange` 返回增量；实际写入由 `Town.DailyTick`、村庄流程或 Behavior 完成，重复应用会快速放大民兵。
- `MilitiaToSpawnAfterSiege` 可能使用随机数，不适合在 UI 每帧预览后再把预览值当成确定结果。
- 生成比例必须是可解释且非负的有效分布；错误的 `out` 值会改变文化兵种构成，甚至在生成循环中产生异常数量。
- 忠诚、繁荣、建筑、政策和问题模型都会间接影响民兵；修改一个 Model 时要检查同一每日 tick 的完整链路。
- 本页公共契约以 1.4.5 `Bannerlord.Source/bin` 为准；1.3.15 使用前复核目标版本的参数和随机范围。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [默认实现：DefaultSettlementMilitiaModel](../DefaultSettlementMilitiaModel)
- [相关：SettlementLoyaltyModel](../SettlementLoyaltyModel) · [SettlementProsperityModel](../SettlementProsperityModel)
- [执行边界：Actions](../actions)
