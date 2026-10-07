---
title: "AchievementsCampaignBehavior"
description: "战役成就系统的事件桥：监听战役事件总线，把 37 项游戏内成就翻译为平台整数统计（AchievementManager），带停用开关、本地缓存镜像与任务级战斗统计桥。"
---
# AchievementsCampaignBehavior

**命名空间：** `StoryMode.GameComponents.CampaignBehaviors`  
**模块：** `StoryMode.GameComponents`  
**类型：** `public class AchievementsCampaignBehavior : CampaignBehaviorBase`  
**基类：** `CampaignBehaviorBase`  
**源文件：** `Modules.StoryMode/StoryMode/StoryMode.GameComponents.CampaignBehaviors/AchievementsCampaignBehavior.cs`（935 行）

## 概述

`AchievementsCampaignBehavior` 是 StoryMode 战役与平台成就系统（Steam / Xbox / PSN 成就）之间的**事件桥**。它在 `RegisterEvents`（`AchievementsCampaignBehavior.cs:172`）中订阅 32 个 `CampaignEvents` 与 2 个 `StoryModeEvents`，把「玩家完成了什么」翻译成对 `AchievementManager.SetStat` 的调用——每个成就对应一个字符串 ID（如 `CreatedKingdomCount`、`FarthestHeadShot`、`RadagosDefeatedInDuel`，共 37 个常量）和一个整数值。

它**自己不定义成就的解锁条件**，也不保存成就状态的真值：真值在平台侧，本类只在本地缓存一份镜像（`_cachedCreatedKingdomCount` 等字段）用于减少平台调用。它还带一个总开关 `_deactivateAchievements`：当游戏完整性被破坏（`DumpIntegrityCampaignBehavior` 判定）或平台服务断开时，`SetStatInternal`（`:928`）变成空操作，`DeactivateAchievements`（`:906`）会退订全部监听器。

mod 开发者通常**不需要手动注册或构造它**——战役行为管理器会自动挂载。你只会在三种场景下主动接触它：查询成就系统是否激活、在作弊 mod 里停用成就、或读取存档元数据里的 `AchievementsDisabled` 标记做诊断。

## 心智模型

把这个类想成**「战役事件 → 平台统计」的翻译层**，而不是成就系统本身。三个要点：

1. **事件驱动的条件检测。** 每个成就的「完成判定」都挂在一个战役事件回调里：`OnSiegeCompleted`（`:392`）检查攻城胜负、`OnTournamentFinish`（`:378`）检查锦标赛冠军、`OnQuestCompleted`（`:372`）检查主线结局。回调先验证「是不是玩家做的、条件是否满足」，再写统计。这意味着成就进度完全由游戏事件流推动，mod 无法直接「完成」一个成就，只能让对应事件以玩家名义发生。
2. **本地缓存是平台统计的镜像。** `CacheAndInitializeAchievementVariables`（`:274`）在游戏创建或读档后异步拉取 13 项统计与「进入过哪些定居点」的位集，存入 `_cached*` 字段。之后每次事件先比对缓存、只在数值增长时写平台。**缓存不是存档数据**——`SyncData`（`:167`）只序列化 `_deactivateAchievements` 一个布尔，读档后缓存从平台重新水合。
3. **总开关优先于一切写入。** 所有统计写入都经过 `SetStatInternal`（`:928`）的 `_deactivateAchievements` 闸门；`CheckAchievementSystemActivity`（`:411`）是对外唯一的活性查询。完整性被破坏、平台断连、或 mod 主动调用 `DeactivateAchievements` 都会翻转开关。停用状态下，本类退订除元数据收集外的全部监听器，行为完全静默。

另外注意内部类 `AchievementMissionLogic`（`:31`）：它把**任务内**的战斗事件（`OnAgentRemoved`、`OnScoreHit`）桥接成战役级统计（最远爆头距离、击杀数），由 `OnMissionStarted`（`:490`）在每次任务开始时注入 `Mission.Current`。这是本类唯一涉及战斗场景的部分，其余全部是战役层事件。

## 怎么用

### 怎么拿到

- **源树路径：** `Modules.StoryMode/StoryMode/StoryMode.GameComponents.CampaignBehaviors/AchievementsCampaignBehavior.cs`（935 行）
- **声明处：** `AchievementsCampaignBehavior.cs:29`（类声明）、`:31`（内部类）、`:172`（RegisterEvents）
- **运行时入口：** 通过行为管理器获取，不要自己 `new`：

```csharp
AchievementsCampaignBehavior achievements = Campaign.Current.CampaignBehaviorManager
    .GetBehavior<AchievementsCampaignBehavior>();
```

### 典型用法

- **在发放成就相关奖励前查询活性：** 成就未激活时（完整性被破坏或平台断连）不要发放成就奖励，否则玩家永远拿不到。
- **作弊 mod 里停用成就：** 调用 `DeactivateAchievements` 并给出原因文本，游戏会弹快速提示。
- **诊断存档：** `CollectMetadataEntries`（`:923`）会往每条存档元数据里写 `AchievementsDisabled=0/1`，mod 或玩家可据此判断该存档的成就是否处于停用态。
- **感知 Radagos 决斗成就：** 游戏在玩家赢得 Radagos 决斗后自己调用 `OnRadagosDuelWon`（`:536`）；mod 若要感知这个时机，应监听决斗相关战役事件，而不是抢在游戏之前调用它。

### 坑

- **不要直接写统计。** `SetStatInternal` 是 private，且绕过活性闸门；mod 想影响成就，应通过触发对应的战役事件间接实现。
- **缓存字段是私有的，且读档后重建。** 不要试图从存档里恢复 `_cached*` 计数——它们由 `CacheAndInitializeAchievementVariables` 从平台重新拉取。
- **`DeactivateAchievements` 默认永久生效。** 只有传 `temporarily: true` 才是临时停用（平台断连时用）；`SyncData` 只保存这个布尔，读档后若平台仍不可用会再次停用。
- **「进入过每个定居点」用位集压缩存储。** `OnSettlementEnter`（`:422`）把定居点按 StringId 排序后每 30 个压进一个 `int`，全部进入过才写 `EnteredEverySettlement`——这是全类最绕的一段逻辑，mod 无需关心。

## 关键成员

### AchievementMissionLogic（内部桥接类）

`private class AchievementMissionLogic : MissionLogic`（`:31`，构造函数 `:37`）

任务级事件桥。它持两个回调委托（`OnAgentRemovedAction`、`OnAgentHitAction`），把任务内事件转发给战役层的 `OnAgentRemoved`（`:506`）与 `OnAgentHit`（`:496`）。由 `OnMissionStarted`（`:490`）在每次任务开始时 `new` 出来并 `AddMissionBehavior` 到 `Mission.Current`——它随任务生灭，不进存档。

### SyncData

`public override void SyncData(IDataStore dataStore)`（`:167`）

存档钩子。只序列化 `_deactivateAchievements` 一个布尔。**注意：** 各成就计数不在这里保存，读档后由 `OnGameLoadFinished`（`:261`）从平台重新水合缓存。

### RegisterEvents

`public override void RegisterEvents()`（`:172`）

订阅 32 个战役事件与 2 个 StoryMode 事件（教程结束、旗帜碎片收集）。每个订阅对应一个成就条件的检测点，例如 `OnHideoutBattleCompletedEvent` → 清剿匪窟计数、`OnPlayerTradeProfitEvent` → 累计贸易利润、`DailyTickEvent` → 每日贡金与收入峰值。

### CheckAchievementSystemActivity

`public bool CheckAchievementSystemActivity(out TextObject reason)`（`:411`）

对外唯一的活性查询。判定链：`DumpIntegrityCampaignBehavior.IsGameIntegrityAchieved` 通过且 `_deactivateAchievements` 为 `false` 时返回 `true`；否则返回 `MBDebug.IsTestMode()`（测试模式下永远视为激活，方便调试）。`reason` 输出停用原因文本。

### OnRadagosDuelWon

`public void OnRadagosDuelWon()`（`:536`）

写入 `RadagosDefeatedInDuel = 1`。由游戏在玩家赢得 Radagos 决斗后调用；它只是 public 以便游戏侧调用，**mod 不应手动调用**。

### DeactivateAchievements

`public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)`（`:906`）

停用成就系统：置 `_deactivateAchievements`（`temporarily` 为 `true` 时只在本次会话有效）、退订除 `CollectMetadataEntries` 外的全部监听器、按 `showMessage` 弹快速提示（`reason` 为空时用默认文本 "Achievements are disabled!"）。

### SetStatInternal

`private void SetStatInternal(string statId, int value)`（`:928`）

全类唯一的统计写入点。`_deactivateAchievements` 为 `true` 时直接返回；否则调用 `AchievementManager.SetStat`。所有 `Progress*` / `Check*` 私有方法最终都经过这里。

### CacheAndInitializeAchievementVariables

`private async void CacheAndInitializeAchievementVariables()`（`:274`）

异步水合缓存：取 `butter` 物品对象（黄油统计用）、把全部要塞定居点按 StringId 降序排成 `_orderedSettlementList`、每 30 个一组分配位集数组，然后 `await AchievementManager.GetStats` 拉取 13 项统计与各组位集填入 `_cached*` 字段。平台返回 `null`（服务断开）时临时停用成就。

### OnMissionStarted / OnAgentHit / OnAgentRemoved

`OnMissionStarted`（`:490`）注入任务桥；`OnAgentHit`（`:496`）在远程武器命中头部且距离超过缓存时刷新 `FarthestHeadShot`；`OnAgentRemoved`（`:506`）在 `Agent.Main` 击杀人类单位时递增 `DefeatedTroopCount`。

### OnSettlementEnter / CheckEnteredEverySettlement

`OnSettlementEnter`（`:422`）用位集记录玩家进入过的要塞定居点；`CheckEnteredEverySettlement`（`:440`）在位集满时写入 `EnteredEverySettlement = 1`。

### CollectMetadataEntries

`private void CollectMetadataEntries(List<KeyValuePair<string, string>> list)`（`:923`）

向存档元数据写入 `AchievementsDisabled`（"0"/"1"）。这是 `DeactivateAchievements` 退订时**唯一保留**的监听器，确保停用标记能进存档。

## 真实示例

示例一：mod 在发放「成就奖励」前先确认成就系统处于激活态，避免玩家白拿奖励却解锁不了成就：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

public sealed class AchievementGatedRewardBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnGameLoadFinishedEvent.AddNonSerializedListener(this, OnGameLoadFinished);
    }

    private void OnGameLoadFinished()
    {
        AchievementsCampaignBehavior achievements = Campaign.Current.CampaignBehaviorManager
            .GetBehavior<AchievementsCampaignBehavior>();
        if (achievements == null) return;

        if (achievements.CheckAchievementSystemActivity(out TextObject reason))
        {
            // 成就系统在线：可以安全发放成就相关奖励
            GrantAchievementReward();
        }
        else
        {
            // 成就已停用（原因见 reason）：跳过奖励，避免玩家损失
        }
    }

    private void GrantAchievementReward()
    {
        // mod 自己的奖励逻辑
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

示例二：作弊 mod 在启用作弊时停用成就，并在提示中说明原因：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

public static class CheatToggle
{
    public static void EnableCheats()
    {
        AchievementsCampaignBehavior achievements = Campaign.Current.CampaignBehaviorManager
            .GetBehavior<AchievementsCampaignBehavior>();
        achievements?.DeactivateAchievements(
            new TextObject("Achievements are disabled because cheats are active."),
            showMessage: true);
    }
}
```

示例三：mod 想感知「玩家清剿匪窟」这类成就时机，可以监听对应的战役事件（与本类的判定条件保持一致）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public sealed class HideoutTracker : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnHideoutBattleCompletedEvent.AddNonSerializedListener(this, OnHideoutDone);
    }

    private void OnHideoutDone(BattleSideEnum winnerSide, HideoutEventComponent component,
        HideoutBattleEndState endState)
    {
        // 与 AchievementsCampaignBehavior 相同的判定：玩家方获胜即算清剿成功
        if (winnerSide == component.MapEvent.PlayerSide)
        {
            // mod 自己的处理，例如记录日志或触发自定义任务
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

## 参见

- [Achievement](../Achievement) — 成就定义数据类，描述单个成就的元数据
- [AchievementManager](../AchievementManager) — 平台成就系统入口，`SetStatInternal` 底层调用它的 `SetStat` / `GetStats`
- [DumpIntegrityCampaignBehavior](../DumpIntegrityCampaignBehavior) — 游戏完整性门禁，`CheckAchievementSystemActivity` 依赖它的判定
- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 所有战役行为的基类，定义 `RegisterEvents` / `SyncData` 生命周期
- [MissionLogic](../../mission-ext/MissionLogic) — 内部类 `AchievementMissionLogic` 的基类，任务级事件桥

## 导航

- [本区域目录](../)
- **父级：** [campaign API](../../)
- **同级：** [Achievement](../Achievement) · [AchievementManager](../AchievementManager) · [DumpIntegrityCampaignBehavior](../DumpIntegrityCampaignBehavior)
- **相关：** [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) · [MissionLogic](../../mission-ext/MissionLogic)
