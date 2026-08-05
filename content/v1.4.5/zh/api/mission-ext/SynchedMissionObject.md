---
title: "SynchedMissionObject"
description: "MissionObject 的多人同步基类：在权威端广播变换、可见性、动画、物理标志和颜色，并在客户端插值。"
---
# SynchedMissionObject

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class SynchedMissionObject : MissionObject`  
**Base:** [`MissionObject`](../MissionObject)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SynchedMissionObject.cs`

## 一句话职责

`SynchedMissionObject` 把 Mission 场景对象的变换、可见性、动画、物理标志和颜色变更接入 `GameNetwork`，由服务器/记录端广播、客户端或回放端按目标状态完成同步。

## 心智模型

它是 `MissionObject` 的**网络状态层**，不是通用 RPC 服务。权威端调用 `SetFrameSynched`、`SetVisibleSynched` 或 `SetDisabledSynched` 时，会写入带有 `MissionObjectId` 的消息并立即更新本地实体；客户端/回放端收到消息后保存目标帧或状态，在 tick 中插值到目标。

因此，同一个对象必须已经由 `MissionObject.OnPreInit` 注册，且所有端都能用相同 ID 找到它。`SynchronizeCompleted` 只说明当前同步状态机已追上目标，不代表 Mission 或实体生命周期仍然有效。

## 依赖关系

[`MissionObject`](../MissionObject) 创建 Mission 注册，[`MissionObjectId`](../MissionObjectId) 是同步消息携带的地址。 [`Mission`](../../mission/Mission) 持有对象集合；`GameNetwork` 传输快照，服务器或 recorder 权威决定哪些变更会广播。 [`UsableMissionObject`](../UsableMissionObject) 在这一层之上增加 Agent 交互状态。

## 何时用，何时不用

**适合使用：**

- 派生带场景实体的多人对象，并需要在服务器改变位置、可见性、动画或颜色。
- 对已有的 `SynchedMissionObject` 查询同步完成状态，或读取 Mission 当前对象。
- 让网络录制和回放复现对象状态，而不是另写一套消息格式。

**不适合使用：**

- 只在单机本地改变一个不需要复制的实体；普通 [`MissionObject`](../MissionObject) 的实体 API 更直接。
- 从客户端直接提交游戏规则、伤害或存档状态；同步对象只传播场景表现状态，权威规则仍应在服务器或 Mission 逻辑执行。
- 手动广播 `MissionObjectId`、拼装 `GameNetworkMessage` 或在对象被移除后继续发消息。

## 同步状态与属性

### `SynchFlags`

`SynchFlags` 的值包括 `SynchNone`、`SynchTransform`、`SynchAnimation`、`SynchBodyFlags`、`SyncColors` 和 `SynchAll`。它描述对象快照中可同步的类别；业务代码应调用现成的 `*Synched` 方法，不要自行改写内部标记。

### `Color`、`Color2` 与 `SynchronizeCompleted`

`Color` 与 `Color2` 是对象当前团队颜色状态；`SynchronizeCompleted` 在内部状态为 `SynchronizeCompleted` 时为 `true`。初始同步或平滑移动期间，对象会继续请求 tick；追上目标后才停止这部分额外 tick。

## 关键方法

### 变换同步

- `SetLocalPositionSmoothStep(ref Vec3 targetPosition)` 让客户端逐步追踪本地目标位置。
- `SetFrameSynched(ref MatrixFrame frame)` 同步局部变换。
- `SetGlobalFrameSynched(ref MatrixFrame frame)` 同步全局变换，并处理父实体坐标转换。
- `SetFrameSynchedOverTime(ref MatrixFrame frame, float duration)` 与 `SetGlobalFrameSynchedOverTime` 在指定时长内插值。

**用途 / 调用时机：**在权威端改变已注册对象的场景位置时调用；不要在客户端把插值结果当作新的权威状态再广播。

```csharp
using System.Linq;
using TaleWorlds.MountAndBlade;

SynchedMissionObject movingObject = Mission.Current?
    .ActiveMissionObjects
    .FindAllWithType<SynchedMissionObject>()
    .FirstOrDefault();

if (movingObject != null && GameNetwork.IsServerOrRecorder)
{
    MatrixFrame frame = movingObject.GameEntity.GetFrame();
    frame.origin.z += 0.1f;
    movingObject.SetFrameSynched(ref frame);
}
```

### 可见性、停用与物理

- `SetVisibleSynched(bool value, bool forceChildrenVisible = false)` 广播可见性并可递归处理子实体。
- `SetDisabledSynched()` 广播停用消息，然后调用基类的隐藏和停用流程。
- `SetPhysicsStateSynched(bool value, bool setChildren = true)` 是可覆盖的扩展点；基类实现为空，不要把它误认为已经改变物理状态。

服务器/记录端才会写对应网络消息；客户端/回放端进入目标状态机。若对象是 `UsableMissionObject`，交互状态应使用它提供的 `SetIsDeactivatedSynched` 或 `SetIsDisabledForPlayersSynched`。

### 动画、粒子和物理标志

- `SetAnimationAtChannelSynched(string animationName, int channelNo, float animationSpeed)` 或整数索引版本同步骨骼动画。
- `SetAnimationChannelParameterSynched`、`PauseSkeletonAnimationSynched`、`ResumeSkeletonAnimationSynched` 更新动画参数和暂停状态。
- `BurstParticlesSynched`、`ApplyImpulseSynched` 传播一次性表现或冲量。
- `AddBodyFlagsSynched` 与 `RemoveBodyFlagsSynched` 在对象或子对象上改变 `BodyFlags`。

这些入口要求实体具有相应的骨骼、物理或粒子资源；对象没有对应原生资源时，消息到达不等于效果有效，错误资源配置还可能造成原生层异常。

### 颜色与网络快照

- `SetTeamColors(uint color, uint color2)` 只设置本地颜色状态。
- `SetTeamColorsSynched` 负责将颜色作为同步状态传播。
- `WriteToNetwork()` 写出基类快照和派生类快照。
- `OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` 在收到快照后应用变换、动画、颜色及停用状态；覆盖时必须保留基类处理。

## 真实使用示例：权威端改变表现

以下只在服务器/记录端修改一个已注册对象，并让客户端收到相同的变换；它没有直接修改 Agent 或 Campaign 状态：

```csharp
using TaleWorlds.MountAndBlade;

public static class ModMissionPresentation
{
    public static void RaiseObject(SynchedMissionObject missionObject)
    {
        if (missionObject == null || !missionObject.GameEntity.IsValid)
        {
            return;
        }

        if (GameNetwork.IsServerOrRecorder)
        {
            MatrixFrame target = missionObject.GameEntity.GetFrame();
            target.origin.z += 0.5f;
            missionObject.SetFrameSynchedOverTime(ref target, 0.25f);
        }
    }
}
```

## 风险与版本边界

- `SetFrameSynched` 等方法依赖对象已注册且 `Id` 在各端一致；手工构造对象或改写 ID 会使消息找不到目标。
- 客户端调用同步入口不会获得规则权威；它可能只进入本地插值分支，不能用来提交游戏结果。
- `OnTick` 在同步未完成时会持续运行；大量对象同时使用长时长插值会增加 Mission tick 成本。
- `SetAnimationAtChannelSynched`、`ApplyImpulseSynched` 和 BodyFlags 方法依赖实体资源；销毁或移除后的 `GameEntity` 不可继续使用。
- 覆盖 `WriteToNetwork` 或 `OnAfterReadFromNetwork` 时漏掉 `base` 会丢失 `MissionObject`/同步基类状态，导致回放和客户端状态分叉。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 基类/交互子类：[MissionObject](../MissionObject) · [UsableMissionObject](../UsableMissionObject)
- 身份：[MissionObjectId](../MissionObjectId)
- 宿主：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 中文/English：[SynchedMissionObject](../../../../en/api/mission-ext/SynchedMissionObject)
