---
title: "WidgetAttributeKeyTypeAttribute"
description: "Auto-generated class reference for WidgetAttributeKeyTypeAttribute."
---
# WidgetAttributeKeyTypeAttribute

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeKeyTypeAttribute : WidgetAttributeKeyType`
**Base:** `WidgetAttributeKeyType`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeKeyTypeAttribute.cs`

## Overview

`WidgetAttributeKeyTypeAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `WidgetAttributeKeyTypeAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CheckKeyType
`public override bool CheckKeyType(string key)`

**Purpose:** Verifies whether key type holds true for the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeAttribute from the subsystem API first
WidgetAttributeKeyTypeAttribute widgetAttributeKeyTypeAttribute = ...;
var result = widgetAttributeKeyTypeAttribute.CheckKeyType("example");
```

### GetKeyName
`public override string GetKeyName(string key)`

**Purpose:** Reads and returns the key name value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeAttribute from the subsystem API first
WidgetAttributeKeyTypeAttribute widgetAttributeKeyTypeAttribute = ...;
var result = widgetAttributeKeyTypeAttribute.GetKeyName("example");
```

### GetSerializedKey
`public override string GetSerializedKey(string key)`

**Purpose:** Reads and returns the serialized key value held by the this instance.

```csharp
// Obtain an instance of WidgetAttributeKeyTypeAttribute from the subsystem API first
WidgetAttributeKeyTypeAttribute widgetAttributeKeyTypeAttribute = ...;
var result = widgetAttributeKeyTypeAttribute.GetSerializedKey("example");
```

## Usage Example

```csharp
[WidgetAttributeKeyTypeAttribute]
public class Example { }
```

## See Also

- [Area Index](../)