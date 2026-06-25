---
title: "UsedImplicitlyAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsedImplicitlyAttribute`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UsedImplicitlyAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class UsedImplicitlyAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/JetBrains/Annotations/UsedImplicitlyAttribute.cs`

## 概述

`UsedImplicitlyAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `UsedImplicitlyAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `UseKindFlags` | `public ImplicitUseKindFlags UseKindFlags { get; }` |
| `TargetFlags` | `public ImplicitUseTargetFlags TargetFlags { get; }` |

## 使用示例

```csharp
[UsedImplicitlyAttribute]
public class Example { }
```

## 参见

- [完整类目录](../catalog)