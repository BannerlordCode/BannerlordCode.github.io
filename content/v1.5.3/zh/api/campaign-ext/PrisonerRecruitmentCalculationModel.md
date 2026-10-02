---
title: "PrisonerRecruitmentCalculationModel"
description: "PrisonerRecruitmentCalculationModel 的自动生成类参考。"
---
# PrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerRecruitmentCalculationModel : MBGameModel<PrisonerRecruitmentCalculationModel> `
**Base:** MBGameModel<PrisonerRecruitmentCalculationModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs

## 概述

`PrisonerRecruitmentCalculationModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetConformityNeededToRecruitPrisoner
`public abstract int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

### GetConformityChangePerHour
`public abstract ExplainedNumber GetConformityChangePerHour(PartyBase party,CharacterObject character)`

### GetPrisonerRecruitmentMoraleEffect
`public abstract float GetPrisonerRecruitmentMoraleEffect(PartyBase party,CharacterObject character,int num)`

### IsPrisonerRecruitable
`public abstract bool IsPrisonerRecruitable(PartyBase party,CharacterObject character,out int conformityNeeded)`

### ShouldPartyRecruitPrisoners
`public abstract bool ShouldPartyRecruitPrisoners(PartyBase party)`

### CalculateRecruitableNumber
`public abstract int CalculateRecruitableNumber(PartyBase party,CharacterObject character)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
