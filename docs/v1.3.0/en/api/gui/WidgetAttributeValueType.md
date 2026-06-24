<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetAttributeValueType`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetAttributeValueType

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetAttributeValueType`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeValueType.cs`

## Overview

`WidgetAttributeValueType` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckValueType
`public abstract bool CheckValueType(string value)`

**Purpose:** Handles logic related to `check value type`.

### GetAttributeValue
`public abstract string GetAttributeValue(string value)`

**Purpose:** Gets the current value of `attribute value`.

### GetSerializedValue
`public abstract string GetSerializedValue(string value)`

**Purpose:** Gets the current value of `serialized value`.

## Usage Example

```csharp
var implementation = new CustomWidgetAttributeValueType();
```

## See Also

- [Complete Class Catalog](../catalog)