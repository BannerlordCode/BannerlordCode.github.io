---
title: "GameMenuManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `next menu` 的值或状态。

### ExitToLast
`public void ExitToLast()`

**用途 / Purpose:** 处理 `exit to last` 相关逻辑。

### SetCurrentRepeatableIndex
`public void SetCurrentRepeatableIndex(MenuContext menuContext, int index)`

**用途 / Purpose:** 设置 `current repeatable index` 的值或状态。

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option conditions hold` 的当前值。

### RefreshMenuOptions
`public void RefreshMenuOptions(MenuContext menuContext)`

**用途 / Purpose:** 刷新 `menu options` 的显示或缓存。

### RefreshMenuOptionConditions
`public void RefreshMenuOptionConditions(MenuContext menuContext)`

**用途 / Purpose:** 刷新 `menu option conditions` 的显示或缓存。

### GetMenuOptionIdString
`public string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option id string` 的当前值。

### RunConsequencesOfMenuOption
`public void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 处理 `run consequences of menu option` 相关逻辑。

### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual menu option tooltip` 的当前值。

### GetMenuOverlayType
`public GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)`

**用途 / Purpose:** 获取 `menu overlay type` 的当前值。

### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual menu option text` 的当前值。

### GetVirtualGameMenuOption
`public GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual game menu option` 的当前值。

### GetVirtualMenuOptionText2
`public TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual menu option text2` 的当前值。

### GetVirtualMenuProgress
`public float GetVirtualMenuProgress(MenuContext menuContext)`

**用途 / Purpose:** 获取 `virtual menu progress` 的当前值。

### GetVirtualMenuAndOptionType
`public GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)`

**用途 / Purpose:** 获取 `virtual menu and option type` 的当前值。

### GetVirtualMenuIsWaitActive
`public bool GetVirtualMenuIsWaitActive(MenuContext menuContext)`

**用途 / Purpose:** 获取 `virtual menu is wait active` 的当前值。

### GetVirtualMenuTargetWaitHours
`public float GetVirtualMenuTargetWaitHours(MenuContext menuContext)`

**用途 / Purpose:** 获取 `virtual menu target wait hours` 的当前值。

### GetVirtualMenuOptionIsEnabled
`public bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual menu option is enabled` 的当前值。

### GetVirtualMenuOptionAmount
`public int GetVirtualMenuOptionAmount(MenuContext menuContext)`

**用途 / Purpose:** 获取 `virtual menu option amount` 的当前值。

### GetVirtualMenuOptionIsLeave
`public bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual menu option is leave` 的当前值。

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(MenuContext menuContext)`

**用途 / Purpose:** 获取 `leave menu option` 的当前值。

### GetVirtualMenuOptionConditionsHold
`public bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual menu option conditions hold` 的当前值。

### OnFrameTick
`public void OnFrameTick(MenuContext menuContext, float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### GetMenuText
`public TextObject GetMenuText(MenuContext menuContext)`

**用途 / Purpose:** 获取 `menu text` 的当前值。

### AddGameMenu
`public void AddGameMenu(GameMenu gameMenu)`

**用途 / Purpose:** 向当前集合/状态中添加 `game menu`。

### RemoveRelatedGameMenus
`public void RemoveRelatedGameMenus(object relatedObject)`

**用途 / Purpose:** 从当前集合/状态中移除 `related game menus`。

### RemoveRelatedGameMenuOptions
`public void RemoveRelatedGameMenuOptions(object relatedObject)`

**用途 / Purpose:** 从当前集合/状态中移除 `related game menu options`。

### GetGameMenu
`public GameMenu GetGameMenu(string menuId)`

**用途 / Purpose:** 获取 `game menu` 的当前值。

## 使用示例

```csharp
GameMenuManager example = GameMenuManager.NextGameMenuId;
```

## 参见

- [完整类目录](../catalog)