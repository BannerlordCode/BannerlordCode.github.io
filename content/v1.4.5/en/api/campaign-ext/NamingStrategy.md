---
title: "NamingStrategy"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NamingStrategy`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NamingStrategy

**Namespace:** Newtonsoft.Json.Serialization
**Module:** Newtonsoft.Json
**Type:** `public abstract class NamingStrategy`
**Base:** none
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Serialization/NamingStrategy.cs`

## Overview

`NamingStrategy` lives in `Newtonsoft.Json.Serialization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Serialization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ProcessDictionaryKeys` | `public bool ProcessDictionaryKeys { get; set; }` |
| `ProcessExtensionDataNames` | `public bool ProcessExtensionDataNames { get; set; }` |
| `OverrideSpecifiedNames` | `public bool OverrideSpecifiedNames { get; set; }` |

## Key Methods

### GetPropertyName
`public virtual string GetPropertyName(string name, bool hasSpecifiedName)`

**Purpose:** Gets the current value of `property name`.

### GetExtensionDataName
`public virtual string GetExtensionDataName(string name)`

**Purpose:** Gets the current value of `extension data name`.

### GetDictionaryKey
`public virtual string GetDictionaryKey(string key)`

**Purpose:** Gets the current value of `dictionary key`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

## Usage Example

```csharp
var implementation = new CustomNamingStrategy();
```

## See Also

- [Complete Class Catalog](../catalog)