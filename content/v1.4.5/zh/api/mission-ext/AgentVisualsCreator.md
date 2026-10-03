---
title: "AgentVisualsCreator"
description: "IAgentVisualCreator 的唯一内置实现：一个七行的适配器，把托管的 AgentVisualsData 变成 native 层的 AgentVisuals，并被 MissionScreen 装到 Mission.AgentVisualCreator 上。"
---

# AgentVisualsCreator

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`（`Modules.Native` 下的 View 层）
**Type:** `public class AgentVisualsCreator : IAgentVisualCreator`
**Base:** `TaleWorlds.MountAndBlade.IAgentVisualCreator`（接口）
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisualsCreator.cs`

## 概述

`AgentVisualsCreator` 全部源码 9 行，职责单一：实现 [IAgentVisualCreator](../IAgentVisualCreator/) 的唯一抽象方法 `Create`，把传入的 [AgentVisualsData](../AgentVisualsData/) 交给 [AgentVisuals](../AgentVisuals/) 的静态工厂 `Create`，再把结果按 `IAgentVisual` 返回。它是**托管层与 native View 层之间的一层薄适配**，本身不持有任何状态——`AgentVisualsCreator` 没有字段、没有构造逻辑，构造出来就是默认状态。

它真正的价值在于它是 `IAgentVisualCreator` 家族里**唯一的一个实现**（全树 `grep ": IAgentVisualCreator"` 只有它自己），所以「替换 Mission 的 Agent 创建方式」这件事的官方做法就是照着它再写一个。替换点是一个公开字段：[Mission](../../mission/Mission/) 的 `Mission.AgentVisualCreator`（`Mission.cs:1000`，**public 可写、无 setter、无断言**）。

## 心智模型

把它当成**「视觉创建策略的默认实现 + 可替换样板」**。三个推论：

第一，**它的构造时机在 View 层，而不是 Mission 初始化时**。`MissionScreen.OnTick`（`Modules.Native/.../MissionScreen.cs:404`）里有唯一一行装配：`Mission.AgentVisualCreator = (IAgentVisualCreator)(object)new AgentVisualsCreator();`。这意味着**你在 `MissionBehavior.OnMissionScreenInitialize` 里替换它太早了，会被这一行覆盖**——正确的替换点是在 `MissionScreen` 完成初始化之后。

第二，**它是跨模块边界的**：`IAgentVisualCreator` / `IAgentVisual` / `AgentVisualsData` 都声明在 `TaleWorlds.MountAndBlade` 程序集里，而 `AgentVisualsCreator` 与它调用的 `AgentVisuals.Create` 在 `TaleWorlds.MountAndBlade.View`（`Modules.Native`）里。引用它必须同时能加载 View 模块程序集——纯服务端 / 无渲染环境（dedicated server）里这一支可能根本不可用。

第三，**它硬编码 `isRandomProgress: false`**。`AgentVisuals.Create` 的这个形参决定动画从 0 播放还是从随机进度起播，默认适配器永远给 `false`（从动作起点播）。想改这个行为就得自己实现 `IAgentVisualCreator`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Create` | `public IAgentVisual Create(AgentVisualsData data, string name, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)` | 整个类唯一的方法，也是 `IAgentVisualCreator` 的唯一抽象方法。`data` 是描述这个 Agent 要长什么样、穿什么、用哪套动作集的参数包；`name` 是 native 侧的实体名。实现体只有一条 `return (IAgentVisual)(object)AgentVisuals.Create(data, name, isRandomProgress: false, needBatchedVersionForWeaponMeshes, forceUseFaceCache);`——**没有任何校验、没有 try/catch、没有缓存**。参数错了不会在这里报错，只会在下游创建骨骼/网格时才炸。 |

## 真实示例

官方装配点长这样（这是 `MissionScreen.cs:404` 的原样写法）：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;

Mission mission = Mission.Current;
mission.AgentVisualCreator = new AgentVisualsCreator();
```

照着它写一个自己的实现——这是本类型唯一值得存在的用法。调用委托给默认实现，保留原行为：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;

public class LoggingAgentVisualsCreator : IAgentVisualCreator
{
    private readonly AgentVisualsCreator _vanilla = new AgentVisualsCreator();

    public IAgentVisual Create(AgentVisualsData data, string name, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)
    {
        IAgentVisual visual = _vanilla.Create(data, name, needBatchedVersionForWeaponMeshes, forceUseFaceCache);
        Debug.Print("created visual " + name + " scale=" + data.ScaleData + " race=" + data.RaceData, 0);
        return visual;
    }
}
```

直接调静态工厂、自己控制那个默认适配器硬编码成 `false` 的参数：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;

AgentVisualsData data = new AgentVisualsData()
    .Equipment(agent.SpawnEquipment)
    .BodyProperties(agent.BodyPropertiesValue)
    .CharacterObjectStringId(agent.Character.StringId)
    .Scale(1f)
    .SkeletonType(SkeletonType.Male);

AgentVisuals visual = AgentVisuals.Create(data, "my_agent", isRandomProgress: false, needBatchedVersionForWeaponMeshes: true, forceUseFaceCache: false);
```

读回一个已经创建好的视觉对象，确认 `IAgentVisual` 的能力都在（这是 [AgentVisuals](../AgentVisuals/) 的接口面，不是本类型的）：

```csharp
IAgentVisualCreator creator = Mission.Current.AgentVisualCreator;
if (creator == null)
{
    Debug.Print("no creator bound yet, wait until MissionScreen initialized", 0);
    return;
}

AgentVisualsData data = new AgentVisualsData().CharacterObjectStringId(agent.Character.StringId);
IAgentVisual visual = creator.Create(data, "probe", needBatchedVersionForWeaponMeshes: true, forceUseFaceCache: false);
if (visual != null)
{
    Debug.Print("characterObjectID = " + visual.GetCharacterObjectID(), 0);
    // 注意：Reset() 只在 AgentVisuals 上，不在 IAgentVisual 接口面上
    visual.GetVisuals();
}
```

## 风险与边界

- **替换时机很窄。** `MissionScreen` 在自己的 `OnTick` 里无条件写一次 `Mission.AgentVisualCreator`。比这更早的替换（典型如 `MissionBehavior.OnMissionScreenInitialize`）会被直接覆盖，且**没有任何日志**。
- **在 `Modules.Native` 下。** 引用它等于依赖 `TaleWorlds.MountAndBlade.View` 程序集。无渲染环境（专用服务器）下不可用——多人专服应当保留默认或置 null。
- **`Mission.AgentVisualCreator` 是公开可写字段。** 没有类型检查、没有初始化时序保证、没有任何断言。它可以是 null，也可以是任意实现。
- **默认实现不校验参数。** `AgentVisuals.Create` 里会用 `data.EquipmentData` 去挂网格、`data.ActionSetData` 去建骨骼，`null` 进去不会得到友好错误。
- **返回的是 native 句柄的托管包装。** `AgentVisuals` 内部持有 `_data.AgentVisuals`（`MBAgentVisuals`），生命周期与 mission 绑定。**不要跨任务缓存 `IAgentVisual`**，也不要在 `MissionScreen` 之外随意调用它上面的方法。
- **类本身可继承但无状态。** 它没有 `sealed`，但也没有任何虚成员可覆写——子类唯一的差异化手段是**实现 `IAgentVisualCreator` 而不是继承它**，见上面的示例。
- **替换之后所有 Agent 都走你的实现。** `Mission.AgentVisualCreator` 是全局唯一的视觉入口，包含玩家、盟友、敌军与所有 NPC。一次误改影响整场战斗。

## 依赖关系

- 接口契约：[IAgentVisualCreator](../IAgentVisualCreator/) 只声明 `Create` 一个方法，[IAgentVisual](../IAgentVisual/) 定义返回值的全部能力面
- 产出对象：[AgentVisuals](../AgentVisuals/) 的静态 `Create` 是本方法实现体的唯一调用目标，它才是真正碰 native 的那一层
- 输入参数：[AgentVisualsData](../AgentVisualsData/) 决定骨架类型、装备网格、布料颜色、动作集、缩放
- 装配点：`Modules.Native/TaleWorlds.MountAndBlade.View.Screens/MissionScreen.cs:404` 写入 [Mission](../../mission/Mission/) 的 `AgentVisualCreator` 字段（`Mission.cs:1000`）
- 数据上游：[AgentBuildData](../AgentBuildData/) → [Mission](../../mission/Mission/) 的 `SpawnAgent` 最终把这份 `AgentVisualsData` 交给本工厂
- 桶首页：[mission-ext API 分区](../)
