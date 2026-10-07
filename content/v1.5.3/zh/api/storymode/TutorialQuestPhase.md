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

## 怎么用

### 怎么拿到它

`public class TutorialQuestPhase` 声明在 `bannerlord-1.5.3/StoryMode/StoryModePhases/TutorialQuestPhase.cs:6`，全文 23 行，**是一个纯枚举**，没有方法、没有字段。

它怎么进存档的：作为 `TutorialPhase` 的一个 `[SaveableField(1)]`（`StoryModePhases/TutorialPhase.cs:287`）按值存储，同时通过 `SaveableStoryModeTypeDefiner.DefineEnumTypes()` 的 `base.AddEnumDefinition(typeof(TutorialQuestPhase), 2002, null)`（`SaveableStoryModeTypeDefiner.cs:72`）登记枚举定义 id。两处必须一致。

注意 `AddEnumDefinition` 一共登记了**五个**枚举：同文件 `:71` 的 `MainStoryLineSide`（2001）、`:72` 的 `TutorialQuestPhase`（2002），以及三个各自独立的 `HideoutBattleEndState`（`:73`/`:74`/`:75` 分别给 `FindHideoutTutorialQuest` 686010、`IstianasBannerPieceQuest` 687010、`ArzagosBannerPieceQuest` 681010）。**同名不同类，必须靠 id 区分。**

**唯一创建者**：`TutorialPhase` 构造函数。读写都在 [TutorialPhase](../TutorialPhase) 的 `SetTutorialQuestPhase(TutorialQuestPhase phase)` 与派生属性 `IsCompleted`（判 `== Finalized`）。

消费方遍布模块：[StoryModeBanditSpawnCampaignBehavior](../StoryModeBanditSpawnCampaignBehavior)、[StoryModeIncidentModel](../StoryModeIncidentModel) 等一批模型读的是 `TutorialPhase.Instance.IsCompleted`，而不是直接比枚举值。**要问「教学到哪一步」，问 `TutorialPhase`；要问「教学完没完」，问 `IsCompleted`。**

### 典型用法

```csharp
// 进度条 UI：直接把枚举映射成显示文本
TutorialPhase tutorial = StoryModeManager.Current.MainStoryLine.TutorialPhase;
string label;
switch (tutorial.TutorialQuestPhase)
{
    case TutorialQuestPhase.None:                    label = "尚未开始"; break;
    case TutorialQuestPhase.TravelToVillageStarted:  label = "前往村庄"; break;
    case TutorialQuestPhase.TalkToTheHeadmanStarted: label = "与村长交谈"; break;
    case TutorialQuestPhase.RecruitAndPurchaseStarted: label = "征粮与采购"; break;
    case TutorialQuestPhase.LocateAndRescueTravellerStarted: label = "寻找旅行者"; break;
    case TutorialQuestPhase.FindHideoutStarted:      label = "攻破藏身处"; break;
    case TutorialQuestPhase.Finalized:               label = "已完成"; break;
    default:                                          label = "未知 " + (int)tutorial.TutorialQuestPhase; break;
}
Debug.Print(label + "，IsCompleted=" + tutorial.IsCompleted);

// 推进：走 TutorialPhase 的公开方法，不要自己改枚举
tutorial.SetTutorialQuestPhase(TutorialQuestPhase.Finalized);
```

### 最容易踩的坑

`None = -1`（`:9`）。写 `(int)phase > 0` 当作「已开始」会把刚教学完的状态算对、把初始状态也算对，但**你若拿它当数组下标或集合容量，`-1` 会直接越界或抛 `ArgumentOutOfRangeException`**。另外 `SetTutorialQuestPhase` 源码不带任何守卫，从 `Finalized` 回退到中间态是允许的——这会把 `IsCompleted` 变回 false，进而让一批模型（[StoryModeIncidentModel](../StoryModeIncidentModel)、[StoryModeBanditDensityModel](../StoryModeBanditDensityModel)）的「教学已完成」判断全部翻转，地图事件和藏身处会在玩家已经推进主线之后突然重新开放。

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