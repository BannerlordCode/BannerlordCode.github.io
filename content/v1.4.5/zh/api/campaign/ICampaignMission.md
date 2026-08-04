---
title: "ICampaignMission"
description: "ICampaignMission 是活动 Mission 内的战役上下文合同，连接地点、对话、Agent 跟随与战斗结束流程。"
---
# ICampaignMission

**命名空间:** `TaleWorlds.CampaignSystem`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public interface ICampaignMission`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ICampaignMission.cs`

## 一句话职责

它定义一个活动 Mission 如何把 `Mission` 生命周期和战役层的地点、对话、Agent 跟随及结果处理连接起来。它是当前 Mission 的行为协作合同，不负责创建任务，也不把这些瞬时上下文变成可持久化的战役状态。

## 心智模型

把 `ICampaignMission` 看作“当前任务的战役适配器”，而不是可独立创建的服务。v1.4.5 的公开实现是 SandBox 的 [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)，它继承 `MissionLogic` 并随 `SandBoxMissions` 的 `MissionState.OpenNew` 行为列表一起创建。接口属性描述这个任务上下文的可观察状态；方法则把 Conversation、Location、Follow 和结束动作转给具体 Mission 行为。

它与 `CampaignMission.ICampaignMissionManager` 的方向相反：manager 负责“打开哪一场 Mission”，本接口负责“当前已打开的 Mission 怎样与 Campaign 协作”。脱离 `Mission.Current` 后，`State`、`Mode`、Agent 和 Location 都不再有可靠的生命周期保证。

## 何时使用，何时不要用

- 在 `MissionBehavior` 或需要读取活动任务状态的战役回调中，通过 `Mission.Current.GetMissionBehavior<CampaignMissionComponent>()` 获取实现，再按接口使用。
- 使用 `Location`、`LastVisitedAlley` 和 `Mode` 做当前任务内的读取；使用对话与跟随方法时，确认传入的 `IAgent` 仍属于当前 Mission。
- 不要在 campaign-only 的 tick、存档载入或任务结束后缓存这个接口；战役空闲阶段 `CampaignMission.Current` 应为 `null`。
- 不要把它当作开启任务的入口。开启任务要用 [CampaignMission](../CampaignMission) 的静态方法；不要自行 `new CampaignMissionComponent()` 后期待它拥有 `Mission`。

## 依赖关系

```text
MissionState.OpenNew
  -> Mission behaviors include CampaignMissionComponent
  -> CampaignMissionComponent.OnCreated / OnBehaviorInitialize / AfterStart
  -> CampaignMission.Current
  -> conversation, location, follow, result callbacks
  -> OnEndMission clears CampaignMission.Current
```

- 实现与生命周期：[CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [Mission](../../mission/Mission)。
- 创建入口：[CampaignMission](../CampaignMission) · [ICampaignMissionManager](../ICampaignMissionManager)。
- 事件下游：组件把 Mission 开始、tick 和结束转发给 [CampaignEventDispatcher](../CampaignEventDispatcher)。
- 相关战役上下文：[Campaign](../Campaign) 和 [CampaignBehaviorBase](../CampaignBehaviorBase)。

## 公开成员

| 主题 | 成员 | 调用时机与副作用 |
|---|---|---|
| 状态 | `State`、`Mode` | 分别反映活动 `GameState` 与 `Mission.Mode`；`Mode` 通过显式接口实现读取，必须处于活动 Mission。 |
| 队伍与地点 | `AgentSupplier`、`Location`、`LastVisitedAlley` | 由具体 Mission 流程设置，用于生成/供应 Agent、地点切换和巷战上下文；不是战役全局存档字段。 |
| 模式切换 | `SetMissionMode(MissionMode, bool)` | 直接改变当前 Mission 的模式；只在流程已经进入对应状态时调用，错误时机可能让菜单、对话和 Mission state 不一致。 |
| Location / 菜单 | `OnCloseEncounterMenu`、`OnCharacterLocationChanged`、`OnProcessSentence`、`OnConversationContinue` | 将 Encounter 菜单、角色进出地点和会话句子转给当前 Mission 的逻辑。 |
| Agent 注视与跟随 | `AgentLookingAtAgent`、`CheckIfAgentCanFollow`、`AddAgentFollowing`、`CheckIfAgentCanUnFollow`、`RemoveAgentFollowing` | 操作当前 Agent 的导航/对话行为；实现会查找 `CampaignAgentComponent`，不要传入已经离开 Mission 的 Agent。 |
| 对话动画 | `OnConversationPlay`、`OnConversationStart`、`OnConversationEnd` | 驱动动作频道、表情和语音清理；结束时会释放视觉与声音状态。 |
| 结束与清理 | `EndMission`、`FadeOutCharacter`、`OnGameStateChanged` | 分别请求 Mission 结束、淡出当前 Mission 中匹配的角色、清理对话声音/状态；这些调用会影响全局任务生命周期。 |

## 真实示例

以下路径从当前的 `Mission` 行为集合取得真实实现，而不是假设有依赖注入容器：

```csharp
using SandBox.Missions.MissionLogics;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
CampaignMissionComponent component = mission?.GetMissionBehavior<CampaignMissionComponent>();
if (component != null && CampaignMission.Current == component)
{
    ICampaignMission context = component;
    Location location = context.Location;
    MissionMode mode = context.Mode;
}
```

如果要响应对话或地点变化，应该由当前 Mission 的逻辑在生命周期内调用接口，而不是在战役空闲 tick 中伪造 Agent：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void AddFollowingAgent(IAgent agent)
{
    Mission mission = Mission.Current;
    ICampaignMission context = CampaignMission.Current;
    if (mission == null || context == null || agent == null || context.Location == null)
    {
        return;
    }

    if (context.CheckIfAgentCanFollow(agent))
    {
        context.AddAgentFollowing(agent);
    }
}
```

这里的 `agent` 必须来自当前 `Mission.Agents` 或当前对话流程；它不是可以跨 Mission 保存的对象。

## 风险与存档边界

- `CampaignMissionComponent.OnCreated` 设置全局 `CampaignMission.Current`，`OnEndMission` 清理它；结束后继续调用接口会访问已释放的 Mission、Agent 或声音对象。
- `Mode`、`Location` 和 `LastVisitedAlley` 描述当前 Mission，不是可安全写入 `CampaignBehaviorBase.SyncData` 的战役持久状态。要保存战役事实，应设计独立的 Saveable 字段并在正确的行为生命周期中恢复。
- `AddAgentFollowing`、`RemoveAgentFollowing` 会查询 Agent 的 `CampaignAgentComponent` 和 `AgentNavigator`；没有该组件、Agent 已被移除或导航组尚未初始化时不要调用。
- `SetMissionMode`、`EndMission` 和 `OnCloseEncounterMenu` 会改变游戏状态栈。不要在 `OnMissionEnded` 之后再次调用，也不要在另一个线程持有接口。
- `OnConversationEnd` 和 `OnGameStateChanged` 清理动作频道、音效和主 Agent 状态；自行绕过这些清理会造成残留声音、错误动画或下一场 Mission 读取旧上下文。

## 版本注记

本页以 v1.4.5 `ICampaignMission.cs` 和 `CampaignMissionComponent.cs` 为准。接口成员、`MissionMode` 语义和 SandBox 行为装配可能随版本变化；特别是 Agent 跟随、海战 Mission 和对话动画，不应从旧版本签名推断。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[CampaignMission](../CampaignMission) · [ICampaignMissionManager](../ICampaignMissionManager) · [Campaign](../Campaign)
- 相关类型：[CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [Mission](../../mission/Mission) · [CampaignEventDispatcher](../CampaignEventDispatcher)
