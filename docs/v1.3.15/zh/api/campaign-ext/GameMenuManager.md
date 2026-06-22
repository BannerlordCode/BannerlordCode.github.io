<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs`

## 概述

`GameMenuManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextGameMenuId` | `public string NextGameMenuId { get; }` |
| `NextMenu` | `public GameMenu NextMenu { get; }` |

## 主要方法

### SetNextMenu
```csharp
public void SetNextMenu(string name)
```

### ExitToLast
```csharp
public void ExitToLast()
```

### SetCurrentRepeatableIndex
```csharp
public void SetCurrentRepeatableIndex(MenuContext menuContext, int index)
```

### GetMenuOptionConditionsHold
```csharp
public bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)
```

### RefreshMenuOptions
```csharp
public void RefreshMenuOptions(MenuContext menuContext)
```

### RefreshMenuOptionConditions
```csharp
public void RefreshMenuOptionConditions(MenuContext menuContext)
```

### GetMenuOptionIdString
```csharp
public string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)
```

### RunConsequencesOfMenuOption
```csharp
public void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)
```

### GetVirtualMenuOptionTooltip
```csharp
public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)
```

### GetMenuOverlayType
```csharp
public GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)
```

### GetVirtualMenuOptionText
```csharp
public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)
```

### GetVirtualGameMenuOption
```csharp
public GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)
```

### GetVirtualMenuOptionText2
```csharp
public TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)
```

### GetVirtualMenuProgress
```csharp
public float GetVirtualMenuProgress(MenuContext menuContext)
```

### GetVirtualMenuAndOptionType
```csharp
public GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)
```

### GetVirtualMenuIsWaitActive
```csharp
public bool GetVirtualMenuIsWaitActive(MenuContext menuContext)
```

### GetVirtualMenuTargetWaitHours
```csharp
public float GetVirtualMenuTargetWaitHours(MenuContext menuContext)
```

### GetVirtualMenuOptionIsEnabled
```csharp
public bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)
```

### GetVirtualMenuOptionAmount
```csharp
public int GetVirtualMenuOptionAmount(MenuContext menuContext)
```

### GetVirtualMenuOptionIsLeave
```csharp
public bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)
```

### GetLeaveMenuOption
```csharp
public GameMenuOption GetLeaveMenuOption(MenuContext menuContext)
```

### GetVirtualMenuOptionConditionsHold
```csharp
public bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)
```

### OnFrameTick
```csharp
public void OnFrameTick(MenuContext menuContext, float dt)
```

### GetMenuText
```csharp
public TextObject GetMenuText(MenuContext menuContext)
```

### AddGameMenu
```csharp
public void AddGameMenu(GameMenu gameMenu)
```

### RemoveRelatedGameMenus
```csharp
public void RemoveRelatedGameMenus(object relatedObject)
```

### RemoveRelatedGameMenuOptions
```csharp
public void RemoveRelatedGameMenuOptions(object relatedObject)
```

### GetGameMenu
```csharp
public GameMenu GetGameMenu(string menuId)
```

## 使用示例

```csharp
// GameMenuManager (Manager) 的典型用法
GameMenuManager.Current;
```

## 参见

- [完整类目录](../catalog)