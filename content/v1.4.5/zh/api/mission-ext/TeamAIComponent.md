---
title: "TeamAIComponent"
description: "绑定单个 Team 的 Mission 内战术 AI：管理战术选择、接收编队回调，并在战斗运行期间驱动编队行为。"
---
# TeamAIComponent

**Namespace：** `TaleWorlds.MountAndBlade`
**Module：** `TaleWorlds.MountAndBlade`
**Type：** `public abstract class TeamAIComponent`
**Base：** 无
**源码：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## 一句话职责

`TeamAIComponent` 是一个 `Team` 在当前 `Mission` 中的战术控制器：它持有战术状态和战术区域，接收编队级通知，并按时机让当前战术/行为决定队伍下一步如何行动。

## 心智模型

它是战斗运行时组件，不是 `Agent` 组件，也不是战役对象或存档对象。具体子类会为当前战斗模式创建，绑定一个 `Mission` 和一个 `Team`，然后安装到 `Team.TeamAI`。`Mission` 通过 `Team` 间接拥有它；只有在 Mission 允许 AI tick 且队伍仍有 bot 时，`Team.Tick` 才会驱动它。

受保护构造函数接收所属 `Mission`、所属 `Team` 以及思考/应用计时器间隔。Mod 通常不应直接调用这个构造函数，也不应 `new TeamAIComponent(...)`。应从仍在运行的 Team 读取实例，或通过战斗 Mission controller 的 `GetTeamAI(...)` 路径提供具体子类。

当前 `TacticComponent` 是战术状态机边界。切换当前战术可能取消旧战术、应用新战术并执行一次偶发 tick。添加战术选项只改变候选集合，不会自动选择或应用该战术。

## 适合使用的场景

- 在 Mission 行为中读取 `Mission.Current.AttackerTeam?.TeamAI` 或 `Mission.Current.DefenderTeam?.TeamAI`，观察当前战场 AI。
- 只有当战斗 controller 确实是正确扩展点时，才实现或替换具体的 `TeamAIComponent`。标准路径是覆盖 `BaseBattleMissionController.GetTeamAI(...)`，再由 `Team.AddTeamAI(...)` 安装。
- 在负责战斗设置或战术决策的阶段调用战术区域和战术选项方法，并始终在 Mission 线程、所属 Team 的生命周期内操作。
- 在具体子类中覆盖生命周期回调，把部署完成、编队 frame 变化、空编队首次加入单位和 Mission 清理作为明确的 AI 时机。

## 不适合使用的场景

- 不要用它修改战役队伍、Hero、Settlement 或存档。那些操作应使用战役 Action、Model 或存档契约。
- 不要把它当作每个 Agent 的状态容器。Agent 生命周期和死亡回调属于 `Agent`、`MissionBehavior` 以及相应的 `Formation` 路径。
- 不要假设 `TeamAI.Tick` 每帧运行。当 `Mission.AllowAiTicking` 为 false、Team 没有 bot，或 Team 进入撤退路径时，`Team.Tick` 会跳过正常 AI 路径。
- 不要把 `OnMissionEnded()` 当作组件已经解除的证明。方法确实存在，但当前 `Mission.EndMissionInternal` 清理路径清空 Teams 时，没有证据表明会自动经过 `Team.OnMissionEnded()`。
- 不要把 `TeamAIComponent`、`TacticComponent`、`Mission` 或战术区域写入存档。它们属于 Mission 运行时，新 Mission 必须重新获取。

## 创建、安装与 tick 链

源码中存在两条安装路径，不能把它们写成一条必然的调用顺序：

- **战斗 controller 路径：** `BaseBattleMissionController.AfterStart` 创建进攻方/防守方 Team；它的 `GetTeamAI(...)` 路径提供具体 AI，再通过 `Team.AddTeamAI(...)` 安装。
- **Combatants logic 路径：** `MissionCombatantsLogic.EarlyStart` 按战斗模式选择 `TeamAIGeneral`、攻城 AI 或 Sally Out AI 等具体实现，并在该路径安装。

两条路径最终都汇入 `Team.AddTeamAI(...)` 的副作用：替换 `Team.TeamAI`，初始化 detachments 和 Mission-specific behaviors，调用 `ResetTactic()`，让已有非空编队先 tick 一次，最后调用 `TickOccasionally()`。设置完成后，`Mission` 先 tick Agent，再 tick Team；`Team.Tick` 可能驱动已安装的 AI，随后处理 detachments 和非空编队。

这一步不是普通属性赋值。安装第二个 AI 会改变该 Team 所有编队的控制权，只应由战斗设置的所有者执行。

```csharp
using TaleWorlds.MountAndBlade;

public sealed class TeamAiReadoutBehavior : MissionBehavior
{
    public override void AfterStart()
    {
        Mission mission = Mission.Current;
        if (mission == null)
        {
            return;
        }

        Team team = mission.PlayerTeam;
        if (team == null)
        {
            return;
        }

        TeamAIComponent teamAI = team.TeamAI;
        if (teamAI == null)
        {
            return;
        }

        teamAI.CheckIsDefenseApplicable();
        bool defenseCanBeUsed = teamAI.IsDefenseApplicable;
    }
}
```

这个示例在 Mission 已拥有 Team 后读取运行时 AI。它没有实例化抽象组件、替换 Team 的 AI，也没有假设某个具体子类。

## 生命周期回调

| 成员 | 用途与时机 | 副作用与边界 |
|---|---|---|
| `OnDeploymentFinished()` | Mission 部署结束时运行，早于 Mission 转发相应 behavior 回调。用于完成依赖部署结果的战术初始化。 | 部署完成前不要读取只在部署阶段存在的对象。 |
| `OnUnitAddedToFormationForTheFirstTime` | 编队从空变为非空时运行。它表示首次跨过“有单位”边界，不是每个 Agent 加入已有编队都触发。 | `Formation`、所属 Team 和 Mission 必须仍然有效。 |
| `OnFormationFrameChanged(Agent, bool, WorldPosition)` | 接收 Agent 的编队 frame 变化，用于更新依赖编队定位的 AI 状态。 | Agent 可能正在离开编队；继续引用前应检查 Agent 和所属 Formation。 |
| `OnMissionEnded()` | 预留给 AI 的结束清理。当前源码没有证明 Mission teardown 会通过 `Team.OnMissionEnded()` 自动到达这里。 | 实现会停止活跃编队正在使用的 machine，但不能代替 Mod 自己负责的显式清理。 |
| `TickOccasionally()` | 按 AI 的偶发计时器运行，不是无条件的每帧回调；安装后 `Team.AddTeamAI` 会调用一次。 | 可能在常规 Team tick 稳定前运行，不应把它当作通用 Mission 更新钩子。 |
| `ResetTacticalPositions()` | 重新扫描当前 Mission 的 `TacticalPosition` 和 `TacticalRegion` mission objects。战术切换需要刷新战术几何时会使用它。 | 它读取 `Mission.ActiveMissionObjects`，只能在该 Mission 仍有效时调用。 |
| `OnTacticAppliedForFirstTime()` | 当 `GetIsFirstTacticChosen` 仍为 true 时，由 `TacticComponent.TickOccasionally()` 调用；它把首次应用标记为已处理。 | 它只改变首次战术标记，不会自己选择战术或应用编队命令。 |
| `IsCurrentTactic(TacticComponent)` | 按引用比较传入战术与 `CurrentTactic`，供战术判断自己是否仍拥有 Team。 | 它只是状态查询，不会刷新或切换战术。 |
| `NotifyTacticalDecision(in TacticalDecision)` | 将战术决定送入 AI 的通知路径。 | 这是运行时通知，不是战役事件或存档事件。 |

## 战术状态与选项

### 战术位置、区域与战略区域

`TacticalPositions` 和 `TacticalRegions` 在构造期间从当前 Mission 的 mission objects 收集，描述这个 AI 可用的战术几何。`StrategicAreas` 与 `HasStrategicAreas` 表示当前为 Team 注册的动态战略区域。

`AddStrategicArea`、`RemoveStrategicArea` 和 `RemoveAllStrategicAreas` 修改 AI 当前的战术集合。它们不会创建战役 Settlement，也不会持久化区域。应在 Mission 拥有对应 `StrategicArea` 时使用，并在所属战术阶段结束时移除。

### 战术选项与选择

- `AddTacticOption(TacticComponent)` 将具体战术加入候选列表；不会单独选择它。
- `RemoveTacticOption(Type)` 按精确运行时类型移除。传入基类并不表示移除所有派生战术。
- `ClearTacticOptions()` 清空当前候选列表。清空候选项本身不会自动完成当前战术切换的全部清理。
- `ResetTactic(bool keepCurrentTactic = true)` 重置战术选择。传入 `false` 时会取消当前战术并允许重新选择，因此可能立即触发应用和偶发 tick 副作用。
- `CheckIsDefenseApplicable()` 重新计算 `IsDefenseApplicable` 使用的防守判断。它是刷新查询，不是直接发出防守命令。
- `GetIsFirstTacticChosen` 表示首次战术选择阶段是否完成，不应理解为战斗此后永远固定一个战术。

`CurrentTactic` 由 AI 管理，而不是供 Mod 随意写入的普通字段。替换时会调用旧战术的取消路径、应用新战术，并可能触发偶发 tick。应使用具体 controller 的重置/选择路径，不要绕过 AI 直接交换状态。

### 战术决定通知

`OnNotifyTacticalDecision` 是 delegate 风格的通知钩子。监听者应在有限生命周期内使用 `+=` 订阅、`-=` 解除。直接赋值会覆盖已有监听者，可能静默断开游戏或其他 Mod 的战场协调。`NotifyTacticalDecision` 只报告决定，并不会自己应用编队命令。

## 依赖关系

**上游**

- [`Mission`](../../mission/Mission) 拥有当前战斗，并决定是否允许 AI tick。
- [`Team`](../Team) 持有组件，并调用 Team 级安装与 tick 路径。
- [`MissionLogic`](../MissionLogic) 和战斗 controller 选择具体 AI 与战术选项。
- [`MissionTime`](../MissionTime) 为计时器驱动的行为提供 Mission 时间基准。
- [`StrategicArea`](../StrategicArea) 提供动态战术区域。
- [`TacticComponent`](../TacticComponent) 定义 AI 应用的战术状态。

**下游**

- [`Formation`](../../mission/Formation) 接收 AI 的编队决策，并报告首次加入单位和 frame 变化。
- [`Agent`](../../mission/Agent) 是编队 frame 回调引用的单位，但不由本组件持有。
- [`TeamAIGeneral`](../TeamAIGeneral) 和 [`TeamAISiegeComponent`](../TeamAISiegeComponent) 是不同战斗模式的具体 AI 家族。
- [`BehaviorFlank`](../BehaviorFlank) 与 [`BehaviorSergeantMPMounted`](../BehaviorSergeantMPMounted)，以及 detachments、攻城 machine 和 Sally Out controller 消费战术决定与战术区域。

## 失败与崩溃边界

1. **AI 尚未安装：** 设置阶段或不使用该控制器的 Team 上，`Team.TeamAI` 可能为 null。调用成员前先保护读取结果。
2. **阶段错误：** 子类如果假定部署对象、编队或攻城 machine 已存在，却在构造或部署前被调用，可能失败。阶段检查应在子类中完成。
3. **替换 AI：** 第二次 `AddTeamAI` 会替换 Team controller 并改变所有编队的控制权。如果替换方没有清理旧战术、detachments 或委托订阅，旧状态可能继续存活。
4. **回调生命周期：** Agent 和 Formation 引用只在当前 Mission 内有效。不要把它们排队交给战役代码或写入存档。
5. **误判 teardown：** 当前源码路径不能把 `OnMissionEnded()` 当作可靠的自动释放信号。应使用自己的 Mission behavior 显式清理，并在 Mission 开始 teardown 后停止观察 Team。
6. **覆盖 delegate：** 把通知 delegate 直接赋值而不是订阅，可能移除游戏已有监听者，导致战术协调异常而不是立刻抛出错误。
7. **错误更新钩子：** 偶发 tick 和正常 AI tick 受 Mission/Team 计时器及 AI 条件控制。需要无条件 Mission 回调时应使用 `MissionBehavior`，不要强行驱动 Team AI。

## 版本说明

本文描述 1.4.5 的 `TaleWorlds.MountAndBlade` 实现。旧版本的具体战斗 controller 和战术子类可能不同，但生命周期契约保持一致：从当前 Mission 的 Team 获取，通过战斗设置路径安装，绝不跨 Mission 保存组件。

## 导航

- [↑ 父级：Mission 扩展 API](../)
- [↔ 同级：Team](../Team)
- [↔ 同级：TeamQuerySystem](../TeamQuerySystem)
- [相关：Mission](../../mission/Mission)
- [相关：Formation](../../mission/Formation)
- [相关：TacticComponent](../TacticComponent)
