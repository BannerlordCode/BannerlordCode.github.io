<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServiceAddressManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceAddressManager

**命名空间:** TaleWorlds.ServiceDiscovery.Client
**模块:** TaleWorlds.ServiceDiscovery
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ServiceAddressManager` 是 `TaleWorlds.ServiceDiscovery.Client` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ServiceName` | `public string ServiceName { get; set; }` |
| `EnvironmentId` | `public string EnvironmentId { get; set; }` |
| `ResolvedAddress` | `public ServiceResolvedAddress ResolvedAddress { get; set; }` |
| `SavedAt` | `public DateTime SavedAt { get; set; }` |


## 主要方法

### Initalize

```csharp
public static void Initalize()
```

### ResolveAddress

```csharp
public static bool ResolveAddress(string serviceDiscoveryAddress, ref string serviceAddress)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)