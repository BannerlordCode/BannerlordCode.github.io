<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServiceAddressManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ServiceAddressManager

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public static class ServiceAddressManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.ServiceDiscovery.Client/TaleWorlds.ServiceDiscovery.Client/ServiceAddressManager.cs`

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

**用途 / Purpose:** 初始化 `alize` 的状态、资源或绑定。

### ResolveAddress
`public static bool ResolveAddress(string serviceDiscoveryAddress, ref string serviceAddress)`

**用途 / Purpose:** 处理 `resolve address` 相关逻辑。

## 使用示例

```csharp
var manager = ServiceAddressManager.Current;
```

## 参见

- [完整类目录](../catalog)