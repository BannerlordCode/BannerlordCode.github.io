---
title: "Compact"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Compact`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Compact

**Namespace:** Jose
**Module:** Jose
**Type:** `public class Compact`
**Base:** 无
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/Compact.cs`

## 概述

`Compact` 位于 `Jose`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Jose` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Next
`public byte Next(bool decode = true)`

**用途 / Purpose:** 处理 `next` 相关逻辑。

### Serialize
`public static string Serialize(params byte parts)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Serialize
`public static string Serialize(byte header, string payload, params byte other)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Parse
`public static byte Parse(string token)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### Iterate
`public static Iterator Iterate(string token)`

**用途 / Purpose:** 处理 `iterate` 相关逻辑。

## 使用示例

```csharp
var value = new Compact();
value.Next(false);
```

## 参见

- [完整类目录](../catalog)