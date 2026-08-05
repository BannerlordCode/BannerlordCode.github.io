---
title: "MissionHelper"
description: "Sandbox 任务工具：Agent 跟随、淡出、禁用事件脚本、玩家生成以及场景动物生成。"
---
# MissionHelper

**命名空间：** `SandBox.SandBoxHelpers`  
**模块：** `SandBox`  
**类型：** `public static class MissionHelper`  
**基类：** 无  
**源码：** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## 一句话职责

把活动 [Mission](../../mission/Mission) 中操控 Agent 和带标签任务实体的 Sandbox 操作集中为静态入口，并把玩家、动物、跟随行为与事件脚本的实时修改限制在正确的任务生命周期内。

## 概述

它把任务场景里的 Agent 行为、玩家和动物生成、事件脚本控制集中到一个入口，同时把 Mission 的所有权和生命周期留在宿主系统中。调用者必须先确认任务场景和对象都已准备好。

## 心智模型

`MissionHelper` 是对实时 Mission 状态的静态外观。它不创建 Mission，也不拥有 Agent；活动 Mission 拥有场景、`Agent`、玩家队伍和生成生命周期。它面向任务控制器和任务行为，前提是 `Mission.Current` 以及所需场景实体已经存在。[Mission](../../mission/Mission) 与 [MissionBehavior](../../mission/MissionBehavior) 负责生命周期，helper 只执行具体 Sandbox 操作。

不要在 Campaign 启动、后台线程或 Mission 结束后调用它。不要把返回的 Agent 当成战役实体长期保存。一般 Agent 逻辑应使用 `Agent`/`AgentComponent` 契约；这些方法假定 Sandbox 组件和场景标签存在。

## 依赖图

- 所有者与生命周期：[Mission](../../mission/Mission)、[MissionBehavior](../../mission/MissionBehavior)、[Agent](../../mission/Agent)。
- 跟随链：`CampaignAgentComponent` 及其 navigator/behavior group。
- 场景链：`Mission.Current.Scene`、`GameEntity` 和 [GenericMissionEvent](../../mission-ext/GenericMissionEvent)。
- Campaign 链：[Campaign](../../campaign/Campaign)、[CharacterObject](../../campaign/CharacterObject)、[PartyBase](../../campaign/PartyBase) 及生成玩家时的 `CampaignEventDispatcher`。
- 相关生命周期：[CampaignMission](../../campaign/CampaignMission) 描述 Campaign 与 Mission 的上下文。

## Agent 行为操作

| 成员 | 用途、副作用与时机 |
|---|---|
| `FollowAgent(Agent agent, Agent target)` | 要求两个非空且活动的 Agent。取得跟随者的 `CampaignAgentComponent` 行为组，创建或复用 `FollowAgentBehavior`，切换到脚本行为并设置目标；应在两者都活动时调用。 |
| `UnfollowAgent(Agent agent)` | 如果存在则移除跟随行为；不会自动恢复任意旧行为，下一行为由调用方决定。 |
| `FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)` | 先物化枚举，先淡出非坐骑 Agent，再淡出状态不是死亡的剩余 Agent，避免场景切换时残留坐骑或视觉。 |

## 带标签的任务脚本操作

`DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)` 在 `Mission.Current.Scene` 中查找标签实体，比较每个 `GenericMissionEventScript` 的 `EventId` 与 `Parameter`，再设置 `IsDisabled`。它改变实时场景脚本，不是 Campaign 事件订阅，也不是存档数据；应在标签实体和事件脚本加载后调用。

## 玩家生成

两个重载完成同一操作：

- `SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")` 使用传入标签或约定的 `spawnpoint_player` 实体，然后转发到实体重载。
- `SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)` 使用 `CharacterObject.PlayerCharacter`、`Mission.Current.PlayerTeam` 和 `PartyAgentOrigin` 构造 `AgentBuildData`，触发玩家生成回调，通过 `Mission.SpawnAgent` 生成，并可选择初始持武器。

战役模式下只有允许的游戏模式才会采用 `civilianEquipment`。伪装主角可能读取已注册的 `npc_disguised_hero_equipment` 装备表。helper 还会把生成实体的标签复制到新 Agent，并短暂 tick 骨骼使当前帧视觉就绪。

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.Scene != null)
{
    MissionHelper.SpawnPlayer(civilianEquipment: mission.DoesMissionRequireCivilianEquipment,
        noHorses: true,
        noWeapon: false,
        wieldInitialWeapons: true,
        spawnTag: "spawnpoint_player");
}
```

## 场景动物生成

`SpawnHorses()` 扫描 `sp_horse` 标签实体，通过 `MBObjectManager` 按实体 item id 解析物品，使用 `Mission.SpawnMonster` 生成有效马匹，设置动物标志并模拟初始动画，最后返回生成的 Agent。`SpawnSheeps`、`SpawnCows`、`SpawnGeese`、`SpawnChicken`、`SpawnHogs` 对应 `sheep`、`cow`、`goose`、`chicken`、`hog` item id，执行相同标签流程但不返回列表；存在 `navigation_mesh_deactivator` 时也会使用它。

应在 Mission 场景加载、生成标签和对象注册完成后各调用一次。重复调用会生成重复动物。

## 崩溃与生命周期风险

- 除了对空值容忍的 `FadeOutAgents` 外，其余方法都假定 `Mission.Current`、场景和任务阶段有效；`EndMission` 后调用可能访问已释放原生对象。
- `FollowAgent` 假定 Agent 有 `CampaignAgentComponent` 和活动行为组，不是所有 Agent 实现都适用的通用方法。
- Agent 死亡或脱离后引用会失效；应在正确任务回调中停止跟随或淡出。
- 玩家和动物生成依赖注册好的 `CharacterObject`、`ItemObject`、队伍、标签与 `AgentBuildData`；缺失对象或标签可能导致空引用/原生失败。
- 这些操作改变运行时视觉与 Agent 状态，而不是战役存档；不要在 `SyncData` 中调用，也不要期待存档加载重新生成任务 Agent。
- 使用任务主线程和生命周期回调；原生场景与 Agent API 不适合任意后台调用。

## 导航

### ↑ 父级

- [Campaign 扩展索引](../)
- [Mission API](../../mission/)

### ↔ 同级与相关类型

- [Mission](../../mission/Mission)
- [MissionBehavior](../../mission/MissionBehavior)
- [Agent](../../mission/Agent)
- [CampaignMission](../../campaign/CampaignMission)
- [GenericMissionEvent](../../mission-ext/GenericMissionEvent)
