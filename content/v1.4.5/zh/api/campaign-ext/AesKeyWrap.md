---
title: "AesKeyWrap"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AesKeyWrap`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AesKeyWrap

**命名空间:** Jose
**模块:** Jose
**类型:** `public static class AesKeyWrap`
**领域:** campaign-ext

## 概述

`AesKeyWrap` 位于 `Jose`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `Jose` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Wrap
`public static byte Wrap(byte cek, byte kek)`

**用途 / Purpose:** 处理 `wrap` 相关逻辑。

### Unwrap
`public static byte Unwrap(byte encryptedCek, byte kek)`

**用途 / Purpose:** 处理 `unwrap` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
AesKeyWrap.Wrap(0, 0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
