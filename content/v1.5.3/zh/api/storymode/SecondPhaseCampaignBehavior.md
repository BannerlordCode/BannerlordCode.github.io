---
title: "SecondPhaseCampaignBehavior"
description: "阴谋团阶段的行为驱动：造出阴谋氏族、给新王国宣战、按节奏刷出阴谋任务，并清掉读档残留的孤儿商队。"
---
# SecondPhaseCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class SecondPhaseCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/SecondPhaseCampaignBehavior.cs`

## 概述

主线第一阶段（集结帝国 / 削弱帝国）完成后，这个行为接手第二阶段——「帝国阴谋团」剧情的全部编排。它做五件事：早期加载时创建阴谋氏族；玩家接任/建立王国后立刻向新王国宣战；任务链推进到 `AssembleEmpireQuest` 或 `WeakenEmpireQuest` 时标记第一阶段完成；每天推进 10 天后启动一条 `ConspiracyProgressQuest`；每周按强度与冷却判定是否刷出下一条阴谋任务。读档时它还会清理所有没有对应任务的孤儿「Conspiracy Caravan」。

## 心智模型

**注册是有条件的**：`StoryModeSubModule.AddBehaviors` 里

```
if (!MainStoryLine.IsSecondPhaseCompleted)
    campaignGameStarter.AddBehavior(new SecondPhaseCampaignBehavior());
```

读档时这个判断重新执行。第二阶段已完成 → 行为不存在。

**七个订阅**：

| 事件 | 处理 |
|---|---|
| `WeeklyTickEvent` | `WeeklyTick` — 按节奏刷阴谋任务 |
| `OnQuestStartedEvent` | `OnQuestStarted` — 第一阶段完成标记 |
| `DailyTickEvent` | `DailyTick` — 10 天后启动进度任务 |
| `OnSessionLaunchedEvent` | `OnSessionLaunched` — 转发给 `SecondPhase.Instance.OnSessionLaunched()` |
| `OnGameLoadedEvent` | `OnGameLoaded` — 清理孤儿商队 |
| `OnGameEarlyLoadedEvent` | `OnGameEarlyLoaded` — 早期创建阴谋氏族 |
| `KingdomCreatedEvent` | `OnKingdomCreated` — 对新王国宣战 |

外加 `StoryModeEvents.OnConspiracyActivatedEvent` → `OnConspiracyActivated`，后者直接 `CampaignEventDispatcher.Instance.RemoveListeners(this)`——**阴谋团一旦激活，这个行为彻底下线**。这是本层最重要的「自终止」设计。

**三个存档字段**：`SyncData` 同步 `_conspiracyQuestTriggerDayCounter`（`int`）与 `_isConspiracySetUpStarted`（`bool`）。这是**读档安全的**：进度不会因为读档而重置。

**周刷任务的判定式**（`WeeklyTick`）四个条件全满足才刷：

```
_isConspiracySetUpStarted
&& MainStoryLine.ThirdPhase == null
&& SecondPhase.Instance.ConspiracyStrength < 2000f
&& SecondPhase.Instance.LastConspiracyQuestCreationTime.ElapsedDaysUntilNow >= num2
&& !IsThereActiveConspiracyQuest()
```

其中 `num2 = 22 + MBRandom.RandomIntWithSeed((uint)(instance != null ? instance.LastConspiracyQuestCreationTime.ToMilliseconds : 53.0), 2000U) % 8`，即 22 到 29 天之间的一个**由上次任务时间戳作为种子**决定的抖动。注意这里用了一个条件表达式绕过 null：`instance` 为 null 时用字面量 `53.0`。

**宣战规则**（`OnKingdomCreated`）：只有当 `IsFirstPhaseCompleted && !IsSecondPhaseCompleted && (IsOnImperialQuestLine == StoryModeData.IsKingdomImperial(createdKingdom))` 时才 `DeclareWarAction.ApplyByDefault(ConspiracyClan, createdKingdom)`。**玩家选帝国线就向帝国宣战，选蛮族线就向蛮族宣战**——用布尔相等判断方向，不是硬编码。

**孤儿商队清理**（`OnGameLoaded`）：遍历 `Campaign.Current.CustomParties`，凡是名字 `HasSameValue(TextObject "{=eVzg5Mtl}Conspiracy Caravan")` 且没有未完成的 `DisruptSupplyLinesConspiracyQuest` 引用它的，一律 `DestroyPartyAction.Apply(null, mobileParty)`。**用本地化文本的字符串相等匹配队伍名**——这是脆弱点：换语言、改文本 id 都会让清理失效。

**常见误用与坑**

- **`OnConspiracyActivated` 之后行为完全失效。** 想在阴谋团激活后继续做事，必须另写一个无条件注册的行为。
- **`WeeklyTick` 里 `SecondPhase.Instance` 有两次无判空解引用**（`instance != null` 判过一次，后面又直接用）。`SecondPhase` 未创建时 NRE。
- **队伍名匹配是本地化文本比较**。`HasSameValue` 比的是最终字符串，多语言环境下只要故事语言不是英文就可能匹配失败——实际上 `TextObject` 会按当前语言解析，通常没问题，但改文本即失效。
- **`DailyTick` 的 10 天计数是硬编码**且 `_conspiracyQuestTriggerDayCounter` 进存档。读档后从存档值继续，不会重跑。
- **`OnGameLoaded` 遍历的是 `CustomParties`**，只覆盖自定义队伍。常规强盗队不在此列。

## 怎么用

### 怎么拿到它

`public class SecondPhaseCampaignBehavior : CampaignBehaviorBase` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/SecondPhaseCampaignBehavior.cs:15`，全文 158 行。

**注册是条件式的**：`campaignGameStarter.AddBehavior(new SecondPhaseCampaignBehavior())`（`StoryModeSubModule.cs:72`）包在 `if (!MainStoryLine.IsCompleted)`（`StoryModeSubModule.cs:60`）与 `if (!MainStoryLine.IsSecondPhaseCompleted)`（`:70`）里。第二阶段完成后不再注册。

`RegisterEvents()`（`:25`）挂**八条**：七条 `CampaignEvents.*`（`WeeklyTickEvent` `:27`、`OnQuestStartedEvent` `:28`、`DailyTickEvent` `:29`、`OnSessionLaunchedEvent` `:30`、`OnGameLoadedEvent` `:31`、`OnGameEarlyLoadedEvent` `:32`、`KingdomCreatedEvent` `:33`）加一条 `StoryModeEvents.OnConspiracyActivatedEvent`（`:34`）。

**主循环是周 tick**。`WeeklyTick()`（`:45`）取出 `SecondPhase instance = SecondPhase.Instance;`（`:48`），然后在一串条件下调 `SecondPhase.Instance.CreateNextConspiracyQuest();`（`:52`）——条件涉及 `_isConspiracySetUpStarted`、`MainStoryLine.ThirdPhase == null`、`ConspiracyStrength < 2000f`、`LastConspiracyQuestCreationTime`。

`DailyTick()`（`:67`）负责进度条任务：在某个计数条件下 `new ConspiracyProgressQuest().StartQuest();`（`:74`）。

`OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`（`:115`）里有一句自愈：`if (SecondPhase.Instance != null && SecondPhase.Instance.ConspiracyClan == null) SecondPhase.Instance.CreateConspiracyClan();`（`:117`→`:119`）——**读档后阴谋氏族丢失就重建**。

`OnConspiracyActivated()`（`:133`）配合 `IsThereActiveConspiracyQuest()`（`:139`）做收尾判断。

存档两个计数器：`_conspiracyQuestTriggerDayCounter`（`:152`）与 `_isConspiracySetUpStarted`（`:155`）。

### 典型用法

```csharp
// 运行期读；第二阶段完成后为 null
SecondPhaseCampaignBehavior sp =
    Campaign.Current.GetCampaignBehavior<SecondPhaseCampaignBehavior>();
SecondPhase second = StoryModeManager.Current.MainStoryLine.SecondPhase;

if (sp != null && second != null)
{
    Debug.Print("阴谋强度=" + second.ConspiracyStrength + "/" + SecondPhase.MaxConspiracyStrength);
    Debug.Print("上次出任务=" + second.LastConspiracyQuestCreationTime);

    // 手动推进一次（等价于 WeeklyTick 内部做的事）
    // second.CreateNextConspiracyQuest();

    // 读档自愈路径：ConspiracyClan 为 null 时引擎会重建
    Debug.Print("阴谋氏族=" + (second.ConspiracyClan?.Name.ToString() ?? "null，读档后将重建"));
}

// 三类阴谋任务只有三种，且不会连续重复
foreach (QuestBase q in Campaign.Current.QuestManager.Quests)
{
    if (!q.IsFinalized && q.GetType().Name.Contains("ConspiracyQuest"))
    {
        Debug.Print("阴谋任务：" + q.QuestId);
    }
}
```

### 最容易踩的坑

`OnGameEarlyLoaded`（`:115`）里的 `SecondPhase.Instance.CreateConspiracyClan();`（`:119`）是一条**读档自愈分支**，它存在的唯一前提是 `ConspiracyClan` 会变成 null。而 `ConspiracyClan` 带 `[SaveableProperty(6)]`（`SecondPhase.cs:91`）、存档里是完整对象引用——正常读档不该丢。真正会触发这条分支的是**旧存档升级或存档损坏**：此时 `SecondPhase` 存在但 `ConspiracyClan` 为 null，于是重建一个。而 `CreateConspiracyClan`（`SecondPhase.cs:189`）会 `DeclareWarAction.ApplyByQuest` 向所有敌对王国宣战（`:209`）——**在读档瞬间重跑一遍宣战**。若旧存档里玩家已经和某些王国打过一轮，这次重建会再宣一次。

## 主要成员

- `public SecondPhaseCampaignBehavior()`
  构造函数把 `_conspiracyQuestTriggerDayCounter` 设为 0、`_isConspiracySetUpStarted` 设为 false。**注意 `SyncData` 之后会覆盖它们**，构造函数只是给未存档的状态一个初值。
- `public override void RegisterEvents()`
  订阅七个战役事件 + 一个 StoryMode 事件。
- `public override void SyncData(IDataStore dataStore)`
  同步 `_conspiracyQuestTriggerDayCounter`（int）与 `_isConspiracySetUpStarted`（bool）。
- 私有 `OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`
  `SecondPhase.Instance` 存在但 `ConspiracyClan == null` 时调 `CreateConspiracyClan()`。
- 私有 `OnKingdomCreated(Kingdom createdKingdom)`
  按玩家所选阵营一侧自动宣战。
- 私有 `OnQuestStarted(QuestBase quest)`
  任务类型是 `AssembleEmpireQuestBehavior.AssembleEmpireQuest` 或 `WeakenEmpireQuestBehavior.WeakenEmpireQuest` 时，调 `MainStoryLine.CompleteFirstPhase()` 并置 `_isConspiracySetUpStarted = true`。
- 私有 `DailyTick()` / `WeeklyTick()` / `IsThereActiveConspiracyQuest()`
  进度任务启动、阴谋任务刷出、活跃任务判重（用 `questBase.GetType().BaseType == typeof(ConspiracyQuestBase)`）。
- 私有 `OnGameLoaded(CampaignGameStarter campaignGameStarter)`
  孤儿商队清理。
- 私有 `OnConspiracyActivated()`
  `CampaignEventDispatcher.Instance.RemoveListeners(this)`，自终止。

## 使用示例

```csharp
// 场景：mod 想把阴谋任务的刷新间隔缩短用于测试，
// 且要能通过 GetCampaignBehavior 拿到实例改设置
public class ConspiracyTuningBehavior : CampaignBehaviorBase
{
    private SecondPhaseCampaignBehavior _storyMode;

    public override void RegisterEvents()
    {
        CampaignEvents.OnGameEarlyLoadedEvent.AddNonSerializedListener(this, OnEarlyLoaded);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnEarlyLoaded(CampaignGameStarter starter)
    {
        // 条件注册意味着这里可能是 null，必须判空
        _storyMode = Campaign.Current.GetCampaignBehavior<SecondPhaseCampaignBehavior>();
        if (_storyMode == null)
        {
            Debug.Print("second phase already completed, conspiracy behavior absent");
            return;
        }
        SecondPhase phase = SecondPhase.Instance;
        if (phase != null)
        {
            Debug.Print("conspiracy clan: " + (phase.ConspiracyClan != null
                ? phase.ConspiracyClan.Name.ToString() : "<null>"));
        }
    }
}
```

## 风险与边界

- **有存档序列化，但字段极少**：只有两个字段。这两个字段足够让「进度已推进」这个事实在读档后保持——如果你覆写时加了更多字段**却没写进 `SyncData`**，读档后会退回默认值，造成「任务刷了又刷」或「进度永远停在第一天」。
- **条件注册的空窗**：第二阶段已完成时行为不存在。任何 `GetCampaignBehavior<SecondPhaseCampaignBehavior>()` 的调用都必须判空，包括 mod 自己的代码。
- **`RemoveListeners(this)` 是不可逆的**：阴谋团激活后本行为在本战役内永久静默。跨读档会重建并重新订阅（除非存档里的第二阶段已标完成）。
- **依赖 `StoryMode.Quests.SecondPhase` 命名空间下的具体任务类型**（`ConspiracyQuestBase`、`DisruptSupplyLinesConspiracyQuest`、`AssembleEmpireQuestBehavior`、`WeakenEmpireQuestBehavior`）。裁剪主线的 mod 无法编译本行为。
- **`OnKingdomCreated` 只在 `KingdomCreatedEvent` 那一刻判定**。用其它方式创建王国（直接 new）不会触发宣战。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类与 `SyncData` 存档通道
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()`，也是 `GetCampaignBehavior<T>()` 的查询目标
- [CampaignEvents](../../campaign/CampaignEvents) — 七个订阅事件的来源
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 注册入口
- [ThirdPhaseCampaignBehavior](../ThirdPhaseCampaignBehavior) — 下一阶段的行为驱动，与本行为的 `ThirdPhase == null` 判定直接相关
- [MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior) — 主线角色与迁移的状态守卫
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖