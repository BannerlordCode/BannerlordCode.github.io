<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ILogger`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ILogger

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class ILogger : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ILogger.cs`

## 概述

`ILogger` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### Trace
`public virtual void Trace(string format)`

**用途 / Purpose:** 处理 `trace` 相关逻辑。

### Debug
`public virtual void Debug(string format)`

**用途 / Purpose:** 处理 `debug` 相关逻辑。

### Info
`public virtual void Info(string format)`

**用途 / Purpose:** 处理 `info` 相关逻辑。

### Warning
`public virtual void Warning(string format)`

**用途 / Purpose:** 处理 `warning` 相关逻辑。

### Error
`public virtual void Error(string format)`

**用途 / Purpose:** 处理 `error` 相关逻辑。

### Fatal
`public virtual void Fatal(string format)`

**用途 / Purpose:** 处理 `fatal` 相关逻辑。

## 使用示例

```csharp
var value = new ILogger();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)