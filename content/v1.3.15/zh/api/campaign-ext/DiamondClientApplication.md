---
title: "DiamondClientApplication"
description: "DiamondClientApplication 的自动生成类参考。"
---
# DiamondClientApplication

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class DiamondClientApplication`
**Base:** 无
**File:** `TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs`

## 概述

`DiamondClientApplication` 位于 `TaleWorlds.Diamond.ClientApplication`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.ClientApplication` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion { get; }` |
| `Parameters` | `public ParameterContainer Parameters { get; }` |
| `ProxyAddressMap` | `public IReadOnlyDictionary<string, string> ProxyAddressMap { get; }` |

## 主要方法

### GetObject
`public object GetObject(string name)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 object 的结果。

```csharp
// 先通过子系统 API 拿到 DiamondClientApplication 实例
DiamondClientApplication diamondClientApplication = ...;
var result = diamondClientApplication.GetObject("example");
```

### AddObject
`public void AddObject(string name, DiamondClientApplicationObject applicationObject)`

**用途 / Purpose:** **用途 / Purpose:** 将 object 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 DiamondClientApplication 实例
DiamondClientApplication diamondClientApplication = ...;
diamondClientApplication.AddObject("example", applicationObject);
```

### Initialize
`public void Initialize(ClientApplicationConfiguration applicationConfiguration)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 DiamondClientApplication 实例
DiamondClientApplication diamondClientApplication = ...;
diamondClientApplication.Initialize(applicationConfiguration);
```

### CreateClientSessionProvider
`public object CreateClientSessionProvider(string clientName, Type clientType, SessionProviderType sessionProviderType, ParameterContainer parameters)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 client session provider 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 DiamondClientApplication 实例
DiamondClientApplication diamondClientApplication = ...;
var result = diamondClientApplication.CreateClientSessionProvider("example", clientType, sessionProviderType, parameters);
```

### Update
`public void Update()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 DiamondClientApplication 实例
DiamondClientApplication diamondClientApplication = ...;
diamondClientApplication.Update();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DiamondClientApplication diamondClientApplication = ...;
diamondClientApplication.GetObject("example");
```

## 参见

- [本区域目录](../)