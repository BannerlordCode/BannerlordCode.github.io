---
title: "MBObjectManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBObjectManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBObjectManager

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public sealed class MBObjectManager`
**Base:** 无
**File:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## 概述

`MBObjectManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBObjectManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MBObjectManager Instance { get; }` |
| `NumRegisteredTypes` | `public int NumRegisteredTypes { get; }` |
| `MaxRegisteredTypes` | `public int MaxRegisteredTypes { get; }` |

## 主要方法

### Init
`public static MBObjectManager Init()`

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### HasType
`public bool HasType(Type type)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `type`。

### FindRegisteredClassPrefix
`public string FindRegisteredClassPrefix(Type type)`

**用途 / Purpose:** 处理 `find registered class prefix` 相关逻辑。

### FindRegisteredType
`public Type FindRegisteredType(string classPrefix)`

**用途 / Purpose:** 处理 `find registered type` 相关逻辑。

### UnregisterObject
`public void UnregisterObject(MBObjectBase obj)`

**用途 / Purpose:** 处理 `unregister object` 相关逻辑。

### RemoveTemporaryTypes
`public void RemoveTemporaryTypes()`

**用途 / Purpose:** 从当前集合/状态中移除 `temporary types`。

### PreAfterLoad
`public void PreAfterLoad()`

**用途 / Purpose:** 处理 `pre after load` 相关逻辑。

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 处理 `after load` 相关逻辑。

### GetObject
`public MBObjectBase GetObject(MBGUID objectId)`

**用途 / Purpose:** 获取 `object` 的当前值。

### GetObject
`public MBObjectBase GetObject(string typeName, string objectName)`

**用途 / Purpose:** 获取 `object` 的当前值。

### CreateObjectTypeList
`public IList<MBObjectBase> CreateObjectTypeList(Type objectClassType)`

**用途 / Purpose:** 创建一个 `object type list` 实例或对象。

### LoadXML
`public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)`

**用途 / Purpose:** 加载 `x m l` 数据。

### MergeElementAttributes
`public static bool MergeElementAttributes(XElement element1, XElement element2)`

**用途 / Purpose:** 处理 `merge element attributes` 相关逻辑。

### MergeElements
`public static void MergeElements(XElement element1, XElement element2, string xsdPath)`

**用途 / Purpose:** 处理 `merge elements` 相关逻辑。

### GetMergedXmlForManaged
`public static XmlDocument GetMergedXmlForManaged(string id, bool skipValidation, bool ignoreGameTypeInclusionCheck = true, string gameType = "")`

**用途 / Purpose:** 获取 `merged xml for managed` 的当前值。

### GetMergedXmlForNative
`public static XmlDocument GetMergedXmlForNative(string id, out List<string> usedPaths)`

**用途 / Purpose:** 获取 `merged xml for native` 的当前值。

### CreateMergedXmlFile
`public static XmlDocument CreateMergedXmlFile(List<Tuple<string, string>> toBeMerged, List<string> xsltList, bool skipValidation)`

**用途 / Purpose:** 创建一个 `merged xml file` 实例或对象。

### ApplyXslt
`public static XmlDocument ApplyXslt(string xsltPath, XmlDocument baseDocument)`

**用途 / Purpose:** 将 `xslt` 应用到当前对象。

### MergeTwoXmls
`public static XmlDocument MergeTwoXmls(XmlDocument xmlDocument1, XmlDocument xmlDocument2, string xsdPath, bool keepDuplicates)`

**用途 / Purpose:** 处理 `merge two xmls` 相关逻辑。

### ToXDocument
`public static XDocument ToXDocument(XmlDocument xmlDocument)`

**用途 / Purpose:** 处理 `to x document` 相关逻辑。

### ToXmlDocument
`public static XmlDocument ToXmlDocument(XDocument xDocument)`

**用途 / Purpose:** 处理 `to xml document` 相关逻辑。

### LoadOneXmlFromFile
`public void LoadOneXmlFromFile(string xmlPath, string xsdPath, bool skipValidation = false)`

**用途 / Purpose:** 加载 `one xml from file` 数据。

### LoadXMLFromFileSkipValidation
`public XmlDocument LoadXMLFromFileSkipValidation(string xmlPath, string xsdPath)`

**用途 / Purpose:** 加载 `x m l from file skip validation` 数据。

### LoadXml
`public void LoadXml(XmlDocument doc, bool isDevelopment = false)`

**用途 / Purpose:** 加载 `xml` 数据。

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node)`

**用途 / Purpose:** 创建一个 `object from xml node` 实例或对象。

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node, string typeName)`

**用途 / Purpose:** 创建一个 `object from xml node` 实例或对象。

### CreateObjectWithoutDeserialize
`public MBObjectBase CreateObjectWithoutDeserialize(XmlNode node)`

**用途 / Purpose:** 创建一个 `object without deserialize` 实例或对象。

### UnregisterNonReadyObjects
`public void UnregisterNonReadyObjects()`

**用途 / Purpose:** 处理 `unregister non ready objects` 相关逻辑。

### ClearAllObjects
`public void ClearAllObjects()`

**用途 / Purpose:** 处理 `clear all objects` 相关逻辑。

### ClearAllObjectsWithType
`public void ClearAllObjectsWithType(Type type)`

**用途 / Purpose:** 处理 `clear all objects with type` 相关逻辑。

### ReadObjectReferenceFromXml
`public MBObjectBase ReadObjectReferenceFromXml(string attributeName, Type objectType, XmlNode node)`

**用途 / Purpose:** 处理 `read object reference from xml` 相关逻辑。

### DebugPrint
`public void DebugPrint(PrintOutputDelegate printOutput)`

**用途 / Purpose:** 处理 `debug print` 相关逻辑。

### AddHandler
`public void AddHandler(IObjectManagerHandler handler)`

**用途 / Purpose:** 向当前集合/状态中添加 `handler`。

### RemoveHandler
`public void RemoveHandler(IObjectManagerHandler handler)`

**用途 / Purpose:** 从当前集合/状态中移除 `handler`。

### DebugDump
`public string DebugDump()`

**用途 / Purpose:** 处理 `debug dump` 相关逻辑。

### ReInitialize
`public void ReInitialize()`

**用途 / Purpose:** 处理 `re initialize` 相关逻辑。

### GetObjectTypeIds
`public string GetObjectTypeIds()`

**用途 / Purpose:** 获取 `object type ids` 的当前值。

### GetMBObject
`public MBObjectBase GetMBObject(MBGUID objId)`

**用途 / Purpose:** 获取 `m b object` 的当前值。

## 使用示例

```csharp
var manager = MBObjectManager.Current;
```

## 参见

- [完整类目录](../catalog)