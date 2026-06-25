---
title: "BannerEditorState"
description: "Auto-generated class reference for BannerEditorState."
---
# BannerEditorState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BannerEditorState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BannerEditorState.cs`

## Overview

`BannerEditorState` lives in `TaleWorlds.CampaignSystem.GameState` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameState` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Handler` | `public IBannerEditorStateHandler Handler { get; set; }` |

## Key Methods

### GetClan
`public Clan GetClan()`

**Purpose:** **Purpose:** Reads and returns the clan value held by the this instance.

```csharp
// Obtain an instance of BannerEditorState from the subsystem API first
BannerEditorState bannerEditorState = ...;
var result = bannerEditorState.GetClan();
```

### GetCharacter
`public CharacterObject GetCharacter()`

**Purpose:** **Purpose:** Reads and returns the character value held by the this instance.

```csharp
// Obtain an instance of BannerEditorState from the subsystem API first
BannerEditorState bannerEditorState = ...;
var result = bannerEditorState.GetCharacter();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerEditorState bannerEditorState = ...;
bannerEditorState.GetClan();
```

## See Also

- [Area Index](../)