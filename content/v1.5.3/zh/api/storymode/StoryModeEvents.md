---
title: "StoryModeEvents"
description: "主线专属事件总线：六个 IMbEvent 的静态门面，让 behavior 和剧情任务能在不互相持有引用的前提下互相通知。"
---
# StoryModeEvents

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`（TaleWorlds.CampaignSystem）
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeEvents.cs`

## 概述

`StoryModeEvents` 是主线剧本的**进程内通知通道**。它继承 `CampaignEventReceiver`，因此可以在战役启动时被 [CampaignGameStarter](../../campaign/CampaignGameStarter) 之外的路径（[CampaignStoryMode](../CampaignStoryMode) 构造的战役里由 [StoryModeSubModule](../StoryModeSubModule) 调 `AddCampaignEventReceiver`）挂上，战役结束时 `RemoveListeners` 自动解绑。里面只有六个 `MbEvent` 字段，每个都同时暴露一对「静态只读属性」和「实例触发方法」——静态属性给订阅方用，实例方法给触发方用。这是 TaleWorlds 事件系统的标准写法。

## 心智模型

它**不是** `CampaignEvents` 的子集，也没有注册到 `CampaignEventDispatcher` 的全局表里——它是 [StoryModeManager](../StoryModeManager) 的一个普通成员，每次 `Initialize()`（构造函数或 `[LoadInitializationCallback]`）都会 `new` 一份。所以：

1. **实例存活期 = 单次战役会话**。读档会重建，旧订阅全部失效。
2. **订阅必须在 `RegisterEvents` 里用 `AddNonSerializedListener`**——原生代码在 `FirstPhaseCampaignBehavior`、`AchievementsCampaignBehavior`、`StoryModeTutorialBoxCampaignBehavior` 里全是这样。
3. **静态属性 `StoryModeEvents.OnXxxEvent` 的 getter 会走 `StoryModeEvents.Instance`**，而 `Instance` 走 `StoryModeManager.Current`。所以在 `StoryModeManager.Current == null` 的时刻访问这些静态属性会 NRE——**不是返回 null**。

触发方与订阅方的配对关系（从真实调用点反推）：

| 事件 | 触发点 | 主要订阅方 |
| --- | --- | --- |
| `OnMainStoryLineSideChosenEvent` | `MainStoryLine.SetStoryLineSide` | FirstPhase 相关任务与 behavior |
| `OnStoryModeTutorialEndedEvent` | `MainStoryLine.CompleteTutorialPhase` | `FirstPhaseCampaignBehavior`、`AchievementsCampaignBehavior`、`StoryModeBanditSpawnCampaignBehavior` |
| `OnBannerPieceCollectedEvent` | `FirstPhase.CollectBannerPiece` | `AssembleTheBannerQuest`、`AchievementsCampaignBehavior` |
| `OnConspiracyActivatedEvent` | `MainStoryLine.CompleteSecondPhase` | `DefeatTheConspiracyQuestBehavior` 等 |
| `OnTravelToVillageTutorialQuestStartedEvent` | `TravelToVillageTutorialQuest` | `StoryModeTutorialBoxCampaignBehavior` |
| `OnStealthTutorialActivatedEvent` | —— | **本版本内无订阅方** |

**坑**：`RemoveListeners(object obj)` 清的是「以 obj 为 key 注册的非序列化监听」，不是全部监听。所以一个 behavior 被移除时，其它订阅者不受影响；但反过来说，如果你在一个将被复用的 behavior 实例上重复 `AddNonSerializedListener`，监听会累积。

## 主要成员

- `static StoryModeEvents Instance { get; }`：转发 `StoryModeManager.Current.StoryModeEvents`。非主线战役返回 null。
- `static IMbEvent<MainStoryLineSide> OnMainStoryLineSideChosenEvent { get; }`：玩家选定帝国/反帝国阵营。带参数的事件，只有它一个。
- `void OnMainStoryLineSideChosen(MainStoryLineSide side)`：触发上面那个。**只在 `MainStoryLine` 内部调用**，mod 应该用 `MainStoryLine.SetStoryLineSide` 而不是直接调它，否则 `PlayerSupportedKingdom` 不会被快照、导师也不会被禁用。
- `static IMbEvent OnStoryModeTutorialEndedEvent` / `void OnStoryModeTutorialEnded()`：教学结束。
- `static IMbEvent OnBannerPieceCollectedEvent` / `void OnBannerPieceCollected()`：每收集一块旗子触发一次（`FirstPhase.CollectBannerPiece` 末尾），共三次。
- `static IMbEvent OnConspiracyActivatedEvent` / `void OnConspiracyActivated()`：阴谋全面启动（第二阶段转第三阶段）。
- `static IMbEvent OnStealthTutorialActivatedEvent` / `void OnStealthTutorialActivated()`：潜行教学。**触发方法存在但本版本无调用方，订阅它不会有任何效果**。
- `static IMbEvent OnTravelToVillageTutorialQuestStartedEvent` / `void OnTravelToVillageTutorialQuestStarted()`：教学第一个任务「前往村庄」开始。
- `public override void RemoveListeners(object obj)`：由引擎在战役结束时调，按 obj 清六个事件的监听。

## 使用示例

```csharp
// 订阅方：放在 behavior 的 RegisterEvents 里（与 FirstPhaseCampaignBehavior 同款写法）
public override void RegisterEvents()
{
    StoryModeEvents.OnMainStoryLineSideChosenEvent.AddNonSerializedListener(
        this, new Action<MainStoryLineSide>(this.OnSideChosen));
    StoryModeEvents.OnBannerPieceCollectedEvent.AddNonSerializedListener(
        this, new Action(this.OnBannerPieceCollected));
}

private void OnSideChosen(MainStoryLineSide side)
{
    // 阵营定了：导师已被 MainStoryLine.SetStoryLineSide 永久禁用，此处只需切后续剧本
    if (side == MainStoryLineSide.CreateImperialKingdom)
    {
        StoryModeManager.Current.MainStoryLine.CompleteFirstPhase();
    }
}

private void OnBannerPieceCollected()
{
    FirstPhase phase = StoryModeManager.Current.MainStoryLine.FirstPhase;
    if (phase != null && phase.AllPiecesCollected)
    {
        Debug.Print("三块旗子集齐，可以合成龙旗了");
    }
}

// 触发方：不要直接调 StoryModeEvents.Instance.OnXxx，
// 走业务入口让状态机自己广播
StoryModeManager.Current.MainStoryLine.CompleteSecondPhase(); // 内部触发 OnConspiracyActivated
```

## 风险与边界

- **不存档**：读档后所有监听关系消失。监听方必须能在 `RegisterEvents` 重新建立。
- **`Instance` 可能为 null**：非主线战役、沙盒、编辑器。静态属性 getter 不判空，直接 NRE。
- **事件参数只有一个是强类型**：其余五个是 `IMbEvent` 无参。带参数的 `OnMainStoryLineSideChosenEvent` 要写 `Action<MainStoryLineSide>` 的委托，类型不匹配编译期就会挡住。
- **`RemoveListeners` 按 key 清**：传错对象等于没清。behavior 被 `CampaignBehaviorManager.RemoveBehavior<T>()` 移除后，引擎不会再帮你清——如果那个 behavior 在别的地方注册过非序列化监听，需要自己调 `RemoveListeners(this)`。
- **`OnStealthTutorialActivatedEvent` 是死事件**：不要基于它写逻辑，除非你确认自己的 mod 触发了它。

## 依赖关系

- [StoryModeManager](../StoryModeManager) — 持有本对象并在其 `Initialize()` 里重建，`Instance` 靠它拿
- [MainStoryLine](../MainStoryLine) — 三个事件的触发方（选边、教学结束、阴谋启动）
- [FirstPhase](../FirstPhase) — `OnBannerPieceCollected` 的触发方
- [CampaignStoryMode](../CampaignStoryMode) — 拥有并保存所属的 manager
- [CampaignEventReceiver](../../campaign/CampaignEventReceiver) — 基类，提供引擎侧的事件生命周期钩子