---
title: "WidgetAttributeValueTypeBindingPath"
description: "Auto-generated class reference for WidgetAttributeValueTypeBindingPath."
---
# WidgetAttributeValueTypeBindingPath

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeValueTypeBindingPath : WidgetAttributeValueType`
**Base:** `WidgetAttributeValueType`
**File:** `bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/WidgetAttributeValueTypeBindingPath.cs`

## Overview

`WidgetAttributeValueTypeBindingPath` lives in `TaleWorlds.GauntletUI.Data` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckValueType
`public override bool CheckValueType(string value)`

**Purpose:** Verifies whether value type holds true for the this instance.

```csharp
// Obtain an instance of WidgetAttributeValueTypeBindingPath from the subsystem API first
WidgetAttributeValueTypeBindingPath widgetAttributeValueTypeBindingPath = ...;
var result = widgetAttributeValueTypeBindingPath.CheckValueType("example");
```

### GetAttributeValue
`public override string GetAttributeValue(string value)`

**Purpose:** Reads and returns the attribute value value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeValueTypeBindingPath from the subsystem API first
WidgetAttributeValueTypeBindingPath widgetAttributeValueTypeBindingPath = ...;
var result = widgetAttributeValueTypeBindingPath.GetAttributeValue("example");
```

### GetSerializedValue
`public override string GetSerializedValue(string value)`

**Purpose:** Reads and returns the serialized value value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeValueTypeBindingPath from the subsystem API first
WidgetAttributeValueTypeBindingPath widgetAttributeValueTypeBindingPath = ...;
var result = widgetAttributeValueTypeBindingPath.GetSerializedValue("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetAttributeValueTypeBindingPath widgetAttributeValueTypeBindingPath = ...;
widgetAttributeValueTypeBindingPath.CheckValueType("example");
```

## See Also

- [Area Index](../)