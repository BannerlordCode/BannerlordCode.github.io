---
title: "MessageContractCreator"
description: "MessageContractCreator 的自动生成类参考。"
---
# MessageContractCreator

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `internal abstract class MessageContractCreator`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/MessageContractCreator.cs`

## 概述

`MessageContractCreator` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Invoke
`public abstract MessageContract Invoke()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MessageContractCreator 实例
MessageContractCreator messageContractCreator = ...;
var result = messageContractCreator.Invoke();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MessageContractCreator instance = ...;
```

## 参见

- [本区域目录](../)