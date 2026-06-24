
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/QuestBase](/versions/QuestBase)
<!-- END BREADCRUMB -->
# QuestBase

**命名空间:** TaleWorlds.CampaignSystem  
**模块:** TaleWorlds.CampaignSystem  
**类型:** abstract class（继?

`MBObjectBase

`? 
**文件:** 

`bannerlord-1.3.15/TaleWorlds.CampaignSystem/QuestBase.cs

`

`QuestBase

` 是所有任务（quest）的基类。mod 通过继承它并实现 

`Title

`、`IsRemainingTimeHidden

` 与各生命周期方法来添加自定义任务?
## 概述

任务?

`QuestGiver

`（给任务的英雄）触发，有截止时间 

`QuestDueTime

`，包含任务步骤（

`TaskList

`）与日志（`JournalEntries

`）。用 

`StartQuest

` 启动，用 

`CompleteQuestWith*

` 系列方法按成?超时/失败/背叛/取消结束。可在任务期间添加游戏菜单（

`AddGameMenu

`）与追踪对象（`AddTrackedObject

`）?
## 心智模型

先把 `QuestBase` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 主要属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| QuestGiver \| Hero \| 给出任务的英?\|
\| QuestDueTime \| CampaignTime \| 截止时间（protected set?\|
\| Title \| TextObject \| 任务标题（abstract?\|
\| IsRemainingTimeHidden \| bool \| 是否隐藏剩余时间（abstract?\|
\| TaskList \| 

`MBReadOnlyList&lt;QuestTaskBase&gt;

` \| 任务步骤列表 \|
\| JournalEntries \| 

`MBReadOnlyList&lt;JournalLog&gt;

` \| 日志条目 \|
\| IsOngoing \| bool \| 是否进行?\|
\| IsFinalized \| bool \| 是否已结?\|
\| IsTrackEnabled \| bool \| 是否启用追踪 \|
\| RelationshipChangeWithQuestGiver \| int \| 完成时与给任务者的关系变化 \|

## 主要方法

`

`

`csharp
public void StartQuest();
public void CompleteQuestWithSuccess();
public void CompleteQuestWithTimeOut(TextObject timeOutLog = null);
public void CompleteQuestWithFail(TextObject cancelLog = null);
public void CompleteQuestWithBetrayal(TextObject betrayLog = null);
public void CompleteQuestWithCancel(TextObject cancelLog = null);

public JournalLog AddLog(TextObject text, bool hideInformation = false);
public JournalLog AddDiscreteLog(TextObject text, TextObject taskName, int currentProgress, int targetProgress, TextObject shortText = null, bool hideInformation = false);

public void AddTrackedObject(ITrackableCampaignObject trackedObject);
public void RemoveTrackedObject(ITrackableCampaignObject trackedObject);

public void AddGameMenu(string menuId, TextObject menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None);
public void AddGameMenuOption(string menuId, string optionId, TextObject optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool Isleave = false, int index = -1);

public void ChangeQuestDueTime(CampaignTime questDueTime);

public virtual int GetCurrentProgress();
public virtual int GetMaxProgress();
public virtual void OnFailed();
public virtual void OnCanceled();
public virtual bool QuestPreconditions();
`

`

`

任务结束时引擎会调用对应?

`OnFailed

`/

`OnCanceled

` 等虚方法，mod 可重写做清理?
## 使用示例

`

`

`csharp
public class MyQuest : QuestBase
{
    public override TextObject Title =&gt; new TextObject("{=myquest}My Custom Quest");
    public override bool IsRemainingTimeHidden =&gt; false;

    protected override void RegisterEvents()
    {
        // 注册战役事件回调
    }

    protected override void InitializeQuestOnGameLoad()
    {
        // 读档时恢复状?    }

    public void Start()
    {
        QuestDueTime = CampaignTime.Now + CampaignTime.DaysFromNow(7);
        AddLog(new TextObject("去找任务目标"));
        StartQuest();
    }

    public void OnObjectiveDone()
    {
        AddLog(new TextObject("目标完成"));
        CompleteQuestWithSuccess();
    }
}
`

`

`

## 参见

- [IssueBase](./IssueBase.md)
- [Hero](../campaign/Hero.md)
- [CampaignTime](./CampaignTime.md)
- [Campaign](./Campaign.md)
