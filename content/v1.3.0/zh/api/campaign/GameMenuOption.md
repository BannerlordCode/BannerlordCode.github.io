---
title: "GameMenuOption"
description: "GameMenuOption 的自动生成类参考。"
---
# GameMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOption`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuOption.cs`

## 概述

`GameMenuOption` 是大地图（campaign map）上一个菜单条目的完整描述：一行文字、一个可用性判定、一个点击后的后果。它是 `TaleWorlds.CampaignSystem.GameMenus.GameMenuOption`（`GameMenuOption.cs:9`），不是抽象基类也不是接口，而是一个具体的“值 + 回调”载体。

它由 `GameMenu` 拥有并创建：`CampaignGameStarter.AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`（`CampaignGameStarter.cs:115`）会先 `GetPresumedGameMenu(menuId)` 找到菜单，再走内部的 `AddOption`（`GameMenu.cs:432`）把实例塞进菜单的 `_menuItems`；`CrimeCampaignBehavior` 就是这么批量挂选项的（`CrimeCampaignBehavior.cs:63`）。运行时 `GameMenu` 会反复询问它两个问题——`GetConditionsHold`（`GameMenu.cs:182`、`GameMenu.cs:184`）和 `RunConsequence`（`GameMenu.cs:307`）——所以一个选项的生命周期不是“建一次就完”，而是“每一帧被重新评估一次”。要反查某个菜单里已经存在的条目，用 `GameMenu.GetGameMenuOption(int)`（`GameMenu.cs:194`）按序号取。

它的两个回调不是属性而是**公开字段** `OnCondition`（`GameMenuOption.cs:127`）和 `OnConsequence`（`GameMenuOption.cs:130`），声明为嵌套委托 `OnConditionDelegate(MenuCallbackArgs args)`（`GameMenuOption.cs:134`，返回 `bool`）与 `OnConsequenceDelegate(MenuCallbackArgs args)`（`GameMenuOption.cs:138`，返回 `void`）。因为是字段，你可以在构造之后替换它们。

其余成员分两类。`OptionLeaveType`（`GameMenuOption.cs:19`）和 `OptionQuestData`（`GameMenuOption.cs:24`）是少数两个公开可写的属性；`Type`、`IdString`、`Text`、`Text2`、`Tooltip`、`IsLeave`、`IsRepeatable`、`IsEnabled`、`RelatedObject` 全是 `{ get; private set; }`（例如 `GameMenuOption.cs:14`、`GameMenuOption.cs:29`、`GameMenuOption.cs:59`、`GameMenuOption.cs:64`），只能在构造时定下。`LeaveType` 枚举（`GameMenuOption.cs:141`）枚举了 50 种点击后要走的流程（进任务、谈判、劫掠、投降……），`IssueQuestFlags`（`GameMenuOption.cs:239`）是一个 `[Flags]`，位掩码 `None`/`AvailableIssue`/`ActiveIssue`/`ActiveStoryQuest`/`TrackedIssue`/`TrackedStoryQuest` 用来在任务面板里高亮对应条目。

## 心智模型

把它当成**“每次刷新重算一次的行描述”**，而不是“一次性配置”。理解错了会直接导致一个很常见的 bug。

回调不是通过返回值往外传，而是通过**传入的 `MenuCallbackArgs` 对象回写**。`GetConditionsHold(Game, MenuContext)`（`GameMenuOption.cs:91`）新建一个 `MenuCallbackArgs(menuContext, this.Text)`，调用 `OnCondition`，然后把 args 上的四个值拷回自身：

```csharp
this.IsEnabled = menuCallbackArgs.IsEnabled;   // GameMenuOption.cs:97
this.Tooltip = menuCallbackArgs.Tooltip;
this.OptionQuestData = menuCallbackArgs.OptionQuestData;
this.OptionLeaveType = menuCallbackArgs.optionLeaveType;
```

四个出参在 `MenuCallbackArgs` 上的默认位置分别是 `IsEnabled = true`（`MenuCallbackArgs.cs:46`）、`Tooltip`（`MenuCallbackArgs.cs:52`）、`OptionQuestData`（`MenuCallbackArgs.cs:55`）、`optionLeaveType`（`MenuCallbackArgs.cs:58`，注意它的字段名是**小写开头**，和 option 上那个大写开头的 `OptionLeaveType` 不是同一个东西）。

由此推出几条硬后果：

- **`SetEnable` 会被下一次刷新覆盖。** `SetEnable(bool)`（`GameMenuOption.cs:118`）就是一句 `this.IsEnabled = isEnable;`，但下一次 `GetConditionsHold` 跑完会用 `menuCallbackArgs.IsEnabled` 重写它（`GameMenuOption.cs:97`）。如果你在菜单打开时调 `SetEnable(false)`，下一帧这个选项就又变回可点了，除非你的 `OnCondition` 回调自己也把 `args.IsEnabled` 置成 `false`。正确做法是在回调里写 `args.IsEnabled = false`，而不是在外面调 `SetEnable`。
- **`OnCondition` 为 `null` 时 `GetConditionsHold` 直接返回 `true`**（`GameMenuOption.cs:103`），并且完全不碰 `IsEnabled`/`Tooltip`。所以一个没有条件回调的选项永远可点，而且它的 `Tooltip` 会一直是 `null`（构造时就是 `null`，`GameMenuOption.cs:80`）。
- **`RunConsequence` 总会让菜单层收到通知。** 即使 `OnConsequence` 是 `null`，`menuContext.OnConsequence(this)` 也会无条件执行（`GameMenuOption.cs:114`）。菜单靠这一次回调来真正关掉或推进菜单；如果你把 `OnConsequence` 换成只做副作用而不转交给 `MenuContext` 的版本，菜单会卡在原地。
- **`OptionQuestData` 和 `OptionLeaveType` 每次刷新都会被重置。** 同样因为 `GameMenuOption.cs:97` 起的四行回写，你在菜单打开后直接给这两个属性赋的值会在下一次刷新时被 `MenuCallbackArgs` 的默认值覆盖。
- **`Type` 和 `IdString` 不可变且被其他地方当作键用。** 两者都是 private set（`GameMenuOption.cs:14`、`GameMenuOption.cs:29`），`IdString` 是存档和跳转时的稳定标识。更要紧的是：`MenuAndOptionType`（`GameMenu.cs:487`）总共只有四个成员（`RegularMenuOption` 加上三个等待菜单用的），而内部 `AddOption` 永远传 `RegularMenuOption`（`GameMenu.cs:435`），所以从 mod 加进去的条目拿不到第二种 `Type`；`Text2` 同理，内部 `AddOption` 把同一个 `TextObject` 同时当 `text` 和 `text2` 传（`GameMenu.cs:435`）。想显示不同文字，就得自己构造 `GameMenuOption`（公开构造函数在 `GameMenuOption.cs:75`），因为 `AddGameMenuOption` 只收一个 `optionText` 字符串。
- **`GameMenuOption` 有一个 `internal` 的无参构造函数**（`GameMenuOption.cs:67`），供 XML 绑定使用。mod 从外部只能用九参数的公开构造函数（`GameMenuOption.cs:75`），里面已经包含了 condition 和 consequence 两个委托。

## 怎么用

### 怎么拿到它

两条路。**注册**：在 `CampaignBehaviors` 里向 `ICampaignGameStarter` 调 `AddGameMenuOption`（`CampaignGameStarter.cs:115`），第一个参数是菜单 id（比如 `"town_inside_criminal"`）。**读取**：菜单已经打开时，用 `Campaign.Current.GameMenuManager.GetGameMenu(menuId)` 拿到 `GameMenu`，再用 `GetGameMenuOption(index)`（`GameMenu.cs:194`）取到具体实例去改它的公开字段 `OnCondition`/`OnConsequence`。

### 典型用法

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;
using TaleWorlds.Localization;

public class MyMilitiaMenuOption : CampaignBehaviorBase
{
    private Settlement _settlement;

    public override void RegisterEvents()
    {
        CampaignEvents.OnSessionLaunchedEvent.AddListenerOn<OnSessionLaunchedEvent>(OnSessionLaunched);
    }

    public override void SyncData()
    {
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        starter.AddGameMenuOption(
            "town_inside",
            "my_militia_recruit",
            "{=*}Recruit local militia",
            OnCondition,
            OnConsequence,
            false,   // isLeave
            -1,      // index
            true,    // isRepeatable
            null);   // relatedObject
    }

    private bool OnCondition(MenuCallbackArgs args)
    {
        // 可用性、Tooltip、任务高亮全部通过 args 回写，不要在外面调 SetEnable。
        _settlement = Settlement.FindFirst(s => s.IsFortification);
        args.IsEnabled = _settlement != null && !_settlement.IsUnderSiege;
        args.Tooltip = new TextObject("{=*}No free fortress nearby.");
        args.OptionQuestData = GameMenuOption.IssueQuestFlags.None;
        return args.IsEnabled;
    }

    private void OnConsequence(MenuCallbackArgs args)
    {
        // optionLeaveType 告诉 GameMenu 点击后走哪条流程（LeaveType.Raid / Recruit / ...）。
        args.optionLeaveType = GameMenuOption.LeaveType.Recruit;
        Hero.MainHero.ChangeHeroGold(-50);
    }
}
```

### 最容易踩的坑

用 `SetEnable(false)` 代替在 `OnCondition` 里写 `args.IsEnabled = false`。`SetEnable` 只改当帧的值（`GameMenuOption.cs:118`），而下一次 `GetConditionsHold` 会用 `menuCallbackArgs.IsEnabled` 无条件覆盖回来（`GameMenuOption.cs:97`）。结果就是你看到选项在菜单里“灰了一帧又亮了”，而且如果你的回调仍然返回 `true`，它根本不会被禁用。所有可用性判断必须写在条件回调内部。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `OptionLeaveType` | `public GameMenuOption.LeaveType OptionLeaveType { get; }` |
| `OptionQuestData` | `public GameMenuOption.IssueQuestFlags OptionQuestData { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `Text2` | `public TextObject Text2 { get; }` |
| `Tooltip` | `public TextObject Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |

## 主要方法

### GetConditionsHold
`public bool GetConditionsHold(Game game, MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 conditions hold 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
var result = gameMenuOption.GetConditionsHold(game, menuContext);
```

### RunConsequence
`public void RunConsequence(MenuContext menuContext)`

**用途 / Purpose:** 调用 RunConsequence 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
gameMenuOption.RunConsequence(menuContext);
```

### SetEnable
`public void SetEnable(bool isEnable)`

**用途 / Purpose:** 为 enable 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
gameMenuOption.SetEnable(false);
```

### OnConditionDelegate
`public delegate bool OnConditionDelegate(MenuCallbackArgs args)`

**用途 / Purpose:** 在 condition delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
var result = gameMenuOption.OnConditionDelegate(args);
```

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

**用途 / Purpose:** 在 consequence delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuOption 实例
GameMenuOption gameMenuOption = ...;
gameMenuOption.OnConsequenceDelegate(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenuOption gameMenuOption = ...;
gameMenuOption.GetConditionsHold(game, menuContext);
```

## 参见

- [本区域目录](../)
- [GameMenu](../GameMenu)
- [MenuCallbackArgs](../MenuCallbackArgs)