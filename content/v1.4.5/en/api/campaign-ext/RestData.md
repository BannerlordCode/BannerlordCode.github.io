---
title: "RestData"
description: "Auto-generated class reference for RestData."
---
# RestData

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class RestData`
**Base:** none
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestData.cs`

## Overview

`RestData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `RestData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeName` | `public string TypeName { get; set; }` |

## Key Methods

### SerializeAsJson
`public string SerializeAsJson()`

**Purpose:** **Purpose:** Serializes as json into a storable or transmittable format.

```csharp
// Obtain an instance of RestData from the subsystem API first
RestData restData = ...;
var result = restData.SerializeAsJson();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RestData instance = ...;
```

## See Also

- [Area Index](../)