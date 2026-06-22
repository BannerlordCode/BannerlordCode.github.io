<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HttpHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HttpHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class HttpHelper`
**Base:** 无
**File:** `TaleWorlds.Library/HttpHelper.cs`

## 概述

`HttpHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

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

## 使用示例

```csharp
// HttpHelper (Helper) 的典型用法
HttpHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)