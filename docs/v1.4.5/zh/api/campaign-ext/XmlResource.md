<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `XmlResource`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# XmlResource

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public static class XmlResource`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/XmlResource.cs`

## 概述

`XmlResource` 位于 `TaleWorlds.ObjectSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### XsdElement
`public struct XsdElement(string xPath, bool alwaysPreferMerge)`

**用途 / Purpose:** 处理 `xsd element` 相关逻辑。

### ReadXsdFileAndExtractInformation
`public static void ReadXsdFileAndExtractInformation(string xsdFilePath)`

**用途 / Purpose:** 处理 `read xsd file and extract information` 相关逻辑。

### GetFullXPathOfElement
`public static string GetFullXPathOfElement(XElement element, bool isXsd = true)`

**用途 / Purpose:** 获取 `full x path of element` 的当前值。

### InitializeXmlInformationList
`public static void InitializeXmlInformationList(List<MbObjectXmlInformation> xmlInformation)`

**用途 / Purpose:** 初始化 `xml information list` 的状态、资源或绑定。

### GetMbprojxmls
`public static void GetMbprojxmls(string moduleName)`

**用途 / Purpose:** 获取 `mbprojxmls` 的当前值。

### GetXmlListAndApply
`public static void GetXmlListAndApply(string moduleName)`

**用途 / Purpose:** 获取 `xml list and apply` 的当前值。

## 使用示例

```csharp
var value = new XmlResource();
value.XsdElement("example", false);
```

## 参见

- [完整类目录](../catalog)