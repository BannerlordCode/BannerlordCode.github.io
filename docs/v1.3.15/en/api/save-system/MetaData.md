<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MetaData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `MetaData` is a class in the `TaleWorlds.SaveSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `this` | `public string this { get; set; }` |
| `Keys` | `public Dictionary<string, string>.KeyCollection Keys { get; }` |


## Key Methods

### Add

```csharp
public void Add(string key, string value)
```

### TryGetValue

```csharp
public bool TryGetValue(string key, out string value)
```

### Serialize

```csharp
public void Serialize(Stream stream)
```

### Deserialize

```csharp
public static MetaData Deserialize(Stream stream)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)