---
title: "EducationCampaignBehavior"
description: "Auto-generated class reference for EducationCampaignBehavior."
---
# EducationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase,IEducationLogic `
**Base:** CampaignBehaviorBase, IEducationLogic
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs

## Overview

Auto-generated stub for `EducationCampaignBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

### RegisterEvents
`public override void RegisterEvents()`

### GetOptionProperties
`public void GetOptionProperties(Hero child,string optionKey,List<string> previousOptions,out TextObject optionTitle,out TextObject description,out TextObject effect,out ValueTuple<CharacterAttribute,int>[] attributes,out ValueTuple<SkillObject,int>[] skills,out ValueTuple<SkillObject,int>[] focusPoints,out EducationCampaignBehavior.EducationCharacterProperties[] educationCharacterProperties)`

### GetPageProperties
`public void GetPageProperties(Hero child,List<string> previousChoices,out TextObject title,out TextObject description,out TextObject instruction,out EducationCampaignBehavior.EducationCharacterProperties[] defaultCharacterProperties,out string[] availableOptions)`

### IsValidEducationNotification
`public bool IsValidEducationNotification(EducationMapNotification data)`

### GetStageProperties
`public void GetStageProperties(Hero child,out int pageCount)`

### Finalize
`public void Finalize(Hero child,List<string> chosenOptions)`

## See Also

- [Section index](../)
