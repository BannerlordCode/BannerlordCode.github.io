<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SubtitleItem`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SubtitleItem

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `SubtitleItem` is a class in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `StartTime` | `public int StartTime { get; set; }` |
| `EndTime` | `public int EndTime { get; set; }` |
| `Lines` | `public List<string> Lines { get; set; }` |


## Key Methods

### ParseStream

```csharp
public static List<SRTHelper.SubtitleItem> ParseStream(Stream subtitleStream, Encoding encoding)
```

### CopyStream

```csharp
public static Stream CopyStream(Stream inputStream)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)