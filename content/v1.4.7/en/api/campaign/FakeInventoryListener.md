---
title: "FakeInventoryListener"
description: "FakeInventoryListener — class in TaleWorlds.CampaignSystem.Inventory. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# FakeInventoryListener

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class FakeInventoryListener : InventoryListener`  
**Base:** `InventoryListener`  
**Source:** `TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs`

## Overview

`FakeInventoryListener` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends InventoryListener, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Instance members** (5): `GetGold`, `GetTraderName`, `SetGold`, `OnTransaction`, `GetOppositeParty`.
- **Extension points** (5): `GetGold`, `GetTraderName`, `SetGold`, `OnTransaction`, `GetOppositeParty`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetGold` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetOppositeParty` | method (override) | Overrides the base member. Takes no arguments. Returns `PartyBase`. Read path: prefer it over reaching for the backing store. |
| `GetTraderName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `OnTransaction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetGold` | method (override) | Overrides the base member. Takes 1 argument: `int gold`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// FakeInventoryListener exposes no public members in TaleWorlds.CampaignSystem.Inventory.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [InventoryListener](../InventoryListener/) — `TaleWorlds.CampaignSystem.Inventory`.

Section: [api/campaign/](../) — the other types in this bucket.
