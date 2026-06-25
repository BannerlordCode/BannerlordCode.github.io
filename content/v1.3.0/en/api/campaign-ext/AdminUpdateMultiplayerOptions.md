---
title: "AdminUpdateMultiplayerOptions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AdminUpdateMultiplayerOptions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AdminUpdateMultiplayerOptions

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class AdminUpdateMultiplayerOptions : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromClient/AdminUpdateMultiplayerOptions.cs`

## Overview

`AdminUpdateMultiplayerOptions` lives in `NetworkMessages.FromClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Options` | `public List<AdminUpdateMultiplayerOptions.AdminMultiplayerOptionInfo> Options { get; }` |
| `OptionCount` | `public int OptionCount { get; }` |
| `OptionType` | `public MultiplayerOptions.OptionType OptionType { get; }` |
| `AccessMode` | `public MultiplayerOptions.MultiplayerOptionsAccessMode AccessMode { get; }` |
| `StringValue` | `public string StringValue { get; }` |
| `BoolValue` | `public bool BoolValue { get; }` |
| `IntValue` | `public int IntValue { get; }` |

## Key Methods

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, bool value)`

**Purpose:** Adds `multiplayer option` to the current collection or state.

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, int value)`

**Purpose:** Adds `multiplayer option` to the current collection or state.

### AddMultiplayerOption
`public void AddMultiplayerOption(MultiplayerOptions.OptionType optionType, MultiplayerOptions.MultiplayerOptionsAccessMode accessMode, string value)`

**Purpose:** Adds `multiplayer option` to the current collection or state.

## Usage Example

```csharp
var value = new AdminUpdateMultiplayerOptions();
value.AddMultiplayerOption(optionType, accessMode, false);
```

## See Also

- [Complete Class Catalog](../catalog)