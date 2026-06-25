---
title: "MetaData"
description: "Auto-generated class reference for MetaData."
---
# MetaData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class MetaData`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/MetaData.cs`

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

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MetaData from the subsystem API first
MetaData metaData = ...;
metaData.Add("example", "example");
```

### TryGetValue
`public bool TryGetValue(string key, out string value)`

**Purpose:** **Purpose:** Attempts to retrieve get value, usually returning success through an out parameter.

```csharp
// Obtain an instance of MetaData from the subsystem API first
MetaData metaData = ...;
var result = metaData.TryGetValue("example", value);
```

### Serialize
`public void Serialize(Stream stream)`

**Purpose:** **Purpose:** Serializes the this instance into a storable or transmittable format.

```csharp
// Obtain an instance of MetaData from the subsystem API first
MetaData metaData = ...;
metaData.Serialize(stream);
```

### Deserialize
`public static MetaData Deserialize(Stream stream)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Static call; no instance required
MetaData.Deserialize(stream);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MetaData entry = ...;
```

## See Also

- [Area Index](../)