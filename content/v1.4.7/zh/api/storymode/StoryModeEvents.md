---
title: "StoryModeEvents"
description: "剧情模式的全局事件总线：把主线阵营选定、教程结束、旗帜收集、阴谋激活等节点暴露为可订阅的静态事件。"
---
# StoryModeEvents

**命名空间：** `StoryMode`
**模块：** `StoryMode`
**类型：** `public class StoryModeEvents : CampaignEventReceiver`
**基类：** `CampaignEventReceiver`
**源文件：** `bannerlord-1.4.7/StoryMode/StoryModeEvents.cs`（声明见第 7 行）

## 概述

`StoryModeEvents` 是剧情模式的全局事件总线。它继承 `CampaignEventReceiver` 以接入战役事件接收体系，并把「主线阵营选定、剧情教程结束、潜行教程激活、旗帜碎片收集、阴谋激活、前往村庄教程任务开始」六类剧情节点各自暴露为一对成员：一个静态的 `OnXxxEvent`（订阅端）与一个实例 `OnXxx` 方法（触发端）。它位于 `StoryModeManager` 之下，由管理器在构造时创建并挂在 `StoryModeManager.StoryModeEvents` 上。它只负责广播与清理监听者，不保存任何剧情进度，也不决定节点何时达成——那由各剧情 Behavior 负责。

## 心智模型

把它想成「剧情版的公告板」：剧情代码在节点达成时贴出公告（调用 `OnXxx`），mod 在旁边听公告（订阅 `OnXxxEvent`）。实例由 `StoryModeManager` 在构造时创建并持有，静态 `Instance` 只是从管理器反查出来的快捷方式——管理器为空时 `Instance` 也为 `null`，因此六个静态事件属性的 getter 在非剧情模式下会直接抛 `NullReferenceException`。底层是 `MbEvent`：订阅方用 `AddListener` 挂回调，宿主用 `OnXxx` 触发；对象生命周期结束时用 `RemoveListeners(obj)` 一次性解绑全部六个事件。它不负责「谁来触发」，也不保证触发顺序——同一帧内多次触发会按订阅顺序同步回调。

## 怎么用

- 用 `StoryModeEvents.Instance` 取实例，它等价于 `StoryModeManager.Current.StoryModeEvents`；在非剧情模式下返回 `null`，所以订阅前必须判空（`StoryModeEvents.cs:11`）。
- 订阅应写在 mod 初始化或会话开始时；对象销毁（如 Behavior 卸载、Mission 结束）时必须调用 `RemoveListeners(this)`，否则残留回调会在下一局继续被触发（`StoryModeEvents.cs:25`）。
- `OnXxx` 系列是「触发端」而不是「查询端」：它们由剧情代码在节点达成时调用，只做广播、无返回值、无幂等保证。mod 若要响应节点，应订阅对应的静态 `OnXxxEvent`（`StoryModeEvents.cs:46`）。
- 六个事件的静态属性 getter 都直接解引用 `Instance`，因此即使在非剧情模式下「只是读一下事件」也会抛异常；务必先判 `StoryModeManager.Current != null`（`StoryModeEvents.cs:37`）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `class StoryModeEvents : CampaignEventReceiver` | 类型声明。继承战役事件接收基类，使引擎在清理监听者时能统一回调；本身不注册为 Behavior，由管理器持有。`StoryModeEvents.cs:7` |
| `static StoryModeEvents Instance { get; }` | 静态门面。取 `StoryModeManager.Current` 后返回其 `StoryModeEvents`；管理器为空时返回 `null`，是订阅前的判空点。`StoryModeEvents.cs:11` |
| `override void RemoveListeners(object obj)` | 批量解绑。把传入对象从全部六个 `MbEvent` 上移除；在 Behavior 卸载或对象销毁时调用，避免跨局残留回调。无返回值、无副作用提示。`StoryModeEvents.cs:25` |
| `static IMbEvent<MainStoryLineSide> OnMainStoryLineSideChosenEvent` / `void OnMainStoryLineSideChosen(MainStoryLineSide side)` | 主线阵营选定。订阅端读取该静态事件；触发端由剧情代码在玩家选定帝国/蛮族一方时调用，携带所选的 `MainStoryLineSide`。`StoryModeEvents.cs:37` · `StoryModeEvents.cs:46` |
| `static IMbEvent OnStoryModeTutorialEndedEvent` / `void OnStoryModeTutorialEnded()` | 剧情教程结束。订阅端无参事件；触发端在剧情新手教程整体结束时广播，常被角色创建与第一阶段 Behavior 用来切换到正式流程。`StoryModeEvents.cs:53` · `StoryModeEvents.cs:62` |
| `static IMbEvent OnStealthTutorialActivatedEvent` / `void OnStealthTutorialActivated()` | 潜行教程激活。订阅端无参事件；触发端在潜行教学被激活时广播，供 UI 与提示行为响应。`StoryModeEvents.cs:69` · `StoryModeEvents.cs:78` |
| `static IMbEvent OnBannerPieceCollectedEvent` / `void OnBannerPieceCollected()` | 旗帜碎片收集。订阅端无参事件；触发端在玩家收集到一面旗帜碎片时广播，主线与成就行为据此推进。`StoryModeEvents.cs:85` · `StoryModeEvents.cs:94` |
| `static IMbEvent OnConspiracyActivatedEvent` / `void OnConspiracyActivated()` | 阴谋激活。订阅端无参事件；触发端在反帝国阴谋线正式开启时广播，是阴谋任务线的起点信号。`StoryModeEvents.cs:101` · `StoryModeEvents.cs:110` |
| `static IMbEvent OnTravelToVillageTutorialQuestStartedEvent` / `void OnTravelToVillageTutorialQuestStarted()` | 前往村庄教程任务开始。订阅端无参事件；触发端在「前往村庄」教学任务下发时广播，用于引导玩家的第一次移动教学。`StoryModeEvents.cs:117` · `StoryModeEvents.cs:126` |

## 真实示例

```csharp
using TaleWorlds.Core;
using StoryMode;

StoryModeEvents events = StoryModeEvents.Instance;
if (events != null)
{
    // 订阅端：玩家收集到旗帜碎片时收到回调
    events.OnBannerPieceCollectedEvent.AddListener(() =>
    {
        // 在这里推进自定义的剧情进度
    });
    // 触发端示例：手动广播一次教程结束
    events.OnStoryModeTutorialEnded();
}
```

## 参见

- [StoryModeManager](../StoryModeManager) —— 创建并持有本事件总线的状态根。
- [CampaignEvents](../../campaign/CampaignEvents) —— 战役层的事件总线，与本类同属事件接收体系。
- [StoryModeQuestBase](../StoryModeQuestBase) —— 剧情任务的公共基类，其推进通常以本类的事件为节点。

## 导航

- ↑ [storymode 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
