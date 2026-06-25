---
title: "WidgetAttributeKeyType"
description: "Auto-generated class reference for WidgetAttributeKeyType."
---
# WidgetAttributeKeyType

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetAttributeKeyType`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeKeyType.cs`

## Overview

`WidgetAttributeKeyType` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckKeyType
`public abstract bool CheckKeyType(string key)`

**Purpose:** Verifies whether key type holds true for the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyType from the subsystem API first
WidgetAttributeKeyType widgetAttributeKeyType = ...;
var result = widgetAttributeKeyType.CheckKeyType("example");
```

### GetKeyName
`public abstract string GetKeyName(string key)`

**Purpose:** Reads and returns the key name value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyType from the subsystem API first
WidgetAttributeKeyType widgetAttributeKeyType = ...;
var result = widgetAttributeKeyType.GetKeyName("example");
```

### GetSerializedKey
`public abstract string GetSerializedKey(string key)`

**Purpose:** Reads and returns the serialized key value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyType from the subsystem API first
WidgetAttributeKeyType widgetAttributeKeyType = ...;
var result = widgetAttributeKeyType.GetSerializedKey("example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
WidgetAttributeKeyType instance = ...;
```

## See Also

- [Area Index](../)