---
title: "INetworkMessageReader"
description: "INetworkMessageReader 的自动生成类参考。"
---
# INetworkMessageReader

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public interface INetworkMessageReader`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/INetworkMessageReader.cs`

## 概述

`INetworkMessageReader` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IINetworkMessageReader service = ...;
```

## 参见

- [本区域目录](../)