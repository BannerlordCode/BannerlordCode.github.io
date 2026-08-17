---
title: "JournalLog"
description: "任务（QuestBase）与议题衍生任务（IssueQuest）的日志/进展条目：记录一条带时间戳的叙事文本、可选任务名与完成进度，由 QuestBase 的 AddLog 系列方法创建并登记，驱动任务面板与通知。"
---
# JournalLog

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class JournalLog`  
**Base:** 无（直接继承 `System.Object`）  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/JournalLog.cs`

## 一句话职责

它是任务与议题界面里的一条「日志/进展条目」：保存一条带创建时间（`LogTime`）的叙事文本（`LogText`）、可选的任务阶段名（`TaskName`）与完成进度（`CurrentProgress` / `Range`），并提供「是否已完成」「相对时间描述」等读取辅助，是 `QuestBase` 对外展示任务进度的数据单元。

## 概述

`JournalLog` 是一个**可序列化的纯数据记录类**（字段都带 `[SaveableField]`），本身不含业务逻辑。它不自己决定何时出现、也不直接刷新 UI——它的产生与登记完全由 `QuestBase` 的 `AddLog` / `AddDiscreteLog` / `AddTwoWayContinuousLog` 三个工厂方法负责：这些方法 `new` 出一条 `JournalLog`、把它加进任务的 `_journalEntries` 列表、并广播 `CampaignEventDispatcher.Instance.OnQuestLogAdded`，让任务面板和通知系统知道有新日志。

关于「议题（Issue）」：源码里 `IssueBase` **本身并不持有 `JournalLog`**。议题被玩家接受后会生成一个 `IssueQuest`（`QuestBase` 的子类），真正写日志的是这些 `IssueQuest` 的 `IssueQuestBehavior`——它们调用从 `QuestBase` 继承来的 `AddLog(...)`，所以日志实际挂在 `IssueQuest` 上，经 `IssueBase` 间接可见。

## 心智模型

### 它是什么

把 `JournalLog` 当成**「任务日志面板里的一行」**：一段带时间戳的叙事文本 +（可选的）进度条。它是 Campaign 存档对象，随任务一起被序列化；没有 `Alley` 那样的全局注册，生命周期完全跟随持有它的任务。

### 创建、登记与持有

1. 你**不要**自己 `new JournalLog(...)` 后手动塞进任务列表。`QuestBase.AddLog(text)` 等方法是唯一正规入口：它们用 `CampaignTime.Now` 打时间戳、`_journalEntries.Add(...)`、再 `CampaignEventDispatcher.Instance.OnQuestLogAdded(this, hideInformation)` 广播。
2. 任务通过只读属性 `JournalEntries`（`MBReadOnlyList<JournalLog>`）暴露已登记的全部日志，外界只读不写。
3. 日志的移除走 `protected RemoveLog(JournalLog)`，只能在 `QuestBase` 派生类内部调用。

### 与 Quest / Issue / Campaign 叙事的关系

- `QuestBase` 是 `JournalLog` 的直接容器；`IssueBase` 经其 `IssueQuest` 间接持有。
- 每加一条日志，`OnQuestLogAdded` 被广播：引擎的 `JournalLogsCampaignBehavior` 据此把未读的日志转成任务通知，UI 任务追踪面板也会刷新。自己绕过 `AddLog` 构造日志会让通知/面板不刷新。
- 它是 **Campaign 层存档数据**，不是 Mission / Agent 那种运行时短命对象。

## 如何获取 JournalLog

你不能 new 它来用，而是从任务拿到它：通过 `QuestBase.AddLog*` 的返回值，或遍历 `QuestBase.JournalEntries`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

QuestBase quest = /* 当前激活的任务或 IssueQuest */;
JournalLog entry = quest.AddLog(new TextObject("{=someid}你抵达了村庄。"));
foreach (JournalLog log in quest.JournalEntries)
{
    TextObject when = log.GetTimeText();   // “今天” / “昨天” / “N 天前”
}
```

## 何时用 / 何时不要用

**用它：**
- 在自定义 `QuestBase` / `IssueQuest` 行为里，调用 `AddLog` / `AddDiscreteLog` / `AddTwoWayContinuousLog` 追加任务日志。
- 读取已有条目：用 `JournalEntries` 遍历，用 `HasBeenCompleted()` 判断进度类日志是否完成，用 `GetTimeText()` 显示相对时间。
- 推进进度类日志：用 `UpdateCurrentProgress(int)` 更新 `CurrentProgress`（通常由 `QuestBase.UpdateQuestTaskStage` 在阶段推进时调用）。

**别用它：**
- 不要自己 `new JournalLog(...)` 后手动加进列表——会绕过 `OnQuestLogAdded` 广播，任务面板与通知不刷新。始终走 `AddLog*`。
- 不要在任务已结束（`FinalizeQuest` 之后）或尚未开始（`StartQuest` 之前）的阶段添加日志，否则日志会挂在无效任务上。
- 不要把 `LogText` 当成普通字符串——它是 `TextObject`，存的是本地化 id，构造时必须用有效的 `{=id}` 文本。

## 依赖图

- 上游：[QuestBase](../QuestBase) 持有 `_journalEntries` 列表，并提供 `AddLog` / `AddDiscreteLog` / `AddTwoWayContinuousLog` / `RemoveLog` 与只读 `JournalEntries`；[IssueBase](../IssueBase) 经其 `IssueQuest`（`QuestBase` 子类）间接持有日志。
- 输入来源：具体任务 / 议题行为（如小巷、村庄议题的 `IssueQuestBehavior`）调用 `AddLog` 时传入的 `TextObject` 常引用 [Hero](../Hero) 名、`Alley` 等实体。
- 下游：[Campaign](../Campaign) 的 `CampaignEventDispatcher.OnQuestLogAdded` 广播把新日志推给 `JournalLogsCampaignBehavior`（本系列未单独成页），后者负责未读日志转通知；任务的 `LogType` 决定这条日志是普通文本、离散进度还是双向连续进度。
- 关联类型：[LogType](../LogType)（`None` / `Text` / `Discreate` / `TwoWayContinuous`）。

## 风险

- **自己 new 绕过广播：** 手动构造 `JournalLog` 并加入集合不会触发 `OnQuestLogAdded`，任务追踪面板与通知都不会更新。任何「加日志」都应调用 `QuestBase.AddLog*`。
- **坏档 / 本地化缺失：** `LogText` 与 `TaskName` 是 `TextObject`，存档保存的是本地化 key。如果字符串表里没有对应 `{=id}`，读档后这一行会显示空或原始 key。构造时务必使用有效的本地化文本。
- **进度语义陷阱：** `HasBeenCompleted()` 只在 `CurrentProgress >= Range` 时为真。普通文本日志 `Range` 默认为 `0`，因此 `HasBeenCompleted()` **恒为 true**；只有 `AddDiscreteLog` / `AddTwoWayContinuousLog` 设置了 `range` 后，它才有「进度是否完成」的意义。
- **错误阶段添加：** 任务 `FinalizeQuest` 之后或 `StartQuest` 之前调用 `AddLog`，日志会挂在已结束或未初始化的任务上，可能干扰任务结算与通知。务必在任务激活期内添加。
- **`RemoveLog` 是 protected：** 只能在 `QuestBase` 派生类内部调用；外部行为若要移除某条日志，应通过任务自身的方法或自行管理引用，不要试图从 `JournalEntries` 外部删除。

## 成员说明

### 构造与只读字段

#### `public JournalLog(CampaignTime logTime, TextObject logText, TextObject taskName = null, int currentProgress = 0, int range = 0, LogType type = LogType.Text)`
由 `QuestBase.AddLog*` 内部调用，一般不直接使用。`logTime` 通常是 `CampaignTime.Now`；`taskName` / `currentProgress` / `range` / `type` 只在离散或连续进度日志时有意义。

#### `public readonly CampaignTime LogTime`
日志创建时间，记录它被 `AddLog` 加入的那一刻（`CampaignTime.Now`）。用于 `GetTimeText()` 的相对时间计算。

#### `public readonly TextObject LogText`
日志正文叙事文本。这是任务面板里显示的那句话，必须是带 `{=id}` 的 `TextObject`。

#### `public readonly TextObject TaskName`
可选的任务阶段名（离散 / 连续进度日志使用），用于 UI 上标注当前在做的子目标。普通文本日志为 `null`。

#### `public readonly int Range`
完成该日志所需的总进度。普通文本日志为 `0`；离散 / 连续进度日志由 `AddDiscreteLog` / `AddTwoWayContinuousLog` 的 `targetProgress` / `range` 参数设置。

#### `public readonly LogType Type`
日志类型：`None` / `Text`（默认）/ `Discreate`（离散进度）/ `TwoWayContinuous`（双向连续进度）。由构造时的 `type` 决定。

### 进度与辅助方法

#### `public int CurrentProgress { get; private set; }`
当前进度值，初值由 `AddDiscreteLog` / `AddTwoWayContinuousLog` 的 `currentProgress` 给定，之后用 `UpdateCurrentProgress` 修改。`private set` 意味着外部只能通过 `UpdateCurrentProgress` 改它。

#### `public void UpdateCurrentProgress(int progress)`
设置 `CurrentProgress`。`QuestBase.UpdateQuestTaskStage` 在推进任务阶段时会调用它来刷新进度类日志的当前值；普通文本日志不需要调用。

#### `public bool HasBeenCompleted()`
返回 `CurrentProgress >= Range`。对普通文本日志（`Range == 0`）恒为 `true`；对设置了 `range` 的进度日志，才表示「进度是否已达标」。

#### `public TextObject GetTimeText()`
根据 `LogTime` 与当前时间返回相对描述：当天返回「今天」、差 1 天返回「昨天」、其余返回「N 天前」（`str_DAY_days_ago`，`DAY` 为天数）。任务面板用它显示这条日志的时间。

## 真实调用示例

在自定义 `QuestBase` 派生类（议题的 `IssueQuest` 也是 `QuestBase` 子类）里追加日志并读取进度。`AddLog` 返回新创建的 `JournalLog`，并且已经广播了 `OnQuestLogAdded`；这里同时展示如何从 `AlleyModel` 取数值写进日志文本：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

public class MyAlleyQuest : QuestBase
{
    private void OnAlleyIncomeCollected(Alley alley)
    {
        int income = Campaign.Current.Models.AlleyModel.GetDailyIncomeOfAlley(alley);
        TextObject log = new TextObject("{=mylog}今日小巷带来 {INCOME} 第纳尔的收入。");
        log.SetTextVariable("INCOME", income);

        // QuestBase.AddLog 创建并登记一条 JournalLog，同时广播 OnQuestLogAdded
        JournalLog entry = AddLog(log);

        // 普通文本日志 Range=0，HasBeenCompleted 恒为 true；
        // 离散/连续进度日志才需要判断 progress 是否达到 range
        if (entry.HasBeenCompleted())
        {
            TextObject when = entry.GetTimeText();   // “今天” / “昨天” / “N 天前”
        }
    }
}
```

要读取一条已存在的进度类日志并推进它，用 `AddDiscreteLog` 拿到的返回值在阶段回调里 `UpdateCurrentProgress`：

```csharp
JournalLog discrete = AddDiscreteLog(
    new TextObject("{=goal}护送商队抵达目的地。"),
    new TextObject("{=stage}护送中"),
    currentProgress: 0,
    targetProgress: 3);

// 阶段推进时
discrete.UpdateCurrentProgress(1);
if (discrete.HasBeenCompleted())
{
    // 进度达标，进入下一阶段
}
```

## 导航

- ↑ [QuestBase](../QuestBase) — 持有 `_journalEntries` 并提供 `AddLog*` / `JournalEntries` 的容器
- ↔ 相关：[IssueBase](../IssueBase)（经 `IssueQuest` 间接持有日志）· [LogType](../LogType)（日志类型枚举）
- 关联：[Campaign](../Campaign)（`OnQuestLogAdded` 广播入口）· [Hero](../Hero)（日志文本常引用英雄）· [Alley](../Alley)（示例中的日志来源实体）
