---
title: "UsableMissionObjectComponent"
description: "Usable Mission 对象的生命周期扩展组件，覆盖焦点、使用、重置、编辑器校验与可选 tick。"
---
# UsableMissionObjectComponent

**命名空间：** `TaleWorlds.MountAndBlade`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public abstract class UsableMissionObjectComponent`  
**基类：** 无  
**源码文件：** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## 一句话职责

这是由所有者控制的小型扩展点：它为 [`UsableMissionObject`](../UsableMissionObject) 添加可复用行为，同时不替换原有 Agent 与网络生命周期。

## 心智模型

组件本身不会独立注册到 Mission。可用对象持有一个私有组件列表；`AddComponent` 加入组件、调用 `OnAdded(Scene)`，并重新计算所有者的 tick 要求。`RemoveComponent` 先调用 `OnRemoved`，再移除组件并重新计算。其他回调由所有者分发；`OnMissionObjectDisabled` 则由 `UsableMachine` 的禁用路径分发。

交互统计、本地动画触发、校验或小型可复用使用规则适合做成组件。若要改变所有权、Agent 选择、子实体发现或主要使用流程，应派生 [`UsableMissionObject`](../UsableMissionObject)。不要把组件当作 `MissionBehavior`、可存档对象或网络端点；它只是接收所有者回调，持久战役后果仍应交给正确的 Campaign 层。

## 依赖关系

[`UsableMissionObject`](../UsableMissionObject) 持有组件列表，是正常获取组件的唯一入口。它提供 [`Mission`](../../mission/Mission) 的 Scene，分发 Agent 回调，并决定是否需要 `OnTick`。组件通过 [`MissionObject`](../MissionObject) 与 [`SynchedMissionObject`](../SynchedMissionObject) 间接继承场景身份和网络上下文；它不会自行注册或序列化。

## 回调契约

- `OnAdded(Scene scene)` 在组件挂载时执行。可以在这里缓存场景资源；所有者会传入当前 Scene。
- `OnRemoved()` 在显式移除以及所有者被移除时执行。应在这里释放原生资源或 Agent 引用，并让清理逻辑可重复调用。
- `OnFocusGain(Agent userAgent)` 与 `OnFocusLose(Agent userAgent)` 镜像所有者的焦点变化。它们是通知，不是抢占 `UserAgent` 的许可。
- `IsOnTickRequired()` 默认返回 `false`。只有组件确实需要 `OnTick(float dt)` 时才返回 `true`；所有者会在 `GetTickRequirement()` 中使用这个结果。
- `OnTick(float dt)` 在所有者请求 tick 时走普通 tick 路径。`OnEditorTick` 与 `OnEditorValidate` 是对应的编辑器钩子。
- `OnUse(Agent userAgent)` 在权威侧的 `UsableMissionObject.OnUse` 中执行，早于所有者设置 `UserAgent`。`OnUseStopped(Agent userAgent, bool isSuccessful)` 在使用结束时执行，并接收结果。
- `OnMissionReset()` 会在场景对象进行 Mission reset 时执行。`OnMissionObjectDisabled()` 是 `UsableMachine` 停用站立点时使用的特殊通知，不能把它当作 `OnRemoved` 的通用替代。

组件不能自行加入网络序列化。如果组件状态影响客户端表现，应由所属可用对象使用同步 API；所有者重写 `WriteToNetwork` 或 `OnAfterReadFromNetwork` 时也必须保留基类处理。

## 真实组件模式

在 mod 代码中创建组件，从当前 Mission 获取已经注册的可用对象，再通过 `AddComponent` 挂载。之后由宿主调用受保护回调；mod 不应手动调用 `OnUse` 或 `OnTick`。

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public sealed class UseCounterComponent : UsableMissionObjectComponent
{
    public int Count { get; private set; }

    protected internal override void OnUse(Agent userAgent)
    {
        Count++;
    }

    protected internal override void OnMissionReset()
    {
        Count = 0;
    }

    public override bool IsOnTickRequired()
    {
        return false;
    }
}

public static bool AttachCounterToFirstUsable(Mission mission)
{
    foreach (MissionObject missionObject in mission.ActiveMissionObjects)
    {
        if (missionObject is UsableMissionObject usable)
        {
            usable.AddComponent(new UseCounterComponent());
            return true;
        }
    }

    return false;
}
```

这个示例中的组件明确不请求 tick。需要周期工作时，只在工作未完成期间返回 `true`，并在所有者移除前移除或释放组件。

## 风险与边界

- `OnAdded` 收到的是所有者的 Scene，但组件仍不是独立注册的 Mission 对象。不要通过 `Mission.ActiveMissionObjects` 查找组件。
- `OnRemoved` 既可能来自 `RemoveComponent`，也可能来自所有者移除。清理逻辑应能处理重复调用或已经清空的原生引用。
- 如果 `IsOnTickRequired` 永远返回 `true`，即使没有 Agent 使用对象，所有者也会持续 tick；场景中大量对象会放大开销。
- 在 `OnUseStopped`、`OnMissionReset`、`OnRemoved` 或 Mission 结束后，不要继续保存 Agent 引用，除非再次确认 Agent 仍然 active。
- 组件回调不会授予权威权限。客户端观察到的 `OnUse` 不能提交多人结果，也不能直接改变战役存档。
- 在 `OnInit` 之后添加组件仍会收到 `OnAdded`，但有关子实体或所有者 `GameEntityWithWorldPosition` 的自定义假设仍由所有者负责。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 所有者：[UsableMissionObject](../UsableMissionObject)
- ↔ 基础生命周期：[MissionObject](../MissionObject) · [SynchedMissionObject](../SynchedMissionObject)
- 特殊所有者：[UsableMachine](../UsableMachine)
- Mission 协调：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- English/中文：[UsableMissionObjectComponent](../../../../en/api/mission-ext/UsableMissionObjectComponent)
