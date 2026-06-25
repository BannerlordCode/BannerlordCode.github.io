---
title: "MonoPInvokeCallbackAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MonoPInvokeCallbackAttribute`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MonoPInvokeCallbackAttribute

**Namespace:** (global)
**Module:** (global)
**Type:** `public class MonoPInvokeCallbackAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.DotNet/MonoPInvokeCallbackAttribute.cs`

## 概述

`MonoPInvokeCallbackAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `MonoPInvokeCallbackAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
[MonoPInvokeCallbackAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)