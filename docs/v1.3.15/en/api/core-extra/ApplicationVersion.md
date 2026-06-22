<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ApplicationVersion`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ApplicationVersion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `ApplicationVersion` is a struct in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ApplicationVersionType` | `public ApplicationVersionType ApplicationVersionType { get; }` |
| `Major` | `public int Major { get; }` |
| `Minor` | `public int Minor { get; }` |
| `Revision` | `public int Revision { get; }` |
| `ChangeSet` | `public int ChangeSet { get; }` |


## Key Methods

### FromParametersFile

```csharp
public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)
```

### FromString

```csharp
public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)
```

### IsSame

```csharp
public bool IsSame(ApplicationVersion other, bool checkChangeSet)
```

### IsOlderThan

```csharp
public bool IsOlderThan(ApplicationVersion other)
```

### IsNewerThan

```csharp
public bool IsNewerThan(ApplicationVersion other)
```

### ApplicationVersionTypeFromString

```csharp
public static ApplicationVersionType ApplicationVersionTypeFromString(string applicationVersionTypeAsString)
```

### GetPrefix

```csharp
public static string GetPrefix(ApplicationVersionType applicationVersionType)
```

### ToString

```csharp
public override string ToString()
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### Equals

```csharp
public override bool Equals(object obj)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)