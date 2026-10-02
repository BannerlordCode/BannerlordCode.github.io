---
title: "SubModuleInfo"
description: "SubModuleInfo: a public class in TaleWorlds.ModuleManager; 11 exposed members (1 methods, 8 properties, 0 fields). Canonical bucket modulemanager. Source: TaleWorlds.ModuleManager/SubModuleInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SubModuleInfo

**Namespace:** `TaleWorlds.ModuleManager`
**Module:** `TaleWorlds.ModuleManager`
**Type:** `public class SubModuleInfo`
**File:** `TaleWorlds.ModuleManager/SubModuleInfo.cs`
**Bucket:** `modulemanager` (rule:TaleWorlds.ModuleManager)

## Overview

SubModuleInfo lives in the TaleWorlds.ModuleManager module, source file TaleWorlds.ModuleManager/SubModuleInfo.cs. It is a public class; the inheritance chain is SubModuleInfo. It exposes 11 public/protected members: 1 methods, 8 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SubModuleInfo lands in canonical bucket `modulemanager` (matched rule `rule:TaleWorlds.ModuleManager`), namespace `TaleWorlds.ModuleManager`, inheritance chain SubModuleInfo. The surface is property-led (properties 8/11, methods 1/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ModuleManager/SubModuleInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `DLLName` | `public string DLLName` | property |
| `DLLPath` | `public string DLLPath` | property |
| `IsTWCertifiedDLL` | `public bool IsTWCertifiedDLL` | property |
| `DLLExists` | `public bool DLLExists` | property |
| `List` | `public List<string>Assemblies` | property |
| `SubModuleClassTypeName` | `public string SubModuleClassTypeName` | property |
| `SubModuleInfo` | `public SubModuleInfo()` | constructor |
| `LoadFrom` | `public void LoadFrom(XmlNode subModuleNode, string path, bool isOfficial)` | method |
| `SubModuleTags` | `public enum SubModuleTags` | property |
| `SubModuleTags` | `public enum SubModuleTags` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DependedModule](../DependedModule/)
- [same namespace Extensions](../Extensions/)
- [same namespace IPlatformModuleExtension](../IPlatformModuleExtension/)
- [same namespace ModuleCategory](../ModuleCategory/)
