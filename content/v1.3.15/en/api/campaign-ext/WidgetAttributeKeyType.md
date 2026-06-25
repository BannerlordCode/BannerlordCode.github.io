---
title: "WidgetAttributeKeyType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WidgetAttributeKeyType`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetAttributeKeyType

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class WidgetAttributeKeyType`
**Base:** none
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeKeyType.cs`

## Overview

`WidgetAttributeKeyType` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckKeyType
`public abstract bool CheckKeyType(string key)`

**Purpose:** Handles logic related to `check key type`.

### GetKeyName
`public abstract string GetKeyName(string key)`

**Purpose:** Gets the current value of `key name`.

### GetSerializedKey
`public abstract string GetSerializedKey(string key)`

**Purpose:** Gets the current value of `serialized key`.

## Usage Example

```csharp
var implementation = new CustomWidgetAttributeKeyType();
```

## See Also

- [Complete Class Catalog](../catalog)