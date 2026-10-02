---
title: "LocationCharacter"
description: "LocationCharacter: a public class in TaleWorlds.CampaignSystem; 22 exposed members (4 methods, 14 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs."
---
# LocationCharacter

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LocationCharacter`
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs`

## Overview

LocationCharacter lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs. It is a public class; the inheritance chain is LocationCharacter. It exposes 22 public/protected members: 4 methods, 14 properties, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LocationCharacter is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Settlements.Locations) the module directory; inheritance chain LocationCharacter. The surface is property-led (properties 14/22, methods 4/22), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public CharacterObject Character` | property |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin` | property |
| `AgentData` | `public AgentData AgentData` | property |
| `UseCivilianEquipment` | `public bool UseCivilianEquipment` | property |
| `ActionSetCode` | `public string ActionSetCode` | property |
| `AlarmedActionSetCode` | `public string AlarmedActionSetCode` | property |
| `SpecialTargetTag` | `public string SpecialTargetTag` | property |
| `ForceSpawnInSpecialTargetTag` | `public bool ForceSpawnInSpecialTargetTag` | property |
| `AddBehaviors` | `public LocationCharacter.AddBehaviorsDelegate AddBehaviors` | property |
| `AfterAgentCreated` | `public LocationCharacter.AfterAgentCreatedDelegate AfterAgentCreated` | property |
| `FixedLocation` | `public bool FixedLocation` | property |
| `MemberOfAlley` | `public Alley MemberOfAlley` | property |
| `SpecialItem` | `public ItemObject SpecialItem` | property |
| `LocationCharacter` | `public LocationCharacter(AgentData agentData, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate, string spawnTag, bool fixedLocation, LocationCharacter.CharacterRelations characterRelation, string actionSetCode, bool useCivilianEquipment, bool isFixedCharacter = false, ItemObject specialItem = null, bool isHidden = false, bool isVisualTracked = false, bool overrideBodyProperties = true, LocationCharacter.AfterAgentCreatedDelegate afterAgentCreated = null, bool forceSpawnOnSpecialTargetTag = false)` | constructor |
| `SetAlleyOfCharacter` | `public void SetAlleyOfCharacter(Alley alley)` | method |
| `CreateBodyguardHero` | `public static LocationCharacter CreateBodyguardHero(Hero hero, MobileParty party, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate)` | method |
| `AddBehaviorsDelegate` | `public delegate void AddBehaviorsDelegate(IAgent agent);` | method |
| `AfterAgentCreatedDelegate` | `public delegate void AfterAgentCreatedDelegate(IAgent agent);` | method |
| `CharacterRelations` | `public enum CharacterRelations` | property |
| `AddBehaviorsDelegate` | `public delegate void AddBehaviorsDelegate(IAgent agent)` | nested type |
| `AfterAgentCreatedDelegate` | `public delegate void AfterAgentCreatedDelegate(IAgent agent)` | nested type |
| `CharacterRelations` | `public enum CharacterRelations` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AccompanyingCharacter](../AccompanyingCharacter)
- [same namespace CanUseDoor](../CanUseDoor)
- [same namespace CreateLocationCharacterDelegate](../CreateLocationCharacterDelegate)
- [same namespace Location](../Location)
