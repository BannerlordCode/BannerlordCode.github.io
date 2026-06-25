---
title: "WidgetAttributeValueTypeBindingPath"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetAttributeValueTypeBindingPath`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetAttributeValueTypeBindingPath

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeValueTypeBindingPath : WidgetAttributeValueType`
**Base:** `WidgetAttributeValueType`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/WidgetAttributeValueTypeBindingPath.cs`

## Overview

`WidgetAttributeValueTypeBindingPath` lives in `TaleWorlds.GauntletUI.Data` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckValueType
`public override bool CheckValueType(string value)`

**Purpose:** Handles logic related to `check value type`.

### GetAttributeValue
`public override string GetAttributeValue(string value)`

**Purpose:** Gets the current value of `attribute value`.

### GetSerializedValue
`public override string GetSerializedValue(string value)`

**Purpose:** Gets the current value of `serialized value`.

## Usage Example

```csharp
var value = new WidgetAttributeValueTypeBindingPath();
value.CheckValueType("example");
```

## See Also

- [Complete Class Catalog](../catalog)