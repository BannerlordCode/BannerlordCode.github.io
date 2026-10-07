---
title: "GauntletStoryModeMapCheatsView"
description: "StoryMode 对地图作弊菜单的替换视图：成就系统有活动时先把菜单藏起来再弹确认框，拒绝时不恢复透明度——这是本类唯一的行为分叉。"
---

# GauntletStoryModeMapCheatsView

**Namespace:** `StoryMode.GauntletUI.Map`
**Module:** StoryMode
**Type:** `internal class GauntletStoryModeMapCheatsView : GauntletMapCheatsView`
**Base:** `GauntletMapCheatsView`（SandBox.GauntletUI.Map）
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Map/GauntletStoryModeMapCheatsView.cs`

## 概述

`GauntletStoryModeMapCheatsView` 是 71 行、5 个方法的**视图替换类**。它靠类声明上的 `[OverrideView(typeof(MapCheatsView))]`（`:15`）顶替 Sandbox 原版的地图作弊菜单，继承 [GauntletMapCheatsView](../../campaign-ext/GauntletMapCheatsView/)，**只在一个地方加了东西：开作弊菜单之前先问玩家「要不要为此放弃成就」。**

`CreateLayout`（`:18-35`）是全部逻辑所在：先调基类建布局（`:26`），再取 `AchievementsCampaignBehavior`（`:27`）。**若无成就活动就直接开（`:28-32`）；若有，则先把 layer 透明度设成 0（`:33`）再弹 `Inquiry` 确认框（`:34`）**——yes 走 `EnableCheatMenu`（`:37-47`），no 走 `RemoveCheatMenu`（`:49-52`）。

另两个 override 只做一件事：`OnMapConversationStart`（`:54-61`）与 `OnMapConversationOver`（`:63-70`）分别在对话开始/结束时 `ScreenManager.SetSuspendLayer`，把本 layer 挂起/解挂起。

## 心智模型

把它当成**「一个带副作用的前置确认」**。三条推论：

第一，**它是有意把作弊「降级为要付代价的操作」。** 确认框的文案写死了这个前提：`"{=YkbOfPRU}Enabling cheats will disable the achievements this game. Do you want to proceed?"`（`:34`）。**确认后才调 `AchievementsCampaignBehavior.DeactivateAchievements`（`:45`）**，而原版 `GauntletMapCheatsView` 直接开、不管成就。

第二,**「有成就活动」的判据来自一个反直觉的函数。** `AchievementsCampaignBehavior.CheckAchievementSystemActivity`（`AchievementsCampaignBehavior.cs:411-420`）的逻辑是：**只有「成就尚未被关闭」且「`DumpIntegrityCampaignBehavior` 存在」且「游戏完整性已达成」三条同时成立才返回 `true`；否则返回 `MBDebug.IsTestMode()`。** 所以**开发者模式下这个函数恒为真** —— **你在 test mode 里做测试也会被问「要不要放弃成就」，且选 yes 会真的把成就系统关掉。**

第三，**拒绝分支不恢复透明度。** `:33` 已经把 `UIContext.ContextAlpha` 设成 `0f`，而 `RemoveCheatMenu`（`:49-52`）**只调 `MapScreen.CloseGameplayCheats()`，不把 alpha 设回 1**。恢复 alpha 的 `:41` 只在 `EnableCheatMenu` 里。**所以「选了否」之后这个 layer 停在透明态** —— 我陈述这个事实，不判断它是否有可见后果（作弊菜单此时是关着的）。

边界：**`internal` 类**，编译期不可引用；**它靠 `[OverrideView]` 特性被引擎反射替换，mod 无法 `new` 它**，也无法通过正常 API 换掉它。

## 如何使用

**怎么拿到它**：**你拿不到它**——`[OverrideView(typeof(MapCheatsView))]`（`:15`）让引擎在创建 `MapCheatsView` 时改用本类。全树没有任何 `new GauntletStoryModeMapCheatsView()`。

想验证「成就系统是否正在活动」这个前置条件（这是本视图唯一对外可感知的行为）：

```csharp
using StoryMode.GameComponents.CampaignBehaviors;
using TaleWorlds.CampaignSystem;

// CheckAchievementSystemActivity 的三条件：未关闭 + DumpIntegrityCampaignBehavior 存在 + 完整性达成
// 否则退化为 MBDebug.IsTestMode()（AchievementsCampaignBehavior.cs:411-420）
var behavior = Campaign.Current.GetCampaignBehavior<AchievementsCampaignBehavior>();
bool active = behavior != null && behavior.CheckAchievementSystemActivity(out TaleWorlds.Localization.TextObject reason);
Debug.Print("achievement activity = " + active + " reason=" + (reason == null ? "null" : reason.ToString()), 0);
```

复现本视图的两条分支逻辑（不涉及 UI，只看判定）：

```csharp
using StoryMode.GameComponents.CampaignBehaviors;
using TaleWorlds.CampaignSystem;

var behavior = Campaign.Current.GetCampaignBehavior<AchievementsCampaignBehavior>();

// 对应 CreateLayout 第 28 行：behavior 为 null 或无活动 -> 直接开，不问
if (behavior == null || !behavior.CheckAchievementSystemActivity(out _))
{
    Debug.Print("path A: 直接开作弊菜单（不弹确认框）", 0);
}
else
{
    Debug.Print("path B: 先隐藏菜单再弹确认框；选 yes 会 Disable 成就", 0);
}
```

**用它最容易踩的一条**：**在开发者/测试模式下，你每次开作弊菜单都会被问「要不要放弃成就」，而选 yes 会真的 `DeactivateAchievements`。** 根源是 `CheckAchievementSystemActivity` 的兜底分支 `return MBDebug.IsTestMode();`（`AchievementsCampaignBehavior.cs:417`）——**它在没有成就活动时也返回 `true`。** 而 `DeactivateAchievements`（`:906`）第 910 行 `_deactivateAchievements = !temporarily || _deactivateAchievements;` 会把成就系统**永久**关掉（本视图没传 `temporarily`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CreateLayout` | `protected override void CreateLayout()` | **本类唯一的逻辑入口（`:18-35`）。** 四步：`:26` 调基类建布局 → `:27` 取 `AchievementsCampaignBehavior` → `:28` 无活动则 `EnableCheatMenu()` + `return` → `:33` 设 `ContextAlpha = 0f` → `:34` 弹 `InformationManager.ShowInquiry`。**注意 `:28` 的条件是 `behavior == null \|\| !Check…`——behavior 缺失也走「直接开」这条路。** |
| `EnableCheatMenu` | `private void EnableCheatMenu()` | **有两条到达路径**（`:30` 无活动直接开；`:34` 确认框选 yes）。`:41` 把 `ContextAlpha` 恢复成 `1f`；`:42` 再取一次 behavior；`:43` 判活动 → `:45` 调 `DeactivateAchievements(new TextObject("{=sO8Zh3ZH}Achievements are disabled due to cheat usage."))`。**从 `:30` 那条路进来时 `:43` 必为假，所以不会重复关成就。** |
| `RemoveCheatMenu` | `private void RemoveCheatMenu()` | 只有一条路径（确认框选 no）。**单行（`:51`）：`MapScreen.CloseGameplayCheats()`。** **不恢复 `ContextAlpha`** —— 把它设成 0 的是 `:33`。 |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | `:56` 先调基类，`:57` 判 `_layerAsGauntletLayer != null`，`:59` `ScreenManager.SetSuspendLayer(layer, true)`。**判空是必要的**——本 layer 可能尚未建好。 |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | 与上一条对称：`:65` 调基类、`:67` 判空、`:68` `SetSuspendLayer(layer, false)`。**两个方法的判空条件相同，但源码里是两个独立的 `if`，不是共用辅助方法。** |

## 真实示例

对照两个 `SetSuspendLayer` 回调的判空必要性——这就是为什么要判：

```csharp
using TaleWorlds.ScreenSystem;

// 本视图的两个回调在 _layerAsGauntletLayer 为 null 时什么都不做（GauntletStoryModeMapCheatsView.cs:57 / :67）
// 这与「无条件调 SetSuspendLayer」的区别是：后者会传一个 null layer 进去
Debug.Print("SetSuspendLayer 签名 = " + typeof(ScreenManager).GetMethod("SetSuspendLayer"), 0);
```

看 `DeactivateAchievements` 的永久性——本视图没传 `temporarily`，所以 `!temporarily` 为真：

```csharp
// AchievementsCampaignBehavior.cs:906-910
// public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)
// { ... _deactivateAchievements = !temporarily || _deactivateAchievements; ... }
// 本视图调用只传了 reason ⇒ temporarily = false ⇒ !temporarily = true ⇒ 成就被永久置为关闭
Debug.Print("本视图调用形如 DeactivateAchievements(reason) ⇒ temporarily 默认 false ⇒ 永久关闭", 0);
```

## 风险与边界

- **`internal` 类 + `[OverrideView]` 特性，mod 拿不到它也换不掉它。** 想改行为只能改它自己的代码或去掉那个特性（特性在 `:15`）。
- **`CheckAchievementSystemActivity` 的兜底是 `MBDebug.IsTestMode()`。** `AchievementsCampaignBehavior.cs:417`。**测试模式下恒真 ⇒ 每次开作弊都被问，且 yes 会真关成就。**
- **`DeactivateAchievements` 传 `temporarily = false` ⇒ 永久关闭。** `AchievementsCampaignBehavior.cs:910`。**本视图没有「临时」这条路。**
- **拒绝分支不恢复 `ContextAlpha`。** `:33` 设 0，`RemoveCheatMenu`（`:51`）只关菜单。恢复只在 `EnableCheatMenu` 的 `:41`。
- **`EnableCheatMenu` 被两条路径调用，但 `:43` 的二次判活是必需的**（否则从 `:30` 进来也会去关成就）。**这条判活依赖 `Campaign.Current` 此刻仍能取到同一个 behavior**。
- **`CreateLayout` 依赖 `Campaign.Current`。** `:27` 与 `:42` 各取一次 campaign behavior。**地图作弊菜单通常只在战役里出现，但源码没有对「无战役」做保护**——`:27` 的 `behavior == null` 短路会走「直接开」而不是崩。
- **`InformationManager.ShowInquiry` 的两个回调引用了私有方法**（`:34` 的 `(Action)EnableCheatMenu` / `(Action)RemoveCheatMenu`），**所以这两个方法不能被裁剪掉**——它们唯一的引用点就是这个 Inquiry 的委托。
- **两个 `SetSuspendLayer` 回调都判 `_layerAsGauntletLayer != null`。** 去掉判空就是把可能为 null 的 layer 传进 [ScreenManager](../../gui/ScreenManager/)（`bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenManager.cs:242`）。
- **`GameTexts.FindText("str_yes")` / `("str_no")` 是本地化查找**，若语料缺条目，按钮文案会退化。

## 参见

- 被替换的视图：[MapCheatsView](../../campaign-ext/MapCheatsView/)（特性里点名的那个类型）、基类 [GauntletMapCheatsView](../../campaign-ext/GauntletMapCheatsView/)（`Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapCheatsView.cs`，其 `:60` 也调 `CloseGameplayCheats`）
- 判据来源：[AchievementsCampaignBehavior](../../campaign-ext/AchievementsCampaignBehavior/)（`CheckAchievementSystemActivity` `:411`、`:417` 的 `MBDebug.IsTestMode()` 兜底；`DeactivateAchievements` `:906`、`:910` 的永久置位）
- 关闭动作：[MapScreen](../../campaign-ext/MapScreen/)（`CloseGameplayCheats` `Modules.SandBox/SandBox.View/SandBox.View.Map/MapScreen.cs:2447`，`:2455` 处有 `FailedAssert("Requested remove map cheats but cheats is not enabled")`）
- 弹窗：[InformationManager](../../core-extra/InformationManager/) 与 [InquiryData](../../core-extra/InquiryData/)；文案 [GameTexts](../../core-extra/GameTexts/) 与 [TextObject](../../localization/TextObject/)
- 挂起：[ScreenManager](../../gui/ScreenManager/)（`SetSuspendLayer` `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenManager.cs:242`）
- 同桶：[MapAudioManager](../MapAudioManager/)、[ArenaPreloadView](../ArenaPreloadView/)、[ModuleCheckResult](../ModuleCheckResult/)、[NameplateSize](../NameplateSize/)、[SandBoxEditorMissionTester](../SandBoxEditorMissionTester/)、[DefeatHideoutBossObjective](../DefeatHideoutBossObjective/)
- 桶首页：[gameplay API 分区](../)