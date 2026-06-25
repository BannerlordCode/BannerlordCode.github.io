---
title: "AlleyUnderAttackMapNotification"
description: "Auto-generated class reference for AlleyUnderAttackMapNotification."
---
# AlleyUnderAttackMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AlleyUnderAttackMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/AlleyUnderAttackMapNotification.cs`

## Overview

`AlleyUnderAttackMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Alley` | `public Alley Alley { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
AlleyUnderAttackMapNotification instance = ...;
```

## See Also

- [Area Index](../)