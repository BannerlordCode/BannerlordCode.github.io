---
title: "GameMenu"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenu`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenu

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenu`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs`

## 概述

`GameMenu` 位于 `TaleWorlds.CampaignSystem.GameMenus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameMenus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `StringId` | `public string StringId { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `MenuTitle` | `public TextObject MenuTitle { get; }` |
| `OverlayType` | `public GameMenu.MenuOverlayType OverlayType { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `MenuItemAmount` | `public int MenuItemAmount { get; }` |
| `MenuRepeatObjects` | `public List<object> MenuRepeatObjects { get; }` |
| `CurrentRepeatableObject` | `public object CurrentRepeatableObject { get; }` |
| `IsWaitMenu` | `public bool IsWaitMenu { get; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Progress` | `public float Progress { get; }` |
| `TargetWaitHours` | `public float TargetWaitHours { get; }` |
| `OnTick` | `public OnTickDelegate OnTick { get; }` |
| `OnCondition` | `public OnConditionDelegate OnCondition { get; }` |
| `OnConsequence` | `public OnConsequenceDelegate OnConsequence { get; }` |
| `CurrentRepeatableIndex` | `public int CurrentRepeatableIndex { get; set; }` |
| `MenuOptions` | `public IEnumerable<GameMenuOption> MenuOptions { get; }` |
| `AutoSelectFirst` | `public bool AutoSelectFirst { get; }` |

## 主要方法

### SetMenuRepeatObjects
`public void SetMenuRepeatObjects(IEnumerable<object> list)`

**用途 / Purpose:** 设置 `menu repeat objects` 的值或状态。

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(Game game, MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option conditions hold` 的当前值。

### GetMenuOptionText
`public TextObject GetMenuOptionText(int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option text` 的当前值。

### GetGameMenuOption
`public GameMenuOption GetGameMenuOption(int menuItemNumber)`

**用途 / Purpose:** 获取 `game menu option` 的当前值。

### GetMenuOptionText2
`public TextObject GetMenuOptionText2(int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option text2` 的当前值。

### GetMenuOptionIdString
`public string GetMenuOptionIdString(int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option id string` 的当前值。

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option tooltip` 的当前值。

### GetMenuOptionIsLeave
`public bool GetMenuOptionIsLeave(int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option is leave` 的当前值。

### SetProgressOfWaitingInMenu
`public void SetProgressOfWaitingInMenu(float progress)`

**用途 / Purpose:** 设置 `progress of waiting in menu` 的值或状态。

### SetTargetedWaitingTimeAndInitialProgress
`public void SetTargetedWaitingTimeAndInitialProgress(float targetedWaitingTime, float initialProgress)`

**用途 / Purpose:** 设置 `targeted waiting time and initial progress` 的值或状态。

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(Game game, MenuContext menuContext)`

**用途 / Purpose:** 获取 `leave menu option` 的当前值。

### RunOnTick
`public void RunOnTick(MenuContext menuContext, float dt)`

**用途 / Purpose:** 处理 `run on tick` 相关逻辑。

### RunWaitMenuCondition
`public bool RunWaitMenuCondition(MenuContext menuContext)`

**用途 / Purpose:** 处理 `run wait menu condition` 相关逻辑。

### RunWaitMenuConsequence
`public void RunWaitMenuConsequence(MenuContext menuContext)`

**用途 / Purpose:** 处理 `run wait menu consequence` 相关逻辑。

### RunMenuOptionConsequence
`public void RunMenuOptionConsequence(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 处理 `run menu option consequence` 相关逻辑。

### StartWait
`public void StartWait()`

**用途 / Purpose:** 处理 `start wait` 相关逻辑。

### EndWait
`public void EndWait()`

**用途 / Purpose:** 处理 `end wait` 相关逻辑。

### RunOnInit
`public void RunOnInit(Game game, MenuContext menuContext)`

**用途 / Purpose:** 处理 `run on init` 相关逻辑。

### PreInit
`public void PreInit(MenuContext menuContext)`

**用途 / Purpose:** 处理 `pre init` 相关逻辑。

### AfterInit
`public void AfterInit(MenuContext menuContext)`

**用途 / Purpose:** 处理 `after init` 相关逻辑。

### GetText
`public TextObject GetText()`

**用途 / Purpose:** 获取 `text` 的当前值。

### ActivateGameMenu
`public static void ActivateGameMenu(string menuId)`

**用途 / Purpose:** 处理 `activate game menu` 相关逻辑。

### SwitchToMenu
`public static void SwitchToMenu(string menuId)`

**用途 / Purpose:** 处理 `switch to menu` 相关逻辑。

### ExitToLast
`public static void ExitToLast()`

**用途 / Purpose:** 处理 `exit to last` 相关逻辑。

## 使用示例

```csharp
var value = new GameMenu();
value.SetMenuRepeatObjects(list);
```

## 参见

- [完整类目录](../catalog)