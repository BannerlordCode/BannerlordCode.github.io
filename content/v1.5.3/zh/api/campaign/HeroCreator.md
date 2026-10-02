---
title: "HeroCreator"
description: "HeroCreator 的自动生成类参考。"
---
# HeroCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class HeroCreator `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/HeroCreator.cs

## 概述

`HeroCreator` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/HeroCreator.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateNotable
`public static Hero CreateNotable(Occupation occupation,Settlement settlement = null) `

### CreateSpecialHero
`public static Hero CreateSpecialHero(CharacterObject template,Settlement bornSettlement = null,Clan faction = null,Clan supporterOfClan = null,int age = -1) `

### CreateChild
`public static Hero CreateChild(CharacterObject template,Settlement bornSettlement,Clan clan,int age) `

### CreateRelativeNotableHero
`public static Hero CreateRelativeNotableHero(Hero relative) `

### CreateBasicHero
`public static bool CreateBasicHero(string stringId,CharacterObject character,out Hero hero,bool isAlive = true) `

### DeliverOffSpring
`public static Hero DeliverOffSpring(Hero mother,Hero father,bool isOffspringFemale) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
