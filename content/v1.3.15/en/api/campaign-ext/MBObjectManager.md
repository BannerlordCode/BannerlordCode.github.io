---
title: "MBObjectManager"
description: "Auto-generated class reference for MBObjectManager."
---
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

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
MBObjectManager.Init();
```

### Destroy
`public void Destroy()`

**Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.Destroy();
```

### HasType
`public bool HasType(Type type)`

**Purpose:** Determines whether the this instance already holds type.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.HasType(type);
```

### FindRegisteredClassPrefix
`public string FindRegisteredClassPrefix(Type type)`

**Purpose:** Looks up the matching registered class prefix in the current collection or scope.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.FindRegisteredClassPrefix(type);
```

### FindRegisteredType
`public Type FindRegisteredType(string classPrefix)`

**Purpose:** Looks up the matching registered type in the current collection or scope.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.FindRegisteredType("example");
```

### UnregisterObject
`public void UnregisterObject(MBObjectBase obj)`

**Purpose:** Unregisters object from the current system.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.UnregisterObject(obj);
```

### RemoveTemporaryTypes
`public void RemoveTemporaryTypes()`

**Purpose:** Removes temporary types from the current collection or state.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.RemoveTemporaryTypes();
```

### PreAfterLoad
`public void PreAfterLoad()`

**Purpose:** Executes the PreAfterLoad logic.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.PreAfterLoad();
```

### AfterLoad
`public void AfterLoad()`

**Purpose:** Executes the AfterLoad logic.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.AfterLoad();
```

### GetObject
`public MBObjectBase GetObject(MBGUID objectId)`

**Purpose:** Reads and returns the object value held by the this instance.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.GetObject(objectId);
```

### GetObject
`public MBObjectBase GetObject(string typeName, string objectName)`

**Purpose:** Reads and returns the object value held by the this instance.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.GetObject("example", "example");
```

### CreateObjectTypeList
`public IList<MBObjectBase> CreateObjectTypeList(Type objectClassType)`

**Purpose:** Constructs a new object type list entity and returns it to the caller.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.CreateObjectTypeList(objectClassType);
```

### LoadXML
`public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)`

**Purpose:** Reads x m l from persistent storage or a stream.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.LoadXML("example", false, "example", false);
```

### MergeElementAttributes
`public static bool MergeElementAttributes(XElement element1, XElement element2)`

**Purpose:** Executes the MergeElementAttributes logic.

```csharp
// Static call; no instance required
MBObjectManager.MergeElementAttributes(element1, element2);
```

### MergeElements
`public static void MergeElements(XElement element1, XElement element2, string xsdPath)`

**Purpose:** Executes the MergeElements logic.

```csharp
// Static call; no instance required
MBObjectManager.MergeElements(element1, element2, "example");
```

### GetMergedXmlForManaged
`public static XmlDocument GetMergedXmlForManaged(string id, bool skipValidation, bool ignoreGameTypeInclusionCheck = true, string gameType = "")`

**Purpose:** Reads and returns the merged xml for managed value held by the this instance.

```csharp
// Static call; no instance required
MBObjectManager.GetMergedXmlForManaged("example", false, false, "example");
```

### GetMergedXmlForNative
`public static XmlDocument GetMergedXmlForNative(string id, out List<string> usedPaths)`

**Purpose:** Reads and returns the merged xml for native value held by the this instance.

```csharp
// Static call; no instance required
MBObjectManager.GetMergedXmlForNative("example", usedPaths);
```

### CreateMergedXmlFile
`public static XmlDocument CreateMergedXmlFile(List<Tuple<string, string>> toBeMerged, List<string> xsltList, bool skipValidation)`

**Purpose:** Constructs a new merged xml file entity and returns it to the caller.

```csharp
// Static call; no instance required
MBObjectManager.CreateMergedXmlFile(list<Tuple<string, "example", xsltList, false);
```

### ApplyXslt
`public static XmlDocument ApplyXslt(string xsltPath, XmlDocument baseDocument)`

**Purpose:** Applies the effect of xslt to the this instance.

```csharp
// Static call; no instance required
MBObjectManager.ApplyXslt("example", baseDocument);
```

### MergeTwoXmls
`public static XmlDocument MergeTwoXmls(XmlDocument xmlDocument1, XmlDocument xmlDocument2, string xsdPath, bool keepDuplicates)`

**Purpose:** Executes the MergeTwoXmls logic.

```csharp
// Static call; no instance required
MBObjectManager.MergeTwoXmls(xmlDocument1, xmlDocument2, "example", false);
```

### ToXDocument
`public static XDocument ToXDocument(XmlDocument xmlDocument)`

**Purpose:** Executes the ToXDocument logic.

```csharp
// Static call; no instance required
MBObjectManager.ToXDocument(xmlDocument);
```

### ToXmlDocument
`public static XmlDocument ToXmlDocument(XDocument xDocument)`

**Purpose:** Executes the ToXmlDocument logic.

```csharp
// Static call; no instance required
MBObjectManager.ToXmlDocument(xDocument);
```

### LoadOneXmlFromFile
`public void LoadOneXmlFromFile(string xmlPath, string xsdPath, bool skipValidation = false)`

**Purpose:** Reads one xml from file from persistent storage or a stream.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.LoadOneXmlFromFile("example", "example", false);
```

### LoadXMLFromFileSkipValidation
`public XmlDocument LoadXMLFromFileSkipValidation(string xmlPath, string xsdPath)`

**Purpose:** Reads x m l from file skip validation from persistent storage or a stream.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.LoadXMLFromFileSkipValidation("example", "example");
```

### LoadXml
`public void LoadXml(XmlDocument doc, bool isDevelopment = false)`

**Purpose:** Reads xml from persistent storage or a stream.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.LoadXml(doc, false);
```

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node)`

**Purpose:** Constructs a new object from xml node entity and returns it to the caller.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.CreateObjectFromXmlNode(node);
```

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node, string typeName)`

**Purpose:** Constructs a new object from xml node entity and returns it to the caller.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.CreateObjectFromXmlNode(node, "example");
```

### CreateObjectWithoutDeserialize
`public MBObjectBase CreateObjectWithoutDeserialize(XmlNode node)`

**Purpose:** Constructs a new object without deserialize entity and returns it to the caller.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.CreateObjectWithoutDeserialize(node);
```

### UnregisterNonReadyObjects
`public void UnregisterNonReadyObjects()`

**Purpose:** Unregisters non ready objects from the current system.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.UnregisterNonReadyObjects();
```

### ClearAllObjects
`public void ClearAllObjects()`

**Purpose:** Removes all all objects from the this instance.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.ClearAllObjects();
```

### ClearAllObjectsWithType
`public void ClearAllObjectsWithType(Type type)`

**Purpose:** Removes all all objects with type from the this instance.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.ClearAllObjectsWithType(type);
```

### ReadObjectReferenceFromXml
`public MBObjectBase ReadObjectReferenceFromXml(string attributeName, Type objectType, XmlNode node)`

**Purpose:** Reads the data or state of object reference from xml.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.ReadObjectReferenceFromXml("example", objectType, node);
```

### DebugPrint
`public void DebugPrint(PrintOutputDelegate printOutput)`

**Purpose:** Executes the DebugPrint logic.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.DebugPrint(printOutput);
```

### AddHandler
`public void AddHandler(IObjectManagerHandler handler)`

**Purpose:** Adds handler to the current collection or state.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.AddHandler(handler);
```

### RemoveHandler
`public void RemoveHandler(IObjectManagerHandler handler)`

**Purpose:** Removes handler from the current collection or state.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.RemoveHandler(handler);
```

### DebugDump
`public string DebugDump()`

**Purpose:** Executes the DebugDump logic.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.DebugDump();
```

### ReInitialize
`public void ReInitialize()`

**Purpose:** Executes the ReInitialize logic.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
mBObjectManager.ReInitialize();
```

### GetObjectTypeIds
`public string GetObjectTypeIds()`

**Purpose:** Reads and returns the object type ids value held by the this instance.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.GetObjectTypeIds();
```

### GetMBObject
`public MBObjectBase GetMBObject(MBGUID objId)`

**Purpose:** Reads and returns the m b object value held by the this instance.

```csharp
// Obtain an instance of MBObjectManager from the subsystem API first
MBObjectManager mBObjectManager = ...;
var result = mBObjectManager.GetMBObject(objId);
```

## Usage Example

```csharp
var manager = MBObjectManager.Current;
```

## See Also

- [Area Index](../)