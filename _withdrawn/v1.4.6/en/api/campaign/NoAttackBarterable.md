---
title: "NoAttackBarterable"
description: "NoAttackBarterable: a public class in TaleWorlds.CampaignSystem.BarterSystem.Barterables, inheriting Barterable; 6 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/BarterSystem/Barterables/NoAttackBarterable.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NoAttackBarterable

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem.Barterables`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NoAttackBarterable : Barterable`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/NoAttackBarterable.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

NoAttackBarterable lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/BarterSystem/Barterables/NoAttackBarterable.cs. It is a public class, implementing/inheriting Barterable; the inheritance chain is NoAttackBarterable → Barterable. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NoAttackBarterable lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables`, inheritance chain NoAttackBarterable → Barterable. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/BarterSystem/Barterables/NoAttackBarterable.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StringID` | `public override string StringID` | property |
| `NoAttackBarterable` | `public NoAttackBarterable(Hero originalOwner, Hero otherHero, PartyBase ownerParty, PartyBase otherParty, CampaignTime duration) : base(originalOwner, ownerParty)` | constructor |
| `Name` | `public override TextObject Name` | property |
| `Apply` | `public override void Apply()` | method |
| `GetUnitValueForFaction` | `public override int GetUnitValueForFaction(IFaction faction)` | method |
| `GetVisualIdentifier` | `public override ImageIdentifier GetVisualIdentifier()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Barterable](../Barterable/)
- [same namespace Barterable](../Barterable/)
- [same namespace DeclareWarBarterable](../DeclareWarBarterable/)
- [same namespace FiefBarterable](../FiefBarterable/)
- [same namespace GoldBarterable](../GoldBarterable/)
