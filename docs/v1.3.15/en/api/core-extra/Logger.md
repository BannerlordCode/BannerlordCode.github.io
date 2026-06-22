<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Logger`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Logger

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `Logger` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `LogOnlyErrors` | `public bool LogOnlyErrors { get; set; }` |


## Key Methods

### Print

```csharp
public void Print(string log, HTMLDebugCategory debugInfo = HTMLDebugCategory.General)
```

### Print

```csharp
public void Print(string log, HTMLDebugCategory debugInfo, bool printOnGlobal)
```

### FinishAndCloseAll

```csharp
public static void FinishAndCloseAll()
```

### GetFileStream

```csharp
public FileStream GetFileStream()
```

### GetErrorFileStream

```csharp
public FileStream GetErrorFileStream()
```

### CheckForFileSize

```csharp
public void CheckForFileSize()
```

### ShutDown

```csharp
public void ShutDown()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)