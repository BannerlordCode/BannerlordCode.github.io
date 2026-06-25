---
title: "RsaPssUsingSha"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RsaPssUsingSha`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RsaPssUsingSha

**Namespace:** Jose
**Module:** Jose
**Type:** `public class RsaPssUsingSha : IJwsAlgorithm`
**Base:** `IJwsAlgorithm`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/RsaPssUsingSha.cs`

## 概述

`RsaPssUsingSha` 位于 `Jose`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Jose` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Sign
`public byte Sign(byte securedInput, object key)`

**用途 / Purpose:** 处理 `sign` 相关逻辑。

### Verify
`public bool Verify(byte signature, byte securedInput, object key)`

**用途 / Purpose:** 处理 `verify` 相关逻辑。

## 使用示例

```csharp
var value = new RsaPssUsingSha();
value.Sign(0, key);
```

## 参见

- [完整类目录](../catalog)