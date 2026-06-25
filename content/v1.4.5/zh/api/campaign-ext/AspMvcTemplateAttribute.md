---
title: "AspMvcTemplateAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AspMvcTemplateAttribute`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AspMvcTemplateAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class AspMvcTemplateAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/JetBrains.Annotations/AspMvcTemplateAttribute.cs`

## 概述

`AspMvcTemplateAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `AspMvcTemplateAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
[AspMvcTemplateAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)