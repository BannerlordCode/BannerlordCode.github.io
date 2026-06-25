---
title: "WarMapNotification"
description: "Auto-generated class reference for WarMapNotification."
---
# WarMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WarMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/WarMapNotification.cs`

## Overview

`WarMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |
| `FirstFaction` | `public IFaction FirstFaction { get; }` |
| `SecondFaction` | `public IFaction SecondFaction { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
WarMapNotification instance = ...;
```

## See Also

- [Area Index](../)