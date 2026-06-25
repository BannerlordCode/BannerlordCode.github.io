---
title: "Logger"
description: "Logger 的自动生成类参考。"
---
# Logger

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class Logger`
**Base:** 无
**File:** `TaleWorlds.Library/Logger.cs`

## 概述

`Logger` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LogOnlyErrors` | `public bool LogOnlyErrors { get; set; }` |

## 主要方法

### Print
`public void Print(string log, HTMLDebugCategory debugInfo = HTMLDebugCategory.General)`

**用途 / Purpose:** 处理与 「print」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Logger 实例
Logger logger = ...;
logger.Print("example", hTMLDebugCategory.General);
```

### Print
`public void Print(string log, HTMLDebugCategory debugInfo, bool printOnGlobal)`

**用途 / Purpose:** 处理与 「print」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Logger 实例
Logger logger = ...;
logger.Print("example", debugInfo, false);
```

### FinishAndCloseAll
`public static void FinishAndCloseAll()`

**用途 / Purpose:** 结束「and close all」流程并执行必要的收尾工作。

```csharp
// 静态调用，不需要实例
Logger.FinishAndCloseAll();
```

### GetFileStream
`public FileStream GetFileStream()`

**用途 / Purpose:** 读取并返回当前对象中 「file stream」 的结果。

```csharp
// 先通过子系统 API 拿到 Logger 实例
Logger logger = ...;
var result = logger.GetFileStream();
```

### GetErrorFileStream
`public FileStream GetErrorFileStream()`

**用途 / Purpose:** 读取并返回当前对象中 「error file stream」 的结果。

```csharp
// 先通过子系统 API 拿到 Logger 实例
Logger logger = ...;
var result = logger.GetErrorFileStream();
```

### CheckForFileSize
`public void CheckForFileSize()`

**用途 / Purpose:** 检查「for file size」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Logger 实例
Logger logger = ...;
logger.CheckForFileSize();
```

### ShutDown
`public void ShutDown()`

**用途 / Purpose:** 处理与 「shut down」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Logger 实例
Logger logger = ...;
logger.ShutDown();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Logger logger = ...;
logger.Print("example", hTMLDebugCategory.General);
```

## 参见

- [本区域目录](../)