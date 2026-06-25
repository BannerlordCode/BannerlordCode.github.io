---
title: "MBNetwork"
description: "MBNetwork 的自动生成类参考。"
---
# MBNetwork

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBNetwork`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBNetwork.cs`

## 概述

`MBNetwork` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NetworkViewCommunication` | `public static INetworkCommunication NetworkViewCommunication { get; }` |
| `MyPeer` | `public static VirtualPlayer MyPeer { get; }` |

## 主要方法

### Initialize
`public static void Initialize(INetworkCommunication networkCommunication)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
MBNetwork.Initialize(networkCommunication);
```

## 使用示例

```csharp
MBNetwork.Initialize(networkCommunication);
```

## 参见

- [本区域目录](../)