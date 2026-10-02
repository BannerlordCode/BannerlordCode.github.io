---
title: "DeclareWarBarterable"
description: "DeclareWarBarterable: a public class in TaleWorlds.CampaignSystem.BarterSystem.Barterables, inheriting Barterable; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DeclareWarBarterable

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem.Barterables`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DeclareWarBarterable : Barterable`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

DeclareWarBarterable lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs. It is a public class, implementing/inheriting Barterable; the inheritance chain is DeclareWarBarterable → Barterable. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeclareWarBarterable lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables`, inheritance chain DeclareWarBarterable → Barterable. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StringID` | `public override string StringID` | property |
| `DeclaringFaction` | `public IFaction DeclaringFaction` | property |
| `OtherFaction` | `public IFaction OtherFaction` | property |
| `Name` | `public override TextObject Name` | property |
| `DeclareWarBarterable` | `public DeclareWarBarterable(IFaction declaringFaction, IFaction otherFaction) : base(declaringFaction.Leader, null)` | constructor |
| `Apply` | `public override void Apply()` | method |
| `GetUnitValueForFaction` | `public override int GetUnitValueForFaction(IFaction faction)` | method |
| `GetVisualIdentifier` | `public override ImageIdentifier GetVisualIdentifier()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Barterable](../Barterable/)
- [same namespace Barterable](../Barterable/)
- [same namespace FiefBarterable](../FiefBarterable/)
- [same namespace GoldBarterable](../GoldBarterable/)
- [same namespace ItemBarterable](../ItemBarterable/)
