---
title: "NavigationScopeTargeter"
description: "NavigationScopeTargeter：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 39 个（方法 0、属性 38、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs。"
---
# NavigationScopeTargeter

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class NavigationScopeTargeter : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs`

## 概述

NavigationScopeTargeter 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs。它是一个 public 类，实现/继承 Widget，继承链为 NavigationScopeTargeter → Widget。public/protected 成员共 39 个：38 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NavigationScopeTargeter 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 NavigationScopeTargeter → Widget。成员构成以属性为主（属性 38/39，方法 0/39），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationScopeTargeter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NavigationScope` | `public GamepadNavigationScope NavigationScope` | 属性 |
| `NavigationScopeTargeter` | `public NavigationScopeTargeter(UIContext context) : base(context)` | 构造函数 |
| `ScopeID` | `public string ScopeID` | 属性 |
| `ScopeMovements` | `public GamepadNavigationTypes ScopeMovements` | 属性 |
| `AlternateScopeMovements` | `public GamepadNavigationTypes AlternateScopeMovements` | 属性 |
| `AlternateMovementStepSize` | `public int AlternateMovementStepSize` | 属性 |
| `HasCircularMovement` | `public bool HasCircularMovement` | 属性 |
| `DoNotAutomaticallyFindChildren` | `public bool DoNotAutomaticallyFindChildren` | 属性 |
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
| `ExtendDiscoveryAreaTop` | `public float ExtendDiscoveryAreaTop` | 属性 |
| `ExtendDiscoveryAreaRight` | `public float ExtendDiscoveryAreaRight` | 属性 |
| `ExtendDiscoveryAreaBottom` | `public float ExtendDiscoveryAreaBottom` | 属性 |
| `ExtendDiscoveryAreaLeft` | `public float ExtendDiscoveryAreaLeft` | 属性 |
| `ExtendChildrenCursorAreaLeft` | `public float ExtendChildrenCursorAreaLeft` | 属性 |
| `ExtendChildrenCursorAreaRight` | `public float ExtendChildrenCursorAreaRight` | 属性 |
| `ExtendChildrenCursorAreaTop` | `public float ExtendChildrenCursorAreaTop` | 属性 |
| `ExtendChildrenCursorAreaBottom` | `public float ExtendChildrenCursorAreaBottom` | 属性 |
| `DiscoveryAreaOffsetX` | `public float DiscoveryAreaOffsetX` | 属性 |
| `DiscoveryAreaOffsetY` | `public float DiscoveryAreaOffsetY` | 属性 |
| `IsScopeEnabled` | `public bool IsScopeEnabled` | 属性 |
| `IsScopeDisabled` | `public bool IsScopeDisabled` | 属性 |
| `UpNavigationScope` | `public string UpNavigationScope` | 属性 |
| `RightNavigationScope` | `public string RightNavigationScope` | 属性 |
| `DownNavigationScope` | `public string DownNavigationScope` | 属性 |
| `LeftNavigationScope` | `public string LeftNavigationScope` | 属性 |
| `UpNavigationScopeTargeter` | `public NavigationScopeTargeter UpNavigationScopeTargeter` | 属性 |
| `RightNavigationScopeTargeter` | `public NavigationScopeTargeter RightNavigationScopeTargeter` | 属性 |
| `DownNavigationScopeTargeter` | `public NavigationScopeTargeter DownNavigationScopeTargeter` | 属性 |
| `LeftNavigationScopeTargeter` | `public NavigationScopeTargeter LeftNavigationScopeTargeter` | 属性 |
| `ScopeParent` | `public Widget ScopeParent` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
