---
title: "BaseBattleMissionController"
description: "负责创建攻守双方队伍、安装 TeamAI、判定战斗结果和处理撤退的抽象 MissionLogic 契约；在 1.4.5 源码树中，它不是 SandBox 普通战斗工厂实际使用的控制器。"
---
# BaseBattleMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`  
**Base:** [`MissionLogic`](.././MissionLogic)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BaseBattleMissionController.cs`

## 一句话职责

这是一个抽象的 `MissionLogic` 战斗控制契约：创建攻守两方队伍，为每方选择 `TeamAIComponent`，判定玩家和双方队伍的标准胜负条件，并处理玩家的撤退请求。

## 心智模型

### 它拥有什么

`BaseBattleMissionController` 是 **Mission 层的运行时规则对象**，不是 Campaign 行为、存档对象，也不是通用 AI 服务。预期用法是由 Mission 工厂创建一个具体子类，再把它作为 `MissionBehavior` 挂入 Mission；宿主 `Mission` 负责驱动它的生命周期并轮询它的 `MissionLogic` 回调。

构造函数只接收 `isPlayerAttacker` 并捕获 `Game.Current`，不接收 `Mission`。`Mission` 反向引用要等 `Mission.AddMissionBehavior` 挂载时才赋值，所以构造函数里不要读取 `Mission`、`Teams`、`Agents` 或 `Mission.Current`，这些对象此时不保证存在。

### 当前游戏实际使用的路径

1.4.5 源码树中只有这个抽象声明，没有找到任何直接继承 `BaseBattleMissionController` 的具体类，也没有找到 `new BaseBattleMissionController(...)`。SandBox 普通战斗的 `OpenBattleMission` 实际是在 `MissionState.OpenNew` 工厂委托中创建 [`MissionCombatantsLogic`](../MissionCombatantsLogic)、`BattleDeploymentMissionController` 和其他行为；`MissionCombatantsLogic.EarlyStart` 再根据 `Mission.MissionTeamAITypeEnum` 安装 `TeamAIGeneral`、攻城或突围 AI。

这一区别很重要：本页记录的是 mod 可以有意采用的扩展契约，并不是每个运行中战斗都能取到的对象。普通游戏战斗应查询工厂实际注册的行为。源码树没有定义一个可以统一替换 SandBox 工厂的通用钩子；由 mod 自己拥有的战斗必须提供自己的 `MissionState.OpenNew` 行为委托。

### 生命周期

1. Mission 工厂在 Mission 运行前创建具体子类。
2. `Mission.AddMissionBehavior` 写入宿主 `Mission`，按 `MissionLogic` 分类，并调用 `OnCreated`。
3. Mission 启动时先调用 `EarlyStart`，后调用 `AfterStart`。基类 `AfterStart` 会创建队伍，再设置 `MissionMode.Battle`。
4. Mission 处于 `State.Continuing` 时大约每 0.1 秒轮询 `MissionEnded(ref MissionResult)`；玩家请求离场时调用 `OnEndMissionRequest`。
5. 某个 Logic 产生结果后，Mission 广播 `OnMissionResultReady`、显示结果，随后进入 `EndMissionInternal`。Agent 会被删除和清理，队伍会清空，运行时 Mission 生命周期结束；这些都不是存档/加载生命周期。

## 何时用，何时不用

**适合使用：**

- 你拥有完整的战斗 Mission 工厂，需要基类提供标准的两方队伍创建和结果规则。
- 你要为一个具体战斗控制器覆写 `GetTeamAI`，同时保留基类的胜负和撤退契约。
- 你正在有意替换战斗行为管线，并能保证控制器在 Mission 启动前挂载。

**不适合使用：**

- 只需观察 Agent、命中或场景 tick 时，使用 [`MissionBehavior`](../../mission/MissionBehavior)。
- 需要当前 SandBox 战斗已经安装的 combatant 和 TeamAI 行为时，使用 [`MissionCombatantsLogic`](.././MissionCombatantsLogic) 和当前 Mission 的 `Team`。
- 需要处理 Campaign 状态、金钱、关系、战争或持久化时，把逻辑放在 Campaign 行为和 Action 中；不要在 Mission tick 或结果回调里直接写入存档世界状态。
- 想在队伍和部署已经初始化后再挂载此类时。基类假定自己负责创建队伍，过晚添加可能抛异常或覆盖运行时状态。

## 队伍创建与 AI 契约

### `AfterStart`

覆写先调用 `base.AfterStart()`，然后调用私有的 `CreateTeams()`，最后调用 `Mission.SetMissionMode(MissionMode.Battle, atStart: true)`。`CreateTeams()` 要求 `Mission.Teams` 为空；它创建一个 defender 和一个 attacker 队伍，根据 `IsPlayerAttacker` 设置 `PlayerTeam`，通过 `GetTeamAI` 为双方取得 AI，再用 `Team.AddTeamAI` 安装。

基类的 `CreateTeams` **不会**调用 `SetupTeam`。`SetupTeam` 是 protected 辅助方法：它按 `Team.Side` 调用抽象的攻方/守方部队创建方法，并在该队伍是 `Mission.PlayerTeam` 时调用 `CreatePlayer`。具体控制器必须自行安排部队和部署路径；仅仅继承此类并不会得到完整战斗。

### `GetTeamAI(Team, float, float)`

默认实现返回：

```csharp
new TeamAIGeneral(Mission, team, thinkTimerTime, applyTimerTime)
```

默认 think 计时器为 5 秒，apply 计时器为 1 秒。`TeamAIComponent` 会保存同一个 `Mission` 和 `Team`，扫描活动 Mission 对象，并负责战术与队形决策，因此传入的必须是当前 Mission 的有效 `Team`。

`Team.AddTeamAI` 不只是赋值。它会写入组件、修改队形 AI 控制、初始化 detachments、创建 Mission 专属行为、重置战术、tick 已占用队形，并调用 `TickOccasionally`。重复调用会覆盖旧组件并再次执行这些副作用。

### `SetupTeam`、部队计数与玩家创建

- `SetupTeam(Team)` 根据 `Team.Side` 分派到攻方或守方部队钩子，然后在该队伍是 `Mission.PlayerTeam` 时创建玩家。
- `CreateAttackerTroops()` 和 `CreateDefenderTroops()` 是抽象方法，是具体子类必须实现的部队/部署边界。
- `IncrementDeploymedTroops(BattleSideEnum)` 更新 protected 计数器。这个拼写错误属于源码中的 mod 可见名称；覆盖或反射 API 时不要擅自改名。
- `CreatePlayer()` 从 `Game.Current.ObjectManager` 解析 `main_hero`，用 `AgentBuildData` 生成 Agent、装备初始武器，并写入 `Mission.MainAgent`。只能在队伍和出生帧有效后调用。

## 启动、tick、结果和撤退回调

### `EarlyStart`

当前检查到的 1.4.5 源码实现是：

```csharp
public override void EarlyStart()
{
    EarlyStart();
}
```

这是调用自身，不是调用 `base.EarlyStart()`。应把它当成源码/二进制风险：子类如果调用 `base.EarlyStart()`，会沿着这个自调用无限递归，最终栈溢出。需要此阶段工作的子类应自行实现安全逻辑；在确认实际加载的版本和二进制之前，不要委托回这个基类实现。

### `OnMissionTick(float dt)`

基类覆写只调用 `base.OnMissionTick(dt)`，不会推进 Team AI，也不会更新部署计数。子类可以把它作为 Mission tick 阶段的扩展点，但应检查 `Mission.CurrentState` 和 `IsLoadingFinished`。不要把它当 Campaign tick，也不要在 teardown 后继续保存 Agent 或 Team 引用。

### `MissionEnded(ref MissionResult)`

基类在部署完成前返回 `false`。部署完成后，如果 `MainAgent` 不存在或不活跃，返回失败结果；如果攻方或守方成员数归零，则根据玩家所属方生成胜利或失败结果。

Mission 自己的 `CheckMissionEnded` 会给每个 `MissionLogic` 一个新的 `null` 结果引用，并接受第一个返回 `true` 的 Logic。因此子类必须在返回 `true` 的同一次调用里写入非空 `MissionResult`，条件未完成时必须返回 `false`。不要在此回调里调用 `Mission.EndMission()`，结束状态机属于 Mission。

### `OnEndMissionRequest(out bool canPlayerLeave)`

基类先允许离场。如果玩家仍活着且 `Mission.IsPlayerCloseToAnEnemy()` 为真，就设置 `canPlayerLeave = false`，并通过 `MBInformationManager` 显示 `str_can_not_retreat`。否则，在玩家活着且战斗尚未结束时返回带有 `str_retreat_question` 的 `InquiryData`，确认回调是 `Mission.OnEndMissionResult`。

`Mission.OnEndMissionRequest` 对协议的解释是：`canPlayerLeave == false` 立即拒绝；非空 `InquiryData` 会暂停游戏并显示询问；`true` 加 `null` 让流程继续询问下一个 Logic。返回 `null` 本身不会结束 Mission。

### `OnAgentRemoved`

基类覆写为空，不会释放引用、统计击杀或改变结果。需要处理移除事件的子类必须自行实现，并把受影响的 `Agent` 视为短生命周期 Mission 对象。

## 依赖关系

```text
MissionState.OpenNew / Mission 工厂
            │ 创建并挂载
            ▼
BaseBattleMissionController : MissionLogic
            ├── Mission.Teams ──► Team.AddTeamAI ──► TeamAIComponent / TeamAIGeneral
            ├── Mission.Agents ──► Agent / MainAgent / MissionResult
            ├── Mission 回调 ──► EarlyStart、AfterStart、tick、结果、撤退
            └── Mission teardown ──► OnMissionResultReady / EndMissionInternal

当前 SandBox 战斗路径：
MissionState.OpenNew ──► MissionCombatantsLogic ──► TeamAIComponent
                      └─► BattleDeploymentMissionController
```

- **宿主和上游：** [`Mission`](../../mission/Mission) 持有行为，分配 `Mission` 反向引用，调用生命周期、轮询结果并执行 teardown。
- **基类契约：** [`MissionLogic`](.././MissionLogic) 把对象路由到 `MissionLogics`；[`MissionBehavior`](../../mission/MissionBehavior) 提供通用 Mission 回调和清理入口。
- **队伍下游：** [`Team`](.././Team) 持有安装后的 AI；[`TeamAIComponent`](.././TeamAIComponent) 负责战术、队形和 Mission 对象决策；[`TeamQuerySystem`](.././TeamQuerySystem) 是队伍逻辑使用的运行时查询面。
- **当前工厂替代路径：** [`MissionCombatantsLogic`](.././MissionCombatantsLogic) 在 `OnBehaviorInitialize` 创建队伍，并在 `EarlyStart` 安装当前的 field/siege/sally-out AI；[`BattleDeploymentMissionController`](.././BattleDeploymentMissionController) 处理部署相关行为。
- **结果下游：** `MissionResult`、`InquiryData` 和 `Mission.OnEndMissionResult` 消费结果。SandBox 的 [`CampaignMissionComponent`](../../campaign-ext/CampaignMissionComponent) `OnMissionResultReady` 会更新 `PlayerEncounter`；其 `OnEndMission` 会广播 Campaign 的 `OnMissionEnded` 并清空 `CampaignMission.Current`。本类不会序列化自己的计数器或 Mission。
- **持久化边界：** Campaign 状态应由 Campaign 拥有的可存档行为保存。不要把 `Mission`、`Agent`、`Team`、`TeamAIComponent` 或本控制器作为持久引用保存。

## 风险与崩溃边界

1. **`EarlyStart` 递归：** 按当前源码调用 `base.EarlyStart()` 会进入自身调用，可能导致 `StackOverflowException`。如果使用不同二进制，必须先核对实际实现。
2. **已有队伍：** `CreateTeams()` 在 `Mission.Teams` 非空时抛出 `MBIllegalValueException`。在另一个 Logic 创建队伍之后再添加此控制器不是无害扩展。
3. **替换 AI：** `Team.AddTeamAI` 会覆盖 `Team.TeamAI`，并立即改变队形、detachments、战术和 Mission 专属行为。不要把它当作读取 AI 的方法。
4. **错误阶段：** `GetTeamAI`、`CreatePlayer`、`SetupTeam` 和部队钩子都要求活跃 Mission 以及有效队伍/出生数据。从 Campaign tick 或构造函数调用可能得到空引用或无效 native 状态。
5. **结果契约：** 返回 `true` 却没有写入 `missionResult`，或在 `CreateTeams` 前读取 `PlayerTeam`，可能导致第一个结果 Logic 以无效状态获胜，或在计算阵营时抛异常。
6. **撤退与 Agent 生命周期：** `OnEndMissionRequest` 在 Mission 输入阶段执行；`OnAgentRemoved` 中的对象之后仍会被清理。不要把 Agent、Team 或 Formation 引用带到 Campaign 代码或下一场 Mission。
7. **Team AI 结束回调不保证到达：** `Team.OnMissionEnded()` 会转发给 `TeamAIComponent.OnMissionEnded()`，但当前托管源码搜索没有找到 `Mission.EndMissionInternal` 调用它；不要假设自定义 TeamAI 的清理钩子一定执行。关键清理应放在 Mission 行为自己的结束回调中，并保证可重复调用。
8. **teardown 与存档：** `EndMissionInternal` 调用行为清理、删除/清空 Agent，并清空 Teams；`CampaignMissionComponent` 另行发布 Campaign 结果并清空 `CampaignMission.Current`。本类没有存档契约；持久化运行时字段或把它们当 Campaign 状态代理，会产生陈旧数据和加载顺序问题。
9. **当前路径不匹配：** SandBox 普通战斗没有注册本类。假设 `Mission.Current.GetMissionBehavior<BaseBattleMissionController>()` 一定成功，在当前源码树中会得到空路径。

## 真实 API 示例

### 查询普通战斗工厂实际安装的行为

1.4.5 SandBox 战斗工厂把 `MissionCombatantsLogic` 放入 `MissionState.OpenNew` 的行为委托。Mission 层行为可以通过真实的 `GetMissionBehavior<T>` 路径取得它：

```csharp
Mission mission = Mission.Current;
if (mission == null)
{
    return;
}
MissionCombatantsLogic combatants = mission.GetMissionBehavior<MissionCombatantsLogic>();

if (combatants != null && mission.CurrentState == Mission.State.Continuing)
{
    BattleSideEnum playerSide = combatants.PlayerSide;
    foreach (IBattleCombatant combatant in combatants.GetAllCombatants())
    {
        Banner banner = combatant.Banner;
    }
}
```

这个示例故意不查询 `BaseBattleMissionController`：当前工厂没有注册它。同时它只在运行中的 Mission 访问对象；`EndMissionInternal` 之后宿主及其 Agent/Team 都不再是有效运行时状态。

### 在具体子类中安装默认 Team AI

如果 mod 自己拥有具体子类，并且已经进入基类的队伍创建路径，真实的覆写形状就是基类使用的 API：

```csharp
public override TeamAIComponent GetTeamAI(
    Team team,
    float thinkTimerTime = 5f,
    float applyTimerTime = 1f)
{
    return new TeamAIGeneral(
        Mission,
        team,
        thinkTimerTime,
        applyTimerTime);
}
```

不要从 Campaign 行为调用它，不要传入另一场 Mission 的 Team，也不要为了读取组件再次调用 `Team.AddTeamAI`。基类 `AfterStart` 会把返回的组件交给 `Team.AddTeamAI`，为双方队伍安装。

## 跨版本说明

本页以完整的 1.4.5 源码树为准。移植到 1.3.x 前必须重新核对 `TaleWorlds.MountAndBlade.Source.Missions` 命名空间、`EarlyStart` 实现和普通战斗工厂的行为列表；不要假设另一个版本会注册同名控制器。

## 导航

### ↑ 父级

- [Mission extensions 模块首页](../)
- [版本首页](../../)

### ↔ 兄弟与相关子项

- [MissionLogic](.././MissionLogic)
- [MissionCombatantsLogic](.././MissionCombatantsLogic)
- [BattleDeploymentMissionController](.././BattleDeploymentMissionController)
- [BattleEndLogic](.././BattleEndLogic)
- [Team](.././Team)
- [TeamAIComponent](.././TeamAIComponent)
- [TeamQuerySystem](.././TeamQuerySystem)

### 相关上游与下游

- [Mission](../../mission/Mission)
- [MissionBehavior](../../mission/MissionBehavior)
- [Doc Contract](../../../architecture/doc-contract)
