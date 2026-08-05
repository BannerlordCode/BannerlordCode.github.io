---
title: "MissionObject"
description: "Mission 场景实体的抽象基类：负责对象 ID、活动对象注册、导航面和启停生命周期。"
---
# MissionObject

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`  
**Base:** `ScriptComponentBehavior`  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObject.cs`

## 一句话职责

`MissionObject` 把场景实体脚本接入当前 [`Mission`](../../mission/Mission)：初始化时分配 [`MissionObjectId`](../MissionObjectId) 并注册对象，运行中管理导航面、可见性、物理和 Mission 结束回调。

## 心智模型

这是**场景对象基类**，不是 Campaign 行为，也不是跨 Mission 保存的服务。场景或运行时 `GameEntity` 带有派生脚本时，引擎会在 `OnPreInit` 中根据 `Mission.IsLoadingFinished` 分配场景 ID 或运行时 ID，然后调用 `Mission.AddActiveMissionObject`。`ActiveMissionObjects` 是仍参与查询和处理的子集；停用不等于销毁，实体移除才会进入 `OnRemoved` 和 Mission 的移除流程。

`OnInit` 还会按 `NavMeshPrefabName` 附加动态导航面。对象的 `Id`、`GameEntity` 和当前 Mission 都由宿主管理，不能在构造函数里假定它们已经可用，也不要直接 `new` 一个派生对象来替代场景挂载。

## 依赖关系

[`Mission`](../../mission/Mission) 分配 [`MissionObjectId`](../MissionObjectId)、持有 `MissionObjects` 与 `ActiveMissionObjects`，并接收移除通知。 [`SynchedMissionObject`](../SynchedMissionObject) 在这个注册边界之上增加多人状态，而 [`MissionBehavior`](../../mission/MissionBehavior) 是 Mission 全局协调层。

## 何时用，何时不用

**适合使用：**

- 为门、标记、陷阱或自定义碰撞实体编写派生类，并覆盖 `AfterMissionStart`、`OnMissionEnded` 或 `OnHit`。
- 从 `Mission.Current.ActiveMissionObjects` 查找当前场景真实持有的对象。
- 在拥有对象生命周期的 Mission 行为或权威端启用、停用和清理场景对象。

**不适合使用：**

- 要监听 Agent、Team 或 Mission tick 时；使用 [`MissionBehavior`](../../mission/MissionBehavior)。
- 要修改大地图存档状态时；回到 Campaign 行为和对应 Action，不要从 `OnMissionEnded` 改 Campaign 实体。
- 要复制多人状态时；继承 [`SynchedMissionObject`](../SynchedMissionObject)，不要自行广播对象 ID。

## 注册与身份

`OnPreInit` 是隐式注册边界。场景对象从 `GetFreeSceneMissionObjectId` 取 ID；加载完成后创建的对象从 `GetFreeRuntimeMissionObjectId` 取 ID。运行时 ID 有容量和延迟回收规则，`OnRemoved` 会调用 `Mission.OnMissionObjectRemoved`，服务器还会记录移除消息。

`Id` 不是普通可写业务字段。读取当前 Mission 的真实对象时使用活动集合：

```csharp
using TaleWorlds.MountAndBlade;

Mission mission = Mission.Current;
if (mission != null)
{
    foreach (MissionObject missionObject in
             mission.ActiveMissionObjects.FindAllWithType<MissionObject>())
    {
        MissionObjectId objectId = missionObject.Id;
        bool isRuntimeObject = missionObject.CreatedAtRuntime;
        int numericId = objectId.Id;
    }
}
```

这段代码只读取当前场景持有的对象；对象被移除后不要继续缓存 `MissionObject` 或 `GameEntity`。

## 关键成员

### 身份与导航

- `Id` 是场景或运行时身份；`CreatedAtRuntime` 直接反映 `Id.CreatedAtRuntime`。
- `IsDisabled` 只表示 `SetDisabled` 标记，不代表对象已经销毁。
- `HitObjectName` 是派生类可覆盖的命中显示名称。
- `SetAbilityOfFaces(bool enabled)` 只切换本对象已分配的动态导航面，不修改全局地图网格。

**用途 / 调用时机：**这些成员适合在对象已经进入 Mission 后读取；不要在模块加载阶段依赖 `Id`，也不要把导航面开关当作队伍移动或路径查询 API。

### 生命周期回调

- `AfterMissionStart()`：Mission 启动后读取场景对象、缓存短期状态。
- `OnDeploymentFinished()`：部署点和队伍准备完成后调整对象。
- `OnMissionEnded()`：Mission 结束时释放 Agent、实体和临时集合引用。
- `OnEndMission()`：对象级结束通知；派生实现负责自己的清理。
- `OnRemoved(int removeReason)`：基类关闭导航面并通知 Mission；覆盖时必须调用 `base`。

**用途 / 调用时机：**这些方法由宿主生命周期调用，mod 不应手动调用它们来模拟 Mission 阶段。

### 启用、停用与实体

- `SetEnabled(bool isParentObject = false)` 重新加入活动对象集合并启用导航面。
- `SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)` 还会恢复可见性、物理和脚本 tick。
- `SetDisabled(bool isParentObject = false)` 从活动集合停用对象，但不销毁实体。
- `SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)` 还会隐藏实体、关闭物理并调整 tick。
- `AddStuckMissile(GameEntity missileEntity)` 把导弹实体附加为当前实体的子实体，不负责命中结算。

**用途 / 调用时机：**调用前确认 `Mission.Current`、`GameEntity` 和场景仍有效；多人对象的状态变化应使用 [`SynchedMissionObject`](../SynchedMissionObject) 的同步入口。

## 真实派生示例

派生类应在回调阶段使用身份，而不是在构造函数中读取 Mission：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class ModMissionMarker : MissionObject
{
    private MissionObjectId _registeredId;

    public override void AfterMissionStart()
    {
        _registeredId = Id;
    }

    public override void OnMissionEnded()
    {
        _registeredId = MissionObjectId.Invalid;
    }
}
```

这个类型仍须通过场景实体或游戏的 Mission 对象创建流程进入 Mission；`new ModMissionMarker()` 不会执行 `OnPreInit`，因此没有有效实体、注册记录或场景 ID。

## 风险与崩溃边界

- Mission 加载前、结束后或延迟回调中使用 `Mission.Current` 可能得到 `null`。
- 对已经移除的对象重复调用 `SetEnabled*` 或 `SetDisabled*`，可能访问失效的原生实体。
- 直接改写 `Id` 会破坏 Mission 集合和网络消息的身份对应关系。
- `OnRemoved` 之后继续保存 `Agent`、`GameEntity` 或对象引用，会把失效引擎对象带入下一场 Mission。
- 动态导航和物理的权威变更由服务器/本地权威端负责；客户端显示变化不等于世界状态提交。

## 参见与双向导航

- ↑ 父级：[Mission-ext 模块索引](../)
- ↔ 继承链：[SynchedMissionObject](../SynchedMissionObject) · [UsableMissionObject](../UsableMissionObject)
- 身份：[MissionObjectId](../MissionObjectId)
- 宿主：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 文档契约：[Doc Contract](../../../architecture/doc-contract)
- 中文/English：[MissionObject](../../../../en/api/mission-ext/MissionObject)
