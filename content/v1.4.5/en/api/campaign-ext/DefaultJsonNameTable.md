---
title: "DefaultJsonNameTable"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultJsonNameTable`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultJsonNameTable

**Namespace:** Newtonsoft.Json
**Module:** Newtonsoft.Json
**Type:** `public class DefaultJsonNameTable : JsonNameTable`
**Base:** `JsonNameTable`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json/DefaultJsonNameTable.cs`

## Overview

`DefaultJsonNameTable` lives in `Newtonsoft.Json` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Get
`public override string? Get(char key, int start, int length)`

**Purpose:** Gets the current value of `get`.

### Add
`public string Add(string key)`

**Purpose:** Adds `add` to the current collection or state.

## Usage Example

```csharp
var value = new DefaultJsonNameTable();
value.Get(key, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)