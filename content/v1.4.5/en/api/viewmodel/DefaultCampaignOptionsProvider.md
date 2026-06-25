---
title: "DefaultCampaignOptionsProvider"
description: "Auto-generated class reference for DefaultCampaignOptionsProvider."
---
# DefaultCampaignOptionsProvider

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignOptionsProvider : ICampaignOptionProvider`
**Base:** `ICampaignOptionProvider`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/DefaultCampaignOptionsProvider.cs`

## Overview

`DefaultCampaignOptionsProvider` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGameplayCampaignOptions
`public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()`

**Purpose:** Reads and returns the gameplay campaign options value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignOptionsProvider from the subsystem API first
DefaultCampaignOptionsProvider defaultCampaignOptionsProvider = ...;
var result = defaultCampaignOptionsProvider.GetGameplayCampaignOptions();
```

### GetCharacterCreationCampaignOptions
`public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**Purpose:** Reads and returns the character creation campaign options value held by the this instance.

```csharp
// Obtain an instance of DefaultCampaignOptionsProvider from the subsystem API first
DefaultCampaignOptionsProvider defaultCampaignOptionsProvider = ...;
var result = defaultCampaignOptionsProvider.GetCharacterCreationCampaignOptions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultCampaignOptionsProvider defaultCampaignOptionsProvider = ...;
defaultCampaignOptionsProvider.GetGameplayCampaignOptions();
```

## See Also

- [Area Index](../)