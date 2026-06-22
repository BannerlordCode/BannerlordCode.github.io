<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServiceAddress`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceAddress

**命名空间:** TaleWorlds.ServiceDiscovery.Client
**模块:** TaleWorlds.ServiceDiscovery
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ServiceAddress` 是 `TaleWorlds.ServiceDiscovery.Client` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Service` | `public string Service { get; }` |
| `ResolvedAddresses` | `public ServiceResolvedAddress ResolvedAddresses { get; }` |


## 主要方法

### IsServiceAddress

```csharp
public static bool IsServiceAddress(string address)
```

### TryGetAddressName

```csharp
public static bool TryGetAddressName(string serviceAddress, out string addressName)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)