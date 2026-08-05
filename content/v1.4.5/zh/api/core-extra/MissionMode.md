---
title: "MissionMode"
description: "Mission 运行期间的场景模式枚举；它与 SetMissionMode 的行为回调共同决定部署、战斗、对话和潜行等阶段如何被各行为处理。"
---

# MissionMode

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public enum MissionMode`  
**Base:** `System.Enum`  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/MissionMode.cs`

## 一句话职责

它用稳定的语义值表示当前 Mission 所处的交互、部署或战斗模式，让 `Mission` 保存统一状态，并让所有挂载行为和监听器在模式切换时同步调整逻辑。它本身不是独立状态机，真正的副作用来自 `SetMissionMode` 发出的生命周期通知。

## 心智模型

`MissionMode` 只是模式值；它不是可以独立驱动任务的状态机。当前值由 `Mission` 持有，mod 通常通过 `Mission.Current.Mode` 读取，并通过 `Mission.Current.SetMissionMode(newMode, atStart)` 请求切换。Mission 会先保存旧值、写入新值，再把旧模式和 `atStart` 传给每个 `MissionBehavior` 和 `IMissionListener` 的 `OnMissionModeChange`。

因此模式切换是一个有副作用的 Mission 生命周期事件。行为应在回调中清理旧模式状态、读取新的 `Mission.Mode`，而不是只在自己的字段里复制一个枚举。Mission 已进入 `Over` 后，源码仍更新值但不会继续通知监听器；不要把这种调用当作重新启动 Mission。

## 何时用，何时不用

**适合使用：**

- 在 `MissionBehavior`、`MissionLogic` 或监听器中按 `Deployment`、`Battle`、`Conversation` 等模式选择行为。
- 进入部署、对话、交易或战斗时，通过 `Mission.SetMissionMode` 让所有挂载行为收到统一通知。

**不要这样用：**

- 不要直接用整数转换代替枚举，也不要猜测未在当前版本源码中定义的模式。
- 不要在 Mission 外把它当 Campaign 的全局状态；大地图模式应使用 Campaign 自己的生命周期和 API。
- 不要在 `Over` 阶段依赖模式回调完成清理；清理应放在行为的 Mission 结束/移除回调中。

## 枚举值

| 值 | 典型语义 |
|---|---|
| `StartUp` | Mission 启动阶段。 |
| `Conversation` | Mission 内对话。 |
| `Battle` | 正在进行战斗。 |
| `Duel` | 单挑/决斗。 |
| `Stealth` | 潜行或隐蔽任务。 |
| `Barter` | Mission 内交易。 |
| `Deployment` | 部署部队、等待战斗开始。 |
| `Tournament` | 锦标赛任务。 |
| `Replay` | 回放。 |
| `CutScene` | 过场。 |
| `Benchmark` | 基准测试。 |

这些值本身没有 `Apply` 或保存副作用；副作用来自 `Mission.SetMissionMode` 发出的通知以及各行为对通知的处理。

## 依赖关系

- **持有者：** [`Mission`](../../mission/Mission) 的 `Mode` 属性保存当前值。
- **切换入口：** `Mission.SetMissionMode`，Campaign 任务还可通过 [`ICampaignMission`](../../campaign/ICampaignMission) 转发该请求。
- **通知下游：** [`MissionBehavior`](../../mission/MissionBehavior) 和 Mission listener 收到 `OnMissionModeChange(oldMissionMode, atStart)`。
- **相关初始化：** [`MissionInitializerRecord`](../MissionInitializerRecord) 决定 Mission 如何打开，但不决定运行中每次模式切换。

## 真实示例

部署逻辑的真实调用方式是通过当前 Mission 设置模式；`DeploymentHandler` 使用的就是 `SetMissionMode(MissionMode.Deployment, atStart: true)`。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class DeploymentGate : MissionBehavior
{
    public void BeginDeployment()
    {
        Mission.Current.SetMissionMode(MissionMode.Deployment, atStart: true);
    }

    public override void OnMissionModeChange(
        MissionMode oldMissionMode, bool atStart)
    {
        // Mission 已经写入新值；读取 Mode 得到当前模式。
        if (!atStart && oldMissionMode == MissionMode.Deployment &&
            Mission.Current.Mode == MissionMode.Battle)
        {
            // 在这里释放部署阶段的短命状态。
        }
    }
}
```

源码中的 `Mission.SetMissionMode` 会在新旧值相同的时候直接返回；如果 Mission 已经是 `Over`，则不会继续通知行为。需要可靠清理时，不能只依赖模式变化回调。

## 风险与崩溃边界

1. `Mission.Current` 在大地图或 Mission 结束后可能为 `null`；模式读取和切换必须发生在活动 Mission 的生命周期内。
2. 在 `Initializing`、`EndingNextFrame` 或 `Over` 阶段切换模式，行为可能尚未准备好或正在清理；不要用它绕过 Mission 的生命周期。
3. 回调参数 `oldMissionMode` 是旧值，当前新值要从 `Mission.Mode` 读取。把参数误当新值会让行为在错误分支执行。
4. `atStart` 不是“是否 Battle”的替代值。它表示这次通知是否发生在 Mission/模式启动路径，行为应按具体调用点解释。
5. 直接改整数、缓存跨 Mission 的模式或在 Campaign tick 中强行切换，都会把场景层状态与真正的 Mission 状态分离。

## 导航

- ↑ 父级：[core-extra 模块目录](../)
- ↔ 同级：[`MissionInitializerRecord`](../MissionInitializerRecord) · [`MissionResult`](../MissionResult)
- 运行时入口：[`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior) · [`MissionLogic`](../../mission-ext/MissionLogic)
- 架构：[开发者路线图](../../../architecture/developer-roadmap) · [文档契约](../../../architecture/doc-contract)
