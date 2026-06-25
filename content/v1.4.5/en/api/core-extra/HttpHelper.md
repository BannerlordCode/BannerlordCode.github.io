---
title: "HttpHelper"
description: "Auto-generated class reference for HttpHelper."
---
# HttpHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class HttpHelper`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/HttpHelper.cs`

## Overview

`HttpHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `HttpHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DownloadStringTaskAsync
`public static Task<string> DownloadStringTaskAsync(string url)`

**Purpose:** **Purpose:** Executes the DownloadStringTaskAsync logic.

```csharp
// Static call; no instance required
HttpHelper.DownloadStringTaskAsync("example");
```

### DownloadDataTaskAsync
`public static Task<byte > DownloadDataTaskAsync(string url)`

**Purpose:** **Purpose:** Executes the DownloadDataTaskAsync logic.

```csharp
// Static call; no instance required
HttpHelper.DownloadDataTaskAsync("example");
```

### PostStringAsync
`public static Task<string> PostStringAsync(string url, string postData, string mediaType = "application/json")`

**Purpose:** **Purpose:** Executes the PostStringAsync logic.

```csharp
// Static call; no instance required
HttpHelper.PostStringAsync("example", "example", "example");
```

## Usage Example

```csharp
HttpHelper.Initialize();
```

## See Also

- [Area Index](../)