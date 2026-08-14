---
title: "QuestBase"
description: "战役任务系统的基类：创建、推进、完成和追踪自定义任务。"
---
# QuestBase

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class QuestBase : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/QuestBase.cs`

## 概述

`QuestBase` 是 Bannerlord 战役任务系统的**核心基类**。继承它并实现几个关键成员，就可以把自定义任务挂进游戏：它会显示在任务日志里，有截止期限、可选追踪、阶段性日志，并随存档自动保存。

主要生命周期：

1. 创建：在 `CampaignBehaviorBase` 或 `IssueBase` 中 `new MyQuest(...)`。
2. 启动：调用 `StartQuest()`，任务进入日志。
3. 推进：通过 `AddLog` / `AddDiscreteLog` 更新日志，用任务条件自行检查完成。
4. 完成：调用 `CompleteQuestWithSuccess()` / `Fail()` / `Cancel()` / `TimeOut()`。

## 心智模型

把 `QuestBase` 当作**“一个带有时限和日志的状态机”**：

- 任务本身必须继承 `QuestBase`。
- 每个任务实例都关联一个 `QuestGiver`（通常是 `Hero`）。
- 日志条目（`JournalLog`）是玩家看到的内容；阶段性目标用 `AddDiscreteLog` 显示进度条。
- 任务的真正逻辑大部分写在 `CampaignBehaviorBase` 的事件监听里，或直接覆盖 `OnDailyTick`?
- 任务状态默认会自动保存；需要持久化的字段标记 `[SaveableField]`。

## 核心抽象/虚成员

| 成员 | 说明 |
|------|------|
| `Title` （抽象） | 任务标题。 |
| `IsRemainingTimeHidden` （抽象） | 是否隐藏剩余时间。 |
| `QuestGiver` | 任务发布者。 |
| `QuestDueTime` | 截止时间。 |
| `RewardGold` / `RewardXP` | 奖励金币/经验。 |
| `IsOngoing` / `IsFinalized` | 是否进行中 / 已结束。 |
| `RelationshipChangeWithQuestGiver` | 完成后与发布者的关系变化。 |
| `OnFailed()` / `OnCanceled()` / `OnSucceeded()`（？） | 失败/取消/成功回调。 |
| `QuestPreconditions()` | 检查任务前置条件。 |

## 主要方法

### `public void StartQuest()`
将任务加入任务日志并启动。

```csharp
var quest = new MyRescueQuest(questGiver);
quest.StartQuest();
```

### `public void CompleteQuestWithSuccess()` / `CompleteQuestWithFail(TextObject cancelLog)` / `CompleteQuestWithTimeOut(TextObject timeOutLog)` / `CompleteQuestWithCancel(TextObject cancelLog)`
以不同状态结束任务。

```csharp
if (AllHostagesRescued())
{
    CompleteQuestWithSuccess();
}
else if (quest.QuestDueTime.IsPast)
{
    CompleteQuestWithTimeOut(new TextObject("The deadline has passed."));
}
```

### `public JournalLog AddLog(TextObject text, bool hideInformation = false)` / `AddDiscreteLog(...)` / `AddTwoWayContinuousLog(...)`
添加任务日志条目。

```csharp
AddDiscreteLog(
    new TextObject("Hostages rescued"),
    new TextObject("Rescue"),
    rescuedCount,
    totalHostages);
```

### `public void AddTrackedObject(ITrackableCampaignObject trackedObject)` / `RemoveTrackedObject(...)` / `IsTracked(...)`
在战役地图上高亮追踪某个对象。

```csharp
AddTrackedObject(targetSettlement);
```

### `public void AddGameMenu(...)` / `AddGameMenuOption(...)`
为任务动态添加大地图菜单项。

```csharp
AddGameMenuOption(
    "town",
    "my_quest_option",
    new TextObject("Ask about the bandits"),
    OnCondition,
    OnConsequence);
```

### `public void ChangeQuestDueTime(CampaignTime questDueTime)`
更改截止时间。

```csharp
ChangeQuestDueTime(CampaignTime.Now + CampaignTime.Days(3));
```

## 典型用法示例

```csharp
public class RescueHostageQuest : QuestBase
{
    [SaveableField(0)]
    private Hero _hostage;

    [SaveableField(1)]
    private int _rescuedCount;

    public override TextObject Title => new TextObject("Rescue the Hostage");

    public override bool IsRemainingTimeHidden => false;

    public RescueHostageQuest(Hero questGiver, Hero hostage)
        : base("rescue_hostage_quest", questGiver, CampaignTime.DaysFromNow(7))
    {
        _hostage = hostage;
    }

    protected override void OnStartQuest()
    {
        base.OnStartQuest();
        AddDiscreteLog(
            new TextObject("Find and rescue {HOSTAGE}"),
            new TextObject("Rescue"),
            0, 1,
            null,
            false);
    }

    protected override void OnFinalize()
    {
        if (_hostage.IsAlive && _hostage.CurrentSettlement != null)
        {
            CompleteQuestWithSuccess();
        }
        else
        {
            CompleteQuestWithFail(new TextObject("The hostage did not survive."));
        }
    }
}
```

> 实际事件触发（如进入据点、击败部队）通常在 `CampaignBehaviorBase.RegisterEvents()` 中订阅，然后调用任务实例方法。

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 的 `QuestBase` 结构基本不变，但部分回调签名可能有 `in`/`ref` 微调。
- v1.4.5 对自定义 `QuestTaskBase` 和任务追踪对象提供了更多内建支持。

## 参见

- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 创建和管理任务的常见挂钩
- [IssueBase](../IssueBase/) — 任务前置的“问题/委托”对象
- [Hero](../../campaign/Hero/) — 任务发布者与目标
- [Settlement](../../campaign/Settlement/) — 任务地点
- [MobileParty](../../campaign/MobileParty/) — 追踪部队相关目标
