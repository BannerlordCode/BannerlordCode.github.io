---
title: "UniqueSceneId"
description: "UniqueSceneId 的自动生成类参考。"
---
# UniqueSceneId

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class UniqueSceneId`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/UniqueSceneId.cs`

## 概述

`UniqueSceneId` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UniqueToken` | `public string UniqueToken { get; }` |
| `Revision` | `public string Revision { get; }` |

## 主要方法

### Serialize
`public string Serialize()`

**用途 / Purpose:** 将当前对象序列化为可存储或传输的格式。

```csharp
// 先通过子系统 API 拿到 UniqueSceneId 实例
UniqueSceneId uniqueSceneId = ...;
var result = uniqueSceneId.Serialize();
```

### TryParse
`public static bool TryParse(string uniqueMapId, out UniqueSceneId identifiers)`

**用途 / Purpose:** 尝试获取 「parse」 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
UniqueSceneId.TryParse("example", identifiers);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
UniqueSceneId uniqueSceneId = ...;
uniqueSceneId.Serialize();
```

## 参见

- [本区域目录](../)