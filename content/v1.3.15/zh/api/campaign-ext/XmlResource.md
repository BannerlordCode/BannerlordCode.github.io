---
title: "XmlResource"
description: "XmlResource 的自动生成类参考。"
---
# XmlResource

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public static class XmlResource`
**Base:** 无
**File:** `TaleWorlds.ObjectSystem/XmlResource.cs`

## 概述

`XmlResource` 位于 `TaleWorlds.ObjectSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ReadXsdFileAndExtractInformation
`public static void ReadXsdFileAndExtractInformation(string xsdFilePath)`

**用途 / Purpose:** 读取「xsd file and extract information」的数据或状态。

```csharp
// 静态调用，不需要实例
XmlResource.ReadXsdFileAndExtractInformation("example");
```

### GetFullXPathOfElement
`public static string GetFullXPathOfElement(XElement element, bool isXsd = true)`

**用途 / Purpose:** 读取并返回当前对象中 「full x path of element」 的结果。

```csharp
// 静态调用，不需要实例
XmlResource.GetFullXPathOfElement(element, false);
```

### InitializeXmlInformationList
`public static void InitializeXmlInformationList(List<MbObjectXmlInformation> xmlInformation)`

**用途 / Purpose:** 为 「xml information list」 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
XmlResource.InitializeXmlInformationList(xmlInformation);
```

### GetMbprojxmls
`public static void GetMbprojxmls(string moduleName)`

**用途 / Purpose:** 读取并返回当前对象中 「mbprojxmls」 的结果。

```csharp
// 静态调用，不需要实例
XmlResource.GetMbprojxmls("example");
```

### GetXmlListAndApply
`public static void GetXmlListAndApply(string moduleName)`

**用途 / Purpose:** 读取并返回当前对象中 「xml list and apply」 的结果。

```csharp
// 静态调用，不需要实例
XmlResource.GetXmlListAndApply("example");
```

## 使用示例

```csharp
XmlResource.ReadXsdFileAndExtractInformation("example");
```

## 参见

- [本区域目录](../)