---
title: "XmlResource"
description: "Auto-generated class reference for XmlResource."
---
# XmlResource

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public static class XmlResource`
**Base:** none
**File:** `TaleWorlds.ObjectSystem/XmlResource.cs`

## Overview

`XmlResource` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ReadXsdFileAndExtractInformation
`public static void ReadXsdFileAndExtractInformation(string xsdFilePath)`

**Purpose:** **Purpose:** Reads the data or state of xsd file and extract information.

```csharp
// Static call; no instance required
XmlResource.ReadXsdFileAndExtractInformation("example");
```

### GetFullXPathOfElement
`public static string GetFullXPathOfElement(XElement element, bool isXsd = true)`

**Purpose:** **Purpose:** Reads and returns the full x path of element value held by the this instance.

```csharp
// Static call; no instance required
XmlResource.GetFullXPathOfElement(element, false);
```

### InitializeXmlInformationList
`public static void InitializeXmlInformationList(List<MbObjectXmlInformation> xmlInformation)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by xml information list.

```csharp
// Static call; no instance required
XmlResource.InitializeXmlInformationList(xmlInformation);
```

### GetMbprojxmls
`public static void GetMbprojxmls(string moduleName)`

**Purpose:** **Purpose:** Reads and returns the mbprojxmls value held by the this instance.

```csharp
// Static call; no instance required
XmlResource.GetMbprojxmls("example");
```

### GetXmlListAndApply
`public static void GetXmlListAndApply(string moduleName)`

**Purpose:** **Purpose:** Reads and returns the xml list and apply value held by the this instance.

```csharp
// Static call; no instance required
XmlResource.GetXmlListAndApply("example");
```

## Usage Example

```csharp
XmlResource.ReadXsdFileAndExtractInformation("example");
```

## See Also

- [Area Index](../)