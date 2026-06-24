<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonContainerAttribute`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonContainerAttribute

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public abstract class JsonContainerAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/JsonContainerAttribute.cs`

## 概述

`JsonContainerAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `JsonContainerAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string? Id { get; set; }` |
| `Title` | `public string? Title { get; set; }` |
| `Description` | `public string? Description { get; set; }` |
| `ItemConverterType` | `public Type? ItemConverterType { get; set; }` |
| `ItemConverterParameters` | `public object ? ItemConverterParameters { get; set; }` |
| `NamingStrategyType` | `public Type? NamingStrategyType { get; set; }` |
| `NamingStrategyParameters` | `public object ? NamingStrategyParameters { get; set; }` |
| `IsReference` | `public bool IsReference { get; set; }` |
| `ItemIsReference` | `public bool ItemIsReference { get; set; }` |
| `ItemReferenceLoopHandling` | `public ReferenceLoopHandling ItemReferenceLoopHandling { get; set; }` |
| `ItemTypeNameHandling` | `public TypeNameHandling ItemTypeNameHandling { get; set; }` |

## 使用示例

```csharp
var implementation = new CustomJsonContainerAttribute();
```

## 参见

- [完整类目录](../catalog)