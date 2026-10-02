---
title: "InventoryListener"
description: "InventoryListener — class in TaleWorlds.CampaignSystem.Inventory. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# InventoryListener

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class InventoryListener`  
**Source:** `TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs`

## Overview

`InventoryListener` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Instance members** (5): `GetGold`, `GetTraderName`, `SetGold`, `GetOppositeParty`, `OnTransaction`.
- **Extension points** (5): `GetGold`, `GetTraderName`, `SetGold`, `GetOppositeParty`, `OnTransaction`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetGold` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetOppositeParty` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `PartyBase`. Read path: prefer it over reaching for the backing store. |
| `GetTraderName` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `OnTransaction` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetGold` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `int gold`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
// InventoryListener exposes no public members in TaleWorlds.CampaignSystem.Inventory.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
