---
title: "MBObjectManager"
description: "MBObjectManager 的自动生成类参考。"
---
# MBObjectManager

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public sealed class MBObjectManager`
**Base:** 无
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectManager.cs`

## 概述

`MBObjectManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MBObjectManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MBObjectManager Instance { get; }` |
| `NumRegisteredTypes` | `public int NumRegisteredTypes { get; }` |

## 主要方法

### GetMBObject
`public MBObjectBase GetMBObject(MBGUID objId)`

**用途 / Purpose:** 读取并返回当前对象中 「m b object」 的结果。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.GetMBObject(objId);
```

### Init
`public static MBObjectManager Init()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
MBObjectManager.Init();
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理与 「destroy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.Destroy();
```

### HasType
`public bool HasType(Type type)`

**用途 / Purpose:** 判断当前对象是否已经持有 「type」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.HasType(type);
```

### FindRegisteredClassPrefix
`public string FindRegisteredClassPrefix(Type type)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「registered class prefix」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.FindRegisteredClassPrefix(type);
```

### FindRegisteredType
`public Type FindRegisteredType(string classPrefix)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「registered type」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.FindRegisteredType("example");
```

### UnregisterObject
`public void UnregisterObject(MBObjectBase obj)`

**用途 / Purpose:** 从当前系统中注销「object」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.UnregisterObject(obj);
```

### RemoveTemporaryTypes
`public void RemoveTemporaryTypes()`

**用途 / Purpose:** 从当前容器或状态中移除 「temporary types」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.RemoveTemporaryTypes();
```

### PreAfterLoad
`public void PreAfterLoad()`

**用途 / Purpose:** 处理与 「pre after load」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.PreAfterLoad();
```

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 在 「load」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.AfterLoad();
```

### GetObject
`public MBObjectBase GetObject(MBGUID objectId)`

**用途 / Purpose:** 读取并返回当前对象中 「object」 的结果。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.GetObject(objectId);
```

### GetObject
`public MBObjectBase GetObject(string typeName, string objectName)`

**用途 / Purpose:** 读取并返回当前对象中 「object」 的结果。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.GetObject("example", "example");
```

### CreateObjectTypeList
`public IList<MBObjectBase> CreateObjectTypeList(Type objectClassType)`

**用途 / Purpose:** 构建一个新的 「object type list」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.CreateObjectTypeList(objectClassType);
```

### LoadXML
`public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)`

**用途 / Purpose:** 从持久化存储或流中读取 「x m l」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.LoadXML("example", false, "example", false);
```

### MergeElementAttributes
`public static bool MergeElementAttributes(XElement element1, XElement element2)`

**用途 / Purpose:** 处理与 「merge element attributes」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBObjectManager.MergeElementAttributes(element1, element2);
```

### MergeElements
`public static void MergeElements(XElement element1, XElement element2, string xsdPath)`

**用途 / Purpose:** 处理与 「merge elements」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBObjectManager.MergeElements(element1, element2, "example");
```

### GetMergedXmlForManaged
`public static XmlDocument GetMergedXmlForManaged(string id, bool skipValidation, bool ignoreGameTypeInclusionCheck = true, string gameType = "")`

**用途 / Purpose:** 读取并返回当前对象中 「merged xml for managed」 的结果。

```csharp
// 静态调用，不需要实例
MBObjectManager.GetMergedXmlForManaged("example", false, false, "example");
```

### GetMergedXmlForNative
`public static XmlDocument GetMergedXmlForNative(string id, out List<string> usedPaths)`

**用途 / Purpose:** 读取并返回当前对象中 「merged xml for native」 的结果。

```csharp
// 静态调用，不需要实例
MBObjectManager.GetMergedXmlForNative("example", usedPaths);
```

### CreateMergedXmlFile
`public static XmlDocument CreateMergedXmlFile(List<Tuple<string, string>> toBeMerged, List<string> xsltList, bool skipValidation)`

**用途 / Purpose:** 构建一个新的 「merged xml file」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MBObjectManager.CreateMergedXmlFile(list<Tuple<string, "example", xsltList, false);
```

### ApplyXslt
`public static XmlDocument ApplyXslt(string xsltPath, XmlDocument baseDocument)`

**用途 / Purpose:** 将 「xslt」 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
MBObjectManager.ApplyXslt("example", baseDocument);
```

### MergeTwoXmls
`public static XmlDocument MergeTwoXmls(XmlDocument xmlDocument1, XmlDocument xmlDocument2, string xsdPath, bool keepDuplicates)`

**用途 / Purpose:** 处理与 「merge two xmls」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBObjectManager.MergeTwoXmls(xmlDocument1, xmlDocument2, "example", false);
```

### ToXDocument
`public static XDocument ToXDocument(XmlDocument xmlDocument)`

**用途 / Purpose:** 处理与 「to x document」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBObjectManager.ToXDocument(xmlDocument);
```

### ToXmlDocument
`public static XmlDocument ToXmlDocument(XDocument xDocument)`

**用途 / Purpose:** 处理与 「to xml document」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MBObjectManager.ToXmlDocument(xDocument);
```

### LoadOneXmlFromFile
`public void LoadOneXmlFromFile(string xmlPath, string xsdPath, bool skipValidation = false)`

**用途 / Purpose:** 从持久化存储或流中读取 「one xml from file」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.LoadOneXmlFromFile("example", "example", false);
```

### LoadXMLFromFileSkipValidation
`public XmlDocument LoadXMLFromFileSkipValidation(string xmlPath, string xsdPath)`

**用途 / Purpose:** 从持久化存储或流中读取 「x m l from file skip validation」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.LoadXMLFromFileSkipValidation("example", "example");
```

### LoadXml
`public void LoadXml(XmlDocument doc, bool isDevelopment = false)`

**用途 / Purpose:** 从持久化存储或流中读取 「xml」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.LoadXml(doc, false);
```

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node)`

**用途 / Purpose:** 构建一个新的 「object from xml node」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.CreateObjectFromXmlNode(node);
```

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node, string typeName)`

**用途 / Purpose:** 构建一个新的 「object from xml node」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.CreateObjectFromXmlNode(node, "example");
```

### CreateObjectWithoutDeserialize
`public MBObjectBase CreateObjectWithoutDeserialize(XmlNode node)`

**用途 / Purpose:** 构建一个新的 「object without deserialize」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.CreateObjectWithoutDeserialize(node);
```

### UnregisterNonReadyObjects
`public void UnregisterNonReadyObjects()`

**用途 / Purpose:** 从当前系统中注销「non ready objects」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.UnregisterNonReadyObjects();
```

### ClearAllObjects
`public void ClearAllObjects()`

**用途 / Purpose:** 清空当前对象中的「all objects」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.ClearAllObjects();
```

### ClearAllObjectsWithType
`public void ClearAllObjectsWithType(Type type)`

**用途 / Purpose:** 清空当前对象中的「all objects with type」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.ClearAllObjectsWithType(type);
```

### ReadObjectReferenceFromXml
`public MBObjectBase ReadObjectReferenceFromXml(string attributeName, Type objectType, XmlNode node)`

**用途 / Purpose:** 读取「object reference from xml」的数据或状态。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.ReadObjectReferenceFromXml("example", objectType, node);
```

### DebugPrint
`public void DebugPrint(PrintOutputDelegate printOutput)`

**用途 / Purpose:** 处理与 「debug print」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.DebugPrint(printOutput);
```

### AddHandler
`public void AddHandler(IObjectManagerHandler handler)`

**用途 / Purpose:** 将 「handler」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.AddHandler(handler);
```

### RemoveHandler
`public void RemoveHandler(IObjectManagerHandler handler)`

**用途 / Purpose:** 从当前容器或状态中移除 「handler」。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.RemoveHandler(handler);
```

### DebugDump
`public string DebugDump()`

**用途 / Purpose:** 处理与 「debug dump」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.DebugDump();
```

### ReInitialize
`public void ReInitialize()`

**用途 / Purpose:** 处理与 「re initialize」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
mBObjectManager.ReInitialize();
```

### GetObjectTypeIds
`public string GetObjectTypeIds()`

**用途 / Purpose:** 读取并返回当前对象中 「object type ids」 的结果。

```csharp
// 先通过子系统 API 拿到 MBObjectManager 实例
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.GetObjectTypeIds();
```

## 使用示例

```csharp
var manager = MBObjectManager.Current;
```

## 参见

- [本区域目录](../)