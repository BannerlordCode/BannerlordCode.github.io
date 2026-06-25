---
title: "WidgetAttributeKeyTypeDataSource"
description: "Auto-generated class reference for WidgetAttributeKeyTypeDataSource."
---
# WidgetAttributeKeyTypeDataSource

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeKeyTypeDataSource : WidgetAttributeKeyType`
**Base:** `WidgetAttributeKeyType`
**File:** `bin/TaleWorlds.GauntletUI.Data/TaleWorlds.GauntletUI.Data/WidgetAttributeKeyTypeDataSource.cs`

## Overview

`WidgetAttributeKeyTypeDataSource` lives in `TaleWorlds.GauntletUI.Data` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Data` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheckKeyType
`public override bool CheckKeyType(string key)`

**Purpose:** Verifies whether key type holds true for the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeDataSource from the subsystem API first
WidgetAttributeKeyTypeDataSource widgetAttributeKeyTypeDataSource = ...;
var result = widgetAttributeKeyTypeDataSource.CheckKeyType("example");
```

### GetKeyName
`public override string GetKeyName(string key)`

**Purpose:** Reads and returns the key name value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeDataSource from the subsystem API first
WidgetAttributeKeyTypeDataSource widgetAttributeKeyTypeDataSource = ...;
var result = widgetAttributeKeyTypeDataSource.GetKeyName("example");
```

### GetSerializedKey
`public override string GetSerializedKey(string key)`

**Purpose:** Reads and returns the serialized key value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeDataSource from the subsystem API first
WidgetAttributeKeyTypeDataSource widgetAttributeKeyTypeDataSource = ...;
var result = widgetAttributeKeyTypeDataSource.GetSerializedKey("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WidgetAttributeKeyTypeDataSource widgetAttributeKeyTypeDataSource = ...;
widgetAttributeKeyTypeDataSource.CheckKeyType("example");
```

## See Also

- [Area Index](../)