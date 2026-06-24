<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EccKey`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EccKey

**命名空间:** Security.Cryptography
**模块:** Security.Cryptography
**类型:** `public class EccKey`
**领域:** campaign-ext

## 概述

`EccKey` 位于 `Security.Cryptography`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `Security.Cryptography` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `X` | `public byte X { get; }` |
| `Y` | `public byte Y { get; }` |
| `D` | `public byte D { get; }` |

## 主要方法

### New
`public static CngKey New(byte x, byte y, byte d = null, CngKeyUsages usage = CngKeyUsages.Signing)`

**用途 / Purpose:** 处理 `new` 相关逻辑。

### Generate
`public static EccKey Generate(CngKey receiverPubKey)`

**用途 / Purpose:** 处理 `generate` 相关逻辑。

### Export
`public static EccKey Export(CngKey _key)`

**用途 / Purpose:** 处理 `export` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
EccKey.New(0, 0, 0, cngKeyUsages.Signing);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
