<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BCRYPT_PSS_PADDING_INFO`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BCRYPT_PSS_PADDING_INFO

**命名空间:** Jose.native
**模块:** Jose.native
**类型:** `public struct BCRYPT_PSS_PADDING_INFO`
**领域:** campaign-ext

## 概述

`BCRYPT_PSS_PADDING_INFO` 位于 `Jose.native`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 BCRYPT_PSS_PADDING_INFO 实例，再调用它的公开方法
var value = new BCRYPT_PSS_PADDING_INFO();
value.BCRYPT_PSS_PADDING_INFO("example", 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
