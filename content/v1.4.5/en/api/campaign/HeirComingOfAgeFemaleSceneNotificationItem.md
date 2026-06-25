---
title: "HeirComingOfAgeFemaleSceneNotificationItem"
description: "Auto-generated class reference for HeirComingOfAgeFemaleSceneNotificationItem."
---
# HeirComingOfAgeFemaleSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeirComingOfAgeFemaleSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/HeirComingOfAgeFemaleSceneNotificationItem.cs`

## Overview

`HeirComingOfAgeFemaleSceneNotificationItem` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MentorHero` | `public Hero MentorHero { get; }` |
| `HeroCameOfAge` | `public Hero HeroCameOfAge { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** Reads and returns the `scene notification characters` value held by the current object.

```csharp
// Obtain an instance of HeirComingOfAgeFemaleSceneNotificationItem from the subsystem API first
HeirComingOfAgeFemaleSceneNotificationItem heirComingOfAgeFemaleSceneNotificationItem = ...;
var result = heirComingOfAgeFemaleSceneNotificationItem.GetSceneNotificationCharacters();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeirComingOfAgeFemaleSceneNotificationItem heirComingOfAgeFemaleSceneNotificationItem = ...;
heirComingOfAgeFemaleSceneNotificationItem.GetSceneNotificationCharacters();
```

## See Also

- [Area Index](../)