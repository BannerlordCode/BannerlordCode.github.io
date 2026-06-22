<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuCallbackManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuCallbackManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuCallbackManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs`

## 概述

`GameMenuCallbackManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameMenuCallbackManager Instance { get; }` |

## 主要方法

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

## 使用示例

```csharp
// GameMenuCallbackManager (Manager) 的典型用法
GameMenuCallbackManager.Current;
```

## 参见

- [完整类目录](../catalog)