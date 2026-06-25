---
title: "OnErrorAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OnErrorAttribute`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OnErrorAttribute

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public sealed class OnErrorAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/OnErrorAttribute.cs`

## 概述

`OnErrorAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `OnErrorAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
[OnErrorAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)