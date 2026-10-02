---
title: "GamepadNavigationScope"
description: "GamepadNavigationScope：TaleWorlds.GauntletUI.GamepadNavigation 的 public 类；公开成员 46 个（方法 5、属性 40、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GamepadNavigationScope

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GamepadNavigationScope`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

GamepadNavigationScope 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs。它是一个 public 类，继承链为 GamepadNavigationScope。public/protected 成员共 46 个：5 方法、40 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GamepadNavigationScope 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.GamepadNavigation`，继承链 GamepadNavigationScope。成员构成以属性为主（属性 40/46，方法 5/46），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationScope.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScopeID` | `public string ScopeID` | 属性 |
| `IsActiveScope` | `public bool IsActiveScope` | 属性 |
| `DoNotAutomaticallyFindChildren` | `public bool DoNotAutomaticallyFindChildren` | 属性 |
| `ScopeMovements` | `public GamepadNavigationTypes ScopeMovements` | 属性 |
| `AlternateScopeMovements` | `public GamepadNavigationTypes AlternateScopeMovements` | 属性 |
| `AlternateMovementStepSize` | `public int AlternateMovementStepSize` | 属性 |
| `HasCircularMovement` | `public bool HasCircularMovement` | 属性 |
| `ReadOnlyCollection` | `public ReadOnlyCollection<Widget>NavigatableWidgets` | 属性 |
| `ParentWidget` | `public Widget ParentWidget` | 属性 |
| `LatestNavigationElementIndex` | `public int LatestNavigationElementIndex` | 属性 |
| `DoNotAutoGainNavigationOnInit` | `public bool DoNotAutoGainNavigationOnInit` | 属性 |
| `ForceGainNavigationBasedOnDirection` | `public bool ForceGainNavigationBasedOnDirection` | 属性 |
| `ForceGainNavigationOnClosestChild` | `public bool ForceGainNavigationOnClosestChild` | 属性 |
| `ForceGainNavigationOnFirstChild` | `public bool ForceGainNavigationOnFirstChild` | 属性 |
| `NavigateFromScopeEdges` | `public bool NavigateFromScopeEdges` | 属性 |
| `UseDiscoveryAreaAsScopeEdges` | `public bool UseDiscoveryAreaAsScopeEdges` | 属性 |
| `DoNotAutoNavigateAfterSort` | `public bool DoNotAutoNavigateAfterSort` | 属性 |
| `FollowMobileTargets` | `public bool FollowMobileTargets` | 属性 |
| `DoNotAutoCollectChildScopes` | `public bool DoNotAutoCollectChildScopes` | 属性 |
| `IsDefaultNavigationScope` | `public bool IsDefaultNavigationScope` | 属性 |
| `ExtendDiscoveryAreaRight` | `public float ExtendDiscoveryAreaRight` | 属性 |
| `ExtendDiscoveryAreaTop` | `public float ExtendDiscoveryAreaTop` | 属性 |
| `ExtendDiscoveryAreaBottom` | `public float ExtendDiscoveryAreaBottom` | 属性 |
| `ExtendDiscoveryAreaLeft` | `public float ExtendDiscoveryAreaLeft` | 属性 |
| `ExtendChildrenCursorAreaLeft` | `public float ExtendChildrenCursorAreaLeft` | 属性 |
| `ExtendChildrenCursorAreaRight` | `public float ExtendChildrenCursorAreaRight` | 属性 |
| `ExtendChildrenCursorAreaTop` | `public float ExtendChildrenCursorAreaTop` | 属性 |
| `ExtendChildrenCursorAreaBottom` | `public float ExtendChildrenCursorAreaBottom` | 属性 |
| `DiscoveryAreaOffsetX` | `public float DiscoveryAreaOffsetX` | 属性 |
| `DiscoveryAreaOffsetY` | `public float DiscoveryAreaOffsetY` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `UpNavigationScopeID` | `public string UpNavigationScopeID` | 属性 |
| `RightNavigationScopeID` | `public string RightNavigationScopeID` | 属性 |
| `DownNavigationScopeID` | `public string DownNavigationScopeID` | 属性 |
| `LeftNavigationScopeID` | `public string LeftNavigationScopeID` | 属性 |
| `UpNavigationScope` | `public GamepadNavigationScope UpNavigationScope` | 属性 |
| `RightNavigationScope` | `public GamepadNavigationScope RightNavigationScope` | 属性 |
| `DownNavigationScope` | `public GamepadNavigationScope DownNavigationScope` | 属性 |
| `LeftNavigationScope` | `public GamepadNavigationScope LeftNavigationScope` | 属性 |
| `GamepadNavigationScope` | `public GamepadNavigationScope()` | 构造函数 |
| `AddWidgetAtIndex` | `public void AddWidgetAtIndex(Widget widget, int index)` | 方法 |
| `AddWidget` | `public void AddWidget(Widget widget)` | 方法 |
| `RemoveWidget` | `public void RemoveWidget(Widget widget)` | 方法 |
| `SetParentScope` | `public void SetParentScope(GamepadNavigationScope scope)` | 方法 |
| `ClearNavigatableWidgets` | `public void ClearNavigatableWidgets()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 GamepadNavigationForcedScopeCollection](../GamepadNavigationForcedScopeCollection/)
- [同命名空间 GamepadNavigationTypes](../GamepadNavigationTypes/)
- [同命名空间 GauntletGamepadNavigationManager](../GauntletGamepadNavigationManager/)
