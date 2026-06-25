---
title: "JsonPropertyAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonPropertyAttribute`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonPropertyAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public sealed class JsonPropertyAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonPropertyAttribute.cs`

## 概述

`JsonPropertyAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `JsonPropertyAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ItemConverterType` | `public Type? ItemConverterType { get; set; }` |
| `ItemConverterParameters` | `public object ? ItemConverterParameters { get; set; }` |
| `NamingStrategyType` | `public Type? NamingStrategyType { get; set; }` |
| `NamingStrategyParameters` | `public object ? NamingStrategyParameters { get; set; }` |
| `NullValueHandling` | `public NullValueHandling NullValueHandling { get; set; }` |
| `DefaultValueHandling` | `public DefaultValueHandling DefaultValueHandling { get; set; }` |
| `ReferenceLoopHandling` | `public ReferenceLoopHandling ReferenceLoopHandling { get; set; }` |
| `ObjectCreationHandling` | `public ObjectCreationHandling ObjectCreationHandling { get; set; }` |
| `TypeNameHandling` | `public TypeNameHandling TypeNameHandling { get; set; }` |
| `IsReference` | `public bool IsReference { get; set; }` |
| `Order` | `public int Order { get; set; }` |
| `Required` | `public Required Required { get; set; }` |
| `PropertyName` | `public string? PropertyName { get; set; }` |
| `ItemReferenceLoopHandling` | `public ReferenceLoopHandling ItemReferenceLoopHandling { get; set; }` |
| `ItemTypeNameHandling` | `public TypeNameHandling ItemTypeNameHandling { get; set; }` |
| `ItemIsReference` | `public bool ItemIsReference { get; set; }` |

## 使用示例

```csharp
[JsonPropertyAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)