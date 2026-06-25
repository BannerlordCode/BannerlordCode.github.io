---
title: "XsdElement"
description: "XsdElement 的自动生成类参考。"
---
# XsdElement

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct XsdElement`
**Base:** 无
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/XmlResource.cs`

## 概述

`XsdElement` 位于 `TaleWorlds.ObjectSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### XsdElement
`public struct XsdElement(string xPath, bool alwaysPreferMerge)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 XsdElement 实例
XsdElement xsdElement = ...;
var result = xsdElement.XsdElement("example", false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
XsdElement xsdElement = ...;
xsdElement.XsdElement("example", false);
```

## 参见

- [本区域目录](../)