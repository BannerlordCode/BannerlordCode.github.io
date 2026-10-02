---
title: "XmlResource"
description: "XmlResource：TaleWorlds.ObjectSystem 的 public 类；公开成员 11 个（方法 5、属性 1、字段 4）。源文件 TaleWorlds.ObjectSystem/XmlResource.cs。"
---
# XmlResource

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public static class XmlResource`
**File:** `TaleWorlds.ObjectSystem/XmlResource.cs`

## 概述

XmlResource 位于 TaleWorlds.ObjectSystem 模块，源文件 TaleWorlds.ObjectSystem/XmlResource.cs。它是一个 public 类，继承链为 XmlResource。public/protected 成员共 11 个：5 方法、1 属性、4 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：XmlResource 是 TaleWorlds.ObjectSystem 的顶层类型，命名空间与模块目录一致，继承链 XmlResource。成员构成以方法为主（方法 5/11，属性 1/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ObjectSystem/XmlResource.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReadXsdFileAndExtractInformation` | `public static void ReadXsdFileAndExtractInformation(string xsdFilePath)` | 方法 |
| `GetFullXPathOfElement` | `public static string GetFullXPathOfElement(XElement element, bool isXsd = true)` | 方法 |
| `InitializeXmlInformationList` | `public static void InitializeXmlInformationList(List<MbObjectXmlInformation>xmlInformation)` | 方法 |
| `GetMbprojxmls` | `public static void GetMbprojxmls(string moduleName)` | 方法 |
| `GetXmlListAndApply` | `public static void GetXmlListAndApply(string moduleName)` | 方法 |
| `List` | `public static List<MbObjectXmlInformation>XmlInformationList` | 字段 |
| `List` | `public static List<MbObjectXmlInformation>MbprojXmls` | 字段 |
| `XmlResource.XsdElement>>XsdElementDictionary` | `public static Dictionary<string, Dictionary<string, XmlResource.XsdElement>>XsdElementDictionary` | 字段 |
| `XsNamespace` | `public static XNamespace XsNamespace` | 字段 |
| `XsdElement` | `public struct XsdElement` | 属性 |
| `XsdElement` | `public struct XsdElement` | 嵌套类型 |

## 参见

- [↑ objectsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 IObjectManagerHandler](../IObjectManagerHandler)
- [同命名空间 MBCanNotCreatePresumedObjectException](../MBCanNotCreatePresumedObjectException)
- [同命名空间 MBGUID](../MBGUID)
- [同命名空间 MBIllegalRegisterException](../MBIllegalRegisterException)
