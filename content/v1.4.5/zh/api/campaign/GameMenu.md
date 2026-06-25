---
title: "GameMenu"
description: "GameMenu 的自动生成类参考。"
---
# GameMenu

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenu`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/GameMenu.cs`

## 概述

`GameMenu` 位于 `TaleWorlds.CampaignSystem.GameMenus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameMenus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public MenuAndOptionType Type { get; }` |
| `StringId` | `public string StringId { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `MenuTitle` | `public TextObject MenuTitle { get; }` |
| `OverlayType` | `public MenuOverlayType OverlayType { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
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
| `CurrentRepeatableIndex` | `public int CurrentRepeatableIndex { get; }` |
| `AutoSelectFirst` | `public bool AutoSelectFirst { get; }` |

## 主要方法

### SetMenuRepeatObjects
`public void SetMenuRepeatObjects(IEnumerable<object> list)`

**用途 / Purpose:** 为 「menu repeat objects」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.SetMenuRepeatObjects(list);
```

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(Game game, MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 「menu option conditions hold」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionConditionsHold(game, menuContext, 0);
```

### GetMenuOptionText
`public TextObject GetMenuOptionText(int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 「menu option text」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionText(0);
```

### GetGameMenuOption
`public GameMenuOption GetGameMenuOption(int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 「game menu option」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetGameMenuOption(0);
```

### GetMenuOptionText2
`public TextObject GetMenuOptionText2(int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 「menu option text2」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionText2(0);
```

### GetMenuOptionIdString
`public string GetMenuOptionIdString(int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 「menu option id string」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionIdString(0);
```

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 「menu option tooltip」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionTooltip(0);
```

### GetMenuOptionIsLeave
`public bool GetMenuOptionIsLeave(int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 「menu option is leave」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionIsLeave(0);
```

### SetProgressOfWaitingInMenu
`public void SetProgressOfWaitingInMenu(float progress)`

**用途 / Purpose:** 为 「progress of waiting in menu」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.SetProgressOfWaitingInMenu(0);
```

### SetTargetedWaitingTimeAndInitialProgress
`public void SetTargetedWaitingTimeAndInitialProgress(float targetedWaitingTime, float initialProgress)`

**用途 / Purpose:** 为 「targeted waiting time and initial progress」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.SetTargetedWaitingTimeAndInitialProgress(0, 0);
```

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(Game game, MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 「leave menu option」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetLeaveMenuOption(game, menuContext);
```

### RunOnTick
`public void RunOnTick(MenuContext menuContext, float dt)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.RunOnTick(menuContext, 0);
```

### RunWaitMenuCondition
`public bool RunWaitMenuCondition(MenuContext menuContext)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.RunWaitMenuCondition(menuContext);
```

### RunWaitMenuConsequence
`public void RunWaitMenuConsequence(MenuContext menuContext)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.RunWaitMenuConsequence(menuContext);
```

### RunMenuOptionConsequence
`public void RunMenuOptionConsequence(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.RunMenuOptionConsequence(menuContext, 0);
```

### StartWait
`public void StartWait()`

**用途 / Purpose:** 启动「wait」流程或状态机。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.StartWait();
```

### EndWait
`public void EndWait()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.EndWait();
```

### RunOnInit
`public void RunOnInit(Game game, MenuContext menuContext)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.RunOnInit(game, menuContext);
```

### PreInit
`public void PreInit(MenuContext menuContext)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.PreInit(menuContext);
```

### AfterInit
`public void AfterInit(MenuContext menuContext)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
gameMenu.AfterInit(menuContext);
```

### GetText
`public TextObject GetText()`

**用途 / Purpose:** 读取并返回当前对象中 「text」 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenu 实例
GameMenu gameMenu = ...;
var result = gameMenu.GetText();
```

### ActivateGameMenu
`public static void ActivateGameMenu(string menuId)`

**用途 / Purpose:** 激活「game menu」对应的资源、状态或功能。

```csharp
// 静态调用，不需要实例
GameMenu.ActivateGameMenu("example");
```

### SwitchToMenu
`public static void SwitchToMenu(string menuId)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
GameMenu.SwitchToMenu("example");
```

### ExitToLast
`public static void ExitToLast()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
GameMenu.ExitToLast();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameMenu gameMenu = ...;
gameMenu.SetMenuRepeatObjects(list);
```

## 参见

- [本区域目录](../)