---
title: "HttpHelper"
description: "HttpHelper 的自动生成类参考。"
---
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

**用途 / Purpose:** 调用 DownloadStringTaskAsync 对应的操作。

```csharp
// 静态调用，不需要实例
HttpHelper.DownloadStringTaskAsync("example");
```

### DownloadDataTaskAsync
`public static Task<byte > DownloadDataTaskAsync(string url)`

**用途 / Purpose:** 调用 DownloadDataTaskAsync 对应的操作。

```csharp
// 静态调用，不需要实例
HttpHelper.DownloadDataTaskAsync("example");
```

### PostStringAsync
`public static Task<string> PostStringAsync(string url, string postData, string mediaType = "application/json")`

**用途 / Purpose:** 调用 PostStringAsync 对应的操作。

```csharp
// 静态调用，不需要实例
HttpHelper.PostStringAsync("example", "example", "example");
```

## 使用示例

```csharp
HttpHelper.Initialize();
```

## 参见

- [本区域目录](../)