<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `XmlResource`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# XmlResource

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public static class XmlResource`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/XmlResource.cs`

## Overview

`XmlResource` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### XsdElement
`public struct XsdElement(string xPath, bool alwaysPreferMerge)`

**Purpose:** Handles logic related to `xsd element`.

### ReadXsdFileAndExtractInformation
`public static void ReadXsdFileAndExtractInformation(string xsdFilePath)`

**Purpose:** Handles logic related to `read xsd file and extract information`.

### GetFullXPathOfElement
`public static string GetFullXPathOfElement(XElement element, bool isXsd = true)`

**Purpose:** Gets the current value of `full x path of element`.

### InitializeXmlInformationList
`public static void InitializeXmlInformationList(List<MbObjectXmlInformation> xmlInformation)`

**Purpose:** Initializes the state, resources, or bindings for `xml information list`.

### GetMbprojxmls
`public static void GetMbprojxmls(string moduleName)`

**Purpose:** Gets the current value of `mbprojxmls`.

### GetXmlListAndApply
`public static void GetXmlListAndApply(string moduleName)`

**Purpose:** Gets the current value of `xml list and apply`.

## Usage Example

```csharp
var value = new XmlResource();
value.XsdElement("example", false);
```

## See Also

- [Complete Class Catalog](../catalog)