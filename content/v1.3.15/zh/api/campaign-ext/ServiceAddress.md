---
title: "ServiceAddress"
description: "ServiceAddress 的自动生成类参考。"
---
# ServiceAddress

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public class ServiceAddress`
**Base:** 无
**File:** `TaleWorlds.ServiceDiscovery.Client/ServiceAddress.cs`

## 概述

`ServiceAddress` 位于 `TaleWorlds.ServiceDiscovery.Client`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 service address 状态或条件。

```csharp
// 静态调用，不需要实例
ServiceAddress.IsServiceAddress("example");
```

### TryGetAddressName
`public static bool TryGetAddressName(string serviceAddress, out string addressName)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get address name 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
ServiceAddress.TryGetAddressName("example", addressName);
```

## 使用示例

```csharp
ServiceAddress.IsServiceAddress("example");
```

## 参见

- [本区域目录](../)