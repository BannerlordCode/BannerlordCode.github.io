---
title: "Team"
description: "Mission 中持有 Agent、Formation、阵营关系与指挥状态的战斗队伍；它是任务运行时的所有权边界，不是可保存的战役实体。"
---

# Team

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public class Team : IMissionTeam`  
**基类/契约：** [`IMissionTeam`](../../core-extra/IMissionTeam)  
**源文件：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Team.cs`

## 一句话定位

在一场 Mission 内把同一阵营的 Agent、Formation、订单、AI、队伍关系和查询缓存组织成一个可被 Mission 驱动的运行时队伍，并把成员迁移、敌我同步、战术查询和结束清理保持在同一所有权边界内。

## 心智模型

`Team` 位于 Mission 层。它由 `Mission.Teams` 创建并持有，通常代表攻击方、防守方、玩家队伍、敌方队伍或同盟队伍；`Campaign` 和存档系统不持有它。创建队伍时，`TeamCollection.Add` 建立原生 `MBTeam`、初始化普通和特殊 Formation，再设置攻击/防守、玩家和敌对关系。Mission 结束时会清空队伍、Formation 和原生句柄，因此 Team 只能在当前 Mission 生命周期内使用。

把它看成“运行时所有权树”的一层：Team 持有 Agent 集合和 Formation 集合，Formation 再持有编队中的 Agent；TeamAI、`QuerySystem` 和 `DetachmentManager` 消费这棵树维护战术状态。不要把 Team 当作 `Kingdom` 或 `Clan` 之类的持久派系，也不要在构造函数里手动 new 一个 Team 来代替 `Mission.Teams.Add`。

## 何时使用，何时不要使用

**适合使用：**

- 在 `MissionBehavior` 的初始化、tick 或 Agent 回调中读取玩家队伍、敌方队伍、Formation 和活动 Agent。
- 需要判断队伍关系、读取战斗侧别、给 Formation 下订单、读取 Team 查询数据时。
- 在真实 Mission 工厂或运行中的 Mission 中通过 `Mission.Current.PlayerTeam`、`PlayerEnemyTeam`、`AttackerTeam`、`DefenderTeam` 获取已存在的队伍。

**不要使用：**

- 不要用 Team 保存战役状态；应保存角色、派系或编队意图的稳定 ID，在新 Mission 中重新取得 Team。
- 不要直接编辑 `ActiveAgents`、`TeamAgents` 或 Formation 列表；Agent 的 `SetTeam` 和 `Formation` setter 负责双向引用、原生同步及缓存失效。
- 不要在 Mission 结束、没有有效 `Mission.Current` 或后台线程中 tick、清空或迁移 Team。
- 不要用 Team 改战役外交；战争、关系和金钱应走 Campaign 的 Action/Behavior 管线。

## 创建、持有与结束

`Mission.Teams.Add(BattleSideEnum.Attacker, ...)` 或相应的防守入口由 Mission 组件调用。`TeamCollection.Add` 会建立 native team，构造 `Team`，初始化 Formation，并触发 `OnAddTeam`/`AfterAddTeam` 等 Mission 生命周期回调。公开构造函数不是 mod 的常规创建入口；直接构造会绕过 Mission 的队伍集合和关系初始化。

运行期 `Mission.EndMission` 会调用 `Teams.Clear()`，清除 Formation、角色引用和原生队伍。`Team.Invalid` 是给 Agent 或引擎表示“没有有效队伍”的哨兵，不是可以加入普通 Formation 的真实队伍。使用任何 Team 前先检查 `team != null && team.IsValid`，并让当前 Mission 决定它的寿命。

## 关键成员与副作用

### 身份、阵营与关系

- `Mission` 是宿主；`Side`、`IsAttacker`、`IsDefender`、`TeamSide` 描述战斗位置，不等同于 Campaign 的派系身份。
- `IsPlayerTeam`、`IsPlayerAlly`、`IsPlayerGeneral`、`IsPlayerSergeant` 描述当前 Mission 的玩家角色，可能随 Mission 模式和角色分配变化。
- `IsEnemyOf`、`IsFriendOf` 用于读取关系；`SetIsEnemyOf` 还会更新关系并在需要时进行 multiplayer 同步。不要只改自己的缓存。
- `Color`、`Color2`、`Banner` 是场上显示/身份数据；它们不是存档中的 Campaign 归属。

### Agent 与 Formation 集合

- `ActiveAgents` 只反映当前仍在活动状态的 Agent；死亡、移除或转队会改变它。
- `TeamAgents` 是队伍当前登记的 Agent 集合；它与 `ActiveAgents` 的生命周期和数量并不相同。
- `FormationsIncludingEmpty` 包含普通编队，即使暂时没有单位；`FormationsIncludingSpecialAndEmpty` 还包含特殊编队。
- `GetFormation(FormationClass)` 是按编队类别取得现有 Formation 的入口。不要通过索引猜测不同 Mission 模式的编队用途。
- `Leader`、`Heroes`、`GeneralAgent`、`GeneralsFormation` 和 `BodyGuardFormation` 只在相应角色已分配时有意义，结束阶段可能变成 null 或无效引用。

### 指挥、AI 与查询

- `MasterOrderController`、`PlayerOrderController` 和 `SetCustomOrderController` 管理订单来源；替换控制器会改变订单分发和 multiplayer 行为。
- `TeamAI`、`AddTeamAI`、`DelegateCommandToAI` 和 `ResetTactic` 负责 AI 接管，不应在每帧重复添加同一组件。
- `QuerySystem` 提供单位数量、位置、力量、敌我比例和伤亡等战术查询。其值来自有过期策略的 `QueryData` 缓存，不是线程安全的逐帧快照。
- `DetachmentManager` 管理脱离队形的单位和目标；Formation/Agent 迁移必须让它收到对应的添加、移除和 detachment 回调。

### 时序与清理

- `Tick(float dt)` 由 Mission 的 tick 顺序调用；不要手动调用来“补帧”。Mission 会先处理 Agent，再处理队伍和 Formation。
- `OnAgentRemoved`、`OnMissionEnded`、`Reset`、`Clear` 是清理边界。回调后不要继续把旧 Agent 或 Formation 放进跨场景集合。
- `OnFormationsChanged`、`OnFormationsChangedInDeployment` 和 `OnFormationAIActiveBehaviorChanged` 是运行时观察入口；订阅者应在 Mission 结束前解除自己的外部引用。

## 依赖图

- **宿主与上游：** [`Mission`](../../mission/Mission) 创建并持有 Team；[`MissionBehavior`](../../mission/MissionBehavior) 是 mod 通常接入 Team 的时序边界。
- **成员下游：** [`Agent`](../../mission/Agent) 通过 `SetTeam` 加入或离开；[`Formation`](../../mission/Formation) 按编队持有 Agent 并消费 Team 的订单。
- **战术系统：** [`TeamQuerySystem`](../TeamQuerySystem)、[`TeamAIComponent`](../TeamAIComponent) 和 [`TeamCollection`](../TeamCollection) 分别提供查询、AI 和队伍集合管理。
- **规则下游：** [`MissionLogic`](../MissionLogic) 会通过 Team/Formation 判断胜负、撤退和结果；不要在 Team 内直接结束 Campaign。
- **模块入口：** [`MBSubModuleBase`](../../core/MBSubModuleBase) 负责模块生命周期，但不能在没有 Mission 的阶段取得有效 Team。

## 真实获取示例

下面的 MissionBehavior 在 Mission 初始化后读取真实的玩家队伍和步兵 Formation。它没有构造 Team，也没有直接维护 Agent 集合；`SetControlledByAI` 只在该 Mission 的初始化窗口执行一次。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class TeamInspectionBehavior : MissionBehavior
{
    protected override void OnBehaviorInitialize()
    {
        Team playerTeam = Mission.PlayerTeam;
        if (playerTeam == null || !playerTeam.IsValid)
        {
            return;
        }

        Formation infantry = playerTeam.GetFormation(FormationClass.Infantry);
        if (infantry != null && infantry.IsAIControlled)
        {
            infantry.SetControlledByAI(false);
        }
    }
}
```

要读取运行中的敌我关系，应在 Mission 回调中取得两边的真实对象，并使用关系方法：

```csharp
public sealed class EnemyTeamObserver : MissionBehavior
{
    protected override void OnMissionTick(float dt)
    {
        Team playerTeam = Mission.PlayerTeam;
        Team enemyTeam = Mission.PlayerEnemyTeam;
        if (playerTeam != null && enemyTeam != null && playerTeam.IsEnemyOf(enemyTeam))
        {
            int activeEnemies = enemyTeam.ActiveAgents.Count;
            if (activeEnemies == 0)
            {
                OnEnemyTeamDepleted();
            }
        }
    }

    private void OnEnemyTeamDepleted()
    {
    }
}
```

## 风险与崩溃边界

1. **跨 Mission 持有：** Team、Agent、Formation、原生 `MBTeam` 和 QuerySystem 都是 Mission 运行时对象。存档或 Campaign 行为只能保存稳定标识，读档后重新进入 Mission 再获取它们。
2. **错误创建方式：** 直接 new Team 会跳过 TeamCollection 的原生句柄、Formation、关系和角色初始化，可能导致空引用或不一致的 native 状态。
3. **绕过反向引用：** 直接向队伍列表或 Formation 列表写入 Agent，会漏掉 `Agent.SetTeam`、`Agent.Formation`、Detachment、QuerySystem 和网络同步；使用正式 setter 或 Team/Formation 操作。
4. **错误阶段 tick：** Mission 结束后调用 `Tick`、`Clear` 或读取 QuerySystem，可能访问已清空的原生对象；把逻辑放在 `MissionBehavior` 的有效生命周期内。
5. **线程与网络：** Mission 会并行处理部分 Agent，但 Team/Formation 更新仍受 Mission 线程和 native 状态约束。跨线程修改队伍关系或在 multiplayer 中省略 `sync` 会造成不同步。
6. **缓存误判：** QuerySystem 的过期策略意味着连续读取可能得到缓存值；不要把它当作精确的伤亡事件，也不要从自己的查询回调同步写回队伍状态。

## 版本注记

1.4.5 的 Team 仍是 `TaleWorlds.MountAndBlade` 的 Mission 运行时对象；1.3.15 也使用 Team/Formation/Agent 关系，但具体 TeamAI、查询缓存和 multiplayer 事件成员可能随模块版本变化。跨版本 mod 应以编译目标版本的 `Team.cs` 和对应 Mission 工厂为准，不要把 Campaign 持久化对象与 Team 混用。

## 参见与双向导航

- ↑ 父级模块：[Mission extensions API](../)
- ↔ 同级：[TeamQuerySystem](../TeamQuerySystem) · [TeamCollection](../TeamCollection) · [TeamAIComponent](../TeamAIComponent)
- ↓ 编队与成员：[Formation](../../mission/Formation) · [Agent](../../mission/Agent)
- 上游/时序：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionLogic](../MissionLogic)
- 任务入口：[MBSubModuleBase](../../core/MBSubModuleBase)
- 文档契约：[Doc Contract](../../../architecture/doc-contract)
