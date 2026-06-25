---
title: "MBObjectManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBObjectManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBObjectManager

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public sealed class MBObjectManager`
**Base:** none
**File:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## Overview

`MBObjectManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MBObjectManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static MBObjectManager Instance { get; }` |
| `NumRegisteredTypes` | `public int NumRegisteredTypes { get; }` |
| `MaxRegisteredTypes` | `public int MaxRegisteredTypes { get; }` |

## Key Methods

### Init
`public static MBObjectManager Init()`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### HasType
`public bool HasType(Type type)`

**Purpose:** Checks whether the current object has/contains `type`.

### FindRegisteredClassPrefix
`public string FindRegisteredClassPrefix(Type type)`

**Purpose:** Handles logic related to `find registered class prefix`.

### FindRegisteredType
`public Type FindRegisteredType(string classPrefix)`

**Purpose:** Handles logic related to `find registered type`.

### UnregisterObject
`public void UnregisterObject(MBObjectBase obj)`

**Purpose:** Handles logic related to `unregister object`.

### RemoveTemporaryTypes
`public void RemoveTemporaryTypes()`

**Purpose:** Removes `temporary types` from the current collection or state.

### PreAfterLoad
`public void PreAfterLoad()`

**Purpose:** Handles logic related to `pre after load`.

### AfterLoad
`public void AfterLoad()`

**Purpose:** Handles logic related to `after load`.

### GetObject
`public MBObjectBase GetObject(MBGUID objectId)`

**Purpose:** Gets the current value of `object`.

### GetObject
`public MBObjectBase GetObject(string typeName, string objectName)`

**Purpose:** Gets the current value of `object`.

### CreateObjectTypeList
`public IList<MBObjectBase> CreateObjectTypeList(Type objectClassType)`

**Purpose:** Creates a new `object type list` instance or object.

### LoadXML
`public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)`

**Purpose:** Loads `x m l` data.

### MergeElementAttributes
`public static bool MergeElementAttributes(XElement element1, XElement element2)`

**Purpose:** Handles logic related to `merge element attributes`.

### MergeElements
`public static void MergeElements(XElement element1, XElement element2, string xsdPath)`

**Purpose:** Handles logic related to `merge elements`.

### GetMergedXmlForManaged
`public static XmlDocument GetMergedXmlForManaged(string id, bool skipValidation, bool ignoreGameTypeInclusionCheck = true, string gameType = "")`

**Purpose:** Gets the current value of `merged xml for managed`.

### GetMergedXmlForNative
`public static XmlDocument GetMergedXmlForNative(string id, out List<string> usedPaths)`

**Purpose:** Gets the current value of `merged xml for native`.

### CreateMergedXmlFile
`public static XmlDocument CreateMergedXmlFile(List<Tuple<string, string>> toBeMerged, List<string> xsltList, bool skipValidation)`

**Purpose:** Creates a new `merged xml file` instance or object.

### ApplyXslt
`public static XmlDocument ApplyXslt(string xsltPath, XmlDocument baseDocument)`

**Purpose:** Applies `xslt` to the current object.

### MergeTwoXmls
`public static XmlDocument MergeTwoXmls(XmlDocument xmlDocument1, XmlDocument xmlDocument2, string xsdPath, bool keepDuplicates)`

**Purpose:** Handles logic related to `merge two xmls`.

### ToXDocument
`public static XDocument ToXDocument(XmlDocument xmlDocument)`

**Purpose:** Handles logic related to `to x document`.

### ToXmlDocument
`public static XmlDocument ToXmlDocument(XDocument xDocument)`

**Purpose:** Handles logic related to `to xml document`.

### LoadOneXmlFromFile
`public void LoadOneXmlFromFile(string xmlPath, string xsdPath, bool skipValidation = false)`

**Purpose:** Loads `one xml from file` data.

### LoadXMLFromFileSkipValidation
`public XmlDocument LoadXMLFromFileSkipValidation(string xmlPath, string xsdPath)`

**Purpose:** Loads `x m l from file skip validation` data.

### LoadXml
`public void LoadXml(XmlDocument doc, bool isDevelopment = false)`

**Purpose:** Loads `xml` data.

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node)`

**Purpose:** Creates a new `object from xml node` instance or object.

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node, string typeName)`

**Purpose:** Creates a new `object from xml node` instance or object.

### CreateObjectWithoutDeserialize
`public MBObjectBase CreateObjectWithoutDeserialize(XmlNode node)`

**Purpose:** Creates a new `object without deserialize` instance or object.

### UnregisterNonReadyObjects
`public void UnregisterNonReadyObjects()`

**Purpose:** Handles logic related to `unregister non ready objects`.

### ClearAllObjects
`public void ClearAllObjects()`

**Purpose:** Handles logic related to `clear all objects`.

### ClearAllObjectsWithType
`public void ClearAllObjectsWithType(Type type)`

**Purpose:** Handles logic related to `clear all objects with type`.

### ReadObjectReferenceFromXml
`public MBObjectBase ReadObjectReferenceFromXml(string attributeName, Type objectType, XmlNode node)`

**Purpose:** Handles logic related to `read object reference from xml`.

### DebugPrint
`public void DebugPrint(PrintOutputDelegate printOutput)`

**Purpose:** Handles logic related to `debug print`.

### AddHandler
`public void AddHandler(IObjectManagerHandler handler)`

**Purpose:** Adds `handler` to the current collection or state.

### RemoveHandler
`public void RemoveHandler(IObjectManagerHandler handler)`

**Purpose:** Removes `handler` from the current collection or state.

### DebugDump
`public string DebugDump()`

**Purpose:** Handles logic related to `debug dump`.

### ReInitialize
`public void ReInitialize()`

**Purpose:** Handles logic related to `re initialize`.

### GetObjectTypeIds
`public string GetObjectTypeIds()`

**Purpose:** Gets the current value of `object type ids`.

### GetMBObject
`public MBObjectBase GetMBObject(MBGUID objId)`

**Purpose:** Gets the current value of `m b object`.

## Usage Example

```csharp
var manager = MBObjectManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)