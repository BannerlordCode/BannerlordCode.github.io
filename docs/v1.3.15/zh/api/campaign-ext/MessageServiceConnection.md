<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MessageServiceConnection`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageServiceConnection

**命名空间:** TaleWorlds.Network
**模块:** TaleWorlds.Network
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MessageServiceConnection` 是 `TaleWorlds.Network` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |


## 主要方法

### SendAsync

```csharp
public abstract Task SendAsync(string text)
```

### Init

```csharp
public abstract void Init(string address, string token)
```

### RegisterProxyClient

```csharp
public abstract void RegisterProxyClient(string name, IMessageProxyClient playerClient)
```

### StartAsync

```csharp
public abstract Task StartAsync()
```

### StopAsync

```csharp
public abstract Task StopAsync()
```

### ClosedDelegate

```csharp
public delegate Task ClosedDelegate()
```

### StateChangedDelegate

```csharp
public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)