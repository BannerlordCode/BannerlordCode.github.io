---
title: "MissionView"
description: "MissionView 是连接活动 Mission 与 MissionScreen、输入、镜头、UI、对话和渲染回调的抽象任务视图基类。"
---
# MissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionView : MissionBehavior`  
**Base:** [MissionBehavior](../../mission/MissionBehavior)  
**Source file:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionView.cs`

## 一句话定位

它提供 view 层生命周期，把活动 [Mission](../../mission/Mission) 接到 `MissionScreen`、输入、镜头策略、photo mode、对话和渲染事件。

## 心智模型

`MissionView` 是专门化的 `MissionBehavior`，但不是任务模拟逻辑。View 由 mission-screen 的 view container 持有；`MissionScreen` 与 `Input` 由屏幕层填充，回调则由屏幕激活、渲染、焦点、对话和部署事件驱动。`BehaviorType` 是 `MissionBehaviorType.View`。基类给出安全默认值：允许 escape/photo mode，ready 默认 true，镜头覆盖默认 false，各生命周期方法默认空实现。

`SuspendView()` 与 `ResumeView()` 是视图暂停边界，会调用受保护的 `OnSuspendView`/`OnResumeView` 并更新 `IsViewSuspended`，但不会结束 Mission。`OnEndMissionInternal()` 在基类中 sealed，只负责转发到行为结束钩子；子类应覆盖正确的生命周期方法，不要尝试替换这个桥接方法。

## 何时使用，何时不要使用

- 需要任务 HUD、镜头、photo mode、对话或渲染集成，并且属于屏幕层时继承它。
- 只覆盖需要的回调，并在 screen 初始化后使用 `MissionScreen`。
- 不要用它处理 Agent 生成或任务规则；这些属于 [MissionLogic](../MissionLogic) 或其他任务行为。
- 不要给 `MissionScreen` 或 `Input` 赋值；二者由引擎持有（前者是 internal setter，后者从 scene layer 派生）。
- 不要把 `SuspendView` 当作 Mission 暂停，也不要在 `OnRemoveBehavior`/任务结束后持有 view。

## 依赖

```text
任务视图工厂
  -> MissionView 子类
  -> MissionScreen 附加并初始化
  -> 屏幕/渲染/焦点回调
  -> OnEndMissionInternal -> MissionBehavior 结束钩子
```

- 基础生命周期：[MissionBehavior](../../mission/MissionBehavior) 负责任务关联和结束桥接。
- 模拟同级：[MissionLogic](../MissionLogic) 负责非视觉任务规则。
- 状态持有者：[Mission](../../mission/Mission) 提供活动 Agent、场景和任务时间。
- 状态容器：[MissionState](../../campaign-ext/MissionState) 持有承载 Mission 的游戏状态转换。

## 公共面与调用时机

| 范围 | 成员 | 含义 |
| --- | --- | --- |
| 屏幕 | `MissionScreen`、`Input` | 引擎提供的屏幕和输入访问，附加后才可靠。 |
| 排序 | `ViewOrderPriority` | view container 使用的顺序值。 |
| 就绪 | `IsReady()` | 默认 `true`；异步初始化时可覆盖。 |
| 镜头与 escape | `OnEscape()`、`IsOpeningEscapeMenuOnFocusChangeAllowed()`、`UpdateOverridenCamera(float)` | 策略钩子；默认不处理 escape、允许焦点菜单、不给镜头覆盖。 |
| 屏幕生命周期 | `OnMissionScreenInitialize`、`OnMissionScreenActivate`、`OnMissionScreenDeactivate`、`OnMissionScreenFinalize` | 屏幕附加和活动状态边界。 |
| 表现 | `OnMissionScreenTick`、`OnSceneRenderingStarted`、`OnFocusChangeOnGameWindow` | 每帧、渲染和焦点钩子。 |
| 模式 | `OnPhotoModeActivated`、`OnPhotoModeDeactivated`、`OnConversationBegin`、`OnConversationEnd`、`OnDeploymentPlanMade` | 上下文相关的表现钩子。 |
| 暂停 | `SuspendView()`、`ResumeView()`、`IsViewSuspended` | 暂停视图工作，不结束 Mission。 |

## 真实示例

下面展示真实的扩展形状：只有引擎把 view 附加到 screen 和 Mission 后，才读取任务时间。

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews;

public sealed class MissionClockView : MissionView
{
    private float _elapsed;

    public override void OnMissionScreenInitialize()
    {
        _elapsed = 0f;
    }

    public override void OnMissionScreenTick(float dt)
    {
        if (Mission.Current == null || MissionScreen == null || IsViewSuspended)
        {
            return;
        }

        _elapsed += dt;
    }

    protected override void OnSuspendView()
    {
        _elapsed = 0f;
    }
}
```

具体实例必须由模块的 mission-view 创建路径返回，或通过 `MissionScreen.AddMissionView` 附加；仅 `new` 出对象不会填充 `MissionScreen`，也不会触发回调。

## 风险与生命周期边界

- View 初始化之前 `MissionScreen` 和 `Input` 可能不可用；转换期回调要做空值判断。
- 焦点、photo mode、对话转换期间，Mission 可能暂停或正在改变状态。
- `OnMissionScreenFinalize` 和 `OnRemoveBehavior` 是清理边界，应在那里释放输入、layer 和事件监听。
- `OnEndMissionInternal` 在该基类中 sealed；覆盖错误的方法会绕过预期清理。
- `UpdateOverridenCamera` 是 opt-in；返回 true 却没有一致的镜头状态会干扰活动任务镜头。

## 版本说明

本页遵循 v1.4.5 `MissionView` 默认值与屏幕回调。切换版本时请重新检查 `MissionScreen` 持有关系和 view container 排序规则。

## 导航

- 父级：[Mission 扩展 API](../)
- 同级：[MissionLogic](../MissionLogic) · [IMissionBehavior](../IMissionBehavior)
- 相关：[Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionState](../../campaign-ext/MissionState)
