---
title: "AdminUpdateMultiplayerOptions"
description: "Auto-generated class reference for AdminUpdateMultiplayerOptions."
---
# AdminUpdateMultiplayerOptions

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class AdminUpdateMultiplayerOptions : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/AdminUpdateMultiplayerOptions.cs`

## Overview

`AdminUpdateMultiplayerOptions` lives in `NetworkMessages.FromClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionType` | `public MultiplayerOptions.OptionType OptionType { get; }` |
| `AccessMode` | `public MultiplayerOptions.MultiplayerOptionsAccessMode AccessMode { get; }` |
| `StringValue` | `public string StringValue { get; }` |
| `BoolValue` | `public bool BoolValue { get; }` |
| `IntValue` | `public int IntValue { get; }` |
| `Options` | `public List<AdminMultiplayerOptionInfo> Options { get; }` |
| `OptionCount` | `public int OptionCount { get; }` |

## Key Methods

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, bool value)`

**Purpose:** Adds `multiplayer option` to the current collection or state.

```csharp
// Obtain an instance of AdminUpdateMultiplayerOptions from the subsystem API first
AdminUpdateMultiplayerOptions adminUpdateMultiplayerOptions = ...;
adminUpdateMultiplayerOptions.AddMultiplayerOption(optionType, accessMode, false);
```

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, int value)`

**Purpose:** Adds `multiplayer option` to the current collection or state.

```csharp
// Obtain an instance of AdminUpdateMultiplayerOptions from the subsystem API first
AdminUpdateMultiplayerOptions adminUpdateMultiplayerOptions = ...;
adminUpdateMultiplayerOptions.AddMultiplayerOption(optionType, accessMode, 0);
```

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, string value)`

**Purpose:** Adds `multiplayer option` to the current collection or state.

```csharp
// Obtain an instance of AdminUpdateMultiplayerOptions from the subsystem API first
AdminUpdateMultiplayerOptions adminUpdateMultiplayerOptions = ...;
adminUpdateMultiplayerOptions.AddMultiplayerOption(optionType, accessMode, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AdminUpdateMultiplayerOptions adminUpdateMultiplayerOptions = ...;
adminUpdateMultiplayerOptions.AddMultiplayerOption(optionType, accessMode, false);
```

## See Also

- [Area Index](../)