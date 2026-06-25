---
title: "GameMenuManager"
description: "GameMenuManager 的自动生成类参考。"
---
# GameMenuManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs`

## 概述

`GameMenuManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameMenuManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextGameMenuId` | `public string NextGameMenuId { get; }` |
| `NextMenu` | `public GameMenu NextMenu { get; }` |

## 主要方法

### SetNextMenu
`public void SetNextMenu(string name)`

**用途 / Purpose:** 为 next menu 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.SetNextMenu("example");
```

### ExitToLast
`public void ExitToLast()`

**用途 / Purpose:** 调用 ExitToLast 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.ExitToLast();
```

### SetCurrentRepeatableIndex
`public void SetCurrentRepeatableIndex(MenuContext menuContext, int index)`

**用途 / Purpose:** 为 current repeatable index 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.SetCurrentRepeatableIndex(menuContext, 0);
```

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 menu option conditions hold 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOptionConditionsHold(menuContext, 0);
```

### RefreshMenuOptions
`public void RefreshMenuOptions(MenuContext menuContext)`

**用途 / Purpose:** 使 menu options 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.RefreshMenuOptions(menuContext);
```

### RefreshMenuOptionConditions
`public void RefreshMenuOptionConditions(MenuContext menuContext)`

**用途 / Purpose:** 使 menu option conditions 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.RefreshMenuOptionConditions(menuContext);
```

### GetMenuOptionIdString
`public string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 读取并返回当前对象中 menu option id string 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOptionIdString(menuContext, 0);
```

### RunConsequencesOfMenuOption
`public void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 调用 RunConsequencesOfMenuOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.RunConsequencesOfMenuOption(menuContext, 0);
```

### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu option tooltip 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionTooltip(menuContext, 0);
```

### GetMenuOverlayType
`public GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 menu overlay type 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOverlayType(menuContext);
```

### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu option text 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionText(menuContext, 0);
```

### GetVirtualGameMenuOption
`public GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 读取并返回当前对象中 virtual game menu option 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualGameMenuOption(menuContext, 0);
```

### GetVirtualMenuOptionText2
`public TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu option text2 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionText2(menuContext, 0);
```

### GetVirtualMenuProgress
`public float GetVirtualMenuProgress(MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu progress 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuProgress(menuContext);
```

### GetVirtualMenuAndOptionType
`public GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu and option type 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuAndOptionType(menuContext);
```

### GetVirtualMenuIsWaitActive
`public bool GetVirtualMenuIsWaitActive(MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu is wait active 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuIsWaitActive(menuContext);
```

### GetVirtualMenuTargetWaitHours
`public float GetVirtualMenuTargetWaitHours(MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu target wait hours 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuTargetWaitHours(menuContext);
```

### GetVirtualMenuOptionIsEnabled
`public bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu option is enabled 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionIsEnabled(menuContext, 0);
```

### GetVirtualMenuOptionAmount
`public int GetVirtualMenuOptionAmount(MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu option amount 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionAmount(menuContext);
```

### GetVirtualMenuOptionIsLeave
`public bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu option is leave 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionIsLeave(menuContext, 0);
```

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 leave menu option 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetLeaveMenuOption(menuContext);
```

### GetVirtualMenuOptionConditionsHold
`public bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 读取并返回当前对象中 virtual menu option conditions hold 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionConditionsHold(menuContext, 0);
```

### OnFrameTick
`public void OnFrameTick(MenuContext menuContext, float dt)`

**用途 / Purpose:** 在 frame tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.OnFrameTick(menuContext, 0);
```

### GetMenuText
`public TextObject GetMenuText(MenuContext menuContext)`

**用途 / Purpose:** 读取并返回当前对象中 menu text 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuText(menuContext);
```

### AddGameMenu
`public void AddGameMenu(GameMenu gameMenu)`

**用途 / Purpose:** 将 game menu 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.AddGameMenu(gameMenu);
```

### RemoveRelatedGameMenus
`public void RemoveRelatedGameMenus(object relatedObject)`

**用途 / Purpose:** 从当前容器或状态中移除 related game menus。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.RemoveRelatedGameMenus(relatedObject);
```

### RemoveRelatedGameMenuOptions
`public void RemoveRelatedGameMenuOptions(object relatedObject)`

**用途 / Purpose:** 从当前容器或状态中移除 related game menu options。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
gameMenuManager.RemoveRelatedGameMenuOptions(relatedObject);
```

### GetGameMenu
`public GameMenu GetGameMenu(string menuId)`

**用途 / Purpose:** 读取并返回当前对象中 game menu 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuManager 实例
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetGameMenu("example");
```

## 使用示例

```csharp
var manager = GameMenuManager.Current;
```

## 参见

- [本区域目录](../)