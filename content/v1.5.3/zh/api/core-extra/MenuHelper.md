---
title: "MenuHelper"
description: "战役菜单回调的静态零件库：把选项的三态显示、议题/任务图标标志，以及遭遇战的「条件 → 后果」标准件收敛成可直接挂进菜单 XML 的方法。"
---

# MenuHelper

**命名空间：** `Helpers`
**Type:** `public static class MenuHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/MenuHelper.cs`

## 概述

MenuHelper 是战役菜单（GameMenu）回调层的静态工具箱：菜单选项的启用/禁用与提示、选项上要显示的议题与任务图标、遭遇战菜单的条件（Condition）与后果（Consequence）回调，以及城镇内「打开下一个地点」的跳转，全部收敛在这里。它不定义菜单本身——菜单结构由 XML 与 `GameMenuManager` 决定——而是给菜单 XML 里挂的回调提供一批可直接引用的实现与助手，让 mod 作者写一个菜单选项时不必重复实现「能不能点、点了会怎样」这套样板。它同时是「情报可视化」的入口：把英雄或地点身上的议题、任务、故事任务状态翻译成 `GameMenuOption.IssueQuestFlags` 位标志，UI 靠这些标志决定在选项旁边画什么小图标。

## 心智模型

把 MenuHelper 想成「菜单回调的零件库」，而不是菜单的控制器。它的方法分三类：① **选项外观**——`SetOptionProperties` 一行决定「可用 / 灰掉并给提示 / 干脆不显示」；② **选项上的情报**——`SetIssueAndQuestDataForHero` 与 `SetIssueAndQuestDataForLocations` 把「这个英雄或这个地点身上有没有议题、任务、故事任务」翻成位标志；③ **遭遇战流程**——`EncounterAttackCondition` / `EncounterAttackConsequence` 这一对，以及捕获、命令攻击、离开的对应方法，构成遭遇菜单选项的「条件 → 后果」标准件。理解这个分层，就能读懂本类的一条硬规律：**Condition 方法返回 `bool` 且会顺手改写传入的 `args`**（设 `IsEnabled`、`Tooltip`、`optionLeaveType`、`OptionQuestData`），而 **Consequence 方法返回 `void` 且会真的改变战役状态**（施加敌对行动、结算战斗、结束遭遇、切换菜单）。前者是「问」，后者是「做」。

## 怎么用

### 什么时候调它

- 在菜单 XML 里挂 `on_condition` / `on_consequence`，或在自定义 `GameMenuOption` 里引用：直接写 `MenuHelper.EncounterAttackCondition` 这类静态方法名即可。
- 自己写一个菜单选项、只想快速处理「能不能点」：调 `SetOptionProperties`，一次把「可做 / 需要灰掉 / 灰掉时的提示文本」三件事表达完。
- 选项旁边要显示议题或任务图标：调 `SetIssueAndQuestDataForHero`（针对英雄）或 `SetIssueAndQuestDataForLocations`（针对一组地点）。
- 玩家点了城镇菜单里的地点选项、要打开下一个场景：在 consequence 里调 `CheckAndOpenNextLocation`。
- 遭遇结束后要决定回到哪个菜单：调 `DecideMenuState`。

### 调之前要准备什么

- `Campaign.Current` 与 `GameMenuManager` 必须可用；`SetIssueAndQuestDataForHero` 还会读 `Campaign.Current.QuestManager.TrackedObjects`。
- 传给 Condition/Consequence 的 `MenuCallbackArgs args` 必须是本次选项自己的实例——本类会直接写 `args.IsEnabled`、`args.Tooltip`、`args.OptionQuestData`、`args.optionLeaveType`。
- 遭遇战类方法要求当前真的处在遭遇中（`PlayerEncounter.Current` 或 `MapEvent.PlayerMapEvent` 非空），否则多数会直接返回 `false` 或提前退出。

### 调之后会发生什么

- `SetOptionProperties` 返回 `bool`：`true` 表示「这个选项应当存在」（要么可点，要么灰掉带提示），`false` 表示「这个选项应当被隐藏」。它自己不会写菜单，只是把判定结果交回给你。
- `EncounterAttackConsequence` 会调用 `BeHostileAction.ApplyEncounterHostileAction` 真正把敌对行动落实，并按围城/伏击/突袭等分支启动相应任务——它是**有副作用**的。
- `EncounterLeaveConsequence` 会 `PlayerEncounter.Finish(...)`，可能清掉 `BesiegerCamp`，甚至在需要时用 `BattleSimulation.SelectedTroops` 模拟一场战斗轮次，最后可能开始聚落遭遇。
- `CheckAndOpenNextLocation` 会打开地点场景、按地点 `StringId` 切换菜单，然后把 `GameMenuManager.NextLocation` 与 `PreviousLocation` 清空。
- `GetEncounterCultureBackgroundMesh` 只读文化数据，不产生副作用，返回背景网格名（海战时带 `_naval` 后缀）。

### 最容易踩的坑

- `SetIssueAndQuestDataForHero` 用的是**位或赋值**（`|=`），它只会**添加**标志、从不清理；复用同一个 `args` 或重复调用会累积旧标志。
- `SetOptionProperties` 的第三个参数 `shouldBeDisabled` 为 `false` 时，即使 `canPlayerDo == false` 它也返回 `false`——即「不可做且不该灰掉」等于「隐藏」，这是最常被误读的语义点。
- `CheckAndOpenNextLocation` 用一串 `StringId` 字符串比较（`"center"` / `"tavern"` / `"arena"` / `"lordshall"` / `"prison"` / `"port"`）决定下一个菜单；`StringId` 不在这个硬编码表里时，它只打开场景、不切菜单。
- 遭遇 Condition 都会改写 `args.optionLeaveType`（如 `HostileAction`、`Surrender`、`OrderTroopsToAttack` / `OrderShipsToAttack`），这决定按钮的图标与音效；绕开本类自己另设，就会得到不一致的 UI。
- 遭遇战方法大量读取 `MobileParty.MainParty.IsInRaftState` 等临时状态；不在遭遇上下文里调用，行为是未定义的。

## 关键成员

- **SetOptionProperties**（`MenuHelper.cs:29`）— 三态助手：可做→返回 `true`；不可做且要灰掉→写 `IsEnabled=false` 与 `Tooltip` 后返回 `true`；不可做且不灰掉→返回 `false`（隐藏）。
- **SetIssueAndQuestDataForHero**（`MenuHelper.cs:45`）— 把英雄及其所属部队身上的议题与任务状态翻成 `OptionQuestData` 位标志（AvailableIssue / ActiveIssue / TrackedIssue / ActiveStoryQuest / TrackedStoryQuest）。
- **SetIssueAndQuestDataForLocations**（`MenuHelper.cs:125`）— 对一组地点一次性问 `IssueManager` 与 `QuestManager`，把结果或进 `args.OptionQuestData`。
- **CheckAndOpenNextLocation**（`MenuHelper.cs:133`）— 若 `NextLocation` 非空且当前是 `MapState`，打开地点场景、按 `StringId` 切换菜单，然后清空 Next/Previous，返回是否发生了跳转。
- **DecideMenuState**（`MenuHelper.cs:191`）— 问 `EncounterGameMenuModel.GetGenericStateMenu()`：有就切过去，没有就 `GameMenu.ExitToLast()`。
- **EncounterAttackCondition**（`MenuHelper.cs:203`）— 遭遇「攻击」选项的条件：设 `LeaveType=HostileAction`，处理围城准备未完成、主英雄受伤提示、木筏状态等，返回是否可显示。
- **EncounterCaptureEnemyCondition**（`MenuHelper.cs:293`）— 「捕获/受降」选项的条件：设 `LeaveType=Surrender`，要求敌方全部无健康成员或是木筏，返回 `bool`。
- **EncounterAttackConsequence**（`MenuHelper.cs:305`）— 「攻击」的后果：对敌方首领施加敌对行动，并按围城、伏击、突袭、封锁等分支启动相应任务。
- **CheckEnemyAttackableHonorably**（`MenuHelper.cs:530`）— 助手：在特定情形（玩家是防守方、跟随军队且非首领、敌方暂时不可攻击）下把选项灰掉并给 `str_enemy_not_attackable_tooltip` 提示。
- **EncounterOrderAttackCondition**（`MenuHelper.cs:549`）— 「下令进攻」的条件：按海战与否设 `OrderShipsToAttack` / `OrderTroopsToAttack`，排除木筏方，并调用上面的荣誉检查。
- **EncounterOrderAttackConsequence**（`MenuHelper.cs:728`）— 「下令进攻」的后果，转发到内部 `EncounterOrderAttack(null)`。
- **EncounterCaptureTheEnemyOnConsequence**（`MenuHelper.cs:734`）— 「捕获敌人」后果：把胜负改判为玩家方并调用 `PlayerEncounter.Update()`。
- **EncounterLeaveConsequence**（`MenuHelper.cs:741`）— 「离开」后果：结束遭遇、清围城营地，必要时用 `BattleSimulation.SelectedTroops` 模拟战斗轮次，最后可能开始聚落遭遇。
- **GetEncounterCultureBackgroundMesh**（`MenuHelper.cs:775`）— 取遭遇战背景网格名：文化无网格时断言并返回空串，海战则加 `_naval` 后缀。

## 真实示例

三态选项助手的原文——注意三条分支的返回语义：可做→显示，不可做且要灰掉→显示但禁用，不可做且不灰掉→隐藏。

```csharp
// MenuHelper.cs:29 起
public static bool SetOptionProperties(MenuCallbackArgs args, bool canPlayerDo, bool shouldBeDisabled, TextObject disabledText)
{
    if (canPlayerDo)
    {
        return true;
    }
    if (!shouldBeDisabled)
    {
        return false;
    }
    args.IsEnabled = false;
    args.Tooltip = disabledText;
    return true;
}
```

组合使用：在自定义菜单选项的 condition 里判断可做性，再补上议题/任务图标标志。

```csharp
// 在自定义 GameMenuOption 的 condition 回调里
bool canPlayerDo = MobileParty.MainParty.Party.NumberOfHealthyMembers > 0;
bool shouldBeDisabled = true;
TextObject disabledText = new TextObject("{=my_mod_need_troops}You have no healthy troops.", null);

if (!MenuHelper.SetOptionProperties(args, canPlayerDo, shouldBeDisabled, disabledText))
{
    return false; // 连灰掉的选项都不显示
}

// 让选项旁边显示「这里有个可接的议题/任务」图标
MenuHelper.SetIssueAndQuestDataForHero(args, Hero.MainHero);
return true;
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.QuestManager` / `IssueManager` / `GameMenuManager` 是本类的情报来源与跳转目标
- ↔ [GameModels](../../campaign/GameModels) —— `EncounterGameMenuModel` 从这里取，菜单状态本身是可替换模型
- ↔ [DialogHelper](../DialogHelper) —— 同样服务于「玩家在场景里能做什么」的菜单与对话层助手
- ↔ [MapEventHelper](../MapEventHelper) —— 遭遇战条件与后果里读 `MapEvent` 状态，和本类同层协作

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
