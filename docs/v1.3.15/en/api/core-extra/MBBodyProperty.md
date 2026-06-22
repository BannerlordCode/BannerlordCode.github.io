<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBBodyProperty`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBBodyProperty

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MBBodyProperty` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `HairTags` | `public string HairTags { get; set; }` |
| `BeardTags` | `public string BeardTags { get; set; }` |
| `TattooTags` | `public string TattooTags { get; set; }` |
| `BodyPropertyMin` | `public BodyProperties BodyPropertyMin { get; }` |
| `BodyPropertyMax` | `public BodyProperties BodyPropertyMax { get; }` |


## Key Methods

### CreateFrom

```csharp
public static MBBodyProperty CreateFrom(MBBodyProperty bodyProperty)
```

### Init

```csharp
public void Init(BodyProperties bodyPropertyMin, BodyProperties bodyPropertyMax)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)