<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NCryptBufferDesc`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NCryptBufferDesc

**命名空间:** Jose.native
**模块:** Jose.native
**类型:** `public class NCryptBufferDesc : IDisposable`
**Base:** `IDisposable`
**领域:** campaign-ext

## 概述

`NCryptBufferDesc` 位于 `Jose.native`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 NCryptBufferDesc 实例，再调用它的公开方法
var value = new NCryptBufferDesc();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
