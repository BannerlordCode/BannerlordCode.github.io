---
title: "LocationEncounter"
description: "LocationEncounter 的自动生成类参考。"
---
# LocationEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationEncounter `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs

## 概述

`LocationEncounter` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddAccompanyingCharacter
`public void AddAccompanyingCharacter(LocationCharacter locationCharacter,bool isFollowing = false) `

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(LocationCharacter locationCharacter) `
`public AccompanyingCharacter GetAccompanyingCharacter(CharacterObject character) `

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(LocationCharacter locationCharacter) `
`public void RemoveAccompanyingCharacter(Hero hero) `

### RemoveAllAccompanyingCharacters
`public void RemoveAllAccompanyingCharacters() `

### OnCharacterLocationChanged
`public void OnCharacterLocationChanged(LocationCharacter locationCharacter,Location fromLocation,Location toLocation) `

### IsWorkshopLocation
`public virtual bool IsWorkshopLocation(Location location) `

### IsTavern
`public virtual bool IsTavern(Location location) `

### CreateAndOpenMissionController
`public virtual IMission CreateAndOpenMissionController(Location nextLocation,Location previousLocation = null,CharacterObject talkToChar = null,string playerSpecialSpawnTag = null) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
