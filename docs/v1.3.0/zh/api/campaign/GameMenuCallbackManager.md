<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuCallbackManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuCallbackManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuCallbackManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs`

## 概述

`GameMenuCallbackManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameMenuCallbackManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameMenuCallbackManager Instance { get; }` |

## 主要方法

### OnGameLoad
`public void OnGameLoad()`

**用途 / Purpose:** 当 `game load` 事件触发时调用此方法。

### InitializeState
`public void InitializeState(string menuId, MenuContext state)`

**用途 / Purpose:** 初始化 `state` 的状态、资源或绑定。

### OnConsequence
`public void OnConsequence(string menuId, GameMenuOption gameMenuOption, MenuContext state)`

**用途 / Purpose:** 当 `consequence` 事件触发时调用此方法。

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option tooltip` 的当前值。

### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual menu option tooltip` 的当前值。

### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** 获取 `virtual menu option text` 的当前值。

### GetMenuOptionText
`public TextObject GetMenuOptionText(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** 获取 `menu option text` 的当前值。

## 使用示例

```csharp
var manager = GameMenuCallbackManager.Current;
```

## 参见

- [完整类目录](../catalog)