---
title: "WidgetAttributeContext"
description: "Auto-generated class reference for WidgetAttributeContext."
---
# WidgetAttributeContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeContext`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs`

## Overview

`WidgetAttributeContext` lives in `TaleWorlds.GauntletUI.PrefabSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.PrefabSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterKeyType
`public void RegisterKeyType(WidgetAttributeKeyType keyType)`

**Purpose:** Registers key type with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of WidgetAttributeContext from the subsystem API first
WidgetAttributeContext widgetAttributeContext = ...;
widgetAttributeContext.RegisterKeyType(keyType);
```

### RegisterValueType
`public void RegisterValueType(WidgetAttributeValueType valueType)`

**Purpose:** Registers value type with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of WidgetAttributeContext from the subsystem API first
WidgetAttributeContext widgetAttributeContext = ...;
widgetAttributeContext.RegisterValueType(valueType);
```

### GetKeyType
`public WidgetAttributeKeyType GetKeyType(string key)`

**Purpose:** Reads and returns the key type value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeContext from the subsystem API first
WidgetAttributeContext widgetAttributeContext = ...;
var result = widgetAttributeContext.GetKeyType("example");
```

### GetValueType
`public WidgetAttributeValueType GetValueType(string value)`

**Purpose:** Reads and returns the value type value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeContext from the subsystem API first
WidgetAttributeContext widgetAttributeContext = ...;
var result = widgetAttributeContext.GetValueType("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetAttributeContext widgetAttributeContext = ...;
widgetAttributeContext.RegisterKeyType(keyType);
```

## See Also

- [Area Index](../)