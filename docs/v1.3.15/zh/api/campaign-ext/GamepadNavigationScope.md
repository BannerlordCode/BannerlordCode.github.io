<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GamepadNavigationScope`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadNavigationScope

**命名空间:** TaleWorlds.GauntletUI.GamepadNavigation
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GamepadNavigationScope` 是 `TaleWorlds.GauntletUI.GamepadNavigation` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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


## 主要方法

### AddWidgetAtIndex

```csharp
public void AddWidgetAtIndex(Widget widget, int index)
```

### AddWidget

```csharp
public void AddWidget(Widget widget)
```

### RemoveWidget

```csharp
public void RemoveWidget(Widget widget)
```

### SetParentScope

```csharp
public void SetParentScope(GamepadNavigationScope scope)
```

### ClearNavigatableWidgets

```csharp
public void ClearNavigatableWidgets()
```

### Compare

```csharp
public int Compare(Widget x, Widget y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)