<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PsaiMusicEntity`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PsaiMusicEntity

**Namespace:** psai.Editor
**Module:** psai.Editor
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PsaiMusicEntity` is a class in the `psai.Editor` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |


## Key Methods

### GetClassString

```csharp
public abstract string GetClassString()
```

### GetCompatibilitySetting

```csharp
public abstract CompatibilitySetting GetCompatibilitySetting(PsaiMusicEntity targetEntity)
```

### GetCompatibilityType

```csharp
public abstract CompatibilityType GetCompatibilityType(PsaiMusicEntity targetEntity, out CompatibilityReason reason)
```

### GetParent

```csharp
public abstract PsaiMusicEntity GetParent()
```

### GetChildren

```csharp
public abstract List<PsaiMusicEntity> GetChildren()
```

### GetIndexPositionWithinParentEntity

```csharp
public abstract int GetIndexPositionWithinParentEntity(PsaiProject parentProject)
```

### Clone

```csharp
public virtual object Clone()
```

### ShallowCopy

```csharp
public virtual PsaiMusicEntity ShallowCopy()
```

### PropertyDifferencesAffectCompatibilities

```csharp
public virtual bool PropertyDifferencesAffectCompatibilities(PsaiMusicEntity otherEntity)
```

### GetTheme

```csharp
public Theme GetTheme()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)