---
title: "MbObjectXmlInformation"
description: "Auto-generated class reference for MbObjectXmlInformation."
---
# MbObjectXmlInformation

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public struct MbObjectXmlInformation`
**Base:** none
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MbObjectXmlInformation.cs`

## Overview

`MbObjectXmlInformation` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MbObjectXmlInformation
`public struct MbObjectXmlInformation(string id, string name, string moduleName, List<string> gameTypesIncluded)`

**Purpose:** **Purpose:** Executes the MbObjectXmlInformation logic.

```csharp
// Obtain an instance of MbObjectXmlInformation from the subsystem API first
MbObjectXmlInformation mbObjectXmlInformation = ...;
var result = mbObjectXmlInformation.MbObjectXmlInformation("example", "example", "example", gameTypesIncluded);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MbObjectXmlInformation mbObjectXmlInformation = ...;
mbObjectXmlInformation.MbObjectXmlInformation("example", "example", "example", gameTypesIncluded);
```

## See Also

- [Area Index](../)