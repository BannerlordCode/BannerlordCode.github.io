---
title: "TutorialQuestPhase"
description: "教学阶段内部的小步进游标：从「前往村庄」到「已收尾」六个离散状态。"
---
# TutorialQuestPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode
**Type:** `public enum TutorialQuestPhase`
**Base:** `System.Enum`
**Source:** `bannerlord-1.5.3/StoryMode/StoryModePhases/TutorialQuestPhase.cs`

## 概述

七个值的枚举（其中一个是哨兵）。它是教学阶段内部**单任务粒度**的进度游标，跟「教学阶段是否完成」是两个层次的概念：后者由 [TutorialPhase](../TutorialPhase) 的 `IsCompleted` 判定（看是不是 `Finalized`），而本枚举记录的是教学里具体走到了哪一步。

## 心智模型

它在 [TutorialPhase](../TutorialPhase) 里以 `[SaveableProperty(7)] TutorialQuestPhase` 持有，存档类型表 [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) 给它分配枚举 id **2002**。唯一写入路径是 `TutorialPhase.SetTutorialQuestPhase(TutorialQuestPhase)`，由教学任务在自身 `OnStartQuest` / 完成回调里推进。

值的形状值得注意：

- `None = -1` —— **唯一是负数的值**，哨兵。`None` 表示「尚未开始任何教学任务」。
- 四个 `*Started` 值 —— 都是「已开始」而非「已完成」，说明完成状态由各任务自己管。
- `Finalized` —— 终态。[TutorialPhase.CompleteTutorial(bool)](../TutorialPhase) 会直接把它设成 `Finalized`，同时把 `IsSkipped` 置为传入值。

教学被跳过时，**不会**逐个走 `*Started`——`CompleteTutorial` 一步跳到 `Finalized`。所以读到 `Finalized` 时无法从枚举值本身区分「完整打完」还是「跳过」，必须配 `TutorialPhase.IsSkipped` 一起读。

**坑**：

1. **`None` 是 -1 不是 0**。任何 `if ((int)phase > 0)` 或数组下标式写法都会越界。用 `TutorialQuestPhase.None` 做相等比较。
2. **名字是 Started 不是 Done**。看到 `TravelToVillageStarted` 不要以为那是完成态。
3. **`Finalized` 之后还能再设值**：`SetTutorialQuestPhase` 不做任何守卫，回退到中间态会让 `IsCompleted` 变 false，等于把「教学已完成」这个全局前提抽掉。教学期的限制逻辑（`MainStoryLine.IsPlayerInteractionRestricted`）会跟着重新生效。

## 主要成员

- `None = -1`：哨兵，教学尚未开始。
- `TravelToVillageStarted`：第一个任务（前往村庄）已开始。对应事件 [StoryModeEvents](../StoryModeEvents) 的 `OnTravelToVillageTutorialQuestStartedEvent`。
- `TalkToTheHeadmanStarted`：与村长对话。
- `RecruitAndPurchaseStarted`：征募与购买。
- `LocateAndRescueTravellerStarted`：定位并救出旅人。
- `FindHideoutStarted`：攻破藏身处。
- `Finalized`：教学收尾。等价于 `TutorialPhase.IsCompleted == true`。

枚举没有成员方法。与本枚举相关的行为都在别处：

- 写入：`TutorialPhase.SetTutorialQuestPhase(...)`
- 读：`TutorialPhase.TutorialQuestPhase`、`TutorialPhase.IsCompleted`
- 配套的跳过标记：`TutorialPhase.IsSkipped`
- 存档：枚举 id 2002

## 使用示例

```csharp
// 读法一：判「教学进行到哪一步」做 UI 分支
TutorialPhase tutorial = StoryModeManager.Current.MainStoryLine.TutorialPhase;
switch (tutorial.TutorialQuestPhase)
{
    case TutorialQuestPhase.None:
        ShowHint("先去下面的村庄");
        break;
    case TutorialQuestPhase.FindHideoutStarted:
        ShowHint("找到藏身处并打下来");
        break;
    case TutorialQuestPhase.Finalized:
        ShowHint(tutorial.IsSkipped ? "教学已跳过" : "教学已完成");
        break;
    default:
        ShowHint("继续当前教学任务");
        break;
}

// 读法二：推进游标（教学任务自己的 OnStartQuest 里这么写）
TutorialPhase.Instance.SetTutorialQuestPhase(TutorialQuestPhase.TalkToTheHeadmanStarted);

// 读法三：一次性收尾（跳过教学也是走这条）
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
line.CompleteTutorialPhase(true);   // isSkipped = true
Debug.Print(line.TutorialPhase.IsCompleted); // True
```

## 风险与边界

- **`None = -1`**：任何 `>= 0` 的守卫都会把初始状态判成「已开始」。
- **不区分完成与跳过**：`Finalized` 同时代表两种结局，必须配 `IsSkipped`。
- **可被回退**：`SetTutorialQuestPhase` 无守卫，写错代码能让已完成的教学回到进行中，并连带把 `IsPlayerInteractionRestricted` 打开。
- **枚举顺序即 int 值**：存档按值存，往中间插成员会让老存档的 `TutorialQuestPhase` 落到错误的成员上。追加只能加末尾。
- **跨阶段无关联**：这个枚举只在教学阶段内有意义，读档后如果 `TutorialPhase` 已被置为 `Finalized`，它的值就是死数据，不要再拿它驱动任何东西。

## 依赖关系

- [TutorialPhase](../TutorialPhase) — 持有本枚举的字段，并提供 `SetTutorialQuestPhase` / `IsCompleted` 语义
- [StoryModeEvents](../StoryModeEvents) — `OnTravelToVillageTutorialQuestStartedEvent` 与本枚举的第一个具体值对应
- [MainStoryLine](../MainStoryLine) — `IsPlayerInteractionRestricted` 依赖 `TutorialPhase.IsCompleted`，间接依赖本枚举
- [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) — 以枚举 id 2002 注册