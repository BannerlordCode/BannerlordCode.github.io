---
title: "MBObjectBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBObjectBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBObjectBase

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBObjectBase`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectBase.cs`

## Overview

`MBObjectBase` lives in `TaleWorlds.ObjectSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ObjectSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `Id` | `public MBGUID Id { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## Key Methods

### AfterInitialized
`public void AfterInitialized()`

**Purpose:** Handles logic related to `after initialized`.

### AfterRegister
`public virtual void AfterRegister()`

**Purpose:** Handles logic related to `after register`.

### Initialize
`public virtual void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Deserialize
`public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetName
`public virtual TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### PreAfterLoadInternal
`public void PreAfterLoadInternal()`

**Purpose:** Handles logic related to `pre after load internal`.

### AfterLoadInternal
`public void AfterLoadInternal()`

**Purpose:** Handles logic related to `after load internal`.

### OnRegistered
`public void OnRegistered()`

**Purpose:** Called when the `registered` event is raised.

### OnUnregistered
`public void OnUnregistered()`

**Purpose:** Called when the `unregistered` event is raised.

## Usage Example

```csharp
var value = new MBObjectBase();
value.AfterInitialized();
```

## See Also

- [Complete Class Catalog](../catalog)