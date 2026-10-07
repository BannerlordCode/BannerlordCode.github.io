---
title: "DefaultEncounter"
description: "遭遇战游戏菜单初始化处理器集合：通过 [GameMenuInitializationHandler] 属性注册静态方法，为遭遇、囚禁、围城等菜单设置背景网格和文本变量。"
---
# DefaultEncounter

**Namespace:** TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounter`
**Base:** 无（静态方法容器，不继承任何类）
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandlers/DefaultEncounter.cs`

## 概述

`DefaultEncounter` 是一组静态方法的集合，专门负责**遭遇战相关游戏菜单的初始化**。每个方法通过 `[GameMenuInitializationHandler("menu_id")]` 属性标记自己负责哪个菜单，`GameMenuCallbackManager` 在启动时扫描这些属性并注册委托。当玩家触发遭遇、被囚禁、参与围城或进入城镇时，对应的初始化方法会被自动调用，设置菜单的背景网格（`SetBackgroundMeshName`）和文本变量（`SetTextVariable`）。

这个类**不继承任何基类**，也不是模型——它是纯粹的 UI 初始化逻辑容器。所有方法都是 `static`，通过属性反射注册，没有直接调用点。

## 心智模型

把 `DefaultEncounter` 想成遭遇战菜单的**布景组**：

- **谁注册它**：`GameMenuCallbackManager` 构造时通过反射扫描 `GameMenuInitializationHandler` 属性，把每个方法注册为对应菜单 ID 的初始化委托。
- **谁调用它**：`GameMenuCallbackManager.InitializeState(menuId, state)` 在菜单打开前查找并调用对应的初始化方法。
- **它做什么**：只做两件事——设置背景网格（`args.MenuContext.SetBackgroundMeshName(...)`）和设置文本变量（`MBTextManager.SetTextVariable(...)`）。不处理菜单选项逻辑，不修改世界状态。
- **怎么改它**：创建一个新的静态类，用 `[GameMenuInitializationHandler("menu_id")]` 标记你自己的方法。后注册的方法会覆盖先注册的（`GameMenuCallbackManager` 用字典存储，同 ID 后者覆盖前者）。也可以用 Harmony 补丁直接修改现有方法。

注意：这个类的方法**按菜单 ID 分组**，一个方法可以处理多个菜单 ID（通过多个属性标记）。例如 `game_menu_taken_prisoner_ui_on_init` 同时处理 8 个囚禁相关菜单。

## 主要属性

本类为静态方法容器，无实例属性。

## 主要方法

### game_menu_taken_prisoner_ui_on_init
`public static void game_menu_taken_prisoner_ui_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为囚禁菜单设置背景网格。根据玩家性别和是否在海上，选择 `wait_captive_male`、`wait_captive_female`、`wait_captive_at_sea_male` 或 `wait_captive_at_sea_female`。处理 8 个菜单 ID：`taken_prisoner`、`menu_captivity_end_no_more_enemies`、`menu_captivity_end_by_ally_party_saved` 等。

```csharp
// 属性注册示例（来自源码）
[GameMenuInitializationHandler("taken_prisoner")]
[GameMenuInitializationHandler("menu_captivity_end_no_more_enemies")]
// ... 共 8 个菜单 ID
public static void game_menu_taken_prisoner_ui_on_init(MenuCallbackArgs args)
{
    // 根据性别和海上状态选择背景网格
    args.MenuContext.SetBackgroundMeshName("wait_captive_male");
}
```

### game_menu_defeat_and_taken_prisoner_ui_on_init
`public static void game_menu_defeat_and_taken_prisoner_ui_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为"战败并被俘"菜单设置背景网格为 `encounter_lose`。处理菜单 ID：`defeated_and_taken_prisoner`。

### game_menu_taken_prisoner_town_ui_on_init
`public static void game_menu_taken_prisoner_town_ui_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为城镇囚禁菜单设置背景网格。根据玩家性别选择 `wait_prisoner_male` 或 `wait_prisoner_female`。处理 5 个菜单 ID：`menu_captivity_transfer_to_town`、`menu_captivity_end_exchanged_with_prisoner` 等。

### game_menu_join_encounter_on_init
`private static void game_menu_join_encounter_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为"加入遭遇战"菜单设置背景网格。根据遭遇方类型选择：商队用 `encounter_caravan`，海上用 `encounter_naval`，其他按遭遇方文化的 `EncounterBackgroundMesh`。处理菜单 ID：`join_encounter`。

### game_menu_encounter_on_init
`private static void game_menu_encounter_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 遭遇战主菜单的核心初始化方法，是最复杂的一个。根据遭遇上下文（定居点类型、战斗类型、部队类型、围城状态）设置背景网格和 `ENCOUNTER_TEXT` 文本变量。处理 3 个菜单 ID：`encounter`、`try_to_get_away`、`try_to_get_away_debrief`。

```csharp
// 核心逻辑示例（简化）
if (currentSettlement != null && currentSettlement.IsVillage && PlayerEncounter.Battle != null)
{
    args.MenuContext.SetBackgroundMeshName("wait_ambush");
}
else if (PlayerEncounter.EncounteredParty != null && PlayerEncounter.EncounteredParty.IsMobile)
{
    // 根据遭遇方类型选择背景网格
    args.MenuContext.SetBackgroundMeshName("encounter_caravan");
}
// 设置遭遇描述文本
MBTextManager.SetTextVariable("ENCOUNTER_TEXT", encounterText, true);
```

### game_menu_naval_town_outside_on_init
`private static void game_menu_naval_town_outside_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为海上城镇外部菜单设置背景网格为 `town_blockade`。处理菜单 ID：`naval_town_outside`。

### game_menu_join_siege_event_on_init
`private static void game_menu_join_siege_event_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为"加入围城事件"和"加入突围"菜单设置背景网格和文本。根据玩家是攻城方还是守城方，设置不同的 `JOIN_SIEGE_TEXT`。处理 2 个菜单 ID：`join_siege_event`、`join_sally_out`。

### game_menu_village_loot_complete_on_init
`private static void game_menu_village_loot_complete_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为"村庄掠夺完成"菜单设置背景网格为村庄的等待网格。处理菜单 ID：`village_loot_complete`。

### game_menu_town_menu_on_init
`public static void game_menu_town_menu_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为城镇菜单设置背景网格。根据当前定居点或围城状态选择对应的等待网格。处理 5 个菜单 ID：`town_wait`、`town_guard`、`menu_tournament_withdraw_verify`、`menu_tournament_bet_confirm`、`siege_attacker_defeated`。

### game_menu_attackers_left_on_init
`public static void game_menu_attackers_left_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为"攻城方离开"菜单设置背景网格为 `wait_besieging`。处理菜单 ID：`siege_attacker_left`。

### game_menu_new_game_begin_on_init
`public static void game_menu_new_game_begin_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 新游戏开始时的特殊处理：退出到上一个菜单，然后跳转到英雄百科页面。处理菜单 ID：`new_game_begin`。

### game_menu_kingdom_mno_call_to_arms_on_consequence
`public static void game_menu_kingdom_mno_call_to_arms_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 王国"召集军队"菜单选项的后果处理器。当前为空实现（预留扩展点）。通过 `[GameMenuEventHandler("kingdom", "mno_call_to_arms", OnConsequence)]` 注册。

### game_menu_encyclopedia_on_consequence
`public static void game_menu_encyclopedia_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** 百科菜单选项的后果处理器。当前为空实现。通过 `[GameMenuEventHandler("kingdom", "encyclopedia", OnConsequence)]` 和 `[GameMenuEventHandler("reports", "encyclopedia", OnConsequence)]` 注册。

### game_menu_town_menu_request_meeting_on_init
`public static void game_menu_town_menu_request_meeting_on_init(MenuCallbackArgs args)`

**用途 / Purpose:** 为"请求会面"菜单设置背景网格为遭遇定居点的等待网格。处理 2 个菜单 ID：`request_meeting`、`request_meeting_with_besiegers`。

### E3ActionMenuOnInit
`private static void E3ActionMenuOnInit(MenuCallbackArgs args)`

**用途 / Purpose:** 为 E3 动作菜单设置背景网格为 `gui_bg_lord_khuzait`。处理菜单 ID：`e3_action_menu`。

## 使用示例

### 示例 1：自定义遭遇菜单背景

```csharp
// 创建你自己的初始化处理器，覆盖官方默认行为
public class MyEncounterHandlers
{
    [GameMenuInitializationHandler("encounter")]
    public static void MyEncounterOnInit(MenuCallbackArgs args)
    {
        // 自定义背景网格
        args.MenuContext.SetBackgroundMeshName("my_custom_encounter_bg");
        // 自定义遭遇文本
        MBTextManager.SetTextVariable("ENCOUNTER_TEXT",
            new TextObject("你遭遇了自定义敌人！"), true);
    }
}
// 无需手动注册——GameMenuCallbackManager 会自动扫描并注册
// 由于你的模块后加载，你的方法会覆盖官方的 game_menu_encounter_on_init
```

### 示例 2：用 Harmony 补丁修改现有处理器

```csharp
[HarmonyPatch(typeof(DefaultEncounter), nameof(DefaultEncounter.game_menu_encounter_on_init))]
public static class EncounterInitPatch
{
    public static void Prefix(MenuCallbackArgs args)
    {
        // 在官方逻辑之前插入自定义背景
        args.MenuContext.SetBackgroundMeshName("my_custom_bg");
    }
}
```

### 示例 3：读取当前遭遇信息（调试用）

```csharp
// 在 CampaignBehaviorBase 中检查当前遭遇状态
if (PlayerEncounter.Current != null && PlayerEncounter.EncounteredParty != null)
{
    InformationManager.DisplayMessage(new InformationMessage(
        $"遭遇：{PlayerEncounter.EncounteredParty.Name}，" +
        $"是否海上：{PlayerEncounter.IsNavalEncounter()}"));
}
```

## 依赖关系

- 注册机制：[GameMenuCallbackManager](../GameMenuCallbackManager) 通过反射扫描 `[GameMenuInitializationHandler]` 属性并注册委托。
- 属性定义：[GameMenuInitializationHandler](../GameMenuInitializationHandler) 是标记方法为菜单初始化处理器的属性类。
- 事件处理：[GameMenuEventHandler](../GameMenuEventHandler) 是标记菜单选项后果处理器的属性类。
- 参数类型：[MenuCallbackArgs](../MenuCallbackArgs) 包含 `MenuContext` 和菜单状态，是所有初始化方法的入参。
- 遭遇状态：[PlayerEncounter](../PlayerEncounter) 提供当前遭遇的上下文信息（遭遇方、战斗、围城状态）。
- 围城状态：[PlayerSiege](../PlayerSiege) 提供玩家围城事件信息。
- 定居点：[Settlement](../Settlement) 提供当前定居点信息（类型、围城状态、等待网格）。
- 菜单系统：[GameMenu](../GameMenu) 是菜单系统的入口类。

## 参见

- [本区域目录](../)
- [GameMenuCallbackManager](../GameMenuCallbackManager) — 通过反射注册和调用本类的初始化方法
- [GameMenuInitializationHandler](../GameMenuInitializationHandler) — 标记方法为菜单初始化处理器的属性
- [GameMenuEventHandler](../GameMenuEventHandler) — 标记菜单选项后果处理器的属性
- [MenuCallbackArgs](../MenuCallbackArgs) — 初始化方法的参数类型
- [PlayerEncounter](../PlayerEncounter) — 遭遇状态查询
- [DefaultEncounterModel](../DefaultEncounterModel) — 遭遇逻辑模型（与本类的 UI 初始化职责不同）
- [DefaultEncounterGameMenuModel](../DefaultEncounterGameMenuModel) — 遭遇菜单选项模型
