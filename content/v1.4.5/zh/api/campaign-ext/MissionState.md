---
title: "MissionState"
description: "MissionState 是围绕当前 Mission 负责创建、加载、tick、激活和收尾的 GameState 包装层。"
---
# MissionState

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionState : GameState`  
**Base:** [GameState](../../core-extra/GameState)  
**Source file:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs`

## 一句话定位

它是 [Mission](../../mission/Mission) 外层的游戏状态生命周期持有者，覆盖 `OpenNew`、加载、tick、激活和最终清理，并负责发布 `MissionState.Current`、持有 `CurrentMission` 以及在 finalize 时清空活动状态。

## 心智模型

`MissionState` 本身不是模拟对象。`OpenNew` 创建 `MissionState`，让它创建 `Mission`，把传入行为和默认行为组合起来，再把状态压入 `GameStateManager`。`OnInitialize` 发布 `MissionState.Current` 并启动 loading window；`LoadMission` 调用任务预加载和 `Initialize`；`FinishMissionLoading` 完成启动序列；`OnTick` 负责加载、快进、暂停、网络和正常任务 tick；`OnFinalize` 收尾 Mission 并清空静态引用。

`Handler` 是可选的 `IMissionSystemHandler` 集成点，可以追加行为并观察加载、tick 前后回调，但不会替换 `OpenNew` 提供的行为列表。`CurrentMission` 是 private-set，只在该状态活动期间有意义。

## 何时使用，何时不要使用

- 有效 `MissionInitializerRecord` 和行为回调的任务工厂，应使用 `MissionState.OpenNew`。
- 活动状态期间可以读取 `MissionState.Current` 或 `CurrentMission`；模拟对象本身应使用 `Mission.Current`。
- 不要 `new MissionState`，也不要直接设置 `CurrentMission`；创建和状态转换由游戏状态管理器负责。
- 不要把 `Paused` 当作战役暂停标志；它只会让 `TickMission` 发送零模拟 delta。
- 不要因为 `OpenNew` 立即返回 Mission 就省略行为或使用过期 initializer record；加载和行为初始化在返回后继续发生。

## 依赖

```text
MissionState.OpenNew
  -> GameStateManager.CreateState<MissionState>()
  -> HandleOpenNew / Mission 构造
  -> 行为组合与 InitializeStartingBehaviors
  -> PushState
  -> 加载 -> 活动 tick -> OnFinalize
```

- 模拟持有者：[Mission](../../mission/Mission) 保存场景、Agent、行为和当前状态。
- 行为契约：[MissionBehavior](../../mission/MissionBehavior) 提供 initializer 回调插入的生命周期。
- 逻辑基类：[MissionLogic](../../mission-ext/MissionLogic) 被分组到 Mission 的 logic 行为列表。
- 战役桥接：[CampaignMission](../../campaign/CampaignMission) 是战役/SandBox 工厂注入的行为之一。

## 生命周期与公共状态

| 成员或阶段 | 源码语义 | 安全边界 |
| --- | --- | --- |
| `Current` | `OnInitialize` 设置、`OnFinalize` 清空的活动 `MissionState` 静态值。 | 只在状态活动时读取。 |
| `CurrentMission` | `HandleOpenNew` 创建的 Mission。 | 创建后、finalize 前有效。 |
| `MissionName` | `OpenNew` 传入的名称，供元数据和 handler 使用。 | `HandleOpenNew` 期间设置。 |
| `Handler` | 可选的行为注入、tick 和 loading 集成。 | 在对应生命周期前配置。 |
| `FirstMissionTickAfterLoading` | 初始为 true，首次活动 tick 后变 false。 | 可用于客户端加载边界。 |
| `Paused` | 让 `TickMission` 使用零模拟 delta；不会停止所有状态回调。 | 只切换当前状态。 |
| `OpenNew` | 创建、组合并压入状态，返回 Mission。 | 需要有效 record 和行为回调。 |
| `BeginDelayedDisconnectFromMission` | 请求在之后的活动 tick 断开多人 lobby。 | 仅用于多人收尾路径。 |

## 真实示例

下面使用 SandBox 工厂同样的创建边界：调用者持有真实 initializer record 并提供行为列表，状态负责加载和压入。

```csharp
using TaleWorlds.MountAndBlade;

public sealed class MissionTelemetryLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        if (Mission.Current != null && MissionState.Current != null)
        {
            // 活动 tick 中 MissionState 和 Mission 都有效。
        }
    }
}

public static Mission OpenTelemetryMission(MissionInitializerRecord record)
{
    return MissionState.OpenNew(
        "TelemetryMission",
        record,
        mission => new MissionBehavior[]
        {
            new MissionTelemetryLogic()
        },
        addDefaultMissionBehaviors: true,
        needsMemoryCleanup: true);
}
```

返回的 Mission 只是已创建，未必已完成加载。需要场景实体或初始化行为状态的代码应放在正确任务回调里，不要紧跟 return 语句执行。

## 风险与生命周期边界

- `OnFinalize` 会调用 `CurrentMission.OnMissionStateFinalize(...)`；不要在 mod 中重复执行收尾。
- `OpenNew` 会压入新游戏状态并可能替换当前 UI/任务上下文；跨调用不要保留旧 Mission、Agent、场景或 view 引用。
- loading 回调和活动 tick 不同；`Handler.RenderIsReady()` 可能阻止活动 tick，但加载仍由 Mission 状态机推进。
- 快进、replay、fixed delta、暂停和网络分支会改变 tick 时间；不要假设 `realDt` 就是模拟 delta。
- `MissionEndTime` 可能在正常 pop 前调用 `CurrentMission.EndMission()`；结果和清理监听必须遵守 Mission 生命周期。

## 版本说明

本页遵循 v1.4.5 `MissionState.cs` 的加载顺序、默认行为插入、handler 回调和静态清理。切换版本时请重新核对这些顺序。

## 导航

- 父级：[Mission 扩展 API](../)
- 同级：[MissionAgentHandler](../MissionAgentHandler) · [MissionManager](../../mission-ext/MissionManager)
- 相关：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [CampaignMission](../../campaign/CampaignMission)
