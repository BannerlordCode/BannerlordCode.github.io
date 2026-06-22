<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Client`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Client

**命名空间:** TaleWorlds.Diamond
**模块:** TaleWorlds.Diamond
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Client` 是 `TaleWorlds.Diamond` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsInCriticalState` | `public bool IsInCriticalState { get; set; }` |
| `AliveCheckTimeInMiliSeconds` | `public virtual long AliveCheckTimeInMiliSeconds { get; }` |
| `AccessProvider` | `public ILoginAccessProvider AccessProvider { get; set; }` |


## 主要方法

### Update

```csharp
public void Update()
```

### HandleMessage

```csharp
public void HandleMessage(Message message)
```

### OnConnected

```csharp
public virtual void OnConnected()
```

### OnCantConnect

```csharp
public virtual void OnCantConnect()
```

### OnDisconnected

```csharp
public virtual void OnDisconnected()
```

### CheckConnection

```csharp
public Task<bool> CheckConnection()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)