---
title: "MissionGauntletObjectiveView"
description: "任务目标 UI 的 Gauntlet 视图：用一个 [OverrideView] 把 MissionObjectiveView 换成真界面。它只是 MissionObjectiveLogic 的消费者——objective 是谁、由谁推进它自己一点都不管。"
---

# MissionGauntletObjectiveView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `[OverrideView(typeof(MissionObjectiveView))] public class MissionGauntletObjectiveView : MissionObjectiveView`
**Base:** `MissionObjectiveView`（→ [MissionView](../../mission-ext/MissionView)）
**File:** `TaleWorlds.MountAndBlade.GauntletUI/SandBox/GauntletUI/Missions/MissionGauntletObjectiveView.cs`（113 行）

## 概述

这是整个 `[OverrideView]` 机制的一个最小实例：**它不实现任何目标逻辑，只是把「当前目标」这个只读快照接到一个 Gauntlet 电影上，并且每帧把快照的变化推给 data source。**

三个 override 阶段各管一段，加两个拍照模式开关：

| 阶段 | 行号 | 做什么 |
| --- | --- | --- |
| `OnMissionScreenInitialize` | `:21` | 从 `Mission` 上取 `MissionObjectiveLogic`，构造 `MissionObjectiveVM`，`new GauntletLayer(1, "GauntletLayer", false)`，`LoadMovie("MissionObjectives", dataSource)`，`MissionScreen.AddLayer(layer)` |
| `OnMissionScreenTick` | `:56` | 三重 null 守卫后，比对 `GetCurrentObjective()` 的引用是否变了；变了才 `_dataSource.UpdateObjective(...)`；然后无条件 `_dataSource.Tick(dt)` |
| `OnMissionScreenFinalize` | `:40` | 逆序拆：`RemoveLayer(layer)` → `layer = null` → `dataSource.OnFinalize()` → `dataSource = null` |
| `OnPhotoModeActivated` / `Deactivated` | `:76` / `:88` | 只动一个字段：`layer.UIContext.ContextAlpha = 0f` / `1f` |
| `OnResumeView` / `OnSuspendView` | `:98` / `:106` | `ScreenManager.SetSuspendLayer(layer, false/true)` |

三个私有字段 `_gauntletLayer` / `_dataSource` / `_objectiveLogic`（`:110`–`:113`）加一个 `_latestObjective`（`:112`），没有任何一个对外可见。

## 心智模型

**把它当成一根从 `MissionObjectiveLogic` 到 Gauntlet 电影之间的「单向水管」，而不是目标系统的一部分。**

数据流的完整形状是：

```
MissionObjectiveLogic.GetCurrentObjective()      ← 谁在写它，本类不知道
        │  每帧读一次，比引用
        ▼
LatestObjective != currentObjective ?            ← 引用比较，不是内容比较
        │  UpdateObjective(new)
        ▼
MissionObjectiveVM  ──── LoadMovie("MissionObjectives") ────▶  prefab XML
```

关键点是**这个类对「目标是什么」完全无知**。它调 `Mission.GetMissionBehavior<MissionObjectiveLogic>()` 拿到的那个 logic（`MissionObjectiveLogic.cs:62` 的 `GetCurrentObjective()` 只是 `return this._currentObjective;`），是任务脚本那边注册的。要在 mod 里加自己的目标，得去注册 `MissionObjectiveLogic` 并调它的 API，而不是碰这个 view。

三条必须记住的实现细节：

**一、`OnMissionScreenInitialize` 在找不到 logic 时是「断言 + 直接 return」，不是抛异常。**

```csharp
// :24-29
this._objectiveLogic = base.Mission.GetMissionBehavior<MissionObjectiveLogic>();
if (this._objectiveLogic == null)
{
    Debug.FailedAssert("Mission objective view is enabled but there is no objective logic in mission", "...", "OnMissionScreenInitialize", 34);
    return;
}
```

后果是**界面静默消失**：没有 layer 被加进去，`OnMissionScreenTick` 的三重守卫（`:57-60`）会让它每帧立刻返回。所以「目标 UI 不显示」的根因通常在 mission behavior 侧，而不是 UI 侧。

**二、刷新靠引用比较。** `:64` 的 `if (this._latestObjective != currentObjective)` 用的是 `MissionObjective` 的引用相等——**如果 logic 每次都 `new MissionObjective(...)` 而不是复用实例，每一帧都会判定为「变了」并调 `UpdateObjective`**。反过来，如果 logic 原地改了同一个对象的内部状态而没有换引用，**这个 view 永远不会收到更新**。

**三、拍照模式改的是 `UIContext.ContextAlpha`，不是 `IsVisible`。** `:79` 与 `:91` 写的是整个 UIContext 的 alpha。同一时刻如果别的 layer 挂在同一个 context 上，它也会一起被压暗——这是「Context 级」而非「Layer 级」的作用域。

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| `OnMissionScreenInitialize` | `public override void`（`:21`） | 先 `base.OnMissionScreenInitialize()`，再取 logic、建 data source、建 layer、LoadMovie、AddLayer。**layer 的输入顺序固定是 1**（`new GauntletLayer(1, "GauntletLayer", false)`，`:33`）——drawOrder 硬编码，mod 无法改。 |
| `OnMissionScreenFinalize` | `public override void`（`:40`） | 两次独立 null 检查。**先把 layer 从 screen 摘掉并置 null，再 finalize data source**——顺序反了会在 finalize 里触发对已摘 layer 的访问。`MissionScreen` 本身不会帮你摘，这个类是唯一持有 `_gauntletLayer` 引用的人。 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)`（`:56`） | 三重守卫 `if (_objectiveLogic == null || _gauntletLayer == null || _dataSource == null) return;` 之后：`GetCurrentObjective()` → 引用比对 → `UpdateObjective` → `Tick(dt)`。**`Tick(dt)` 是无条件调的**，不管目标有没有变。 |
| `OnPhotoModeActivated` | `public override void`（`:76`） | `if (_gauntletLayer != null) _gauntletLayer.UIContext.ContextAlpha = 0f;`。注意这里只判 layer 非空，**不判 `_dataSource`**——与 `OnMissionScreenTick` 的守卫强度不一致。 |
| `OnPhotoModeDeactivated` | `public override void`（`:88`） | 同上，写回 `1f`。**照片模式下进出的次数不对称时（比如相机切场景只触发 activate 不触发 deactivate），UI 会停在 alpha=0**。 |
| `OnResumeView` | `protected override void`（`:98`） | `ScreenManager.SetSuspendLayer(this._gauntletLayer, false)`。**没有 null 检查**——`_gauntletLayer` 为 null 时是否抛异常取决于 `SetSuspendLayer` 的实现。初始化失败（断言分支 return）之后如果紧接着来一次 resume，这里是第一个碰到 null 的地方。 |
| `OnSuspendView` | `protected override void`（`:106`） | 同上，`true`。 |
| `[OverrideView(typeof(MissionObjectiveView))]` | 类级特性（`:15`） | 让框架在创建 `MissionObjectiveView` 时改用本类。**这个特性决定了「有没有界面」，logic 的存在决定了「界面里有没有内容」**——两者独立。 |

## 真实示例

在 mission 里挂上目标 UI，需要两件事：注册提供目标的 behavior，以及让这个 view 被选中。但**`MissionView` 在 1.3.0 没有 public 的按类型取回入口**——`MissionScreen` 持有的 `MissionViewsContainer` 是 private，容器上只有 `Add` / `Remove` / `Contains` / `ForEach`，没有 `Get<T>()`。所以要验证「目标 UI 在不在」，从 logic 侧查：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions.MissionLogics;
using TaleWorlds.MountAndBlade.Missions.Objectives;

public class MyObjectiveMissionBehavior : MissionLogic
{
    public override void OnMissionBehaviorInitialize()
    {
        base.OnMissionBehaviorInitialize();

        // 与 MissionGauntletObjectiveView.cs:22 完全同形
        MissionObjectiveLogic logic = Mission.Current.GetMissionBehavior<MissionObjectiveLogic>();
        if (logic == null)
        {
            Debug.Print("没有目标 logic → 目标 UI 不会被创建（view 侧会走 Debug.FailedAssert 然后静默 return）");
            return;
        }
        Debug.Print("objective UI present: " + Mission.Current.GetMissionBehavior<MissionObjectiveLogic>().GetCurrentObjective());
    }
}
```

「目标什么时候变了」这个判断的唯一权威读法就是这个 view 每帧做的事：

```csharp
using TaleWorlds.MountAndBlade.Missions.Objectives;

private static MissionObjective PollCurrentObjective(MissionObjectiveLogic logic, ref MissionObjective last)
{
    MissionObjective current = logic.GetCurrentObjective();
    if (current != last)          // 引用比较，与 MissionGauntletObjectiveView.cs:64 同形
    {
        last = current;
        // 这里才是「目标变了」该做的事
    }
    return last;
}
```

## 风险与边界

- **`OnMissionScreenInitialize` 找不到 logic 时只断言不抛异常。** `:26` 的 `Debug.FailedAssert` 在 release 下通常不弹窗，之后 `:28` 的 `return` 让整个 layer 都不被创建。症状是「目标 UI 完全不出现」而不是任何异常——**排查时先确认 mission 里有没有 `MissionObjectiveLogic`，不要先查 UI**。
- **`OnResumeView` / `OnSuspendView` 没有 null 守卫。** `:99` 与 `:107` 直接用 `this._gauntletLayer`，而 `_gauntletLayer` 只在 `:34` 赋值、`:45` 置 null。初始化失败路径 + 立刻 suspend 的组合会把 null 传进 `ScreenManager.SetSuspendLayer`。`OnPhotoModeActivated` 反而有 null 检查（`:77`）——同一个类里三处一致性各不相同。
- **刷新判据是引用，不是内容。** `:64` 的 `!=` 对 `MissionObjective` 是引用比较。logic 复用同一实例原地改状态时 UI 永远不刷新；logic 每帧 `new` 时每帧都重刷（同时意味着 `MissionObjectiveVM` 每帧重建列表，有帧开销）。
- **这个 view 不可从外部拿到。** `_gauntletLayer` / `_dataSource` / `_objectiveLogic` 三个字段全是 private 且没有 getter；`MissionScreen` 侧的 `MissionViewsContainer` 也是 private（只有 `Add` / `Remove` / `Contains` / `ForEach`，**没有按类型取 view 的方法**）。所以想从 mod 里拿到 `MissionObjectiveView` 实例，1.3.0 没有公开路径——只能像官方那样从 `Mission.GetMissionBehavior<MissionObjectiveLogic>()` 入手。
- **layer 的 drawOrder 硬编码为 1。** `:33` 的 `new GauntletLayer(1, ...)`。想改层级只能靠 `ScreenManager` 的 suspend 机制或去改 prefab 里的 `ZIndex`。
- **`LoadMovie("MissionObjectives", …)` 按名字取 prefab。** `:34` 的字符串必须与 `Modules/GauntletUI/.../MissionObjectives.xml` 里的文件名对上；对不上时不会给出「找不到」的清晰报错，而是 `GauntletLayer` 内部抛。
- **`OnMissionScreenTick` 每帧调 `Tick(dt)`，不看目标变没变。** data source 的动画/计时每帧推进。想省开销只能自己在 `MissionObjectiveVM` 层做，不是在这个 view 层。
- **拍照模式的 alpha 作用域是 UIContext，不是本 layer。** `:79` / `:91` 写 `UIContext.ContextAlpha`，会同时影响共享同一 context 的其他界面元素。

## 跨版本提示

- **六个源码树里只有 1.3.0 与 1.4.6 / 1.4.7 / 1.5.3 有这个文件**（1.3.15 和 1.4.5 是残缺树，不含 `TaleWorlds.MountAndBlade.GauntletUI/SandBox/GauntletUI/Missions/`）。在存在的四棵树上，8 条 public/protected 声明（5 个 `public override` + 2 个 `protected override` + 类声明）**逐字相同**，没有任何成员被加、被删或改签名。
- **结论：从 1.3.0 升到 1.5.3，你针对这个 view 写的任何 override 或反射都不需要改。** 五个阶段回调的名字、参数、调用顺序全部保持一致。
- 需要留意的只有继承面：`MissionObjectiveView`（基类）在这几个版本间可能有新增的 virtual 成员。如果你在 `MissionGauntletObjectiveView` 上写了自定义 override，跨版本时请确认基类新增的 virtual 没有被你的实现意外遮蔽——本类只覆盖了 5 个方法，基类其余成员的变化对它没有直接影响。

## 依赖关系

- 基类链：`MissionObjectiveView` → [MissionView](../../mission-ext/MissionView)；「有哪些阶段回调可覆盖」完全由这条链定义
- 数据来源：[MissionObjectiveLogic](../../mission-ext/MissionObjectiveLogic)（TaleWorlds.MountAndBlade）的 `GetCurrentObjective()`，注册方是任务脚本而不是本类
- 产出的 data source：`MissionObjectiveVM`（`TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`，本仓库 `api/` 下**没有对应页面**，需要时请直接引用程序集里的类型名）
- UI 依赖：[GauntletLayer](../../engine/GauntletLayer) 的 `LoadMovie` / `UIContext`；电影文件 `MissionObjectives.xml`
- 屏幕挂载：`MissionScreen` 的 `AddLayer` / `RemoveLayer`（[MissionScreen](../../mission-ext/MissionScreen)）
- 相邻维度：目标本身是 [MissionObjective](../../mission-ext/MissionObjective)，判定完成靠它自己的 `IsCompleted`
- 桶首页：[campaign-ext API 分区](../)
