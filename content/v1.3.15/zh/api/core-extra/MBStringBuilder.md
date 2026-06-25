---
title: "MBStringBuilder"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBStringBuilder`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBStringBuilder

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MBStringBuilder`
**Base:** 无
**File:** `TaleWorlds.Library/MBStringBuilder.cs`

## 概述

`MBStringBuilder` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Length` | `public int Length { get; }` |

## 主要方法

### Initialize
`public void Initialize(int capacity = 16, string callerMemberName = "")`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### ToStringAndRelease
`public string ToStringAndRelease()`

**用途 / Purpose:** 处理 `to string and release` 相关逻辑。

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### Append
`public MBStringBuilder Append(char value)`

**用途 / Purpose:** 处理 `append` 相关逻辑。

### Append
`public MBStringBuilder Append(int value)`

**用途 / Purpose:** 处理 `append` 相关逻辑。

### Append
`public MBStringBuilder Append(uint value)`

**用途 / Purpose:** 处理 `append` 相关逻辑。

### Append
`public MBStringBuilder Append(float value)`

**用途 / Purpose:** 处理 `append` 相关逻辑。

### Append
`public MBStringBuilder Append(double value)`

**用途 / Purpose:** 处理 `append` 相关逻辑。

### AppendLine
`public MBStringBuilder AppendLine()`

**用途 / Purpose:** 处理 `append line` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Acquire
`public static StringBuilder Acquire(int capacity = 16)`

**用途 / Purpose:** 处理 `acquire` 相关逻辑。

### Release
`public static void Release(StringBuilder sb)`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### GetStringAndReleaseBuilder
`public static string GetStringAndReleaseBuilder(StringBuilder sb)`

**用途 / Purpose:** 获取 `string and release builder` 的当前值。

## 使用示例

```csharp
var value = new MBStringBuilder();
value.Initialize(0, "example");
```

## 参见

- [完整类目录](../catalog)