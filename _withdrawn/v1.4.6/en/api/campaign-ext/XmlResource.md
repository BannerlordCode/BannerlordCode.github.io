---
title: "XmlResource"
description: "XmlResource: a public class in TaleWorlds.ObjectSystem; 11 exposed members (5 methods, 1 properties, 4 fields). Canonical bucket campaign-ext. Source: TaleWorlds.ObjectSystem/XmlResource.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# XmlResource

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public static class XmlResource`
**File:** `TaleWorlds.ObjectSystem/XmlResource.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.ObjectSystem)

## Overview

XmlResource lives in the TaleWorlds.ObjectSystem module, source file TaleWorlds.ObjectSystem/XmlResource.cs. It is a public class; the inheritance chain is XmlResource. It exposes 11 public/protected members: 5 methods, 1 properties, 4 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: XmlResource lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.ObjectSystem`), namespace `TaleWorlds.ObjectSystem`, inheritance chain XmlResource. The surface is method-led (methods 5/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ObjectSystem/XmlResource.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ReadXsdFileAndExtractInformation` | `public static void ReadXsdFileAndExtractInformation(string xsdFilePath)` | method |
| `GetFullXPathOfElement` | `public static string GetFullXPathOfElement(XElement element, bool isXsd = true)` | method |
| `InitializeXmlInformationList` | `public static void InitializeXmlInformationList(List<MbObjectXmlInformation>xmlInformation)` | method |
| `GetMbprojxmls` | `public static void GetMbprojxmls(string moduleName)` | method |
| `GetXmlListAndApply` | `public static void GetXmlListAndApply(string moduleName)` | method |
| `List` | `public static List<MbObjectXmlInformation>XmlInformationList` | field |
| `List` | `public static List<MbObjectXmlInformation>MbprojXmls` | field |
| `XmlResource.XsdElement>>XsdElementDictionary` | `public static Dictionary<string, Dictionary<string, XmlResource.XsdElement>>XsdElementDictionary` | field |
| `XsNamespace` | `public static XNamespace XsNamespace` | field |
| `XsdElement` | `public struct XsdElement` | property |
| `XsdElement` | `public struct XsdElement` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace IObjectManagerHandler](../IObjectManagerHandler/)
- [same namespace MBCanNotCreatePresumedObjectException](../MBCanNotCreatePresumedObjectException/)
- [same namespace MBGUID](../MBGUID/)
- [same namespace MBIllegalRegisterException](../MBIllegalRegisterException/)
