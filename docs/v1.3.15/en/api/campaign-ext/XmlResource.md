<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `XmlResource`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# XmlResource

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public static class XmlResource`
**Area:** campaign-ext

## Overview

`XmlResource` lives in `TaleWorlds.ObjectSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

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
// Prepare the required context, then call the static entry point directly
XmlResource.ReadXsdFileAndExtractInformation("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
