---
title: "WidgetAttributeKeyTypeHint"
description: "Auto-generated class reference for WidgetAttributeKeyTypeHint."
---
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

**Purpose:** **Purpose:** Verifies whether key type holds true for the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeHint from the subsystem API first
WidgetAttributeKeyTypeHint widgetAttributeKeyTypeHint = ...;
var result = widgetAttributeKeyTypeHint.CheckKeyType("example");
```

### GetKeyName
`public override string GetKeyName(string key)`

**Purpose:** **Purpose:** Reads and returns the key name value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeHint from the subsystem API first
WidgetAttributeKeyTypeHint widgetAttributeKeyTypeHint = ...;
var result = widgetAttributeKeyTypeHint.GetKeyName("example");
```

### GetSerializedKey
`public override string GetSerializedKey(string key)`

**Purpose:** **Purpose:** Reads and returns the serialized key value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeHint from the subsystem API first
WidgetAttributeKeyTypeHint widgetAttributeKeyTypeHint = ...;
var result = widgetAttributeKeyTypeHint.GetSerializedKey("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetAttributeKeyTypeHint widgetAttributeKeyTypeHint = ...;
widgetAttributeKeyTypeHint.CheckKeyType("example");
```

## See Also

- [Area Index](../)