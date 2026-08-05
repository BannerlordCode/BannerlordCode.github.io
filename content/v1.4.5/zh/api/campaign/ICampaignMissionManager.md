---
title: "ICampaignMissionManager"
description: "ICampaignMissionManager 是 Campaign 持有的任务创建合同，声明 CampaignMission 到具体 SandBox 任务工厂的边界。"
---
# ICampaignMissionManager

**命名空间:** `TaleWorlds.CampaignSystem`（嵌套于 `CampaignMission`）  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public interface ICampaignMissionManager`
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignMission.cs`

## 一句话职责

它定义 Campaign 如何把任务创建请求交给当前游戏模块，而不把 SandBox 的具体任务工厂硬编码进 CampaignSystem。它只规定入口和参数边界，真正的 Mission 创建、行为装配与模块能力由已注入的实现负责。

## 心智模型

这是一个**模块边界合同**，不是任务注册表，也不是拥有 `Current` 属性的全局单例。`Campaign` 保存它的一个实例；SandBox 在战役初始化完成时注入该实现。`CampaignMission` 的静态方法通过这个接口转发，具体实现再调用 `SandBoxMissions` 并安排 `CampaignMissionComponent`。

接口里同时包含战斗、攻城、聚落、对话、藏身处、竞技场和海战入口，是为了让 CampaignSystem 不依赖 SandBox 的实现类型。调用者通常应该使用 [CampaignMission](../CampaignMission) 的静态门面；只有在需要检查或替换模块实现时才直接读取 `Campaign.Current.CampaignMissionManager`。

## 何时使用，何时不要用

- 在战役已经初始化后，通过 `Campaign.Current.CampaignMissionManager` 读取当前实现，或在明确的模块组装阶段替换它。
- 在普通 Mod 战役代码中，优先调用 [CampaignMission](../CampaignMission)，这样调用点保持在 CampaignSystem 合同上，并复用同一套转发约束。
- 不要在 `OnSubModuleLoad` 或 `Campaign` 尚未建立时假设这个合同已经有实现；SandBox 注入发生在 `OnGameInitializationFinished`。
- 不要从 `ICampaignMissionManager` 推断所有入口都已实现。v1.4.5 的 SandBox 具体类对三个 naval 入口返回 `null`。

## 依赖关系

```text
Campaign.CampaignMissionManager
  <- SandBoxSubModule.OnGameInitializationFinished
  <- SandBox.CampaignMissionManager instance
  -> SandBoxMissions.Open methods
  -> MissionState.OpenNew
  -> CampaignMissionComponent implements ICampaignMission
```

- 上游持有者：[Campaign](../Campaign)。
- 静态调用方：[CampaignMission](../CampaignMission)。
- 当前实现：[CampaignMissionManager](../../campaign-ext/CampaignMissionManager)。
- Mission 上下文：[ICampaignMission](../ICampaignMission) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [Mission](../../mission/Mission)。

## 公开成员

| 入口族 | 成员 | 关键契约 |
|---|---|---|
| 普通与商队战斗 | `OpenBattleMission` 两个 overload、`OpenCaravanBattleMission` | 可接收 scene 参数或 `MissionInitializerRecord`；商队入口额外接收 `isCaravan`，不会自动替调用方准备 roster。 |
| 海战 | `OpenNavalRaidMission`、`OpenNavalBattleMission`、`OpenNavalSetPieceBattleMission` | 分别需要海战队伍/船只、初始化记录或三组 `IShipOrigin`；接口声明不代表当前模块提供非空实现。 |
| 攻城 | `OpenSiegeMissionWithDeployment`、`OpenSiegeMissionNoDeployment`、`OpenSiegeLordsHallFightMission` | 由调用方提供墙体比例、器械、攻方和优先队伍等战役事实。 |
| 聚落与藏身处 | `OpenTownCenterMission`、`OpenCastleCourtyardMission`、`OpenVillageMission`、`OpenIndoorMission`、`OpenHideoutBattleMission`、`OpenHideoutAmbushMission` | `Location`、scene、升级等级和 `FlattenedTroopRoster` 必须来自当前战役流程。 |
| 对话与特殊任务 | `OpenConversationMission`、`OpenCombatMissionWithDialogue`、`OpenMeetingMission`、`OpenPrisonBreakMission`、`OpenArenaStartMission`、`OpenArenaDuelMission`、`OpenRetirementMission`、`OpenAlleyFightMission`、`OpenBattleMissionWhileEnteringSettlement`、`OpenDisguiseMission` | 这些入口携带角色、地点、回调或任务阶段数据；实现会把它们转成具体 Mission 和行为集合。 |

manager 入口的返回类型是 `IMission`。它表示创建请求的结果，不表示 `CampaignMission.Current` 已经完成设置；当前上下文由 `CampaignMissionComponent.OnCreated` 建立。

## 真实示例

以下是直接读取 Campaign 所有权的真实路径；它没有使用不存在的 `CampaignMissionManager.Current`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

Campaign campaign = Campaign.Current;
if (campaign != null)
{
    CampaignMission.ICampaignMissionManager manager = campaign.CampaignMissionManager;
    if (manager != null && Settlement.CurrentSettlement != null)
    {
        Location location = LocationComplex.Current.GetLocationWithId("center");
        if (location != null && Settlement.CurrentSettlement.IsTown)
        {
            int wallLevel = Settlement.CurrentSettlement.Town.GetWallLevel();
            string scene = location.GetSceneName(wallLevel);
            IMission mission = manager.OpenTownCenterMission(
                scene, wallLevel, location, CharacterObject.PlayerCharacter, "center");
        }
    }
}
```

这个入口与 SandBox 的 `OpenTownCenterMission` 调用点一致：实现会根据升级等级取得 civilian scene level，再用 `MissionState.OpenNew` 添加 `CampaignMissionComponent` 和城镇行为。`playerSpawnTag` 应由实际场景流程提供；示例中的 `"center"` 只适用于对应中心位置，不是任意聚落的通用标签。

## 风险与存档边界

- manager 是 Campaign 的模块依赖，不是可随时 `new` 的临时对象。替换实现后必须仍然满足整个接口，并在任务创建阶段装配正确的 Mission behaviors。
- 直接通过接口创建任务会绕过 `CampaignMission` 的空安全意图，但不会绕过 SandBox 的内部行为；在非战役或模块未注入阶段调用仍然会失败。
- `MissionInitializerRecord`、`Location`、roster、siege weapon 和 ship 集合必须属于当前战役/任务上下文。把上一次 Mission 的对象缓存到下一场会造成失效引用或错误战斗状态。
- naval 三个方法在当前 SandBox 实现中返回 `null`。调用方应检查返回值，不能把接口存在当成可用能力。
- 任务打开后仍要等待 `CampaignMissionComponent.OnCreated`、`OnBehaviorInitialize` 和 `AfterStart`；不要在任务打开方法返回点就读取未建立的 `CampaignMission.Current`。

## 版本注记

本页按 v1.4.5 `CampaignMission.cs`、`Campaign.cs` 与 SandBox 注入代码撰写。接口属于 CampaignSystem，具体支持能力由模块决定；升级版本时要重新核对新增入口、默认参数、naval 实现和行为装配。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[CampaignMission](../CampaignMission) · [ICampaignMission](../ICampaignMission) · [Campaign](../Campaign)
- 相关类型：[CampaignMissionManager](../../campaign-ext/CampaignMissionManager) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [Mission](../../mission/Mission)
