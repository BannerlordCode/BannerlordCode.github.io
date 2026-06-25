---
title: "WidgetAttributeValueTypeConstant"
description: "Auto-generated class reference for WidgetAttributeValueTypeConstant."
---
# WidgetAttributeValueTypeConstant

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeValueTypeConstant : WidgetAttributeValueType`
**Base:** `WidgetAttributeValueType`
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeValueTypeConstant.cs`

## Overview

`WidgetAttributeValueTypeConstant` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckValueType
`public override bool CheckValueType(string value)`

**Purpose:** Verifies whether `value type` holds true for the current object.

```csharp
// Obtain an instance of WidgetAttributeValueTypeConstant from the subsystem API first
WidgetAttributeValueTypeConstant widgetAttributeValueTypeConstant = ...;
var result = widgetAttributeValueTypeConstant.CheckValueType("example");
```

### GetAttributeValue
`public override string GetAttributeValue(string value)`

**Purpose:** Reads and returns the `attribute value` value held by the current object.

```csharp
// Obtain an instance of WidgetAttributeValueTypeConstant from the subsystem API first
WidgetAttributeValueTypeConstant widgetAttributeValueTypeConstant = ...;
var result = widgetAttributeValueTypeConstant.GetAttributeValue("example");
```

### GetSerializedValue
`public override string GetSerializedValue(string value)`

**Purpose:** Reads and returns the `serialized value` value held by the current object.

```csharp
// Obtain an instance of WidgetAttributeValueTypeConstant from the subsystem API first
WidgetAttributeValueTypeConstant widgetAttributeValueTypeConstant = ...;
var result = widgetAttributeValueTypeConstant.GetSerializedValue("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetAttributeValueTypeConstant widgetAttributeValueTypeConstant = ...;
widgetAttributeValueTypeConstant.CheckValueType("example");
```

## See Also

- [Area Index](../)