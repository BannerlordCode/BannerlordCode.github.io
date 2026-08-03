---
title: "CombatSimulationModel"
description: "计算地图战斗优势、模拟命中、围城进度和追击时序，不持有 MapEvent 状态。"
---
# CombatSimulationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class CombatSimulationModel : MBGameModel<CombatSimulationModel>`  
**Base:** `MBGameModel<CombatSimulationModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatSimulationModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultCombatSimulationModel.cs`

## One-line job

`CombatSimulationModel` 为地图战斗提供伤害、战斗优势、围城器械、模拟 tick、追击回合和钝击概率策略。它计算输入，不创建或结束 `MapEvent`。

## Mental Model

`MapEvent` 持有战斗双方和生命周期。模拟回合中它询问 Model 的优势和命中结果，再由自身应用伤亡、士气、奖励和完成事件。围城代码也使用同一 Model 计算城镇优势和器械进度。Model 可以读取队伍、单位、船和城镇，但变更属于 `MapEvent`、Action 和战斗行为。

```text
MapEvent / parties / troops / siege
        -> Campaign.Current.Models.CombatSimulationModel
        -> advantage / hit / tick / pursuit queries
        -> MapEvent 应用伤亡和结果 -> rewards / events
```

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 持有模拟策略。 |
| [`MapEvent`](../../campaign/MapEvent) | 持有双方、士气、回合和完成状态。 |
| [`PartyBase`](../../campaign/PartyBase) / `CharacterObject` | 提供单位和队伍输入。 |
| [`SiegeEvent`](../SiegeEvent) / [`Settlement`](../../campaign/Settlement) | 提供围城上下文。 |

### Downstream

| Type | Relation |
| --- | --- |
| `MapEvent` | 调用 `SimulateHit`、优势、tick 和追击方法。 |
| `BesiegerCamp` | 使用城镇优势和器械进度。 |
| [`BattleMoraleModel`](../../mission-ext/BattleMoraleModel) | 在 Mission 层单独处理士气。 |
| Battle reward Actions | 在事件完成后应用结果。 |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `SimulateHit` | 返回单位或船战斗的解释伤害。 | 地图战斗回合 |
| `GetBattleAdvantage` | 解释攻击方和防守方优势。 | 回合开始 |
| `GetSimulationTicksForBattleRound` | 安排双方下一次模拟 tick。 | 地图时钟 |
| `GetPursuitRoundCount` | 决定胜利后的追击回合。 | 战斗结束 |
| `GetSettlementAdvantage` | 计算围城防守方优势。 | 围城 tick |

## Real access path

```csharp
public ExplainedNumber Simulate(MapEvent battle, CharacterObject attacker,
    CharacterObject defender, PartyBase attackerParty, PartyBase defenderParty)
{
    CombatSimulationModel model = Campaign.Current.Models.CombatSimulationModel;
    (int attackerTicks, int defenderTicks) = model.GetSimulationTicksForBattleRound(battle);
    return model.SimulateHit(attacker, defender, attackerParty, defenderParty,
        strikerAdvantage: 0f, battle, strikerSideMorale: 50f, struckSideMorale: 50f);
}
```

`MapEvent` 会继续应用伤亡并调用追击回合；调用者不能再次应用同一份伤害。

## 风险与调试顺序

1. 不要在 Model 返回命中后再次手动扣伤亡，避免双重结算。
2. tick 间隔必须为正，否则战斗可能卡死或无限循环。
3. 围城优势会影响 AI 和器械进度，不只是显示数字。
4. 地图模拟不是 Mission 战斗，不能在这里调用 Agent 专用 API。
5. 新版本的海上输入应通过当前默认实现保留。

## Navigation

- [Campaign-ext models family](../models/)
- [MapEvent](../../campaign/MapEvent)
- [SiegeEvent](../SiegeEvent)
- [PartyBase](../../campaign/PartyBase)
- [BattleMoraleModel](../../mission-ext/BattleMoraleModel)
