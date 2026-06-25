---
title: "MetaData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MetaData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class MetaData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/MetaData.cs`

## Overview

`MetaData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MetaData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public string this { get; set; }` |

## Key Methods

### Add
`public void Add(string key, string value)`

**Purpose:** Adds `add` to the current collection or state.

### TryGetValue
`public bool TryGetValue(string key, out string value)`

**Purpose:** Attempts to get `get value`, usually returning the result in an out parameter.

### Serialize
`public void Serialize(Stream stream)`

**Purpose:** Handles logic related to `serialize`.

### Deserialize
`public static MetaData Deserialize(Stream stream)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new MetaData();
```

## See Also

- [Complete Class Catalog](../catalog)