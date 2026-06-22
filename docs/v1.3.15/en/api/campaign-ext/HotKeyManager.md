<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HotKeyManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HotKeyManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HotKeyManager` is a class in the `TaleWorlds.InputSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetHotKeyId

```csharp
public static string GetHotKeyId(string categoryName, string hotKeyId)
```

### GetHotKeyId

```csharp
public static string GetHotKeyId(string categoryName, int hotKeyId)
```

### GetCategory

```csharp
public static GameKeyContext GetCategory(string categoryName)
```

### GetAllCategories

```csharp
public static Dictionary<string, GameKeyContext>.ValueCollection GetAllCategories()
```

### Tick

```csharp
public static void Tick(float dt)
```

### Initialize

```csharp
public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)
```

### RegisterInitialContexts

```csharp
public static void RegisterInitialContexts(IEnumerable<GameKeyContext> contexts, bool loadKeys)
```

### RegisterContext

```csharp
public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false, bool loadKeys = false)
```

### ShouldNotifyDocumentVersionDifferent

```csharp
public static bool ShouldNotifyDocumentVersionDifferent()
```

### Reset

```csharp
public static void Reset()
```

### LoadAsync

```csharp
public static void LoadAsync()
```

### SaveAsync

```csharp
public static void SaveAsync(bool throwEvent)
```

### OnKeybindsChangedEvent

```csharp
public delegate void OnKeybindsChangedEvent()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)