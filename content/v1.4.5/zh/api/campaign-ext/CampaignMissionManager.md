---
title: "CampaignMissionManager"
description: "SandBox.CampaignMissionManager 是 CampaignSystem 合同与 SandBoxMissions 之间的显式接口转发器，由 SandBox 在战役初始化完成时注入。"
---
# CampaignMissionManager

**命名空间:** `SandBox`  
**模块:** `SandBox`  
**类型:** `public class CampaignMissionManager : ICampaignMissionManager`  
**基类:** 无显式基类；实现 `CampaignMission.ICampaignMissionManager`  
**源文件:** `Modules.SandBox/SandBox/Sandbox/CampaignMissionManager.cs`

## 一句话职责

它把 CampaignSystem 的任务创建合同逐项转发给 SandBox 的 `SandBoxMissions`，并把模块能力注入到当前 `Campaign`。它只负责创建入口的模块适配，不持有活动 Mission，也不替调用方保存战役结果或存档状态。

## 心智模型

这是一个**适配器**，不是任务状态管理器。`SandBoxSubModule.OnGameInitializationFinished` 在确认当前 `GameType` 是 `Campaign` 后完成 `CampaignMissionManager` 属性赋值；之后 `CampaignMission` 的任务打开方法才有具体实现可调用。这个类的大多数成员采用显式 `ICampaignMissionManager` 实现，因此调用者通过具体 `CampaignMissionManager` 变量看不到它们，应该通过 `Campaign.Current.CampaignMissionManager` 取得接口。

每个转发方法都进入 `SandBoxMissions` 对应的 Open 方法。后者负责 `MissionState.OpenNew`、初始化记录和行为列表；manager 不会替调用者创建 `CampaignMissionComponent`，也不会保存当前 Mission。组件页描述的是运行期上下文，manager 页描述的是创建期边界。

## 何时使用，何时不要用

- 需要观察当前模块实现或验证 SandBox 是否已经注入时，读取 `Campaign.Current.CampaignMissionManager`，并按接口调用。
- 普通战役代码优先用 [CampaignMission](../../campaign/CampaignMission) 静态门面；这样不会把 SandBox 命名空间传播到 Campaign-only 代码。
- 不要写 `CampaignMissionManager.Current`，源码没有这个属性；也不要在 `OnSubModuleLoad` 阶段自行构造并当作完整 Campaign 依赖使用。
- 不要把它当作 `MissionBehavior` 或结果提交器。Mission 生命周期由 [CampaignMissionComponent](../CampaignMissionComponent)、[Mission](../../mission/Mission) 和战役 Encounter 逻辑共同完成。

## 依赖关系

```text
SandBoxSubModule.OnGameInitializationFinished
  -> Campaign.Current.CampaignMissionManager = injected CampaignMissionManager
  -> ICampaignMissionManager explicit dispatch
  -> SandBoxMissions.Open methods
  -> MissionState.OpenNew
  -> CampaignMissionComponent
```

- 合同与静态入口：[ICampaignMissionManager](../../campaign/ICampaignMissionManager) · [CampaignMission](../../campaign/CampaignMission)。
- 所属战役：[Campaign](../../campaign/Campaign)。
- 下游 Mission 上下文：[CampaignMissionComponent](../CampaignMissionComponent) · [Mission](../../mission/Mission)。
- 事件边界：组件通过 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher) 转发 Mission 开始、tick 和结束。

## 公开成员

源码中的非 naval 合同入口都是显式接口实现，按功能分组如下：

| 入口族 | 转发成员 | SandBox 责任 |
|---|---|---|
| 普通/商队战斗 | `OpenBattleMission` 两个 overload、`OpenCaravanBattleMission` | 直接调用对应 `SandBoxMissions` 方法并返回 `IMission`。初始化记录 overload 不会自动补齐调用方缺失的数据。 |
| 攻城 | `OpenSiegeMissionWithDeployment`、`OpenSiegeMissionNoDeployment`、`OpenSiegeLordsHallFightMission` | 将墙体比例、器械、攻方状态和优先 roster 交给攻城 Mission 工厂。 |
| 聚落/藏身处 | `OpenTownCenterMission`、`OpenCastleCourtyardMission`、`OpenVillageMission`、`OpenIndoorMission`、`OpenHideoutBattleMission`、`OpenHideoutAmbushMission` | 由 `SandBoxMissions` 选择具体 Mission key，并把 `CampaignMissionComponent` 装入行为集合。 |
| 对话/特殊任务 | `OpenAlleyFightMission`、`OpenCombatMissionWithDialogue`、`OpenBattleMissionWhileEnteringSettlement`、`OpenArenaStartMission`、`OpenArenaDuelMission`、`OpenConversationMission`、`OpenMeetingMission`、`OpenRetirementMission`、`OpenDisguiseMission`、`OpenPrisonBreakMission` | 转发角色、地点、回调和任务阶段数据；返回的是创建结果，不是已完成结果。 |
| 海战 | `OpenNavalRaidMission`、`OpenNavalBattleMission`、`OpenNavalSetPieceBattleMission` | v1.4.5 当前实现体直接返回 `null`。接口存在不能当作 SandBox 已提供海战能力。 |

唯一非显式的公开成员是 `OpenArenaDuelMission`、`OpenDisguiseMission` 和三个 naval 方法，但它们仍然只是 `SandBoxMissions` 的转发或明确的空实现。

## 真实示例

以下代码从真实的 Campaign 属性取得接口，再进入 SandBox 的 town-center 转发路径；它不依赖不存在的静态 `Current`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Campaign campaign = Campaign.Current;
if (campaign != null && campaign.CampaignMissionManager != null)
{
    CampaignMission.ICampaignMissionManager manager = campaign.CampaignMissionManager;
    Settlement settlement = Settlement.CurrentSettlement;
    Location location = LocationComplex.Current.GetLocationWithId("center");

    if (settlement != null && settlement.IsTown && location != null)
    {
        int wallLevel = settlement.Town.GetWallLevel();
        string scene = location.GetSceneName(wallLevel);
        IMission mission = manager.OpenTownCenterMission(
            scene, wallLevel, location, CharacterObject.PlayerCharacter, "center");
    }
}
```

`CampaignMissionManager.OpenTownCenterMission` 的具体实现只把这些参数传给 `SandBoxMissions.OpenTownCenterMission`；真正的行为数组、`MissionState.OpenNew` 和组件注入发生在后者，而不是这个适配器。

## 风险与存档边界

- 注入发生在 `OnGameInitializationFinished`。在此之前读取接口可能得到 `null`；在非 Campaign `GameType` 中也没有这条依赖。
- 显式接口实现意味着把对象静态类型写成 `CampaignMissionManager` 后不能直接调用大多数入口。不要通过反射绕过合同，改用 `CampaignMission.ICampaignMissionManager`。
- `SandBoxMissions` 返回的 `Mission` 会在之后触发组件生命周期；manager 返回不等于 `CampaignMission.Current` 已设置，也不等于 `OnMissionStarted` 已完成。
- 三个 naval 方法明确返回 `null`。调用方若直接访问返回值或把它压入 Mission 流程，会产生空引用或卡在未完成任务状态。
- manager 不负责存档战役状态。不要把它或它返回的瞬时 Mission 当成 `SyncData` 字段；保存应由相应 Campaign/Behavior 合同管理。

## 版本注记

本页按 v1.4.5 SandBox `CampaignMissionManager.cs` 与 `SandBoxSubModule.cs` 撰写。反编译源中的未知 IL 注释不改变这里可确认的转发关系；升级时应复核显式实现、注入时机、naval 返回值和 SandBox Mission 行为列表。

## 导航

- ↑ 父级：[Campaign 扩展 API](../)
- ↔ 同级：[CampaignMissionComponent](../CampaignMissionComponent) · [CampaignMission](../../campaign/CampaignMission) · [ICampaignMissionManager](../../campaign/ICampaignMissionManager)
- 相关类型：[Campaign](../../campaign/Campaign) · [Mission](../../mission/Mission) · [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)
