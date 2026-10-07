---
title: "MissionObject"
description: "战场物件基类：挂在场景 GameEntity 上的脚本组件，提供身份编号、启用/禁用开关、导航网格附着与生命周期钩子，攻城器械与可交互物都派生自它。"
---
# MissionObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionObject : ScriptComponentBehavior`
**Source:** `TaleWorlds.MountAndBlade/MissionObject.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`MissionObject` 是战场物件的基类——攻城器械、可交互物、旗帜、投射物附着点等「挂在场景 `GameEntity` 上、有身份编号、能被启用/禁用」的东西，全部派生自它。它继承 `ScriptComponentBehavior`（引擎的脚本组件基类），但加了三层 `MissionObject` 特有的能力：**身份编号**（`Id: MissionObjectId`，运行时分配或场景预分配）、**启用/禁用开关**（`SetEnabled` / `SetDisabled` 及其可见性变体）、**导航网格附着**（`AttachDynamicNavmeshToEntity`，让物件阻挡或开放导航区域）。

与 `MissionBehavior` 的关键区别：`MissionBehavior` 是「任务级逻辑」，不挂在场景实体上；`MissionObject` 是「场景实体级组件」，必须挂在一个 `GameEntity` 上才能工作。`Mission.Current` 是 `MissionObject` 内部 `Mission` 属性的实现，所以 `MissionObject` 天然持有任务上下文。

## 心智模型

**`MissionObject` 是「场景实体上的任务级组件」，不是「任务级行为」。**

- 它**有实体**：必须挂在一个 `GameEntity` 上，通过 `base.GameEntity` 访问。`GameEntity` 是引擎的场景对象，有位置、旋转、可见性、物理状态。
- 它**有身份**：`Id` 是 `MissionObjectId`，在 `OnPreInit` 时分配。场景预分配的对象用 `GetFreeSceneMissionObjectId`，运行时创建的用 `GetFreeRuntimeMissionObjectId`。
- 它**有开关**：`IsDisabled` 标记物件是否被禁用。`SetEnabled` / `SetDisabled` 会同时操作导航网格面、物理状态、可见性，并通知 `Mission.Current` 激活/停用。
- 它**有导航网格**：`AttachDynamicNavmeshToEntity` 在 `OnInit` 时把 `NavMeshPrefabName` 指定的导航网格导入场景，并附着到实体上。这让攻城器械能阻挡敌人路径、可交互物能开放/关闭通道。

**与 `MissionBehavior` 的取舍。** 如果你要写的是「任务级逻辑」（每帧 tick、Agent 生命周期、任务结束流程），用 `MissionBehavior` 或 `MissionLogic`。如果你要写的是「场景实体上的组件」（有位置、有可见性、能被启用/禁用、能阻挡导航），用 `MissionObject`。官方的典型派生类：`UsableMachine`（可交互物，如城门、绞盘）、`SiegeWeapon`（攻城器械，如投石机、攻城塔）、`FlagCapturePoint`（旗帜捕获点）、`ArrowBarrel`（箭桶）。

**`Id` 的身份语义。** `MissionObjectId` 是一个 `(int id, bool createdAtRuntime)` 对。`id` 是任务内唯一编号，`createdAtRuntime` 标记是场景预分配还是运行时创建。`CreatedAtRuntime` 属性（`MissionObject.cs:344`）转发 `Id.CreatedAtRuntime`。`GetHashCode` 直接返回 `Id.GetHashCode()`（`MissionObject.cs:165`），所以 `MissionObject` 可以用作字典键。

## 怎么用

### 怎么拿到

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Engine;

// MissionObject 是 abstract，必须派生后挂到 GameEntity 上
// 通常由场景编辑器或 Mission.SpawnAgent 等引擎入口创建
// mod 侧一般通过 Mission.Current 遍历已注册的 MissionObject
foreach (MissionObject obj in Mission.Current.MissionObjects)
{
    if (obj is MyCustomObject custom)
    {
        custom.SetEnabled();
    }
}
```

### 典型用法

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Engine;

public class MyCustomObject : MissionObject
{
    // 覆写生命周期钩子
    public override void AfterMissionStart()
    {
        // 任务开始后的初始化
        SetEnabled();
    }

    public override void OnDeploymentFinished()
    {
        // 部署结束后的回调
    }

    // 启用物件（同时操作导航网格、物理、可见性）
    public void Activate()
    {
        SetEnabled();
    }

    // 禁用物件
    public void Deactivate()
    {
        SetDisabled();
    }
}
```

### 坑

- **`Mission` 属性是 private 的。** 源码里声明的是 `private Mission Mission`，外部访问不到。要拿任务上下文，用 `Mission.Current`（静态属性）。
- **`IsDisabled` 的 setter 是 private。** 你不能直接写 `obj.IsDisabled = true`，必须通过 `SetDisabled()` 方法。
- **`SetEnabled` / `SetDisabled` 会操作导航网格。** 它们内部调 `SetAbilityOfFaces`，需要 `DynamicNavmeshIdStart > 0` 才有效。如果你的物件没有 `NavMeshPrefabName`，导航网格操作会被跳过。
- **`OnHit` 是 protected internal。** 外部程序集不能覆写它，只能在派生类内部覆写后由父类调用链间接触发。

## 关键成员

### 身份与状态

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Id` | `public MissionObjectId Id { get; set; }` | 任务内唯一编号。`MissionObjectId` 是 `(int id, bool createdAtRuntime)` 对。场景预分配或运行时创建，在 `OnPreInit` 时分配（`MissionObject.cs:131-137`） |
| `IsDisabled` | `public bool IsDisabled { get; private set; }` | 是否被禁用。setter 是 private，必须通过 `SetDisabled()` 方法修改（`MissionObject.cs:32`） |
| `CreatedAtRuntime` | `public bool CreatedAtRuntime` | 转发 `Id.CreatedAtRuntime`，标记是运行时创建还是场景预分配（`MissionObject.cs:344`） |
| `HitObjectName` | `public virtual TextObject HitObjectName { get; }` | 被击中时显示的名称。基类返回 null（`MissionObject.cs:36`） |

### 启用/禁用开关

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SetEnabled` | `public void SetEnabled(bool isParentObject = false)` | 启用物件。`isParentObject` 为 true 时递归启用子实体上的 `MissionObject`。内部调 `SetAbilityOfFaces(true)`、`Mission.Current.ActivateMissionObject(this)`、`IsDisabled = false`（`MissionObject.cs:201`） |
| `SetEnabledAndMakeVisible` | `public void SetEnabledAndMakeVisible(bool isParentObject = false, bool enableFaces = false)` | 启用并设为可见。`enableFaces` 为 true 时同时启用导航网格面（`MissionObject.cs:226`） |
| `SetDisabled` | `public void SetDisabled(bool isParentObject = false)` | 禁用物件。`isParentObject` 为 true 时递归禁用子实体。内部调 `SetAbilityOfFaces(false)`、`Mission.Current.DeactivateMissionObject(this)`、`IsDisabled = true`（`MissionObject.cs:275`） |
| `SetDisabledAndMakeInvisible` | `public void SetDisabledAndMakeInvisible(bool isParentObject = false, bool disableFaces = false)` | 禁用并设为不可见。`disableFaces` 为 true 时同时禁用导航网格面（`MissionObject.cs:298`） |

### 导航网格

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `SetAbilityOfFaces` | `public virtual void SetAbilityOfFaces(bool enabled)` | 启用/禁用导航网格面。遍历 `DynamicNavmeshIdStart` 到 `DynamicNavmeshIdStart + 10` 的面（`MissionObject.cs:46`） |
| `SetAbilityOfConditionalFaces` | `protected void SetAbilityOfConditionalFaces(bool enabled)` | 启用/禁用条件阻挡面（`DynamicNavmeshIdStart + 8`）。**protected**，只能在派生类内部调（`MissionObject.cs:58`） |
| `AttachDynamicNavmeshToEntity` | `protected virtual void AttachDynamicNavmeshToEntity()` | 把 `NavMeshPrefabName` 指定的导航网格导入场景并附着到实体。**protected virtual**，可覆写（`MissionObject.cs:79`） |
| `NavMeshPrefabName` | `protected string NavMeshPrefabName` | 导航网格 prefab 名称。`[EditableScriptComponentVariable(true, "")]` 标记，可在场景编辑器里配（`MissionObject.cs:369`） |
| `DynamicNavmeshIdStart` | `protected int DynamicNavmeshIdStart` | 动态导航网格起始 ID。由 `Mission.Current.GetNextDynamicNavMeshIdStart()` 分配（`MissionObject.cs:369`） |
| `MaxNavMeshPerDynamicObject` | `public const int MaxNavMeshPerDynamicObject = 50` | 每个动态物件的最大导航网格数（`MissionObject.cs:365`） |

### 生命周期钩子

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `OnPreInit` | `protected internal override void OnPreInit()` | 场景预初始化。分配 `Id`、注册到 `Mission.Current`、设置回放实体、创建物理。**不能覆写**（`MissionObject.cs:124`） |
| `OnInit` | `protected internal override void OnInit()` | 初始化。附着动态导航网格、启用导航面。**不能覆写**（`MissionObject.cs:67`） |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | 编辑器检查：非均匀缩放 + 物理对象时报警。**不能覆写**（`MissionObject.cs:101`） |
| `OnMissionReset` | `protected internal virtual void OnMissionReset()` | 任务重置时调。**可覆写**（`MissionObject.cs:171`） |
| `AfterMissionStart` | `public virtual void AfterMissionStart()` | 任务开始后调。**可覆写**（`MissionObject.cs:176`） |
| `OnMissionEnded` | `public virtual void OnMissionEnded()` | 任务结束时调。**可覆写**（`MissionObject.cs:181`） |
| `OnDeploymentFinished` | `public virtual void OnDeploymentFinished()` | 部署结束时调。**可覆写**（`MissionObject.cs:186`） |
| `OnHit` | `protected internal virtual bool OnHit(...)` | 被击中时调。**protected internal**，外部程序集不能覆写（`MissionObject.cs:191`） |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 实体被移除时调。内部调 `SetAbilityOfFaces(false)` 和 `Mission.Current.OnMissionObjectRemoved`。**不能覆写**（`MissionObject.cs:324`） |
| `OnEndMission` | `public virtual void OnEndMission()` | 任务结束时调（与 `OnMissionEnded` 不同，这是 `ScriptComponentBehavior` 的钩子）。**可覆写**（`MissionObject.cs:338`） |

### 其它

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MovesEntity` | `protected internal override bool MovesEntity()` | 返回 true，表示这个组件会移动实体。**不能覆写**（`MissionObject.cs:353`） |
| `AddStuckMissile` | `public virtual void AddStuckMissile(GameEntity missileEntity)` | 把投射物附着为子实体。**可覆写**（`MissionObject.cs:359`） |
| `GetEntityToAttachNavMeshFaces` | `protected virtual WeakGameEntity GetEntityToAttachNavMeshFaces()` | 返回要附着导航网格的实体。默认返回 `base.GameEntity`。**可覆写**（`MissionObject.cs:95`） |

**取舍判据**：`MissionObject` 有 30+ 个成员，按功能分组列出。故意略过的成员：`DynamicNavmeshLocalIds` 枚举（纯内部常量，mod 不需要直接引用）、`OnGetAgentState` 等 `protected internal` 且与物件无关的继承成员。

## 真实示例

下面是一个完整的自定义 `MissionObject` 子类，展示「可交互物」的典型用法：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.Engine;
using TaleWorlds.Core;

public class MyCustomGate : MissionObject
{
    private bool _isOpen = false;

    // 覆写生命周期钩子
    public override void AfterMissionStart()
    {
        // 任务开始后，门默认关闭
        _isOpen = false;
        SetDisabled();
    }

    public override void OnDeploymentFinished()
    {
        // 部署结束后，门可以交互
        SetEnabled();
    }

    // 开关门
    public void Toggle()
    {
        if (_isOpen)
        {
            Close();
        }
        else
        {
            Open();
        }
    }

    public void Open()
    {
        _isOpen = true;
        SetEnabledAndMakeVisible(true, true);
    }

    public void Close()
    {
        _isOpen = false;
        SetDisabledAndMakeInvisible(true, true);
    }

    // 被击中时的回调（只能在派生类内部覆写）
    protected internal override bool OnHit(
        Agent attackerAgent, int damage, Vec3 impactPosition, Vec3 impactDirection,
        in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex,
        ScriptComponentBehavior attackerScriptComponentBehavior,
        out bool reportDamage, out float finalDamage, out float fireDamage, out float modifiedFireDamage)
    {
        reportDamage = true;
        finalDamage = damage;
        fireDamage = -1f;
        modifiedFireDamage = -1f;
        return false;
    }
}
```

## 参见

- [`../Team`](../Team) —— 战斗里的一方，`MissionObject` 的 `OnAutoDeployTeam` 钩子的参数类型。
- [`../../mission/MissionBehavior`](../../mission/MissionBehavior) —— 任务级行为的基类，与 `MissionObject` 的取舍见「心智模型」。
- [`../_index`](../_index) —— `mission-ext` 桶全类型索引。

## 导航

- 同桶：[`../MissionLogic`](../MissionLogic) · [`../MissionObject`](../MissionObject) · [`../Team`](../Team)
- 父索引：[`../_index`](../_index)
