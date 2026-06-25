---
title: "JwtSettings"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JwtSettings`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JwtSettings

**Namespace:** Jose
**Module:** Jose
**Type:** `public class JwtSettings`
**Base:** 无
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/JwtSettings.cs`

## 概述

`JwtSettings` 位于 `Jose`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Jose` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `JsonMapper` | `public IJsonMapper JsonMapper { get; set; }` |

## 主要方法

### RegisterJwa
`public JwtSettings RegisterJwa(JweAlgorithm alg, IKeyManagement impl)`

**用途 / Purpose:** 处理 `register jwa` 相关逻辑。

### RegisterJwaAlias
`public JwtSettings RegisterJwaAlias(string alias, JweAlgorithm alg)`

**用途 / Purpose:** 处理 `register jwa alias` 相关逻辑。

### RegisterJwe
`public JwtSettings RegisterJwe(JweEncryption alg, IJweAlgorithm impl)`

**用途 / Purpose:** 处理 `register jwe` 相关逻辑。

### RegisterJweAlias
`public JwtSettings RegisterJweAlias(string alias, JweEncryption alg)`

**用途 / Purpose:** 处理 `register jwe alias` 相关逻辑。

### RegisterCompression
`public JwtSettings RegisterCompression(JweCompression alg, ICompression impl)`

**用途 / Purpose:** 处理 `register compression` 相关逻辑。

### RegisterCompressionAlias
`public JwtSettings RegisterCompressionAlias(string alias, JweCompression alg)`

**用途 / Purpose:** 处理 `register compression alias` 相关逻辑。

### RegisterJws
`public JwtSettings RegisterJws(JwsAlgorithm alg, IJwsAlgorithm impl)`

**用途 / Purpose:** 处理 `register jws` 相关逻辑。

### RegisterJwsAlias
`public JwtSettings RegisterJwsAlias(string alias, JwsAlgorithm alg)`

**用途 / Purpose:** 处理 `register jws alias` 相关逻辑。

### RegisterMapper
`public JwtSettings RegisterMapper(IJsonMapper mapper)`

**用途 / Purpose:** 处理 `register mapper` 相关逻辑。

### Jws
`public IJwsAlgorithm Jws(JwsAlgorithm alg)`

**用途 / Purpose:** 处理 `jws` 相关逻辑。

### JwsHeaderValue
`public string JwsHeaderValue(JwsAlgorithm algorithm)`

**用途 / Purpose:** 处理 `jws header value` 相关逻辑。

### JwsAlgorithmFromHeader
`public JwsAlgorithm JwsAlgorithmFromHeader(string headerValue)`

**用途 / Purpose:** 处理 `jws algorithm from header` 相关逻辑。

### Jwe
`public IJweAlgorithm Jwe(JweEncryption alg)`

**用途 / Purpose:** 处理 `jwe` 相关逻辑。

### JweHeaderValue
`public string JweHeaderValue(JweEncryption algorithm)`

**用途 / Purpose:** 处理 `jwe header value` 相关逻辑。

### JweAlgorithmFromHeader
`public JweEncryption JweAlgorithmFromHeader(string headerValue)`

**用途 / Purpose:** 处理 `jwe algorithm from header` 相关逻辑。

### Jwa
`public IKeyManagement Jwa(JweAlgorithm alg)`

**用途 / Purpose:** 处理 `jwa` 相关逻辑。

### JwaHeaderValue
`public string JwaHeaderValue(JweAlgorithm alg)`

**用途 / Purpose:** 处理 `jwa header value` 相关逻辑。

### JwaAlgorithmFromHeader
`public JweAlgorithm JwaAlgorithmFromHeader(string headerValue)`

**用途 / Purpose:** 处理 `jwa algorithm from header` 相关逻辑。

### Compression
`public ICompression Compression(JweCompression alg)`

**用途 / Purpose:** 处理 `compression` 相关逻辑。

### Compression
`public ICompression Compression(string alg)`

**用途 / Purpose:** 处理 `compression` 相关逻辑。

### CompressionHeader
`public string CompressionHeader(JweCompression value)`

**用途 / Purpose:** 处理 `compression header` 相关逻辑。

### CompressionAlgFromHeader
`public JweCompression CompressionAlgFromHeader(string header)`

**用途 / Purpose:** 处理 `compression alg from header` 相关逻辑。

## 使用示例

```csharp
var value = new JwtSettings();
value.RegisterJwa(alg, impl);
```

## 参见

- [完整类目录](../catalog)