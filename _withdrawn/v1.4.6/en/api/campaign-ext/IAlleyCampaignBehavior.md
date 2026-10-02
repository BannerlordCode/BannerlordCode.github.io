---
title: "IAlleyCampaignBehavior"
description: "IAlleyCampaignBehavior: a public interface in TaleWorlds.CampaignSystem.CampaignBehaviors, inheriting ICampaignBehavior; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IAlleyCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IAlleyCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.CampaignBehaviors)

## Overview

IAlleyCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs. It is a public interface, implementing/inheriting ICampaignBehavior; the inheritance chain is IAlleyCampaignBehavior → ICampaignBehavior. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAlleyCampaignBehavior lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.CampaignBehaviors`), namespace `TaleWorlds.CampaignSystem.CampaignBehaviors`, inheritance chain IAlleyCampaignBehavior → ICampaignBehavior. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetIsPlayerAlleyUnderAttack` | `bool GetIsPlayerAlleyUnderAttack(Alley alley);` | method |
| `GetPlayerOwnedAlleyTroopCount` | `int GetPlayerOwnedAlleyTroopCount(Alley alley);` | method |
| `GetResponseTimeLeftForAttackInDays` | `int GetResponseTimeLeftForAttackInDays(Alley alley);` | method |
| `AbandonAlleyFromClanMenu` | `void AbandonAlleyFromClanMenu(Alley alley);` | method |
| `GetAssignedClanMemberOfAlley` | `Hero GetAssignedClanMemberOfAlley(Alley alley);` | method |
| `IsHeroAlleyLeaderOfAnyPlayerAlley` | `bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero);` | method |
| `List` | `List<Hero>GetAllAssignedClanMembersForOwnedAlleys();` | method |
| `ChangeAlleyMember` | `void ChangeAlleyMember(Alley alley, Hero newAlleyLead);` | method |
| `OnPlayerRetreatedFromMission` | `void OnPlayerRetreatedFromMission();` | method |
| `OnPlayerDiedInMission` | `void OnPlayerDiedInMission();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ICampaignBehavior](../../campaign/ICampaignBehavior/)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior/)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior/)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior/)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior/)
