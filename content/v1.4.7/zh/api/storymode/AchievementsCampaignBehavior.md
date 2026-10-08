---
title: "AchievementsCampaignBehavior"
description: "主线成就的收集器：订阅数十个战役事件，把玩家行为折算成 AchievementManager 统计值，并在游戏完整性被破坏或被 mod 影响时整体关闭成就系统。"
---
# AchievementsCampaignBehavior

**命名空间：** `StoryMode.GameComponents.CampaignBehaviors`
**模块：** `StoryMode`
**类型：** `public class AchievementsCampaignBehavior : CampaignBehaviorBase`
**基类：** `CampaignBehaviorBase`
**源文件：** `bannerlord-1.4.7/StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs`（声明见第 30 行）

## 概述

`AchievementsCampaignBehavior` 是主线（StoryMode）成就系统的唯一收集器。它在 `RegisterEvents()` 里订阅了三十余个战役事件——角色创建结束、工坊易主、商队创建、定居点易主、王国建立、英雄死亡、家族等级提升、藏身处清剿、技能成长、物品交易、竞技大会、攻城结束、地图事件结束、任务完成、建筑升级、锻造、家族换国、家族解散、贸易利润、每日结算、婚姻、王国决议、任务开始、进入定居点、新游戏初始化、读档完成、英雄创建、问题更新、统治家族变更、配置变更等——并把每个事件折算成一个 `AchievementManager` 统计值。它还内置了一个私有的 `AchievementMissionLogic`，在任务（mission）层监听 `OnAgentRemoved` 与 `OnScoreHit`，用于统计战斗中的击杀与命中。

它同时是成就系统的「总闸」：`CheckAchievementSystemActivity(out reason)` 判断当前存档是否允许统计成就，`DeactivateAchievements(...)` 则把闸门关上。

## 心智模型

把它想成成就系统的**事件转译层**：它不定义成就、不决定成就是否达成、也不弹成就提示，只负责把游戏里发生的动作翻译成一个个命名统计量（例如 `RadagosDefeatedInDuel`、`ReachedClanTierSix`、`SettlementSet0`），然后交给平台侧的 `AchievementManager`。真正的「达成条件」在平台成就定义里，本行为只提供输入。

它挂在 `CampaignBehaviorBase` 的两个钩子上：`RegisterEvents()` 一次性订阅全部监听器（其中大部分回调都以 `ProgressXxx` / `OnXxx` 命名，每个只做「把某个统计量加一或取较大值」这一件事）；`SyncData(IDataStore)` 只落盘一个布尔 `_deactivateAchievements`——因为统计量本身写在平台侧，不在存档里。它不负责：成就的 UI 展示、成就解锁判定、任务层之外的战斗结算，也不负责在游戏完整性受损时自动修复。所有写入都经过私有的 `SetStatInternal`，一旦 `_deactivateAchievements` 为真就静默丢弃。

## 怎么用

`StoryMode` 模块通过 `CampaignGameStarter.AddBehavior(...)` 把它挂上；需要实例时用 `Campaign.Current.GetCampaignBehavior<AchievementsCampaignBehavior>()`。mod 与它交互的正当理由基本只有两个：查询成就是否可用，以及在检测到破坏平衡的改动时主动关闭它。

- **坑 1：统计量不随存档走。** `SyncData` 只同步 `_deactivateAchievements`，其余统计全部写进平台侧的 `AchievementManager`；读档不会重算历史行为，所以 mod 在中途改变玩家状态也不会补记（`AchievementsCampaignBehavior.cs:33`）。
- **坑 2：关闭是不可逆的本会话行为。** `DeactivateAchievements` 会调用 `CampaignEventDispatcher.Instance.RemoveListeners(this)` 摘掉全部监听器，只把 `CollectMetadataEntries` 重新加回来，随后成就统计彻底停摆；`temporarily` 参数只影响 `_deactivateAchievements` 标志的写入方式（`AchievementsCampaignBehavior.cs:871`）。
- **坑 3：是否统计由游戏完整性决定。** `CheckAchievementSystemActivity` 会读取 `DumpIntegrityCampaignBehavior` 的完整性结果；只要完整性未达成（例如存档被修改核心数据的 mod 污染），它就返回 `false` 并通过 `reason` 给出 `TextObject` 说明，测试模式 `MBDebug.IsTestMode()` 下则强制为真（`AchievementsCampaignBehavior.cs:316`）。
- **坑 4：`OnRadagosDuelWon` 只写统计位。** 它做的事就是把 `RadagosDefeatedInDuel` 置 1，不启动/结束任何任务，也不做胜负判定；要判定决斗结果必须自己订阅战斗事件再调用它（`AchievementsCampaignBehavior.cs:451`）。
- **坑 5：停用后写入静默失败。** 所有统计都走 `SetStatInternal`，`_deactivateAchievements` 为真时直接返回、不抛异常；调试时不要把「没弹成就」误判成逻辑没跑到（`AchievementsCampaignBehavior.cs:39`）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `class AchievementsCampaignBehavior : CampaignBehaviorBase` | 类型声明：公开的战役行为，注册进 `CampaignBehaviorManager`；成就统计的事件汇聚点。 `AchievementsCampaignBehavior.cs:30` |
| `override void SyncData(IDataStore dataStore)` | 覆写基类钩子，只同步 `_deactivateAchievements` 这一个布尔；成就数值在平台侧，不进存档。 `AchievementsCampaignBehavior.cs:33` |
| `override void RegisterEvents()` | 覆写基类钩子，一次性订阅全部战役事件与 `StoryModeEvents.OnStoryModeTutorialEndedEvent`、`OnBannerPieceCollectedEvent`；每个回调只做一次统计写入，其中 `OnMissionStarted` 会挂上私有 `AchievementMissionLogic`。 `AchievementsCampaignBehavior.cs:39` |
| `public bool CheckAchievementSystemActivity(out TextObject reason)` | 查询成就是否处于活动状态：综合 `_deactivateAchievements`、`DumpIntegrityCampaignBehavior` 的完整性结果与 `MBDebug.IsTestMode()`；`reason` 输出禁用原因供 UI 显示。 `AchievementsCampaignBehavior.cs:316` |
| `public void OnRadagosDuelWon()` | 记录「在决斗中击败 Radagos」：写入统计 `RadagosDefeatedInDuel = 1`，不做任务推进。 `AchievementsCampaignBehavior.cs:451` |
| `public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)` | 关闭成就系统：写 `_deactivateAchievements`、`RemoveListeners(this)` 摘除全部监听器、仅补回 `CollectMetadataEntries`；`showMessage` 为真时用 `MBInformationManager` 弹出提示（默认文案「Achievements are disabled!」）。 `AchievementsCampaignBehavior.cs:871` |
| `AchievementMissionLogic(Action<Agent, Agent> onAgentRemoved, Action<Agent, WeaponComponentData, BoneBodyPartType, int> onAgentHitAction)` | 私有嵌套 `MissionLogic` 的构造函数，把两个统计回调注入任务层。 `AchievementsCampaignBehavior.cs:1073` |
| `override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | 任务层钩子：有人被移除时转发给注入的 `onAgentRemoved`，用于战斗击杀类成就。 `AchievementsCampaignBehavior.cs:1080` |
| `override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | 任务层钩子：命中结算时转发给注入的 `onAgentHitAction`，并带上受击部位与距离，用于远程/部位类成就。 `AchievementsCampaignBehavior.cs:1091` |

## 真实示例

在 mod 检测到破坏平衡的改动时主动关闭成就，同时读取禁用原因：

```csharp
using StoryMode.GameComponents.CampaignBehaviors;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

var achievements = Campaign.Current.GetCampaignBehavior<AchievementsCampaignBehavior>();
if (achievements != null && !achievements.CheckAchievementSystemActivity(out TextObject reason))
{
    // 游戏完整性未达成或成就已被停用：给出原因并确认关闭
    achievements.DeactivateAchievements(reason, showMessage: true, temporarily: false);
}
```

## 参见

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)——`RegisterEvents` / `SyncData` 钩子的契约。
- [CampaignGameStarter](../../campaign/CampaignGameStarter)——`AddBehavior` 的挂载入口。
- [CampaignEvents](../../campaign/CampaignEvents)——本行为订阅的绝大部分事件的定义处。
- [Mission](../../mission/Mission)——`AchievementMissionLogic` 所属的任务层宿主。

## 导航

- ↑ [storymode 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
