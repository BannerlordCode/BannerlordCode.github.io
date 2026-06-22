<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerId`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerId

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PlayerId` is a struct in the `TaleWorlds.PlayerServices` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Id1` | `public ulong Id1 { get; }` |
| `Id2` | `public ulong Id2 { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `ProvidedType` | `public PlayerIdProvidedTypes ProvidedType { get; }` |
| `Part1` | `public ulong Part1 { get; }` |
| `Part2` | `public ulong Part2 { get; }` |
| `Part3` | `public ulong Part3 { get; }` |
| `Part4` | `public ulong Part4 { get; }` |
| `Empty` | `public static PlayerId Empty { get; }` |


## Key Methods

### ToByteArray

```csharp
public byte ToByteArray()
```

### Serialize

```csharp
public void Serialize(IWriter writer)
```

### Deserialize

```csharp
public void Deserialize(IReader reader)
```

### ToString

```csharp
public override string ToString()
```

### Equals

```csharp
public override bool Equals(object o)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### FromString

```csharp
public static PlayerId FromString(string id)
```

### CompareTo

```csharp
public int CompareTo(PlayerId other)
```

### Equals

```csharp
public bool Equals(PlayerId other)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)