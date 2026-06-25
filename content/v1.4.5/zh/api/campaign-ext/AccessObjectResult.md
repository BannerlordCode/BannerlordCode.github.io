---
title: "AccessObjectResult"
description: "AccessObjectResult 的自动生成类参考。"
---
# AccessObjectResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class AccessObjectResult`
**Base:** 无
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/AccessObjectResult.cs`

## 概述

`AccessObjectResult` 位于 `TaleWorlds.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AccessObject` | `public AccessObject AccessObject { get; set; }` |
| `Success` | `public bool Success { get; set; }` |
| `FailReason` | `public TextObject FailReason { get; set; }` |

## 主要方法

### CreateSuccess
`public static AccessObjectResult CreateSuccess(AccessObject accessObject)`

**用途 / Purpose:** 构建一个新的 「success」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
AccessObjectResult.CreateSuccess(accessObject);
```

### CreateFailed
`public static AccessObjectResult CreateFailed(TextObject failReason)`

**用途 / Purpose:** 构建一个新的 「failed」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
AccessObjectResult.CreateFailed(failReason);
```

## 使用示例

```csharp
AccessObjectResult.CreateSuccess(accessObject);
```

## 参见

- [本区域目录](../)