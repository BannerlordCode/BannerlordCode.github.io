---
title: "PartyBase"
description: "PartyBase 的自动生成类参考。"
---
# PartyBase

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyBase : IBattleCombatant,IRandomOwner,IInteractablePoint `
**Base:** IBattleCombatant,IRandomOwner,IInteractablePoint
**Source:** TaleWorlds.CampaignSystem/Party/PartyBase.cs

## 概述

`PartyBase` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Party/PartyBase.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnVisibilityChanged
`public void OnVisibilityChanged(bool value) `

### OnConsumedFood
`public void OnConsumedFood() `

### SetCustomOwner
`public void SetCustomOwner(Hero customOwner) `

### IsPartyUnderPlayerCommand
`public static bool IsPartyUnderPlayerCommand(PartyBase party) `

### SetLevelMaskIsDirty
`public void SetLevelMaskIsDirty() `

### OnLevelMaskUpdated
`public void OnLevelMaskUpdated() `

### SetCustomName
`public void SetCustomName(TextObject name) `

### SetCustomBanner
`public void SetCustomBanner(Banner banner) `

### GetNumberOfMissionReadyTroops
`public int GetNumberOfMissionReadyTroops() `

### IsUnderPlayersCommand
`public bool IsUnderPlayersCommand(BattleSideEnum playerSide) `

### GetNumberOfHealthyMenOfTier
`public int GetNumberOfHealthyMenOfTier(int tier) `

### CalculateCurrentStrength
`public float CalculateCurrentStrength() `

### GetCustomStrength
`public float GetCustomStrength(BattleSideEnum side,MapEvent.PowerCalculationContext context) `

### GetShipsVersion
`public int GetShipsVersion() `

### GetNumberOfMenWith
`public int GetNumberOfMenWith(TraitObject trait) `

### AddPrisoner
`public int AddPrisoner(CharacterObject element,int numberToAdd) `

### AddMember
`public int AddMember(CharacterObject element,int numberToAdd,int numberToAddWounded = 0) `

### AddPrisoners
`public void AddPrisoners(TroopRoster roster) `

### AddMembers
`public void AddMembers(TroopRoster roster) `

### ToString
`public override string ToString() `

### AddElementToMemberRoster
`public int AddElementToMemberRoster(CharacterObject element,int numberToAdd,bool insertAtFront = false) `

### AddToMemberRosterElementAtIndex
`public void AddToMemberRosterElementAtIndex(int index,int numberToAdd,int woundedCount = 0) `

### WoundMemberRosterElements
`public void WoundMemberRosterElements(CharacterObject elementObj,int numberToWound) `

### WoundMemberRosterElementsWithIndex
`public void WoundMemberRosterElementsWithIndex(int elementIndex,int numberToWound) `

### SetAsCameraFollowParty
`public void SetAsCameraFollowParty() `

### SetVisualAsDirty
`public void SetVisualAsDirty() `

### OnVisualsUpdated
`public void OnVisualsUpdated() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
