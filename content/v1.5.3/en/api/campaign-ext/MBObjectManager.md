---
title: "MBObjectManager"
description: "Auto-generated class reference for MBObjectManager."
---
# MBObjectManager

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public sealed class MBObjectManager `
**Base:** System.Object
**Source:** TaleWorlds.ObjectSystem/MBObjectManager.cs

## Overview

Auto-generated stub for `MBObjectManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Init
`public static MBObjectManager Init()`

### Destroy
`public void Destroy()`

### HasType
`public bool HasType(Type type)`

### FindRegisteredClassPrefix
`public string FindRegisteredClassPrefix(Type type)`

### FindRegisteredType
`public Type FindRegisteredType(string classPrefix)`

### UnregisterObject
`public void UnregisterObject(MBObjectBase obj)`

### RemoveTemporaryTypes
`public void RemoveTemporaryTypes()`

### PreAfterLoad
`public void PreAfterLoad()`

### AfterLoad
`public void AfterLoad()`

### GetObject
`public MBObjectBase GetObject(MBGUID objectId)`

### CreateObjectTypeList
`public IList<MBObjectBase> CreateObjectTypeList(Type objectClassType)`

### LoadXML
`public void LoadXML(string id,bool isDevelopment,string gameType,bool skipXmlFilterForEditor = false)`

### MergeElementAttributes
`public static bool MergeElementAttributes(XElement element1,XElement element2)`

### MergeElements
`public static void MergeElements(XElement element1,XElement element2,string xsdPath)`

### GetMergedXmlForManaged
`public static XmlDocument GetMergedXmlForManaged(string id,bool skipValidation,bool ignoreGameTypeInclusionCheck = true,string gameType = "")`

### GetMergedXmlForNative
`public static XmlDocument GetMergedXmlForNative(string id,out List<string> usedPaths)`

### CreateMergedXmlFile
`public static XmlDocument CreateMergedXmlFile(List<Tuple<string,string>> toBeMerged,List<string> xsltList,bool skipValidation)`

### ApplyXslt
`public static XmlDocument ApplyXslt(string xsltPath,XmlDocument baseDocument)`

### MergeTwoXmls
`public static XmlDocument MergeTwoXmls(XmlDocument xmlDocument1,XmlDocument xmlDocument2,string xsdPath,bool keepDuplicates)`

### ToXDocument
`public static XDocument ToXDocument(XmlDocument xmlDocument)`

### ToXmlDocument
`public static XmlDocument ToXmlDocument(XDocument xDocument)`

### LoadOneXmlFromFile
`public void LoadOneXmlFromFile(string xmlPath,string xsdPath,bool skipValidation = false)`

### LoadXMLFromFileSkipValidation
`public XmlDocument LoadXMLFromFileSkipValidation(string xmlPath,string xsdPath)`

### LoadXml
`public void LoadXml(XmlDocument doc,bool isDevelopment = false)`

### CreateObjectFromXmlNode
`public MBObjectBase CreateObjectFromXmlNode(XmlNode node)`

### CreateObjectWithoutDeserialize
`public MBObjectBase CreateObjectWithoutDeserialize(XmlNode node)`

### UnregisterNonReadyObjects
`public void UnregisterNonReadyObjects()`

### ClearAllObjects
`public void ClearAllObjects()`

### ClearAllObjectsWithType
`public void ClearAllObjectsWithType(Type type)`

### ReadObjectReferenceFromXml
`public MBObjectBase ReadObjectReferenceFromXml(string attributeName,Type objectType,XmlNode node)`

### DebugPrint
`public void DebugPrint(PrintOutputDelegate printOutput)`

### AddHandler
`public void AddHandler(IObjectManagerHandler handler)`

### RemoveHandler
`public void RemoveHandler(IObjectManagerHandler handler)`

### DebugDump
`public string DebugDump()`

### ReInitialize
`public void ReInitialize()`

### GetObjectTypeIds
`public string GetObjectTypeIds()`

## See Also

- [Section index](../)
