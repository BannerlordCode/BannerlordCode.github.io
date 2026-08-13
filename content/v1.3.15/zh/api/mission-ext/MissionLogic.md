---
title: "MissionLogic"
description: "参与 Mission 结束判定、离开确认、撤退/投降和战斗结果通知的 MissionBehavior 子类。"
---
# MissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionLogic : MissionBehavior`  
**Base:** [`MissionBehavior`](../../mission/MissionBehavior/)  
**Source:** `TaleWorlds.MountAndBlade/MissionLogic.cs`

## 一句话职责

它把“这场 Mission 何时结束、能否离开、结果何时写回”的裁决钩子加入普通场景 behavior 生命周期，并让 Mission 在结束检查、结果准备、战斗结束和 teardown 阶段按顺序调用这些入口。

## 心智模型

`MissionLogic` 不是另一套 Agent 系统，而是将 `MissionBehavior.BehaviorType` 固定为 `Logic` 的专用子类：

```text
Mission
├─ MissionBehaviors       所有场景 behavior
└─ MissionLogics          其中 BehaviorType == Logic 的 MissionLogic
   ├─ MissionEnded(ref result)   Mission.CheckMissionEnded 轮询
   ├─ OnMissionResultReady       结果准备好
   ├─ ShowBattleResults          结果展示阶段
   └─ OnBattleEnded              战斗结束后的 logic 通知
```

它由 Mission 创建路径返回或通过 `Mission.AddMissionBehavior` 加入。`Mission.AddMissionBehavior` 会先把实例放进 `MissionBehaviors`，再因 `BehaviorType == Logic` 放进 `MissionLogics`，最后调用 `OnCreated`。如果忘记注册，`CheckMissionEnded` 永远不会调用它。

## 何时用 / 何时不用

**适合：** 自定义胜负条件、Boss 被移除后结束、拦截玩家离开、处理撤退/投降通知、向角色提供额外 Mission 装备、在 `OnMissionResultReady` 之后衔接结果。

**不用它的情况：**

| 需求 | 正确入口 |
|---|---|
| 只统计击杀或监听命中，不决定 Mission 结束 | 继承 [`MissionBehavior`](../../mission/MissionBehavior/)，返回 `MissionBehaviorType.Other` |
| 修改战役 Hero、Party、王国或关系 | 记录 Mission 结果，在战役安全阶段调用对应 `*Action.Apply`；不要在死亡回调中重排世界 |
| 保存跨战斗状态 | `CampaignBehaviorBase.SyncData`、战役对象或存档系统 |
| 让原版 `BattleEndLogic` 和自定义 logic 同时裁决同一场战斗 | 先设计唯一结果所有者；多个 logic 返回 `true` 会按 `MissionLogics` 顺序由第一个结果结束 Mission |

## 真实注册与获取

1. **创建 Mission 时注册：** 源码的 `SandBoxMissions.OpenTownCenterMission` 将 `BasicLeaveMissionLogic`、`BattleAgentLogic` 等和其他 behavior 一起放进 `MissionState.OpenNew` 的 behavior 工厂返回值。自定义 logic 应放在同一个 `InitializeMissionBehaviorsDelegate` 集合中。
2. **运行中注册：** `Mission` 提供实际公开入口：

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.CurrentState == Mission.State.Continuing)
{
    mission.AddMissionBehavior(new CaptureFlagLogic());
}
```

3. **获取已注册 logic：**

```csharp
MissionLogic logic = Mission.Current?.GetMissionBehavior<CaptureFlagLogic>();
if (logic != null)
{
    logic.OnRetreatMission();
}
```

不要写 `MissionGameStarter.AddBehavior(...)`：检查过的 1.3.15 与 1.4.5 MountAndBlade 源码没有这个 Mission 注册类型。`CampaignGameStarter` 是 Campaign 启动对象，不能代替 Mission 行为工厂。

## 结束协议与生命周期

| 阶段 | Mission 做什么 | Logic 入口 |
|---|---|---|
| 初始化 | 绑定 Mission，按行为集合调用初始化回调 | `OnBehaviorInitialize`、`EarlyStart`、`AfterStart`（继承自 MissionBehavior） |
| 运行 | 每帧驱动所有 behavior | `OnMissionTick`、`OnAgentRemoved` 等继承钩子 |
| 结束检查 | 遍历 `MissionLogics`，调用 `MissionEnded(ref missionResult)` | 第一个返回 `true` 的 logic 写入结果并停止继续检查 |
| 结果准备 | Mission 将结果交给每个 logic | `OnMissionResultReady(MissionResult)` |
| 结果展示 | Mission 在结束延迟期间询问展示逻辑 | `ShowBattleResults()` |
| 战斗结束 | Mission 通知结束并触发撤退路径 | `OnBattleEnded()`、`OnRetreatMission()` 或 `OnSurrenderMission()` |
| teardown | Mission 调用 behavior 清理，移除 behavior 并清空当前 Mission | `OnEndMissionInternal`、`OnRemoveBehavior` |

`MissionLogic.cs` 本身很薄：它只定义结束/结果/离开/装备等 virtual 方法；Agent、Team、tick 和对象事件都来自父类 [`MissionBehavior`](../../mission/MissionBehavior/)。

## 关键成员

| 成员 | 用途与调用时机 | 结果/副作用 |
|---|---|---|
| `BehaviorType` | 自动返回 `MissionBehaviorType.Logic` | 决定实例进入 `MissionLogics`，不要在子类改成 `Other` |
| `MissionEnded(ref MissionResult missionResult)` | Mission 的结束检查周期调用 | 只有确实有结果时才返回 `true`；错误返回会提前结束战斗 |
| `OnEndMissionRequest(out bool canLeave)` | 玩家请求离开时调用 | 返回 InquiryData 可显示确认；`canLeave = false` 会阻止离开 |
| `OnRetreatMission`、`OnSurrenderMission` | Mission 进入撤退/投降路径时调用 | 适合发出 Mission 层通知；战役写回要遵守战役时序 |
| `OnMissionResultReady` | 结果确定后调用 | 适合把临时结果交给结果处理器，不要在这里重复裁决 |
| `ShowBattleResults`、`OnBattleEnded` | 结果展示与战斗结束阶段 | 可能晚于 Agent 移除；不要假设所有 Agent 仍活动 |
| `GetExtraEquipmentElementsForCharacter` | Mission 生成角色装备时由 Mission 汇总 | 返回 `null` 表示无额外装备；不要返回未初始化的元素 |
| `OnAgentRemoved`、`OnMissionTick` | 继承自 MissionBehavior | 用于收集条件；真正结束仍应在 `MissionEnded` 中返回结果 |

## Agent 死亡示例

死亡钩子来自父类，但常用于更新本 logic 的结束条件：

```csharp
public sealed class BossDefeatLogic : MissionLogic
{
    private bool _bossRemoved;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        if (affectedAgent.IsHero && affectedAgent.Team?.Side == BattleSideEnum.Defender)
        {
            _bossRemoved = agentState == AgentState.Killed;
        }
    }

    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (!_bossRemoved || Mission == null)
        {
            return false;
        }

        missionResult = MissionResult.CreateSuccessful(Mission, enemyRetreated: false);
        return true;
    }
}
```

这段逻辑只保存布尔结果，没有保存死亡 Agent 引用。`OnAgentRemoved` 中需要的 Team/Agent 身份应立即抽取；战役层的奖励、关系或 Hero 状态应在 Mission 结果交回战役后再用 Action 写回。

## 依赖关系

- [`Mission`](../../mission/Mission/) 持有 `MissionBehaviors` 与 `MissionLogics`，并决定何时轮询 `MissionEnded`。
- [`MissionBehavior`](../../mission/MissionBehavior/) 提供 Agent、Team、tick、交互和清理回调。
- [`Agent`](../../mission/Agent/)、[`Team`](../../mission/Team/) 和 [`Formation`](../../mission/Formation/) 是结束判定常读取的实时对象。
- [`BattleEndLogic`](../BattleEndLogic/) 是原版战斗结束 logic 的实际例子；添加第二个结果所有者时必须明确优先级。
- [`Campaign`](../../campaign/Campaign/)、`MapEvent` 和战役 `*Action` 是 Mission 结果的下游，不应在 `OnAgentRemoved` 中做可重入的地图重排。

## 风险与崩溃边界

可能崩溃或坏档的用法：

1. 在构造函数中读取 `Mission.Current`；行为还没有绑定，结果可能为 `null`。
2. 运行时添加 logic 后假设 `OnBehaviorInitialize`、`EarlyStart` 和 `AfterStart` 会自动补跑。
3. 在 `OnAgentRemoved` 中保存 Agent/Team 引用并在 Mission 结束后继续访问。
4. 多个 logic 无协调地返回 `true`，或写入不完整 `MissionResult`。
5. 在离开确认中永久保持 `canLeave = false`，或者在结束清理中再次增删当前 behavior 列表。

## 跨版本提示

- 1.3.15 与 1.4.5 都把 `MissionLogic` 放入 `MissionLogics`，并通过 `MissionEnded(ref MissionResult)` 做结束裁决。
- 注册 API 的跨版本安全写法是 Mission 创建时返回 behavior 集合，或在已确认的当前 Mission 上调用 `AddMissionBehavior`。
- 反编译文件中的具体 SandBox logic 可能因模块而异；不要把某个游戏模式的结束 logic 当作所有 Mission 的默认行为。

## 导航

- [↑ Mission extension 模块](../)
- [↔ Mission](../../mission/Mission/)
- [↔ MissionBehavior](../../mission/MissionBehavior/)
- [相关 Agent](../../mission/Agent/) · [Team](../../mission/Team/) · [Formation](../../mission/Formation/)
- [原版 BattleEndLogic](../BattleEndLogic/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
