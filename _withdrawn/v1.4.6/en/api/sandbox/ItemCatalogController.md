---
title: "ItemCatalogController"
description: "ItemCatalogController: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 8 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/ItemCatalogController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemCatalogController

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class ItemCatalogController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/ItemCatalogController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ItemCatalogController lives in the SandBox module, source file SandBox/Missions/MissionLogics/ItemCatalogController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is ItemCatalogController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 3 methods, 1 properties, 2 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemCatalogController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain ItemCatalogController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/ItemCatalogController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<ItemObject>AllItems` | property |
| `ItemCatalogController` | `public ItemCatalogController()` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `BeforeCatalogTick;` | `public event ItemCatalogController.BeforeCatalogTickDelegate BeforeCatalogTick;` | event |
| `AfterCatalogTick;` | `public event Action AfterCatalogTick;` | event |
| `BeforeCatalogTickDelegate` | `public delegate void BeforeCatalogTickDelegate(int currentItemIndex);` | method |
| `BeforeCatalogTickDelegate` | `public delegate void BeforeCatalogTickDelegate(int currentItemIndex)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
