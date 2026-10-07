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

## 怎么用

### 怎么拿到它

`public class MainStoryLine` 声明在 `bannerlord-1.5.3/StoryMode/MainStoryLine.cs:15`，全文 310 行。**构造函数是 `public MainStoryLine()`（`:113`），但唯一调用者是 `StoryModeManager` 构造函数里的 `this.MainStoryLine = new MainStoryLine();`（`StoryModeManager.cs:71`）和读档回调 `OnLoad`。**

读取一律走 `StoryModeManager.Current.MainStoryLine`（**它没有 `Instance` 属性**）。

构造函数（`:113`→`:119`）做四件事：`MainStoryLineSide = MainStoryLineSide.None`（`:115`）、`new TutorialPhase()`（`:116`）、`new Dictionary<string, float>()`（`:117`）、`FamilyRescued = false`（`:118`）。

四个派生属性全部是**读 `MainStoryLine` 自己的字段**，而不是读阶段是否完成：

| 属性 | 实现 | 行 |
| --- | --- | --- |
| `IsPlayerInteractionRestricted` | `!TutorialPhase.IsCompleted && !IsOnImperialQuestLine && !IsOnAntiImperialQuestLine` | `:19`→`:23` |
| `IsOnImperialQuestLine` | `MainStoryLineSide == CreateImperialKingdom \|\| == SupportImperialKingdom` | `:29`→`:33` |
| `IsOnAntiImperialQuestLine` | `MainStoryLineSide == CreateAntiImperialKingdom \|\| == SupportAntiImperialKingdom` | `:39`→`:43` |
| `IsCompleted` | `ThirdPhase != null && ThirdPhase.IsCompleted` | `:79`→`:83` |
| `IsFirstPhaseCompleted` | `SecondPhase != null` | `:94`→`:98` |
| `IsSecondPhaseCompleted` | `ThirdPhase != null` | `:104`→`:108` |

注意 `IsCompleted`（`:83`）**绕过了 `this`，重新去读静态 `StoryModeManager.Current.MainStoryLine`**——非主线战役里它会 NRE，而同类的 `IsOnImperialQuestLine` 用的是 `this.MainStoryLineSide`，安全。

四个阶段推进方法各带副作用，不只是赋值：

- `CompleteTutorialPhase(bool isSkipped)`（`:157`）→ `TutorialPhase.CompleteTutorial(isSkipped)`（`:159`）、`new FirstPhase()`（`:160`）、`GetCampaignBehavior<TutorialPhaseCampaignBehavior>()` 非空则 `FinalizeTutorialPhase()`（`:161`→`:165`）、`StoryModeEvents.Instance.OnStoryModeTutorialEnded()`（`:166`）、`FirstPhase.CollectBannerPiece()`（`:167`，**教学结束就送第一块旗片**）、`RemoveBehavior<TutorialPhaseCampaignBehavior>()`（`:168`）
- `CompleteFirstPhase()`（`:172`）→ `new SecondPhase()`（`:174`）、`RemoveBehavior<FirstPhaseCampaignBehavior>()`（`:175`）
- `CompleteSecondPhase()`（`:179`）→ `new ThirdPhase()`（`:181`）、`OnConspiracyActivated()`（`:182`）、`RemoveBehavior<SecondPhaseCampaignBehavior>()`（`:183`）
- `CancelSecondAndThirdPhase()`（`:187`）→ 按需移除两个行为（`:191`、`:193`），**但从不创建阶段**

`SetStoryLineSide(MainStoryLineSide side)`（`:140`）除赋值外还做三件事：`this.PlayerSupportedKingdom = Clan.PlayerClan.Kingdom;`（`:143`）、`StoryModeEvents.Instance.OnMainStoryLineSideChosen(...)`（`:144`）、`DisableHeroAction.Apply` 两位导师（`:145`→`:146`）。

五个公开常量：`MainStoryLineDialogOptionPriority = 150`（`:276`）、`DragonBannerItemStringId = "dragon_banner"`（`:279`）、三块碎片 id（`:282`、`:285`、`:288`）。

存档字段版 `[SaveableField]`：`MainStoryLineSide`（1，`:291`）、`ImperialMentorSettlement`（6，`:295`）、`AntiImperialMentorSettlement`（7，`:299`）、`_tutorialScores`（9，`:303`）、`FamilyRescued`（10，`:307`）。

### 典型用法

```csharp
// 标准入口
MainStoryLine line = StoryModeManager.Current.MainStoryLine;

Debug.Print("教学=" + line.TutorialPhase.IsCompleted
          + "，第一阶段=" + (line.FirstPhase != null)
          + "，第二阶段=" + (line.SecondPhase != null)
          + "，终局=" + (line.ThirdPhase != null));

// 三个派生属性的语义差别
Debug.Print("交互受限=" + line.IsPlayerInteractionRestricted);   // 教学未完 且 未选边
Debug.Print("帝国线=" + line.IsOnImperialQuestLine + "，反帝国线=" + line.IsOnAntiImperialQuestLine);
Debug.Print("第一阶段完成=" + line.IsFirstPhaseCompleted);          // 其实是「SecondPhase != null」

// 教程评分：写入与读取都是拷贝，外部改不到内部字典
line.SetTutorialScores(new Dictionary<string, float> { { "MyMetric", 1f } });
Dictionary<string, float> copy = line.GetTutorialScores();
Debug.Print("评分项=" + copy.Count + "（改 copy 不影响内部）");

// 家族营救标记
Debug.Print("FamilyRescued=" + line.FamilyRescued);

// 选边：会连带设 PlayerSupportedKingdom、广播事件、禁用导师 AI
line.SetStoryLineSide(MainStoryLineSide.CreateAntiImperialKingdom);
Debug.Print("支持王国=" + line.PlayerSupportedKingdom.StringId);
```

### 最容易踩的坑

`IsCompleted`（`:83`）的实现绕过了 `this`，直接写 `StoryModeManager.Current.MainStoryLine.ThirdPhase != null && StoryModeManager.Current.MainStoryLine.ThirdPhase.IsCompleted`。这意味着**它不能在 `StoryModeManager.Current` 为 null 时安全调用**——而同一类的 `IsOnImperialQuestLine`（`:33`）、`IsPlayerInteractionRestricted`（`:23`）都只用 `this` 字段，完全安全。你在沙盒战役或主菜单阶段写 `mainStoryLine.IsCompleted` 会崩，而写 `mainStoryLine.IsOnImperialQuestLine` 不会——同一个类里两种安全级别。

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