<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ICustomNetworking`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ICustomNetworking

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class ICustomNetworking : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ICustomNetworking.cs`

## 概述

`ICustomNetworking` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### OpenConnection
`public virtual void OpenConnection(string connectionString, IConnectionOpenListener listener)`

**用途 / Purpose:** 处理 `open connection` 相关逻辑。

### OpenConnection
`public virtual void OpenConnection(string connectionString)`

**用途 / Purpose:** 处理 `open connection` 相关逻辑。

### CloseConnection
`public virtual void CloseConnection(ulong connectionID, IConnectionCloseListener listener)`

**用途 / Purpose:** 处理 `close connection` 相关逻辑。

### CloseConnection
`public virtual void CloseConnection(ulong connectionID)`

**用途 / Purpose:** 处理 `close connection` 相关逻辑。

### SendData
`public virtual void SendData(ulong connectionID, byte data, uint dataSize)`

**用途 / Purpose:** 处理 `send data` 相关逻辑。

### GetAvailableDataSize
`public virtual uint GetAvailableDataSize(ulong connectionID)`

**用途 / Purpose:** 获取 `available data size` 的当前值。

### PeekData
`public virtual void PeekData(ulong connectionID, byte dest, uint dataSize)`

**用途 / Purpose:** 处理 `peek data` 相关逻辑。

### ReadData
`public virtual void ReadData(ulong connectionID, byte dest, uint dataSize)`

**用途 / Purpose:** 处理 `read data` 相关逻辑。

### PopData
`public virtual void PopData(ulong connectionID, uint dataSize)`

**用途 / Purpose:** 处理 `pop data` 相关逻辑。

## 使用示例

```csharp
var value = new ICustomNetworking();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)