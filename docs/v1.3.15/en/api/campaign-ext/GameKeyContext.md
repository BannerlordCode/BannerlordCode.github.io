<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKeyContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameKeyContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameKeyContext` is a class in the `TaleWorlds.InputSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GameKeyCategoryId` | `public string GameKeyCategoryId { get; }` |
| `Type` | `public GameKeyContext.GameKeyContextType Type { get; }` |
| `RegisteredGameKeys` | `public MBReadOnlyList<GameKey> RegisteredGameKeys { get; }` |
| `RegisteredHotKeys` | `public Dictionary<string, HotKey>.ValueCollection RegisteredHotKeys { get; }` |
| `RegisteredGameAxisKeys` | `public Dictionary<string, GameAxisKey>.ValueCollection RegisteredGameAxisKeys { get; }` |


## Key Methods

### GetHotKey

```csharp
public HotKey GetHotKey(string hotKeyId)
```

### GetGameKey

```csharp
public GameKey GetGameKey(int gameKeyId)
```

### GetHotKeyId

```csharp
public string GetHotKeyId(string hotKeyId)
```

### GetHotKeyId

```csharp
public string GetHotKeyId(int gameKeyId)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)