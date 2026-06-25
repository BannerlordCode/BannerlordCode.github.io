---
title: "MbObjectXmlInformation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MbObjectXmlInformation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MbObjectXmlInformation

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct MbObjectXmlInformation`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MbObjectXmlInformation.cs`

## Overview

`MbObjectXmlInformation` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MbObjectXmlInformation
`public struct MbObjectXmlInformation(string id, string name, string moduleName, List<string> gameTypesIncluded)`

**Purpose:** Handles logic related to `mb object xml information`.

## Usage Example

```csharp
var value = new MbObjectXmlInformation();
value.MbObjectXmlInformation("example", "example", "example", gameTypesIncluded);
```

## See Also

- [Complete Class Catalog](../catalog)