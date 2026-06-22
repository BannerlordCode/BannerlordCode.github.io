<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs`

## Overview

`GameMenuManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextGameMenuId` | `public string NextGameMenuId { get; }` |
| `NextMenu` | `public GameMenu NextMenu { get; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of GameMenuManager (Manager)
GameMenuManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)