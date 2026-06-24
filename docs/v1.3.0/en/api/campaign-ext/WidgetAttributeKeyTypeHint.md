<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetAttributeKeyTypeHint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetAttributeKeyTypeHint

**Namespace:** TaleWorlds.GauntletUI.TooltipExtensions
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeKeyTypeHint : WidgetAttributeKeyType`
**Base:** `WidgetAttributeKeyType`
**File:** `TaleWorlds.GauntletUI.TooltipExtensions/WidgetAttributeKeyTypeHint.cs`

## Overview

`WidgetAttributeKeyTypeHint` lives in `TaleWorlds.GauntletUI.TooltipExtensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.TooltipExtensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckKeyType
`public override bool CheckKeyType(string key)`

**Purpose:** Handles logic related to `check key type`.

### GetKeyName
`public override string GetKeyName(string key)`

**Purpose:** Gets the current value of `key name`.

### GetSerializedKey
`public override string GetSerializedKey(string key)`

**Purpose:** Gets the current value of `serialized key`.

## Usage Example

```csharp
var value = new WidgetAttributeKeyTypeHint();
value.CheckKeyType("example");
```

## See Also

- [Complete Class Catalog](../catalog)