---
title: "CanUseDoor"
description: "CanUseDoor — delegate type in TaleWorlds.CampaignSystem.Settlements.Locations. No public members of its own."
---

<!-- v147-skeleton -->
# CanUseDoor

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public delegate bool CanUseDoor(LocationCharacter locationCharacter, Location location);`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Locations/CanUseDoor.cs`

## Overview

`CanUseDoor` is a delegate type: a named method signature. It lets the engine or a subsystem call back into your code without knowing your class, which is how extension points are handed out.

## Mental Model

A delegate here is an inversion-of-control point. You supply the method; the owner of the delegate decides when it runs, on which thread, and how often.

Write the callback so that it is safe to run twice and safe to skip, because a delegate contract rarely says which.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on CanUseDoor itself in `TaleWorlds.CampaignSystem.Settlements.Locations`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// Signature, taken from the source:
bool CanUseDoor(LocationCharacter locationCharacter, Location location)

CanUseDoor handler = sender => { /* runs on the owner's thread */ };
```

## Risks and Boundaries

- There is no call-site context, so the callback must fetch anything it needs.
- Throwing inside the callback surfaces in the engine call stack, not yours.
- A delegate held past the lifetime of the method’s target is a use-after-free in spirit.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Locations/CanUseDoor.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LocationCharacter](../LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Location](../Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.

Section: [api/campaign/](../) — the other types in this bucket.
