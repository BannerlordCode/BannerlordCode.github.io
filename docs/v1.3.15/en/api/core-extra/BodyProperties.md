<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BodyProperties`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BodyProperties

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `BodyProperties` is a struct in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `StaticProperties` | `public StaticBodyProperties StaticProperties { get; }` |
| `DynamicProperties` | `public DynamicBodyProperties DynamicProperties { get; }` |
| `Age` | `public float Age { get; }` |
| `Weight` | `public float Weight { get; }` |
| `Build` | `public float Build { get; }` |
| `KeyPart1` | `public ulong KeyPart1 { get; }` |
| `KeyPart2` | `public ulong KeyPart2 { get; }` |
| `KeyPart3` | `public ulong KeyPart3 { get; }` |
| `KeyPart4` | `public ulong KeyPart4 { get; }` |
| `KeyPart5` | `public ulong KeyPart5 { get; }` |
| `KeyPart6` | `public ulong KeyPart6 { get; }` |
| `KeyPart7` | `public ulong KeyPart7 { get; }` |
| `KeyPart8` | `public ulong KeyPart8 { get; }` |
| `Default` | `public static BodyProperties Default { get; }` |


## Key Methods

### FromXmlNode

```csharp
public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)
```

### FromString

```csharp
public static bool FromString(string keyValue, out BodyProperties bodyProperties)
```

### GetRandomBodyProperties

```csharp
public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)
```

### ToString

```csharp
public override string ToString()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### ClampForMultiplayer

```csharp
public BodyProperties ClampForMultiplayer()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)