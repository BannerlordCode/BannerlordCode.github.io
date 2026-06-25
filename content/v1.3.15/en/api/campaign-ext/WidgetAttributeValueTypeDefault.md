---
title: "WidgetAttributeValueTypeDefault"
description: "Auto-generated class reference for WidgetAttributeValueTypeDefault."
---
# WidgetAttributeValueTypeDefault

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeValueTypeDefault : WidgetAttributeValueType`
**Base:** `WidgetAttributeValueType`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeValueTypeDefault.cs`

## Overview

`WidgetAttributeValueTypeDefault` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckValueType
`public override bool CheckValueType(string value)`

**Purpose:** Verifies whether `value type` holds true for the current object.

```csharp
// Obtain an instance of WidgetAttributeValueTypeDefault from the subsystem API first
WidgetAttributeValueTypeDefault widgetAttributeValueTypeDefault = ...;
var result = widgetAttributeValueTypeDefault.CheckValueType("example");
```

### GetAttributeValue
`public override string GetAttributeValue(string value)`

**Purpose:** Reads and returns the `attribute value` value held by the current object.

```csharp
// Obtain an instance of WidgetAttributeValueTypeDefault from the subsystem API first
WidgetAttributeValueTypeDefault widgetAttributeValueTypeDefault = ...;
var result = widgetAttributeValueTypeDefault.GetAttributeValue("example");
```

### GetSerializedValue
`public override string GetSerializedValue(string value)`

**Purpose:** Reads and returns the `serialized value` value held by the current object.

```csharp
// Obtain an instance of WidgetAttributeValueTypeDefault from the subsystem API first
WidgetAttributeValueTypeDefault widgetAttributeValueTypeDefault = ...;
var result = widgetAttributeValueTypeDefault.GetSerializedValue("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetAttributeValueTypeDefault widgetAttributeValueTypeDefault = ...;
widgetAttributeValueTypeDefault.CheckValueType("example");
```

## See Also

- [Area Index](../)