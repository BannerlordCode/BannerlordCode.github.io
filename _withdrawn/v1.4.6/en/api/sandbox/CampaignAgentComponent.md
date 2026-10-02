---
title: "CampaignAgentComponent"
description: "CampaignAgentComponent: a public class in SandBox, inheriting AgentComponent; 10 exposed members (7 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/CampaignAgentComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignAgentComponent

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class CampaignAgentComponent : AgentComponent`
**File:** `SandBox/CampaignAgentComponent.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CampaignAgentComponent lives in the SandBox module, source file SandBox/CampaignAgentComponent.cs. It is a public class, implementing/inheriting AgentComponent; the inheritance chain is CampaignAgentComponent → AgentComponent. It exposes 10 public/protected members: 7 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignAgentComponent lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox`, inheritance chain CampaignAgentComponent → AgentComponent. The surface is method-led (methods 7/10, properties 2/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignAgentComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentNavigator` | `public AgentNavigator AgentNavigator` | property |
| `OwnerParty` | `public PartyBase OwnerParty` | property |
| `CampaignAgentComponent` | `public CampaignAgentComponent(Agent agent) : base(agent)` | constructor |
| `CreateAgentNavigator` | `public AgentNavigator CreateAgentNavigator(LocationCharacter locationCharacter)` | method |
| `CreateAgentNavigator` | `public AgentNavigator CreateAgentNavigator()` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | method |
| `OnTick` | `public override void OnTick(float dt)` | method |
| `GetMoraleDecreaseConstant` | `public override float GetMoraleDecreaseConstant()` | method |
| `GetMoraleAddition` | `public override float GetMoraleAddition()` | method |
| `OnStopUsingGameObject` | `public override void OnStopUsingGameObject()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentComponent](../../mission-ext/AgentComponent/)
- [same namespace Add1000GoldCheat](../Add1000GoldCheat/)
- [same namespace Add100InfluenceCheat](../Add100InfluenceCheat/)
- [same namespace Add100RenownCheat](../Add100RenownCheat/)
- [same namespace AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
