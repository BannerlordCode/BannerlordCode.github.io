<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetAttributeKeyTypeCommand`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetAttributeKeyTypeCommand

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeKeyTypeCommand : WidgetAttributeKeyType`
**Base:** `WidgetAttributeKeyType`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/WidgetAttributeKeyTypeCommand.cs`

## Overview

`WidgetAttributeKeyTypeCommand` lives in `TaleWorlds.GauntletUI.Data` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
var value = new WidgetAttributeKeyTypeCommand();
value.CheckKeyType("example");
```

## See Also

- [Complete Class Catalog](../catalog)