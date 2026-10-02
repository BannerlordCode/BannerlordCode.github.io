---
title: "CampaignEntityVisualComponent"
description: "所有大地图视觉服务派生的基类——队伍铭牌、聚落标签、追踪渲染、天气、音频。它是一个按 Priority 排序的扩展点：SandBoxViewVisualManager 对组件排序后，把每帧 tick、鼠标点击、悬停相交、读档完成等事件广播给全部组件。"
---
# CampaignEntityVisualComponent

**Namespace:** SandBox.View.Map  
**Module:** SandBox.View  
**Type:** `public class CampaignEntityVisualComponent : IEntityComponent`  
**Base:** `IEntityComponent`  
**File:** `SandBox.View/SandBox.View.Map/CampaignEntityVisualComponent.cs`

## 概述

`CampaignEntityVisualComponent` 是那些负责在大地图（campaign map screen）上绘制与命中检测的服务的抽象基类。它是“纯虚函数 + 空默认实现”的形态：`Priority`、`OnVisualTick`、`OnMouseClick`、`OnVisualIntersected`、`OnFrameTick`、`OnGameLoadFinished`、`OnTick`、`ClearVisualMemory`，再加上 `protected virtual` 的 `OnInitialize` / `OnFinalize`。每一个基类实现都是空操作，因此子类只需重写自己关心的回调。

注册走的是 `SandBoxViewVisualManager`，而不是 `Campaign`。`AddEntityComponent<TComponent>()` 要求 `new()` 约束，并会立刻调用 `SortComponents()`，也就是说 `Priority` 是在那一刻被读取的。随后管理器会把每个回调**广播**给所有已注册组件：`OnTick(realDt, dt)`、`OnVisualTick(screen, realDt, dt)`、`OnFrameTick(dt)`、`OnGameLoadFinished()`、`ClearVisualMemory()`，以及针对输入的 `OnMouseClick(...)` 与 `OnVisualIntersected(...)`。两个输入回调返回 `bool`，并且结果在所有组件之间**取或**：管理器会继续遍历，最终由聚合结果决定这次点击是否被地图消费。这就是“在不改动地图屏幕的前提下，往地图上加一个可点击对象”的扩展缝隙。

`IEntityComponent.OnInitialize` / `IEntityComponent.OnFinalize` 在这里是**显式接口实现**（`void IEntityComponent.OnInitialize()`），它们转发给同名的 `protected virtual` 方法。子类重写 protected 版本；这两个接口成员对普通调用方不可见。

## 心智模型

把它读成**“地图屏幕广播总线上的一个插槽，按 Priority 排序”**：

- **它处在哪一层**：它是*视图层*基础设施。只有 `MapScreen` 存在时它才运行，不为 `Campaign` 状态做持久化，也完全没有存档钩子。它做的一切都是逐帧的表现。
- **典型调用顺序**：组件被加入时（经 `EntitySystem.AddComponent`）管理器调用一次 `OnInitialize`；随后每帧：`OnTick` → `OnVisualTick` → `OnFrameTick`。读档时管理器调用 `OnGameLoadFinished`，让组件重建缓存的视觉对象；`ClearVisualMemory` 则是它的对应面，用于销毁或让缓存失效。
- **`OnTick` / `OnVisualTick` / `OnFrameTick` 之间的区别是实质性的**。`OnTick(realDt, dt)` 用的是战役时间，`OnVisualTick(screen, realDt, dt)` 额外给出 `MapScreen`（也正是在这里创建视觉对象才安全，因为屏幕引用是活的），`OnFrameTick(dt)` 是原始帧时间。重载错了会得到一个“会 tick 但拿不到 `MapEntityVisual`”的组件。
- **常见误用陷阱 —— 所有人的 `Priority` 默认都是 `0`**。它是 `virtual int Priority => 0`。排序只有靠巧合才稳定；如果你的视觉必须画在另一个组件之上或之下，就必须显式重载 `Priority`，否则得到的绘制顺序是任意的，且会随着别人注册而变化。
- **常见误用陷阱 —— 把 `bool` 返回值当成排他的**。`OnMouseClick` 与 `OnVisualIntersected` 默认返回 `false`，正是为了让无关组件不吞掉事件。无条件返回 `true` 会让地图把每一次点击都当作已被消费。
- **常见误用陷阱 —— 忽略 `new()` 约束**。`AddEntityComponent<TComponent>()` 带 `new()` 约束，所以构造函数需要参数的组件无法通过它添加。请直接使用 `EntitySystem`，或把组件设计成在 `OnInitialize` 中解析依赖。
- **常见误用陷阱 —— 跨 tick 保留 `MapEntityVisual` 引用**。场景重建时视觉对象会被重新创建。请像内置组件那样缓存*实体 id*，再去查视觉对象。

## 何时使用 / 何时不要用

**该用它的情况：**
- 你需要在基础游戏不渲染的地图上绘制或命中检测某样东西——自定义覆盖层、额外标记、悬停高亮。
- 你需要一个只响应地图 tick 与读档完成、完全不需要成为 `CampaignBehaviorBase` 的服务（因为它纯粹是视觉的，不该持久化任何东西）。
- 你需要参与地图的点击消费链。

**不该用它的情况：**
- 你需要影响战役模拟或存档数据。那是 `CampaignBehaviorBase` 的职责——视觉组件没有 `SyncData`，无法持久化任何内容。
- 你需要把视觉对象挂到某个具体 `Settlement` 或 `MobileParty` 的生命周期上。请使用已经派生了本类的专用管理器（`SettlementVisualManager`、`MobilePartyVisualManager`），而不是再加一个与之竞争的组件。
- 你需要的是地图**逻辑**而非地图**视觉**——应该用 `Campaign` 上的非视觉孪生类 `CampaignEntityComponent` 作为基类。

## 依赖关系

- [SandBoxViewSubModule](../SandBoxViewSubModule) —— 静态入口，其 `SandBoxViewVisualManager` 持有组件列表、注册内置组件并广播回调。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 非视觉的对应物：当行为需要跨存档存活、而不是每个屏幕重建时用它。
- [MapScreen](../MapScreen) —— 其构造函数注册内置组件，其生命周期决定这些组件的存亡。
- [MissionLogic](../../mission-ext/MissionLogic) —— 任务侧的逐帧服务对应物，用于在同一逻辑也要跑战斗时做对照。
- [MBObjectManager](../MBObjectManager) —— `MapEntityVisual` 的 id 最终解析所经过的对象管理器注册表。
- [SandBoxViewVisualManager](../SandBoxViewVisualManager) —— 本基类接入的 `AddEntityComponent` / `RemoveEntityComponent` / `GetEntityComponent` 接口面。

## 主要成员

### `public virtual int Priority => 0`

排序键，在每次 `AddEntityComponent` 之后由 `SandBoxViewVisualManager.SortComponents()` 使用。值越小越早被广播/排序。请重载它来把自己的组件排在内置组件之前或之后；停在 `0` 会把你放进一个任意但确定的分组。

### `public virtual void OnVisualTick(MapScreen screen, float realDt, float dt)`

接收活的 `MapScreen` 的逐帧钩子。这是创建、更新或销毁 `MapEntityVisual` 实例的正确位置，因为它是唯一一个给你屏幕引用的回调。`realDt` 是未缩放真实时间，`dt` 是缩放后的。
- **陷阱**：销毁期间 `screen` 可能为 `null`；使用前请判空。

### `public virtual void OnTick(float realDt, float dt)`

不需要屏幕引用的逐帧钩子。适合放那些不需要碰视觉对象的逻辑（冷却、计时、缓存刷新）。无返回值。

### `public virtual void OnFrameTick(float dt)`

原始帧钩子。v1.4.5 中基类实现为空，内置组件大多使用 `OnVisualTick` / `OnTick`；把它当作一个额外的、最低优先级的机会，而不是主循环。

### `public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

地图点击时调用，参数含当前选中视觉、地形相交点、悬停的面以及是否为双击。返回 `true` 表示消费该事件。
- **返回语义**：管理器对所有组件的结果取或；某个组件返回 `true` 并不会阻止其他组件被调用，只是让聚合结果变成 `true`。
- **默认**：`false`，这对不关心点击的组件是正确的取值。

### `public virtual bool OnVisualIntersected(Ray mouseRay, UIntPtr[] intersectedEntityIDs, Intersection[] intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

悬停命中检测。当本组件处理了该次相交时返回 `true`；两个 `ref` 参数允许组件设置悬停/选中视觉对象。
- **返回语义**：与 `OnMouseClick` 同样的取或聚合。由于 `hoveredVisual` / `selectedVisual` 是 `ref`，一个返回 `true` 并且写入它们的组件就参与了地图的悬停高亮链。

### `public virtual void OnGameLoadFinished()`

读档完成后调用一次，让组件丢弃缓存并重建那些引用了读档前世界的视觉对象。它应与 `ClearVisualMemory` 配对使用。

### `public virtual void ClearVisualMemory()`

丢掉缓存的视觉对象引用。当底层视觉对象失效时（场景重载、实体被移除、筛选条件变化）调用它，或让管理器替你调用。

### `protected virtual void OnInitialize()` / `protected virtual void OnFinalize()`

初始化与收尾钩子。它们只能通过**显式**接口实现 `IEntityComponent.OnInitialize()` / `IEntityComponent.OnFinalize()` 触达，由 `EntitySystem` 调用。请重载 protected 版本；不要试图在子类上直接实现那两个接口成员。

## 使用示例

### 示例 1 —— 一个为符合筛选条件的聚落加高亮的组件

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Library;

namespace MyMod
{
    public class HighlightSettlementsComponent : CampaignEntityVisualComponent
    {
        // 画在内置聚落视觉之上。
        public override int Priority => 50;

        private SandBox.View.Map.MapScreen _screen;
        private int _lastCandidateCount = -1;

        public override void OnVisualTick(MapScreen screen, float realDt, float dt)
        {
            _screen = screen;
            int candidateCount = MBObjectManager.Instance.GetObjectTypeList<Settlement>().Count;
            if (candidateCount != _lastCandidateCount)
            {
                _lastCandidateCount = candidateCount;
                ClearVisualMemory();     // 场景变了：丢掉缓存的视觉对象
            }
        }

        public override bool OnVisualIntersected(Ray mouseRay, UIntPtr[] intersectedEntityIDs,
            Intersection[] intersectionInfos, int entityCount, Vec3 worldMouseNear,
            Vec3 worldMouseFar, Vec3 terrainIntersectionPoint,
            ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)
        {
            // 返回 false 让内置的悬停链原样通过。
            return false;
        }

        public override void ClearVisualMemory()
        {
        }

        protected override void OnFinalize()
        {
            _screen = null;
        }
    }
}
```

地图屏幕构建完成后，从 `SubModule` 里注册：

```csharp
using SandBox.View.SandBoxViewSubModule;

public class MyMapVisualSubModule
{
    private HighlightSettlementsComponent _component;

    public void Install()
    {
        // AddEntityComponent 会按 Priority 排序，并要求无参构造函数。
        _component = SandBoxViewSubModule.SandBoxViewVisualManager
            .AddEntityComponent<HighlightSettlementsComponent>();
    }

    public void Uninstall()
    {
        SandBoxViewSubModule.SandBoxViewVisualManager
            .RemoveEntityComponent<HighlightSettlementsComponent>();
        _component = null;
    }
}
```

## 风险与崩溃边界

- **存档序列化**：没有，而且这正是设计意图。`CampaignEntityVisualComponent` 没有 `SyncData`、不参与 `IDataStore`，也从不写入战役存档。你缓存的一切都会在读档时丢失——这正是 `OnGameLoadFinished` 与 `ClearVisualMemory` 存在的理由。如果你的功能需要持久化，把数据放进 `CampaignBehaviorBase`，让组件只负责读取。
- **跨域依赖**：该类型位于 `SandBox.View`（*视图*程序集），而不是 `TaleWorlds.CampaignSystem`。战役逻辑程序集不应引用它；引用方向永远是 视图 → 战役，绝不是反过来。从 `CampaignBehaviorBase` 里引用视觉类型是分层违规，当战役代码在不加载视图模块的场合（无头、专用服务器、工具场景）运行时就会出问题。
- **加载时序**：组件由 `MapScreen` 的构造函数注册。若你在地图屏幕存在之前就从 `SubModule` 钩子里注册，`AddEntityComponent` 仍然可用，但在屏幕存在之前不会有任何广播；若你在读档游戏的 `OnGameLoadFinished` **之后**才注册，你的组件将永远收不到那次调用，必须自己在 `OnInitialize` 中重建缓存。
- **ID 稳定性**：组件类型名就是 `EntitySystem` 用于去重的键（`GetComponent<TComponent>()`）。同一个 `TComponent` 注册两次会折叠成一个——第二次 `AddEntityComponent<T>` 返回既有实例而不是新建一个，因此“重复注册”会静默变成空操作，而不是报错。
- **终结**：`OnFinalize` 只能通过显式接口实现触达。如果你的清理逻辑写在 `Dispose` / 终结器里，组件的引用会让地图的 `EntitySystem` 比预期活得更久。任何静态事件或管理器持有事件的退订都要放在 `OnFinalize`。
- **未判空的 `screen`**：屏幕销毁期间 `OnVisualTick` 可能在 `MapScreen` 为 `null` 或已释放时被调用。在 `ClearVisualMemory` 之后解引用 `MapEntityVisual`，是地图视觉类 mod 中最常见的原生侧崩溃原因。

## 跨版本提示

- **v1.3.x → v1.4.5**：回调集合保持稳定——`Priority`、`OnVisualTick`、`OnMouseClick`、`OnVisualIntersected`、`OnFrameTick`、`OnGameLoadFinished`、`OnTick`、`ClearVisualMemory`、`OnInitialize`、`OnFinalize`。两个输入回调在两个版本中都返回 `bool`。
- **v1.4.5**：`IEntityComponent.OnInitialize` / `OnFinalize` 是显式接口实现，转发到 protected 虚方法。试图 `override` 接口成员的子类无法编译——请重载 protected 那一对。
- **v1.4.5**：本基类上没有 `OnCampaignStart`、`OnCampaignEnd` 或 `OnMissionTick` 成员。战役时间的行为属于 `Campaign` 上的 `CampaignEntityComponent`，任务时间的行为属于 `MissionLogic`。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](../)
- ↔ 同级：[SandBoxViewSubModule](../SandBoxViewSubModule) —— 组件列表的静态持有者
- ↔ 同级：[MapScreen](../MapScreen) —— 注册内置组件的屏幕
- ↔ 同级：[SandBoxViewVisualManager](../SandBoxViewVisualManager) —— 组件的增/删/取接口面
- ↔ 同级：[MBObjectManager](../MBObjectManager) —— 视觉 id 解析所经过的对象注册表
- ↔ 跨桶：[CampaignBehaviorBase](../CampaignBehaviorBase) —— 负责持久化的对应物
- ↔ 跨桶：[MissionLogic](../../mission-ext/MissionLogic) —— 任务侧逐帧服务基类
