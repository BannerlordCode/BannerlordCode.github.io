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