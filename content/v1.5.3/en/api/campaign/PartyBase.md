---
title: "PartyBase"
description: "Auto-generated class reference for PartyBase."
---
# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant,IRandomOwner,IInteractablePoint `
**Base:** IBattleCombatant, IRandomOwner, IInteractablePoint
**Source:** TaleWorlds.CampaignSystem/Party/PartyBase.cs

## Overview

Auto-generated stub for `PartyBase`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnVisibilityChanged
`public void OnVisibilityChanged(bool value)`

### OnConsumedFood
`public void OnConsumedFood()`

### SetCustomOwner
`public void SetCustomOwner(Hero customOwner)`

### IsPartyUnderPlayerCommand
`public static bool IsPartyUnderPlayerCommand(PartyBase party)`

### SetLevelMaskIsDirty
`public void SetLevelMaskIsDirty()`

### OnLevelMaskUpdated
`public void OnLevelMaskUpdated()`

### SetCustomName
`public void SetCustomName(TextObject name)`

### SetCustomBanner
`public void SetCustomBanner(Banner banner)`

### GetNumberOfMissionReadyTroops
`public int GetNumberOfMissionReadyTroops()`

### IsUnderPlayersCommand
`public bool IsUnderPlayersCommand(BattleSideEnum playerSide)`

### GetNumberOfHealthyMenOfTier
`public int GetNumberOfHealthyMenOfTier(int tier)`

### CalculateCurrentStrength
`public float CalculateCurrentStrength()`

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side,MapEvent.PowerCalculationContext context)`

### GetShipsVersion
`public int GetShipsVersion()`

### GetNumberOfMenWith
`public int GetNumberOfMenWith(TraitObject trait)`

### AddPrisoner
`public int AddPrisoner(CharacterObject element,int numberToAdd)`

### AddMember
`public int AddMember(CharacterObject element,int numberToAdd,int numberToAddWounded = 0)`

### AddPrisoners
`public void AddPrisoners(TroopRoster roster)`

### AddMembers
`public void AddMembers(TroopRoster roster)`

### ToString
`public override string ToString()`

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element,int numberToAdd,bool insertAtFront = false)`

### AddToMemberRosterElementAtIndex
`public void AddToMemberRosterElementAtIndex(int index,int numberToAdd,int woundedCount = 0)`

### WoundMemberRosterElements
`public void WoundMemberRosterElements(CharacterObject elementObj,int numberToWound)`

### WoundMemberRosterElementsWithIndex
`public void WoundMemberRosterElementsWithIndex(int elementIndex,int numberToWound)`

### SetAsCameraFollowParty
`public void SetAsCameraFollowParty()`

### SetVisualAsDirty
`public void SetVisualAsDirty()`

### OnVisualsUpdated
`public void OnVisualsUpdated()`

## See Also

- [Section index](../)
