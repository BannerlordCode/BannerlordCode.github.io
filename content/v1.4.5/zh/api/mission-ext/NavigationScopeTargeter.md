---
title: "NavigationScopeTargeter"
description: "NavigationScopeTargeter 的自动生成类参考。"
---
# NavigationScopeTargeter

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigationScopeTargeter : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs`

## 概述

`NavigationScopeTargeter` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NavigationScope` | `public GamepadNavigationScope NavigationScope { get; }` |
| `ScopeID` | `public string ScopeID { get; set; }` |
| `ScopeMovements` | `public GamepadNavigationTypes ScopeMovements { get; set; }` |
| `AlternateScopeMovements` | `public GamepadNavigationTypes AlternateScopeMovements { get; set; }` |
| `AlternateMovementStepSize` | `public int AlternateMovementStepSize { get; set; }` |
| `HasCircularMovement` | `public bool HasCircularMovement { get; set; }` |
| `DoNotAutomaticallyFindChildren` | `public bool DoNotAutomaticallyFindChildren { get; set; }` |
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
| `ExtendDiscoveryAreaTop` | `public float ExtendDiscoveryAreaTop { get; set; }` |
| `ExtendDiscoveryAreaRight` | `public float ExtendDiscoveryAreaRight { get; set; }` |
| `ExtendDiscoveryAreaBottom` | `public float ExtendDiscoveryAreaBottom { get; set; }` |
| `ExtendDiscoveryAreaLeft` | `public float ExtendDiscoveryAreaLeft { get; set; }` |
| `ExtendChildrenCursorAreaLeft` | `public float ExtendChildrenCursorAreaLeft { get; set; }` |
| `ExtendChildrenCursorAreaRight` | `public float ExtendChildrenCursorAreaRight { get; set; }` |
| `ExtendChildrenCursorAreaTop` | `public float ExtendChildrenCursorAreaTop { get; set; }` |
| `ExtendChildrenCursorAreaBottom` | `public float ExtendChildrenCursorAreaBottom { get; set; }` |
| `DiscoveryAreaOffsetX` | `public float DiscoveryAreaOffsetX { get; set; }` |
| `DiscoveryAreaOffsetY` | `public float DiscoveryAreaOffsetY { get; set; }` |
| `IsScopeEnabled` | `public bool IsScopeEnabled { get; set; }` |
| `IsScopeDisabled` | `public bool IsScopeDisabled { get; set; }` |
| `UpNavigationScope` | `public string UpNavigationScope { get; set; }` |
| `RightNavigationScope` | `public string RightNavigationScope { get; set; }` |
| `DownNavigationScope` | `public string DownNavigationScope { get; set; }` |
| `LeftNavigationScope` | `public string LeftNavigationScope { get; set; }` |
| `UpNavigationScopeTargeter` | `public NavigationScopeTargeter UpNavigationScopeTargeter { get; set; }` |
| `RightNavigationScopeTargeter` | `public NavigationScopeTargeter RightNavigationScopeTargeter { get; set; }` |
| `DownNavigationScopeTargeter` | `public NavigationScopeTargeter DownNavigationScopeTargeter { get; set; }` |
| `LeftNavigationScopeTargeter` | `public NavigationScopeTargeter LeftNavigationScopeTargeter { get; set; }` |
| `ScopeParent` | `public Widget ScopeParent { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
NavigationScopeTargeter instance = ...;
```

## 参见

- [本区域目录](../)