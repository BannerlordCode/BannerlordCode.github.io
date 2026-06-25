---
title: "JsonSocketMessage"
description: "JsonSocketMessage 的自动生成类参考。"
---
# JsonSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class JsonSocketMessage`
**Base:** 无
**File:** `TaleWorlds.Network/JsonSocketMessage.cs`

## 概述

`JsonSocketMessage` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MessageInfo` | `public MessageInfo MessageInfo { get; }` |
| `SocketMessageTypeId` | `public string SocketMessageTypeId { get; }` |

## 主要方法

### GetTypeId
`public static string GetTypeId(Type messageType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 type id 的结果。

```csharp
// 静态调用，不需要实例
JsonSocketMessage.GetTypeId(messageType);
```

### GetMessageDictionary
`public static Dictionary<string, Type> GetMessageDictionary()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 message dictionary 的结果。

```csharp
// 静态调用，不需要实例
JsonSocketMessage.GetMessageDictionary();
```

## 使用示例

```csharp
JsonSocketMessage.GetTypeId(messageType);
```

## 参见

- [本区域目录](../)