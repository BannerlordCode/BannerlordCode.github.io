---
title: "GameMenu"
description: "Campaign 地图上的据点菜单与地图菜单的数据模型：一个 GameMenu 由一组 GameMenuOption 组成，每个选项通过 Condition 委托决定是否显示/可用、通过 Consequence 委托在玩家选中时执行逻辑。"
---

# GameMenu

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** class GameMenu
**源文件路径：** TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs

## 概述

`GameMenu` 是 Bannerlord 在 Campaign 阶段呈现给玩家的“菜单”数据模型——无论是进入据点（城镇、村庄、城堡）时的据点菜单，还是地图上的等待/夜营菜单，本质上都是 `GameMenuManager` 字典里的一个 `GameMenu` 实例。每个 `GameMenu` 持有一个 `GameMenuOption` 列表，选项是否可见、是否可点、被选中后做什么，全部由开发者在注册时提供的委托决定，因此它是 mod 向玩家暴露“可交互流程入口”的核心载体。

## 心智模型

把 `GameMenu` 想象成一张“选项卡片”，它属于 Campaign 地图/据点交互层，而不是战斗 Mission 层。游戏在玩家进入据点或触发地图菜单时，由 `Campaign.Current.GameMenuManager` 从已注册的菜单字典里取出对应 `GameMenu` 并打开；这些菜单本身在整局战役中持续存在（由 `GameMenuManager` 持有），只有 `GameMenuOption` 的 Condition/Consequence 会在每次菜单被展示、每次玩家点击时被重新求值。mod 不应自己去 new 一个 `GameMenu`——正确做法是让自己的 `CampaignBehaviorBase` 在 `InitializeGameStarter(CampaignGameStarter starterObject)` 里调用 `starterObject.AddGameMenu(...)` / `AddGameMenuOption(...)`，由 `CampaignGameStarter` 负责把菜单写进 `GameMenuManager`。当你想给某个据点或地图新增一个可点击流程（例如“在酒馆雇佣佣兵”）时就应该用 `GameMenu`；当你只需要改世界状态而不需要玩家交互入口时，应直接调用对应的 `*Action`，而不是硬塞一个菜单选项。注意：菜单注册必须发生在 `InitializeGameStarter` 中（而非仅 `OnCampaignStart`），否则读档时菜单不会重新登记、会丢失。

## 何时用 / 何时不要用

**用 `GameMenu` 的场景：** 你需要给玩家在据点菜单或地图菜单里新增一个可交互选项，或新增一整个自定义菜单（例如玩家自建据点的管理界面）。

**不要用 `GameMenu` 的场景：**
- 想改变持久化的世界状态（给英雄加钱、修改关系、开战/议和）——不要在选项的 Consequence 里直接改字段，而是调用对应的 `*Action`（如 `GiveGoldAction`、`ChangeKingdomAction`），它们负责广播事件、处理通知并保证存盘一致。
- 想在战斗 Mission 中做 UI——那是 `Mission` / `MissionBehavior` / `GauntletLayer` 的领地，不是 `GameMenu`。
- 在 `InitializeGameStarter` 之外的地方注册菜单——菜单必须在战役初始化阶段登记进 `GameMenuManager`，否则读档后不可用。

## 依赖图

- 上游（谁创建/驱动它）：[CampaignGameStarter](../CampaignGameStarter) 负责把菜单登记进 [GameMenuManager](../GameMenuManager)；注册代码写在 [CampaignBehaviorBase](../CampaignBehaviorBase) 的 `InitializeGameStarter` 中；也可通过 [GameMenuInitializationHandler](../GameMenuInitializationHandler) 特性挂接已有菜单的初始化逻辑。
- 下游（它操作的世界对象）：[Campaign](../../campaign/Campaign) 是当前菜单与 `GameMenuManager` 的访问入口；[Settlement](../../campaign/Settlement) 提供据点上下文；[Hero](../../campaign/Hero) 与 [Clan](../../campaign/Clan) 是选项后果常改的对象；安全改世界请用 [GiveGoldAction](../GiveGoldAction) 与 [ChangeKingdomAction](../ChangeKingdomAction)。

## 风险

- `GameMenuOption.IsLeave` 为 `true` 的选项在 wait 菜单里会结束等待；把它误设为 `true` 会让本应留在菜单里的选项变成“离开”。
- 选项的 `IsRepeatable` 控制该选项是否可在同一菜单内反复选择（配合 `MenuRepeatObjects` 做列表遍历）。需要逐条遍历一批对象（如可招募领主列表）时必须开启，否则列表只显示一次。
- Condition 委托返回 `false` 时该选项被隐藏；返回 `true` 但把 `args.IsEnabled` 设为 `false` 时选项显示但置灰。别把“本应禁用”误写成“返回 false 隐藏”，二者 UX 不同。
- 在 Consequence 里直接改世界字段（如 `hero.Gold += 100`）会绕过事件广播与存盘逻辑，应改为 `*Action`。
- 菜单必须在 `InitializeGameStarter` 中注册，仅放在 `OnCampaignStart` 里会在读档后丢失。
- `GameMenu` 没有“固定在某一 tick 被刷新”的保证；选项的可见性与可用性是在菜单每次被刷新（`GameMenuManager.RefreshMenuOptionConditions`）时求值，不要把时序逻辑写死在某帧。
- 切换菜单应使用 `GameMenu.ActivateGameMenu(menuId)`（从地图打开）或 `GameMenu.SwitchToMenu(menuId)`（在当前菜单内跳转），并会强制把 `Campaign.Current.TimeControlMode` 设为 `Stop`，调用方不要假设时间仍在推进。

## 关键成员

### 菜单结构（GameMenu 自身）

- `StringId` (`string`)：菜单的唯一标识，也是 `GameMenuManager` 字典的键。你用 `AddGameMenu(menuId, ...)` 传入的 `menuId` 即此值，`GameMenu.ActivateGameMenu` / `SwitchToMenu` 也用它定位菜单。
- `OnInit` (`OnInitDelegate`)：菜单被打开时最先执行，用于设置背景、填充 `MenuRepeatObjects` 等。由 `RunOnInit` 在 `ResetVariablesOnInit` 之后调用，并通过 `CampaignEventDispatcher.OnGameMenuOpened` 广播。
- `MenuOptions` (`IEnumerable<GameMenuOption>`)：该菜单当前所有选项的只读视图。内部由 `AddOption`（经 `CampaignGameStarter.AddGameMenuOption` 间接调用）维护。
- `IsWaitMenu` / `IsWaitActive`：标识这是否为“等待型”菜单（如夜营、围城等待）以及等待是否正在进行。`StartWait()` 会把 `TimeControlMode` 设为 `UnstoppableFastForward`，`EndWait()` 恢复 `Stop`。
- `MenuRepeatObjects` / `CurrentRepeatableObject`：配合可重复选项遍历一批对象（例如据点里的角色列表）。`SetMenuRepeatObjects(list)` 用于填充，`CurrentRepeatableObject` 返回当前正在处理的那个对象。
- 静态方法 `ActivateGameMenu(string menuId)`、`SwitchToMenu(string menuId)`、`ExitToLast()`：在代码里跳转/退出菜单的入口，会经 `Campaign.Current.GameMenuManager` 与 `MapState` 完成实际切换。

### 菜单选项（GameMenuOption）

- `OnConditionDelegate` / `OnConsequenceDelegate`：每个选项携带的两个委托。Condition 在菜单刷新时调用，决定选项是否可见/可用；Consequence 在玩家选中时调用，执行实际逻辑。委托签名均为 `(MenuCallbackArgs args) => ...`。
- `IsLeave` (`bool`)：该选项是否为“离开”型；wait 菜单中选中它会触发 `EndWait()`。
- `IsRepeatable` (`bool`)：是否可在同一菜单内反复选择（用于列表遍历）。
- `IsEnabled` (`bool`)：由 Condition 执行后通过 `args.IsEnabled` 回写；`false` 时选项置灰但仍显示。`GetConditionsHold` 在调用 Condition 后同步 `IsEnabled`、`Tooltip`、`OptionLeaveType`、`OptionQuestData`。
- `OptionLeaveType` (`LeaveType`) / `OptionQuestData` (`IssueQuestFlags`)：由 Condition 通过设置 `args.optionLeaveType` / `args.OptionQuestData` 回写，用于驱动 UI 图标与任务标记。
- `RunConsequence(MenuContext)`：执行该选项的 Consequence 委托，并通过 `menuContext.OnConsequence(this)` 通知上下文；被 `GameMenu.RunMenuOptionConsequence` 在玩家点击时调用。

### 回调参数（MenuCallbackArgs）

- `MenuContext` / `MapState`：当前菜单上下文与地图状态，是访问 `Campaign.Current`、当前据点、打开子界面（`OpenTownManagement()` 等）的入口；几乎每个 Condition/Consequence 都从这里取数据。
- `IsEnabled` (`bool`)：Condition 委托里把它设为 `false` 可禁用但不隐藏该选项。
- `optionLeaveType` / `OptionQuestData`：Condition 委托里赋值，回写到 `GameMenuOption`，驱动 UI 表现。
- `Tooltip` / `Text` / `MenuTitle`：可在回调里改写选项提示、文本与菜单标题（例如根据 `CurrentRepeatableObject` 动态生成名称）。
- `DeltaTime`：仅 wait 菜单的 `OnTick` 委托携带，表示距上次 tick 的时间差，用于推进 `Progress`。

### 菜单管理器（GameMenuManager）

- `AddGameMenu(GameMenu)` / `GetGameMenu(string)`：登记与按 `StringId` 取回菜单；`CampaignGameStarter.GetPresumedGameMenu` 在 `AddGameMenu`/`AddGameMenuOption` 时内部调用它们。
- `SetNextMenu(string)` / `NextMenu`：设置“下一个要打开的菜单”ID 并由菜单状态机消费；玩家进入据点时，`MapState` 先调用它再进入菜单模式。
- `RefreshMenuOptionConditions(MenuContext)` / `RefreshMenuOptions(MenuContext)`：重新对当前菜单所有选项的 Condition 求值（前者遍历虚拟选项、后者触发 `Handler.OnMenuRefresh()`），是选项可见性/可用性更新的真正驱动点。
- `RemoveRelatedGameMenus(object)` / `RemoveRelatedGameMenuOptions(object)`：按 `RelatedObject` 批量注销菜单或选项，卸载模块时清理用。

## 真实示例

### 示例 A：在 CampaignBehavior 中注册自定义菜单与选项

下面的 `CampaignBehaviorBase` 在战役初始化阶段新增一个酒馆菜单，并给它加一个“喝一杯麦酒”的选项：选项被选中时通过 `GiveGoldAction` 扣金币、用 `InformationManager` 提示玩家。注意注册必须写在 `InitializeGameStarter` 里。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class TavernMenuBehavior : CampaignBehaviorBase
{
    public override void InitializeGameStarter(CampaignGameStarter starterObject)
    {
        starterObject.AddGameMenu(
            "my_tavern_menu",
            "你走进一家烟雾缭绕的酒馆。",
            args => { },
            GameMenu.MenuOverlayType.SettlementWithCharacters);

        starterObject.AddGameMenuOption(
            "my_tavern_menu",
            "my_tavern_drink",
            "喝一杯麦酒 (-20 第纳尔)",
            args => Hero.MainHero.Gold >= 20,
            args =>
            {
                Hero hero = Hero.MainHero;
                GiveGoldAction.ApplyBetweenCharacters(hero, null, -20);
                InformationManager.DisplayMessage(new TextObject("你灌下一杯麦酒，精神焕发。"));
                GameMenu.SwitchToMenu("my_tavern_menu");
            });
    }

    public override void RegisterEvents() { }
}
```

### 示例 B：用 *Action 安全改变世界状态（而非直接改字段）

在选项的 Consequence 里，永远通过 `*Action` 修改持久化状态。下面给村庄菜单加一个“资助村庄”的选项：把金币从主角转给据点，再用 `ChangeKingdomAction` 让 clan 脱离当前王国——两者都走正式 Action，确保事件广播与存盘一致，绝不直接写 `settlement.Gold` 或 `clan.Kingdom` 字段。

```csharp
starterObject.AddGameMenuOption(
    "village",
    "fund_the_village",
    "资助这个村庄",
    args => Settlement.CurrentSettlement != null && Hero.MainHero.Gold >= 100,
    args =>
    {
        Settlement village = Settlement.CurrentSettlement;
        Hero leader = Hero.MainHero;

        // 正规途径改金币：从角色转给据点
        GiveGoldAction.ApplyForCharacterToSettlement(leader, village, -100);

        // 正规途径改阵营关系：让 clan 离开当前王国
        if (leader.Clan.Kingdom != null)
        {
            ChangeKingdomAction.ApplyByLeaveKingdom(leader.Clan);
        }
    },
    isRepeatable: false);
```

## 导航

↑ 父级：[campaign-ext 索引](../)

↔ 同级：
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CampaignGameStarter](../CampaignGameStarter)
- [GameMenuManager](../GameMenuManager)

相关：
- 架构概览：[模块系统](../../../architecture/module-system)
- 存盘与生命周期：[存盘系统](../../../architecture/save-system)
- 行为基类规范：[SDK 概览](../../../architecture/sdk-overview)
