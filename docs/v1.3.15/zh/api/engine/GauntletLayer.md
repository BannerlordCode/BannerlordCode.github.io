<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletLayer`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletLayer

**命名空间:** TaleWorlds.Engine.GauntletUI
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`GauntletLayer` 是 `TaleWorlds.Engine.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GamepadNavigationContext` | `public IGamepadNavigationContext GamepadNavigationContext { get; }` |
| `UIContext` | `public UIContext UIContext { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)