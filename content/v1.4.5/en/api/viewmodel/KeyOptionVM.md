---
title: "KeyOptionVM"
description: "Auto-generated class reference for KeyOptionVM."
---
# KeyOptionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class KeyOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions/KeyOptionVM.cs`

## Overview

`KeyOptionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentKey` | `public Key CurrentKey { get; set; }` |
| `Key` | `public Key Key { get; set; }` |
| `OptionValueText` | `public string OptionValueText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `IsChanged` | `public bool IsChanged { get; set; }` |
| `RevertHint` | `public HintViewModel RevertHint { get; set; }` |
| `ExtraInformationText` | `public string ExtraInformationText { get; set; }` |

## Key Methods

### Set
`public abstract void Set(InputKey newKey)`

**Purpose:** **Purpose:** Assigns a new value to the this instance's property or state.

```csharp
// Obtain an instance of KeyOptionVM from the subsystem API first
KeyOptionVM keyOptionVM = ...;
keyOptionVM.Set(newKey);
```

### Update
`public abstract void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of KeyOptionVM from the subsystem API first
KeyOptionVM keyOptionVM = ...;
keyOptionVM.Update();
```

### OnDone
`public abstract void OnDone()`

**Purpose:** **Purpose:** Invoked when the done event is raised.

```csharp
// Obtain an instance of KeyOptionVM from the subsystem API first
KeyOptionVM keyOptionVM = ...;
keyOptionVM.OnDone();
```

### ExecuteRevert
`public abstract void ExecuteRevert()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with revert.

```csharp
// Obtain an instance of KeyOptionVM from the subsystem API first
KeyOptionVM keyOptionVM = ...;
keyOptionVM.ExecuteRevert();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
KeyOptionVM instance = ...;
```

## See Also

- [Area Index](../)