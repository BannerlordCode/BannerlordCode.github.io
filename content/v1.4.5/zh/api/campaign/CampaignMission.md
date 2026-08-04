---
title: "CampaignMission"
description: "CampaignMission 是战役代码进入 SandBox 任务创建流程的静态门面，并承载当前活动战役任务的全局上下文。"
---
# CampaignMission

**命名空间:** `TaleWorlds.CampaignSystem`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class CampaignMission`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignMission.cs`

## 一句话职责

它把战役行为需要的开任务入口统一转发给 `Campaign.Current.CampaignMissionManager`，并在任务运行期间通过 `Current` 暴露当前的 `ICampaignMission` 上下文。

## 心智模型

**静态门面，不是任务实例。** `CampaignMission` 自己不保存一场战斗的 Agent、Location 或对话状态，也不负责向 `Mission` 注入行为。每个 `Open...Mission` 方法只是把参数交给当前战役的 `CampaignMissionManager`；在标准单人战役中，这个接口由 SandBox 在 `OnGameInitializationFinished` 阶段注入 `SandBox.CampaignMissionManager`，再由它转给 `SandBoxMissions`。

`CampaignMission.Current` 是另一条链：`SandBoxMissions` 创建任务时把 `CampaignMissionComponent` 放入行为列表，组件的 `OnCreated` 将自身设为当前上下文，`OnEndMission` 在派发结束事件后把它清为 `null`。因此它只在活动 `Mission` 生命周期内有意义。手动给 `Current` 赋一个伪实现会绕过组件、事件和清理顺序，不能用来“模拟”一场任务。

## 何时使用，何时不要用

- 在已有战役流程需要进入城镇、村庄、藏身处、攻城或对话任务时，调用相应的 `CampaignMission.Open...` 入口；由调用方先取得真实的 scene、`Location`、角色和队伍数据。
- 在当前任务的 `MissionBehavior` 中读取 `CampaignMission.Current`，访问任务模式、地点、跟随行为或对话回调；读取前要接受它可能为 `null`。
- 不要在 `Campaign` 尚未初始化、`OnGameInitializationFinished` 之前或任务结束回调之后调用这些入口。静态转发直接访问 `Campaign.Current.CampaignMissionManager`，错误时机会产生空引用或把流程送进未注入的实现。
- 不要用它修改战役对象、战斗结果或存档字段。世界状态使用对应的 `*Action.Apply` 或 [Model](../GameModels) 契约；任务结束结果由 [Mission](../../mission/Mission)、`PlayerEncounter` 和相关战役逻辑提交。

## 依赖关系

```text
Campaign.Current
  -> CampaignMissionManager (ICampaignMissionManager)
  -> SandBox.CampaignMissionManager
  -> SandBoxMissions mission factory methods
  -> MissionState.OpenNew with CampaignMissionComponent
  -> CampaignMission.Current = component
```

- 上游战役持有者：[Campaign](../Campaign) 的 `CampaignMissionManager` 属性。
- 合同与当前上下文：[ICampaignMissionManager](../ICampaignMissionManager) · [ICampaignMission](../ICampaignMission)。
- SandBox 实现：[CampaignMissionManager](../../campaign-ext/CampaignMissionManager) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)。
- 下游任务生命周期：[Mission](../../mission/Mission)；任务行为中的事件转发还会经过 [CampaignEventDispatcher](../CampaignEventDispatcher)。

## 公开入口

入口按调用场景分组，而不是按方法名字典使用：

| 场景 | 入口与关键输入 | 源码语义 |
|---|---|---|
| 普通战斗 | `OpenBattleMission(string, bool, string)`、`OpenBattleMission(MissionInitializerRecord)` | 一个入口接收 scene 与 decal/scene-level 设置，另一个接收已经准备好的任务初始化记录。不要把两种 overload 的输入混用。 |
| 海战与商队 | `OpenNavalRaidMission`、`OpenNavalBattleMission`、`OpenNavalSetPieceBattleMission`、`OpenCaravanBattleMission` | 海战入口还需要 `TroopRoster`、`Ship` 或 `IShipOrigin` 集合；当前 SandBox manager 对三个 naval 实现返回 `null`，不能假设它们在 1.4.5 单人实现中可用。 |
| 攻城 | `OpenSiegeMissionWithDeployment`、`OpenSiegeMissionNoDeployment`、`OpenSiegeLordsHallFightMission` | deployment 版本接收墙体生命比例、攻守器械和攻方标志；无 deployment 版本只表达不进入布署阶段的攻城任务。 |
| 聚落与藏身处 | `OpenTownCenterMission`、`OpenCastleCourtyardMission`、`OpenVillageMission`、`OpenIndoorMission`、`OpenHideoutBattleMission`、`OpenHideoutAmbushMission` | 这些入口依赖真实的 `Location`、scene、升级等级或队伍编组，方法内部会由 SandBox 选择具体任务类型并装配行为。 |
| 对话与特殊流程 | `OpenConversationMission`、`OpenCombatMissionWithDialogue`、`OpenMeetingMission`、`OpenPrisonBreakMission`、`OpenArenaStartMission`、`OpenArenaDuelMission`、`OpenRetirementMission`、`OpenAlleyFightMission`、`OpenBattleMissionWhileEnteringSettlement`、`OpenDisguiseMission` | 这些入口把对话角色、囚犯、决斗回调、地点或伪装来源交给 SandBox；不要绕开它们直接 `MissionState.OpenNew`，否则可能缺少 `CampaignMissionComponent`。 |

所有入口返回 `IMission`，但返回值只代表任务已经按该入口请求打开；`CampaignMission.Current` 要等组件的 `OnCreated` 执行后才可靠。

## 真实示例

以下检查使用真实的战役持有路径和任务上下文，不把 `CampaignMissionManager` 当成有 `Current` 属性的单例：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Campaign campaign = Campaign.Current;
if (campaign != null && campaign.CampaignMissionManager != null)
{
    CampaignMission.ICampaignMissionManager manager = campaign.CampaignMissionManager;
    ICampaignMission activeMission = CampaignMission.Current;

    if (activeMission != null && Mission.Current != null)
    {
        MissionMode mode = activeMission.Mode;
        Location location = activeMission.Location;
    }
}
```

战役行为确实会用 `CampaignMission` 启动对话。例如 StoryMode 的 `VillagersInNeed` 使用 `CharacterObject.PlayerCharacter` 和已取得的村民角色构造 `ConversationCharacterData`，然后调用 `OpenConversationMission`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation;
using TaleWorlds.Core;

public static void OpenConversationWith(CharacterObject partner)
{
    if (Campaign.Current == null || partner == null)
    {
        return;
    }

    ConversationCharacterData player = new ConversationCharacterData(
        CharacterObject.PlayerCharacter, null, true, false, false, false, false, false);
    ConversationCharacterData other = new ConversationCharacterData(
        partner, null, true, true, false, false, false, false);

    CampaignMission.OpenConversationMission(player, other);
}
```

## 风险与存档边界

- `Campaign.Current` 或其 `CampaignMissionManager` 尚未注入时，静态入口没有可用的转发目标；把调用放进 SubModule 的过早加载钩子会得到空引用或错误的游戏状态。
- `Current` 是活动 Mission 的瞬时上下文，不是存档中的稳定对象。不要把它保存到战役 Behavior 字段，在任务结束后继续访问其中的 `Agent`、`Location` 或对话对象。
- `OnMissionResultReady` 与 `OnEndMission` 之间仍可能有 `PlayerEncounter` 的结果提交和攻城器械同步。不要在 `Open...` 返回后就假设战斗结果已经落盘，也不要自行清空队伍 roster。
- 直接给 `Current` 赋值或绕过 `CampaignMissionComponent` 创建 Mission 会跳过 `OnMissionStarted`、`OnAfterMissionStarted`、`OnMissionEnded` 事件，可能留下全局上下文或事件接收器状态。
- naval 入口由接口暴露不等于 SandBox 已实现；v1.4.5 当前 manager 的三个 naval 方法明确返回 `null`，调用方必须先确认返回值与模块支持。

## 版本注记

本页以 v1.4.5 的 `CampaignMission.cs`、SandBox 实现和调用点为准。`CampaignMission` 的静态门面模式可能跨版本保留，但具体任务入口、海战支持、`MissionInitializerRecord` 字段和 `CampaignMissionComponent` 的事件顺序都应按目标版本源码复核。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[Campaign](../Campaign) · [ICampaignMission](../ICampaignMission) · [ICampaignMissionManager](../ICampaignMissionManager)
- 相关类型：[CampaignMissionManager](../../campaign-ext/CampaignMissionManager) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [Mission](../../mission/Mission)
