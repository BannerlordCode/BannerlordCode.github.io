<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `XsdElement`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# XsdElement

**命名空间:** TaleWorlds.ObjectSystem
**模块:** TaleWorlds.ObjectSystem
**类型:** `public struct XsdElement`
**领域:** campaign-ext

## 概述

`XsdElement` 位于 `TaleWorlds.ObjectSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

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
// 先准备该类型需要的上下文，然后直接调用静态入口
XsdElement.ReadXsdFileAndExtractInformation("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
