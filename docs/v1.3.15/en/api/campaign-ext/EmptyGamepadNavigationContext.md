<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EmptyGamepadNavigationContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EmptyGamepadNavigationContext

**Namespace:** (global)
**Module:** (global)
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EmptyGamepadNavigationContext` is a class in the `(global)` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)