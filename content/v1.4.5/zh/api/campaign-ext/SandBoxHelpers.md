---
title: "SandBoxHelpers：Sandbox 辅助容器"
description: "SandBoxHelpers 在 Bannerlord v1.4.5 中组织 Mission 实时辅助逻辑与地图场景导航区域转换。"
---
# SandBoxHelpers

**命名空间：** `SandBox`  
**模块：** `SandBox`  
**类型：** `public static class SandBoxHelpers`  
**基类：** 无  
**源文件：** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## 一句话职责

`SandBoxHelpers` 是两个不同 Sandbox 关注点的静态容器：`MissionHelper` 修改 Agent 与带标签的 Mission 实体，`MapSceneHelper` 把战役导航规则转换成原生地图场景消费的区域布尔表；容器本身不拥有 `Mission`，也不拥有战役导航 Model。

## 心智模型

`SandBoxHelpers` 自身没有值得直接调用的顶层操作。源码声明了两个嵌套静态类，调用形式是 `SandBoxHelpers.MissionHelper` 或 `SandBoxHelpers.MapSceneHelper`。

当已经创建了 [Mission](../../mission/Mission)，并且任务场景已就绪时，使用子页 [MissionHelper](../MissionHelper) 处理 Agent 跟随/解除跟随、淡出已存在 Agent、禁用已加载的 Mission 事件脚本、生成玩家和生成场景动物。这些方法会改变实时 Mission 状态，并依赖场景、标签、Object 注册以及 Mission 行为都已准备好。

只有在地图加载路径需要把 [PartyNavigationModel](../../campaign/PartyNavigationModel) 的地形规则转换成 `bool[]` 区域表时，才使用 [MapSceneHelper](../MapSceneHelper)。它不决定战役移动规则，也不拥有生成的原生场景。需要进入战役 Mission 时应通过 [CampaignMission](../../campaign/CampaignMission)，不要构造这个辅助容器，也不要在所有者尚未创建运行时对象前调用子辅助类。

## 依赖关系图

```text
CampaignMission / MissionBehavior
             |
             v
       SandBoxHelpers
        /           \
       v             v
 MissionHelper   MapSceneHelper
       |             |
       v             v
 Mission.Current   PartyNavigationModel
 Agent / 场景      -> 原生 Scene 区域表
```

- Mission 生命周期：[CampaignMission](../../campaign/CampaignMission)、[Mission](../../mission/Mission) 和 [MissionBehavior](../../mission/MissionBehavior) 决定 `MissionHelper` 何时安全。
- Mission 输入：[Agent](../../mission/Agent)、`CampaignAgentComponent`、`GameEntity`、`GenericMissionEvent`、`CharacterObject`、`PartyAgentOrigin` 和 `MBObjectManager` 提供嵌套辅助类实际使用的对象。
- 地图输入与消费方：[PartyNavigationModel](../../campaign/PartyNavigationModel) 提供地形有效性；[MapScene](../MapScene) 把返回数组传给原生 `Scene` 导航网格。
- 两个子辅助类是不同契约。地图区域转换不能替代 Agent 生成，Agent 生成也不是战役存档数据。

## 按子辅助类划分的公开表面

| 子类 | 源码确认的职责 | 时机与副作用 |
|---|---|---|
| `MissionHelper` | Agent 跟随/解除跟随、Agent 淡出、禁用匹配的 `GenericMissionEventScript`、生成玩家，以及从场景标签生成动物。 | 在 `Mission.Current` 与相关场景对象存在后由 Mission 逻辑调用。会修改运行时 Agent、脚本和视觉，不持久化战役状态。 |
| `MapSceneHelper` | `GetRegionMapping(PartyNavigationModel model)` 枚举 `TerrainType`，询问每种地形是否允许默认队伍导航。 | 相对于 Model 是纯转换；返回由调用方交给地图场景的新数组。活动 Model 或场景更换时重新计算。 |

详细成员契约见 [MissionHelper](../MissionHelper) 与 [MapSceneHelper](../MapSceneHelper)。必须分开理解：前者可能生成或修改原生 Agent，后者只翻译 Model 的结果。

## 真实调用链

### Mission 入口

Sandbox 的城镇中心 Mission Controller 在 Mission 进入 `AfterStart` 后调用嵌套辅助类：

```csharp
public override void AfterStart()
{
    Mission mission = ((MissionBehavior)this).Mission;
    SandBoxHelpers.MissionHelper.SpawnPlayer(
        mission.DoesMissionRequireCivilianEquipment,
        noHorses: true);
    SandBoxHelpers.MissionHelper.SpawnHorses();
}
```

源码中的 Controller 在非夜间还会继续调用 `SpawnSheeps`、`SpawnCows`、`SpawnHogs`、`SpawnGeese` 和 `SpawnChicken`。这是 Mission 启动路径，不是通用的战役初始化配方；这些调用会读取活动场景的生成标签，并使用 Mission 的玩家队伍和已注册对象。

### 地图加载路径

`MapScene` 从战役取得活动 Model，把转换后的数组交给场景：

```csharp
bool[] regionMapping = SandBoxHelpers.MapSceneHelper.GetRegionMapping(
    Campaign.Current.Models.PartyNavigationModel);
scene.SetNavMeshRegionMap(regionMapping);
```

返回数组按 `TerrainType` 的整数值索引。它是当前场景加载用的快照，不是保存的移动策略；Model 或地图场景更换后不要继续使用旧数组。

## 生命周期与变更边界

- `MissionHelper.FollowAgent` 要求两个 Agent 非空且活动。它取得跟随者的 `CampaignAgentComponent` 活动行为组，创建或复用 `FollowAgentBehavior`，切换到脚本行为并设置目标。
- `MissionHelper.UnfollowAgent` 只在存在时移除跟随行为，不会恢复任意之前的行为；下一步行为由调用方决定。
- `MissionHelper.DisableGenericMissionEventScript` 按实体标签搜索 `Mission.Current.Scene`，匹配 `EventId` 与 `Parameter` 后设置 `IsDisabled`。这是修改已加载场景脚本，不是订阅 `CampaignEvents`。
- 两个 `SpawnPlayer` 重载分别解析生成实体或使用传入的 `GameEntity`，从 `CharacterObject.PlayerCharacter` 构建玩家 Agent，触发玩家生成回调并调用 `Mission.SpawnAgent`，还可能应用平民/伪装装备和复制生成点标签。
- 动物方法读取 `sp_horse` 等标签以及 `sheep`、`cow` 等已注册物品 ID。场景已经填充后重复调用可能生成重复动物。
- `GetRegionMapping` 遍历所有 `TerrainType`，使用 `MobileParty.NavigationType.Default` 调用 `PartyNavigationModel.IsTerrainTypeValidForNavigationType`；它不修改 Model。

## 崩溃、存档与线程风险

- 不要从战役启动、`SyncData`、后台线程或 `EndMission` 之后调用 `MissionHelper`。它依赖活动 Mission 生命周期内的原生场景与 Agent 引用。
- `FollowAgent` 假设跟随者具有 `CampaignAgentComponent` 和活动行为组；它不是所有 `Agent` 实现的通用后备方法。
- 玩家与动物生成依赖已注册对象、当前玩家队伍、场景标签和有效 `AgentBuildData` 输入。缺少场景实体或注册对象可能变成空引用/原生失败。
- Agent 即使被返回或生成，也不会因此成为战役实体。Agent 死亡、消失或 Mission 结束后应停止使用这些引用。
- `GetRegionMapping(null)` 在询问 Model 时会失败。用与当前场景不匹配的 Model 生成区域表，会让原生导航与战役移动规则不一致。
- 两个子辅助类都不定义存档 schema。战役数据应由所属 Behavior 保存；不要序列化实时 `Agent`、`Scene`、`GameEntity` 或原生地图对象。

## 版本注记

本页依据 v1.4.5 `SandBoxHelpers.cs`，其中 `MissionHelper` 与 `MapSceneHelper` 都是嵌套静态类。面向其他 Bannerlord 版本时，应重新核对场景标签、物品 ID 与 Mission 回调时机。

## 导航

### 父级

- [Campaign 扩展索引](../)
- [SandBox 架构边界](../../../architecture/sandbox-native-policy)

### 子页与同级

- [MissionHelper](../MissionHelper)
- [MapSceneHelper](../MapSceneHelper)
- [MapScene](../MapScene)
- [CampaignMission](../../campaign/CampaignMission)
- [Mission](../../mission/Mission)
- [PartyNavigationModel](../../campaign/PartyNavigationModel)
- [English/中文 counterpart](../../../../en/api/campaign-ext/SandBoxHelpers)
