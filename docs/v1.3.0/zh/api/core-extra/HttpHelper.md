<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HttpHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HttpHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class HttpHelper`
**Base:** 无
**File:** `TaleWorlds.Library/HttpHelper.cs`

## 概述

`HttpHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `HttpHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DownloadStringTaskAsync
`public static Task<string> DownloadStringTaskAsync(string url)`

**用途 / Purpose:** 处理 `download string task async` 相关逻辑。

### DownloadDataTaskAsync
`public static Task<byte > DownloadDataTaskAsync(string url)`

**用途 / Purpose:** 处理 `download data task async` 相关逻辑。

### PostStringAsync
`public static Task<string> PostStringAsync(string url, string postData, string mediaType = "application/json")`

**用途 / Purpose:** 处理 `post string async` 相关逻辑。

## 使用示例

```csharp
HttpHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)