---
title: "RsaKeyManagement"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RsaKeyManagement`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RsaKeyManagement

**Namespace:** Jose
**Module:** Jose
**Type:** `public class RsaKeyManagement : IKeyManagement`
**Base:** `IKeyManagement`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/RsaKeyManagement.cs`

## 概述

`RsaKeyManagement` 位于 `Jose`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Jose` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### WrapNewKey
`public byte WrapNewKey(int cekSizeBits, object key, IDictionary<string, object> header)`

**用途 / Purpose:** 处理 `wrap new key` 相关逻辑。

### Unwrap
`public byte Unwrap(byte encryptedCek, object key, int cekSizeBits, IDictionary<string, object> header)`

**用途 / Purpose:** 处理 `unwrap` 相关逻辑。

## 使用示例

```csharp
var value = new RsaKeyManagement();
value.WrapNewKey(0, key, iDictionary<string, header);
```

## 参见

- [完整类目录](../catalog)