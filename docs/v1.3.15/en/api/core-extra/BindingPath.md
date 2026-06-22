<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BindingPath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BindingPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `BindingPath` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Path` | `public string Path { get; }` |
| `Nodes` | `public string Nodes { get; }` |
| `FirstNode` | `public string FirstNode { get; }` |
| `LastNode` | `public string LastNode { get; }` |
| `SubPath` | `public BindingPath SubPath { get; }` |
| `ParentPath` | `public BindingPath ParentPath { get; }` |


## Key Methods

### CreateFromProperty

```csharp
public static BindingPath CreateFromProperty(string propertyName)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### IsRelatedWithPathAsString

```csharp
public static bool IsRelatedWithPathAsString(string path, string referencePath)
```

### IsRelatedWithPath

```csharp
public static bool IsRelatedWithPath(string path, BindingPath referencePath)
```

### IsRelatedWith

```csharp
public bool IsRelatedWith(BindingPath referencePath)
```

### DecrementIfRelatedWith

```csharp
public void DecrementIfRelatedWith(BindingPath path, int startIndex)
```

### Simplify

```csharp
public BindingPath Simplify()
```

### Append

```csharp
public BindingPath Append(BindingPath bindingPath)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)