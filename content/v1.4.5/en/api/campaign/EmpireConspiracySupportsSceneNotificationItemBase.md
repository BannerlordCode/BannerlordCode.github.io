---
title: "EmpireConspiracySupportsSceneNotificationItemBase"
description: "Auto-generated class reference for EmpireConspiracySupportsSceneNotificationItemBase."
---
# EmpireConspiracySupportsSceneNotificationItemBase

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EmpireConspiracySupportsSceneNotificationItemBase : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/EmpireConspiracySupportsSceneNotificationItemBase.cs`

## Overview

`EmpireConspiracySupportsSceneNotificationItemBase` lives in `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `King` | `public Hero King { get; }` |

## Key Methods

### GetBanners
`public override Banner GetBanners()`

**Purpose:** **Purpose:** Reads and returns the banners value held by the this instance.

```csharp
// Obtain an instance of EmpireConspiracySupportsSceneNotificationItemBase from the subsystem API first
EmpireConspiracySupportsSceneNotificationItemBase empireConspiracySupportsSceneNotificationItemBase = ...;
var result = empireConspiracySupportsSceneNotificationItemBase.GetBanners();
```

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**Purpose:** **Purpose:** Reads and returns the scene notification characters value held by the this instance.

```csharp
// Obtain an instance of EmpireConspiracySupportsSceneNotificationItemBase from the subsystem API first
EmpireConspiracySupportsSceneNotificationItemBase empireConspiracySupportsSceneNotificationItemBase = ...;
var result = empireConspiracySupportsSceneNotificationItemBase.GetSceneNotificationCharacters();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EmpireConspiracySupportsSceneNotificationItemBase instance = ...;
```

## See Also

- [Area Index](../)