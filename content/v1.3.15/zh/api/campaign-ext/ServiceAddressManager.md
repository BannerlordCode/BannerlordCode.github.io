---
title: "ServiceAddressManager"
description: "ServiceAddressManager 的自动生成类参考。"
---
# ServiceAddressManager

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public static class ServiceAddressManager`
**Base:** 无
**File:** `TaleWorlds.ServiceDiscovery.Client/ServiceAddressManager.cs`

## 概述

`ServiceAddressManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ServiceAddressManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ServiceName` | `public string ServiceName { get; set; }` |
| `EnvironmentId` | `public string EnvironmentId { get; set; }` |
| `ResolvedAddress` | `public ServiceResolvedAddress ResolvedAddress { get; set; }` |
| `SavedAt` | `public DateTime SavedAt { get; set; }` |

## 主要方法

### Initalize
`public static void Initalize()`

**用途 / Purpose:** 为 「alize」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
ServiceAddressManager.Initalize();
```

### ResolveAddress
`public static bool ResolveAddress(string serviceDiscoveryAddress, ref string serviceAddress)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ServiceAddressManager.ResolveAddress("example", serviceAddress);
```

## 使用示例

```csharp
var manager = ServiceAddressManager.Current;
```

## 参见

- [本区域目录](../)