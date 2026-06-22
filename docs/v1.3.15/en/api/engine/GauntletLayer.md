<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletLayer`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletLayer

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `GauntletLayer` is a class in the `TaleWorlds.Engine.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GamepadNavigationContext` | `public IGamepadNavigationContext GamepadNavigationContext { get; }` |
| `UIContext` | `public UIContext UIContext { get; }` |


## Key Methods

### OnResourceRefreshBegin

```csharp
public void OnResourceRefreshBegin(out List<GauntletMovieIdentifier> previouslyLoadedMovies)
```

### OnResourceRefreshEnd

```csharp
public void OnResourceRefreshEnd(List<GauntletMovieIdentifier> previouslyLoadedMovies)
```

### GetMovieIdentifier

```csharp
public GauntletMovieIdentifier GetMovieIdentifier(string movieName)
```

### LoadMovie

```csharp
public GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)
```

### ReleaseMovie

```csharp
public void ReleaseMovie(GauntletMovieIdentifier identifier)
```

### ProcessEvents

```csharp
public override void ProcessEvents()
```

### HitTest

```csharp
public override bool HitTest(Vector2 position)
```

### HitTest

```csharp
public override bool HitTest()
```

### FocusTest

```csharp
public override bool FocusTest()
```

### IsFocusedOnInput

```csharp
public override bool IsFocusedOnInput()
```

### OnOnScreenKeyboardDone

```csharp
public override void OnOnScreenKeyboardDone(string inputText)
```

### OnOnScreenKeyboardCanceled

```csharp
public override void OnOnScreenKeyboardCanceled()
```

### UpdateLayout

```csharp
public override void UpdateLayout()
```

### GetIsAvailableForGamepadNavigation

```csharp
public bool GetIsAvailableForGamepadNavigation()
```

### DrawDebugInfo

```csharp
public override void DrawDebugInfo()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)