---
title: "GamepadNavigationScope"
description: "GamepadNavigationScope 的自动生成类参考。"
---
# GamepadNavigationScope

**Namespace:** TaleWorlds.GauntletUI.GamepadNavigation
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GamepadNavigationScope`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs`

## 概述

`GamepadNavigationScope` 位于 `TaleWorlds.GauntletUI.GamepadNavigation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.GamepadNavigation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ScopeID` | `public string ScopeID { get; }` |
| `IsActiveScope` | `public bool IsActiveScope { get; }` |
| `DoNotAutomaticallyFindChildren` | `public bool DoNotAutomaticallyFindChildren { get; set; }` |
| `ScopeMovements` | `public GamepadNavigationTypes ScopeMovements { get; set; }` |
| `AlternateScopeMovements` | `public GamepadNavigationTypes AlternateScopeMovements { get; set; }` |
| `AlternateMovementStepSize` | `public int AlternateMovementStepSize { get; set; }` |
| `HasCircularMovement` | `public bool HasCircularMovement { get; set; }` |
| `NavigatableWidgets` | `public ReadOnlyCollection<Widget> NavigatableWidgets { get; set; }` |
| `ParentWidget` | `public Widget ParentWidget { get; set; }` |
| `LatestNavigationElementIndex` | `public int LatestNavigationElementIndex { get; set; }` |
| `DoNotAutoGainNavigationOnInit` | `public bool DoNotAutoGainNavigationOnInit { get; set; }` |
| `ForceGainNavigationBasedOnDirection` | `public bool ForceGainNavigationBasedOnDirection { get; set; }` |
| `ForceGainNavigationOnClosestChild` | `public bool ForceGainNavigationOnClosestChild { get; set; }` |
| `ForceGainNavigationOnFirstChild` | `public bool ForceGainNavigationOnFirstChild { get; set; }` |
| `NavigateFromScopeEdges` | `public bool NavigateFromScopeEdges { get; set; }` |
| `UseDiscoveryAreaAsScopeEdges` | `public bool UseDiscoveryAreaAsScopeEdges { get; set; }` |
| `DoNotAutoNavigateAfterSort` | `public bool DoNotAutoNavigateAfterSort { get; set; }` |
| `FollowMobileTargets` | `public bool FollowMobileTargets { get; set; }` |
| `DoNotAutoCollectChildScopes` | `public bool DoNotAutoCollectChildScopes { get; set; }` |
| `IsDefaultNavigationScope` | `public bool IsDefaultNavigationScope { get; set; }` |
| `ExtendDiscoveryAreaRight` | `public float ExtendDiscoveryAreaRight { get; set; }` |
| `ExtendDiscoveryAreaTop` | `public float ExtendDiscoveryAreaTop { get; set; }` |
| `ExtendDiscoveryAreaBottom` | `public float ExtendDiscoveryAreaBottom { get; set; }` |
| `ExtendDiscoveryAreaLeft` | `public float ExtendDiscoveryAreaLeft { get; set; }` |
| `ExtendChildrenCursorAreaLeft` | `public float ExtendChildrenCursorAreaLeft { get; set; }` |
| `ExtendChildrenCursorAreaRight` | `public float ExtendChildrenCursorAreaRight { get; set; }` |
| `ExtendChildrenCursorAreaTop` | `public float ExtendChildrenCursorAreaTop { get; set; }` |
| `ExtendChildrenCursorAreaBottom` | `public float ExtendChildrenCursorAreaBottom { get; set; }` |
| `DiscoveryAreaOffsetX` | `public float DiscoveryAreaOffsetX { get; set; }` |
| `DiscoveryAreaOffsetY` | `public float DiscoveryAreaOffsetY { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `UpNavigationScopeID` | `public string UpNavigationScopeID { get; set; }` |
| `RightNavigationScopeID` | `public string RightNavigationScopeID { get; set; }` |
| `DownNavigationScopeID` | `public string DownNavigationScopeID { get; set; }` |
| `LeftNavigationScopeID` | `public string LeftNavigationScopeID { get; set; }` |
| `UpNavigationScope` | `public GamepadNavigationScope UpNavigationScope { get; set; }` |
| `RightNavigationScope` | `public GamepadNavigationScope RightNavigationScope { get; set; }` |
| `DownNavigationScope` | `public GamepadNavigationScope DownNavigationScope { get; set; }` |
| `LeftNavigationScope` | `public GamepadNavigationScope LeftNavigationScope { get; set; }` |

## 主要方法

### AddWidgetAtIndex
`public void AddWidgetAtIndex(Widget widget, int index)`

**用途 / Purpose:** 将 widget at index 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationScope 实例
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.AddWidgetAtIndex(widget, 0);
```

### AddWidget
`public void AddWidget(Widget widget)`

**用途 / Purpose:** 将 widget 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationScope 实例
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.AddWidget(widget);
```

### RemoveWidget
`public void RemoveWidget(Widget widget)`

**用途 / Purpose:** 从当前容器或状态中移除 widget。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationScope 实例
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.RemoveWidget(widget);
```

### SetParentScope
`public void SetParentScope(GamepadNavigationScope scope)`

**用途 / Purpose:** 为 parent scope 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationScope 实例
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.SetParentScope(scope);
```

### ClearNavigatableWidgets
`public void ClearNavigatableWidgets()`

**用途 / Purpose:** 清空当前对象中的navigatable widgets。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationScope 实例
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.ClearNavigatableWidgets();
```

### Compare
`public int Compare(Widget x, Widget y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 GamepadNavigationScope 实例
GamepadNavigationScope gamepadNavigationScope = ...;
var result = gamepadNavigationScope.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GamepadNavigationScope gamepadNavigationScope = ...;
gamepadNavigationScope.AddWidgetAtIndex(widget, 0);
```

## 参见

- [本区域目录](../)