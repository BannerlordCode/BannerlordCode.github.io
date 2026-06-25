---
title: "EncyclopediaPageArgs"
description: "Auto-generated class reference for EncyclopediaPageArgs."
---
# EncyclopediaPageArgs

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EncyclopediaPageArgs`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaPageArgs.cs`

## Overview

`EncyclopediaPageArgs` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EncyclopediaPageArgs
`public struct EncyclopediaPageArgs(object o)`

**Purpose:** **Purpose:** Executes the EncyclopediaPageArgs logic.

```csharp
// Obtain an instance of EncyclopediaPageArgs from the subsystem API first
EncyclopediaPageArgs encyclopediaPageArgs = ...;
var result = encyclopediaPageArgs.EncyclopediaPageArgs(o);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaPageArgs encyclopediaPageArgs = ...;
encyclopediaPageArgs.EncyclopediaPageArgs(o);
```

## See Also

- [Area Index](../)