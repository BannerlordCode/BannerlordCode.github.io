---
title: "DefaultAdminPanelOptionProvider"
description: "Auto-generated class reference for DefaultAdminPanelOptionProvider."
---
# DefaultAdminPanelOptionProvider

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Admin
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultAdminPanelOptionProvider : IAdminPanelOptionProvider`
**Base:** `IAdminPanelOptionProvider`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Admin/DefaultAdminPanelOptionProvider.cs`

## Overview

`DefaultAdminPanelOptionProvider` lives in `TaleWorlds.MountAndBlade.Multiplayer.Admin` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.Admin` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsUndecided` | `public bool IsUndecided { get; }` |

## Key Methods

### BuildAvailableOptions
`public override AdminPanelMultiSelectionOption BuildAvailableOptions(MBReadOnlyList<IAdminPanelMultiSelectionItem> options)`

**Purpose:** Assembles and returns the built result for `available options`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildAvailableOptions(options);
```

### BuildAvailableOptions
`public override AdminPanelMultiSelectionOption BuildAvailableOptions(OptionType optionType, bool buildDefaultValue = true)`

**Purpose:** Assembles and returns the built result for `available options`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildAvailableOptions(optionType, false);
```

### BuildOtherCultureOption
`public AdminPanelCultureOption BuildOtherCultureOption(AdminPanelCultureOption otherOption)`

**Purpose:** Assembles and returns the built result for `other culture option`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildOtherCultureOption(otherOption);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnFinalize();
```

### BuildGameTypeOption
`public AdminPanelUsableMapsOption BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**Purpose:** Assembles and returns the built result for `game type option`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildGameTypeOption(gameTypeOption);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnFinalize();
```

### GetIsDisabled
`public override bool GetIsDisabled(out string reason)`

**Purpose:** Reads and returns the `is disabled` value held by the current object.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetIsDisabled(reason);
```

### BuildOptionGroups
`public AdminPanelStartMissionAction BuildOptionGroups(MBReadOnlyList<IAdminPanelOptionGroup> optionGroups)`

**Purpose:** Assembles and returns the built result for `option groups`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildOptionGroups(optionGroups);
```

### GetIsDisabled
`public override bool GetIsDisabled(out string reason)`

**Purpose:** Reads and returns the `is disabled` value held by the current object.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetIsDisabled(reason);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnFinalize();
```

### GetIsAvailable
`public override bool GetIsAvailable()`

**Purpose:** Reads and returns the `is available` value held by the current object.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetIsAvailable();
```

### BuildGameTypeOption
`public AdminPanelGameTypeDependentNumericOption BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**Purpose:** Assembles and returns the built result for `game type option`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildGameTypeOption(gameTypeOption);
```

### BuildInvalidGameTypes
`public AdminPanelGameTypeDependentNumericOption BuildInvalidGameTypes(string gameTypes)`

**Purpose:** Assembles and returns the built result for `invalid game types`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildInvalidGameTypes("example");
```

### BuildRequiredGameTypes
`public AdminPanelGameTypeDependentNumericOption BuildRequiredGameTypes(string gameTypes)`

**Purpose:** Assembles and returns the built result for `required game types`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildRequiredGameTypes("example");
```

### GetIsAvailable
`public override bool GetIsAvailable()`

**Purpose:** Reads and returns the `is available` value held by the current object.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetIsAvailable();
```

### BuildGameTypeOption
`public AdminPanelGameTypeDependentAction BuildGameTypeOption(AdminPanelVotableMultiSelectionOption gameTypeOption)`

**Purpose:** Assembles and returns the built result for `game type option`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildGameTypeOption(gameTypeOption);
```

### BuildInvalidGameTypes
`public AdminPanelGameTypeDependentAction BuildInvalidGameTypes(string gameTypes)`

**Purpose:** Assembles and returns the built result for `invalid game types`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildInvalidGameTypes("example");
```

### BuildRequiredGameTypes
`public AdminPanelGameTypeDependentAction BuildRequiredGameTypes(string gameTypes)`

**Purpose:** Assembles and returns the built result for `required game types`.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.BuildRequiredGameTypes("example");
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnTick(0);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.OnFinalize();
```

### GetOptionWithId
`public IAdminPanelOption GetOptionWithId(string id)`

**Purpose:** Reads and returns the `option with id` value held by the current object.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetOptionWithId("example");
```

### GetActionWithId
`public IAdminPanelAction GetActionWithId(string id)`

**Purpose:** Reads and returns the `action with id` value held by the current object.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetActionWithId("example");
```

### ApplyOptions
`public void ApplyOptions()`

**Purpose:** Applies the effect of `options` to the current object.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.ApplyOptions();
```

### GetOptionGroups
`public MBReadOnlyList<IAdminPanelOptionGroup> GetOptionGroups()`

**Purpose:** Reads and returns the `option groups` value held by the current object.

```csharp
// Obtain an instance of DefaultAdminPanelOptionProvider from the subsystem API first
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
var result = defaultAdminPanelOptionProvider.GetOptionGroups();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultAdminPanelOptionProvider defaultAdminPanelOptionProvider = ...;
defaultAdminPanelOptionProvider.BuildAvailableOptions(options);
```

## See Also

- [Area Index](../)