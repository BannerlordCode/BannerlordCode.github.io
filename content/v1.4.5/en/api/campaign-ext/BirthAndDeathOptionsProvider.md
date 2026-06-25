---
title: "BirthAndDeathOptionsProvider"
description: "Auto-generated class reference for BirthAndDeathOptionsProvider."
---
# BirthAndDeathOptionsProvider

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BirthAndDeathOptionsProvider : ICampaignOptionProvider`
**Base:** `ICampaignOptionProvider`
**File:** `Modules.BirthAndDeath/TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath/BirthAndDeathOptionsProvider.cs`

## Overview

`BirthAndDeathOptionsProvider` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGameplayCampaignOptions
`public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()`

**Purpose:** **Purpose:** Reads and returns the gameplay campaign options value held by the this instance.

```csharp
// Obtain an instance of BirthAndDeathOptionsProvider from the subsystem API first
BirthAndDeathOptionsProvider birthAndDeathOptionsProvider = ...;
var result = birthAndDeathOptionsProvider.GetGameplayCampaignOptions();
```

### GetCharacterCreationCampaignOptions
`public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**Purpose:** **Purpose:** Reads and returns the character creation campaign options value held by the this instance.

```csharp
// Obtain an instance of BirthAndDeathOptionsProvider from the subsystem API first
BirthAndDeathOptionsProvider birthAndDeathOptionsProvider = ...;
var result = birthAndDeathOptionsProvider.GetCharacterCreationCampaignOptions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BirthAndDeathOptionsProvider birthAndDeathOptionsProvider = ...;
birthAndDeathOptionsProvider.GetGameplayCampaignOptions();
```

## See Also

- [Area Index](../)