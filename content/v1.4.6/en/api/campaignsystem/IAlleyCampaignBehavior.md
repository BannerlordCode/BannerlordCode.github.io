---
title: "IAlleyCampaignBehavior"
description: "IAlleyCampaignBehavior: a public interface in TaleWorlds.CampaignSystem, inheriting ICampaignBehavior; 10 exposed members (10 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs."
---
# IAlleyCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IAlleyCampaignBehavior : ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs`

## Overview

IAlleyCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs. It is a public interface, implementing/inheriting ICampaignBehavior; the inheritance chain is IAlleyCampaignBehavior → ICampaignBehavior. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAlleyCampaignBehavior is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.CampaignBehaviors) the module directory; inheritance chain IAlleyCampaignBehavior → ICampaignBehavior. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignBehaviors/IAlleyCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ICampaignBehavior](../ICampaignBehavior)
- [same namespace AgingCampaignBehavior](../AgingCampaignBehavior)
- [same namespace AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [same namespace BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [same namespace BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
