<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BCrypt`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BCrypt

**Namespace:** Jose.native
**Module:** Jose.native
**Type:** `public static class BCrypt`
**Base:** 无
**File:** `Bannerlord.Source/bin/jose-jwt/Jose.native/BCrypt.cs`

## 概述

`BCrypt` 位于 `Jose.native`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Jose.native` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### BCRYPT_PSS_PADDING_INFO
`public struct BCRYPT_PSS_PADDING_INFO(string pszAlgId, int cbSalt)`

**用途 / Purpose:** 处理 `b c r y p t_ p s s_ p a d d i n g_ i n f o` 相关逻辑。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### BCRYPT_OAEP_PADDING_INFO
`public struct BCRYPT_OAEP_PADDING_INFO(string alg)`

**用途 / Purpose:** 处理 `b c r y p t_ o a e p_ p a d d i n g_ i n f o` 相关逻辑。

### BCryptOpenAlgorithmProvider
`public static extern uint BCryptOpenAlgorithmProvider(out IntPtr phAlgorithm, string pszAlgId, string pszImplementation, uint dwFlags)`

**用途 / Purpose:** 处理 `b crypt open algorithm provider` 相关逻辑。

### BCryptCloseAlgorithmProvider
`public static extern uint BCryptCloseAlgorithmProvider(IntPtr hAlgorithm, uint flags)`

**用途 / Purpose:** 处理 `b crypt close algorithm provider` 相关逻辑。

### BCryptGetProperty
`public static extern uint BCryptGetProperty(IntPtr hObject, string pszProperty, byte pbOutput, int cbOutput, ref int pcbResult, uint flags)`

**用途 / Purpose:** 处理 `b crypt get property` 相关逻辑。

### BCryptImportKey
`public static extern uint BCryptImportKey(IntPtr hAlgorithm, IntPtr hImportKey, string pszBlobType, out IntPtr phKey, IntPtr pbKeyObject, int cbKeyObject, byte pbInput, int cbInput, uint dwFlags)`

**用途 / Purpose:** 处理 `b crypt import key` 相关逻辑。

### BCryptDestroyKey
`public static extern uint BCryptDestroyKey(IntPtr hKey)`

**用途 / Purpose:** 处理 `b crypt destroy key` 相关逻辑。

### BCryptEncrypt
`public static extern uint BCryptEncrypt(IntPtr hKey, byte pbInput, int cbInput, ref BCRYPT_AUTHENTICATED_CIPHER_MODE_INFO pPaddingInfo, byte pbIV, int cbIV, byte pbOutput, int cbOutput, ref int pcbResult, uint dwFlags)`

**用途 / Purpose:** 处理 `b crypt encrypt` 相关逻辑。

## 使用示例

```csharp
var value = new BCrypt();
value.BCRYPT_PSS_PADDING_INFO("example", 0);
```

## 参见

- [完整类目录](../catalog)