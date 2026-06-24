<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultEncounter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncounter

**命名空间:** TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers
**模块:** TaleWorlds.CampaignSystem
**类型:** static class（方法集合）

## 概述

`DefaultEncounter

` 是战役层"游戏菜单"（GameMenu）系统的初始化处理器集合。它本身没有实例状态——所有方法都?

`static

`，并通过 

`[GameMenuInitializationHandler("menu_id")]

` 特性被框架自动绑定到对应的游戏菜单上。当玩家在地图上触发遭遇、被俘、围城、村庄掠夺、海战等情况进入某个文本菜单时，本类的方法会被调用以设置菜单背景图、填?

`ENCOUNTER_TEXT

` 等文本变量、处理版本兼容跳转?
模组开发者通常在两类场景下研究本类：一是想理解原版遭遇菜单的背景图选择逻辑或文本生成规则，二是想模仿这个模式注册自己模组的 

`[GameMenuInitializationHandler]

` 来初始化自定义菜单?
## 心智模型

?

`DefaultEncounter

` 理解?遭遇菜单的化妆师 + 旁白"。框架打开一个菜单时，会按特性匹配调用对应的 

`on_init

` 方法。该方法做两件事?
1. **设置背景?*：通过 

`args.MenuContext.SetBackgroundMeshName(...)

` 指定菜单背后显示的图片，依据玩家性别、敌方文化、是否海战、是否村庄掠夺等条件选择不同 mesh?2. **设置描述文本**：通过 

`MBTextManager.SetTextVariable("ENCOUNTER_TEXT", ...)

` 设置菜单主文本，根据遭遇类型（普通战斗、围城、突袭、解围、俘虏、海战等）从 

`GameTexts

` 中选取并填充变量?
关键模式：方法通过多个 

`[GameMenuInitializationHandler]

` 特性可绑定到多个菜?ID（一个方法服务多个菜单），同一菜单 ID 也可由多个方法分别处理。`[GameMenuEventHandler]

` 则用于响应菜单选项?

`OnInit

` / 

`OnConsequence

` 事件?
## 主要方法

### game_menu_taken_prisoner_ui_on_init
`

`

`csharp
[GameMenuInitializationHandler("taken_prisoner")]
// ... 同时绑定多个俘虏相关菜单
public static void game_menu_taken_prisoner_ui_on_init(MenuCallbackArgs args)
`

`

`
初始?被俘?系列菜单的背景图。根据主角是否在海上、是否女性，?

`wait_captive_at_sea_female/male

`、`wait_captive_female/male

` 中选择对应 mesh?
### game_menu_defeat_and_taken_prisoner_ui_on_init
`

`

`csharp
[GameMenuInitializationHandler("defeated_and_taken_prisoner")]
public static void game_menu_defeat_and_taken_prisoner_ui_on_init(MenuCallbackArgs args)
`

`

`
设置"战败被俘"菜单背景?

`encounter_lose

`?
### game_menu_taken_prisoner_town_ui_on_init
`

`

`csharp
[GameMenuInitializationHandler("menu_captivity_transfer_to_town")]
// ...
public static void game_menu_taken_prisoner_town_ui_on_init(MenuCallbackArgs args)
`

`

`
初始化在城镇/城堡关押期间的菜单背景，按性别选择 

`wait_prisoner_female

` ?

`wait_prisoner_male

`?
### game_menu_join_encounter_on_init
`

`

`csharp
[GameMenuInitializationHandler("join_encounter")]
private static void game_menu_join_encounter_on_init(MenuCallbackArgs args)
`

`

`
"加入遭遇"菜单初始化。如果对方是商队则使?

`encounter_caravan

`，海战则使用 

`encounter_naval

`，否则按对方文化?

`MenuHelper.GetEncounterCultureBackgroundMesh

` 获取对应背景?
### game_menu_encounter_on_init
`

`

`csharp
[GameMenuInitializationHandler("encounter")]
[GameMenuInitializationHandler("try_to_get_away")]
[GameMenuInitializationHandler("try_to_get_away_debrief")]
private static void game_menu_encounter_on_init(MenuCallbackArgs args)
`

`

`
最复杂的初始化方法，服?

`encounter

` / 

`try_to_get_away

` / 

`try_to_get_away_debrief

` 三个菜单。按以下分支设置 

`ENCOUNTER_TEXT

`?- 玩家无健康队员但盟友??"你已无战斗力但有盟友"?- 当前是村庄伏??

`wait_ambush

` 背景?- 当前是村庄且处于掠夺/强征物资/强征新兵 ?对应文本?- 当前是城?城镇围攻 ?区分攻城突击、突围、援军等子场景?- 遭遇商队/村民/军队 ?不同文本?- 同阵营非敌对遭遇 ?"和平遭遇"文本?最后根据是否设?

`flag

` 决定 

`ATTACK_TEXT

` ?"Fight" 还是 "Attack"?
### game_menu_join_siege_event_on_init
`

`

`csharp
[GameMenuInitializationHandler("join_siege_event")]
[GameMenuInitializationHandler("join_sally_out")]
private static void game_menu_join_siege_event_on_init(MenuCallbackArgs args)
`

`

`
"加入围城"菜单初始化。包含一个版本兼容分支：若正在升级存档版本且旧版?&lt; 1.3.0 且无 

`PlayerEncounter

`，则直接 

`GameMenu.ExitToLast()

`。否则设置围城背景图，并根据玩家是否为围城领袖设?

`JOIN_SIEGE_TEXT

`?
### game_menu_town_menu_on_init
`

`

`csharp
[GameMenuInitializationHandler("town_wait")]
// ...
public static void game_menu_town_menu_on_init(MenuCallbackArgs args)
`

`

`
城镇/守卫/锦标?围攻者战败等菜单的初始化。设置背景为当前聚居地的 

`WaitMeshName

`，或围攻目标聚居地的 

`WaitMeshName

`?
### game_menu_encyclopedia_on_consequence
`

`

`csharp
[GameMenuEventHandler("kingdom", "encyclopedia", GameMenuEventHandler.EventType.OnConsequence)]
public static void game_menu_encyclopedia_on_consequence(MenuCallbackArgs args)
`

`

`
空实现的事件处理器。绑?王国"?报告"菜单?百科"选项?

`OnConsequence

`，原版在此处不做额外处理，仅为占位或供模组扩展?
### game_menu_new_game_begin_on_init
`

`

`csharp
[GameMenuInitializationHandler("new_game_begin")]
public static void game_menu_new_game_begin_on_init(MenuCallbackArgs args)
`

`

`
新游戏开始菜单。直?

`GameMenu.ExitToLast()

` 退出菜单，并打开主角的百科页面?
## 使用示例

### 示例: 为自定义菜单注册初始化处理器

**场景**: 模组新增一?神秘遗迹"遭遇菜单，需要根据玩家阵营选择不同背景图并设置描述文本?
`

`

`csharp
public static class MyModEncounterHandlers
{
    [GameMenuInitializationHandler("mymod_mysterious_ruins")]
    public static void OnMyModRuinsInit(MenuCallbackArgs args)
    {
        // 1. 设置背景?        args.MenuContext.SetBackgroundMeshName("mymod_ruins_bg");

        // 2. 设置描述文本（使?GameTexts 或自定义 TextObject?        var text = new TextObject("{=mymod_ruins_desc}You stand before ancient ruins...");
        MBTextManager.SetTextVariable("ENCOUNTER_TEXT", text, true);
    }
}
`

`

`

**要点**: 方法必须?

`static

`；特性参数必须与 

`GameMenu.AddMenu

` 注册的菜?ID 完全一致；文本变量名需与菜?XML 中的占位符对应?
## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
