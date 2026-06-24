<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServiceAddress`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceAddress

**命名空间:** TaleWorlds.ServiceDiscovery.Client
**模块:** TaleWorlds.ServiceDiscovery
**类型:** `public class ServiceAddress`
**领域:** campaign-ext

## 概述

`ServiceAddress` 位于 `TaleWorlds.ServiceDiscovery.Client`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.ServiceDiscovery.Client` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Service` | `public string Service { get; }` |
| `ResolvedAddresses` | `public ServiceResolvedAddress ResolvedAddresses { get; }` |

## 主要方法

### IsServiceAddress
`public static bool IsServiceAddress(string address)`

**用途 / Purpose:** 处理 `is service address` 相关逻辑。

### TryGetAddressName
`public static bool TryGetAddressName(string serviceAddress, out string addressName)`

**用途 / Purpose:** 尝试获取 `get address name`，通常以 out 参数返回结果。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ServiceAddress.IsServiceAddress("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
