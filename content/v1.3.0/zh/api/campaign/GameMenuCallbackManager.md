---
title: "GameMenuCallbackManager"
description: "GameMenuCallbackManager 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 在 game load 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuCallbackManager 实例
GameMenuCallbackManager gameMenuCallbackManager = ...;
gameMenuCallbackManager.OnGameLoad();
```

### InitializeState
`public void InitializeState(string menuId, MenuContext state)`

**用途 / Purpose:** **用途 / Purpose:** 为 state 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GameMenuCallbackManager 实例
GameMenuCallbackManager gameMenuCallbackManager = ...;
gameMenuCallbackManager.InitializeState("example", state);
```

### OnConsequence
`public void OnConsequence(string menuId, GameMenuOption gameMenuOption, MenuContext state)`

**用途 / Purpose:** **用途 / Purpose:** 在 consequence 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GameMenuCallbackManager 实例
GameMenuCallbackManager gameMenuCallbackManager = ...;
gameMenuCallbackManager.OnConsequence("example", gameMenuOption, state);
```

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 menu option tooltip 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuCallbackManager 实例
GameMenuCallbackManager gameMenuCallbackManager = ...;
var result = gameMenuCallbackManager.GetMenuOptionTooltip(menuContext, 0);
```

### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 virtual menu option tooltip 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuCallbackManager 实例
GameMenuCallbackManager gameMenuCallbackManager = ...;
var result = gameMenuCallbackManager.GetVirtualMenuOptionTooltip(menuContext, 0);
```

### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 virtual menu option text 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuCallbackManager 实例
GameMenuCallbackManager gameMenuCallbackManager = ...;
var result = gameMenuCallbackManager.GetVirtualMenuOptionText(menuContext, 0);
```

### GetMenuOptionText
`public TextObject GetMenuOptionText(MenuContext menuContext, int menuItemNumber)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 menu option text 的结果。

```csharp
// 先通过子系统 API 拿到 GameMenuCallbackManager 实例
GameMenuCallbackManager gameMenuCallbackManager = ...;
var result = gameMenuCallbackManager.GetMenuOptionText(menuContext, 0);
```

## 使用示例

```csharp
var manager = GameMenuCallbackManager.Current;
```

## 参见

- [本区域目录](../)