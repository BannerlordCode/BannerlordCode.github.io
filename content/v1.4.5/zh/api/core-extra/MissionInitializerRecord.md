---
title: "MissionInitializerRecord"
description: "打开 Mission 时传给引擎的场景、战役模式、地图补丁和渲染初始化记录；它是创建任务上下文的配置值，不是运行中的 Mission。"
---

# MissionInitializerRecord

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public struct MissionInitializerRecord(string name)`  
**Base:** `ISerializableObject`（显式实现）  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/MissionInitializerRecord.cs`

## 一句话职责

它把场景名、关卡、战役标记、地图补丁和渲染选项组合成一个初始化值，传入 `MissionState.OpenNew` 后由引擎消费。它只描述 Mission 如何创建，不持有运行中的 Agent、Team 或 Mission 行为，也不负责保存 mod 的长期数据。

## 心智模型

这是 **Mission 创建前的初始化记录**，不是 `Mission` 的运行时状态。通常由打开 Mission 的工厂构造，随后由 `MissionState` 保存并交给原生任务初始化；Mission 开始后，mod 代码应通过 `Mission.Current` 和 `MissionBehavior` 读取运行时对象，而不是把这条记录当成当前场景的句柄。

最常见的入口是 `new MissionInitializerRecord(scene)`，然后在对象初始化器中设置少量场景选项。`MissionState.OpenNew` 的委托负责创建行为数组；记录本身不创建 `Agent`、`Team` 或 `MissionBehavior`。Campaign 还会在 `Campaign.OnMissionIsStarting(string, MissionInitializerRecord)` 收到它，用 `PlayingInCampaignMode` 判断是否是战役任务。

## 何时用，何时不用

**适合使用：**

- 通过 `MissionState.OpenNew` 或 `CampaignMission` 打开一个由场景驱动的 Mission 时设置场景名、关卡名和开场环境。
- 需要控制随机地形、地图补丁、战役大气、尸体淡出或加载屏幕时，按真实场景工厂的方式设置对应字段。

**不要这样用：**

- 不要用它代替 `Mission.Current` 查找 Agents、Teams 或当前 Mission；它只描述初始化输入。
- 不要把它当作存档 DTO。它的显式 `SerializeTo` 只写入源码列出的字段子集，公开字段并不等于都会进入同一序列化流。
- 不要在场景资源尚未准备好时假设设置记录就已经创建了 Agent；行为的初始化和 tick 必须遵守 Mission 生命周期。

## 字段与副作用

| 字段 | 用途与边界 |
|---|---|
| `SceneName` | 构造函数接收的场景名；决定引擎尝试加载的场景。 |
| `SceneLevels` | 场景关卡/层级字符串；必须与实际资源和该 Mission 工厂的约定一致。 |
| `TerrainType` | 地形类型输入；不要在没有对应引擎/场景约定时凭整数猜值。 |
| `NeedsRandomTerrain` / `RandomTerrainSeed` | 请求随机地形及其种子；只在该 Mission 类型支持时设置。 |
| `DamageToFriendsMultiplier` / `DamageFromPlayerToFriendsMultiplier` | 伤害初始化参数；它们不是运行时替代品，不能靠改记录实时改变已经运行的战斗。 |
| `PlayingInCampaignMode` | 标记战役模式；Campaign 会用它决定是否触发战役 Mission 开始处理。 |
| `EnableSceneRecording` | 请求场景记录功能；会影响引擎侧初始化成本和输出。 |
| `SceneUpgradeLevel` | 场景升级等级；应使用该场景/模块约定的值。 |
| `SceneHasMapPatch` / `PatchCoordinates` / `PatchEncounterDir` | 地图补丁存在、坐标和遭遇方向；只有使用地图补丁的战役场景才应成组设置。 |
| `DoNotUseLoadingScreen` | 请求跳过加载屏幕；不能因此假设场景已同步完成。 |
| `DisableDynamicPointlightShadows` / `DisableCorpseFadeOut` | 渲染和尸体清理相关开关；影响表现，不会改变胜负结果。 |
| `DecalAtlasGroup` | 场景使用的 decal 图集组；应沿用实际 Mission 工厂的值。 |
| `AtmosphereOnCampaign` | 战役大气信息；只有 `IsValid` 时显式序列化。 |

记录的 `ISerializableObject.SerializeTo` / `DeserializeFrom` 是显式实现，且写入顺序由引擎契约决定。不要自行把它当作通用存档字段容器，也不要改变字段语义后期待旧任务或网络端自动兼容。

## 依赖关系

- **上游创建：** [`Mission`](../../mission/Mission) 的宿主状态由 `MissionState.OpenNew` 创建；战役入口还会经过 `CampaignMission`。
- **并行输入：** Mission 工厂的 `InitializeMissionBehaviorsDelegate` 返回 [`MissionBehavior`](../../mission/MissionBehavior) 数组；记录只负责初始化参数，不负责注册行为。
- **下游观察：** `Campaign.OnMissionIsStarting` 会读取记录；Mission 初始化完成后，行为再从 [`Mission.Current`](../../mission/Mission) 获取运行时对象。
- **相关结果：** 任务胜负由 [`MissionLogic`](../../mission-ext/MissionLogic) 和 [`MissionResult`](../MissionResult) 处理，不由本记录直接产生。

## 真实示例

下面是 `BannerlordMissions.OpenCustomBattleMission` 使用的真实入口形状：先用场景名构造记录，再由 `MissionState.OpenNew` 接收行为工厂。示例中的空数组表示不额外注册自定义行为；实际 Mission 通常会返回自己的 `MissionBehavior` 派生类。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static Mission OpenMission(string scene)
{
    return MissionState.OpenNew(
        "CustomBattle",
        new MissionInitializerRecord(scene)
        {
            PlayingInCampaignMode = false,
            SceneLevels = ""
        },
        (Mission mission) => new MissionBehavior[0]);
}
```

战役侧的真实消费点是 `Campaign.OnMissionIsStarting`：它接收同一条记录，并在 `rec.PlayingInCampaignMode` 为真时触发战役事件。这个回调适合做战役开场通知，不适合缓存记录跨 Mission 使用。

## 风险与崩溃边界

1. `SceneName`、`SceneLevels` 或地图补丁参数与资源不匹配时，失败发生在场景初始化边界，不能靠 MissionBehavior 的 tick 修复。
2. `DoNotUseLoadingScreen` 只改变加载表现；在 `Initializing` 阶段访问尚未创建或尚未完成加载的 Agent/Team 仍然可能得到不完整状态。
3. 记录的显式序列化不是 Campaign 行为的 `SyncData`，也不是 `[SaveableField]`。不要用它保存 mod 自己的长期存档数据。
4. 固定长度字符串和原生结构字段属于托管到引擎的边界；不要把任意长文本或不受支持的对象塞进记录。

## 导航

- ↑ 父级：[core-extra 模块目录](../)
- ↔ 同级：[`MissionMode`](../MissionMode) · [`MissionResult`](../MissionResult)
- 相关入口：[`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior) · [`MissionLogic`](../../mission-ext/MissionLogic)
- 上游架构：[开发者路线图](../../../architecture/developer-roadmap) · [文档契约](../../../architecture/doc-contract)
