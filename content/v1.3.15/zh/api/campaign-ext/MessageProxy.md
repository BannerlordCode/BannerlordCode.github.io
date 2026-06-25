---
title: "MessageProxy"
description: "MessageProxy 的自动生成类参考。"
---
# MessageProxy

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageProxy`
**Base:** 无
**File:** `TaleWorlds.Network/MessageProxy.cs`

## 概述

`MessageProxy` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Invoke
`public abstract Task Invoke(string methodName, params object args)`

**用途 / Purpose:** 处理与 「invoke」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MessageProxy 实例
MessageProxy messageProxy = ...;
var result = messageProxy.Invoke("example", args);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MessageProxy instance = ...;
```

## 参见

- [本区域目录](../)