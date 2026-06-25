---
title: "JsonObjectAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonObjectAttribute`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonObjectAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public sealed class JsonObjectAttribute : JsonContainerAttribute`
**Base:** `JsonContainerAttribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonObjectAttribute.cs`

## 概述

`JsonObjectAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `JsonObjectAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MemberSerialization` | `public MemberSerialization MemberSerialization { get; set; }` |
| `MissingMemberHandling` | `public MissingMemberHandling MissingMemberHandling { get; set; }` |
| `ItemNullValueHandling` | `public NullValueHandling ItemNullValueHandling { get; set; }` |
| `ItemRequired` | `public Required ItemRequired { get; set; }` |

## 使用示例

```csharp
[JsonObjectAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)