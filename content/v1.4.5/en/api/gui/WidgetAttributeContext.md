---
title: "WidgetAttributeContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetAttributeContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetAttributeContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs`

## Overview

`WidgetAttributeContext` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterKeyType
`public void RegisterKeyType(WidgetAttributeKeyType keyType)`

**Purpose:** Handles logic related to `register key type`.

### RegisterValueType
`public void RegisterValueType(WidgetAttributeValueType valueType)`

**Purpose:** Handles logic related to `register value type`.

### GetKeyType
`public WidgetAttributeKeyType GetKeyType(string key)`

**Purpose:** Gets the current value of `key type`.

### GetValueType
`public WidgetAttributeValueType GetValueType(string value)`

**Purpose:** Gets the current value of `value type`.

## Usage Example

```csharp
var value = new WidgetAttributeContext();
value.RegisterKeyType(keyType);
```

## See Also

- [Complete Class Catalog](../catalog)