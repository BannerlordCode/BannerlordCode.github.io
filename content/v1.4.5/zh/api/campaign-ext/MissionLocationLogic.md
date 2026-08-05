---
title: "MissionLocationLogic"
description: "MissionLocationLogic 是 SandBox 地点 Mission 的生命周期行为，负责地点切换、玩家陪同角色生成、出生点选择和结束清理。"
---
# MissionLocationLogic

**命名空间:** `SandBox.Missions.MissionLogics`  
**模块:** `SandBox.Missions`  
**类型:** `public class MissionLocationLogic : MissionLogic`  
**基类:** [MissionLogic](../../mission-ext/MissionLogic)  
**源文件:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionLocationLogic.cs`

## 一句话职责

它是 SandBox 地点 Mission 的桥接行为，把 Campaign 的 `Location` 和陪同角色转换成 Mission 内的出生、Agent、跟随与清理流程。

## 心智模型

把它看作**附着在一个具体 Mission 上的地点控制器**，而不是全局地点服务。`SandBoxMissions` 在城镇中心、室内、村庄、监狱逃脱、巷道等 Mission 的行为列表中创建它，并同时加入 [MissionAgentHandler](../MissionAgentHandler)。引擎随后按 `MissionLogic` 生命周期调用它。

它在构造时保存目标地点和可能的上一地点，并注册三个非序列化 `CampaignEvents` 监听器；`EarlyStart` 才取得当前 Mission 的 `MissionAgentHandler`；`OnCreated` 把目标地点写入 [CampaignMissionComponent](../CampaignMissionComponent) 的 `CampaignMission.Current.Location`；玩家 Agent 出生后再生成陪同角色。Mission 结束时 `OnRemoveBehavior` 删除临时地点角色并解除监听器。因此，mod 通常应该获取已附着的实例并读取它，而不是手动调用生命周期方法。

## 生命周期

```text
SandBoxMissions
  -> new MissionLocationLogic(location, specialPlayerTag)
  -> 注册 LocationCharactersAreReadyToSpawn / BeforePlayerAgentSpawn / PlayerAgentSpawned
  -> Mission.EarlyStart -> 获取 MissionAgentHandler
  -> Mission.OnCreated -> CampaignMission.Current.Location = location
  -> 玩家出生 -> SpawnCharactersAccompanyingPlayer
  -> Agent 移除 -> 清理地点角色和陪同包装
  -> OnRemoveBehavior -> 删除临时角色、解除事件监听
```

- `_currentLocation` 是本 Mission 目标地点；`_previousLocation` 只在战役模式下从 `GameMenuManager.PreviousLocation` 获取，并且必须是目标地点的 passage。
- `specialPlayerTag` 用于监狱逃脱等特殊玩家出生点；没有它时逻辑会依次处理竞技场、passage 和城镇/城堡外部出生点。
- 监听器是非序列化的 Mission 运行时绑定，不会成为存档字段。

## 何时使用，何时不要用

适合使用它的情况：

- 在活动地点 Mission 中读取地点行为，或通过 `GetSpawnFrameOfPassage` 查询已建立的 passage 出生框架。
- 编写与地点 Agent 生成、陪同角色跟随、地点切换或 Agent 移除相关的 Mission 扩展时，理解 SandBox 已经提供的标准顺序。
- 检查某个自定义 Mission 是否已经同时挂载 `CampaignMissionComponent`、`MissionAgentHandler` 和本逻辑。

不要这样使用：

- 不要在 CampaignBehavior 的构造函数或地图 tick 中创建它；构造函数会注册监听器，但对象没有被 Mission 附着和清理。
- 不要手动调用 `EarlyStart`、`OnCreated`、`OnAgentRemoved` 或 `OnRemoveBehavior` 来“补初始化”；这些回调由 Mission 生命周期驱动。
- 不要在没有活动 `Mission.Current`、`CampaignMission.Current`、`LocationComplex.Current` 或场景点位时调用生成方法。
- 不要把 `Agent`、`UsableMachine`、`LocationCharacter` 或本逻辑实例写入 Campaign 存档；它们属于当前场景和 Mission。

## 依赖关系

```text
SandBoxMissions
  -> MissionState.OpenNew / Mission behavior list
  -> CampaignMissionComponent + MissionAgentHandler + MissionLocationLogic
  -> CampaignMission.Current.Location
  -> LocationComplex / LocationCharacter / AccompanyingCharacter
  -> Agent / CampaignAgentComponent / FollowAgentBehavior
```

- Mission 宿主：[Mission](../../mission/Mission)、[MissionLogic](../../mission-ext/MissionLogic)。
- Campaign 桥：[CampaignMissionComponent](../CampaignMissionComponent)、[CampaignMission](../../campaign/CampaignMission)。
- 地点输入：[Location](../../campaign/Location)、[LocationEncounter](../../campaign/LocationEncounter)、[LocationCharacter](../../campaign/LocationCharacter)、[AccompanyingCharacter](../../campaign/AccompanyingCharacter)。
- Agent 生成：[MissionAgentHandler](../MissionAgentHandler)、[Agent](../../mission/Agent)、[CampaignAgentComponent](../CampaignAgentComponent)。
- 工厂调用：[SandBoxMissions](../SandBoxMissions) 将本逻辑加入多种地点 Mission 的行为数组。

## 公开成员与调用时机

| 成员 | 源码行为与副作用 | 正确时机 |
|---|---|---|
| `MissionLocationLogic(Location, string)` | 保存当前/上一地点和特殊出生标签，并注册三个非序列化 Campaign 事件；它不是无副作用的数据构造函数。 | 由 Mission 工厂在创建行为数组时调用。 |
| `EarlyStart()` | 从 `Mission.Current` 获取 `MissionAgentHandler`，供后续出生流程使用。 | 引擎启动 Mission 行为时。 |
| `OnCreated()` | 当目标地点非空时，把它写入 `CampaignMission.Current.Location`。 | `CampaignMissionComponent` 已建立活动桥之后。 |
| `SpawnCharactersAccompanyingPlayer(bool)` | 将 `LocationEncounter.CharactersAccompanyingPlayer` 加回当前地点，并用 `MissionAgentHandler` 生成 wandering Agent；必要时设置玩家队伍和跟随行为。 | 玩家 Agent 已出生、场景和地点状态已准备好时。 |
| `GetSpawnFrameOfPassage(Location)` | 在 `TownPassageProps` 或禁用 passage 中按目标地点查找 PilotStandingPoint；找不到时返回 `MatrixFrame.Identity`。 | 需要从上一地点进入当前地点时，且 `EarlyStart` 已获取 handler。 |
| `OnAgentRemoved(...)` | 对符合条件的人类死亡/失能 Agent，从当前地点移除对应 `LocationCharacter`；死亡的陪同角色还会从 `LocationEncounter` 移除。 | 由 Mission 引擎回调，不应手动重放。 |
| `OnRemoveBehavior()` | 从标准地点删除非 Hero 临时角色，解除本对象的 Campaign 监听器，并交回基类清理。 | Mission 被移除时一次性执行。 |

## 事件驱动的实际流程

构造函数注册的三个事件各自承担不同阶段：

- `LocationCharactersAreReadyToSpawnEvent` 提供地点角色准备进入场景的时机；城镇中心流程还会把巷道角色纳入准备集合。
- `BeforePlayerAgentSpawnEvent` 根据特殊 tag、竞技场、上一地点 passage、城镇/城堡外部出生点选择玩家出生框架，并决定陪同角色是否禁用坐骑。
- `PlayerAgentSpawned` 触发 `SpawnCharactersAccompanyingPlayer`。跟随玩家开始的陪同角色会被放到玩家附近，并设置 `FollowAgentBehavior`；其他角色使用普通 wandering spawn。

地点切换时，`CampaignMissionComponent.OnCharacterLocationChanged` 与 `MissionAgentHandler` 负责淡出离开的角色或生成进入的角色；本逻辑不应被当成独立的地点数据库来调用。

## 真实获取示例

从当前 Mission 获取已经附着的逻辑是 mod 侧的安全观察入口；`null` 表示当前 Mission 不是 SandBox 地点 Mission，或该行为尚未加入：

```csharp
using SandBox.Missions.MissionLogics;
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public static MissionLocationLogic GetActiveLocationLogic()
{
    Mission mission = Mission.Current;
    if (mission == null || CampaignMission.Current == null)
    {
        return null;
    }

    return mission.GetMissionBehavior<MissionLocationLogic>();
}
```

如果自定义 Mission 确实需要地点角色流程，应在自己的 `MissionState.OpenNew` 行为数组中按 SandBox 的组合方式提供 `CampaignMissionComponent`、`MissionAgentHandler` 和 `MissionLocationLogic`，并让引擎驱动它们的顺序；不要在 Mission 打开后补写 `CampaignMission.Current.Location`。

## 风险与存档边界

- **初始化顺序：** `EarlyStart` 假定 `Mission.Current` 已存在且 Mission 行为中有 `MissionAgentHandler`。缺少该行为时，后续生成/出生点流程可能空引用。
- **Campaign 桥：** `OnCreated` 直接写入 `CampaignMission.Current.Location`。如果自定义 Mission 没有 `CampaignMissionComponent`，不能靠手动设置字段修复顺序。
- **事件泄漏：** 构造函数注册的是非序列化监听器；若自行创建对象却不让 Mission 移除它，旧对象会继续接收事件并持有场景状态。
- **地点上下文：** `OnRemoveBehavior` 遍历 `LocationComplex.Current`，并清理标准地点的非 Hero 角色。不要在聚落地点上下文已销毁后手动调用它。
- **Agent 过期引用：** `OnAgentRemoved` 会移除地点角色和陪同包装；Mission 结束后缓存的 Agent、`CampaignAgentComponent`、导航行为和 `UsableMachine` 都不可再用于 Campaign tick。
- **出生点回退：** `GetSpawnFrameOfPassage` 找不到 passage 点位时返回 identity，不等于场景中存在一个有效的可站立出生点；调用方必须让标准 Mission 出生流程继续处理。
- **临时状态：** `_previousLocation`、特殊出生 tag、坐骑标志和监听器是 Mission 运行时状态，不应写入 `SyncData` 或 Saveable 对象。

## 版本注记

本页按 v1.4.5 `MissionLocationLogic.cs`、`SandBoxMissions.cs`、`CampaignMissionComponent.cs` 和 `MissionAgentHandler.cs` 撰写。升级时重点复核事件名称、Mission 行为数组组合、地点 ID、特殊出生 tag、Agent 移除状态以及 `OnRemoveBehavior` 的清理范围。

## 导航

- ↑ 父级：[Campaign 扩展 API](../)
- ↔ 同级：[CampaignMissionComponent](../CampaignMissionComponent) · [MissionAgentHandler](../MissionAgentHandler) · [SandBoxMissions](../SandBoxMissions)
- 相关：[Mission](../../mission/Mission) · [MissionLogic](../../mission-ext/MissionLogic) · [LocationEncounter](../../campaign/LocationEncounter) · [CampaignMission](../../campaign/CampaignMission)
- English: [MissionLocationLogic](../../../../en/api/campaign-ext/MissionLocationLogic)
