---
title: "AllianceCampaignBehavior"
description: "Auto-generated class reference for AllianceCampaignBehavior."
---
# AllianceCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AllianceCampaignBehavior : CampaignBehaviorBase,IAllianceCampaignBehavior `
**Base:** CampaignBehaviorBase, IAllianceCampaignBehavior
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs

## Overview

Auto-generated stub for `AllianceCampaignBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

### SyncData
`public override void SyncData(IDataStore dataStore)`

### OnAllianceOfferedToPlayer
`public void OnAllianceOfferedToPlayer(Kingdom offeringKingdom)`

### OnAllianceOfferedToPlayerKingdom
`public void OnAllianceOfferedToPlayerKingdom(Kingdom offeringKingdom)`

### OnCallToWarAgreementProposedToPlayer
`public void OnCallToWarAgreementProposedToPlayer(Kingdom proposerKingdom,Kingdom kingdomToCallToWarAgainst)`

### OnCallToWarAgreementProposedToPlayerKingdom
`public void OnCallToWarAgreementProposedToPlayerKingdom(Kingdom proposerKingdom,Kingdom kingdomToCallToWarAgainst)`

### OnCallToWarAgreementProposedByPlayer
`public void OnCallToWarAgreementProposedByPlayer(Kingdom proposedKingdom,Kingdom kingdomToCallToWarAgainst)`

### GetAllianceEndDate
`public CampaignTime GetAllianceEndDate(Kingdom kingdom1,Kingdom kingdom2)`

### OnCallToWarAgreementProposedByPlayerKingdom
`public void OnCallToWarAgreementProposedByPlayerKingdom(Kingdom proposedKingdom,Kingdom kingdomToCallToWarAgainst)`

### IsAllyWithKingdom
`public bool IsAllyWithKingdom(Kingdom kingdom1,Kingdom kingdom2)`

### StartAlliance
`public void StartAlliance(Kingdom proposerKingdom,Kingdom receiverKingdom)`

### EndAlliance
`public void EndAlliance(Kingdom kingdom1,Kingdom kingdom2)`

### HasCalledToWar
`public bool HasCalledToWar(Kingdom callingKingdom,Kingdom calledKingdom)`

### IsAtWarByCallToWarAgreement
`public bool IsAtWarByCallToWarAgreement(Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst,out Kingdom callingKingdom)`

### StartCallToWarAgreement
`public void StartCallToWarAgreement(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst,int callToWarCost,bool isPlayerPaying = false)`

### EndCallToWarAgreement
`public void EndCallToWarAgreement(Kingdom callingKingdom,Kingdom calledKingdom,Kingdom kingdomToCallToWarAgainst)`

### DenyCallToWarAgreement
`public void DenyCallToWarAgreement(Kingdom callingKingdom,Kingdom calledKingdom)`

### GetKingdomsToCallToWarAgainst
`public List<Kingdom> GetKingdomsToCallToWarAgainst(Kingdom callingKingdom,Kingdom calledKingdom)`

## See Also

- [Section index](../)
