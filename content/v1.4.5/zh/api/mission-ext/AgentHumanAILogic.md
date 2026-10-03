---
title: "AgentHumanAILogic"
description: "HumanAIComponent 的装配逻辑加上骑手上马后的坐骑预留修正：只对人类 AI 生效，控制权切换时增删组件，并修正已选坐骑的预留关系。"
---

# AgentHumanAILogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `TaleWorlds.MountAndBlade.MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## 概述

`AgentHumanAILogic` 全文 37 行，比它的兄弟 [AgentCommonAILogic](../AgentCommonAILogic/) 多了第三个钩子。它做三件事：在 AI 控制的**人类** Agent 诞生时挂 `[HumanAIComponent](../HumanAIComponent/)`；在控制权变更时按新控制者增删该组件；在 `OnAgentMount` 里调用 `Mission.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent)` 修正坐骑预留关系。

第三件事是它区别于兄弟类的实质内容——**坐骑预留（mount reservation）是多人 / 战役 AI 里防止两个 AI 抢同一匹马的机制**，预留状态分别存在骑手的 `HumanAIComponent` 与坐骑的 `CommonAIComponent.ReservedRiderAgentIndex` 上。骑手上马时如果他之前选过另一匹马、或者这匹马已经被别人预留，就必须解掉旧关系，否则会出现「两个 AI 认为自己拥有同一匹坐骑」。

## 心智模型

把它当成**「人类 AI 专属的装配 + 骑乘一致性维护」**，三个推论：

第一，**它不是默认行为，要自己加**。全树 8 处 `new AgentHumanAILogic()` 全在任务装配代码里（`BannerlordMissions.cs:138` / `:210` / `:279`、`MultiplayerMissions.cs` 多处、`CPUBenchmarkMissionLogic.cs:1298`），没有一处出现在 [MissionState](../MissionState/) 的 `AddDefaultMissionBehaviorsTo` 里。也就是说：**只有官方列出的那些任务类型（战役战斗、多人、CPU 基准）才天然带它**。自定义任务若不显式添加，[HumanAIComponent](../HumanAIComponent/) 根本不存在，而 `AgentHumanAILogic` 是它唯一的生产入口。

第二，**每处判定都带 `agent.IsHuman`**，所以动物（马、野兽）走不到这个类。这是它与 [AgentCommonAILogic](../AgentCommonAILogic/) 的分工边界。

第三，**`OnAgentMount` 里那行是无条件调用的，不判 `IsHuman` 也不判 `IsAIControlled`**。而 `Mission.UpdateMountReservationsAfterRiderMounts`（`Mission.cs:2941`）的实现体里直接解引用 `rider.HumanAIComponent.UnreserveMount(...)`——**如果一个非 AI 的人类玩家上马时恰好派发到了这个钩子，且它没有 `HumanAIComponent`，会 NRE**。实践上玩家上马通常不走这条 mission-behavior 派发路径，但这正是「不要把本类挂到没有 HumanAIComponent 保障的任务上」的原因。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | Agent 诞生时由 `Mission.CreateAgent` 派发。判定是 `agent.IsAIControlled && agent.IsHuman` 两个条件同时成立才挂 `new HumanAIComponent(agent)`。**比兄弟类多一个 `IsHuman`**——挂载面更窄，这是有意的。 |
| `OnAgentControllerChanged` | `protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)` | 控制权变更时增删 `HumanAIComponent`。与兄弟类的结构一致但判据不同：兄弟类在 `OnAgentCreated` 用 `IsAIControlled` 属性、在变更钩子里用 `agent.Controller == AI`；本类两处都用 `Controller == AI` 做核心判定，外面套一层 `agent.IsHuman`。**注意它没有 `agent.IsActive()` 守卫**——这与 `AgentCommonAILogic` 不同，死掉的 Agent 也会走这段增删逻辑。 |
| `OnAgentMount` | `public override void OnAgentMount(Agent agent)` | 本类存在的第三个理由。上马后调用 `Mission.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent)`，把「骑手原先选中的坐骑」与「刚骑上的这匹坐骑」的预留关系重新对齐。声明在 `MissionBehavior.cs:150`。 |

## 真实示例

按官方的方式把它加进自定义任务的行为列表（这是它唯一可靠的启用途径）：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

public IEnumerable<MissionBehavior> OpenBattleBehaviors(Mission mission)
{
    return new MissionBehavior[]
    {
        new AgentHumanAILogic(),
        new AgentVictoryLogic(),
    };
}
```

读回组件状态，确认挂载成功——`HumanAIComponent` 是否存在直接决定这个 AI 有没有「跟随阵型 / 使用物件」的整套行为：

```csharp
using TaleWorlds.MountAndBlade;

Agent agent = target;
HumanAIComponent humanAi = agent.HumanAIComponent;
if (humanAi == null)
{
    Debug.Print("no HumanAIComponent: is this a human AI, and was AgentHumanAILogic added?", 0);
    return;
}
Debug.Print("agent " + agent.Index + " followed=" + (humanAi.FollowedAgent != null), 0);
Debug.Print("defending = " + humanAi.IsDefending + " in combat action = " + humanAi.IsInImportantCombatAction(), 0);
```

手动触发一次预留修正（等价于 `OnAgentMount` 那一行，用于调试坐骑抢占问题）：

```csharp
Mission mission = Mission.Current;
Agent rider = target;
Agent mount = rider.MountAgent;
if (mount == null)
{
    Debug.Print("rider is not mounted", 0);
    return;
}
mission.UpdateMountReservationsAfterRiderMounts(rider, mount);
Debug.Print("reserved rider index on mount = " + mount.CommonAIComponent.ReservedRiderAgentIndex, 0);
```

照着它写一个自己的 AI 装配器（保留坐骑修正那一段）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyHumanAILogic : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        if (agent.IsAIControlled && agent.IsHuman)
        {
            agent.AddComponent(new HumanAIComponent(agent));
        }
    }

    protected internal override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        base.OnAgentControllerChanged(agent, oldController);
        if (!agent.IsHuman)
        {
            return;
        }
        if (agent.Controller == AgentControllerType.AI)
        {
            agent.AddComponent(new HumanAIComponent(agent));
        }
        else if (oldController == AgentControllerType.AI && agent.HumanAIComponent != null)
        {
            agent.RemoveComponent(agent.HumanAIComponent);
        }
    }

    public override void OnAgentMount(Agent agent)
    {
        base.OnAgentMount(agent);
        Mission.Current.UpdateMountReservationsAfterRiderMounts(agent, agent.MountAgent);
    }
}
```

## 风险与边界

- **不是默认行为。** [MissionState](../MissionState/) 的默认列表里只有 `AgentCommonAILogic`，没有本类。自定义任务不加它就没有 `HumanAIComponent`。
- **`OnAgentMount` 无条件调用 `Mission.UpdateMountReservationsAfterRiderMounts`**，而该方法内部直接解引用 `rider.HumanAIComponent`。挂本类却没有保证所有人类 Agent 都有这个组件，骑手上马时会 NRE。
- **`OnAgentControllerChanged` 没有 `IsActive()` 守卫**，与 [AgentCommonAILogic](../AgentCommonAILogic/) 不同。死掉的 Agent 也会走组件增删。
- **增删不判空。** 源码里 `agent.AddComponent(new HumanAIComponent(agent))` 没有先查 `agent.HumanAIComponent != null`。如果控制权在同一帧内来回切两次、或者别的逻辑也挂了组件，会挂出重复的 `HumanAIComponent`——而 `Agent.RemoveComponent` 里对 `HumanAIComponent` 的判定用的是引用相等，重复组件会留下一份摘不掉。
- **`agent.MountAgent` 在钩子里可能为 null。** 源码直接传 `agent.MountAgent` 不判空；`OnAgentMount` 的语义保证它此刻有坐骑，但自定义派发路径下不保证。
- **`HumanAIComponent` 构造器会读 `Mission.Current`。** 在任务外 new 它会 NRE。
- **状态不跨任务。** 跟随目标、行为参数、物件兴趣全是任务内的。
- **类不 `sealed`**，可继承；但三个钩子都是 `override`，覆写时记得先 `base`。

## 依赖关系

- 基类链：继承 [MissionLogic](../MissionLogic/) → [MissionBehavior](../../mission/MissionBehavior/)，三个钩子分别在 `MissionBehavior.cs:53` / `:232` / `:150`
- 装配目标：[HumanAIComponent](../HumanAIComponent/)（行为参数、跟随目标、物件兴趣）与坐骑侧的 [CommonAIComponent](../CommonAIComponent/)（`ReservedRiderAgentIndex`）
- 预留修正入口：[Mission](../../mission/Mission/) 的 `UpdateMountReservationsAfterRiderMounts`（`Mission.cs:2941`），内部还会调 `rider.GetSelectedMountIndex()` 与 `Current.FindAgentWithIndex(...)`
- 宿主：[Agent](../../mission/Agent/) 的 `AddComponent` / `RemoveComponent` / `HumanAIComponent` 属性 / `Controller` / `IsHuman` / `MountAgent`
- 并列行为：[AgentCommonAILogic](../AgentCommonAILogic/) 是默认行为、覆盖所有 AI（含动物）；本类管人类 AI 那一半，两者通常同时存在于官方任务的行为列表里
- 构造调用方：`BannerlordMissions.cs:138` / `:210` / `:279`、`Modules.Multiplayer/.../MultiplayerMissions.cs` 多处、`Modules.CustomBattle/.../CPUBenchmarkMissionLogic.cs:1298`
- 桶首页：[mission-ext API 分区](../)
