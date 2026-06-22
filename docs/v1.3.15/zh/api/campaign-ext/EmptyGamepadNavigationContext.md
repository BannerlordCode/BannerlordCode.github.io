<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EmptyGamepadNavigationContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EmptyGamepadNavigationContext

**命名空间:** (global)
**模块:** (global)
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EmptyGamepadNavigationContext` 是 `(global)` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### AddForcedScopeCollection

```csharp
public void AddForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)
```

### AddNavigationScope

```csharp
public void AddNavigationScope(GamepadNavigationScope scope, bool initialize)
```

### GainNavigationAfterFrames

```csharp
public void GainNavigationAfterFrames(int frameCount, Func<bool> predicate)
```

### GainNavigationAfterTime

```csharp
public void GainNavigationAfterTime(float seconds, Func<bool> predicate)
```

### OnFinalize

```csharp
public void OnFinalize()
```

### GetIsBlockedAtPosition

```csharp
public bool GetIsBlockedAtPosition(Vector2 position)
```

### GetLastScreenOrder

```csharp
public int GetLastScreenOrder()
```

### HasNavigationScope

```csharp
public bool HasNavigationScope(GamepadNavigationScope scope)
```

### HasNavigationScope

```csharp
public bool HasNavigationScope(Func<GamepadNavigationScope, bool> predicate)
```

### IsAvailableForNavigation

```csharp
public bool IsAvailableForNavigation()
```

### OnGainNavigation

```csharp
public void OnGainNavigation()
```

### OnMovieLoaded

```csharp
public void OnMovieLoaded(string movieName)
```

### OnMovieReleased

```csharp
public void OnMovieReleased(string movieName)
```

### OnWidgetNavigationIndexUpdated

```csharp
public void OnWidgetNavigationIndexUpdated(Widget widget)
```

### OnWidgetNavigationStatusChanged

```csharp
public void OnWidgetNavigationStatusChanged(Widget widget)
```

### OnWidgetUsedNavigationMovementsUpdated

```csharp
public void OnWidgetUsedNavigationMovementsUpdated(Widget widget)
```

### RemoveForcedScopeCollection

```csharp
public void RemoveForcedScopeCollection(GamepadNavigationForcedScopeCollection collection)
```

### RemoveNavigationScope

```csharp
public void RemoveNavigationScope(GamepadNavigationScope scope)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)