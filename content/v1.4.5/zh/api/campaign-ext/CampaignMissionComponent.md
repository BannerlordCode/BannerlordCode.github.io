---
title: "CampaignMissionComponent"
description: "CampaignMissionComponent 是 SandBox 附加到 Mission 的战役行为，负责建立 CampaignMission.Current、转发事件并在任务结束时清理。"
---
# CampaignMissionComponent

**命名空间:** `SandBox.Missions.MissionLogics`  
**模块:** `SandBox.Missions`  
**类型:** `public class CampaignMissionComponent : MissionLogic, ICampaignMission`  
**基类:** `MissionLogic`  
**源文件:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/CampaignMissionComponent.cs`

## 一句话职责

它是每场 SandBox 战役 Mission 的生命周期桥，把 Mission 行为、Campaign 事件、地点/对话逻辑和 `CampaignMission.Current` 的清理顺序接在一起。

## 心智模型

把它看作**附着在 Mission 上的生命周期组件**，不是战役服务。`SandBoxMissions` 在创建城镇、村庄、室内、对话、竞技场、攻城等任务时，把 `new CampaignMissionComponent()` 放入 `MissionBehavior` 数组；引擎随后按 `MissionLogic` 生命周期调用它。

关键顺序是：`EarlyStart` 保存活动 `MissionState`，`OnCreated` 设置 `CampaignMission.Current`，`OnBehaviorInitialize` 派发 `OnMissionStarted`，`AfterStart` 派发 `OnAfterMissionStarted`，tick 期间转发 `MissionTick`，结果阶段处理 `PlayerEncounter`，`OnEndMission` 先同步必要的攻城状态、派发 `OnMissionEnded`，最后清空 `CampaignMission.Current`。这条顺序比单个属性或回调签名更重要。

## 何时使用，何时不要用

- 在活动 `Mission` 内需要读取 `ICampaignMission` 或观察任务生命周期时，用 `Mission.Current.GetMissionBehavior<CampaignMissionComponent>()` 获取已附着的实例。
- 在自定义 Mission 初始化器中，如果你的流程需要 Campaign 的地点、对话、跟随和结果桥接，必须像 SandBox 的行为列表一样把组件附加到该 Mission。
- 不要在战役空闲阶段 `new CampaignMissionComponent()` 后直接访问 `State`、`Mode` 或 `Mission`；构造对象尚未被引擎附着，也不会自动成为 `CampaignMission.Current`。
- 不要把组件或其 Agent/声音/Location 状态保存到 Campaign Behavior。任务结束会清理静态上下文，持久化需求应放在独立的 Saveable 战役状态中。

## 依赖关系

```text
SandBox mission factory methods
  -> MissionState.OpenNew with CampaignMissionComponent
  -> MissionLogic lifecycle
  -> CampaignMission.Current
  -> CampaignEventDispatcher + PlayerEncounter + CampaignAgentComponent
  -> OnEndMission clears current context
```

- 创建与实现：[CampaignMission](../../campaign/CampaignMission) · [CampaignMissionManager](../CampaignMissionManager)。
- Mission 宿主：[Mission](../../mission/Mission)。
- Campaign 事件：[CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)。
- Agent / 战斗下游：[Agent](../../mission/Agent) · [PlayerEncounter](../../campaign/PlayerEncounter)。
- 当前合同：[ICampaignMission](../../campaign/ICampaignMission)。

## 公开成员

| 阶段/主题 | 成员 | 真实行为与调用时机 |
|---|---|---|
| 状态 | `State`、`AgentSupplier`、`Location`、`LastVisitedAlley`、显式 `ICampaignMission.Mode` | 状态来自活动 `MissionState`/`Mission.Mode`；地点、巷道和 Agent 供应器由具体任务流程设置。它们描述当前任务，不是全局战役登记。 |
| 创建 | `EarlyStart`、`OnCreated`、`OnBehaviorInitialize`、`AfterStart` | 保存状态、设置 `CampaignMission.Current`、派发开始事件，再通知 after-start 订阅者。顺序不能随意重排。 |
| Agent 与 tick | `OnAgentCreated`、`OnPreDisplayMissionTick`、`OnMissionTick` | 为 Agent 添加 `CampaignAgentComponent`，清理会话声音，并在战役存在时转发 `MissionTick`。 |
| 结果与结束 | `OnMissionResultReady`、`OnEndMission` | 将玩家胜负/撤退传给 `PlayerEncounter`，同步攻城器械，派发 Mission 结束事件并清空 `CampaignMission.Current`。 |
| 地点与跟随 | `OnCharacterLocationChanged`、`CheckIfAgentCanFollow`、`AddAgentFollowing`、`CheckIfAgentCanUnFollow`、`RemoveAgentFollowing` | 通过 `MissionAgentHandler`、`CampaignAgentComponent` 和 `AgentNavigator` 实现地点切换与跟随。 |
| 对话 | `OnConversationStart`、`OnConversationPlay`、`OnConversationEnd`、`OnProcessSentence`、`OnConversationContinue`、`OnCloseEncounterMenu` | 负责动作频道、面部动画、声音、对话状态和菜单关闭；这些是 Mission 内回调，不是战役 tick API。 |
| 清理辅助 | `EndMission`、`FadeOutCharacter`、`OnGameStateChanged`、`PlayConversationSoundEvent` | 请求结束、淡出当前 Agent、清理游戏状态/声音；调用会影响任务栈或视觉资源。 |

## 真实示例

从当前 `Mission` 行为集合获取组件，是源码实际生命周期下的安全入口：

```csharp
using SandBox.Conversation.MissionLogics;
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
    if (context.Location != null)
    {
        MissionMode mode = context.Mode;
        Location currentLocation = context.Location;
    }
}
```

若自定义任务需要这条桥，行为必须在 `MissionState.OpenNew` 的初始化委托中附加，而不是在任务打开后补写静态字段：

```csharp
return MissionState.OpenNew(
    "Conversation",
    initializer,
    mission => new MissionBehavior[]
    {
        new CampaignMissionComponent(),
        new MissionConversationLogic(),
        new MissionOptionsComponent()
    },
    true,
    false);
```

这里的 `initializer` 应由当前 SandBox scene 流程产生的 `MissionInitializerRecord` 提供；组件的 `OnCreated` 才会在引擎阶段将自身设为 `CampaignMission.Current`。

## 风险与存档边界

- `OnCreated` 与 `OnEndMission` 维护一个静态全局指针。漏掉组件会使战役代码看到 `null`，手动赋值则会破坏事件和清理顺序。
- `OnMissionResultReady` 可能更新 `PlayerEncounter`，而 `OnEndMission` 还会处理攻城器械和事件派发。不要在过早的回调中直接结算 roster、SiegeEvent 或存档字段。
- `OnAgentCreated` 添加 `CampaignAgentComponent`；在 Agent 创建前或离开后调用跟随/对话操作会遇到缺少导航组件、已释放视觉对象或空引用。
- `OnMissionTick` 只在 `Campaign.Current != null` 时派发战役 tick；不要把它当成脱离 Campaign 也会工作的通用 MissionLogic。
- `PlayConversationSoundEvent`、动画频道和 `_currentAgent` 都是短寿命 Mission 资源。任务结束后不要从缓存回调它们，也不要跨线程使用组件。
- 组件本身不是 Saveable 对象。将 `Location`、`LastVisitedAlley` 或 Agent 引用写入战役 `SyncData` 会把瞬时 Mission 状态带入读档，形成坏档或无效引用。

## 版本注记

本页按 v1.4.5 `CampaignMissionComponent.cs`、`SandBoxMissions.cs` 和相关战役事件代码撰写。升级时重点复核 `OnCreated`/`OnEndMission` 的清理顺序、`PlayerEncounter` 结果映射、攻城状态回写和行为列表是否仍包含该组件。

## 导航

- ↑ 父级：[Campaign 扩展 API](../)
- ↔ 同级：[CampaignMissionManager](../CampaignMissionManager) · [CampaignMission](../../campaign/CampaignMission) · [ICampaignMission](../../campaign/ICampaignMission)
- 相关类型：[Mission](../../mission/Mission) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) · [PlayerEncounter](../../campaign/PlayerEncounter)
