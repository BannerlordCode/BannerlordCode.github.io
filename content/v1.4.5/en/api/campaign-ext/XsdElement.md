---
title: "XsdElement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `XsdElement`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# XsdElement

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct XsdElement`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/XmlResource.cs`

## Overview

`XsdElement` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### XsdElement
`public struct XsdElement(string xPath, bool alwaysPreferMerge)`

**Purpose:** Handles logic related to `xsd element`.

## Usage Example

```csharp
var value = new XsdElement();
value.XsdElement("example", false);
```

## See Also

- [Complete Class Catalog](../catalog)