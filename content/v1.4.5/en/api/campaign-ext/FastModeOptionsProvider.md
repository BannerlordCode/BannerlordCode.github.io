---
title: "FastModeOptionsProvider"
description: "Auto-generated class reference for FastModeOptionsProvider."
---
# FastModeOptionsProvider

**Namespace:** TaleWorlds.CampaignSystem.FastMode
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FastModeOptionsProvider : ICampaignOptionProvider`
**Base:** `ICampaignOptionProvider`
**File:** `Modules.FastMode/TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs`

## Overview

`FastModeOptionsProvider` lives in `TaleWorlds.CampaignSystem.FastMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.FastMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGameplayCampaignOptions
`public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()`

**Purpose:** Reads and returns the gameplay campaign options value held by the this instance.

```csharp
// Obtain an instance of FastModeOptionsProvider from the subsystem API first
FastModeOptionsProvider fastModeOptionsProvider = ...;
var result = fastModeOptionsProvider.GetGameplayCampaignOptions();
```

### GetCharacterCreationCampaignOptions
`public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**Purpose:** Reads and returns the character creation campaign options value held by the this instance.

```csharp
// Obtain an instance of FastModeOptionsProvider from the subsystem API first
FastModeOptionsProvider fastModeOptionsProvider = ...;
var result = fastModeOptionsProvider.GetCharacterCreationCampaignOptions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FastModeOptionsProvider fastModeOptionsProvider = ...;
fastModeOptionsProvider.GetGameplayCampaignOptions();
```

## See Also

- [Area Index](../)