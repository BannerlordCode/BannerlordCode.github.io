---
title: "MainStoryLine"
description: "主线状态机：把教学、第一、第二、第三阶段串成一条单向推进的链，并记录玩家选了帝国还是反帝国。"
---
# MainStoryLine

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class MainStoryLine`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/MainStoryLine.cs`

## 概述

`MainStoryLine` 是整个主线剧本的**阶段状态机加阵营记录器**。它自己不写一行剧情文本，只持有四个阶段对象（[TutorialPhase](../TutorialPhase)、[FirstPhase](../FirstPhase)、[SecondPhase](../SecondPhase)、[ThirdPhase](../ThirdPhase)）以及「玩家最终站在哪一边」这个决定。阶段是**单向链式创建**的：构造函数只建 `TutorialPhase`，之后每一次 `CompleteXxxPhase()` 才 `new` 出下一个阶段对象。所以「阶段是否完成」这件事没有布尔字段可读，而是用「下一个阶段对象是否为 null」来推断——`IsFirstPhaseCompleted` 就是 `SecondPhase != null`。

## 心智模型

它的实例由 [StoryModeManager](../StoryModeManager) 构造函数创建，随主线一起存档。四个阶段字段各带独立的 `[SaveableProperty]`（2/3/4/5），另外 `MainStoryLineSide` 和两个导师聚落用 `[SaveableField]`（1/6/7），说明这些字段在历史版本间经历过增补——**存档兼容性由 `SaveableStoryModeTypeDefiner` 里的 id 3 保证，不要重排**。

阶段推进的调用顺序（全部是单向、不可逆的）：

1. 构造函数：`MainStoryLineSide = None`，`TutorialPhase = new TutorialPhase()`，`_tutorialScores` 建空表，`FamilyRescued = false`。
2. `FirstPhaseCampaignBehavior` 在新游戏流程尾巴上调 `SetMentorSettlements(帝国导师城, 反帝国导师城)`，为后续遭遇预留房子。
3. 玩家完成/跳过教学 → `CompleteTutorialPhase(bool isSkipped)`：调 `TutorialPhase.CompleteTutorial` → `FirstPhase = new FirstPhase()` → 广播 `OnStoryModeTutorialEnded` → 白送第一块旗子 → **把 `TutorialPhaseCampaignBehavior` 从 behavior manager 移除**。
4. 三块旗子集齐 → `CompleteFirstPhase()`：`SecondPhase = new SecondPhase()`，移除 `FirstPhaseCampaignBehavior`。
5. 阴谋强度涨满 → `CompleteSecondPhase()`：`ThirdPhase = new ThirdPhase()`，广播 `OnConspiracyActivated`，移除 `SecondPhaseCampaignBehavior`。
6. 打败阴谋主任务 → `ThirdPhase.CompleteThirdPhase(...)` 自己移除 `ThirdPhaseCampaignBehavior`。

**常见误用与坑**

- **阶段对象 null 不是异常状态**。教学未结束前 `FirstPhase` 就是 null。如果你写 `line.SecondPhase.ConspiracyStrength` 而教学还没打完，直接 NRE。判断必须先判 null 或用 `IsFirstPhaseCompleted` / `IsSecondPhaseCompleted`。
- **`SetStoryLineSide` 是单向的**。它顺手做了三件不可逆的事：记录 `PlayerSupportedKingdom = Clan.PlayerClan.Kingdom`、广播事件、把两位导师 `DisableHeroAction.Apply` 永久禁掉。再调一次不会报错，但会重复禁导师并覆盖支持的王国。
- **`IsCompleted` 每次访问都重新走一遍 `StoryModeManager.Current`**（`Current.MainStoryLine.ThirdPhase != null && ... .IsCompleted`），它在 `ThirdPhase == null` 时短路，安全；但如果你在 `StoryModeManager.Current == null` 的时刻问它，会 NRE。
- **`IsPlayerInteractionRestricted` 是「教程没完 且 还没选边」**。选边之后立刻变 false。如果 mod 让玩家提前选边/tutorial 被跳过，限制语义会和你预期不同。
- `GetTutorialScores()` 返回的是**副本**，改它不会写回；写回必须走 `SetTutorialScores`。

## 主要成员

- `TutorialPhase TutorialPhase { get; private set; }`：`[SaveableProperty(2)]`。构造函数就存在，永不为 null。
- `FirstPhase / SecondPhase / ThirdPhase`：`[SaveableProperty(3/4/5)]`。**未推进到该阶段时为 null**，判空是必须动作。
- `Kingdom PlayerSupportedKingdom { get; private set; }`：`[SaveableProperty(8)]`，`SetStoryLineSide` 时快照玩家当时的王国，之后改归属不会同步。
- `MainStoryLineSide MainStoryLineSide`：`[SaveableField(1)]` 公有字段（不是属性）。用 `IsOnImperialQuestLine` / `IsOnAntiImperialQuestLine` 读更安全，两者把四个具体值归成两派。
- `Settlement ImperialMentorSettlement` / `AntiImperialMentorSettlement`：`[SaveableField(6/7)]`，由 `SetMentorSettlements` 一次性写入。
- `bool FamilyRescued`：`[SaveableField(10)]`，由 `RescueFamilyQuestBehavior` 维护。
- `bool IsCompleted`：第三阶段存在且完成。**唯一**判定「主线打完」的方式。
- `bool IsFirstPhaseCompleted` / `IsSecondPhaseCompleted`：即 `SecondPhase != null` / `ThirdPhase != null`。写 `if (line.IsFirstPhaseCompleted)` 比自己判 null 更耐后续版本改动。
- `bool IsPlayerInteractionRestricted`：教程未完成且未选边时为 true。被 `StoryModeBanditDensityModel`、`StoryModeEncounterGameMenuModel`、`StoryModePermissionsSystem` 等读取。
- `ItemObject DragonBanner { get; private set; }`：会话启动时从 `ObjectManager` 取 `dragon_banner`，**不在存档里**，读档后要等 `OnSessionLaunched` 才有值。
- `void SetStoryLineSide(MainStoryLineSide side)`：选择阵营的唯一入口。
- `void SetMentorSettlements(Settlement, Settlement)`：预留导师城。
- `void CompleteTutorialPhase(bool isSkipped)` / `CompleteFirstPhase()` / `CompleteSecondPhase()`：三个阶段推进器，各自负责 new 下一阶段 + 移除对应 behavior。
- `void CancelSecondAndThirdPhase()`：撤销第二/第三阶段的 behavior（用于剧情回退场景），不动阶段对象本身。
- `void OnSessionLaunched()`：缓存 `DragonBanner`。
- `void SetTutorialScores(Dictionary<string,float>)` / `Dictionary<string,float> GetTutorialScores()`：教学评分的写入/读取，写入是深拷贝。
- 常量：`MainStoryLineDialogOptionPriority = 150`、`DragonBannerItemStringId` 及 `dragon_banner_center` / `dragon_banner_dragonhead` / `dragon_banner_handle` 三个部件 id。

## 使用示例

```csharp
// 1) 读状态：教学是否结束、当前有没有阵营
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
bool tutorialDone = line.TutorialPhase.IsCompleted;
bool pickedSide = line.IsOnImperialQuestLine || line.IsOnAntiImperialQuestLine;

// 2) 选边（原生 SupportKingdomQuest 里就是这么做的）
if (kingdom.RulingClan == Clan.PlayerClan)
{
    StoryModeManager.Current.MainStoryLine.SetStoryLineSide(MainStoryLineSide.CreateImperialKingdom);
    MBInformationManager.ShowSceneNotification(new DeclareDragonBannerSceneNotificationItem(true));
}

// 3) 订阅阵营变更（RegisterEvents 里，非序列化监听）
StoryModeEvents.OnMainStoryLineSideChosenEvent.AddNonSerializedListener(
    this, new Action<MainStoryLineSide>(side => RefreshQuestGates(side)));

// 4) 教学打完：推进并顺手解锁下一阶段
StoryModeManager.Current.MainStoryLine.CompleteTutorialPhase(false);
```

## 风险与边界

- **阶段链是单向的**：`CompleteXxxPhase` 没有对应的回滚 API（`CancelSecondAndThirdPhase` 只摘 behavior，不清阶段对象）。mod 想「重玩主线」必须自己 new 一个 `MainStoryLine` 塞回 manager，而它的 setter 是 private，只能靠存档系统或反射。
- **阶段对象是重载（reload）不安全点**：`SecondPhase` 的构造函数里会 `CreateConspiracyClan()` 并对所有敌对王国宣战。如果重复执行会造成重复宣战。读档走的是反序列化路径不是构造函数，所以正常读档没问题——但手动 new 一个 `SecondPhase` 要当心。
- **`DragonBanner` 不存档**：`OnSessionLaunched` 之前访问会拿到 null。
- **`PlayerSupportedKingdom` 是快照**：玩家后来叛国或王国灭亡，这个字段不会更新。判断「现在支持谁」要读 `Clan.PlayerClan.Kingdom`。
- **字段 id 不可重排**：`[SaveableField]` / `[SaveableProperty]` 的编号被旧存档依赖，改编号等于让老存档读不出主线状态。

## 依赖关系

- [StoryModeManager](../StoryModeManager) — 构造函数创建本对象，`IsCompleted` 内部还要回头查它
- [MainStoryLineSide](../MainStoryLineSide) — `MainStoryLineSide` 字段的枚举类型
- [TutorialPhase](../TutorialPhase) — 链首，构造函数即创建
- [FirstPhase](../FirstPhase) — 教学结束后创建，集旗阶段
- [SecondPhase](../SecondPhase) — 第一阶段结束后创建，阴谋阶段
- [ThirdPhase](../ThirdPhase) — 阴谋强度满后创建，终局阶段
- [StoryModeEvents](../StoryModeEvents) — 选边/教学结束/阴谋启动都经它广播
- [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) — 给本类型分配存档类型 id 3