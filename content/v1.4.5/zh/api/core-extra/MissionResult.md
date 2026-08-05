---
title: "MissionResult"
description: "Mission 结束判定产生的只读战斗结果对象；它连接 MissionLogic 的胜负判断与 Campaign/结果界面的后续结算。"
---

# MissionResult

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class MissionResult`  
**Base:** 无  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/MissionResult.cs`

## 一句话职责

它封装玩家胜负、敌方撤退和 `BattleState`，由 `MissionLogic` 在结束判定时提供，再由 `Mission` 分发给所有 Logic 和下游结算代码。它是结果快照，不是结束 Mission 的命令，也不会直接修改 Campaign 世界或存档数据。

## 心智模型

`MissionResult` 是 **结果快照**，不是结束 Mission 的命令，也不是直接修改 Campaign 世界的 Action。`Mission.CheckMissionEnded` 逐个询问 `MissionLogic.MissionEnded(ref missionResult)`；第一个返回 `true` 的 Logic 提供结果，Mission 保存它并调用所有 Logic 的 `OnMissionResultReady`。

结果属性的 setter 是 private，mod 通常通过构造函数或三个静态工厂创建对象，再在正确的 `MissionLogic` 时机交给 Mission。`BattleResolved` 只根据 `PlayerVictory` 或 `PlayerDefeated` 计算，不是“敌人撤退”字段的别名；`EnemyRetreated` 是额外的结果事实。

## 何时用，何时不用

**适合使用：**

- 在自定义 `MissionLogic.MissionEnded` 中表示已达到胜负条件。
- 在 `OnMissionResultReady(MissionResult)` 中读取最终结果并准备 Campaign 结算或结果显示。
- 使用 `CreateSuccessful`、`CreateDefeated` 或 `CreateDefenderPushedBack` 表达源码已有的三种结果构造路径。

**不要这样用：**

- 不要在结果对象上直接写属性；它们是只读公开状态。
- 不要在 `MissionEnded` 返回 `true` 却留下 `missionResult == null`，也不要在 `OnMissionResultReady` 再次覆盖 Mission 的结果。
- 不要把 `MissionResult` 当作 Campaign `Action.Apply` 的替代品；大地图实体变化仍须走对应 Campaign API。

## 成员说明

| 成员 | 用途与时机 |
|---|---|
| `BattleState` | 记录攻击方/防守方胜负或防守方被击退等战斗状态；在结果准备好后读取。 |
| `BattleResolved` | 当 `PlayerVictory` 或 `PlayerDefeated` 为真时返回真；不要用它推断所有非战斗结束原因。 |
| `PlayerVictory` | 玩家胜利标记，由构造函数或 `CreateSuccessful` 设置。 |
| `PlayerDefeated` | 玩家战败标记，由构造函数或 `CreateDefeated` 设置。 |
| `EnemyRetreated` | 成功结果中额外记录敌人是否撤退；不自动改变敌方 Party。 |
| `MissionResult(BattleState, bool, bool, bool)` | 用完整状态构造快照；调用者必须保证四个值彼此一致。 |
| `MissionResult()` | 创建三个布尔值为 false 的默认对象；不代表已经得出有效胜负。 |
| `CreateSuccessful(IMission, bool)` | 根据 `mission.PlayerTeam.Side` 生成胜利结果，可附带敌方撤退标记。 |
| `CreateDefeated(IMission)` | 根据玩家所在队伍生成战败结果。 |
| `CreateDefenderPushedBack()` | 生成 `DefenderPullBack` 结果，不需要 Mission 参数。 |

## 依赖关系

- **产生者：** [`MissionLogic`](../../mission-ext/MissionLogic) 在 `MissionEnded(ref MissionResult)` 中提供结果。
- **宿主：** [`Mission`](../../mission/Mission) 保存结果，并在 `CheckMissionEnded` 后调用 `OnMissionResultReady`。
- **输入：** `CreateSuccessful` / `CreateDefeated` 读取 [`IMission`](../IMission) 的 `PlayerTeam`；调用时必须仍有有效队伍上下文。
- **下游：** Campaign Mission 组件和结果 UI 读取 `BattleState`、胜负与撤退标记；需要改变 Campaign 世界时仍应调用对应 Action/Behavior。

## 真实示例

下面是 `MissionLogic` 的真实使用方式：条件未满足时返回 `false`；条件满足时在同一次调用中写入结果并返回 `true`。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class MainAgentResultLogic : MissionLogic
{
    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (!Mission.IsDeploymentFinished)
        {
            return false;
        }

        if (Mission.MainAgent == null || !Mission.MainAgent.IsActive())
        {
            missionResult = MissionResult.CreateDefeated(Mission);
            return true;
        }

        return false;
    }

    public override void OnMissionResultReady(MissionResult missionResult)
    {
        bool playerWon = missionResult.PlayerVictory;
        // 在这里准备结果显示或 Campaign 侧结算，不再重写结果。
    }
}
```

源码中的 `CampaignMissionComponent.OnMissionResultReady` 会读取 `PlayerVictory`、`BattleState` 和 `EnemyRetreated`，再更新 `PlayerEncounter` 的战斗结果。这说明结果对象负责传递事实，Campaign 状态变更仍由下游组件完成。

## 风险与崩溃边界

1. `CreateSuccessful` 和 `CreateDefeated` 会读取 `IMission.PlayerTeam.Side`；在没有有效活动 Mission、PlayerTeam 或队伍已进入清理阶段时调用，可能得到空引用或错误结果。
2. `MissionEnded` 返回 `true` 是结果协议的一部分；若没有同步赋值，后续结果显示和 Campaign 结算会消费空状态。
3. `MissionResult()` 的默认布尔值全为 false，只是占位对象，不应被当作玩家战败或成功。
4. `OnMissionResultReady` 发生在 Mission 已确定结果之后，Agent/Team 可能接近清理边界；不要把运行时对象缓存到下一场 Mission。
5. 结果对象不会自动触发金币、关系、领地或存档变化；把它当作世界变更入口会绕过 Campaign 事件和保存契约。

## 导航

- ↑ 父级：[core-extra 模块目录](../)
- ↔ 同级：[`MissionInitializerRecord`](../MissionInitializerRecord) · [`MissionMode`](../MissionMode)
- 结果链：[`Mission`](../../mission/Mission) · [`MissionLogic`](../../mission-ext/MissionLogic) · [`MissionBehavior`](../../mission/MissionBehavior)
- 架构：[开发者路线图](../../../architecture/developer-roadmap) · [崩溃边界](../../../architecture/crash-boundary) · [文档契约](../../../architecture/doc-contract)
