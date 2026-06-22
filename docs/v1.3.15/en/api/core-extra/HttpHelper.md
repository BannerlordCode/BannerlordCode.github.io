<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HttpHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HttpHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class HttpHelper`
**Base:** none
**File:** `TaleWorlds.Library/HttpHelper.cs`

## Overview

`HttpHelper` is a static utility class providing helper methods.

## Key Methods

### DownloadStringTaskAsync
```csharp
public static Task<string> DownloadStringTaskAsync(string url)
```

### DownloadDataTaskAsync
```csharp
public static Task<byte > DownloadDataTaskAsync(string url)
```

### PostStringAsync
```csharp
public static Task<string> PostStringAsync(string url, string postData, string mediaType = "application/json")
```

## Usage Example

```csharp
// Typical usage of HttpHelper (Helper)
HttpHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)