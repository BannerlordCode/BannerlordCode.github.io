<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NewsManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NewsManager

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `NewsManager` is a class in the `TaleWorlds.Library.NewsManager` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NewsItems` | `public MBReadOnlyList<NewsItem> NewsItems { get; }` |
| `IsInPreviewMode` | `public bool IsInPreviewMode { get; }` |
| `LocalizationID` | `public string LocalizationID { get; }` |


## Key Methods

### GetNewsItems

```csharp
public Task<MBReadOnlyList<NewsItem>> GetNewsItems(bool forceRefresh)
```

### SetNewsSourceURL

```csharp
public void SetNewsSourceURL(string url)
```

### UpdateNewsItems

```csharp
public Task UpdateNewsItems(bool forceRefresh)
```

### UpdateLocalizationID

```csharp
public void UpdateLocalizationID(string localizationID)
```

### OnFinalize

```csharp
public void OnFinalize()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)