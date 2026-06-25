---
title: "MethodData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MethodData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MethodData

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class MethodData`
**Base:** 无
**File:** `Bannerlord.Source/bin/System.Management/System.Management/MethodData.cs`

## 概述

`MethodData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MethodData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `InParameters` | `public ManagementBaseObject InParameters { get; }` |
| `Name` | `public string Name { get; }` |
| `Origin` | `public string Origin { get; }` |
| `OutParameters` | `public ManagementBaseObject OutParameters { get; }` |
| `Qualifiers` | `public QualifierDataCollection Qualifiers { get; }` |

## 使用示例

```csharp
var value = new MethodData();
```

## 参见

- [完整类目录](../catalog)