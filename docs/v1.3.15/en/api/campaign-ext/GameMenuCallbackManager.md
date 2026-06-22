<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuCallbackManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuCallbackManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuCallbackManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs`

## Overview

`GameMenuCallbackManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameMenuCallbackManager Instance { get; }` |

## Key Methods

### OnGameLoad
```csharp
public void OnGameLoad()
```

### InitializeState
```csharp
public void InitializeState(string menuId, MenuContext state)
```

### OnConsequence
```csharp
public void OnConsequence(string menuId, GameMenuOption gameMenuOption, MenuContext state)
```

### GetMenuOptionTooltip
```csharp
public TextObject GetMenuOptionTooltip(MenuContext menuContext, int menuItemNumber)
```

### GetVirtualMenuOptionTooltip
```csharp
public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)
```

### GetVirtualMenuOptionText
```csharp
public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)
```

### GetMenuOptionText
```csharp
public TextObject GetMenuOptionText(MenuContext menuContext, int menuItemNumber)
```

## Usage Example

```csharp
// Typical usage of GameMenuCallbackManager (Manager)
GameMenuCallbackManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)