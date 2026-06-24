<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ITelemetry`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ITelemetry

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class ITelemetry : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ITelemetry.cs`

## 概述

`ITelemetry` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### AddStringParam
`public virtual void AddStringParam(string name, string value)`

**用途 / Purpose:** 向当前集合/状态中添加 `string param`。

### AddIntParam
`public virtual void AddIntParam(string name, int value)`

**用途 / Purpose:** 向当前集合/状态中添加 `int param`。

### AddFloatParam
`public virtual void AddFloatParam(string name, double value)`

**用途 / Purpose:** 向当前集合/状态中添加 `float param`。

### AddBoolParam
`public virtual void AddBoolParam(string name, bool value)`

**用途 / Purpose:** 向当前集合/状态中添加 `bool param`。

### AddObjectParam
`public virtual void AddObjectParam(string name)`

**用途 / Purpose:** 向当前集合/状态中添加 `object param`。

### AddArrayParam
`public virtual void AddArrayParam(string name)`

**用途 / Purpose:** 向当前集合/状态中添加 `array param`。

### CloseParam
`public virtual void CloseParam()`

**用途 / Purpose:** 处理 `close param` 相关逻辑。

### ClearParams
`public virtual void ClearParams()`

**用途 / Purpose:** 处理 `clear params` 相关逻辑。

### SetSamplingClass
`public virtual void SetSamplingClass(string name)`

**用途 / Purpose:** 设置 `sampling class` 的值或状态。

### SendTelemetryEvent
`public virtual uint SendTelemetryEvent(string eventType, ITelemetryEventSendListener listener)`

**用途 / Purpose:** 处理 `send telemetry event` 相关逻辑。

### SendTelemetryEvent
`public virtual uint SendTelemetryEvent(string eventType)`

**用途 / Purpose:** 处理 `send telemetry event` 相关逻辑。

### SendAnonymousTelemetryEvent
`public virtual uint SendAnonymousTelemetryEvent(string eventType, ITelemetryEventSendListener listener)`

**用途 / Purpose:** 处理 `send anonymous telemetry event` 相关逻辑。

### SendAnonymousTelemetryEvent
`public virtual uint SendAnonymousTelemetryEvent(string eventType)`

**用途 / Purpose:** 处理 `send anonymous telemetry event` 相关逻辑。

### GetVisitID
`public virtual string GetVisitID()`

**用途 / Purpose:** 获取 `visit i d` 的当前值。

### GetVisitIDCopy
`public virtual void GetVisitIDCopy(out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `visit i d copy` 的当前值。

### ResetVisitID
`public virtual void ResetVisitID()`

**用途 / Purpose:** 将 `visit i d` 重置为初始状态。

## 使用示例

```csharp
var value = new ITelemetry();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)