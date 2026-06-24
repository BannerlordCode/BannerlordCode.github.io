<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NCrypt`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NCrypt

**Namespace:** Jose.native
**Module:** Jose.native
**Type:** `public static class NCrypt`
**Base:** 无
**File:** `Bannerlord.Source/bin/jose-jwt/Jose.native/NCrypt.cs`

## 概述

`NCrypt` 位于 `Jose.native`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Jose.native` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### NCryptSecretAgreement
`public static extern uint NCryptSecretAgreement(SafeNCryptKeyHandle hPrivKey, SafeNCryptKeyHandle hPublicKey, out SafeNCryptSecretHandle phSecret, uint flags)`

**用途 / Purpose:** 处理 `n crypt secret agreement` 相关逻辑。

### NCryptDeriveKey
`public static extern uint NCryptDeriveKey(SafeNCryptSecretHandle hSharedSecret, string kdf, NCryptBufferDesc parameterList, byte derivedKey, uint derivedKeyByteSize, out uint result, uint flags)`

**用途 / Purpose:** 处理 `n crypt derive key` 相关逻辑。

## 使用示例

```csharp
var value = new NCrypt();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)