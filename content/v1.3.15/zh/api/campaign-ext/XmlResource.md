---
title: XmlResource
description: XmlResource - XML 架构与模块资源加载器
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `XmlResource`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# XmlResource
**命名空间:** TaleWorlds.ObjectSystem
**模块:** TaleWorlds.ObjectSystem
**类型:** static class

## 概述
`XmlResource

` ?XML 资源管理工具类，负责从模块的 XSD（XML Schema Definition）文件和 mbproj 项目文件中提取对象定义信息。它在游戏加载时解析各模块的 XML 架构，提取元素路径、唯一属性和合并策略，构?

`XsdElementDictionary

` 供后续对象加载使用?
核心数据结构：`XsdElement

` 结构体存储每?XSD 元素?XPath、是否总是优先合并（`AlwaysPreferMerge

`）和唯一属性列表（

`UniqueAttributes

`）。`XmlInformationList

` ?

`MbprojXmls

` 存储 

`MbObjectXmlInformation

` 对象，描述每?XML 文件?ID、名称、模块名和适用的游戏类型?
## 心智模型
?

`XmlResource

` 看作"模块 XML 架构解析?。：游戏加载模块 ?读取 mbproj 文件获取文件列表 ?读取每个 XSD 提取元素定义和约束?结果存入静态字典供后续 

`MBObjectManager

` 加载对象时使用?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`XmlInformationList

` \| 

`List&lt;MbObjectXmlInformation&gt;

` \| XML 信息列表 \|
\| 

`MbprojXmls

` \| 

`List&lt;MbObjectXmlInformation&gt;

` \| mbproj 文件信息列表 \|
\| 

`XsdElementDictionary

` \| 

`Dictionary&lt;string, Dictionary&lt;string, XsdElement&gt;&gt;

` \| XSD 元素字典（按 XSD 文件路径 ?XPath ?元素?\|
\| 

`XsNamespace

` \| 

`XNamespace

` \| XSD 儿子命名空间 = 

`http://www.w3.org/2001/XMLSchema

` \|

## 主要方法
### ReadXsdFileAndExtractInformation
`

`

`csharp
public static void ReadXsdFileAndExtractInformation(string xsdFilePath)
`

`

`
读取 XSD 文件，提取所?

`xs:element

` 的完?XPath ?

`AlwaysPreferMerge

` 注解，以?

`xs:unique

`/

`xs:key

` 约束的唯一字段属性。结果存?

`XsdElementDictionary

`?
### GetFullXPathOfElement
`

`

`csharp
public static string GetFullXPathOfElement(XElement element, bool isXsd = true)
`

`

`
递归构建 XML 元素的完?XPath。XSD 模式下取 

`name

`/

`ref

` 属性作为路径段；普?XML 模式下取元素名?
### InitializeXmlInformationList
`

`

`csharp
public static void InitializeXmlInformationList(List&lt;MbObjectXmlInformation&gt; xmlInformation)
`

`

`
初始?

`XmlInformationList

` 供后续使用?
### GetMbprojxmls
`

`

`csharp
public static void GetMbprojxmls(string moduleName)
`

`

`
读取模块?mbproj 文件，提?

`file

` 节点?ID ?Name 属性，为每个文件创?

`MbObjectXmlInformation

` 并加?

`MbprojXmls

`。同时读取对应的 XSD 文件?
### GetXmlListAndApply
`

`

`csharp
public static void GetXmlListAndApply(string moduleName)
`

`

`
读取模块?Module XML 文件，提?

`Xmls/XmlNode

` 列表中的 XML 名称、路径和适用游戏类型，为每个创建 

`MbObjectXmlInformation

` 并加?

`XmlInformationList

`。同时读取对应的 XSD 文件?
### GetAlwaysPreferMerge (private)
`

`

`csharp
private static bool GetAlwaysPreferMerge(XElement element)
`

`

`
检?XSD 元素?

`appinfo/appSpecificNote

` 是否?

`AlwaysPreferMerge

`?
## 使用示例
### 示例: 模块加载时解?XML 架构
**场景**: 游戏加载模块?XML 定义
`

`

`csharp
// 通常由引擎自动调用，不需手动调用
XmlResource.InitializeXmlInformationList(new List&lt;MbObjectXmlInformation&gt;());
XmlResource.GetMbprojxmls("MyModule");
XmlResource.GetXmlListAndApply("MyModule");
// 之后 XmlResource.XmlInformationList 包含该模块所?XML 定义
`

`

`
**要点**: 此类主要由引擎内部调用，Mod 通常不需要直接调用?
## 参见
- [完整类目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
