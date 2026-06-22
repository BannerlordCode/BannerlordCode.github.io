<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DiamondClientApplication`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DiamondClientApplication

**命名空间:** TaleWorlds.Diamond.ClientApplication
**模块:** TaleWorlds.Diamond
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`DiamondClientApplication` 是 `TaleWorlds.Diamond.ClientApplication` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion { get; }` |
| `Parameters` | `public ParameterContainer Parameters { get; }` |
| `ProxyAddressMap` | `public IReadOnlyDictionary<string, string> ProxyAddressMap { get; }` |


## 主要方法

### GetObject

```csharp
public object GetObject(string name)
```

### AddObject

```csharp
public void AddObject(string name, DiamondClientApplicationObject applicationObject)
```

### Initialize

```csharp
public void Initialize(ClientApplicationConfiguration applicationConfiguration)
```

### CreateClientSessionProvider

```csharp
public object CreateClientSessionProvider(string clientName, Type clientType, SessionProviderType sessionProviderType, ParameterContainer parameters)
```

### Update

```csharp
public void Update()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)