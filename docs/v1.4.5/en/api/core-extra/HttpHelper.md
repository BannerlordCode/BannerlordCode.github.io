<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HttpHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HttpHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class HttpHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/HttpHelper.cs`

## Overview

`HttpHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `HttpHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DownloadStringTaskAsync
`public static Task<string> DownloadStringTaskAsync(string url)`

**Purpose:** Handles logic related to `download string task async`.

### DownloadDataTaskAsync
`public static Task<byte > DownloadDataTaskAsync(string url)`

**Purpose:** Handles logic related to `download data task async`.

### PostStringAsync
`public static Task<string> PostStringAsync(string url, string postData, string mediaType = "application/json")`

**Purpose:** Handles logic related to `post string async`.

## Usage Example

```csharp
HttpHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)