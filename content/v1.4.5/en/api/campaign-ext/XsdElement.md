---
title: "XsdElement"
description: "Auto-generated class reference for XsdElement."
---
# XsdElement

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct XsdElement`
**Base:** none
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/XmlResource.cs`

## Overview

`XsdElement` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### XsdElement
`public struct XsdElement(string xPath, bool alwaysPreferMerge)`

**Purpose:** **Purpose:** Executes the XsdElement logic.

```csharp
// Obtain an instance of XsdElement from the subsystem API first
XsdElement xsdElement = ...;
var result = xsdElement.XsdElement("example", false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
XsdElement xsdElement = ...;
xsdElement.XsdElement("example", false);
```

## See Also

- [Area Index](../)