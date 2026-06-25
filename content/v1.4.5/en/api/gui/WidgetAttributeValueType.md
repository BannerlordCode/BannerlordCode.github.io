---
title: "WidgetAttributeValueType"
description: "Auto-generated class reference for WidgetAttributeValueType."
---
# WidgetAttributeValueType

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetAttributeValueType`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeValueType.cs`

## Overview

`WidgetAttributeValueType` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckValueType
`public abstract bool CheckValueType(string value)`

**Purpose:** **Purpose:** Verifies whether value type holds true for the this instance.

```csharp
// Obtain an instance of WidgetAttributeValueType from the subsystem API first
WidgetAttributeValueType widgetAttributeValueType = ...;
var result = widgetAttributeValueType.CheckValueType("example");
```

### GetAttributeValue
`public abstract string GetAttributeValue(string value)`

**Purpose:** **Purpose:** Reads and returns the attribute value value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeValueType from the subsystem API first
WidgetAttributeValueType widgetAttributeValueType = ...;
var result = widgetAttributeValueType.GetAttributeValue("example");
```

### GetSerializedValue
`public abstract string GetSerializedValue(string value)`

**Purpose:** **Purpose:** Reads and returns the serialized value value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeValueType from the subsystem API first
WidgetAttributeValueType widgetAttributeValueType = ...;
var result = widgetAttributeValueType.GetSerializedValue("example");
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
WidgetAttributeValueType instance = ...;
```

## See Also

- [Area Index](../)