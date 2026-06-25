---
title: "AesHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AesHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AesHelper

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public static class AesHelper`
**Base:** 无
**File:** `TaleWorlds.Diamond/AesHelper.cs`

## 概述

`AesHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `AesHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Encrypt
`public static byte Encrypt(byte plainData, byte key, byte initializationVector)`

**用途 / Purpose:** 处理 `encrypt` 相关逻辑。

### Decrypt
`public static byte Decrypt(byte encrypted, byte key, byte initializationVector)`

**用途 / Purpose:** 处理 `decrypt` 相关逻辑。

## 使用示例

```csharp
AesHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)